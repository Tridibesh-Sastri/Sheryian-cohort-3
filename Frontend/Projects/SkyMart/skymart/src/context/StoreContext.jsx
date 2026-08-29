import { createContext, useState, useEffect } from 'react';

// consumer
export const StoreContext = createContext();

// provider
export const StoreContextProvider = ({children}) => {
    
    console.log("context Rendering.......")
    // Cart Management

    const [cartItems, setCartItems] = useState(() => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems"));
        return cartItems ? cartItems : [];
    });
    const addCartItems = (item) => {
        setCartItems((prev) => [...prev, item]);
        localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
    }

    // Consumer management

    const [consumers, setConsumers] = useState([])

    // Product Management

    const [products, setProducts] = useState([])

    
    // const addProducts = (product) => {
    //     setProducts((prev) => [...prev, product]);
    //     localStorage.setItem("products", JSON.stringify([...products, product]));
    // }

    // User Management

    const [test, setTest] = useState("bal");
    // console.log("test in StoreContext.jsx:", test);

    // useEffect(() => {
    //     const userTest = JSON.parse(localStorage.getItem("users"));
    //     console.log("users in StoreContext.jsx:", userTest);
    //     console.log("users in Login.jsx:", userTest?userTest.map((user)=>{console.log("user: ", user.name, "user email: ", user.email)}): console.log("no users found in localStorage"));
    // }, []);

    const [users, setUsers] = useState(()=>{
        const users = JSON.parse(localStorage.getItem("users"));
        console.log("users in StoreContext.jsx:", users);
        return users ? users : [];
    });

    // console.log("users in Login.jsx:", users.map((user)=>{console.log("user: ", user.name, "user email: ", user.email)}));

    const addUsers = (user) => {
        setUsers((prev) => [...prev, user]);
        localStorage.setItem("users", JSON.stringify([...users, user]));
    }

    // Authentication Management

    const [isLogin, setIsLogin] = useState(false);
    const [loginUser, setLoginUser] = useState(() => {
        const loginUser = JSON.parse(localStorage.getItem("loginUser"));
        return loginUser ? loginUser : null;
    });
    const setLoginUserAndPersist = (user) => {
        setLoginUser(user);
        localStorage.setItem("loginUser", JSON.stringify(user));
    }


    return (
        <StoreContext.Provider value = {
            { 
                cartItems, 
                setCartItems,
                addCartItems, 
                products, 
                setProducts,
                // addProducts, 
                users, 
                setUsers,
                addUsers, 
                isLogin, 
                setIsLogin,
                loginUser, 
                setLoginUser,
                setLoginUserAndPersist,
                consumers,
                setConsumers,
                test,}}>

            {children}
        </StoreContext.Provider>
    )
}