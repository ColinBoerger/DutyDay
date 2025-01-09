import { StyleSheet } from "react-native";

export const dateBoxStyles = StyleSheet.create({
  container: {
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
    // borderRadius: 3,
    padding: 5,
    paddingVertical: 10,
    alignItems: "center",
    gap: 30,
    backgroundColor: "black",
    height: 60,
  },
  rowName: {
    color: "white",
    fontSize: 16,
    // fontWeight: "bold",
    flex: 1,
  },
  subScript: {
    color: "white",
    fontSize: 8,
    // fontWeight: "bold",
    flex: 1,
  },
  editRowName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  textDate: {
    color: "white",
    fontSize: 18,
    width: 70,
    textAlign: "center",
  },
});
