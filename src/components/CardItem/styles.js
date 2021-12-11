import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({

    cardContent: {
        margin: height * 0.01,
        width: width * 0.95,
        padding: height * 0.02,
        height: height * 0.50,
        backgroundColor: "#fff",
        borderRadius: width * 0.02,
        overflow: 'hidden',
    },
    cardHeader: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.2)",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: height * 0.01,
    },
    titleText: {
        fontSize: width * 0.045,
        // fontWeight:"bold",
        color: "#000",
    },
    text: {
        fontSize: width * 0.040,
        color: "#000",

    },
    cardBody: {
        marginTop: height * 0.06,
        maxHeight: height * 0.15,
    },
    cardFooter: {
        marginTop: height * 0.08,
    },
    descriptionText: {
        fontSize: width * 0.038,
        color: "rgba(0,0,0,0.6)",
    },

});
export default styles;