import { Text, TextProps } from "react-native";
import React, { FunctionComponent } from "react";

const LektonBold = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Text> &
    Readonly<TextProps>
) => (
  <Text {...props} style={[{ fontFamily: "Lekton-Bold" }, props.style]}>
    {props.children}
  </Text>
);
const LektonNormal = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Text> &
    Readonly<TextProps>
) => (
  <Text {...props} style={[{ fontFamily: "Lekton-Regular" }, props.style]}>
    {props.children}
  </Text>
);

export { LektonBold, LektonNormal };
