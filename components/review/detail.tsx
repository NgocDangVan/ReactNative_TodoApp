import { StyleSheet, View, Text, Button, Image } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import starIcon from "../../assets/images/star.png";

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS_REGULAR
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANS_REGULAR,
        padding: 15
    },

})

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList,'review-detail'>>();
    return (
        <View>
            <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
            <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
            <Text style={styles.reviewText}>
                Rating: {route.params?.star}
            </Text>
            <View style={{flexDirection: "row", marginHorizontal: 10,gap: 10}}>
                <Image
                    style = {{height: 50, width: 50}}
                    source={starIcon}
                >

                </Image>
            </View>
        </View>
    );
}

export default DetailScreen;