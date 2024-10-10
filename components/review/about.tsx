import { StyleSheet, View, Text } from "react-native"
import { globalStyle } from "../../utils/const";

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
        padding: 15
    },
    about1: {
        fontSize: 20,
        padding: 15
    }
});

const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyle.globalFont]}>
                About Review App - Ngoc
            </Text>
            <Text style={[styles.about1, globalStyle.globalFont]}>
                Made By Ngoc
            </Text>
        </View>
    );
}

export default AboutScreen;