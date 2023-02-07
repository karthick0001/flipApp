import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screen/Splash';
import BottomTab from './Screen/BottomTab';
import Details from './Screen/details';
import Checkout from './Screen/Checkout';


const Stack = createNativeStackNavigator();
// const navTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: '#5bac6a',
//   },
// };

const App = ({ navigation }) => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' >
          <Stack.Screen name="Splash" component={Splash} options={{ title: 'Splash Screen', headerShown: false }} />
          <Stack.Screen name="checkout" component={Checkout} options={{ title: 'checkOut', headerShown: false }} />
          <Stack.Screen styles={[styles.naviBar]} name="bottomtab" component={BottomTab} options={{ title: 'Bottom navigation page', headerShown: false }} />
          <Stack.Screen name="details" component={Details} options={{ title: 'details', headerShown: false }} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  naviBar: {
    padding: 20,
    fontSize: 20,
  }
});

export default App;
