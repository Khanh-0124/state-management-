import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";

const tabs = ["posts", "comments	", "albums"];
const Test = () => {
  const [title, setTitle] = useState();
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);
  return (
    <View>
      <TextInput
        placeholder="nhap.."
        value={title}
        onChangeText={(a) => setTitle(a)}
      ></TextInput>
      <Text>{title}</Text>
      {tabs.map((a) => (
        <TouchableOpacity
          style={[
            { width: 100, marginVertical: 5 },
            { backgroundColor: type === a ? "pink" : "#ccc" },
          ]}
          onPress={(a) => setType(a)}
        >
          {a}
        </TouchableOpacity>
      ))}
      {posts.map((post) => {
        return <Text>{post.title ?? post.email}</Text>;
      })}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
