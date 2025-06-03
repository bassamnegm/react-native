import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useCart } from '../store/cart.store'
import Card from './Card'

function Cart() {
    const cart = useCart((state) => state.cart)
    return (
        <ScrollView>
            {
                cart.map((item) => <Card flag={true} key={item.id} title={item.title} thumbnail={item.thumbnail} price={item.price} q={item.q} />)
            }
        </ScrollView>

    )
}

export default Cart