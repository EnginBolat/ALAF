import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator, Header } from '@react-navigation/stack';
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
const headerStyle: any = { borderWidth: 0, elevation: 0, shadowOpacity: 0, backgroundColor: 'transparent' }

function AdressStack() {
  const { t } = useTranslation();

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
          title: t('address-informations'),
          headerTitleAlign: 'center',
          headerTitleStyle: headerTitleStyle,
          headerBackImage(props) { return headerBackImage() },
          headerStyle: { backgroundColor: '#440E85' },
          // header: (props) => (
          // <LinearGradient colors={["#220C45", "#220C45"]}>
          //   <Header {...props} />
          // </LinearGradient >
          // ),
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
          headerStyle: { backgroundColor: '#440E85' },
          // header: (props) => (
          //   <LinearGradient colors={["#220C45", "#220C45"]}>
          //     <Header {...props} />
          //   </LinearGradient >
          // ),
        }}
      />
    </Stack.Navigator>
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
          header(props) {
            return <LinearGradient colors={["#220C45", "#440E85"]}>
              <Header {...props} />
            </LinearGradient >
          },
          headerTitleAlign: 'center',
          headerTitleStyle: headerStackTitleStyle,
          headerStyle: headerStyle,
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
              <Text style={{ color: 'white', fontWeight: "500" }}>{lng == "en"
                ? "TR"
                : "EN"
              }</Text>
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