import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
import { API_SHOP } from '../api';

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        marginLeft: 5,
        paddingLeft: 10,
        backgroundColor: '#bcbcbc',
        width: '100%',
        color: '#5b5b5b',
    },

    txt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
    },

    avatar: {
        width: 250,
        height: 150,
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 1,
    },

    table: {
        // flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    box: {
        width: '32%',
        height: 110,
        borderColor: 'black',
        borderWidth: 1.5,
        marginVertical: 10,
    },

    selected: {
        borderColor: 'green',
        borderWidth: 3,
    }
});

const SuaText = (props) => {
    const navigation = props.navigation;
    const route = props.route;
    // const { item, list, setList } = route.params;
    const editData = route.params?.editData;

    // const saveTest = (data = {}) => { navigation.navigate("User", data) };

    const [setName, setNameInput] = useState(''); //set Tên
    const [setAddreas, setAddreasInput] = useState(''); //set Địa Chỉ
    const [setPhone, setPhoneInput] = useState(''); //set SĐT
    const [setLogo, setLogoInput] = useState(''); //set Logo
    const [setStatus, setStatusInput] = useState(''); // set Trạng Thái

    const [setId, setEditingId] = useState(0); //set Id để edit

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // const onSave = () => { //lưu khi edit & add khi thêm mới //cũ
    //     //nếu edit
    //     if (setId) {
    //         const newEdit = list.map(item => { //tìm item
    //             if (item.id == setId) { //nếu 2 id == thì sẽ put data vào input
    //                 item.name = setName;
    //                 item.addreas = setAddreas;
    //                 item.phone = setPhone;
    //                 item.logo = setLogo;
    //                 item.status = setStatus;

    //             }
    //             return item;
    //         });

    //         setList(newEdit); //thay đổi item của edit

    //         navigation.goBack();
    //         return;
    //     }

    //     const newItem = { //item mới
    //         name: setName,
    //         addreas: setAddreas,
    //         phone: setPhone,
    //         logo: setLogo,
    //         status: setStatus,

    //         id: list.length == 0 ? 1 : list[list.length - 1].id + 1, // nếu không có item trong mảng thì id = 1, không thì id+=1
    //     };
    //     console.log("id: - ", setId);

    //     const newList = [...list, newItem];
    //     setList(newList);
    //     navigation.goBack();
    // }

    const [selected, setSelected] = useState(0);

    const onEdit = (editItem) => {
        //Show lên textInput
        setNameInput(editItem.name);
        setAddreasInput(editItem.addreas);
        setPhoneInput(editItem.phone);
        setLogoInput(editItem.logo);
        setStatusInput(editItem.status);
        setEditingId(editItem.Id);

        if (editItem.status == 0) {
            setIsEnabled(false);
        }
        if (editItem.status == 1) {
            setIsEnabled(true);
        }

    }

    const onSave = () => {
        const newData = { 
            name: setName,
            addreas: setAddreas,
            phone: setPhone,
            logo: setLogo,
            status: isEnabled ? 1 : 0,
         };

        fetch(
            !editData ? API_SHOP : API_SHOP + '/' + editData.id,
            {
                method: !editData ? 'POST' : 'PUT',
                body: JSON.stringify(newData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => navigation.goBack())
    };


    useEffect(() => {
        if (editData) {
            onEdit(editData);
            // setEditingId(editData.id);
        }
    }, [editData?.id]);

    return (
        <View>
            <View style={styles.txt}>
                <Text> ID: </Text><Text>{setId}</Text>
            </View>

            <View style={styles.txt}>
                <Text> Tên cửa hàng: </Text>
                <TextInput
                    placeholder='name'
                    value={setName}
                    style={styles.text}
                    onChangeText={(text) => setNameInput(text)}
                />
            </View>

            <View style={styles.txt}>
                <Text> Địa chỉ: </Text>
                <TextInput
                    placeholder='addreas'
                    value={setAddreas}
                    style={styles.text}
                    onChangeText={(text) => setAddreasInput(text)}
                />
            </View>

            <View style={styles.txt}>
                <Text> SĐT: </Text>
                <TextInput
                    placeholder='phone'
                    value={setPhone}
                    style={styles.text}
                    onChangeText={(text) => setPhoneInput(text)}
                />
            </View>

            {/* <View style={styles.txt}>
                <Text> Trạng thái: </Text>
                <TextInput
                    placeholder='status'
                    value={setStatus}
                    style={styles.text}
                    onChangeText={(text) => setStatusInput(text)}
                />
            </View> */}

            <View style={styles.txt}>
                <Text> Trạng thái: </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <Text style={styles.txt}> Logo: </Text>
            <TextInput
                placeholder='logo'
                value={setLogo}
                style={styles.text}
                onChangeText={(text) => setLogoInput(text)}
            />

            <Button title='Save' onPress={() => onSave()} />
            <Button title='Close' onPress={() => navigation.goBack()} />
        </View>
    );
}

export default SuaText;