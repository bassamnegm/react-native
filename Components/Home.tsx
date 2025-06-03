import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { useCounterStore } from "../store/counter.store";
function Home() {

    const count = useCounterStore((state) => state.count);
    const [arr, setArr] = useState<string[]>(["Ahmed", "Ali", "sayed", "mohamed", "aya 7age",]);
    useEffect(() => {
        console.log("init component -- rerender")
    });
    useEffect(() => {
        console.log("once time after mount");
    }, [])
    function drawItem({ item }: any) {
        return <Text style={styles.txt} >{item}</Text>
    }
    return (
        <View>
            <Text style={{ fontSize: 50 }}>{count}</Text>
            <FlatList keyExtractor={(index) => index.toString()} data={arr} renderItem={drawItem} />
        </View>
        // <ScrollView horizontal={true}>
        //     {
        //         arr.map((item, index) => <Text style={styles.txt} key={index}>{item}</Text>)
        //     }        </ScrollView>
    )

}
const styles = StyleSheet.create({
    txt: {
        borderColor: "red",
        borderWidth: 10,
        fontSize: 50,
        margin: 10

    }
})
export default Home;