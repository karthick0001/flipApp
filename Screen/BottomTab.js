import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Order from "./Order";
import AddToCart from "./AddToCart";
import Offer from "./Product";
import MoreOption from "./More";
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";
import  AntDesignIcons  from "react-native-vector-icons/AntDesign";
import  IoniconsIcons  from "react-native-vector-icons/Ionicons";
import { ImageBackground, View,Text } from "react-native";
import { useSelector } from "react-redux";
import Product from "./Product";



const Tab = createBottomTabNavigator();

const BottomTab =() =>{
  const { cartList } = useSelector((state) => state.MessangerReducer);
return(
    <Tab.Navigator screenOptions={{ 
      tabBarStyle: {
          height: 70, backgroundColor: '#5bac6a',
          top: 0,
          marginTop: 0,
          shadowColor: '#000',
          shadowOffset: {
              width: 0,
              height: 5
          },
          shadowRadius: 3,
          shadowOpacity: 2,
          borderTopRightRadius:40,
          borderTopLeftRadius:40,
          
      }
  }}>
      <Tab.Screen options={{
                headerShown:false,
                tabBarLabel: "Home",
                tabBarActiveTintColor:"#fff",
                tabBarInactiveTintColor:"#ffffffa1",
                tabBarLabelStyle:{fontSize:16, paddingBottom:8,},
                tabBarIcon: ({ focused, color, size }) => (
                  <MaterialCommunityIcons style={{ paddingTop: 15, }} color={focused ? '#fff' : '#ffffffa1'}
                      size={focused ? 30 : 25} name='view-grid-outline' />
              )
            }}
       name="home" component={Home} />
      <Tab.Screen
      options={{
        tabBarLabel: "Order",
        tabBarActiveTintColor:"#fff",
        tabBarInactiveTintColor:"#ffffffa1",
        tabBarLabelStyle:{fontSize:16, paddingBottom:8,},
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons style={{ paddingTop: 15, zIndex:9,}} color={focused ? '#fff' : '#ffffffa1'}
              size={focused ? 33 : 28} name='hoop-house' />
      )
    }}
      name="order" component={Order} />
      <Tab.Screen
      options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarActiveTintColor:"#fff",
        tabBarInactiveTintColor:"#ffffffa1",
        tabBarLabelStyle:{fontSize:16, paddingBottom:20,overflow:"hidden"},
        tabBarIcon: ({ focused, color, size }) => (
          <View>
            <AntDesignIcons style={{ paddingTop: 23, top:0, left:-1, borderWidth:8, height:70, borderRadius:100, padding:5,paddingLeft:16, borderColor:"#5bac6a" }} color={focused ? '#000' : '#1b6829'}
              size={focused ? 30 : 30} name='shoppingcart' />
              <ImageBackground style={{ position:"absolute", height:60, width:150,left:-44, top:20, zIndex:-10, elevation:4, }} source={require("../assets/image/search_BG.png")} />
              <View style={{
                        width: 20, height: 20, backgroundColor: "red",
                        borderRadius: 10, position: "absolute", top: 15, right: 10
                    }}>
                        <Text style={{
                            color: "#fff", fontWeight: "700", fontSize: 16,
                            justifyContent: "center", alignItems: "center", textAlign: "center"
                        }}
                        >{cartList?.length}</Text>
                    </View>
          </View>
          
          
      )
    }}
      name="addtocart" component={AddToCart}  />

      <Tab.Screen
      options={{
        tabBarLabel: "Product",
        tabBarActiveTintColor:"#fff",
        tabBarInactiveTintColor:"#ffffffa1",
        tabBarLabelStyle:{fontSize:16, paddingBottom:8,},
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons style={{ paddingTop: 15, }} color={focused ? '#fff' : '#ffffffa1'}
              size={focused ? 30 : 25} name='gift-outline' />
      )
    }}
      name="product" component={Product} />

      <Tab.Screen
      options={{
        tabBarLabel: "Settings",
        tabBarActiveTintColor:"#fff",
        tabBarInactiveTintColor:"#ffffffa1",
        tabBarLabelStyle:{fontSize:16, paddingBottom:8,},
        tabBarIcon: ({ focused, color, size }) => (
          <IoniconsIcons style={{ paddingTop: 15, }} color={focused ? '#fff' : '#ffffffa1'}
              size={focused ? 30 : 25} name='options-outline' />
      )
    }}
      name="moreoption" component={MoreOption} />
    </Tab.Navigator>
);
}



export default BottomTab;