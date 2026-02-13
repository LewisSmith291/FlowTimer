
import Timer from '@/components/Timer';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import AddTimerButton from './AddTimerButton';

type Props = {
  label: string;
}

const DATA = [
  {
    timerName:"timer1"
  },
  {
    timerName:"timer2"
  },
  {
    timerName:"timer3"
  },
  {
    timerName:"timer4"
  },
];

type ItemProps = {timerName: string};

const Item = ({timerName}: ItemProps) => (
  <Timer timerName={timerName}></Timer>
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
        renderItem={({item}) => <Item timerName={item.timerName}></Item>}
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
    backgroundColor:"purple",
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
