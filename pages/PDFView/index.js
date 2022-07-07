import React, { useState, useEffect } from "react";
import { Modal, Pressable, View } from "react-native";
import { Icon } from "react-native-elements";
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
import PDF from "../../components/PDF";
import { Title } from "../../config/theme/globalStyles"


export function PDFView({ route, navigation: { goBack } }) {
  const { pdf } = route.params;
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
          color={THEME.COLORS.PRIMARY_900}
        />
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
          goBack();
        }}
      >
        <ViewHeading>
          <ViewPressable></ViewPressable>
          <ViewText>
          </ViewText>
          <ViewPressable>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible),
                goBack();
              }}
            >
              <Close></Close>
            </Pressable>
          </ViewPressable>
        </ViewHeading>
        <ViewVerticalScroll>
          <PDF pdf={pdf}></PDF>
        </ViewVerticalScroll>
      </Modal>
    </View>
  );
}
