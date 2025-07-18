import React from "react";
import toast from "react-hot-toast";
import axiosClient from "../utils/axiosClient";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [ isLoading, setIsLoading ] = React.useState(false);
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

    const { handleSetUser } = useAppContext();
    const navigate = useNavigate();

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

    const handleLogin = async (event: Event) => {
        event.preventDefault();
        
        try {
            const { email, password } = inputs.login;
            if(!email) throw new Error("Enter email address");
            if(!password) throw new Error("Enter password");

            setIsLoading(true);

            const { data } = await axiosClient.post('user/login', inputs.login)

            const { token } = data.data;

            localStorage.setItem('authToken', token);

            const { data: response } = await axiosClient.get('user/profile-details');
            const { userData, ...rest } = response.data;

            handleSetUser({
                ...userData,
                ...rest,
                token,
            })
            
            navigate("/");

        } catch(error) {
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

            setTimeout(() => navigate("/OTP"), 1000);

        } catch(error) {
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
             
        } catch(error) {
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
            
        } catch(error) {
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

            navigate("/");

        } catch(error) {
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

            navigate("/OTP");
             
        } catch(error) {
             toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        inputs,
        isLoading,
        responses,
        handleLogin,
        handleInput,
        handleRegister,
        handleForgotPassword,
        handleValidateOtp,
        handleResetPassword,
        handleVerifyEmail,
    }
}

export default useAuth;