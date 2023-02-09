import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  //nơi viết hàm

  const [setShow, setShowResult] = useState(false); // hiện/ẩn

  const [setName, setNameInput] = useState(''); //set Tên
  const [setAddreas, setAddreasInput] = useState(''); //set Địa Chỉ
  const [setPhone, setPhoneInput] = useState(''); //set SĐT
  const [setLogo, setLogoInput] = useState(''); //set Logo
  const [setStatus, setStatusInput] = useState(''); // set Trạng Thái
  const [list, setList] = useState([]); //set List

  const [editingId, setEditingId] = useState(0); //set Id để edit

  const onSave = () => { //lưu khi edit & add khi thêm mới
    //nếu edit
    if (editingId) {
      const newEdit = list.map(item => { //tìm item
        if (item.id == editingId) { //nếu 2 id == thì sẽ put data vào input
          item.name = setName;
          item.addreas = setAddreas;
          item.phone = setPhone;
          item.logo = setLogo;
          item.status = setStatus;
        }
        return item;
      });

      setList(newEdit); //thay đổi item của edit

      onClose();
      return;
    }

    const newItem = { //item mới
      name: setName,
      addreas: setAddreas,
      phone: setPhone,
      logo: setLogo,
      status: setStatus,

      id: list.length == 0 ? 1 : list[list.length - 1].id + 1, // nếu không có item trong mảng thì id = 1, không thì id+=1
    };

    const newList = [...list, newItem];
    setList(newList);
    onClose();
  }



  const onClose = () => { //đóng
    setShow(false);
    setName('');
    setAddreas('');
    setEditingId(0);
  }

  const onEdit = (editId) => { //edit
    setShow(true); //hiện
    const editItem = list.find(item => item.id == editId); //tìm item
    //Show lên textInput
    setNameInput(editItem.name);
    setAddreasInput(editItem.addreas);
    setPhoneInput(editItem.phone);
    setLogoInput(editItem.logo);
    setStatusInput(editItem.status);
    setEditingId(editId);
  }

  const onDelete = (deleteId) => {
    const newList = list.filter((item) => { //tìm item != id cần xóa
      return item.id !== deleteId;
    });
    setList(newList); //xuất List mới ko có item cần xóa
  }

  //nơi return

  return (
    <View style={styles.container}>

      <TextInput
        value={setName}
        onChangeText={(text) => setNameInput(text)}
      />

      <TextInput
        value={setAddreas}
        onChangeText={(text) => setAddreasInput(text)}
      />

      <TextInput
        value={setPhone}
        onChangeText={(text) => setPhoneInput(text)}
      />

      <TextInput
        value={setLogo}
        onChangeText={(text) => setLogoInput(text)}
      />

      <TextInput
        value={setStatus}
        onChangeText={(text) => setStatusInput(text)}
      />

      <FlatList
        data={list} //gọi list
        renderItem={({ item }) => //render item
          <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.logo}</Text>
            <Text>{item.status}</Text>
            <Pressable onPress={() => onEdit(item.id)}>
              <Text>Edit</Text>
            </Pressable>
            <Pressable onPress={() => onDelete(item.id)}>
              <Text>Delete</Text>
            </Pressable>
          </View>
        }
        keyExtractor={(item) => item.id}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
