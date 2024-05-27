<<<<<<< HEAD
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider,
  useTheme,
} from "react-native-paper";
import AppNavigator from "./src/navigation/AppNavigator";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

export default function App() {
  const colorScheme = useColorScheme();

  const navDark = DarkTheme;
  const navLight = DefaultTheme;

  const themeDark = MD3DarkTheme;
  const themeLight = MD3LightTheme;

  const combinedDark = {
    ...navDark,
    ...themeDark,
    colors: { ...navDark.colors, ...themeDark.colors },
  };

  const combinedLight = {
    ...navLight,
    ...themeLight,
    colors: { ...navLight.colors, ...themeLight.colors },
  };

  const theme = colorScheme === "dark" ? combinedDark : combinedLight;

  return (
    <Provider theme={theme}>
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
=======
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
>>>>>>> 753a0fd (init)
}
