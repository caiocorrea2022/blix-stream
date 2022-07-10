import React, { useState, useEffect } from "react";
import { Modal, Pressable, View } from "react-native";
import { Icon } from "react-native-elements";
import Privacy from "../../components/Privacy";
import {
  ViewText,
  ViewPressable,
  VerticalScroll,
  ViewHeading,
  ContentIcon,
} from "./style";
import THEME from '../../config/theme';
import { SubTitle } from "../../config/theme/globalStyles"
import { SafeAreaView } from "react-native";

export function TermsofUse({ navigation: { goBack } }) {
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
          color={THEME.COLORS.PRIMARY_900} />
      </ContentIcon>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <Modal
          styles={{ flex: 1, flexDirection: "column" }}
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          <ViewHeading>
            <ViewPressable></ViewPressable>
            <ViewText>
              <SubTitle>TERMOS DE USO E POLÍTICA DE PRIVACIDADE</SubTitle>
            </ViewText>
            <ViewPressable>
              <Pressable
                onPress={() => { setModalVisible(!modalVisible), goBack() }}>
                <Close></Close>
              </Pressable>
            </ViewPressable>
          </ViewHeading>
          <VerticalScroll>
            <Privacy></Privacy>
          </VerticalScroll>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
