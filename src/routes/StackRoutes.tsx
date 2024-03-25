import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import DrinkDetails from '../pages/DrinkDetails';
import RandomDrinkPage from '../pages/RandomDrinkPage';
import Header from '../components/Header';
import { StyleSheet } from 'react-native/types';


const Stack = createStackNavigator();

export default function StackRoutes() {

  return (
    <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={({ route, navigation }) => ({
      // headerShown: false,
      // headerMode: 'screen',
      // gestureEnabled: true,
      // ...TransitionPresets.ModalPresentationIOS,
    })}>
      <Stack.Screen
        name="Home" component={Home} options={{
          title: 'Home',
          headerShown: false,
        }} />
      <Stack.Screen name="DrinkDetails"  component={DrinkDetails} 
          options={ ({route}) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            } 
        })}
        />      
      <Stack.Screen name="RandomDrinkPage" component={RandomDrinkPage} 
     options={ ({route}) => ({
      title: route.params.name,
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      } 
  })}/>

    </Stack.Navigator>
  )
}

// const styles = StyleSheet.create({
 
// })