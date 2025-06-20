import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";

const TodoApp = () => {
  const filterOptions = ["All", "Active", "Done"];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>TODO APP</Text>

        <TextInput style={styles.input} placeholder="Enter Todo Title" />

        <TextInput style={styles.input} placeholder="Enter Todo Description" />

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.text}>Add Your Todo</Text>
        </TouchableOpacity>

        <View style={styles.dividerLine} />

        <View style={styles.filterContainer}>
          {filterOptions.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.filterBtn,
                filter === "All" && styles.activeFilterBtn,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === "All" && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          style={styles.todosContainer}
          data={filterOptions}
          renderItem={() => null}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text style={styles.emptyText}>No Todos</Text>}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TodoApp;
