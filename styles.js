import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 20,
    marginTop: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "lightcoral",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "#ff6347",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "lightcoral",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "lightcoral",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "lightcoral",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "red",
    marginTop: 20,
    fontWeight: "bold",
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
});
