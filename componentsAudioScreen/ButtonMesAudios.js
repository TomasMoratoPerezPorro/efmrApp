import React from "react";
import { Button, StyleSheet, View } from "react-native";

const ButtonMesAudios = () => {
  const goToMesAudios = () => {};

  return (
    <View style={styles.buttonContainer}>
      <Button onPress={goToMesAudios} title="+ ÀUDIOS" color="#E7D219" />
    </View>
  );
};
export default ButtonMesAudios;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
  },
});
