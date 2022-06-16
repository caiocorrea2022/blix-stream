import React from 'react'
import { Icon } from 'react-native-elements'
import { ContentIcon, Container, Content } from "./style";
import THEME from '../../config/theme';
import { SmallText, StandardText, Title } from '../../config/theme/globalStyles';
import { Linking } from 'react-native';

const ListHeader = ({ title, description, pdf, url }) => {

  const Pdf = () => {
    return (
      <ContentIcon>
        <Icon
          type="material-icons"
          name="picture-as-pdf"
          size={28}
          color={THEME.COLORS.ICON_CLICK}
          onPress={() => Linking.openURL(pdf)}
        />
        <SmallText margin="1rem 0rem">Material em PDF</SmallText>
      </ContentIcon>
    )
  }

  const Live = () => {
    return (
      <ContentIcon>
        <Icon
          type="material-icons"
          name="link"
          size={28}
          color={THEME.COLORS.ICON_CLICK}
          onPress={() => Linking.openURL(url)}
        />
        <SmallText margin="1rem 0rem">Acessar aula ao vivo</SmallText>
      </ContentIcon>
    )
  }

  return (
    <Container>
      <Title textAlign="flex-start">{title}</Title>
      <StandardText textAlign="flex-start" margin="1rem 0rem 0rem 0rem" fontFamily={THEME.FONTFAMILY.EXTRALIGHT}>{description}</StandardText>
      <Content>
        {pdf ? <Pdf></Pdf> : null}
        {url ? <Live></Live> : null}
      </Content>
    </Container>
  )
}

export default ListHeader
