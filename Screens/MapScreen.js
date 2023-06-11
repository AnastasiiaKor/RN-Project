import { View, Text, StyleSheet } from "react-native";

function MapScreen({ onLayout }) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text style={{ fontSize: 30 }}>Map Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
