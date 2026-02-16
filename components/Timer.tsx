//import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type Props = {
  timerName: string;
  duration: number;
}

export default function Timer({timerName, duration}:Props){
  const [currentDuration, setCurrentDuration] = useState(duration);
  const intitialDuration = duration;
  const startingTime = new Date().getTime();

  let fillPercent = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDuration((previousDuration) => previousDuration - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondsToTimeFormat = (seconds:number) => {
    if (seconds <= 0) {
      fillPercent = 100;
      return "00:00:00";
    }
    let second = Intl.NumberFormat("en",{minimumIntegerDigits:2}).format(Math.floor(seconds % 60))
    let minute = Intl.NumberFormat("en",{minimumIntegerDigits:2}).format(Math.floor(seconds / 60));
    let hour = Intl.NumberFormat("en",{minimumIntegerDigits:2}).format(Math.floor(seconds / 3600));
    let outputString = hour+":"+minute+":"+second;

    fillPercent = 100 - ((currentDuration / intitialDuration) * 100);
    return outputString;
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.text}>
        {timerName}
      </Text>
      <Text style={styles.text}>
        {secondsToTimeFormat(currentDuration)}
      </Text>
      <AnimatedCircularProgress
      style={styles.progressStyle}
        size={180}
        width={5}
        fill={fillPercent}
        rotation={0}
        tintColor="#ffffff"
        lineCap='round'
        backgroundColor='#000000'
        />
    </View>
  );
}


const styles = StyleSheet.create({  
  timerContainer: {
    backgroundColor: '#303336',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:90,
    width:180,
    height:180,
    margin:10,
  },
  progressStyle: {
    position:"absolute"
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});