import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from "react-native-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";

import { AdressList, AddAdress } from "./src/pages/";
import { IcChevronLeft } from "./src/assets";
import { Provider } from "react-redux";
import { store } from "./src/redux";
import { useTranslation } from "react-i18next";


type RootStackParamList = {
  AdressList: undefined;
  AddAdress: undefined;
  AdressStack: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const headerTitleStyle: any = { color: '#FFFFFF', fontWeight: '500', fontSize: 20, lineHeight: 25, };
const headerStackTitleStyle: any = { color: '#C2BBCF', fontWeight: '300', fontSize: 16, lineHeight: 20, };
function headerStyle(backgroundColor: string): any {
  return { borderWidth: 0, elevation: 0, shadowOpacity: 0, backgroundColor: backgroundColor };
}

function AdressStack() {
  const { t } = useTranslation();

  function headerBackImage() {
    return <View style={{ paddingLeft: 12 }}>
      <IcChevronLeft fill={'#C2BBCF'} />
    </View>
  }

  return (
    <LinearGradient
      colors={['#440E85', 'red']}
      style={{ flex: 1, }}
    >
      <Stack.Navigator initialRouteName="AdressList">
        <Stack.Screen
          name="AdressList"
          component={AdressList}
          options={{
            title: t('address-informations'),
            headerTitleAlign: 'center',
            headerTitleStyle: headerTitleStyle,
            headerBackImage(props) { return headerBackImage() },
            headerStyle: headerStyle('#440E85'),
          }}
        />
        <Stack.Screen
          name="AddAdress"
          component={AddAdress}
          options={{
            title: t('address-informations'),
            headerTitleAlign: 'center',
            headerTitleStyle: headerTitleStyle,
            headerLeftLabelVisible: false,
            headerBackImage(props) { return headerBackImage() },
            headerStyle: headerStyle('#440E85'),
          }}
        />
      </Stack.Navigator>
    </LinearGradient>
  );
}

function RootStack() {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  return (
    <Stack.Navigator initialRouteName="AdressStack">
      <Stack.Screen
        name="AdressStack"
        component={AdressStack}
        options={{
          title: t('my-addresses'),
          headerTitleAlign: 'center',
          headerTitleStyle: headerStackTitleStyle,
          headerStyle: headerStyle('#220C45'),
          headerRight(props) {
            return <TouchableOpacity
              style={{ paddingRight: 12, }}
              onPress={
                () => {
                  if (lng === "en") {
                    i18n.changeLanguage("tr");
                  } else {
                    i18n.changeLanguage("en");
                  }

                }}>
              <Text style={{ color: 'white', fontWeight: "500" }}>{lng.toUpperCase()}</Text>
            </TouchableOpacity>
          },
        }}
      />
    </Stack.Navigator >
  );
}



const App = () => {
  return <Provider store={store}>
    <GestureHandlerRootView>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  </Provider>
}




export default App;