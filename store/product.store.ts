import axios from "axios";
import { create } from "zustand";



interface productStore {
    produtcs: any[],
    loading: boolean,
    error: any | null,
    getAll: () => Promise<void>,


}
export const useProducts = create<productStore>((set) => ({
    produtcs: [],
    loading: false,
    error: null,
    getAll: async () => {
        try {
            set((state) => ({ loading: true }));
            let res = await axios.get('https://dummyjson.com/products');
            set((state) => ({
                produtcs: res.data.products
            }))
        }
        catch (e) {
            set((state) => ({ error: e }));
        }
    }
}))