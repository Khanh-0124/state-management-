import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import { FormHeader } from "../components";
import FormButton from "../components/FormButton";
import { Context } from "../contexts/BlogContext";
import { NavigationContainer } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = (props) => {
  const { navigation } = props;
  const { addBlogPosts } = useContext(Context);

  return (
    <BlogPostForm
      // initialValues={{ title: "", content: "" }}
      onSubmit={(title, content) => {
        addBlogPosts(title, content, () => {
          navigation.navigate("IndexScreen");
        });
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
