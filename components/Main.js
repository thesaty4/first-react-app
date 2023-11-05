import { ScrollView, StyleSheet, Text, View } from "react-native";
import Product from "./Product";
import { products } from "../constant/products.const";
import Header from "./Header";

export default function Main() {
    return (
        <View style={styles.product}>
            <Header></Header>
            <ScrollView contentContainerStyle={styles.container}>
                {products.map((item) => <Product key={item.id} product={item} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        flex: 1,
        gap: 30
    },
    container: {

    }
})