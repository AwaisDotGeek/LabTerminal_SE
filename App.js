import { StyleSheet, Text, View } from 'react-native';
import Resturants from './screens/Resturants/Resturants';
import AvailableDishes from './screens/AvailableDishes/AvailableDishes';
import ShowOrderDetails from './screens/ShowOrderDetails/ShowOrderDetails';
import ShowOnMap from './screens/ShowOnMap/ShowOnMap';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Restaurants' component={Resturants} />
        <Stack.Screen name='Dishes' component={AvailableDishes} />
        <Stack.Screen name="OrderDetails" component={ShowOrderDetails} />
        <Stack.Screen name="ShowOnMap" component={ShowOnMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
