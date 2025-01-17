import { Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { currencyByCad } from './constants';
import Snackbar from 'react-native-snackbar';

export default function App() {

  const[inputValue,setInputValue] = useState(+'');
  const[exchangeValue,setExchangeValue] = useState(+'');
  const[resultValue,setResultValue] = useState(+'');


  const convert = (value:number,currency) => {
    
    if (!inputValue || isNaN(inputValue)) {
      return Snackbar.show({
        text: 'Please enter a valid CAD value!',
        backgroundColor: 'black',
        textColor: 'white',
        duration: Snackbar.LENGTH_LONG, // Default is LENGTH_SHORT
      });
      
      
    } else {
      const result = value * +inputValue;
      setResultValue(+result);
      setExchangeValue(currency);
    }
    
  }


  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.headingTxtContainer}>
        <Image style={styles.headingIcon} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/6204/6204216.png' }}/>
        <Text style={styles.headingTxt}> Currency Converter</Text>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Enter CAD</Text>
        <TextInput style={styles.textInput} onChangeText={(text) => setInputValue(+text)} placeholder='Ex:10'/>
      </View>
      <View style={styles.buttonContainer}>
        {currencyByCad.map((currency) => (
          <TouchableOpacity key={currency.symbol} style={styles.button} onPress={() => convert(currency.value, currency.symbol)}>
            <Image style={styles.buttonImg} source={{ uri: currency.flag }} />
            <Text style={styles.buttonTxt}>
               {currency.name}
            </Text>
          </TouchableOpacity>
      ))}
        
        

      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{exchangeValue} {parseFloat(resultValue.toFixed(4))} </Text>
      </View>
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    backgroundColor: '#38182F',
    flexDirection: 'column'

  },
  headingTxtContainer: {
    height: 100,
    width: "100%",
    borderColor: 'black',
    borderWidth: 5,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  headingTxt:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#330036',
    fontFamily: 'monospace',
  },
  headingIcon:{
    height:40,
    width:30

  },
  textInputContainer:{
    
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'

  },
  text:{
    fontSize: 30,
    marginBottom: 40,
    fontWeight: 'bold'
  },
  textInput:{
    height: 50,
    width: 120,
    borderRadius: 15,
    backgroundColor: 'white',


  },
  buttonContainer : {
    margin: 30,
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'


  },
  button : {
    height: 40,
    width: 110,
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row'
    
    
    
  },
  buttonTxt : {
    color: '#56666B',
    fontSize: 17,
    
  },
  buttonImg:{
    margin:5,
    height: 20,
    width:20

  },
  displayContainer:{
    width: '60%',
    height: 100,
    backgroundColor: '#EEE1B3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 150,
    marginTop: -150,
    borderBlockColor: 'black',
    borderWidth: 10,
  },
  displayText : {
    fontSize: 25,

  }
})