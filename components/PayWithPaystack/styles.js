import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Colors";
// import { cxlxrs } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 30,
  },
  contentContainer: {},
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 10,
    minHeight: 80,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  routeTitle: {
    color: "#111111",
    fontSize: 14,
    letterSpacing: 1,
    marginRight: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: "transparent",
  },
  step: {
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "600",
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
    flex: 1,
    width: "100%",
  },
  checkboxWrapper: {
    paddingHorizontal: 20,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 5,
  },
  checkboxText: {
    fontSize: 14,
    color: "#11111189",
    letterSpacing: 1,
  },
  btnWrapper: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  btn: {
    borderRadius: 5,
    width: "80%",
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  btnTxt: {
    fontSize: 14,
  },
  btnText: {
    fontFamily: "FiraCode-Regular",
    fontSize: 14,
  },
  btnStyle: {
    backgroundColor: "green",
  },
  payMethodBtn: {
    height: 40,
    width: "60%",
    borderRadius: 30,
    backgroundColor: COLORS.success,
  },
});
