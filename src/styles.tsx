import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    button:{
        borderColor:'black',
        backgroundColor:'#fff',
        margin:'5%',
    },
    otherButton: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    bold: {fontWeight:'bold'},
    section: {
        fontSize: height / 36,
        marginBottom: '5%',
        marginLeft:'5%',
        color:'black',
    },
    navBar: {
        backgroundColor: 'blue',
    },
});

export { styles };

