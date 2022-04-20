import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Context } from "../contexts/BlogContext";
import { MaterialIcons } from "@expo/vector-icons";
import { FormHeader } from "../components";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../Styles/Colors";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPosts, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("didFocus", () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <FormHeader
        title="Blogs"
        name="plus-square"
        onPressBtn={() => navigation.navigate("CreateScreen")}
      ></FormHeader>
      <FlatList
        data={state}
        keyExtractor={(i) => i.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.title}
            onPress={() =>
              navigation.navigate("ShowScreen", {
                id: item.id,
                title: item.title,
                content: item.content,
              })
            }
          >
            <Text>
              {item.title} - {item.id}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
              <MaterialIcons name="delete" size={24} color={COLORS.gray1} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    marginTop: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: "pink",
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    // backgroundColor: "pink",
    marginVertical: 10,
    borderColor: "yellow",
  },
});
