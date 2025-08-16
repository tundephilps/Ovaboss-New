import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import { FullProduct } from "../types/product.type";
import toast from "react-hot-toast";
import { AddToWishlistProps, Wishlist, UseWishlist } from "../types/wishlist.type";
import { getPersistedStorage, persistStorage } from "../utils/storage";

let fetchedWishlists: Wishlist[] = [];

const useWishlist = ({ shouldGetWishlist }: UseWishlist = {}) => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ isSaving, setIsSaving ] = React.useState(false);
    const [ wishlists, setWishlists ] = React.useState<Wishlist[]>([]);

    const { setTotalWishlists, user } = useAppContext();

    const getAllWishlists = async () => {
        try {
            setIsLoading(true);
            // if(fetchedWishlists.length) {
            //     setWishlists(fetchedWishlists);
            //     return;
            // }

            let wishlistItems: Wishlist[] = [];

            if(user) {
                const { data: response } = await axiosClient.get('/product/list-wish-list');
                wishlistItems = response.data;
                persistStorage('wishlists', JSON.stringify(wishlistItems));
            } else {
                const wishlists = getPersistedStorage<Wishlist[]>('wishlists');
                if(wishlists) wishlistItems = wishlists;
            }

            setTotalWishlists(wishlistItems.length);
            setWishlists(wishlistItems);
            fetchedWishlists = wishlistItems;

            return wishlistItems;
        } catch(error) {
            return [];
        } finally {
            setIsLoading(false);
        }
    }

    const syncWishlists = async () => {
        const { data: response } = await axiosClient.get('/product/list-wish-list');
        const serverWishlists = response.data;
        const localWishlists = getPersistedStorage<Wishlist[]>('wishlists') || [];

        const allServerCardIds = serverWishlists.map(item => item.productId);
        const itemsNotInServer = localWishlists.filter(item => !allServerCardIds.includes(item.productId));

        await Promise.all(itemsNotInServer.map(async (item) =>  {
            handleAddToWishlist({
                productId: item.productId,
                variantId: item.variantDetails.id,
                shouldShowToast: false,
                addToServer: true,
            });
        }))
    }

    const handleRemoveWishlist = async (product_id: number, variant_id: number, shouldShowToast = true) => {
        try {
            setIsSaving(true);
            let message = 'Product has been removed from wishlist';

            if(user) {
                const { data: response } = await axiosClient.post('/product/remove-wish-list', {
                    product_id,
                    variant_id,
                });
                message = response.message;
            }
            
            const allWishlists = getPersistedStorage<Wishlist[]>('wishlists') || [];
            const filteredWishlists = allWishlists.filter(item => item.productId !== product_id && item.variantDetails.id !== variant_id);
            persistStorage('wishlists', JSON.stringify(filteredWishlists));
           
            setWishlists(prev => prev.filter(item => item.productId !== product_id && item.variantDetails.id !== variant_id));
            setTotalWishlists(prev => prev - 1);
            if(shouldShowToast) toast.success(message);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsSaving(false);
        }
    }

    const handleAddToWishlist = async (data: AddToWishlistProps) => {
        try {
            setIsSaving(true);
            const { productId, variantId, product, shouldShowToast = true, addToServer} = data;

            if(!variantId) {
                throw new Error('Select a variant');
            }

            let message = 'Product has been added to wishlist';

            if(user || addToServer) {
                const { data: response } = await axiosClient.post('/product/add-to-wish-list', {
                    product_id: productId,
                    variant_id: variantId,
                });

                setTotalWishlists(prev => prev + 1);
                if(shouldShowToast) toast.success(response.message);

                return true;
            } 

            if(!product) return;

            const { 
                title,
                description,
                productImages,
                productVariants,
            } = product;

            const variantDetails = productVariants.find(item => item.id === variantId)!;

            const wishlistItem: Wishlist = {
                productId,
                productName: title,
                description,
                productImage: productImages[0].imageUrl,
                variantDetails: {
                    ...variantDetails,
                    variants: variantDetails.variants.map(item => ({ 
                        key: item.variantType, 
                        value: item.variant ,
                    }))
                },
            }

            const wishlists = getPersistedStorage<Wishlist[]>('wishlists') || [];
            const allWishlists = [...wishlists, wishlistItem];
            persistStorage('wishlists', JSON.stringify(allWishlists));
            setWishlists(allWishlists)
           
            setTotalWishlists(prev => prev + 1);
            if(shouldShowToast) toast.success(message);

        } catch(error) {
            toast.error(error.message);
        } finally {
            setIsSaving(false);
        }
    }

    const removeAllWishlistItems = async () => {
        persistStorage('wishlists', JSON.stringify([]));
        setWishlists([]);
        setTotalWishlists(0);
    }

    React.useEffect(() => {
        if(shouldGetWishlist) getAllWishlists();
    }, [])

    return {
        isLoading,
        isSaving,
        wishlists,
        handleAddToWishlist,
        handleRemoveWishlist,
        getAllWishlists,
        removeAllWishlistItems,
        syncWishlists,
    }
}

export default useWishlist;