import { Button, Image, StyleSheet, Text, View } from "react-native";
import { addToCart, removeToCart } from "../store/actions/cart.actions";
import { useDispatch, useSelector } from "react-redux";
export default function Product(product) {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item.product));
  }
  const handleRemoveToCart = (item) => {
    dispatch(removeToCart(item.product))
  }
  const cartDate = useSelector((state) => state.cartReducer);
  const isAdded = (item) => {
    return cartDate.find((cart) => cart.id == item.id)
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.product.image_url }} style={styles.productImage}></Image>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>
          <Text>{product.product.name}</Text>
          <Text> {product.product.price}</Text>
        </Text>
        <Text>{product.product.description}</Text>
      </View>
      <View style={styles.action}>
        <Button title="Buy"></Button>
        {
          !isAdded(product.product) ? <Button title="+ Add To Cart" onPress={() => handleAddToCart(product)}></Button> :
            <Button color='red' title="- Remove To Cart" onPress={() => handleRemoveToCart(product)}></Button>
        }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 6,
    padding: 16,
  },
  productImage: {
    width: 200,
    height: 200
  },
  productInfo: {
    padding: 20
  },
  productTitle: {
    gap: 10
  },
  action: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    gap: 10
  }
});
