import React from 'react'
import { Icon } from 'react-native-elements'
import { ContentIcon, Container, Content, Text } from "./style";
import THEME from '../../config/theme';

const ListHeader = ({ title, description, pdf, url }) => {

  const Pdf = () => {
    return (
      <ContentIcon>
        <Icon type="material-icons" name="picture-as-pdf" size={24} color={"#ccc"} />
        <Text fontFamily={THEME.FONTFAMILY.EXTRALIGHT} fontSize={THEME.FONTSIZE.SMALL} color={THEME.COLORS.TEXT_700}>
          Material em PDF
        </Text>
      </ContentIcon>
    )
  }

  const Live = () => {
    return (
      <ContentIcon>
        <Icon type="material-icons" name="link" size={24} color={"#ccc"} />
        <Text fontFamily={THEME.FONTFAMILY.EXTRALIGHT} fontSize={THEME.FONTSIZE.SMALL} color={THEME.COLORS.TEXT_700}>
          Acessar aula ao vivo
        </Text>
      </ContentIcon>
    )
  }

  return (
    <Container>
      <Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.BIG} color={THEME.COLORS.TEXT_900}>{title}</Text>
      <Text fontFamily={THEME.FONTFAMILY.EXTRALIGHT} fontSize={THEME.FONTSIZE.MEDIUM} color={THEME.COLORS.TEXT_900}>{description}</Text>
      <Content>
        {pdf ? <Pdf></Pdf> : null}
        {url ? <Live></Live> : null}
      </Content>
    </Container>
  )
}

export default ListHeader
