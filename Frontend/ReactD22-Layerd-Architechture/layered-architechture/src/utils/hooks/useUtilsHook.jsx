import { useDispatch } from 'react-redux';
import { hydrateUserApi } from '../../features/auth/api/authApi';
import { addUser, toggleLoading } from '../../features/auth/state/authSlice';

export const useUtilsHook = () => {

    let dispatch = useDispatch();
    

    const hydratedUser = async ()=>{
        console.log("Hydrating user from localStorage...");
        try {
            let res =  await hydrateUserApi();
            console.log("Hydrated user data:", res);
            dispatch(addUser(res)); // Dispatch the action to add user data to the Redux store
        }catch (error) {
            console.error("Error occurred while hydrating user:", error);
            dispatch(toggleLoading()); // Set isLoading to false in case of an error
        }
        
    }

    return{
        hydratedUser
    }
}