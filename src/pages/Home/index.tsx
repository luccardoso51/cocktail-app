import {Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import RandomDrinkPage from '../DrinkDetails';
import CategoryDrinks from '../../components/CategoryDrinks';

export default function Home({navigation}) {





  return (
      <View style={styles.content}>
        <CategoryDrinks/>
       <TouchableOpacity onPress={() => navigation.navigate('RandomDrinkPage', {name: 'A Random Drink'})}>
        <Text style={styles.drinkName}>random</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate('DrinkDetails', {name: 'Drink Details'})}>
        <Text style={styles.drinkName}>DrinkPage</Text>
       </TouchableOpacity>

      </View>
  )
}

const styles = StyleSheet.create({
  scrolview:{
    flex:1,
    
  },
  content:{
    flex:1,
    justifyContent: 'center', 
    alignItems:'center', 
    height:'100%',
    backgroundColor: "#000",
    width:'100%'

  },
  drinkImage:{
    opacity:0.85,
    resizeMode:'cover',
    height:500,
    justifyContent:'flex-end'
    // backgroundColor: "#000"
  },
  drinkName:{
    fontSize:32,
    fontWeight:'800',
    color:"#FFF",
    marginHorizontal:15
  }
});
