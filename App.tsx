import React from "react";
import { AdressList, AddAdress } from "./src/pages/";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { IcChevronLeft } from "./src/assets";
import { View } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";


type RootStackParamList = {
  AdressList: undefined;
  AddAdress: undefined;
  AdressStack: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function AdressStack() {
  function headerBackImage() {
    return <View style={{ paddingLeft: 12 }}>
      <IcChevronLeft fill={'#C2BBCF'} />
    </View>
  }

  return (
    <Stack.Navigator initialRouteName="AdressList">
      <Stack.Screen
        name="AdressList"
        component={AdressList}
        options={{
          title: 'Adres Bilgilerin',
          headerTitleStyle: { color: '#FFFFFF', fontWeight: '500', fontSize: 20, lineHeight: 25, },
          headerBackImage(props) { return headerBackImage() },
          headerStyle: { borderWidth: 0, elevation: 0, shadowOpacity: 0, backgroundColor: '#440E85' },
        }}
      />
      <Stack.Screen
        name="AddAdress"
        component={AddAdress}
        options={{
          headerLeftLabelVisible: false,
          headerBackImage(props) { return headerBackImage() },
          headerStyle: { borderWidth: 0, elevation: 0, shadowOpacity: 0, backgroundColor: '#440E85' },
          headerTitle: 'asdadasd',
        }}
      />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="AdressStack">
      <Stack.Screen
        name="AdressStack"
        component={AdressStack}
        options={{
          title: 'Adreslerim',
          headerTitleStyle: { color: '#C2BBCF', fontWeight: '300', fontSize: 16, lineHeight: 20, },
          headerStyle: { borderWidth: 0, elevation: 0, shadowOpacity: 0, backgroundColor: '#220C45' },
        }}
      />
    </Stack.Navigator >
  );
}



const App = () => {
  return <GestureHandlerRootView>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  </GestureHandlerRootView>
}




export default App;