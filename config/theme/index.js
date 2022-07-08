import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export default {
  COLORS:{
    ALERT: "#ec1414",

    ICON: '#1e1e1e', //COR DOS CADEADOS E DAS SETAS PARA O LADO

    BACKGROUND_HEADER: "none", //COR DE TODOS OS CABEÇALHOS

    //TELA CLICKCOURSE, PLANS e SIGNUP
    ICON_HEADER: "#2E2E2E",  //COR DA PALAVRA ESCOLHER COMPRA, CADASTRAR-SE E COMPLETAR PAGAMENTO

    //TELA ABOUT - INSTITUCIONAL
    ICON_HEADER_ABOUT: "#ffffff", //COR DA PALAVRA LOGIN, ACESSAR APLICATIVO E DRAWER NO HEADER (ABOUT)
    BACKGROUND_ABOUT: "white", //COR PARA A ABOUT, DRAWER, CLICK COURSE, PLANS, EDITPROFILE, LOGIN E CADASTRO
    TITLE_OVERPHOTO_ABOUT: "white", //USADA PARA O TÍTULO DA ABOUT
    SUBTITLE_OVERPHOTO_ABOUT: "white", //USADA PARA O SUBTÍTULO DA ABOUT
    TITLE_ABOUT: '#2e2e2e', //USADA PARA PARA OS TAMANHOS EXTRABIG, BIG E STANDARD
    TEXT_ABOUT: '#2e2e2e', //USADA PARA PARA OS TAMANHOS MEDIUM, SMALL E EXTRASMALL

    //TELA MAIN
    ICON_HEADER_CLICKCLASS: "#ffffff", //COR DO ÍCONE VOLTAR DA CLICKCLASS
    ICON_HEADER_MAIN: "#ffffff", //COR DO ICONE DRAWER
    BACKGROUND_MAIN: "#2e2e2e", //COR PARA A MAIN E CLICKCLASS
    TITLE_OVERPHOTO_MAIN: "white", //USADA PARA O TÍTULO E SUBTÍTULO DA MAIN
    TITLE_MAIN: 'white', //USADA PARA PARA OS TAMANHOS EXTRABIG, BIG E STANDARD
    TEXT_MAIN: 'white', //USADA PARA PARA OS TAMANHOS MEDIUM, SMALL E EXTRASMALL

    //FOOTER TELA ABOUT E DRAWER
    BACKGROUND_FOOTER: "#2e2e2e", //COR DO RODAPÉ
    TEXT_FOOTER: 'white', //USADA PARA O TEXTO DO RODAPÉ

    //BOTÕES PRINCIPAIS - COR DE FUNDO É A PRIMARY_900
    TEXT_BUTTON: "white", //USADA PARA O TEXTO DOS BOTÕES
 
    //CORES GERAIS
    PRIMARY_900: "#8EB87D", //COR PRINCIPAL DO APP - CORES DOS BOTÕES, LATERAL DO CADASTRO, CHECKOUT STRIPE
    PRIMARY_800: "#D1EFC4", //COR PRINCIPAL DO APP MAIS CLARO - CORES DOS BOTÕES DA PLANS, INPUT LOGIN
    SECONDARY_900: "#8EB87D", //COR SECUNDÁRIA - COR DRAWER CLICADO E DO TEXTO DO DRAWER. COR BOTÃO CLICADO DA RECORRENCIA DO PLANO
    SECONDARY_800: "#D1EFC4", //COR SECUNDÁRIA MAIS CLARA - COR DRAWER CLICADO. COR BOTÃO NÃO CLICADO DA RECORRENCIA DO PLANO
    TERTIARY_900: "#648457", //COR TERCIÁRIA - COR DO ICONE E TEXTO SAIR DO DRAWER
    TERTIARY_800: "#D1EFC4", //COR TERCIÁRIA MAIS CLARA

    GRADIENT_MAIN:[
      'rgba(0,0,0,0.5)',
      'rgba(0,0,0,0.1)',
      'rgba(0,0,0,0.1)',
      '#2e2e2e'
    ]
  },

  FONTFAMILY:{
    BOLD: 'text_Bold',
    MEDIUM: 'text_Medium',
    REGULAR: 'text_Regular',
    LIGHT: 'text_Light',
    FONTABOUT: 'title_About',
  },

  FONTSIZE:{
    GIANT: RFValue(50, 980), //USADA 1X NO TÍTULO DA TELA ABOUT
    EXTRABIG: RFValue(24, 980), //USADA 1X NA TELA DE LOGIN
    BIG: RFValue(20, 980),
    STANDARD: RFValue(18, 980),
    MEDIUM: RFValue(16, 980),
    SMALL: RFValue(14, 980), 
    EXTRASMALL: RFValue(12, 980),
  }
};