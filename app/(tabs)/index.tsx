import TimerContainer from "@/components/TimerContainer";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function Index() {
  const press = (duration:number) =>{
    alert(duration);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight 
          underlayColor="#646464"
          style={styles.headerTimer} 
          onPress={() => press(60)}>
          <View>
            <Text style={styles.text}>1h</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          underlayColor="#646464"
          style={styles.headerTimer} 
          onPress={() => press(30)}>
          <View>
            <Text style={styles.text}>30m</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          underlayColor="#646464"
          style={styles.headerTimer} 
          onPress={() => press(10)}>
          <View>
            <Text style={styles.text}>10m</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          underlayColor="#646464"
          style={styles.headerTimer} 
          onPress={() => press(5)}>
          <View>
            <Text style={styles.text}>5m</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          underlayColor="#646464"
          style={styles.headerTimer} 
          onPress={() => press(1)}>
          <View>
            <Text style={styles.text}>1m</Text>
          </View>
        </TouchableHighlight>
      </View>
      <TimerContainer label={"Hello"}></TimerContainer>
      <TimerContainer label={"Hello"}></TimerContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'#353c44',
    width:'100%',
    height: '5%',
    flexDirection:'row'
  },
  headerTimer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  button: {
    fontSize: 24,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});