import { RFPercentage } from "react-native-responsive-fontsize";

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
    EXTRABIG: RFPercentage(4),
    BIG: RFPercentage(2.8),
    MEDIUM: RFPercentage(2.0),
    SMALL: RFPercentage(1.5), 
    EXTRASMALL: RFPercentage(1.0),
  }
};