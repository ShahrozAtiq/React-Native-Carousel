import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Circle, Path, Svg } from "react-native-svg";
const { width: WIDTH } = Dimensions.get("window");
// const HEIGHT = 30 * 6;
const radius = 20;
const EmojiSVGShape = ({ height, size, visible_items, paddingTop }) => {
  const path = `
    M0,${height / 2 - size / visible_items}
    Q${WIDTH * 0.4},0 ${WIDTH / 2},${0}
    Q${WIDTH * 0.6},0 ${WIDTH},${height / 2 - size / visible_items}
    V${height + paddingTop}
    Q${WIDTH * 0.6},${height / 2 + size / visible_items + paddingTop} ${
    WIDTH / 2
  },${height / 2 + size / visible_items + paddingTop}
    Q${WIDTH * 0.4},${height / 2 + size / visible_items + paddingTop} ${0},${
    height + paddingTop
  }
    `;
  //     const path = `
  //     M0,${height / 2 - size / visible_items}
  //     Q${WIDTH * 0.4},0 ${WIDTH / 2},${0}
  //     Q${WIDTH * 0.6},0 ${WIDTH},${height / 2 - size / visible_items}
  //     V${height + paddingTop}
  //     Q${WIDTH * 0.6},${height / 2 + size / visible_items + paddingTop} ${
  //     WIDTH / 2
  //   },${height / 2 + size / visible_items + paddingTop}
  //     Q${WIDTH * 0.4},${height / 2 + size / visible_items + paddingTop} ${0},${
  //     height + paddingTop
  //   }
  //     `;

  return (
    <Svg
      style={{ position: "absolute" }}
      width={WIDTH}
      height={height * 2}
      viewBox={`0 0 ${WIDTH} ${height * 2}`}
    >
      <Path d={path} fill={"#fcc8ab"} />
      <View
        style={{
          backgroundColor: "white",
          width: size,
          height: size + paddingTop,
          alignSelf: "center",
          borderRadius: 50,
          borderWidth: 3,
          borderColor: "#fcc8ab",
          transform: [{ scale: 1.2 }, { scaleY: 1.1 }],
        }}
      />
    </Svg>
  );
};

export default EmojiSVGShape;

const styles = StyleSheet.create({});
