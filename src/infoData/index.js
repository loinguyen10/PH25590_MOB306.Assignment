
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    color: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },

    avatar: {
        width: 150,
        height: 150,
        overflow: 'hidden',
        borderRadius: 75,
        borderColor: 'white',
        borderWidth: 1,
    },

});

const Info = (props) => {
    return (
        <ImageBackground
            style={styles.container}
            source={require('../image/background.png')}>
            <Image
                style={styles.avatar}
                source={{
                    uri: 'https://static.wikia.nocookie.net/cyberpunk/images/8/88/CP2077_Judy_Alvarez_Lizzie_Bar.jpg/',
                }}
            />
            <Text>Họ tên: <Text style={styles.color}>Nguyễn Thành Lợi</Text></Text>
            <Text>Mã sinh viên: <Text style={styles.color}>PH25590</Text></Text>
        </ImageBackground>
    );
}

export default Info;

