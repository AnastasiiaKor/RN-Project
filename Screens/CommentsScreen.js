import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
function CommentsScreen({ onLayout }) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.header}>
        <Text style={styles.title}>Comments</Text>
        <TouchableOpacity style={styles.backBtn}>
          <Icon
            name="keyboard-backspace"
            size={24}
            color={"rgba(33, 33, 33, 0.8)"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1 / 10,
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingBottom: 11,
  },
  title: {
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.408,
    fontFamily: "Roboto-Medium",
    color: "#212121",
  },
  backBtn: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
});
export default CommentsScreen;
