import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StackNavigate } from "./routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#010625" barStyle="light-content" />
      <StackNavigate></StackNavigate>
    </NavigationContainer>
  );
}
