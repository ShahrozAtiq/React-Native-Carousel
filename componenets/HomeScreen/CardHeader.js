import * as React from "react";
import { Pressable, Text, View, Image as Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import POSTS from "../../data/POSTS";
const CardHeader = ({ radius }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: radius / 2,
        marginTop: radius / 3,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: POSTS[0].profilepic }}
          style={{
            width: 60,
            height: 50,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "white",
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>
            {POSTS[0].username}
          </Text>
          <Text style={{ color: "rgba(255,255,255,0.5)" }}>
            {POSTS[0].time}
          </Text>
        </View>
      </View>

      <Pressable
        style={{
          padding: 10,
          backgroundColor: "rgba(255,255,255,0.7)",
          borderRadius: 50,
        }}
      >
        <Ionicons name="send" size={20} color={"white"} />
      </Pressable>
    </View>
  );
};

export default CardHeader;
