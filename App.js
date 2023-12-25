import { StyleSheet, Text, View } from 'react-native';
import Resturants from './screens/Resturants/Resturants';
import AvailableDishes from './screens/AvailableDishes/AvailableDishes';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name='Restaurant' component={Resturants} />
        <Stack.Screen name='Dishes' component={AvailableDishes} />
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
