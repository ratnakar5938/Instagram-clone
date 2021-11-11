import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { PostFooterIcons } from "../../data/Posts";

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <PostHeader post={post} />
            <PostImage post={post} />
            <PostFooter post={post} />
        </View>
    );
};

const PostHeader = ({ post }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 5,
                alignItems: "center",
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                    style={styles.story}
                    source={{ uri: post.profile_picture }}
                />
                <Text
                    style={{ color: "white", marginLeft: 5, fontWeight: "700" }}
                >
                    {post.user}
                </Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Image
                    style={styles.dots}
                    source={{
                        uri: "https://img.icons8.com/ios-glyphs/30/ffffff/ellipsis.png",
                    }}
                />
            </View>
        </View>
    );
};

const Width = Dimensions.get("window").width;

const PostImage = ({ post }) => (
    <View
        style={{
            width: "100%",
            height: 420,
        }}
    >
        <Image
            style={{ flex: 1, resizeMode: "contain" }}
            source={{ uri: post.imageUrl }}
        />
    </View>
);

const PostFooter = ({ post }) => {
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 5,
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <Icon
                        imgStyle={styles.icons}
                        imgUrl={PostFooterIcons[0].imageUrl}
                    />
                    <Icon
                        imgStyle={styles.icons}
                        imgUrl={PostFooterIcons[1].imageUrl}
                    />
                    <Icon
                        imgStyle={styles.icons}
                        imgUrl={PostFooterIcons[2].imageUrl}
                    />
                </View>

                <View>
                    <Icon
                        imgStyle={styles.saveIcon}
                        imgUrl={PostFooterIcons[3].imageUrl}
                    />
                </View>
            </View>

            <View style={{ margin: 5, flexDirection: "row" }}>
                <Text style={{ color: "white" }}>{`Liked by `}</Text>
                <Text
                    style={{ color: "white", fontWeight: "700" }}
                >{`${post.comments[0].user} `}</Text>
                <Text style={{ color: "white" }}>{`and`}</Text>
                <Text style={{ color: "white", fontWeight: "700" }}>{` ${
                    post.likes - 1
                } others`}</Text>
            </View>

            <View style={{ marginLeft: 5, flexDirection: "row" }}>
                <Text style={{ color: "white", fontWeight: "700" }}>
                    {post.user}
                </Text>
                <Text style={{ color: "white", marginLeft: 5 }}>
                    {post.caption}
                </Text>
            </View>

            <Text style={{ color: "gray", margin: 5 }}>
                {`View all ${post.comments.length} comments`}
            </Text>

            {post.comments.map((comment, index) => (
                <View
                    style={{
                        marginHorizontal: 5,
                        marginBottom: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                    key={index}
                >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "white", fontWeight: "700" }}>
                            {comment.user}
                        </Text>
                        <Text style={{ color: "white", marginLeft: 5 }}>
                            {comment.comment}
                        </Text>
                    </View>
                    <View>
                        <Icon
                            imgStyle={{ width: 13, height: 13 }}
                            imgUrl={PostFooterIcons[0].imageUrl}
                        />
                    </View>
                </View>
            ))}
        </View>
    );
};

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: "#F07B54",
    },
    dots: {
        height: 15,
        width: 15,
    },
    icons: {
        width: 30,
        height: 30,
        marginRight: 10,
        resizeMode: "contain",
    },
    saveIcon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
});

export default Post;
