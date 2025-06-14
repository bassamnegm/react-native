import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../store/cart.store";

type productprops = {

}
function Card({ title, price, description, thumbnail, flag, q }: any) {
    const addtocart = useCart((state) => state.addToCart)
    const remove = useCart((state) => state.removeCart)

    function save() {
        if (flag) {
            remove(title)
        }
        else {
            let data = { title, price, description, thumbnail }
            console.log(data)
            addtocart(data);
        }

    }
    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.card} onPress={save}>
                <Image source={{ uri: thumbnail }} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>

                    <Text>{description}</Text>
                    <Text>{price}</Text>
                    <Text>{q}</Text>

                </View>
            </TouchableOpacity>

        </View>
    )
} const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 4, // for Android shadow
        shadowColor: '#000', // for iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginVertical: 10,
        marginHorizontal: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 180,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#777',
    },
});

export default Card;
