import React from 'react'
import { Button, Text, View } from 'react-native'
import { useCounter } from '../Hooks/useCounter'

function Counter() {
    const { count, inc, dec } = useCounter();
    return (
        <View>
            <Text>{count}</Text>
            <Button title='increae' onPress={inc} />
            <Button title='decrease' onPress={dec} />

        </View>
    )
}

export default Counter