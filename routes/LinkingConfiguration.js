import * as Linking from 'expo-linking';

const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
          Login: "Login",
          SignUp: "SignUp",
          About: "About",
          Drawer: "Drawer",
          Success: "Success",
          Plans: "Plans",
          ClickClass: "ClickClass",
          ClickCourse: "ClickCourse",
          PDFView:"PDFView",
          PreLoadStripe: {
            path: "EditProfile"
          },
        },
    },
  };
  
  export default linking;


  
  