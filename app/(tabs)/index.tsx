import TimerContainer from "@/components/TimerContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function Index() {
  const [name, setName] = useState("Hello");

  useEffect(() => {
    
  }, []);

  async function saveDataToAsyncStorage(key: string, data: string) {
    try { 
      if (data) { 
        await AsyncStorage.setItem(key, JSON.stringify(data)); 
    } 
    } catch (error) { 
    // handle error } 
    }
  }

  async function getDataFromAsyncStorage(key: string) { 
    try { 
      const data = await AsyncStorage.getItem(key); 
      // if your data was an json object remember to parse it 
      if (data) { return JSON.parse(data); } 
    } catch (error) {
    // handle error 
    } 
  }

  async function clearAsyncStorage(key: string) { 
    try { 
      await AsyncStorage.removeItem(key); 
    } catch (error) { 
      // handle error }
    } 
  }


  const press = (duration:number) =>{
    alert(duration);
    alert(getDataFromAsyncStorage("hello"));
    console.log(getDataFromAsyncStorage("hello"));
  };

  const addQuickTimer = () =>{};

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{getDataFromAsyncStorage("hello")}</Text>
        <TextInput onChangeText={(thisData) => saveDataToAsyncStorage("hello",thisData )}></TextInput>
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