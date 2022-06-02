import * as Linking from 'expo-linking';

const linking = {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
          Login: "Login",
          SignUp: "Cadastro",
          Success: "Success"
          
        },
    },
  };
  
  export default linking;
  