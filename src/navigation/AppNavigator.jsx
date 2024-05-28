import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarEmpresa from "../screens/CadastrarEmpresa";
import ListarEmpresas from "../screens/ListarEmpresas";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CadastrarEmpresa" component={CadastrarEmpresa} />
      <Stack.Screen name="ListarEmpresas" component={ListarEmpresas} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
