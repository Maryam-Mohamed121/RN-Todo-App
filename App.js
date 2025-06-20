import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";
import TodoForm from "./src/components/TodoForm";
import Todos from "./src/components/Todos";
import TodoItem from "./src/components/TodoItem";

const TodoApp = () => {
  const filterOptions = ["All", "Active", "Done"];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>TODO APP</Text>

        <TodoForm />

        {/* simple divider line  */}
        <View style={styles.dividerLine} />
        {/* filter buttons  */}
        <View style={styles.filterContainer}>
          {filterOptions.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterBtn,
                filter === "All" && styles.activeFilterBtn,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === "All" && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Todos />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TodoApp;
