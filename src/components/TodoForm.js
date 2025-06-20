import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React from "react";
import { styles } from "../../styles";

const TodoForm = () => {
  return (
    <>
      <TextInput style={styles.input} placeholder="Enter Todo Title " />
      <TextInput style={styles.input} placeholder="Enter Todo Description" />
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.text}>Add Your Todo</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
