import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default {
  COLORS:{
    ALERT: "#ec1414",

    BACKGROUND: "#ffffff", //MESMA COR DO DRAWER
    BACKGROUND_HEADER: "#ffffff",
    BACKGROUND_FOOTER: "#ffffff",
    BACKGROUND_CLICK: "#ffffff",

    ICON_HEADER: "#ffffff",
    ICON_DRAWER: "#1E1E1E",
    ICON_GOBACK: "#C8E3B4",
    ICON_CLICK: "#1E1E1E",

    MAIN_TITLE: '#1E1E1E',
    TITLE: '#323644',
    SUB_TITLE: '#323644',
    STANDARD: '#323644',
    SMALL_TEXT: '#323644',
    FOOTER_TEXT: '#323644',

    TEXT_BUTTON: "#ffffff",

    PRIMARY_900: "#759A5B", //CORES DOS BOTÕES, CLICK DO DRAWER
    PRIMARY_800: "#C8E3B4",
    PRIMARY_700: "#C8E3B4",

    GRADIENT:[
      'rgba(0,0,0,0.5)',
      'rgba(0,0,0,0.0)',
      'rgba(0,0,0,0.5)',
      'rgba(0,0,0,1)',
    ]
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
    EXTRABIG: RFValue(24, 1080),
    BIG: RFValue(20, 1080),
    EXTRAMEDIUM: RFValue(18, 1080),
    MEDIUM: RFValue(16, 1080),
    SMALL: RFValue(14, 1080), 
    EXTRASMALL: RFValue(12, 1080),
  }
};