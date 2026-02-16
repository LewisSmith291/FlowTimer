import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


export default function AddTimerButton() {
  return (
    <View style={styles.plusContainer}>
      <Image style={styles.plusIcon} source={require('@/assets/images/Plus.png')}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  plusContainer:{
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    backgroundColor:"#25292e",
    width:100,
    height:100,
    borderRadius:50,
    margin:"1%",
  },
  plusIcon:{
    width:50,
    height:50,
  },
})