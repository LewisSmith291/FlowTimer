
import Timer from '@/components/Timer';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const sixHours = 21600;
const fourHours = 14400;
const oneHour = 3600
const DATA = [
  {
    timerName:"Antibiotics",
    duration:fourHours,
    startTime: new Date(),
  },
  {
    timerName:"Paracetamol",
    duration:sixHours,
    startTime: new Date(),
  },
  {
    timerName:"Ibuprofen",
    duration:oneHour,
    startTime: new Date(),
  },
];


type ItemProps = {
  timerName: string;
  duration: number;
};

const Item = ({timerName, duration}: ItemProps) => (
  <View style={styles.timerContainer}>
    <Text style={styles.timerName}>{timerName}</Text>
    <Timer duration={duration} />
  </View>
);

export default function TimerContainer(){
  const [timers,setTimers] = useState(DATA);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.FlatListStyle} 
        data={timers}
        numColumns={1}
        renderItem={({item}) => <Item timerName={item.timerName} duration={item.duration}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#25292e',
    backgroundColor: '#9c3117',
    alignItems:"flex-start",
    flex:1
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  FlatListStyle:{
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center",
    flex:1,
  },
  timerContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:20,
    backgroundColor:"#323b46",
    width:"100%",
    margin:20
    
  },
  timerName:{
    fontSize: 24,
    color: '#fff',
  },
});
