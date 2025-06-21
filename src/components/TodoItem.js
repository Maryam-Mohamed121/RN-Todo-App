import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";

const TodoItem = ({ item, onDelete }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.todoItemcontainer}
      onPress={() =>
        navigate("TodoDetails", {
          todo: {
            title: item.title,
            description: item.description,
            id: item.id,
          },
        })
      }
      activeOpacity={0.7}
    >
      <Text style={styles.Todotext}>{item.title}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash-outline" size={24} color="white" />
        <Ionicons name="checkmark-outline" size={24} color="lightgreen" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TodoItem;
