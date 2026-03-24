
import Timer from '@/components/Timer';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const sixHours = 21600;
const fourHours = 14400;
const oneHour = 3600
const DATA = [
  {
    timerName:"Antibiotics",
    duration:fourHours,
    startTime: new Date(),
    isPaused: true,
  },
  {
    timerName:"Paracetamol",
    duration:sixHours,
    startTime: new Date(),
    isPaused: true,
  },
  {
    timerName:"Ibuprofen",
    duration:oneHour,
    startTime: new Date(),
    isPaused: false,
  },
];


type ItemProps = {
  timerName: string;
  duration: number;
  isPaused: boolean;
};

export default function TimerContainer(){
  const [timers,setTimers] = useState(DATA);
  const [timerPaused, setTimerPaused] = useState(DATA.map((timer) => timer.isPaused));

  function toggleTimerPause(){
    
  };

  const Item = ({timerName, duration, isPaused}: ItemProps) => (
    <View style={styles.timerContainer}>
      <Text style={styles.timerName}>{timerName}</Text>
      <Timer duration={duration} isPaused={isPaused}/>
      <Pressable onPress={() => toggleTimerPause}>
        <Image 
          style={styles.pausePlay} 
          source={isPaused ? require('./images/pause-svgrepo-com.svg') : require('./images/play-svgrepo-com.svg')}/>
      </Pressable>
    </View>
  );
  


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.FlatListStyle} 
        data={timers}
        numColumns={1}
        renderItem={({item, index}) => <Item timerName={item.timerName} duration={item.duration} isPaused={timerPaused[index]} />}
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
  pausePlay:{
    width:30,
    height:30,
  }
});
