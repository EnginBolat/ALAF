import { Text, View } from "react-native";
import { AdressList, AddAdress } from "./src/pages/";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const App = () => {
  return <GestureHandlerRootView>
    <AdressList />
  </GestureHandlerRootView>
}

export default App;