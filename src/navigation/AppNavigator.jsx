<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarEmpresa from "../screens/CadastrarEmpresa";
import ListarEmpresas from "../screens/ListarEmpresas";
=======
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
>>>>>>> 753a0fd (init)

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
<<<<<<< HEAD
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CadastrarEmpresa" component={CadastrarEmpresa} />
      <Stack.Screen name="ListarEmpresas" component={ListarEmpresas} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return;
}
=======
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> 753a0fd (init)
