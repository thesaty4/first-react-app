import { ScrollView, StyleSheet, View } from "react-native"
import { products } from "../constant/products.const"
import Product from "../components/Product"
import Footer from "./Footer"

export const Items = () => {
    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={styles.container}>
                {products.map((item) => <Product key={item.id} product={item} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: { marginVertical: 10 },
    product: {
        flex: 1,
        gap: 30
    },
    container: {

    }
})