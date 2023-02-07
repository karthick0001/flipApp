import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IoniconsIcons from "react-native-vector-icons/Ionicons";
import FeatherIcons from "react-native-vector-icons/Feather";

const HeaderShown = ({ title, navigation, }) => {
    
    return (
        <View>
            <View style={{ paddingHorizontal: 15, paddingVertical: 30, flexDirection: "row", alignItems: "center", }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IoniconsIcons style={{ fontSize: 28, color: "#7c7c7c", paddingRight: 5, }} name='arrow-back-outline' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HeaderShown;