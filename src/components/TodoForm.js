import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../styles";

const TodoForm = () => {
  return (
    <View>
      {/* Title of the Todo App */}
      <Text style={styles.title}>TODO APP</Text>

      <TextInput style={styles.input} placeholder="Enter Todo Title" />

      <TextInput style={styles.input} placeholder="Enter Todo Description" />

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.text}>Add Your Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;
