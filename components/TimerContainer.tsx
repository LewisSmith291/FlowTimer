
import Timer from '@/components/Timer';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import AddTimerButton from './AddTimerButton';

type Props = {
  label: string;
}

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
];

type ItemProps = {
  timerName: string;
  duration: number;
  startTime: Date;
};

const Item = ({timerName, duration, startTime}: ItemProps) => (
  <Timer timerName={timerName} duration={duration} startTime={startTime}/>
);

export default function TimerContainer({label} : Props){
  const [timers,setTimers] = useState(DATA);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <FlatList
        style={styles.FlatListStyle} 
        data={timers}
        numColumns={2}
        renderItem={({item}) => <Item timerName={item.timerName} duration={item.duration} startTime={item.startTime}/>}
        ListFooterComponent={<AddTimerButton/>}
      >
      </FlatList>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    alignItems: 'flex-start',
    width:"95%",
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  FlatListStyle:{
    width:"100%",
    backgroundColor:"#44a0b1",
    borderRadius: 15,
    borderColor:"#000",
    borderWidth:4
  },
  contentContainer:{
    rowGap:10,
    backgroundColor:"#303e4e",
    padding:10,
    borderRadius: 15,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
  },
  timer: {
    flex: 1
  }
});
