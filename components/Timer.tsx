//import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function Timer(){
  const [duration, setDuration] = useState("00:00");
  const startTime = "00:00";
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.text}>
        Name of Timer
      </Text>
      <Text style={styles.text}>
        {duration}
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
    borderRadius:15
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});