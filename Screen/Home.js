import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, StyleSheet, Image, TextInput, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import MessengerAction from "../redux/messager/actions";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    var [categories, setCategories] = useState([]);
    var [products, setProducts] = useState([]);
    var [filterDataStore, setFilterDataStore] = useState("");

    const CategoriesNameApi = async () => {
        const resp = await fetch('https://fakestoreapi.com/products/categories')
        const res = await resp.json();
        setCategories(categories = res);
    }

    const ProductNameApi = async () => {
        const productresp = await fetch('https://fakestoreapi.com/products')
        const productres = await productresp.json();
        setProducts(products = productres)
    }
    const getItem = (item) => {
        alert(' Title : ' + item.title);
    };

    const selectCategory = (val) => {
       
        dispatch({
            type: MessengerAction.SET_CATEGORY, payload: val
        })
        navigation.navigate('product')

    }

    const discountBanner = [
        {
            image: "https://cdn-icons-png.flaticon.com/512/6192/6192909.png",
            offer: "30% Discount",
            content: "Order any food from app and get the discount",
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/1475/1475906.png",
            offer: "70% Discount",
            content: "Order any food from app and get the discount",
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/4164/4164000.png",
            offer: "15% Discount",
            content: "Order any food from app and get the discount",
        },
    ]

    useEffect(() => {
        CategoriesNameApi()
    }, [])

    useEffect(() => {
        
        ProductNameApi()
    }, [])

    return (
        <View style={{ backgroundColor: "#5bac6a" }}>
            <StatusBar translucent backgroundColor='transparent' />
            <View style={[styles.sectionContainer]}>
                <View style={{ paddingTop: 40, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 20, color: "#fff", fontFamily: 'Poppins-Regular', }}>
                            Hey 😊
                        </Text>
                        <Text style={{ fontSize: 20, color: "#fff", paddingTop: 5, fontFamily: 'Poppins-Regular', }}>Lets search your grocery food.</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/image/profile.png')} />
                    </View>
                </View>
                <View style={[styles.input, { justifyContent: "space-between" }]} >
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <IoniconsIcons style={{ fontSize: 25, }} name='search-outline' />
                        <TextInput
                            placeholder="Search your daily grocery food..."
                            value={filterDataStore}
                            onChangeText={(text) => setFilterDataStore(filterDataStore = text)}
                        />
                    </View>
                    <TouchableOpacity onPress={() => setFilterDataStore(filterDataStore = "")}>
                        {filterDataStore !== "" ?
                            <Image source={require("../assets/image/circle.png")} /> : <></>}
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{
                height: height * 0.62,
                backgroundColor: "#fff",
                marginTop: 25, borderTopLeftRadius: 40, borderTopRightRadius: 40
            }}>
                {filterDataStore !== "" ?
                    <View>
                        <ScrollView style={{ paddingVertical: height * 0.01 }}>
                            {
                                products.filter((a) => a.title.toString().toLowerCase().includes(filterDataStore.toLowerCase())).map((item, index) => {
                                    return (
                                        <View style={{ paddingHorizontal: 10, paddingVertical: 8 }}>
                                            <Text style={{
                                                fontSize: 18, color: "#5e5e5e",
                                                fontWeight: "600", borderBottomWidth: 1,
                                                borderColor: "#ddd", paddingBottom: 7,
                                            }} onPress={() => getItem(item)}>
                                                {item.title}

                                            </Text>
                                        </View>
                                    );
                                })
                            }
                        </ScrollView>
                    </View> :
                    <ScrollView>
                        <View style={[styles.sectionContainer]}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                                <Text style={{ fontSize: 21, color: "#000", fontWeight: "900", fontFamily: 'Poppins-Regular' }}>Categories</Text>
                                <Text style={{ fontSize: 19, color: "#5bac6a", fontFamily: 'Poppins-Regular' }}>See all</Text>
                            </View>
                            <ScrollView style={{ paddingTop: 20 }} horizontal showsHorizontalScrollIndicator={false}>
                                {categories.map((item, index) => {
                                    return (
                                        <View style={{ flexDirection: "row" }} key={index}>
                                            <View style={{ flexDirection: "column" }}>
                                                <TouchableOpacity onPress={() => selectCategory(item)}>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <View style={{
                                                            paddingHorizontal: 20, paddingVertical: 20,
                                                            backgroundColor: "#e0ffe9", borderRadius: 10,
                                                        }}>
                                                            <Image style={{ width: width * 0.12, height: height * 0.06, }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6192/6192909.png' }} />
                                                        </View>
                                                        <Text style={{ fontSize: 15, fontWeight: "600", paddingTop: 10, color: "#000", fontFamily: 'Poppins-Regular' }}>{item}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    );
                                })}
                                <View style={{ flexDirection: "row" }} >
                                            <View style={{ flexDirection: "column" }}>
                                                <TouchableOpacity onPress={() => selectCategory("")}>
                                                    <View style={{ alignItems: "center", marginRight: 15 }}>
                                                        <View style={{
                                                            paddingHorizontal: 20, paddingVertical: 20,
                                                            backgroundColor: "#e0ffe9", borderRadius: 10,
                                                        }}>
                                                            <Image style={{ width: width * 0.12, height: height * 0.06, }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6192/6192909.png' }} />
                                                        </View>
                                                        <Text style={{ fontSize: 15, fontWeight: "600", paddingTop: 10, color: "#000", fontFamily: 'Poppins-Regular' }}>All</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                            </ScrollView>
                        </View>
                        <ScrollView style={{ paddingTop: 30, paddingLeft: 10, }} horizontal>

                            {discountBanner.map((item, index) => {
                                return (
                                    <View style={{ margin: 10, }} map={index}>
                                        <View style={{
                                            backgroundColor: "#c8e5d1",
                                            flexDirection: 'row', borderRadius: 25,
                                            paddingHorizontal: 10, paddingVertical: 20,
                                        }} >
                                            <View style={{ paddingRight: 10 }}>
                                                <Image style={{ width: 80, height: 80, }}
                                                    source={{ uri: item.image }} />
                                            </View>
                                            <View style={{ paddingRight: 10, width: 180, }}>
                                                <Text style={{ fontSize: 20, color: "#5bac6a", fontWeight: "600" }}>{item.offer}</Text>
                                                <Text style={{ fontSize: 14, fontWeight: "500", paddingVertical: 10 }}>{item.content}</Text>
                                                <Image style={{ width: 30, height: 30, position: "absolute", bottom: 5, left: -6 }} source={require('../assets/image/curved-arrow.png')} />
                                                <Text style={{ fontSize: 16, color: "#5bac6a", fontWeight: "500", paddingLeft: 30, }}>Order Now</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}
                        </ScrollView>
                        <View style={[styles.Horizz]}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                                <Text style={{ fontSize: 21, color: "#000", fontWeight: "900", fontFamily: 'Poppins-Regular' }}>Popular deals</Text>
                                <Text style={{ fontSize: 19, color: "#5bac6a", fontFamily: 'Poppins-Regular' }}>See all</Text>
                            </View>

                            <ScrollView style={{ paddingTop: 10, paddingBottom: 5 }} horizontal showsHorizontalScrollIndicator={false}>
                                {products.map((item, index) => {
                                    return (
                                        <View style={{ flexDirection: "row" }} key={index}>
                                            <View style={{ flexDirection: "column" }}>
                                                <TouchableOpacity onPress={() => { navigation.navigate('details', { data: item }) }}>
                                                    <View style={{ alignItems: "center", marginRight: 25 }}>
                                                        <Image style={{ width: width * 0.3, height: height * 0.15, borderRadius: 10, }} source={{ uri: item.image }} />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    );
                                })}
                            </ScrollView>

                        </View>
                    </ScrollView>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    Container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    Horizz: {
        paddingHorizontal: 24,
        marginTop: 15,
    },
    naviBar: {
        padding: 20,
        fontSize: 20,
    },
    input: {
        fontSize: 20,
        color: "#fff",
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Home;