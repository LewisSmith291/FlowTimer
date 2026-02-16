import TimerContainer from "@/components/TimerContainer";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const press = (duration:number) =>{
    alert(duration);
  };

  const addQuickTimer = () =>{};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Quick Timers: </Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.quickTimers}>
          <TouchableHighlight 
            underlayColor="#115797"
            style={styles.headerTimer} 
            onPress={() => press(60)}>
            <View>
              <Text style={styles.text}>1h</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight 
            underlayColor="#115797"
            style={styles.headerTimer} 
            onPress={() => press(30)}>
            <View>
              <Text style={styles.text}>30m</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight 
            underlayColor="#115797"
            style={styles.headerTimer} 
            onPress={() => press(10)}>
            <View>
              <Text style={styles.text}>10m</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight 
            underlayColor="#115797"
            style={styles.headerTimer} 
            onPress={() => press(5)}>
            <View>
              <Text style={styles.text}>5m</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight 
            underlayColor="#115797"
            style={styles.headerTimer} 
            onPress={() => press(1)}>
            <View>
              <Text style={styles.text}>1m</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight 
            underlayColor="#115797"
            style={[styles.headerTimer,{backgroundColor:"#2a66a7"}]} 
            onPress={() => addQuickTimer}>
            <View>
              <Text style={styles.text}>+</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
      <TimerContainer label={"Quick timers"}></TimerContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    gap:15
  },
  header:{
    backgroundColor:'#3273b9',
    alignItems:"center",
    width:"100%",
  },
  headerTitle:{
    fontSize: 24,
    color: '#fff',
    paddingHorizontal:5,
    backgroundColor:"#1964b4",
    width:"100%",
    textAlign:"center"
  },
  quickTimers:{
    columnGap:15,
    width:"100%"
  },
  headerTimer:{
    flex:1,
    backgroundColor:"#3273b9",
    paddingVertical:5,
    width: 60
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign:"center",
  },
});