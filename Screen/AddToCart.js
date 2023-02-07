import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, TouchableHighlight, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MessengerAction from "../redux/messager/actions";
import HeaderShown from "./HeaderShown";
import FeatherIcons from "react-native-vector-icons/Feather";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const AddToCart = ({ navigation }) => {

  const { cartList } = useSelector((state) => state.MessangerReducer);
  const [count, setCount] = useState(0);
  const [totalPriceCheck, setTotalPriceCheck] = useState()

  const Increase = (item) => {
    if (cartList.find(el => el.id === item.id)) {
      dispatch({
        type: MessengerAction.SET_CART_LIST, payload:
          cartList.map(el =>
            el.id === item.id ?
              {
                ...el,
                count: (cartList.find(el => el.id === item.id).count) + 1,
                cartPrice: (cartList.find(val => val.id === item.id).cartPrice + item.price)
              }
              :
              el
          )
      })
    }
  }
  const dispatch = useDispatch()
  const Decrease = (item) => {
    if (cartList.find(el => el.id === item.id).count !== 1) {
      dispatch({
        type: MessengerAction.SET_CART_LIST, payload: cartList.map(el =>
          el.id === item.id ?
            {
              ...el,
              count: (cartList.find(el => el.id === item.id).count) - 1,
              cartPrice: (cartList.find(el => el.id === item.id).cartPrice - item.price)
            }
            :
            el)
      })
    } else {
      dispatch({
        type: MessengerAction.SET_CART_LIST, payload: cartList.filter(el =>
          el.id !== item.id)
      })
    }
  }
  const remove = (ind) => {
    let temoData = cartList.filter((val, index) => index !== ind)
    dispatch({
      type: MessengerAction.SET_CART_LIST, payload: temoData
    });
  }
  useEffect(() => {

    if (cartList.length !== 0) {
      let temp = 0
      for (let i = 0; i < cartList.length; i++) {
        temp = temp + cartList[i].cartPrice
      }
      setTotalPriceCheck(parseInt(temp))
    }

  }, [cartList])

  console.log('cartList', cartList)

  return (
    <View style={{ paddingTop: 10, }}>
      <HeaderShown navigation={navigation} />
      <ScrollView>
        <View style={{ height: height * 0.68 }}>
          {cartList.map((item, index) =>
            <View key={index} style={{ paddingHorizontal: 20, flexDirection: "row", elevation: 3, marginHorizontal: 10, paddingVertical: 13, borderColor: "#5bac6a2b", marginVertical: 5, }}>
              <View>
                <Image resizeMode="contain"
                  style={{ width: width * 0.16, height: height * 0.11, }}
                  source={{ uri: item.image }} />

              </View>
              <View style={{ flex: 1, paddingLeft: 15 }}>
                <Text style={{
                  flex: 1, fontSize: 19, fontWeight: "700",
                  color: "#002422", lineHeight: 25, fontFamily: 'Poppins-Regular',
                }}>{item.title}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableHighlight
                      onPress={() => Decrease(item)}
                      activeOpacity={0.7}
                      underlayColor="#5bac6a61"
                      style={{ borderRadius: 50 }}>
                      <FeatherIcons style={[styles.CountBtnStyle]} name='minus' />
                    </TouchableHighlight>
                    <Text style={{ fontSize: 25, fontWeight: "500", color: "#000", paddingHorizontal: 12 }}>{item.count}</Text>
                    <TouchableHighlight
                      onPress={() => Increase(item, index)}
                      activeOpacity={0.7}
                      underlayColor="#5bac6a61"
                      style={{ borderRadius: 50 }} >
                      <FeatherIcons style={[styles.CountBtnStyle]} name='plus' />
                    </TouchableHighlight>
                  </View>
                  <Text style={{ fontSize: 20, fontWeight: "700", color: "#5bac6a" }}>$ {parseInt(item.cartPrice)}</Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
     
     {cartList.length===0?<></>:
     <View style={{ paddingBottom: 20, }} >
          <View style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#c3c3c3",
            paddingVertical: 10,
          }}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#0e0e0e", }}>Total Price :
              <Text style={{ fontSize: 20, fontWeight: "600", color: "#5bac6a", }}>{totalPriceCheck}</Text>
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('checkout')}>
              <Text style={{
                fontSize: 20, fontWeight: "500", color: "#fff", paddingVertical: 8, paddingHorizontal: 15,
                backgroundColor: "#5bac6a",
                borderRadius: 5,
              }}>Check out</Text>
            </TouchableOpacity>
          </View>
        </View>}
        
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  CountBtnStyle: {
    fontSize: 16,
    color: "#5bac6a",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#5bac6a61",
    borderRadius: 50,
  },
})

export default AddToCart;