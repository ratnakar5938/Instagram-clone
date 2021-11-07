import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo.png")}
                />
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/heart.png",
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={{
                            uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain",
    },
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 10,
        paddingRight: 10,
    },
    iconsContainer: {
        flexDirection: "row",
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: "contain",
    },
    unreadBadge: {
        backgroundColor: "#FF3250",
        position: "absolute",
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
    },
    unreadBadgeText: {
        color: "white",
        fontWeight: "600",
    },
});

export default Header;
