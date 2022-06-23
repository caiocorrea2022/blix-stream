import React from "react";
import { Container } from "./style";
import THEME from "../../config/theme";
import Button from "../Button";
import { Title } from "../../config/theme/globalStyles";

const Hero = ({ userId, navigation, button, plan }) => {
  return (
    <Container>
      <Title
        textAlign="flex-start"
        color={THEME.COLORS.TITLE_OVERPHOTO_ABOUT}
        fontFamily={THEME.FONTFAMILY.FONTABOUT}
        fontSize={THEME.FONTSIZE.GIANT}
      >
        EMILY MONTEIRO
      </Title>
      {button ? (
        plan ? (
          <></>
        ) : userId ? (
            <Button
              title={"VER PLANOS"}
              onPress={() => navigation.navigate("Plans", { userId })}
            ></Button>
        ) : (
          <Button
            title={"ASSINAR AGORA"}
            onPress={() => navigation.navigate("Plans", { userId })}
          ></Button>
        )
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Hero;
