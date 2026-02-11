import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Timer app</Text>
      
      <Pressable><Text>Press me</Text></Pressable>
    </View>
  );
}
