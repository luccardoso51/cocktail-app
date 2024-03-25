import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../../services/api';


interface IDrink {
    name:string;
    img:string;
    drinkID: string;
}

export default function CategoryDrinks() {
    const [drinks, setDrinks] = useState<IDrink[[{}]]>([
        
    //     {
    //     // name:"",
    //     // img:"",
    //     // drinkID:""
    //   }
    ]);
      const [loading, setLoading] = useState(true);


       useEffect(() => {
        const getRandomCocktail = async () => {
          const {data} = await api.get(
            'filter.php?c=Cocktail',
          );
    

          const categorieArray = data.drinks;
          console.log(loading)

        const populateDrinksArray = async () => {
            await categorieArray.map(drink => {
                console.log(drink);
                const currentDrink =  {
                    name: drink.strDrink,
                    img: drink.strDrinkThumb,
                    drinkID: drink.idDrink
                }
               setDrinks( drinks => [
                       ...drinks ,
                    {
                        name: currentDrink.name,
                        img: currentDrink.img
                     }
                      
                    ])
                }
            )

            if (loading) {
                console.log('crregando')
            } else {
                console.log('carregou')
            }


            return setLoading(false)
        }

        await populateDrinksArray();



        console.log(drinks);

        return 
        }

        getRandomCocktail();


      }, []);



  return (
    <View style={{backgroundColor:"black", flexDirection: 'row'}}>
        {(loading && (<Text style={styles.text}>loading</Text>)) || (
        <>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={drinks}
        renderItem={({item})=>         
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.card}>
                <ImageBackground   imageStyle={{ borderRadius: 15}}
                    style={styles.drinkImage} source={{uri:item.img}}>
                <Text 
                numberOfLines={1}
                style={styles.text}>{item.name}</Text>
                </ImageBackground> 

            </TouchableOpacity>
        </View>
        }
        getItemLayout={(_, index) => ({
            length: 50 + 10, //  WIDTH + (MARGIN_HORIZONTAL * 2)
            offset: (50 + 10) * (index),  //  ( WIDTH + (MARGIN_HORIZONTAL*2) ) * (index)
            index,
          })}        
        initialNumToRender={10}
        keyExtractor={item => item.drinkID}
        />
        </>
        )}   
    </View>
  )
}

const styles = StyleSheet.create({

    text:{
        paddingLeft:5,
        paddingBottom:5,
        fontSize:16,
        fontWeight:'600',
        color:"#FFF",
        width: 140,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
        
    },
    drinkImage:{
        opacity:0.85,
        resizeMode:'cover',
        height:'100%',
        width:'100%',
        justifyContent:'flex-end',

      },

    card:{ 
    alignContent:'center', 
    alignSelf:'center', 
    justifyContent:'center',
    alignItems:'center', 
    paddingHorizontal: 5, 
    marginVertical: 5,
    height:200,
    width:200

    },

    buttonView:{
      
        
    }

})