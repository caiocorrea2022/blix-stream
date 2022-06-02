import * as React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { Container, Content, Image, Header, Title} from './style';
import LoginForm from '../../components/Form/LoginForm';
import ResetPassword from '../../components/Form/ResetPassword';
import TouchableText from '../../components/Controllers/TouchableText'


export default function Login({navigation}){

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', margin: "2rem", padding: "1rem"};

  const viewportContext = React.createContext({});

  const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const LoginComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <View/> : <View style={{ backgroundColor: "blue", flex: 0.5 }} />;
};
 
  return (
    <Provider>
    <Container>
    <View>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <Content>
    <Header>
      <Image source={require('./../../assets/yoga-logo.jpg')}></Image>
      <Title>YOGA LUZ</Title>
    </Header>
    <LoginForm navigation={navigation}/>
    <TouchableText onPress={showModal} title={'RECUPERAR SENHA'}></TouchableText>
    <TouchableText onPress={() => navigation.navigate('Cadastro')} title={'Cadastre-se'}></TouchableText>
    </Content>
    <Portal>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
      <ResetPassword></ResetPassword>
    </Modal>
    </Portal>
    </KeyboardAvoidingView>
    </View>
    <ViewportProvider>
       <LoginComponent />
    </ViewportProvider>
    </Container>
    </Provider>
  );
}
