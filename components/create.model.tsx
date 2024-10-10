import { Modal, View, Text, Pressable, StyleSheet, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
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
}

const CreateModel = (props: any) => {
    const {modalVisible, setModalVisible} = props;
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
                            onPress={() => setModalVisible(!modalVisible)}
                        ></AntDesign>
                    </View>
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput style={styles.input}></TextInput>
                        </View>
                        <View>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput
                                keyboardType="numeric" 
                                style={styles.input}
                            ></TextInput>
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Button title="Add"></Button>
                    </View>
                </View>
            </Modal>
        
        </>
    )
}

export default CreateModel;