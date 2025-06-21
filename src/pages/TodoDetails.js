import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { styles } from "../../styles";

const TodoDetails = () => {
  const { todo } = useRoute().params;
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ marginBottom: 10, width: "90%", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{todo.title}</Text>
        <Text>{todo.description}</Text>
      </View>
    </View>
  );
};

export default TodoDetails;
