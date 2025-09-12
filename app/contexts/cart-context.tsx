"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect, useState } from "react"
import { ICart } from "@/src/interfaces/ICart"

type CartItemInput = Omit<ICart, "quantity"> | {
  id: number
  name: string
  price: number
  image: string
  category?: unknown
}

interface CartState {
  items: ICart[]
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItemInput }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { externalId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: ICart[] }

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

function normalizeInput(input: CartItemInput): Omit<ICart, "quantity"> {
  if ("externalId" in input) {
    return input
  }
  // legacy numeric id case
  const { id, ...rest } = input as any
  return {
    ...(rest as any),
    externalId: String(id),
  }
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const incoming = normalizeInput(action.payload)
      const existingItem = state.items.find((item) => item.externalId === incoming.externalId)

      let newItems: ICart[]
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.externalId === incoming.externalId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      } else {
        newItems = [...state.items, { ...incoming, quantity: 1 } as ICart]
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.externalId !== action.payload)
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items
        .map((item) =>
          item.externalId === action.payload.externalId
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0)

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "CLEAR_CART":
      return initialState

    case "LOAD_CART": {
      const totalItems = action.payload.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = action.payload.reduce((sum, item) => sum + item.price * item.quantity, 0)

      return {
        items: action.payload,
        totalItems,
        totalPrice,
      }
    }

    default:
      return state
  }
}

const CartContext = createContext<{
  state: CartState
  addItem: (item: CartItemInput) => void
  removeItem: (idOrExternalId: string | number) => void
  updateQuantity: (idOrExternalId: string | number, quantity: number) => void
  clearCart: () => void
} | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart)
        dispatch({ type: "LOAD_CART", payload: cartItems })
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(state.items))
    }
  }, [state.items, isLoaded])

  const addItem = (item: CartItemInput) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (idOrExternalId: string | number) => {
    const externalId = String(idOrExternalId)
    dispatch({ type: "REMOVE_ITEM", payload: externalId })
  }

  const updateQuantity = (idOrExternalId: string | number, quantity: number) => {
    const externalId = String(idOrExternalId)
    dispatch({ type: "UPDATE_QUANTITY", payload: { externalId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  if (!isLoaded) {
    return null
  }

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
