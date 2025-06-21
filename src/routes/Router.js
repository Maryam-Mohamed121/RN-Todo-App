import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTasks from "../pages/CompletedTasks";
import StackNav from "./StackNav";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator();
export const PATHS = {
  HOME: "Home",
  COMPLETED_TASKS: "Completed Tasks",
  DETAILS: "TodoDetails",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
            color: "red",
            width: "100%",
          },
          tabBarStyle: {
            position: "absolute",
            bottom: 30,
            width: "100%",
            height: 60,
            backgroundColor: "#FCE4EC",
            borderWidth: 1,
            borderColor: "lightcoral",
            borderRadius: 10,
          },
        }}
      >
        <Screen
          name={PATHS.HOME}
          component={StackNav}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "lightcoral" : "grey" }}>
                Home
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home"
                size={24}
                color={focused ? "lightcoral" : "grey"}
              />
            ),
          }}
        />
        <Screen
          name={PATHS.COMPLETED_TASKS}
          component={CompletedTasks}
          options={{
            headerBackTitle: "Back",
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? "lightcoral" : "grey" }}>
                Completed Tasks
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="checkmark-done"
                size={24}
                color={focused ? "lightcoral" : "grey"}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
export default Router;
