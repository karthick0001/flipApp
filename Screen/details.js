import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, Image, StyleSheet, Pressable, Button, TouchableOpacity, TouchableHighlight, ScrollView, Alert } from "react-native"
import HeaderShown from "./HeaderShown";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import FeatherIcons from "react-native-vector-icons/Feather";
import { AirbnbRating } from "react-native-ratings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import MessengerAction from "../redux/messager/actions";
import ShowSnackMsg from "./SnackBar";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Details = ({ navigation, route }) => {
    const { cartList } = useSelector((state) => state.MessangerReducer);
    const dispatch = useDispatch()
    const [liked, setLiked] = useState(false);
    var [products, setProducts] = useState([]);
    const { data } = route.params;
    const { params } = navigation.getState();
    const [count, setCount] = useState(0);
    console.log('cartList', cartList)
    console.log('data', data)

    const ProductNameApi = async () => {
        try {
            const productresp = await fetch(`https://fakestoreapi.com/products/${id}`)
            const productres = await productresp.json();
            setProducts(products = productres)
            console.log(products)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        ProductNameApi()
    }, [])

    const ProductSaveCart = () => {

        // AsyncStorage.setItem('any_key_here', JSON.stringify(data));
        if (data?.id) {
            if (cartList.find((List) => List?.id === data?.id)) {
                ShowSnackMsg({ msg: "Your Product Already Added" })
                dispatch({
                    type: MessengerAction.SET_CART_LIST, payload: [...cartList]
                }
                );
            } else {
                ShowSnackMsg({ msg: "Your Product Successfully Added" })
                setCount((count + 1))
                dispatch({
                    type: MessengerAction.SET_CART_LIST, payload: [...cartList, { ...data, count: 1, cartPrice: data.price }]
                }
                );
            }
        } else {

        }

    }
    const OnRemoveList = (item, index) => {
        setProducts(cartList.filter((item, inx) => index !== inx))
    }

    return (
        <View style={{ paddingTop: 10, }}>
            <View style={{ paddingHorizontal: 15, paddingVertical: 30, flexDirection: "row", alignItems: "center", }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IoniconsIcons style={{ fontSize: 28, color: "#7c7c7c", paddingRight: 5, }} name='arrow-back-outline' />
                </TouchableOpacity>
                <Text style={{ fontSize: 23, color: "#0e0e0e", fontWeight: "700", fontFamily: 'Poppins-Regular', flex: 1, paddingHorizontal: 10, }}>Categories Name</Text>
                <TouchableOpacity onPress={() => navigation.navigate('addtocart')}>
                    <FeatherIcons style={{ fontSize: 26, color: "#5bac6a", paddingRight: 5 }} name='shopping-cart' />
                    <View style={{
                        width: 20, height: 20, backgroundColor: "red",
                        borderRadius: 10, position: "absolute", top: -7, right: -3
                    }}>
                        <Text style={{
                            color: "#fff", fontWeight: "700", fontSize: 16,
                            justifyContent: "center", alignItems: "center", textAlign: "center"
                        }}
                        >{cartList?.length}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            {/* <HeaderShown navigation={navigation} /> */}
            {/* title={data.title.toString()} */}
            <ScrollView style={{ height: height * 0.87, width: width }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                        <IoniconsIcons style={{ fontSize: 26, paddingRight: 5, }}
                            name={liked ? 'heart-sharp' : 'heart-outline'}
                            color={liked ? '#FF0000' : '#b5b5b5'}
                        />
                    </Pressable>
                    <View style={{ alignItems: "center", }}>
                        <Image resizeMode="contain" style={{ width: width * 0.50, height: height * 0.33, }} source={{ uri: data.image }} />
                    </View>
                    <Text style={{
                        fontSize: 22, color: "#002422", fontWeight: "700", fontFamily: 'Poppins-Regular',
                        lineHeight: 30, paddingTop: 15,
                    }}>{data.title}</Text>
                    <View style={{
                        flexDirection: "row", alignItems: "center",
                        justifyContent: "space-between", paddingVertical: 15
                    }}>
                        <Text style={{
                            fontSize: 20, paddingVertical: 10, fontWeight: "700",
                            color: "#5bac6a", fontFamily: 'Poppins-Regular',
                        }}> ${data.price}</Text>
                        <AirbnbRating
                            count={5}
                            defaultRating={4}
                            size={20}
                            showRating={false}
                            style={{ paddingRight: 1 }}
                        />
                    </View>
                    {/* <View style={{
                        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                        paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10,
                    }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableHighlight onPress={Decrease} activeOpacity={0.7} underlayColor="#5bac6a61" style={{ borderRadius: 50 }}>
                                <FeatherIcons style={[styles.CountBtnStyle]} name='minus' />
                            </TouchableHighlight>
                            <Text style={{ fontSize: 27, fontWeight: "500", color: "#000", paddingHorizontal: 15 }}>{count}</Text>
                            <TouchableHighlight onPress={Increase} activeOpacity={0.7} underlayColor="#5bac6a61" style={{ borderRadius: 50 }} >
                                <FeatherIcons style={[styles.CountBtnStyle]} name='plus' />
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => { ProductSaveCart()}}>
                                <Text style={[styles.AddBtnStyle]}>ADD</Text>
                            </TouchableOpacity>

                        </View>
                    </View> */}
                    <View>
                        <Text style={{
                            fontSize: 22, color: "#000", fontWeight: "700",
                            fontFamily: 'Poppins-Regular',
                        }}>Details</Text>
                        <Text style={{
                            fontSize: 18, color: "#bbb", fontFamily: 'Poppins-Regular',
                            lineHeight: 25, paddingTop: 8,
                        }}>{data.description}</Text>
                    </View>
                    <TouchableOpacity style={[styles.AddBtnStyle]} onPress={() => { ProductSaveCart() }}>
                        <Text style={{ fontSize: 17, color: "#fff", fontWeight: "700", fontFamily: 'Poppins-Regular', }}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.BuyBtn]}>
                        <Text style={{ fontSize: 17, color: "#fff", fontWeight: "700", fontFamily: 'Poppins-Regular', }}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    CountBtnStyle: {
        fontSize: 22,
        color: "#5bac6a",
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "#5bac6a61",
        borderRadius: 50,
    },
    AddBtnStyle: {
        backgroundColor: "#5bac6a",
        paddingHorizontal: 35,
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: "center",
        justifyContentL: "center",
        alignContent: "center",
        marginTop: 30,
    },
    BuyBtn: {
        backgroundColor: "#5bac6a",
        paddingHorizontal: 35,
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: "center",
        justifyContentL: "center",
        alignContent: "center",
        marginTop: 10,


    }

})
export default Details;