import * as Linking from 'expo-linking';

const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
          Login: "Login",
          SignUp: "SignUp",
          Success: "Success",
          Plans: "Plans",
          MyDrawer: "MyDrawer",
          ClickCourse: "ClickCourse",
        },
    },
  };
  
  export default linking;
  