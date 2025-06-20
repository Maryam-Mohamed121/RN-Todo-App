import React, { useState } from "react";
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

const TodoApp = () => {
  const filterOptions = ["All", "Active", "Done"];

  const [todos, setTodos] = useState([]);
  const handelAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  const handelDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>TODO APP</Text>

        <TodoForm onSubmit={handelAddTodo} />

        {/* simple divider line  */}
        <View style={styles.dividerLine} />
        {/* filter buttons  */}
        <View style={styles.filterContainer}>
          {filterOptions.map((filter, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
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
        {todos.length > 0 && (
          <Todos todos={todos} onDelete={handelDeleteTodo} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TodoApp;
