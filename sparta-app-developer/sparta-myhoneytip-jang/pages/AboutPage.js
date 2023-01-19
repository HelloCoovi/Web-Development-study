import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import * as Linking from "expo-linking";

const personImage =
  "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png";

const link = () => {
  Linking.openURL("https://www.youtube.com/");
};

export default function AboutPage({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      title: "소개 페이지",
      headerStyle: {
        backgroundColor: "#3967FF",
        shadowColor: "#3967FF",
      },
      headerTintColor: "#fff",
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomePost}>
        Hi! 스파르타코딩 앱개발반에 오신것을 환영합니다
      </Text>
      <View style={styles.card}>
        <Image source={{ uri: personImage }} style={styles.personImage} />
        <Text style={styles.subTitle}>
          많은 내용을 간결하게 담아내려 노력했습니다!
        </Text>
        <Text style={styles.paragraph}>
          꼭 완주 하셔서 여러분것으로 만들어가시길 바랍니다.
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => {
            link();
          }}
        >
          <Text style={styles.buttonText}>여러분의 인스타 계정</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3967FF",
  },
  welcomePost: {
    color: "white",
    fontSize: 30,
    marginTop: 40,
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "800",
  },
  card: {
    width: "80%",
    height: "75%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 20,
  },
  personImage: {
    width: 170,
    height: 170,
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 40,
  },
  subTitle: {
    textAlign: "center",
    margin: 20,
    marginBottom: 0,
    fontSize: 19,
    fontWeight: "700",
  },
  paragraph: {
    textAlign: "center",
    margin: 10,
    fontSize: 15,
  },
  linkButton: {
    alignSelf: "center",
    backgroundColor: "#FFB535",
    width: 160,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    alignItems: "center",
  },
});
