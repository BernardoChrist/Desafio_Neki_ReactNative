import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/login";
import Home from "./src/pages/home";

const Stack = createStackNavigator();

export const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
