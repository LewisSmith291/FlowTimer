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
  /*
    if (Platform.OS === 'android') {
      const [date, setDate] = useState(new Date(Date.now()));

      const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setDate(currentDate);
      };

      const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        })
      }

      const showTimepicker = () => {
        showMode('time');
      };

      return (
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
          <Text style={styles.text}>selected: {date.toLocaleString()}</Text>
        </View>
      );
    }
    else {
      const [date, setDate] = useState(new Date(1598051730000));
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(false);

      const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };

      const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
      };


      const showTimepicker = () => {
        showMode('time');
      };

      return (
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
          <Text>selected: {date.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      );
    }
  */
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: '#303336',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});