import { StyleProp, Text, TouchableOpacity, View } from "react-native"


type myprops = {
    name: string,
    handle: () => void,
    // myColor: StyleProp<string>

}


function MyButton({ name, handle, }: myprops) {


    return (
        <TouchableOpacity onPress={handle}>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default MyButton