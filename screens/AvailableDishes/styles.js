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
    
    btn: {
        backgroundColor: 'royalblue',
        padding: 8,
        borderRadius: 10,
        width: 100,
    },

    btnText: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    dishName: {
        width: 180,
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;