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

const BlogPostForm = (props) => {
  const { navigation, onSubmit, initialValues } = props;
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <FormHeader title="Add blog" />
      {/* title */}
      <Text>Enter title: </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      {/* content */}
      <Text>Enter content: </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <FormButton
        title="Save blog post"
        onPress={() => onSubmit(title, content)}
        style={{ alignSelf: "center", marginTop: 10 }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};
export default BlogPostForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 5,
  },
  input: {
    borderWidth: 0.5,
    height: 40,
    borderRadius: 7,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});
