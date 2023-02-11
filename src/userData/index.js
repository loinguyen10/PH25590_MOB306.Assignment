
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});

const User = (props) => {
    const [list, setList] = useState([
        { id: 1, name: 'cua hang', addreas: 'thanh xuan', phone: '0987654321', logo: 'logo', status: '1' }
    ]); //set list có item

    // const navigation = props.navigation;
    const route = props.route;
    // const title = route.params.title;

    return (
        <View style={styles.container}>


            <FlatList
                data={list} //gọi list
                renderItem={({ item }) => //render item
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.phone}</Text>
                        <Text>{item.logo}</Text>
                        <Text>{item.status}</Text>
                        <Button title='Edit' onPress={() => onEdit(item.id)} />
                        <Button title='Delete' onPress={() => onDelete(item.id)} />
                    </View>
                }
                keyExtractor={(item) => item.id}
            />

        </View>
    );
}

export default User;

