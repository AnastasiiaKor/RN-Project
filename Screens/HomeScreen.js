import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

const Home = () => {
  const {
    params: { email, login = "" },
  } = useRoute();
  console.log(email, login);
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "CreatePost") {
            iconName = focused ? "add" : "add-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Posts") {
            iconName = focused ? "grid" : "grid-outline";
          }

          const backgroundColor = focused ? "#FF6C00" : "#FFF";

          return (
            <TouchableOpacity style={{ ...styles.button, backgroundColor }}>
              <Ionicons name={iconName} size={size} color={color} />
            </TouchableOpacity>
          );
        },

        tabBarStyle: {
          height: 83,
          paddingTop: 9,
        },
        tabBarLabelStyle: {
          position: "absolute",
          top: 10,
          color: "transparent",
          fontSize: 20,
          padding: 5,
        },
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
      })}
    >
      <MainTab.Screen name="Posts">
        {() => <PostsScreen login={login} email={email} />}
      </MainTab.Screen>
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 70,
    borderRadius: 20,
  },
  buttonActive: {
    backgroundColor: "#FF6C00",
  },
  buttonInactive: {
    backgroundColor: "#FFFFFF",
  },
});
