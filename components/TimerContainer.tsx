
import Timer from '@/components/Timer';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    timerName:"Antibiotics",
    duration:360,
    startTime: new Date(),
  },
  {
    timerName:"Paracetamol",
    duration:60,
    startTime: new Date(),
  },
  {
    timerName:"Ibuprofen",
    duration:600,
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
    backgroundColor: '#0073ff',
    alignItems:"center",
    width:"100%"
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  FlatListStyle:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"90%",
    gap:10,
  },
  timerContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:20,
    backgroundColor:"#323b46",
  },
  timerName:{
    fontSize: 24,
    color: '#fff',
  },
});
