import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles";

const TodoItem = ({ item, onDelete }) => {
  return (
    <View style={styles.todoItemcontainer}>
      <Text style={styles.Todotext}>{item.title}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Ionicons name="trash-outline" size={24} color="white" />
        <Ionicons name="checkmark-outline" size={24} color="lightgreen" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
