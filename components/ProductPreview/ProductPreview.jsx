import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Image, Text } from "react-native";
import AppButton from "../AppButton/AppButton";
import { styles } from "./styles";

export default function ProductPreview({ data, customStyles }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ProductView");
  };
  return (
    <>
      <View style={[styles.productCard, { ...customStyles }]}>
        <View style={styles.plan}>
          <Text style={styles.planText}>ROI: {data.roi}%</Text>
        </View>
        <View style={styles.productCardImageContainer}>
          <Image
            style={styles.productCardImage}
            source={require("../../assets/logos/bb.png")}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardInfoName}>{data.package}</Text>
          <Text style={[styles.cardInfoLightText, { marginBottom: 6 }]}>
            Duration: {data.duration}
          </Text>
          <Text style={styles.cardInfoLightText}>Min: ₦{data.min_deposit}</Text>
        </View>
        <View style={styles.productCardFooter}>
          <View style={styles.productCardFooterButtons}>
            <AppButton
              onPress={onPress}
              title="Invest Now"
              customStyle={{
                ...styles.productCardFooterBtn,
                backgroundColor: "#ffffff",
              }}
              textStyle={{
                fontFamily: "FiraCode-Regular",
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
                color: "#cd9931",
              }}
            />
            <AppButton
              onPress={onPress}
              title="View Details"
              customStyle={styles.productCardFooterBtn}
              textStyle={{
                fontFamily: "FiraCode-Regular",
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
