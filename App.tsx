import { SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.headingTxtContainer}>
        <Text style={styles.headingTxt}> Currency Converter</Text>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Enter Value</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    backgroundColor: '#2B303A',
    flexDirection: 'column'

  },
  headingTxtContainer: {
    height: 100,
    width: "100%",
    borderColor: 'black',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingTxt:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D64933',
    fontFamily: 'monospace',
  },
  textInputContainer:{
    
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text:{
    fontSize: 30,
    marginBottom: 40
  },
  textInput:{
    height: 50,
    width: 100,
    borderRadius: 15,
    backgroundColor: 'white',


  }
})