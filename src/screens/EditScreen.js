import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../Styles/Colors";
import { Context } from "../contexts/BlogContext";
import { FormHeader, FormButton } from "../components/index";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = (props) => {
  const { route, navigation } = props;
  const { state, editBlogPosts } = useContext(Context);
  const { id, title, content } = route.params;
  const blogPost = state.find((blog) => blog.id === id);
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPosts(id, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 28,
  },
  input: {
    borderWidth: 0.5,
    height: 40,
    borderRadius: 7,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});
