import { Pressable } from "react-native";
import { View, Text } from "react-native";
import styles from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";


const AvailableDishes = ({ route, navigation }) => {
    const { restaurant } = route.params;

    useEffect(() => {
        clearAsyncStorage();
    }); 
    
    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log("Error: ", error);
        }
    }


    const getDishesFromAsyncStorage = async () => {
        try {
            const response = await AsyncStorage.getItem('dishes');
            if (response) {
                return JSON.parse(response);
            }
        } catch (error) {
            console.log('An error has occurred while retrieving dishes from async storage! ', error);
            return null;
        }
    }

    const addDishToAsyncStorage_helper = async (dishes) => {
        try {
            await AsyncStorage.setItem('dishes', JSON.stringify(dishes));
        } catch (error) {
            console.log('An error has occurred while saving the dish! ', error);
        }
    }

    const addDishToAsyncStorage = (dish) => {
        getDishesFromAsyncStorage()
            .then((response) => {
                if (!response) { 
                    const dishes = [dish]; 
                    addDishToAsyncStorage_helper(dishes);
                } else {
                    const dishes = [...response, dish];
                    addDishToAsyncStorage_helper(dishes);
                }
            })
            .catch((error) => {
                console.log('An error has occurred while retrieving dishes from async storage! ', error);
            })
    }

    const showOrderDetails = async () => {
        try {
            getDishesFromAsyncStorage()
                .then((response) => {
                    if (!response) { 
                        alert("No Dishes selected!");
                        return;
                    }
                    navigation.navigate('OrderDetails', { dishes: response })
                })
                .catch((error) => {
                    console.log("Error: ", error);
                })
        } catch (error) {
            console.log("An error has occurred while showing order details! ", error);
        }
    }

    return (
        <View>
            <Text style={styles.title}>{ restaurant.name }</Text>
            <View style={{ paddingHorizontal: '5%'}}>
                {
                    restaurant.dishes &&
                    <View style={{ alignItems: 'center'}}>
                        {
                            restaurant.dishes.map((dish) => {
                                return (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginVertical: 5, borderWidth: 1.5, borderColor: 'royalblue', paddingVertical: 5, paddingHorizontal: 8, borderRadius: 10}}>
                                        <Text style={ styles.dishName }>{ dish.dishName }</Text>
                                        <Text>${dish.price}</Text>
                                        <Pressable
                                            style={styles.btn}
                                            onPress={() => addDishToAsyncStorage(dish)}
                                        >
                                            <Text style={ styles.btnText }>Order</Text>
                                        </Pressable>
                                    </View>  
                                )
                            })        
                        }
                        <Pressable
                            style={[styles.btn, { paddingHorizontal: 15, paddingVertical: 12, width: 200, marginTop: 10, backgroundColor: 'seagreen' }]}
                            onPress={() => showOrderDetails()}
                        >
                            <Text style={ styles.btnText }>Place Order</Text>        
                        </Pressable>
                    </View>
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