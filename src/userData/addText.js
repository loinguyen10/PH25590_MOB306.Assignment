import { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";


const AddText = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    const {item , list , setList} = route.params;

    const saveTest = (data = {}) => { navigation.navigate("User", data) };

    const [setName, setNameInput] = useState(''); //set Tên
    const [setAddreas, setAddreasInput] = useState(''); //set Địa Chỉ
    const [setPhone, setPhoneInput] = useState(''); //set SĐT
    const [setLogo, setLogoInput] = useState(''); //set Logo
    const [setStatus, setStatusInput] = useState(''); // set Trạng Thái

    const [setId, setEditingId] = useState(0); //set Id để edit

    const addItem = () => {
        const newItem = { //item mới
            name: setName,
            addreas: setAddreas,
            phone: setPhone,
            logo: setLogo,
            status: setStatus,
            id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
        };

        console.log("id: - ", setId);
        console.log("phone: - ", setPhone);

        // saveTest({ newItem: newItem });
        // onClose(0);

        const newList = [...list, newItem];
        setList(newList);
        navigation.goBack();
    };

    const onClose = () => { //đóng
        // setNameInput('');
        // setAddreasInput('');
        // setPhoneInput('');
        // setLogoInput('');
        // setStatusInput('');
        // setEditingId(0);
        // if(a != ''){
        navigation.goBack();
        // }
    }

    return (
        <View>
            <TextInput
                placeholder='name'
                value={setName}
                onChangeText={(text) => setNameInput(text)}
            />

            <TextInput
                placeholder='addreas'
                value={setAddreas}
                onChangeText={(text) => setAddreasInput(text)}
            />

            <TextInput
                placeholder='phone'
                value={setPhone}
                onChangeText={(text) => setPhoneInput(text)}
            />

            <TextInput
                placeholder='logo'
                value={setLogo}
                onChangeText={(text) => setLogoInput(text)}
            />

            <TextInput
                placeholder='status'
                value={setStatus}
                onChangeText={(text) => setStatusInput(text)}
            />

            <Button title='Save' onPress={() => addItem()} />
            <Button title='Close' onPress={() => onClose()} />
        </View>
    );
}

export default AddText;