import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

//This tells Axios to send cookies and authentication data with requests.
//Normally browsers do not send cookies to another domain automatically.
axios.defaults.withCredentials = true;

//This sets the default backend URL for all requests.
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch Seller Status
    const fetchSeller = async () => {
    try {
        const { data } = await axios.get('/api/seller/is-auth');
        setIsSeller(data.success);
    } catch (error) {
        console.log(error)
        setIsSeller(false);
    }
};

    // Fetch User Auth status, User Data & cart Items
    const fetchUser = async ()=> {
        try{
            const {data} = await axios.get('/api/user/is-auth');
            if (data.success) {
                setUser(data.user);
                setCartItems(data.user.cartItems)
            }
        } catch(error) {
            console.log(error)
            setUser(null)
        }
    }

    // Fectch All Products 
    const fetchProducts = async () => {
        try{
            const { data } = await axios.get('/api/product/list')
            if(data.success) {
                setProducts(data.products)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Adding Product to cart 
    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added to Cart");
    }

    // Update CartItem Quantity
    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData)
        toast.success("Cart Updated");
    }

    // Remove Product from Cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]) {
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0) {
                delete cartData[itemId]
            }
        }
        toast.success("Removed from Cart");
        setCartItems(cartData);
    }

    {/*------- Get CartItem Count------*/}
    const getCartCount = ()=> {
        let totalCount = 0;

        for(const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    {/*------- Get Cart Total Amount------*/}
    const getCartAmount = () => {
        let totalAmount = 0;

        for(const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if(cartItems[items] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    }

    useEffect(() => {
        fetchUser()
        fetchSeller()
        fetchProducts()
    },[])

    // Update DataBase CartItems
    useEffect(()=> {
        console.log("Cart updated", cartItems);
        const updateCart = async ()=> {
            try {
                const { data } = await axios.post('/api/cart/update', {userId: user._id, cartItems})
                if (!data.success) {
                    toast.error(data.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }

        if(user && Object.keys(cartItems).length > 0) {
            updateCart();
        }
    }, [cartItems,user])

    const value = {navigate, user, setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin,
        products, setProducts, currency, cartItems, setCartItems, addToCart, updateCartItem, removeFromCart,
        searchQuery, setSearchQuery, getCartCount, getCartAmount, axios, fetchProducts
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}