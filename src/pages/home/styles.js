import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        


    }, content: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: ' rgba(255,255,255,0.2)',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxButtons: {
        marginTop: height * 0.45,
    },
    button: {
        marginTop: (height * 1.8) / 100,
        backgroundColor: '#f1f1f1',
        borderRadius: (width * 10) / 100,
        height: (height * 5.9) / 100,
        width: (width * 90) / 100,
        fontSize: (height * 2) / 100,
    },
    textButton: {
        fontWeight: 'bold',
        color: '#FFF',
        // fontFamily: 'Montserrat-Regular',
    }


})

export default styles;