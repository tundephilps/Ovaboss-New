import React from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import { FullProduct } from "../types/product.type";
import toast from "react-hot-toast";
import useCart from "./useCart";
import { Cart } from "../types/cart.type";

const useProductDetails = () => {
    const { currentProduct } = useAppContext();

    const [ isLoading, setIsLoading ] = React.useState(true);
    const [ isSaving, setIsSaving ] = React.useState(false);
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

    const navigate = useNavigate();
    const { productId } = useParams();
    const { carts, isLoading: isLoadingCarts, handleAddToCart, handleRemoveCart, getAllCarts } = useCart({ shouldGetCart: true })

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


    const addToCart = async () => {
        setIsSaving(true);
        const hasAddedToCart = await handleAddToCart(String(productId), +selectedVariant.variantTypeId);
        setIsSaving(false);

        if(hasAddedToCart) await getAllCarts();
    }

    const removeCart = async () => {
        if(!productCart) {
            return toast.error('Product is not in cart');
        }
        setIsSaving(true);
        await handleRemoveCart(productCart.productId, productCart.variantDetails.id);
        setProductCart(null);
        setIsSaving(false);
    }

    React.useEffect(() => {
        getProductDetails();
    }, [])

    React.useEffect(() => {
        checkProductInCart();
    }, [carts, productDetails])

    return {
        isLoading,
        isSaving,
        productDetails,
        selectedVariant,
        isLoadingCarts,
        productCart,
        setSelectedVariant,
        handleAddToCart: addToCart,
        handleRemoveCart: removeCart,
    }
}

export default useProductDetails;