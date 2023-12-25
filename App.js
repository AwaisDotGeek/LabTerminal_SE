import { StyleSheet, Text, View } from 'react-native';
import Resturants from './screens/Resturants/Resturants';

export default function App() {



  return (
    <View style={styles.container}>
      <Resturants></Resturants>
    </View>
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
