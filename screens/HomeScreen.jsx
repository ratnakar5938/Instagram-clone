import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/Posts";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <Divider
                style={{ borderBottomWidth: 0.5, borderBottomColor: "#868686" }}
                width={1}
                orientation="vertical"
            />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        top: 0,
        paddingTop: 40,
    },
});

export default HomeScreen;
