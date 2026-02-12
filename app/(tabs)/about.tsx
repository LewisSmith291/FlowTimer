import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Making this app to learn React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});