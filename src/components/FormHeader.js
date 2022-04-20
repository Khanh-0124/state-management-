import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../Styles/index";

const FormHeader = (props) => {
  const { title, background = "#fff", name = null, onPressBtn } = props;
  return (
    <View
      style={{
        height: 60,
        width: "100%",
        backgroundColor: background,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      {name == null ? null : (
        <TouchableOpacity style={styles.iconLeft} onPress={onPressBtn}>
          <FontAwesome name={name} size={24} color="#495057" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormHeader;

const styles = StyleSheet.create({
  iconLeft: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
  },
});
