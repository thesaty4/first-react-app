import React, { useRef, useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const defaultData = [
    'https://st4.depositphotos.com/4678277/40811/i/450/depositphotos_408110334-stock-photo-full-length-body-size-view.jpg',
    'https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg',
    'https://img.freepik.com/premium-vector/young-girls-running-sale-big-discounts-illustration_5379-1156.jpg',
];

const Carousel = ({ data = defaultData, scrollInterval = 2000 }) => {
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (flatListRef.current) {
                setCurrentIndex((currentIndex + 1) % data.length);
                if (flatListRef)
                    flatListRef.current.scrollToIndex({
                        animated: true,
                        index: (currentIndex + 1) % data.length,
                    });
            }
        }, scrollInterval);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, data, scrollInterval]);

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image key={item.id} source={{ uri: item }} style={styles.image} />
        </View>
    );

    return (
        <FlatList
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={windowWidth}
            decelerationRate="fast"
        />
    );
};

const styles = StyleSheet.create({
    item: {
        width: windowWidth,
        height: 200,
        paddingHorizontal: 15
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 10
    },
});

export default Carousel;
