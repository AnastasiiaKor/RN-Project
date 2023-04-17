import { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function RegistationScreen() {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../images/BG.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.formContainer}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text style={styles.title}>Registration</Text>

            <TextInput
              placeholder="Login"
              placeholderTextColor={"#BDBDBD"}
              keyboardType={"default"}
              style={[
                styles.input,
                { borderColor: isFocused ? "#FF6C00" : "#E8E8E8" },
              ]}
              onFocus={handleFocus}
              onEndEditing={handleBlur}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={"#BDBDBD"}
              keyboardType={"email-address"}
              style={[
                styles.input,
                { borderColor: isFocused ? "#FF6C00" : "#E8E8E8" },
              ]}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={"#BDBDBD"}
              secureTextEntry={true}
              keyboardType={"default"}
              style={[
                styles.inputPS,
                { borderColor: isFocused ? "#FF6C00" : "#E8E8E8" },
              ]}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <TouchableOpacity activeOpacity={0.4} style={styles.hint}>
              <Text style={styles.hintText}>Show</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <Text style={styles.buttonTitle}>Register</Text>
            </TouchableOpacity>

            <View style={styles.linkContainer}>
              <TouchableOpacity>
                <Text style={styles.link}>You already have account? </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.link}>Log in</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  formContainer: {
    flex: 2 / 3,
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 32,
    marginTop: 92,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.16,
    fontFamily: "Roboto-Medium",
    color: "#212121",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    padding: 16,
    marginBottom: 16,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
    lineHeight: 19,
  },
  inputPS: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    height: 50,
    padding: 16,
    marginBottom: 43,
    fontFamily: "Roboto-Regular",
    color: "#212121",
  },
  hint: {
    position: "absolute",
    top: 307,
    right: 32,
  },
  hintText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  button: {
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonTitle: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  linkContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
