import TimerContainer from "@/components/TimerContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE';

export default function Index() {
  const [name, setName] = useState("Hello");

  async function loadName(){
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);

      if (name === null) return;
      setName(name);
    }
    catch (e) {
      alert(e);
    }
  }

  async function saveName(name:any){
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
      setName(name);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    loadName();
  }, []);





  const press = (duration:number) =>{
    alert(duration);
  };

  const addQuickTimer = () =>{};

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <TextInput value={name} onChangeText={saveName}></TextInput>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add Quick Timers: </Text>
          <ScrollView horizontal={true}>
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
        <TimerContainer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#25292e',
    justifyContent:"flex-start",
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