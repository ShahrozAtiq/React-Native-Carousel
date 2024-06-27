import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import PostsList from "../componenets/HomeScreen/PostsList";
import EmojisList from "../componenets/HomeScreen/EmojisList";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <PostsList />
      <View style={{ flex: 1 }}>
        <EmojisList />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
