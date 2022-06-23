import * as Linking from 'expo-linking';

const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
          Login: "Login",
          SignUp: "SignUp",
          Success: "Success",
          Plans: "Plans",
          ClickClass: "ClickClass",
          ClickCourse: "ClickCourse",
          Drawer: {
            path: 'Drawer',
            initialRouteName: 'Aulas',
            screens: {
              Main: 'Aulas',
              About:'Home',
              EditProfile: 'Perfil',
            },
          },
        },
    },
  };
  
  export default linking;


  
  