import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                &copy; 2023 Your Company Name | Contact: contact@email.com | Address: 123 Main St, City, Country
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'lightgray',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: 'black',
        fontSize: 16,
    },
});

export default Footer;
