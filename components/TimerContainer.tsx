
import Timer from '@/components/Timer';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddTimerButton from './AddTimerButton';

type Props = {
  label: string;
}

export default function TimerContainer({label} : Props){
  const [timers,setTimers] = useState([]);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <ScrollView 
        horizontal={true} 
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}        
      >
        <Timer></Timer>
        <Timer></Timer>
        <Timer></Timer>
        <AddTimerButton/>
      </ScrollView >
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    alignItems: 'flex-start',
    width:"95%",
    flexDirection: "column"
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  contentContainer:{
    columnGap:24,
    backgroundColor:"#303e4e",
    padding:10,
    borderRadius: 15
  },
  timer: {
    flex: 1
  }
});
