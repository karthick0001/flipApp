import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HeaderShown from "./HeaderShown";
import EntypoIcons from "react-native-vector-icons/Entypo";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

const Checkout = ({ navigation }) => {
    return (
        <View>
            <HeaderShown navigation={navigation} />
            <View style={{ paddingHorizontal: 15 }}>
                <View style={{
                    borderWidth: 3,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderColor: "#5bac6a",
                    borderRadius: 2,
                }}>
                    <Text style={styles.CheckoutTitleOne}>
                        Delivery, address
                    </Text>
                    <View style={[styles.CheckoutFlex]}>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <View>
                                <EntypoIcons style={{
                                    fontSize: 28,
                                    color: "#5bac6a",
                                    paddingRight: 5,
                                }} name='location' />
                            </View>
                            <View>
                                <Text style={[styles.CheckoutTitleTwo]}>
                                    123 Main Street
                                </Text>
                                <Text>
                                    Rammurthy nagar, Bangalore-560016
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text style={[styles.CheckoutChange]}>
                                Change
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={styles.CheckoutTitleOne}>
                            Payment
                        </Text>
                        <View style={[styles.CheckoutFlex]}>
                            <View style={{ flexDirection: "row", alignItems: "center", }}>
                                <View>
                                    <FontAwesomeIcons style={{
                                        fontSize: 28,
                                        color: "#1A1F71",
                                        paddingRight: 5,
                                    }} name='cc-visa' />
                                </View>
                                <View>
                                    <Text style={[styles.CheckoutTitleTwo]}>
                                        Ending in 1234
                                    </Text>
                                    <Text>
                                        123 main Street
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Text style={[styles.CheckoutChange]}>
                                    Change
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    CheckoutTitleOne: {
        fontSize: 20,
        fontWeight: "500",
        color: "#0e0e0e",
    },
    CheckoutTitleTwo: {
        fontSize: 18,
        fontWeight: "400",
        color: "#0e0e0e",
    },
    CheckoutChange: {
        color: "#5bac6a",
        fontSize: 17,
        fontWeight: "500"
    },
    CheckoutFlex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 10,
    }
})
export default Checkout;