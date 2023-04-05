/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';
import Title from '../components/Title';
const Star = () => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.imageView}>
                <Image source={require('../assets/star1.jpeg')} resizeMode="cover" style={styles.image} />
                <Title title="No starred tasks" fontSize={19}  />
                <View style={styles.textView}>
                <Text numberOfLines={1} style={styles.text}>Mark important tasks with a star </Text>
                <Text numberOfLines={1} style={styles.text}>so you can easily find them here</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
    },
    imageView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        maxWidth: '55%',
        maxHeight: '50%',
    },
    bottomBar: {
        flex: 2,
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 16,
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
});

export default Star;
