import { FlatList, Text } from "react-native";
import React from "react";
import { styles } from "../../styles";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete, onComplete }) => {
  return (
    <FlatList
      style={styles.todosContainer}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem item={item} onDelete={onDelete} onComplete={onComplete} />
      )}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text style={styles.emptyText}>No Todos</Text>}
    />
  );
};

export default Todos;
