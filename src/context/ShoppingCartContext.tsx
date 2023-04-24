import { useContext, createContext, ReactNode, useState} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number 
    quantity: number 
} 

type WishItem = {
    id: number 
    add: number
} 

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    addWish: (id: number) => void 
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void   
    cartQuantity: number 
    wishQuantity: number
    cartItems: CartItem[]
    wish: WishItem[]
    rem: () => void 
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [wish, setWish] = useLocalStorage<WishItem[]>("wish",[])
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )
    const wishQuantity = wish.reduce(
        (quantity, item) => item.add + quantity,
        0
    )


    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else return currItems.filter(item => item.id !== id)
        })
    }

    function addWish(id: number) {
        setWish(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, add: 1}]
            } else return currItems.filter(item => item.id !== id)
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item 
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    function rem() {
        setCartItems(currItems => {
            return currItems.filter(item => item.quantity = 0)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, addWish, decreaseCartQuantity, removeFromCart, rem, wish, cartItems, cartQuantity, wishQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}