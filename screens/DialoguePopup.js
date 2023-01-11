import React, { useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { Button, Portal, Dialog, MD2Colors } from 'react-native-paper';

export default function DialoguePopup({ modalVisible, setModalVisible, navigation, setNewPin, tempPinData, route, pinData, setPinData}) {

  return (
    <View style={styles.bottomView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible)
        }}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button
             mode="contained"
              onPress={() => {
               

                const newReport = {
                  id: 9999,
                  coords:{
                    latitude: tempPinData.latitude,
                    longitude: tempPinData.longitude
                  },
                  img: "",
                  status: "Reviewed",
                  title: "report n",
                  content: "report n content  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam quo aperiam beatae culpa recusandae obcaecati eligendi sed ex corporis fugit similique perspiciatis, accusantium quia soluta rerum itaque, quaerat quibusdam nulla! " 
                };
      
                pinData.push(newReport);
                setPinData(pinData)
                console.log("updated pin data: ", pinData);
  
                navigation.navigate( "NewReportScreen", {tempPinData: tempPinData, pinData: pinData});

                setModalVisible(!modalVisible)
              }
              }
            >
              <Text style={styles.textStyle}>Make a report </Text>
            </Button>

            <Button
             mode="outlined"
              // style={[styles.button, styles.buttonClose]}
              style={styles.closeButton}
              onPress={() => {setModalVisible(!modalVisible); setNewPin(false)}}
            >
             Close
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
    elevation: 5
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
  },
  closeButton: {
    margin: 4
  }

});

