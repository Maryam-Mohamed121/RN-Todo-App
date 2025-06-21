import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const { todo } = useRoute().params;
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: "#f8f9fa",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 24,
          width: "90%",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            color: "#e57373",
            marginBottom: 12,
            textAlign: "center",
          }}
        >
          {todo.title}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: "#f8bbd0",
            width: "80%",
            marginBottom: 16,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            color: "#333",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          {todo.description || "No description provided."}
        </Text>
      </View>
    </View>
  );
};

export default TodoDetails;
