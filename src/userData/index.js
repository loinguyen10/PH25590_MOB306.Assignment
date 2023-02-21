
import { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { API_SHOP } from '../api';
import { useIsFocused } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2efdf',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  card: {
    marginVertical: 10,
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 20,
    backgroundColor: '#8ec7b4',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    textAlign: 'center',
    borderRadius: 15,
    fontWeight: 'bold',
    color: 'white',
  },

  avatar: {
    width: 250,
    height: 150,
    overflow: 'hidden',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
});

const User = (props) => {

  const navigation = props.navigation;

  const route = props.route;
  // const listData = route.params.listData;
  // const trangThaiManHinh = useIsFocused();

  const [list, setList] = useState([]); //set list có item

  // const onDelete = (deleteId) => { //old
  //   const newList = list.filter((item) => { //tìm item != id cần xóa
  //     return item.id !== deleteId;
  //   });
  //   setList(newList); //xuất List mới ko có item cần xóa
  // }

  const onDelete = (deleteId) => { //new
    fetch(API_SHOP + '/' + deleteId,{method: 'delete'})
      .then(res => getList())
  };

  const onEdit = (editId) => {
    fetch(API_SHOP + '/' + editId)
      .then(res => res.json()) 
      .then(data => navigation.navigate('SuaText',{editData : data})) 
      .catch((err) => console.log(err)) 
  }

  const getList = () => {
    fetch(API_SHOP)
      .then((res) => res.json()) // khi call thành công thì vào then
      .then((data) => setList(data)) // kq then đầu tiên là tham số của then tiếp theo
      .catch((err) => console.log(err)) // khi call thất bại thì vào catch
  };

  useEffect(() => {
    getList();
  }, []);

  return (

    <View style={styles.container}>

      <Button
        title='New'
        onPress={() => navigation.navigate("SuaText")} //, { list: list, setList: setList }
      />

      <FlatList
        data={list} //gọi list
        renderItem={({ item }) => //render item
          <View style={styles.card}>
            <View style={{ alignItems: 'center' }}>
              <Image
                style={styles.avatar}
                source={{ uri: item.logo }} />

              <Text style={{ color: 'white' }}>STT: {item.id}</Text>
              <Text style={{ color: 'white' }}>Tên cửa hàng: {item.name}</Text>
              <Text style={{ color: 'white' }}>Địa chỉ: {item.addreas}</Text>
              <Text style={{ color: 'white' }}>SĐT: {item.phone}</Text>
              <Text style={{ color: 'white' }}>Trạng thái: {item.status}</Text>

            </View>
            <View>
              {/* <Text style={[styles.row, { backgroundColor: 'green' }]} onPress={() => navigation.navigate("SuaText", { item: item, list: list, setList: setList })}>EDIT</Text> */}
              <Text style={[styles.row, { backgroundColor: 'green' }]} onPress={() => onEdit(item.id)}>EDIT</Text>
              <Text style={[styles.row, { backgroundColor: 'red' }]} onPress={() => onDelete(item.id)}>DELETE</Text>
            </View>
          </View>
        }
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}

export default User;

