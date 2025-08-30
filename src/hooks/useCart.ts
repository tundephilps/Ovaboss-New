import React from "react";
import { useAppContext } from "../context/AppContext";
import axiosClient from "../utils/axiosClient";
import toast from "react-hot-toast";
import { AddToCartProps, Cart, UseCart } from "../types/cart.type";
import { getPersistedStorage, persistStorage } from "../utils/storage";

let fetchedCarts: Cart[] = [];

const useCart = ({ shouldGetCart }: UseCart = {}) => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ isSaving, setIsSaving ] = React.useState(false);
    const [ carts, setCarts ] = React.useState<Cart[]>([]);

    const { setTotalCarts, user } = useAppContext();

    const getAllCarts = async () => {
        try {
            setIsLoading(true);
            // if(fetchedCarts.length) {
            //     setCarts(fetchedCarts);
            //     return;
            // }

            let cartItems: Cart[] = [];

            if(user) {
                const { data: response } = await axiosClient.get('/product/list-cart');
                cartItems = response.data;
                persistStorage('carts', JSON.stringify(cartItems));
            } else {
                const carts = getPersistedStorage<Cart[]>('carts');
                if(carts) cartItems = carts;
            }

            setTotalCarts(cartItems.length);
            setCarts(cartItems);
            fetchedCarts = cartItems;

            return cartItems;
        } catch(error) {
            return [];
        } finally {
            setIsLoading(false);
        }
    }

    const syncCarts = async () => {
        const { data: response } = await axiosClient.get('/product/list-cart');
        const serverCarts = response.data as Cart[];
        const localCarts = getPersistedStorage<Cart[]>('carts') || [];

        const allServerCardIds = serverCarts.map(item => item.productId);
        const itemsNotInServer = localCarts.filter(item => !allServerCardIds.includes(item.productId));

        await Promise.all(itemsNotInServer.map(async (item) =>  {
            await handleAddToCart({
                productId: item.productId,
                variantId: item.variantDetails?.id,
                shouldShowToast: false,
                quantity: item.quantity,
                addToServer: true,
            });
        }))

        setTotalCarts(localCarts.length);
    }

    const handleRemoveCart = async (product_id: number, variant_id?: number) => {
        try {
            setIsSaving(true);
            let message = 'Product has been removed from cart';

            if(user) {
                const { data: response } = await axiosClient.post('/product/remove-from-cart', {
                    product_id,
                    variant_id,
                });
                message = response.message;
            }
           
            const allCarts = getPersistedStorage<Cart[]>('carts') || [];
            const filteredCarts = allCarts.filter(item => item.productId !== product_id);
            persistStorage('carts', JSON.stringify(filteredCarts));

            setCarts(prev => prev.filter(item => item.productId !== product_id));
            setTotalCarts(prev => prev - 1);
            toast.success(message);
        } catch(error) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong removing cart');
        } finally {
            setIsSaving(false);
        }
    }

    const handleAddToCart = async (data: AddToCartProps) => {
        try {
            setIsSaving(true);
            const { 
                productId, 
                variantId, 
                product, 
                shouldShowToast = true,
                cart,
                quantity,
                addToServer,
            } = data;

            // if(!variantId) {
            //     throw new Error('Select a variant');
            // }

            if(user || addToServer) {
                const { data: response } = await axiosClient.post('/product/add-to-cart', {
                    product_id: productId,
                    variant_id: variantId,
                    quantity,
                });

                if(shouldShowToast) toast.success(response.message);
                setTotalCarts(prev => prev + 1);

                return true;
            }

            if(!product && !cart) return;


            let cartItem: Cart = {} as Cart;

            if(product) {
                const { 
                    title,
                    description,
                    productImages,
                    productVariants,
                    mainPrice,
                } = product;

                const variantDetails = productVariants?.find(item => item.id === variantId);

                cartItem = {
                    price: String(variantDetails ? variantDetails.price : mainPrice),
                    productId,
                    productName: title,
                    description,
                    productImage: productImages[0].imageUrl,
                    quantity: String(quantity),
                    variantDetails: variantDetails 
                        ? {
                            ...variantDetails,
                            variants: variantDetails.variants.map(item => ({ 
                                key: item.variantType, 
                                value: item.variant ,
                            }))
                        } : null,
                }
            }

            if(cart) cartItem = cart;

            const carts = getPersistedStorage<Cart[]>('carts') || [];
            const allCarts = [...carts, cartItem];
            persistStorage('carts', JSON.stringify(allCarts));
            setCarts(allCarts);
            
            setTotalCarts(prev => prev + 1);
            if(shouldShowToast) toast.success('Product has been added to cart');

        } catch(error) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong adding to cart');
        } finally {
            setIsSaving(false);
        }
    }

    const removeAllCartItems = async () => {
        persistStorage('carts', JSON.stringify([]));
        setCarts([]);
        setTotalCarts(0);
    }

    React.useEffect(() => {
        if(shouldGetCart) getAllCarts();
    }, [])

    return {
        isLoading,
        isSaving,
        carts,
        handleAddToCart,
        handleRemoveCart,
        getAllCarts,
        removeAllCartItems,
        syncCarts,
    }
}

export default useCart;