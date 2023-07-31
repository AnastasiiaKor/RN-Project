import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
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
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

function RegistrationScreen({ onLayout }) {
  const [isFocused, setIsFocused] = useState({
    loginInput: false,
    emailInput: false,
    passwordInput: false,
  });
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);
  const navigation = useNavigation();
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

  function submitHandler() {
    console.log(state);
    navigation.navigate("Home", { email: state.email, login: state.login });
    setState(initialState);
  }

  function showPasswordHandler() {
    setShowPassword(false);
  }

  return (
    <View style={styles.container} onLayout={onLayout}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/images/BG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 2 / 3 }}
          >
            {!landscapeOrientation && (
              <View style={styles.wrapper}>
                <Image style={styles.avatar}></Image>
                <TouchableOpacity style={styles.addBtn} activeOpacity={0.6}>
                  <Icon name="pluscircleo" color={"#FF6C00"} size={25} />
                </TouchableOpacity>
              </View>
            )}
            <ScrollView
              style={{
                ...styles.formContainer,
                width: dimensions,
                paddingHorizontal: landscapeOrientation ? 100 : 16,
              }}
            >
              <Text style={styles.title}>Registration</Text>

              <TextInput
                placeholder="Login"
                placeholderTextColor={"#BDBDBD"}
                keyboardType={"default"}
                value={state.login}
                style={[
                  styles.input,
                  { borderColor: isFocused.loginInput ? "#FF6C00" : "#E8E8E8" },
                ]}
                onFocus={() => {
                  setIsFocused({ ...isFocused, loginInput: true });
                }}
                onBlur={() => {
                  setIsFocused({ ...isFocused, loginInput: false });
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={"#BDBDBD"}
                keyboardType={"email-address"}
                value={state.email}
                style={[
                  styles.input,
                  { borderColor: isFocused.emailInput ? "#FF6C00" : "#E8E8E8" },
                ]}
                onFocus={() => {
                  setIsFocused({ ...isFocused, emailInput: true });
                }}
                onBlur={() => {
                  setIsFocused({ ...isFocused, emailInput: false });
                }}
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
                  {
                    borderColor: isFocused.passwordInput
                      ? "#FF6C00"
                      : "#E8E8E8",
                  },
                ]}
                onFocus={() => {
                  setIsFocused({ ...isFocused, passwordInput: true });
                }}
                onBlur={() => {
                  setIsFocused({ ...isFocused, passwordInput: false });
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                style={styles.hint}
                onPress={showPasswordHandler}
                activeOpacity={0.8}
              >
                <Text style={styles.hintText}>Show</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={submitHandler}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonTitle}>Register</Text>
              </TouchableOpacity>

              <View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.link} underlayColor="transparent">
                    You already have account? Log in
                  </Text>
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
    flex: 2 / 3,
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  wrapper: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -55 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 99,
  },
  addBtn: {
    position: "absolute",
    left: 108,
    bottom: 14,
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: "transparent",
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

export default RegistrationScreen;
