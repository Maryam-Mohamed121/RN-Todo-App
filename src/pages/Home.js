import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "../../styles";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  markAsCompleted,
  updateFilter,
  FILTRATION_TYPES,
  setTodos,
} from "../Redux/slices/todos_slice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TODOS_KEY = "TODOS_LIST";

const Home = () => {
  const dispatch = useDispatch();
  const { todos, filter } = useSelector((state) => state.todos);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const savedTodos = await AsyncStorage.getItem(TODOS_KEY);
        if (savedTodos) {
          dispatch(setTodos(JSON.parse(savedTodos)));
        }
      } catch (e) {
        // handle error if needed
      }
    };
    loadTodos();
  }, [dispatch]);

  useEffect(() => {
    AsyncStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const filterOptions = [
    FILTRATION_TYPES.ALL,
    FILTRATION_TYPES.IN_PROGRESS,
    FILTRATION_TYPES.COMPLETED,
  ];

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCompleteTodo = (id) => {
    dispatch(markAsCompleted(id));
  };

  const handleFilterChange = (selectedFilter) => {
    dispatch(updateFilter(selectedFilter));
  };

  const getFilteredTodos = () => {
    if (filter === FILTRATION_TYPES.ALL) return todos;
    if (filter === FILTRATION_TYPES.IN_PROGRESS)
      return todos.filter((todo) => !todo.completed);
    if (filter === FILTRATION_TYPES.COMPLETED)
      return todos.filter((todo) => todo.completed);
    return todos;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>TODO APP</Text>

        <TodoForm onSubmit={handleAddTodo} />

        <View style={styles.dividerLine} />

        <View style={styles.filterContainer}>
          {filterOptions.map((filterOption, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              style={[
                styles.filterBtn,
                filter === filterOption && styles.activeFilterBtn,
              ]}
              onPress={() => handleFilterChange(filterOption)}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === filterOption && styles.activeFilterText,
                ]}
              >
                {filterOption}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Todos
          todos={getFilteredTodos()}
          onDelete={handleDeleteTodo}
          onComplete={handleCompleteTodo}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
