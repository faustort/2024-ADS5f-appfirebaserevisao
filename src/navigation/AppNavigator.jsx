import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastrarEmpresa from "../screens/CadastrarEmpresa";
import ListarEmpresas from "../screens/ListarEmpresas";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
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
