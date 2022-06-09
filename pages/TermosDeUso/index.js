import React, { useState } from "react";
import { ScrollView, Alert, Modal, StyleSheet, Pressable, View, Text } from "react-native";
import Privacy from "../../components/Privacy";
import {ViewText, ViewPressable, ViewVerticalScroll, VerticalScroll, Title} from './style';

 function TermosDeUso({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal styles={{flex:1, flexDirection:"column"}}
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <ViewText>
        <Title>TERMOS DE USO E POLÍTICA DE PRIVACIDADE</Title>
        </ViewText>
        <ViewVerticalScroll>
        <VerticalScroll>
            <Privacy></Privacy>
          </VerticalScroll>
          </ViewVerticalScroll>
          <ViewPressable>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            </ViewPressable>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:"white"
  },
  modalView: {
    // flex:1,
    width:'90%',
    height:'6100px',
    backgroundColor:"blue",
    margin: 20,
    // backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default TermosDeUso;