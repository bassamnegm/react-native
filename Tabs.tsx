
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Form from './Components/Form';
import Home from './Components/Home';
import Product from './Components/Product';
import MyCount from './Components/MyCount';
import Cart from './Components/Cart';

function Tabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarActiveTintColor: "red",
                tabBarIcon: ({ color, focused, size }) => {
                    return <AntDesign name="profile" size={24} color="black" />
                }
            }} name='products' component={Product}></Tab.Screen>
            <Tab.Screen options={{
                tabBarActiveTintColor: "red",
                tabBarIcon: ({ color, focused, size }) => {
                    console.log(color);
                    if (focused) {
                        return <FontAwesome name="home" size={30} color={color} />
                    }
                    return <AntDesign name="home" size={30} color={color} />

                }
            }} name='Home' component={Home}></Tab.Screen>
            <Tab.Screen name='cart' component={Cart}></Tab.Screen>
            <Tab.Screen name='camra' component={MyCount}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs