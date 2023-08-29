import {Image, StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        borderRadius: 12,
        shadowOffset: { width: 10, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0,
        elevation: 3,    
        flexDirection: 'row',
        alignItems: "center",
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 12,
        margin: 10,
    },
    title: {
        fontSize:16,
        fontWeight: "bold",
        marginLeft: 10,
        marginRight: 10,
        color: "black",
    },
    containerText: {
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center"
    },
    artist: {
        fontSize:14,
        fontWeight: "normal",
        marginLeft: 10,
        marginTop: 2,
        marginRight: 8,
        color: "#FF5B1C",  
    },
    album: {
        fontSize:14,
        fontWeight: "normal",
        marginLeft: 10,
        marginTop: 2,
        marginRight: 8,
        color: "black",  
    },
    year: {
        fontSize:14,
        fontWeight: "normal",
        marginTop: 2,
        marginRight: 10,
        color: "grey",  
    },
    isSoldOut: {
        fontSize: 12,
        fontWeight: "bold",
        color: "red",   
        textAlign: "right",
        marginRight: 10,
        marginTop: 10,
    },
    containerSold: {
        flex: 1,
        alignSelf: "flex-start",
    }
})