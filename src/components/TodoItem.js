import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodoItem = ({ item, onDelete, onComplete }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={styles.todoItemcontainer}
      onPress={() =>
        navigate(PATHS.DETAILS, {
          todo: {
            title: item.title,
            description: item.description,
          },
        })
      }
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.Todotext,
          item.completed && {
            textDecorationLine: "line-through",
            color: "black",
          },
        ]}
      >
        {item.title}
      </Text>
      <View style={styles.todoItemActions}>
        <TouchableOpacity onPress={() => onComplete(item.id)}>
          <AntDesign
            name={item.completed ? "checkcircle" : "checkcircleo"}
            size={20}
            color={item.completed ? "green" : "lightgreen"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
