import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { useAppContext } from "../context/AppContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCart from "./useCart";
import { Cart } from "../types/cart.type";
import { getPersistedStorage } from "../utils/storage";
import useWishlist from "./useWishlist";

const useAuth = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
    const [ isSaving, setIsSaving ] = React.useState(false);
    const [ inputs, setInputs ] = React.useState({
        login: {
            email: "",
            password: "",
        },
        signup: {
            firstname : "",
            lastname : "",
            email : "",
            country_id : "",
            phone_number : "",
            password : "",
            password_confirmation : "",
            referral_code : ""
        },
        forgotPassword: {
            email: "",
        },
        resetPassword: {
            code: "",
            password: "",
            password_confirmation: "",
        },
        verifyEmail: {
            email: "",
            purpose: "Email Verification"
        },
    })
    const [ responses, setResponses ] = React.useState({
        forgotPassword: {
            status: "",
            message: ""
        }
    })

    const { syncCarts } = useCart({ shouldGetCart: false });
    const { syncWishlists } = useWishlist({ shouldGetWishlist: false });
    const { handleSetUser, setBusinessAccounts } = useAppContext();
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();

    const handleInput = (section_field: string, value: any) => {
        const [ section, field ] = section_field.split(".");

        setInputs(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }))
    }

    const handleLogin = async (event?: Event) => {
        event?.preventDefault();
        
        try {
            const { email, password } = inputs.login;
            if(!email) throw new Error("Enter email address");
            if(!password) throw new Error("Enter password");

            setIsLoading(true);

            const { data: response } = await axiosClient.post('user/login', inputs.login)

            const { token, data } = response.data;

            localStorage.setItem('authToken', token);

            const [ profileDetailsData, businessAccountData ] = await Promise.all([
                axiosClient.get('user/profile-details'),
                data.userType === 'BUSINESS' && axiosClient.get('user/business/list-business-account'),
            ])

            const { userData, ...rest } = profileDetailsData.data.data;

            handleSetUser({
                ...userData,
                ...rest,
                token,
            })
            if(data.userType === 'BUSINESS' && businessAccountData) { 
                setBusinessAccounts(businessAccountData.data.data);
            }

            await Promise.all([
                syncCarts(),
                syncWishlists(),
            ]);

            sessionStorage.removeItem('SIGNUP_DETAILS');

            navigate("/");

        } catch(error: any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleRegister = async (event: Event, user_type: string) => {
        event.preventDefault();

        try {
            const { 
                firstname,
                lastname,
                email, 
                country_id,
                phone_number,
                password,
                password_confirmation,
            
            } = inputs.signup;

            if(!firstname) throw new Error("Enter first name");
            if(!lastname) throw new Error("Enter last name");
            if(!email) throw new Error("Enter email address");
            if(!country_id) throw new Error("Enter country");
            if(!phone_number) throw new Error("Enter your phone number");
            if(!password) throw new Error("Enter password");
            if(!password_confirmation) throw new Error("Retype your password");
            if(password !== password_confirmation) throw new Error("Passwords does not match");

            setIsLoading(true);

            const { data } = await axiosClient.post('user/account-creation', { ...inputs.signup, user_type });

            if(data.statusCode !== 200) {
                throw new Error(data.message);
            }

            toast.success(data.message);

            sessionStorage.setItem('SIGNUP_DETAILS', JSON.stringify({
                email,
                password
            }))

            setTimeout(() => navigate("/OTP"), 1000);

        } catch(error: any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleForgotPassword = async (event: Event) => {
        event.preventDefault();

        try {
            const { email } = inputs.forgotPassword;

            if(!email) throw new Error("Enter email address");

            setIsLoading(true);

            const { data } = await axiosClient.post("user/forgot-password", inputs.forgotPassword);

            const message = data.message;
            const status = data.statusCode === 200 ? "success" : "error";

            setResponses(prev => ({
                ...prev,
                forgotPassword: {
                    status,
                    message
                }
            }))

            setTimeout(() => navigate("/UpdatePassword"), 1500);
             
        } catch(error: any) {
            setResponses(prev => ({
                ...prev,
                forgotPassword: {
                    status: "error",
                    message: error.message
                }
            }))
        } finally {
            setIsLoading(false);
        }
    }

    const handleResetPassword = async (event: Event) => {
        event.preventDefault();

        try {
            const { code, password, password_confirmation } = inputs.resetPassword;

            if(!code) throw new Error("Enter OTP sent to your email address");
            if(!password) throw new Error("Enter password");
            if(!password_confirmation) throw new Error("Retype your password");
            if(password !== password_confirmation) throw new Error("Passwords does not match");

            setIsLoading(true);

            const { data } = await axiosClient.post("user/reset-password", inputs.resetPassword);

            toast.success(data.message);

            setTimeout(() => navigate("/signin"), 1000);
            
        } catch(error: any) {
            toast.error(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    const handleValidateOtp = async (code: string) => {
        try {
            if(!code) throw new Error("Enter OTP sent to your email address");

            setIsLoading(true);

            await axiosClient.post("user/otp-verification", { code });

            const signupDetails = JSON.parse(sessionStorage.getItem('SIGNUP_DETAILS') || '{}');
            const { email, password } = signupDetails;

            if(!email) {
                return navigate('/signin');
            }

            setInputs(prev => ({
                ...prev,
                login: {
                    email,
                    password
                }
            }))

            await handleLogin();

        } catch(error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleVerifyEmail = async (event: Event) => {
        event.preventDefault();

        try {
            const { email } = inputs.verifyEmail;

            if(!email) throw new Error("Enter email address");

            setIsLoading(true);

            await axiosClient.post("user/request-otp", inputs.verifyEmail);

            navigate(`/OTP?email=${email}`);
             
        } catch(error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleResendOtp = async () => {
        try {
            setIsSaving(true);
            const signupDetails = JSON.parse(sessionStorage.getItem('SIGNUP_DETAILS') || '{}');
            const { email } = signupDetails;

            if(!email) {
                return navigate('/signin');
            }

            const { data: response } =  await axiosClient.post("user/request-otp", { email });
            toast.success(response.message);

        } catch(error: any) {
            toast.error(error.message);
        } finally {
            setIsSaving(false);
        }
    }

    return {
        inputs,
        isLoading,
        responses,
        isSaving,
        handleLogin,
        handleInput,
        handleRegister,
        handleForgotPassword,
        handleValidateOtp,
        handleResetPassword,
        handleVerifyEmail,
        handleResendOtp,
    }
}

export default useAuth;