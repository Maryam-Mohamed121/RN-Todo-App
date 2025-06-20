import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { React, useState } from "react";
import { styles } from "../../styles";

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handelsubmit = () => {
    if (!title) return;
    const todo = {
      id: Math.random().toString(),
      title,
      description,
      completed: false,
    };
    onSubmit(todo);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Enter Todo Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Todo Description"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={handelsubmit}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>Add Your Todo</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
