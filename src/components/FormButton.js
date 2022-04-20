import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const FormButton = (props) => {
  const { width = 100, height = 44, title, style, onPress } = props;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[{ width: width, height: height }, styles.button, style]}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
