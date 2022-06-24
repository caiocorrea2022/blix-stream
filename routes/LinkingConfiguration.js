import * as Linking from 'expo-linking';

const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
          Login: "Login",
          SignUp: "SignUp",
          About: "Drawer/About",
          Drawer: "Drawer",
          Success: "Success",
          Plans: "Plans",
          ClickClass: "ClickClass",
          ClickCourse: "ClickCourse",
        },
    },
  };
  
  export default linking;


  
  