
import Timer from '@/components/Timer';
import { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
}

export default function TimerContainer({label} : Props){
  const [timers,setTimers] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Timer></Timer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});