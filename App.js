import "react-native-gesture-handler";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";
import HomeScreen from "./Screens/HomeScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import CreatePostScreen from "./Screens/CreatePostScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const MainStack = createStackNavigator();

  const screenOptions = {
    headerStatusBarHeight: StatusBar.currentHeight,
    header: () => <StatusBar style="dark" backgroundColor="transparent" />,
  };

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <MainStack.Navigator
        screenOptions={screenOptions}
        initialRouteName="Login"
      >
        <MainStack.Screen name="Registration" component={RegistrationScreen} />

        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Posts " }}
        />

        <MainStack.Screen name="CreatePost" component={CreatePostScreen} />
        <MainStack.Screen name="Posts" component={PostsScreen} />
        <MainStack.Screen name="Profile" component={ProfileScreen} />
        {/* <MapScreen onLayout={onLayoutRootView} /> */}
        {/* <CommentsScreen onLayout={onLayoutRootView} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "red",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });
