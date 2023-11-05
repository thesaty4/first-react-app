import { StyleSheet, View } from "react-native";
import Header from "./Header";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Items } from "../pages/Items";
import { Home } from "../pages/Home";
import { Navigator } from "../pages/Navigator";
import Footer from "../pages/Footer";

const Stack = createStackNavigator();
export default function Main() {
    return (
        <NavigationContainer>
            <View style={styles.main}>
                <Header></Header>
                <Navigator ></Navigator>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                    <Stack.Screen name="Product" options={{ headerShown: false }} component={Items} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },

})