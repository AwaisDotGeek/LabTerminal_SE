import react, { useEffect, useState } from "react";
import { View, FlatList, Text, Pressable } from "react-native";
import axios from "axios";
import styles from "./styles";

const Resturants = () => {
    const [resturants, setResturants] = useState([]);

    const getResturants = async () => {
        try {
            const response = await axios.get('https://658552e2022766bcb8c85fa7.mockapi.io/api/restaurants');

            if (response) {
                return response;
            }

        } catch (error) {
            console.log('An error has occurred!', error);
        }
    }

    useEffect(() => {
        getResturants()
            .then((response) => {
                console.log(response.data);
                setResturants(response.data);
            })
            .catch(error => console.log(error));
    }, [])

    const renderRestaurant = ({ item }) => {
        return (
            <View style={ styles.resturantCard }>
                <Text style={ styles.resturantName }>
                    { item.name }
                </Text>
                <Text>
                    { item.ratings }
                </Text>
                <Pressable style={ styles.btn }>
                    <Text style={ styles.btnText }>
                        Show On Map
                    </Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View>
            <Text style={ styles.title }>
                Restaurants
            </Text>
            <FlatList
                data={resturants}
                renderItem={renderRestaurant}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Resturants;