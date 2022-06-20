import React, { useState, useEffect } from "react";
import { Modal, Pressable, View } from "react-native";
import { Icon } from "react-native-elements";
import Privacy from "../../components/Privacy";
import {
  ViewText,
  ViewPressable,
  ViewVerticalScroll,
  VerticalScroll,
  ViewHeading,
  ContentIcon,
} from "./style";
import THEME from '../../config/theme';
import { DrawerActions } from '@react-navigation/native';
import { Title } from "../../config/theme/globalStyles"

function TermsofUse({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const Close = () => {
    return (
      <ContentIcon>
        <Icon
          type="material-icons"
          name="close"
          size={THEME.FONTSIZE.BIG}
          color={THEME.COLORS.ICON_DRAWER} />
      </ContentIcon>
    );
  };

  return (
    <View>
      <Modal
        styles={{ flex: 1, flexDirection: "column" }}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          navigation.navigate("DrawerNavigatorScreen");
        }}
      >
        <ViewHeading>
        <ViewPressable></ViewPressable>
          <ViewText>
            <Title>TERMOS DE USO E POLÍTICA DE PRIVACIDADE</Title>
          </ViewText>
          <ViewPressable>
            <Pressable
              onPress={() => {setModalVisible(!modalVisible), navigation.navigate("DrawerNavigatorScreen"), navigation.dispatch(DrawerActions.closeDrawer())}}>
              <Close></Close>
            </Pressable>
          </ViewPressable>
        </ViewHeading>
        <ViewVerticalScroll>
          <VerticalScroll>
            <Privacy></Privacy>
          </VerticalScroll>
        </ViewVerticalScroll>
      </Modal>
    </View>
  );
}

export default TermsofUse;
