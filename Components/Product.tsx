import { ScrollView, Text, View } from "react-native";
import axios from 'axios';
import { useEffect, useState } from "react";
import Card from "./Card";
import { useFetch } from "../Hooks/useFetch";
type productView = {
    id: number,
    title: string,
    price: number,
    description: string,
    thumbnail: string
}
function Product() {
    const [products, setProducts] = useState<productView[]>([])
    const { data } = useFetch<productView>('https://dummyjson.com/products');
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(res => {
            // console.log(res.data.products);
            setProducts([...res.data.products])
        }
        )
    }, [])






    return (
        <ScrollView>
            {
                data.map((item) => <Card key={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price} />)
            }
        </ScrollView>
    )
}

export default Product;