import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import ActiveInvestment from "../../components/ActiveInvestment/ActiveInvestment";
import AppButton from "../../components/AppButton/AppButton";
import ElapsedInvestment from "../../components/ElapsedInvestment/ElapsedInvestment";
import { COLORS } from "../../constants/Colors";
import { Height, Width } from "../../constants/Layout";
import { firestore } from "../../firebase/config";
import {
  setActiveInvestment,
  setElapsedInvestment,
  setPendingInvestment,
} from "../../redux/investment/actions";
const { width, height } = Dimensions.get("window");
// const COLORS = { primary: "#ffffff", white: "#010101" };

import { styles } from "./styles";
import InvestmentPreview from "../../components/InvestmentPreview/InvestmentPreview";
const slides = [
  {
    id: "1",
    data: () => <ActiveInvestment />,
  },
  {
    id: "2",
    data: () => <ElapsedInvestment />,
  },
];
const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center", height: Height * 0.6 }}>
      <View style={{ width: Width, alignItems: "center" }}>{item.data()}</View>
    </View>
  );
};
const Investment = () => {
  const user = useSelector(({ user }) => user.currentUser);
  const investments = useSelector(
    ({ investments }) => investments.activeInvestments
  );
  const pending = useSelector(
    ({ investments }) => investments.pendingInvestments
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const onNavigateToActive = () => {
    const activeScreen = currentSlideIndex - 1;
    if (currentSlideIndex === 1) {
      const offset = activeScreen * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };
  3;
  const onNavigateToElapsed = () => {
    const elapsedScreen = currentSlideIndex + 1;
    if (currentSlideIndex === 0) {
      const offset = elapsedScreen * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const investmentRef = firestore
    .collection("investments")
    .doc(user.id)
    .collection("investments");

  const OnLoadInvestments = () => {
    setIsLoading(true);
    investmentRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        const activeInvestment = [];
        const elapsedInvestment = [];
        const pending = { status: false, count: 0 };
        snapShot.docs.forEach((item, index) => {
          if (!item.data().confirmed) {
            pending.status = true;
            pending.count++;
          }
          activeInvestment.push(item.data());
          // console.log(item.data());
          // if (item.data().elapsed_date * 1 > Date.now()) {
          //   activeInvestment.push(item.data);
          // } else {
          //   elapsedInvestment.push(item.data);
          // }
          dispatch(
            setActiveInvestment(
              activeInvestment.filter((item, index) => item.confirmed)
            )
          );
          // if (index === snapShot.size - 1) {
          //   dispatch(setPendingInvestment(pending));
          //   dispatch(setActiveInvestment(activeInvestment));
          //   dispatch(setElapsedInvestment(elapsedInvestment));
          // }
        });
      }
    });
    setIsLoading(false);
  };
  useEffect(() => {
    OnLoadInvestments();
  }, []);
  return (
    <>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{ flexDirection: "row", alignItems: "center", width: 60 }}
            >
              <Ionicons name="chevron-back-outline" size={24} color="#ffffff" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.routeTitle}>Investments</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View style={styles.wallet}>
          <View style={styles.walletMainTextsContainer}>
            <Text style={styles.walletMainTextBold}>
              ₦ {user.total_invested || ` ${"00.00"}`}
            </Text>
          </View>
          <View style={styles.walletButtons}>
            <AppButton
              title="Active"
              onPress={() => {}}
              customStyle={{
                ...styles.walletBtn,
                backgroundColor:
                  currentSlideIndex == 0 ? COLORS.white : COLORS.lightTint,
              }}
              textStyle={{
                textTransform: "capitalize",
                fontWeight: "400",
                fontSize: 12,
                color: currentSlideIndex == 0 ? COLORS.lightTint : COLORS.white,
              }}
            />
          </View>
        </View>
        <ActiveInvestment />
      </ScrollView>
      <View style={{ ...styles.buttonContainer }}>
        {pending.status && (
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("Pending");
            }}
          >
            <View style={styles.button}>
              <Text
                style={{
                  color: COLORS.cloudyWhite,
                  position: "absolute",
                  top: 1,
                  fontSize: responsiveFontSize(2),
                }}
              >
                {pending.count}
              </Text>
              <MaterialIcons name="pending-actions" size={20} color="white" />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Investment;
