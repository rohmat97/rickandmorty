import { Text, TextProps } from "react-native";
import React, { FunctionComponent } from "react";

const LektonText = (
  props: JSX.IntrinsicAttributes &
    JSX.IntrinsicClassAttributes<Text> &
    Readonly<TextProps>
) => (
  <Text {...props} style={[{ fontFamily: "Lekton-Bold" }, props.style]}>
    {props.children}
  </Text>
);

export default LektonText;
