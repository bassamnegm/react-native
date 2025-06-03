
import { create } from "zustand";
interface cartStore {
    cart: any[],
    loading: boolean,
    addToCart: (item: any) => void,
    removeCart: (title: string) => void,
    clear: () => void
}
export const useCart = create<cartStore>((set) => ({
    cart: [],
    loading: false,
    addToCart: (item: any) => {
        set((state) => {

            let index = state.cart.findIndex((data) => data.title == item.title)
            if (index == -1) {
                return {
                    cart: [...state.cart, { ...item, q: 1 }]
                }
            }
            else {
                state.cart[index].q = state.cart[index].q + 1
                return {
                    cart: [...state.cart]

                }
            }
        })

    },
    removeCart: (title: string) => {
        set((state) => {
            let newcart = state.cart.filter((item) => item.title != title)
            return {
                cart: newcart
            }

        })

    },
    clear: () => {

    }
}))