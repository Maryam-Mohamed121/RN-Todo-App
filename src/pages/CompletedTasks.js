import { View, Text, FlatList } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CompletedTasks = () => {
  const { params } = useRoute();
  const completedTodos = params?.completedTodos || [];

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 16 }}>
        Completed Tasks
      </Text>
      <FlatList
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
            }}
          >
            <Text style={{ textDecorationLine: "line-through", color: "#888" }}>
              {item.title}
            </Text>
            <Text style={{ color: "#888" }}>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ color: "#aaa" }}>No completed tasks.</Text>
        }
      />
    </View>
  );
};

export default CompletedTasks;
