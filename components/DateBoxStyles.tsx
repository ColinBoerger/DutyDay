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
  },
  rowName: {
    color: "white",
    fontSize: 14,
    flex: 1,
  },
  textDate: {
    color: "white",
    fontSize: 18,
    width: 70,
    textAlign: "center",
  },
});
