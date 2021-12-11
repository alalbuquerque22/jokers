import React from "react";
import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6e6f0",
        alignItems: "center",
        justifyContent: "center"

    },
    header: {
        marginTop: height * 0.1,
        height: height * 0.40,
        width: width,
        backgroundColor: "rgba(26, 157, 94, 0.8)",
        justifyContent: "center",
        alignItems: "center",

    },
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
        fontSize: width * 0.05,
        // fontWeight:"bold",
        color: "#000",
    },
    text: {
        fontSize: width * 0.045,
        color: "#000",

    },
    descriptionText: {
        fontSize: width * 0.038,
        color: "rgba(0,0,0,0.6)",
    },
    cardBody: {
        marginTop: height * 0.08,
    },
    cardFooter: {
        marginTop: height * 0.08
    },
    searchForm: {
        marginBottom:24 ,
        // position:'absolute'
        // (height * 2) / 100,
    },
    label: {
        color: '#d4c2ff',
        // fontFamily: 'Poppins_400Regular',
    },
    input: {
        height: (height * 7) / 100,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: (width * 2) / 100,
        marginTop: (height * 1.1) / 100,
        marginBottom: (height * 1.8) / 100,
    },
    inputBlock: {
        width: '48%',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    submitButton: {
        backgroundColor: '#04d361',
        height: (height * 7) / 100,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        // fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
});
export default styles;