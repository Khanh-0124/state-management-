import React, { useState, useReducer } from "react";
import { Alert } from "react-native";
import createDataContext from "./createDataContext";
import JsonServer from "../api/JsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts": {
      return action.payload;
    }
    case "delete_blogPost": {
      return state.filter((blogPost) => {
        return blogPost.id !== action.payload;
      });
    }
    case "edit_blogPost": {
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    }
    case "add_blogPost": {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    }
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await JsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPosts = (dispatch) => {
  return async (title, content, callback) => {
    // dispatch({ type: "add_blogPost", payload: { title, content } });
    await JsonServer.post("/blogposts", { title, content });
    const response = await JsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
    if (callback) callback();
  };
};

const deleteBlogPosts = (dispatch) => {
  return async (id) => {
    await JsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPosts = (dispatch) => {
  return async (id, title, content, callback) => {
    await JsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPosts, deleteBlogPosts, editBlogPosts, getBlogPosts },
  []
);
