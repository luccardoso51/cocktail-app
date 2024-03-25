import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import  Header  from '../../components/Header';

export default function RandomDrinkPage({navigation}) {

  interface IDrink {
      name:string;
      img:string;
      instructions:string;
      ingredients:[];
      measures:[];
  }

  const [drinks, setDrinks] = useState<IDrink[{}]>({
    name:"",
    img:"",
    instructions: "",
    ingredients:[],
    measures:[],
  });
  useEffect(() => {
    const getRandomCocktail = async () => {
      const {data} = await api.get(
        'random.php',
      );
      // console.log(data.drinks);
      const randomDrink = data.drinks[0];
      const ingredientArray = []

      for(let i=1; i<16; i++){

        if(randomDrink[`strIngredient${i}`] == null){
          break;
        }
        const ingredient = randomDrink[`strIngredient${i}`]

        ingredientArray.push(ingredient)
        
      }
      console.log(ingredientArray)

      const measuresArray = []

      for(let i=1; i<16; i++){

        if(randomDrink[`strMeasure${i}`]  == null){
          break;
        }
        if(randomDrink[`strIngredient${i}`] == null){
          break;
        }
        const ingredient = randomDrink[`strMeasure${i}`]  + ' - ' + randomDrink[`strIngredient${i}`]

        measuresArray.push(ingredient)
        
      }
      console.log(measuresArray)

      setDrinks({
        name: randomDrink.strDrink,
        img: randomDrink.strDrinkThumb,
        instructions: randomDrink.strInstructions,
        ingredients: ingredientArray,
        measures: measuresArray,
      });
      console.log(data.drinks);

      return 
    };

    getRandomCocktail();
  }, []);

  
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: "#000"}}>
        <View style={styles.content}>
          <View style={{width:"100%"}}>
            <ImageBackground style={styles.drinkImage} source={{uri:drinks.img}}>
            {/* <Header/> */}
            <LinearGradient style={{height:70, justifyContent:'center', alignContent:'center' }}   start={{x: 0, y: 0.02}} end={{x: 0, y: 0.85}} colors={['transparent', '#000']} >
              <Text style={styles.drinkName}>{drinks.name}</Text> 
            </LinearGradient>
            </ImageBackground>
          </View>

          <Text style={styles.descriptions}>Ingredients:</Text>
            {drinks.measures.map(measure => <Text style={styles.textIngredients}>{measure}</Text>)}
          
          <Text style={styles.descriptions}>Instructions:</Text>
          <Text style={styles.text}>{drinks.instructions}</Text>       
      
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  content:{
    flex:1, justifyContent: 'center',
    // backgroundColor: "#000"
  },
  drinkImage:{
    opacity:0.85,
    resizeMode:'cover',
    height:500,
    justifyContent:'flex-end'
    // backgroundColor: "#000"
  },
  text:{
    fontSize:20,
    color:"#FFF",
    marginHorizontal:15,
    marginVertical:5,
    fontWeight:300,

  },
  textIngredients:{
    fontSize:20,
    color:"#FFF",
    marginHorizontal:15,
    marginVertical:2,
    fontWeight:300,

  },
  descriptions:{
    fontSize:22,
    fontWeight:600,
    color:"#FFF",
    marginHorizontal:15,
    marginVertical:5
  },
  drinkName:{
    fontSize:32,
    fontWeight:800,
    color:"#FFF",
    marginHorizontal:15
  }
});
