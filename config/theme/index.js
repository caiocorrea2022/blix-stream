import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default {
  COLORS:{
    ALERT: "#ec1414",

    BACKGROUND: "#ffffff", //MESMA COR DO DRAWER
    BACKGROUND_HEADER: "#ffffffa0",
    BACKGROUND_FOOTER: "#ffffff",
    BACKGROUND_CLICK: "#2e2e2e",

    ICON_HEADER: "#ffffff",
    ICON_DRAWER: "#1E1E1E",
    ICON_GOBACK: "#C8E3B4",
    ICON_CLICK: "#1E1E1E",

    MAIN_TITLE: '#1E1E1E',
    TITLE: '#1E1E1E',
    SUB_TITLE: '#1E1E1E',
    STANDARD: '#1E1E1E',
    SMALL_TEXT: '#1E1E1E',
    FOOTER_TEXT: '#1E1E1E',

    TEXT_BUTTON: "#ffffff",

    PRIMARY_900: "#759A5B", //CORES DOS BOTÕES, CLICK DO DRAWER
    PRIMARY_800: "#C8E3B4",
    PRIMARY_700: "#C8E3B4",

    GRADIENT:[
      'rgba(0,0,0,0.5)',
      'rgba(0,0,0,0.1)',
      'rgba(0,0,0,0.1)',
      '#2e2e2e'
    ]
  },

  FONTFAMILY:{
    BOLD: "Montserrat_700Bold",
    MEDIUM: 'Montserrat_500Medium',
    REGULAR: 'Montserrat_400Regular',
    LIGHT: 'Montserrat_300Light',
    FONTABOUT: "Rajdhani_Medium",
  },

  FONTSIZE:{
    GIANT: RFValue(50, 1080),
    EXTRABIG: RFValue(24, 1080),
    BIG: RFValue(20, 1080),
    EXTRAMEDIUM: RFValue(18, 1080),
    MEDIUM: RFValue(16, 1080),
    SMALL: RFValue(14, 1080), 
    EXTRASMALL: RFValue(12, 1080),
  }
};