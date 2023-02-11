import { Button, StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

const Home = (props) => {

    const navigation = props.navigation;

    // const chuyenMH = (tenMH, data = {}) => { navigation.navigate(tenMH, data) };
    const chuyenMan = (tenMH) => { navigation.navigate(tenMH, {}) };

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Thông tin cửa hàng" onPress={() => chuyenMan('User')}/>
            <Button title="Thông tin cá nhân" onPress={() => chuyenMan('Info')}/>
        </View>
    );
}

export default Home;