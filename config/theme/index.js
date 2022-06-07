import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default {
  COLORS:{
    TEXT_900: '#1E1E1E',
    TEXT_800: '#323644',
    TEXT_700: '#8F94A3',
    TEXT_000: '#F1F1F1',
    ALERT: "#ec1414",
    BACKGROUND: "#ffffff",
    PRIMARY_900: "#759A5B",
    PRIMARY_800: "#C8E3B4",
    PRIMARY_700: "#C8E3B4",
  },

  FONTFAMILY:{
    BOLD: "Montserrat_700Bold",
    EXTRABOLD: 'Montserrat_800ExtraBold',
    MEDIUM: 'Montserrat_500Medium',
    REGULAR: 'Montserrat_400Regular',
    LIGHT: 'Montserrat_300Light',
    EXTRALIGHT: 'Montserrat_200ExtraLight',
  },

  FONTSIZE:{
    EXTRABIG: RFValue(20, 680),
    BIG: RFValue(16, 680),
    MEDIUM: RFValue(12, 680),
    SMALL: RFValue(10, 680), 
    EXTRASMALL: RFValue(8, 680),
  }
};