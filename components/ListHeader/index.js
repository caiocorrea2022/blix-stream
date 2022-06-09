import React from 'react'
import { Text, View } from "../Themed";
import { Icon } from 'react-native-elements'
import { ContentIcon, Container } from "./style";
import THEME from '../../config/theme';

const ListHeader = ({ title, description, pdf, url }) => {

  const Pdf = () => {
    return (
      <ContentIcon>
        <Icon type="material-icons" name="picture-as-pdf" size={24} color={"#ccc"} />
        <Text style={{ color: "darkgrey", marginTop: 5, fontFamily: THEME.FONTFAMILY.EXTRALIGHT, fontSize: THEME.FONTSIZE.SMALL }}>
          Material em PDF
        </Text>
      </ContentIcon>
    )
  }

  const Live = () => {
    return (
      <ContentIcon>
        <Icon type="material-icons" name="link" size={24} color={"#ccc"} />
        <Text style={{ color: "darkgrey", marginTop: 5, fontFamily: THEME.FONTFAMILY.EXTRALIGHT, fontSize: THEME.FONTSIZE.SMALL }}>
          Acessar aula ao vivo
        </Text>
      </ContentIcon>
    )
  }

  return (
    <View style={{ padding: 12 }}>
      <Text style={{fontSize: THEME.FONTSIZE.BIG, fontFamily: THEME.FONTFAMILY.BOLD}}>{title}</Text>
      <Text style={{ marginVertical: "1rem", fontFamily: THEME.FONTFAMILY.EXTRALIGHT, fontSize: THEME.FONTSIZE.MEDIUM}}>{description}</Text>
      <Container>
        {pdf ? <Pdf></Pdf> : null}
        {url ? <Live></Live> : null}
      </Container>
    </View>
  )
}

export default ListHeader
