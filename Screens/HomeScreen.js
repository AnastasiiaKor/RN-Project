// import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostScreen from "./CreatePostScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   const {
//     params: { state },
//   } = useRoute();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBarOptions={{ showLabel: false }}>
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          // options={{
          //   tabBarLabel: "Posts",
          //   tabBarIcon: ({ color, size }) => (
          //     <Icon name="ios-list-box" color={color} size={size} />
          //   ),
          // }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// <Tab.Navigator>
//   <Tab.Screen
//     name="Posts"
//     component={PostsScreen}
//     options={{
//       tabBarLabel: "Posts",
//       tabBarIcon: ({ color, size }) => (
//         <Icon name="ios-list-box" color={color} size={size} />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name="CreatePost"
//     component={CreatePostScreen}
//     options={{
//       tabBarLabel: "Create Post",
//       tabBarIcon: ({ color, size }) => (
//         <Icon name="ios-add-circle" color={color} size={size} />
//       ),
//     }}
//   />
//   <Tab.Screen
//     name="Profile"
//     component={ProfileScreen}
//     options={{
//       tabBarLabel: "Profile",
//       tabBarIcon: ({ color, size }) => (
//         <Icon name="ios-person" color={color} size={size} />
//       ),
//     }}
//   />
// </Tab.Navigator>

//     <Tab.Navigator
//       // screenOptions={({ route }) => ({
//       //   tabBarIcon: ({ color, size }) => {
//       //     let iconName;

//       //     if (route.name === "Posts") {
//       //       iconName = "ios-information-circle";
//       //     } else if (route.name === "CreatePost") {
//       //       iconName = "ios-list-box";
//       //     } else if (route.name === "Profile") {
//       //       iconName = "ios-person";
//       //     }

//       //     return <Icon name={iconName} size={20} color={"#000"} />;
//       //   },
//       // })}
//       tabBarOptions={{
//         activeTintColor: "tomato",
//         inactiveTintColor: "gray",
//       }}
//     >
//       <Tab.Screen name="Posts" component={PostsScreen} />
//       <Tab.Screen name="CreatePost" component={CreatePostScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// function HomeStack() {
//   const Stack = createStackNavigator();

//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Posts" component={PostsScreen} />
//       <Stack.Screen name="CreatePost" component={CreatePostScreen} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//     </Stack.Navigator>
//   );
// }

export default HomeScreen;
