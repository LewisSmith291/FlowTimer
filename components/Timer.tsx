//import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

type Props = {
  timerName: string;
  duration: number;
  startTime: Date;
}

export default function Timer({timerName, duration, startTime}:Props){

  const [currentDuration, setCurrentDuration] = useState(duration);

  const startingTime = startTime;

  let durationString = "00:00:00";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDuration((previousDuration) => previousDuration - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  durationString=""+currentDuration;

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.text}>
        {timerName}
      </Text>
      <Text style={styles.text}>
        {durationString}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({  
  timerContainer: {
    backgroundColor: '#303336',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding:10,
    borderRadius:15,
    width:"48%",
    margin:"1%"
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});