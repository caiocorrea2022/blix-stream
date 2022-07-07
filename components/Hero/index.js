import React from "react";
import { Container } from "./style";
import THEME from "../../config/theme";
import Button from "../Button";
import { Title, SubTitle } from "../../config/theme/globalStyles";
import {clientName, substitleAbout} from "../../config/data";

const Hero = ({ userId, navigation, button, plan }) => {
  return (
    <Container>
      <Title
        color={THEME.COLORS.TITLE_OVERPHOTO_ABOUT}
        fontFamily={THEME.FONTFAMILY.FONTABOUT}
        fontSize={THEME.FONTSIZE.GIANT}
      >
        {clientName}
      </Title>
      <SubTitle
        color={THEME.COLORS.TITLE_OVERPHOTO_ABOUT}
      >
        {substitleAbout}
      </SubTitle>
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
            title={"QUERO FAZER PARTE"}
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
