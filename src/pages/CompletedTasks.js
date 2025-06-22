import { View, Text, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const CompletedTasks = () => {
  const { todos } = useSelector((state) => state.todos);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        style={{ width: "100%" }}
        data={completedTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 12,
              marginVertical: 6,
              backgroundColor: "#e0ffe0",
              borderRadius: 8,
              width: "100%",
              borderWidth: 1,
              borderColor: "#c0ffc0",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text style={{ color: "#888", fontSize: 16 }}>
              {item.description}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "red",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              No completed tasks.
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default CompletedTasks;
