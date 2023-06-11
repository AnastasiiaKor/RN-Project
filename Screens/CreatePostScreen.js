import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CreatePostScreen({ onLayout }) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.header}>
        <Text style={styles.title}>Create post</Text>
        <TouchableOpacity style={styles.backBtn}>
          <Icon
            name="keyboard-backspace"
            size={24}
            color={"rgba(33, 33, 33, 0.8)"}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Image style={styles.image} />
          <TouchableOpacity style={styles.camera}>
            <Icon name="camera" size={24} color={"#BDBDBD"} />
          </TouchableOpacity>
          <Text>Upload your photo</Text>
        </View>
        <View>
          <TextInput />
          <TextInput />
          <TouchableOpacity>
            <Text>Publish</Text>
          </TouchableOpacity>
        </View>
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
  image: {
    position: "relative",
    width: "100%",
    height: 240,
    background: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 32,
  },
  camera: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "50%",
  },
});
export default CreatePostScreen;
