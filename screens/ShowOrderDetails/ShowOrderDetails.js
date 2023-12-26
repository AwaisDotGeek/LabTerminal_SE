import react from "react";
import { View, Text, FlatList } from "react-native";

const ShowOrderDetails = ({ route }) => {
    const { dishes } = route.params;

    console.log(dishes);

    const renderDish = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginVertical: 5, borderWidth: 1.5, borderColor: 'royalblue', paddingVertical: 5, paddingHorizontal: 8, borderRadius: 10}}>
                <Text style={{ fontSize: 16, fontWeight: 'bold'}}>
                    { item && item.dishName }
                </Text>
                <Text>
                    { item && '$' + item.price }
                </Text>
            </View>
        )
    }

    return (
        <View style={{ paddingHorizontal: '5%', paddingTop: 10}}> 
            <FlatList
                data={dishes}
                renderItem={renderDish}
                keyExtractor={item => item.dishId}
            />
        </View>
    )
}


export default ShowOrderDetails;