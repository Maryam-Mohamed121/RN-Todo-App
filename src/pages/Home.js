import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "../../styles";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const filterOptions = ["All", "Active", "Done"];

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const savedTodos = await AsyncStorage.getItem("todos");
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos));
        }
      } catch (e) {
        console.log("Failed to load todos", e);
      }
    };
    loadTodos();
  }, []);
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch (e) {
        console.log("Failed to save todos", e);
      }
    };
    saveTodos();
  }, [todos]);
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

export default Home;
