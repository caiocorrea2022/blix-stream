import { StyleSheet } from 'react-native';
import { screensEnabled } from 'react-native-screens';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: 230,
        aspectRatio: 16 / 9,
        resizeMode: "cover",
        borderRadius: 3,
        margin: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;