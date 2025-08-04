import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import axiosClient from "../utils/axiosClient";
import { FullProduct } from "../types/product.type";
import toast from "react-hot-toast";
import useCart from "./useCart";
import { Cart } from "../types/cart.type";

const useProductDetails = () => {
    const { currentProduct } = useAppContext();

    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ isSaving, setIsSaving ] = React.useState(false);
    const [ productDetails, setProductDetails ] = React.useState<FullProduct>({
        ...(currentProduct && { currentProduct }),
        productVariants: [],
    } as unknown as FullProduct);
    const [ selectedVariant, setSelectedVariant ] = React.useState<number>();
    const [ productCart, setProductCart ] = React.useState<Cart>();

    const { productId } = useParams();
    const { carts, isLoading: isLoadingCarts, handleAddToCart, handleRemoveCart } = useCart({ shouldGetCart: true })

    const getProductDetails = async () => {
        try {
            const { data: response } = await axiosClient.get(`/product/business/fetch-product?productId=${productId}`);
            setProductDetails(response.data);
        } catch(error) {

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


    const addToCart = () => {
        handleAddToCart(String(productId), selectedVariant)
    }

    const removeCart = () => {
        if(!productCart) {
            return toast.error('Product is not in cart');
        }

        handleRemoveCart(productCart.productId, productCart.variantDetails.id)
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