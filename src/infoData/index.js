
import { Image, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    color: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },

    avatar: {
        width: 100,
        height: 100,
        overflow: 'hidden',
        borderRadius: 50,
        borderColor: 'red',
        borderWidth: 1,
    },
});

const Info = (props) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{
                    uri: 'https://static.wikia.nocookie.net/cyberpunk/images/8/88/CP2077_Judy_Alvarez_Lizzie_Bar.jpg/',
                }}
            />

            {/* <Image
                style={styles.tinyLogo}
                source={require('@expo/snack-static/react-native-logo.png')}
            /> */}
            <Text>Họ tên: <Text style={styles.color}>Nguyễn Thành Lợi</Text></Text>
            <Text>Mã sinh viên: <Text style={styles.color}>PH25590</Text></Text>
        </View>
    );
}

export default Info;

