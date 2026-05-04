import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreens from "./src/screens/HomeScreens"
import DetailsScreen from "./src/screens/DetailsScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component = {HomeScreens} />
        <Stack.Screen name = "Detalhes" component = {DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};