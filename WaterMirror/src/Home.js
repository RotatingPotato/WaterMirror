import React from 'react';
import { Alert, Image, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GitHubMark from '../assets/github-mark.png';

const githubUrl = 'https://github.com/RotatingPotato/WaterMirror';

// 頂部區塊
const TopSection = () => {
  return (
    <View style={topStyles.top}>
      <Text style={topStyles.title}>WaterMirror</Text>
      <Text style={topStyles.subtitle}>智慧化水質分析工具</Text>
      <Text style={topStyles.platform}>版本：WaterMirror-{Platform.OS}-alpha-1.0.0</Text>
    </View>
  );
};

// 按鈕區塊
const BtnSection = ({ navigation }) => {
  return (
    <View style={btnStyles.btnContainer}>
      <View style={btnStyles.btnRow}>
        <CustomBtn {...btnData[0]} navigation={navigation} />
        <View style={btnStyles.btnSpace} />
        <CustomBtn {...btnData[1]} navigation={navigation} />
      </View>
      <View style={btnStyles.btnRow}>
        <CustomBtn {...btnData[2]} navigation={navigation} />
        <View style={btnStyles.btnSpace} />
        <CustomBtn {...btnData[3]} navigation={navigation} />
      </View>
    </View>
  );
};

// 自訂按鈕元件
const CustomBtn = ({ bgColor, text, route, navigation }) => {
  // 按鈕點擊事件
  const handlePress = () => {
    if (route.startsWith('http')) {
      Linking.openURL(route); // 如果 route 是 URL，直接打開
    } else {
      navigation.navigate(route); // 否則，使用 navigation 導航
    }
  };

  // 按鈕樣式
  return (
    <TouchableOpacity style={[btnStyles.btn, { backgroundColor: bgColor }]} onPress={handlePress}>
      <Text style={btnStyles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

// 按鈕資料
const btnData = [
  {
    text: '輸入資料',
    route: 'Calc',
    bgColor: '#FFB6C1',
  },
  {
    text: '查閱報表',
    route: 'Result',
    bgColor: '#98FB98',
  },
  {
    text: '聯繫作者',
    route: 'https://kageryo.coderyo.com/',
    bgColor: '#ADD8E6',
  },
  {
    text: '使用教學',
    route: 'https://www.youtube.com/@WaterMirror-NUTC',
    bgColor: '#FFD700',
  },
];

// 底部區塊
const BottomSection = () => {
  return (
    <View style={bottomStyles.bottom}>
      <Text style={bottomStyles.blue}>本專案由國立臺中科技大學</Text>
      <Text style={[bottomStyles.blue, bottomStyles.bottomText]}>智慧生產工程系 張健勳, 吳國維 進行開發</Text>
      <Text style={bottomStyles.bottomText}>若有任何問題，歡迎到本專案GitHub頁面！</Text>
      <TouchableOpacity onPress={openGitHub}>
        <Image source={GitHubMark} style={bottomStyles.githubImg} />
      </TouchableOpacity>
    </View>
  );
};

// 開啟 GitHub 連結
const openGitHub = () => {
  Linking.openURL(githubUrl);
};

// 未完成功能提示
const unfinishedAlert = () => {
  Alert.alert(
    '提示',
    '這個功能目前尚未開放。',
    [{ text: '確定' }]
  );
};

// 畫面視窗
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TopSection />
      <View style={styles.content}>
        <BtnSection navigation={navigation} />
      </View>
      <BottomSection />
    </View>
  );
}

// 主樣式表
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

// 頂部區塊樣式表
const topStyles = StyleSheet.create({
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  platform: {
    fontSize: 16,
    color: 'blue',
  },
});

// 按鈕區塊樣式表
const btnStyles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  btn: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  btnText: {
    fontSize: 20,
  },
  btnSpace: {
    width: 20,
  },
});

// 底部區塊樣式表
const bottomStyles = StyleSheet.create({
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  blue: {
    color: 'blue',
  },
  bottomText: {
    marginBottom: 10,
  },
  githubImg: {
    width: 50,
    height: 50,
  },
});
