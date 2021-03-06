import React from "react";
import { Container } from "./style";
import { StandardText } from "../../config/theme/globalStyles";
import { ActivityIndicator } from "react-native";
import THEME from "../../config/theme";
import { borderRadiusButtons } from "../../config/data";

const Button = ({
  colortitle,
  borderRadius,
  colorbutton,
  title,
  width,
  fontFamily,
  fontSize,
  isLoading = false,
  ...rest
}) => {
  return (
    <Container
      enabled={!isLoading}
      colorbutton={colorbutton ? colorbutton : THEME.COLORS.PRIMARY_900}
      width={width}
      borderRadius={borderRadius ? borderRadius : borderRadiusButtons}
      style={{ opacity: isLoading === true ? 0.5 : 1 }}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={THEME.COLORS.TEXT_BUTTON} />
      ) : (
        <StandardText
          style={{
            color: colortitle ? colortitle : THEME.COLORS.TEXT_BUTTON,
            fontFamily: fontFamily ? fontFamily : THEME.FONTFAMILY.BOLD,
            fontSize: fontSize ? fontSize : THEME.FONTFAMILY.MEDIUM,
          }}
        >
          {title}
        </StandardText>
      )}
    </Container>
  );
};

export default Button;
