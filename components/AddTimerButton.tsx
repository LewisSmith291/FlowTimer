import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

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
    alignItems:"center",
    backgroundColor:"#25292e",
    width:80,
    height:80,
    borderRadius:15
  },
  plusIcon:{
    width:50,
    height:50,
  },
})