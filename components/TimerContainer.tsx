
import Timer from '@/components/Timer';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import AddTimerButton from './AddTimerButton';

const DATA = [
  {
    timerName:"timer1",
    duration:360,
    startTime: new Date(),
  },
  {
    timerName:"timer2",
    duration:60,
    startTime: new Date(),
  },
  {
    timerName:"timer3",
    duration:600,
    startTime: new Date(),
  },
  {
    timerName:"timer4",
    duration:120,
    startTime: new Date(),
  },
  {
    timerName:"timer4",
    duration:120,
    startTime: new Date(),
  },
  {
    timerName:"timer4",
    duration:120,
    startTime: new Date(),
  },
  {
    timerName:"timer4",
    duration:120,
    startTime: new Date(),
  },
];


type ItemProps = {
  timerName: string;
  duration: number;
};

const Item = ({timerName, duration}: ItemProps) => (
  <Timer timerName={timerName} duration={duration} />
);

export default function TimerContainer(){
  const [timers,setTimers] = useState(DATA);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.FlatListStyle} 
        data={timers}
        numColumns={2}
        renderItem={({item}) => <Item timerName={item.timerName} duration={item.duration}/>}
        ListFooterComponent={<AddTimerButton/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    alignItems:"center",
    margin:10
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  FlatListStyle:{
    width:"100%",
    paddingBottom:"20%",
  }
});
