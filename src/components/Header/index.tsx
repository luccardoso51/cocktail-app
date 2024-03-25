import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { getHeaderTitle } from '@react-navigation/elements';


const Header = ({ navigation, route, options, back }) => {
// const title = getHeaderTitle(options, route.name);


  return (
    <View style={styles.headerView}>
        <LinearGradient  
        style={{height:'100%', justifyContent:'center', alignContent:'center' }}   
        start={{x: 0, y: 0.99}} end={{x: 0, y: 0.2}} 
        colors={['transparent', '#000']} >
        <TouchableOpacity onPress={() => navigation.goBack}>
            <Text style={styles.text}>Voltar</Text>
            {/* <Text style={styles.text}>{title}</Text> */}
        </TouchableOpacity>
        </LinearGradient>
    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({
    headerView:{
        width:"100%",
        justifyContent:'center',
        height: "12%",
    },
    text:{
        fontSize:20,
        color:"#FFF",
        paddingLeft:20
    }

})