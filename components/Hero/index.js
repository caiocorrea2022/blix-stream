import React from "react";
import { Container } from "./style";
import THEME from "../../config/theme";
import Button from "../Button";
import { Title } from "../../config/theme/globalStyles";
import {clientName} from "../../config/data";

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
