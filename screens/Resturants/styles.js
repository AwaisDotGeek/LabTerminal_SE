import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 'auto',
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: 'skyblue',
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 15,
    },  

    resturantCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderWidth: 1.5,
        borderColor: 'blue',
        marginBottom: 5,
        borderRadius: 10,
    },

    btn: {
        backgroundColor: 'royalblue',
        padding: 8,
        borderRadius: 10,
    },

    btnText: {
        fontWeight: 'bold',
        color: '#fff'
    },

    resturantName: {
        width: 180,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;