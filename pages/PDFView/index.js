import React, { useState, useEffect } from "react";
import { Modal, Pressable, SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";
import {
  ViewText,
  ViewPressable,
  ViewHeading,
  ContentIcon,
  Container,
} from "./style";
import THEME from '../../config/theme';
import PDF from "../../components/PDF";

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
    <SafeAreaView>
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
        <Container>
          <PDF pdf={pdf}></PDF>
        </Container>
      </Modal>
    </SafeAreaView>
  );
}
