import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

function PostsScreen({ login, email }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Posts</Text>
        <TouchableOpacity
          style={styles.logOutBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon name="exit-outline" size={24} color={"#BDBDBD"} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Image style={styles.avatar} />
        <View>
          <Text style={styles.name}>{login}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
  logOutBtn: {
    position: "absolute",
    right: 10,
    bottom: 11,
  },
  section: {
    flex: 1 / 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#BDBDBD",
    borderRadius: 16,
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
export default PostsScreen;
