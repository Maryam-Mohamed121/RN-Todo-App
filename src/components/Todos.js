import { FlatList, Text } from "react-native";
import React from "react";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  return (
    <FlatList
      style={styles.todosContainer}
      data={todos}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.emptyText}>No Todos</Text>}
    />
  );
};

export default Todos;
