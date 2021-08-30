import { StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    minHeight: 80,
    backgroundColor: colors[0],
    justifyContent: "space-between",
  },
  routeTitle: {
    color: "#ffffff",
    fontSize: 16,
    letterSpacing: 1,
  },
  wallet: {
    minHeight: 140,
    backgroundColor: colors[0],
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingTop: 20,
  },
  walletMainTextsContainer: {
    alignItems: "center",
  },
  walletMainTextLight: {
    fontSize: 12,
    color: "#f5f5f5",
    marginBottom: 2,
  },
  walletMainTextBold: {
    color: "#ffffff",
    fontSize: 25,
  },
  walletButtons: {
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  walletBtn: {
    height: 35,
    paddingVertical: 10,
    borderRadius: 30,
    width: "40%",
  },
});
