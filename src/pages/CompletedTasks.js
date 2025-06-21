import { View, Text } from "react-native";
import React from "react";

const CompletedTasks = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Completed Tasks</Text>
      </View>
    </>
  );
};

export default CompletedTasks;
