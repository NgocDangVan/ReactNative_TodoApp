import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    }
});

const FlexBox = () => {
    return (
        <View style = {styles.container}>
            <Text>Flex box</Text>
        </View>
    );
}

export default FlexBox;