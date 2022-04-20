import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../contexts/BlogContext";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../Styles/Colors";
import { FormHeader } from "../components";

const ShowScreen = ({ route, navigation }) => {
  const { id, title, content } = route.params;
  const { state } = useContext(Context);
  const blogPost = state.find((blog) => blog.id === id);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <FormHeader
        title={blogPost.title}
        name="pencil-square-o"
        onPressBtn={() =>
          navigation.navigate("EditScreen", {
            id: id,
            title: title,
            content: content,
          })
        }
      />
      {/* <Text style={styles.title}>{blogPost.title}</Text> */}
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    marginTop: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
