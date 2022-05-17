import * as Linking from 'expo-linking';

const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
          Login: "Login",
          Singup: "Singup",
        },
    },
  };
  
  export default linking;
  