import React from "react";
import { Icon } from "react-native-elements";
import THEME from '../../config/theme';
import Button from '../../components/Button';
import { StandardText, SmallText, Container } from "../../config/theme/globalStyles";
import { ActivityIndicator } from 'react-native';
import { useAuth } from "../../context/useAuth";
import { CommonActions } from '@react-navigation/native';

export function Success({ navigation }) {
  const { user, loading } = useAuth();
  
  return (
    loading ? <ActivityIndicator color="transparent" /> :
    <Container justifyContent="center">
      <Icon
        type="material-icons"
        name="check-circle-outline"
        color={THEME.COLORS.PRIMARY_900}
        size={60}
      />
      {user ?
        <>
          <StandardText color={THEME.COLORS.PRIMARY_900} margin="1rem 0rem">Compra realizada com sucesso!</StandardText>
          <SmallText color={THEME.COLORS.PRIMARY_900} margin="0rem 0rem 3rem 0rem">Clique no botão abaixo para acessar os conteúdos!</SmallText>
          <Button
            title={"Acesse os conteúdos"}
            // onPress={() => navigation.navigate('Drawer', { screen: 'Aplicativo' })}
            onPress={()=> 
              navigation.dispatch(
                CommonActions.reset({
                index:1,
                routes:[{name: 'Drawer'}],
            }))}
            >
          </Button>
        </>
        :
        <>
          <StandardText color={THEME.COLORS.PRIMARY_900} margin="1rem 0rem">Compra realizada com sucesso!</StandardText>
          <SmallText color={THEME.COLORS.PRIMARY_900} margin="0rem 0rem 3rem 0rem">Por favor, verifique seu e-mail e faça o seu primeiro login.</SmallText>
          <Button
            title={"Fazer Login"}
            onPress={()=> 
              navigation.dispatch(
                CommonActions.reset({
                index:1,
                routes:[{name: 'Login'}],
            }))}
            >
          </Button>
        </>
      }
    </Container>
  );
};

