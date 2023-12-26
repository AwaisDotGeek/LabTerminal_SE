import react from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const ShowOnMap = ({ route }) => {
    const { restaurantName, lat, long } = route.params; 

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1}}
                initialRegion={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: lat, longitude: long }}
                    title={restaurantName}
                    description="A good restaurant"
                />
            </MapView>
        </View>
    )
}

export default ShowOnMap;