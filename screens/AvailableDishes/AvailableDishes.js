import { Pressable } from "react-native";
import { View, Text } from "react-native";
import styles from "./styles";

const AvailableDishes = ({ route }) => {
    const { restaurant } = route.params;

    return (
        <View>
            <Text style={styles.title}>{ restaurant.name }</Text>
            <View style={{ paddingHorizontal: '5%'}}>
                {
                    restaurant.dishes &&
                    restaurant.dishes.map((dish) => {
                        return (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, borderWidth: 1.5, borderColor: 'royalblue', paddingVertical: 5, paddingHorizontal: 8, borderRadius: 10}}>
                                <Text style={ styles.dishName }>{ dish.dishName }</Text>
                                <Text>${dish.price}</Text>
                                <Pressable style={ styles.btn }>
                                    <Text style={ styles.btnText }>Order</Text>
                                </Pressable>
                            </View>  
                        )
                    })
                }
                {
                    !restaurant.dishes &&
                    <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 25}}>No Dishes available</Text>
                }
            </View>
        </View>
    )
}

export default AvailableDishes;