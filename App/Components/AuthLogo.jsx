import { View, Image } from "react-native";
import React from "react";
import LogoImage from "../../assets/nba_login_logo.png";
const LogoComponent = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={LogoImage}
        resizeMode={"center"}
        style={{
          width: 170,
          height: 90,
        }}
      />
    </View>
  );
};
export default LogoComponent;
