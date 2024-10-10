import { Modal, View, Text, Pressable, StyleSheet, Button, Alert } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 10,
        marginBottom: 20
    },
    groupInput: {
        marginBottom: 15
    },
    text: {
        fontSize: 20,
        fontWeight: "500"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
});

interface IProps {
    modalVisible: boolean,
    setModalVisible: (v: boolean) => void
    addNew: any;
}

function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const CreateModel = (props: any) => {
    const {modalVisible, setModalVisible, addNew} = props;
    const [title, setTitle] = useState("");
    const [star, setStar] = useState("");

    const handleSubmit = () => {
        if(!title) {
            Alert.alert("Thông tin không hợp lệ","Nội dung không được để trống");
            return;
        }
        if(!star) {
            Alert.alert("Thông tin không hợp lệ","Rating không được để trống");
            return;
        }

        addNew({
            id: randomInteger(2,2000000),
            title,
            star
        });

        setModalVisible(false);
        setStar("");
        setTitle("");
    }
    
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{fontSize: 15}}>Create a review</Text>
                        <AntDesign 
                            name="close" 
                            size={24} 
                            color="black"
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                setTitle("");
                                setStar("");
                            }}
                        ></AntDesign>
                    </View>
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput 
                                style={styles.input}
                                value={title}
                                onChangeText={(v) => setTitle(v)}
                            ></TextInput>
                        </View>
                        <View>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput
                                keyboardType="numeric" 
                                style={styles.input}
                                value={star}
                                onChangeText={(v) => setStar(v)}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Button title="Add"
                            onPress={() => handleSubmit()}></Button>
                    </View>
                </View>
            </Modal>
        
        </>
    )
}

export default CreateModel;