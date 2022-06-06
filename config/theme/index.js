import { RFPercentage } from "react-native-responsive-fontsize";

export default {
  COLORS:{
    TEXT_900: '#1E1E1E',
    TEXT_800: '#323644',
    TEXT_700: '#8F94A3',
    TEXT_000: '#F1F1F1',
    ALERT: "#ec1414", //red   
    BACKGROUND: "#ffffff", //white
    PRIMARY_900: "#759A5B", //green
    PRIMARY_800: "#C8E3B4", //light-green
    PRIMARY_700: "#C8E3B4", //light-green
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
    BIG: RFPercentage(3.0),
    MEDIUM: RFPercentage(2.2),
    SMALL: RFPercentage(1.5), 
    EXTRASMALL: RFPercentage(1.0),
  }
};