import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTasks from "../pages/CompletedTasks";
import StackNav from "./StackNav";

const Tab = createBottomTabNavigator();
export const PATHS = {
  HOME: "Home",
  COMPLETED_TASKS: "Completed Tasks",
  DETAILS: "Todo Details",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={PATHS.HOME} component={StackNav} />
        <Tab.Screen
          name={PATHS.COMPLETED_TASKS}
          component={CompletedTasks}
          options={{
            headerBackTitle: "Back",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Router;
