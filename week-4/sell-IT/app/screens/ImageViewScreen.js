import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";


function ImageViewScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    color="white"
                    size={35}
                />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/chair.jpg')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon: {
        // width: 50,
        // height: 50,
        position: "absolute",
        top: 40,
        left: 30,
        // backgroundColor: '#fc5c65'
    },
    deleteIcon: {
        // width: 50,
        // height: 50,
        position: "absolute",
        top: 40,
        right: 30,
        // backgroundColor: '#4ecdc4'
    },
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        width: "100%",
        height: "100%",
    },
})
export default ImageViewScreen;