import React from "react";
import { Icon } from "react-native-elements";
import { ContentIcon, Container, Content } from "./style";
import THEME from "../../config/theme";
import {
  SmallText,
  StandardText,
  Title,
} from "../../config/theme/globalStyles";
import { Linking } from "react-native";

const ListHeader = ({ title, description, pdf, url, navigation, login }) => {
  const Pdf = () => {
    return (
      <ContentIcon>
        {login ? (
          <Icon
            type="material-icons"
            name="picture-as-pdf"
            size="28px"
            color={THEME.COLORS.TEXT_MAIN}
            onPress={() => {
              navigation.navigate("PDFView", { pdf: pdf });
            }}
          />
        ) : (
          <Icon
            type="material-icons"
            name="picture-as-pdf"
            size="28px"
            color={THEME.COLORS.TEXT_MAIN}
            onPress={() => {}}
          />
        )}
        <SmallText color={THEME.COLORS.TEXT_MAIN} margin="1rem 0rem">
          Visualizar PDF
        </SmallText>
      </ContentIcon>
    );
  };

  const Live = () => {
    return (
      <ContentIcon>
        {login ? (
          <Icon
            type="material-icons"
            name="link"
            size="28px"
            color={THEME.COLORS.TEXT_MAIN}
            onPress={() => Linking.openURL(url)}
          />
        ) : (
          <Icon
            type="material-icons"
            name="link"
            size="28px"
            color={THEME.COLORS.TEXT_MAIN}
            onPress={() => {}}
          />
        )}

        <SmallText color={THEME.COLORS.TEXT_MAIN} margin="1rem 0rem">
          Acessar link
        </SmallText>
      </ContentIcon>
    );
  };

  return (
    <Container>
      <Title color={THEME.COLORS.TITLE_MAIN} textAlign="flex-start" numberOfLines={2}>
        {title}
      </Title>
      <StandardText
        color={THEME.COLORS.TEXT_MAIN}
        textAlign="flex-start"
        margin="1rem 0rem 0rem 0rem"
        fontFamily={THEME.FONTFAMILY.LIGHT}
      >
        {description}
      </StandardText>
      <Content>
        {pdf ? <Pdf></Pdf> : null}
        {url ? <Live></Live> : null}
      </Content>
    </Container>
  );
};

export default ListHeader;
