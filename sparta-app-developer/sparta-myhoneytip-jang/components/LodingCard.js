import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const [loadingText, setLoadingText] = useState("잠시만요.");

// useEffect(() => {
//   let i = 0;
//   const loading = ["잠시만요.", "잠시만요...", "잠시만요....."];
//   const interval = setInterval(() => {
//     setLoadingText(loading[i]);
//     i = (i + 1) % 4;
//   }, 300);
//   return () => clearInterval(interval);
// }, []);

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LoadingCard() {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.cardImage} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{loadingText}</Text>
        <Text style={styles.cardDesc} numberOfLines={3}>
          테스트임
        </Text>
        <Text style={styles.cardDate}>테스트임</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: 15,
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
});
