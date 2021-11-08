import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { USERS } from "../../data/User";

const Stories = () => {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: "center" }}>
                        <Image
                            style={styles.story}
                            source={{
                                uri: story.image,
                            }}
                        />
                        <Text style={{ color: "white", fontSize: 12 }}>
                            {story.user.length > 10
                                ? story.user.slice(0, 8) + "..."
                                : story.user}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        marginBottom: 3,
        borderWidth: 3,
        borderColor: "#F07B54",
    },
});

export default Stories;
