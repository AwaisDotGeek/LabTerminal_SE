import react, { useEffect, useState } from "react";
import { View, FlatList, Text, Pressable, Modal } from "react-native";
import axios from "axios";
import styles from "./styles";

const Resturants = ({ navigation }) => {
    const [resturants, setResturants] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState({});

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
                console.log(response.data[0].dishes.length)
                setResturants(response.data);
            })
            .catch(error => console.log(error));
    }, [])

    const renderRestaurant = ({ item }) => {
        return (
            <Pressable
                onLongPress={() => {
                    setSelectedRestaurant(item);
                    setModalVisible(true);
                }}
                onPress={() => {
                    navigation.navigate('Dishes', { restaurant: item });
                }}
            >
                <View style={ styles.resturantCard }>
                    <Text style={ styles.resturantName }>
                        { item && item.name }
                    </Text>
                    <Text>
                        { item && item.ratings }
                    </Text>
                    <Pressable style={ styles.btn }>
                        <Text style={ styles.btnText }>
                            Show On Map
                        </Text>
                    </Pressable>
                </View>
            </Pressable>
        )
    }

    return (
        <View style={{ paddingHorizontal: '5%', paddingBottom: 20,}}>
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
            
            {/* Restaurant Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <Pressable
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => setModalVisible(false)}
                > 
                    <View style={{ gap:5, paddingHorizontal: 10, paddingVertical: 15, backgroundColor: 'purple', borderRadius: 10, }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', color: '#fff'}}>{ selectedRestaurant.name }</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>Ratings: {selectedRestaurant.ratings}</Text>
                        <Text style={{ color: '#fff' }}>Number of Dishes: { selectedRestaurant.dishes && selectedRestaurant.dishes.length }</Text>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

export default Resturants;