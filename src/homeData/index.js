import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        flex: 1,
        backgroundColor: '#c2efdf',
        alignItems: 'center',
    },

    button: {
        marginVertical: 30,
        backgroundColor: '#ffc0cb',
        color: 'white',
        fontSize: 22,
        borderColor: 'red',
        borderWidth: 2,
        padding: 15,
        width: "80%",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 10,
    },

    avatar: {
        width: 200,
        height: 200,
        overflow: 'hidden',
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
    },
});

const Home = (props) => {

    const navigation = props.navigation;

    const list = [
        // { id: 1, name: 'Valorant', addreas: 'thanh xuan', phone: '0987654321', logo: 'https://i.imgur.com/y4sVXXk.jpg', status: '1' },
        // { id: 2, name: 'Cyberpunk', addreas: 'giai phong', phone: '0987654321', logo: 'https://i.imgur.com/17OhHah.jpg', status: '0' },
        // { id: 3, name: 'FIFA', addreas: 'nam tu liem', phone: '0987654321', logo: 'https://i.imgur.com/0aXxbKl.jpg', status: '1' },
    ]

    // const chuyenMH = (tenMH, data = {}) => { navigation.navigate(tenMH, data) };
    const chuyenMan = (tenMH) => { navigation.navigate(tenMH, { listData: list }) };
    
    // const [shop,setShop] = useState(null);

    // useEffect(() => {
    //     fetch('http://localhost:6969/shop').then(res => {
    //         return res.json();
    //     }).then(data => {
    //         setShop(data)
    //     })
    // },[])

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 25,marginVertical: 15}}>WELCOME</Text>

            <Image
                source={require('../image/icon.png')}
                style={styles.avatar} />

            <Text
                style={styles.button}
                onPress={() => chuyenMan('User')}>
                Thông tin cửa hàng
            </Text>

            <Text
                style={styles.button}
                onPress={() => chuyenMan('Info')}>
                Thông tin cá nhân
            </Text>

            {/* <Button title="Thông tin cửa hàng"
                style={{ marginVertical: 50 }}
                onPress={() => chuyenMan('User')} />

            <Button title="Thông tin cá nhân"
                style={{ marginVertical: 50 }}
                onPress={() => chuyenMan('Info')} /> */}

            {/* {shop && <ShopList shop={shop} title = "All Article"/>} */}
        </View>
    );
}

export default Home;