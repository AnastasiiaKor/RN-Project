import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
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
  Dimensions,
  ScrollView,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ onLayout }) {
  const [isFocused, setIsFocused] = useState(false);
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);
  const landscapeOrientation =
    Dimensions.get("window").width > Dimensions.get("window").height;

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);
  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function submitHandler() {
    console.log(state);
    setState(initialState);
  }
  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <StatusBar barStyle={"dark-content"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../images/BG.jpg")}
        >
          <KeyboardAvoidingView
            style={{
              flex: 2 / 3,
            }}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <ScrollView
              style={{
                ...styles.formContainer,
                width: dimensions,
                paddingHorizontal: landscapeOrientation ? 100 : 16,
              }}
            >
              <Text style={styles.title}>Log in</Text>

              <TextInput
                placeholder="Email"
                placeholderTextColor={"#BDBDBD"}
                keyboardType={"email-address"}
                value={state.email}
                style={[
                  styles.input,
                  { borderColor: isFocused ? "#FF6C00" : "#E8E8E8" },
                ]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={showPassword}
                keyboardType={"default"}
                value={state.password}
                style={[
                  styles.inputPS,
                  { borderColor: isFocused ? "#FF6C00" : "#E8E8E8" },
                ]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.hint}
                onPress={showPasswordHandler}
              >
                <Text style={styles.hintText}>Show</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={submitHandler}
              >
                <Text style={styles.buttonTitle}>Log in</Text>
              </TouchableOpacity>

              <View style={styles.linkContainer}>
                <TouchableOpacity>
                  <Text style={styles.link}>You don't have account? </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.link}>Register</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  title: {
    marginBottom: 32,
    marginTop: 32,
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
    top: 180,
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
