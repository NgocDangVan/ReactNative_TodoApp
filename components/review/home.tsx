import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import CreateModel from "../create.model";

interface IReview {
    id: number,
    title: string,
    star: number
}

const HomeScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    const [reviews, setReviews] = useState<IReview[]>([
        {id: 1, title: "React Native", star: 5},
        {id: 2, title: "Ngokca", star: 5}
    ]);

    const styles = StyleSheet.create({
        reviewItem: {
            padding: 15,
            backgroundColor: "#ccc",
            margin: 15
        }
    });

    const [modalVisible, setModalVisible] = useState(false);
    
    const addNew = (item: IReview) => {
        setReviews([...reviews,item]);
    }
    return (
        <View>
            <Text style={{fontSize: 30, padding: 10}}>Review list</Text>
            <View style={{alignItems: "center"}}>
                <AntDesign
                    name="plussquareo"
                    size={30}
                    color="orange"
                    onPress={() => setModalVisible(true)}
                ></AntDesign>
            </View>
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={item => item.id + ""}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("review-detail", item)}>
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}    
                >

                </FlatList>
            </View>

            <CreateModel
                modalVisible = {modalVisible}
                setModalVisible ={setModalVisible}
                addNew = {addNew}
            >

            </CreateModel>
        </View>
    );
}

export default HomeScreen;