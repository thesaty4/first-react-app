import { ScrollView, StyleSheet, Text, View } from "react-native"
import { colors } from "../constant/color-code"
import { router } from "../constant/routes.js/navigation.route"
import { useNavigation } from "@react-navigation/native";

export const Navigator = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView horizontal
                contentContainerStyle={styles.scrollViewContent}  >
                {router.map((item) => <Text style={styles.box} onPress={() => navigation.navigate(item.route)}>{item.label}</Text>)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: colors.lightGrey
    },
    scrollViewContent: {
        flexDirection: 'row',
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
        elevation: 4,
        borderRadius: 10,
        backgroundColor: colors.primary,
        color: colors.white
    },
})