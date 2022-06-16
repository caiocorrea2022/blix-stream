import React from 'react'
import { Icon } from 'react-native-elements'
import { ContentIcon, Container, Content } from "./style";
import THEME from '../../config/theme';
import { SmallText, SubTitle, Title } from '../../config/theme/globalStyles';

const ListHeader = ({ title, description, pdf, url }) => {

  const Pdf = () => {
    return (
      <ContentIcon>
        <Icon type="material-icons" name="picture-as-pdf" size={THEME.FONTSIZE.BIG} color={THEME.COLORS.ICON_CLICK} />
        <SmallText margin="1rem 0rem">Material em PDF</SmallText>
      </ContentIcon>
    )
  }

  const Live = () => {
    return (
      <ContentIcon>
        <Icon type="material-icons" name="link" size={THEME.FONTSIZE.BIG} color={THEME.COLORS.ICON_CLICK} />
        <SmallText margin="1rem 0rem">Acessar aula ao vivo</SmallText>
      </ContentIcon>
    )
  }

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle margin="1rem 0rem 0rem 0rem" fontFamily={THEME.FONTFAMILY.EXTRALIGHT}>{description}</SubTitle>
      <Content>
        {pdf ? <Pdf></Pdf> : null}
        {url ? <Live></Live> : null}
      </Content>
    </Container>
  )
}

export default ListHeader
