import { useNavigate } from "react-router";
import {useForm} from "react-hook-form";
import { loginUserApi } from "../api/authApi";

import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { hydrateUserApi } from "../api/authApi";

console.log("useAuthHook.jsx file rendering....");

export const useAuth = ()=>{
    const dispatch = useDispatch();
    let navigate = useNavigate();
    
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });

    // Dummy JSON login credentials for testing
    const dummyCredentials = {
        username: 'emilys',
        password: 'emilyspass',
    };

    const onSubmitLogin = async (data) => {
        console.log("Form Data:", data);

        const userData = await loginUserApi(dummyCredentials);
        localStorage.setItem("accessToken", JSON.stringify(userData.accessToken));
        dispatch(addUser(userData)); // Dispatch the action to add user data to the Redux store


        reset();
    }


    return {
        navigate,
        register,
        handleSubmit,
        reset,
        watch,
        errors,
        onSubmitLogin
    }
}