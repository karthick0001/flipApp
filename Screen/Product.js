import React, { useEffect, useState } from "react";
import { View,Text, ScrollView, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MessengerAction from "../redux/messager/actions";


// const height = Dimensions.get("window").height;
// const width = Dimensions.get("window").width;

const Product =() =>{

    const { productList ,selectedCategory} = useSelector((state) => state.MessangerReducer);
    const [filteredProducts,setfilteredProducts]=useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:MessengerAction.GET_PRODUCTS_LIST})
    },[])
    useEffect(()=>{
        if(selectedCategory&&productList.length){
            setfilteredProducts(productList.filter(el=>el.category===selectedCategory))
        }else{
            setfilteredProducts(productList)
        }
    },[selectedCategory,productList])
    return(
        <ScrollView>
            <View>
            {filteredProducts.map((item)=>
              <View style={{padding:20}}>
                <Text>{item.title}</Text>
                <Text>{item.category}</Text>
              </View>
            )}
        </View>
        </ScrollView>
    );
}

export default Product;