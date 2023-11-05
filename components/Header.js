import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Material Design icons
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

export default function Header() {
    const cartData = useSelector((state) => state.cartReducer);
    const [showBadge, setShowBadge] = useState(false); // Control the badge visibility
    const badgeRef = useRef(null);

    useEffect(() => {
        if (cartData.length > 0) {
            setShowBadge(true);
            if (badgeRef.current) {
                badgeRef.current.bounce();
            }
        } else {
            setShowBadge(false);
        }
    }, [cartData])
    return (
        <View style={styles.main}>
            <Image style={styles.logo} source={{ uri: 'https://static.wixstatic.com/media/c7de0c_4e9f90a28ec8474bbe21d0c8ad56f292~mv2.png/v1/fill/w_600%2Ch_226%2Cal_c%2Cq_90/file.jpg' }}></Image>

            <View style={styles.actions}>
                <Icon name="account-circle" color="white" size={32} />
                <Icon name="cart" size={32} color="white" />
                {showBadge && <Animatable.View
                    ref={badgeRef}
                    style={styles.cartInfo}
                    animation="bounce"
                ><Text style={styles.cartAlert}>{cartData.length}</Text></Animatable.View>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        elevation: 8,
        borderRadius: 8,
        backgroundColor: '#037CD5'
    },
    logo: {
        width: 100,
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    cartAlert: {
        color: 'white',
        textAlign: 'center',
        height: 20,
        width: 20,
        fontSize: 12,
        backgroundColor: 'red',
        borderRadius: 50,
        paddingTop: 1.4
    }, cartInfo: {
        textAlign: 'center',
        left: 60,
        bottom: 20,
        position: 'absolute',
    },
})