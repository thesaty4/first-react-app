import { StyleSheet, Text, View } from "react-native"
import Carousel from "../components/Carousel"
import { Items } from "./Items"
import { colors } from "../constant/color-code"

export const Home = () => {
    return (
        <View style={styles.main}>
            <View><Carousel /></View>
            <View><Text style={styles.productTitle}>All Products</Text><Items></Items></View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
    },
    productTitle: {
        textAlign: "center",
        paddingVertical: 10,
        fontSize: 20,
        backgroundColor: colors.primary,
        marginHorizontal: 15,
        marginVertical: 10,
        color: colors.white
    }
})