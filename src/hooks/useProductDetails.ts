import React from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import { FullProduct } from "../types/product.type";
import toast from "react-hot-toast";
import useCart from "./useCart";
import { Cart } from "../types/cart.type";
import useWishlist from "./useWishlist";
import { Wishlist } from "../types/wishlist.type";

const useProductDetails = () => {
    const { currentProduct } = useAppContext();

    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ isSaving, setIsSaving ] = React.useState({
        cart: false,
        wishlist: false,
    });
    const [ productDetails, setProductDetails ] = React.useState<FullProduct>({
        ...(currentProduct && { currentProduct }),
        productVariants: [],
    } as unknown as FullProduct);
    const [ selectedVariant, setSelectedVariant ] = React.useState({
        color: '',
        variantTypeId: '',
        variantType: '',
    });
    const [ productCart, setProductCart ] = React.useState<Cart | null>(null);
    const [ productWishlist, setProductWishlist ] = React.useState<Wishlist | null>(null);

    const navigate = useNavigate();
    const { productId } = useParams();
    const { 
        carts, 
        isLoading: isLoadingCarts, 
        handleAddToCart, 
        handleRemoveCart, 
        getAllCarts 
    } = useCart({ shouldGetCart: true });
    const { 
        wishlists, 
        isLoading: isLoadingWishlists, 
        handleAddToWishlist, 
        handleRemoveWishlist, 
        getAllWishlists 
    } = useWishlist({ shouldGetWishlist: true });

    const getProductDetails = async () => {
        try {
            const { data: response } = await axiosClient.get(`/product/fetch-product?productId=${productId}`);
            setProductDetails(response.data);
        } catch(error) {
            navigate('/');
        } finally {
            setIsLoading(false);
        }
    }

    const checkProductInCart = () => {
        const cart = carts.find(cartItem =>
            cartItem.productId === productDetails.productId &&
            productDetails.productVariants.some(
                variant => variant.id === cartItem.variantDetails.id
            )
        );

        if(cart) setProductCart(cart);
    };

    const checkProductInWishlit = () => {
        const wishlist = wishlists.find(wishlistItem =>
            wishlistItem.productId === productDetails.productId &&
            productDetails.productVariants.some(
                variant => variant.id === wishlistItem.variantDetails.id
            )
        );

        if(wishlist) setProductWishlist(wishlist);
    };


    const addToCart = async () => {
        setIsSaving(prev => ({
            ...prev,
            cart: true
        }));
        const hasAddedToCart = await handleAddToCart({
            productId: +productId!, 
            variantId: +selectedVariant.variantTypeId,
            product: productDetails,
        });
        setIsSaving(prev => ({
            ...prev,
            cart: false
        }));

        if(hasAddedToCart) await getAllCarts();
    }

    const addToWishlist = async () => {
        setIsSaving(prev => ({
            ...prev,
            wishlist: true
        }));
        const hasAddedToCart = await handleAddToWishlist({
            productId: +productId!, 
            variantId: +selectedVariant.variantTypeId,
            product: productDetails,
        });
        setIsSaving(prev => ({
            ...prev,
            wishlist: false
        }));

        if(hasAddedToCart) await getAllWishlists();
    }

    const removeCart = async () => {
        if(!productCart) {
            return toast.error('Product is not in cart');
        }
        setIsSaving(prev => ({
            ...prev,
            cart: true
        }));
        await handleRemoveCart(productCart.productId, productCart.variantDetails.id);
        setProductCart(null);
        setIsSaving(prev => ({
            ...prev,
            cart: false
        }));
    }

    const removeWishlist = async () => {
        if(!productWishlist) {
            return toast.error('Product is not in wishlist');
        }
        setIsSaving(prev => ({
            ...prev,
            wishlist: true
        }));
        await handleRemoveWishlist(productWishlist.productId, productWishlist.variantDetails.id);
        setProductWishlist(null);
        setIsSaving(prev => ({
            ...prev,
            wishlist: false
        }));
    }

    React.useEffect(() => {
        getProductDetails();
    }, [])

    React.useEffect(() => {
        checkProductInCart();
    }, [carts, productDetails])

    React.useEffect(() => {
        checkProductInWishlit();
    }, [wishlists, productDetails])

    return {
        isLoading,
        isSaving,
        productDetails,
        selectedVariant,
        isLoadingCarts,
        isLoadingWishlists,
        productCart,
        productWishlist,
        setSelectedVariant,
        handleAddToCart: addToCart,
        handleRemoveCart: removeCart,
        handleAddToWishlist: addToWishlist,
        handleRemoveWishlist: removeWishlist,
    }
}

export default useProductDetails;