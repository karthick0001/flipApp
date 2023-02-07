import React, { useEffect } from "react";
import { View, Text, Dimensions, Image } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Splash =({navigation}) =>{
    
useEffect (()=>{
   setTimeout(()=>navigation.replace('bottomtab'),4000);
},[])

    return(
        <View style={{backgroundColor:"rgba(255, 234, 221, 0.8)",height:height,}}>
            <View style={{alignItems:"center", justifyContent:"center",alignContent:"center",height:"100%"}}>
            <Image
             style={{width:250,}} 
             source={require('../assets/image/splash.png')} />
            </View>
            {/* <View>Dummy Text</View>
            <View>Dummy Text</View> */}
        </View>
    );
}

export default Splash;