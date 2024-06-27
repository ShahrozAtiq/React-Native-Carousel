import { useRef } from "react";
import { View, Pressable, StyleSheet, Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const TabBar = ({ state, descriptors, navigation }) => {
  const screens = [
    {
      name: "Home",
      icon: require("../assets/icons/home.png"),
      iconUnfocued: require("../assets/icons/home-unfocused.png"),
    },
    {
      name: "Explore",
      icon: require("../assets/icons/explore.png"),
      iconUnfocued: require("../assets/icons/explore-unfocused.png"),
    },
    {
      name: "Notifications",
      icon: require("../assets/icons/noti.png"),
      iconUnfocued: require("../assets/icons/noti-unfocused.png"),
    },
    {
      name: "Profile",
      icon: require("../assets/icons/user.png"),
      iconUnfocued: require("../assets/icons/user-unfocused.png"),
    },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const animatedStyles = useAnimatedStyle(() => {
          return {
            transform: [
              { translateX: isFocused ? withTiming(-10) : withTiming(0) },
              { translateY: isFocused ? withTiming(-6) : withTiming(0) },
            ],
          };
        });
        const animatedColor = useAnimatedStyle(() => {
          return {
            opacity: isFocused ? withTiming(1) : withTiming(0),
          };
        });
        return (
          <View key={index} style={{ flex: 1 }}>
            <Pressable onPress={onPress}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                  padding: 15,
                }}
              >
                <Animated.Image
                  source={screens[index].iconUnfocued}
                  style={[
                    {
                      width: 25,
                      height: 25,
                      position: "absolute",
                      tintColor: "#fcc8ab",
                    },
                    animatedColor,
                  ]}
                />
                <Animated.Image
                  source={screens[index].icon}
                  style={[{ width: 25, height: 25 }, animatedStyles]}
                />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TabBar;
