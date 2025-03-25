import { StyleSheet } from 'react-native'
const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 30,
        backgroundColor: "#C99D79",
        
    },
    homecat:{
        flex: 1,
        // alignItems: "center",
        padding: 30,
        backgroundColor: "#C99D79",
        width:'100%',
        borderTopEndRadius:30,
        borderTopStartRadius:30,
    },
    container2: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f2f2f2",
        
    },
    textwhite:{
        color:"white", 
        fontSize: 18,   
    },
    h1: {
        fontSize: 28,
        fontWeight: "bold",

        color: "#f2f2f2",
    },
    m20:{
        marginBottom:20
    },
    h2: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
        color: "#555",
    },
    label: {
        marginTop: 5,
        fontSize: 15,
        color: "#666",
        width: 70,
    },
    input: {
        height: 40,
        backgroundColor: "#f2f2f2",
        color: "black",
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 14,
        width: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 4,
        paddingHorizontal: 14,
        borderRadius: 13,
        alignItems: "center",
        justifyContent: "center",
        marginVertical:5,
    },
    buttonWellcome: {
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        marginVertical:5,
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Shadow property for Android
        elevation: 5,
    },
    buttonTextw: {
        color: "BLACK",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 15,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    textblack:{
        color:"black" 
    } 
});
export default globalStyle;