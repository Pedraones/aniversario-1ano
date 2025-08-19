import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card: {
        display: 'flex',
        minWidth: '95%',
        minHeight: 250,
        backgroundColor: 'green',
        marginTop: '5%',
        margin: 'auto',
        borderRadius: '5%',
    },
    img: {
        marginTop:'2%',
        width: '90%',
        height: '80%',
    },
    header: {
        display: 'flex',
        maxWidth: '70%',
        maxHeight: '50%',
        alignItems: 'center',
        marginTop: '3%',
        marginLeft: '12%',
        paddingBottom: 6,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#0f0f0f7c',
        borderWidth: 2,
        boxShadow: '1px 1px 15px 6px #e01f1fa1',
        backgroundColor: 'pink',
    },
    text:{
        color: 'white',
        fontStyle: 'italic'
    },
    body:{
        width: '90%',
        margin: 'auto',
        marginTop: '3%',
        marginBottom: 0,
        backgroundColor: 'brown',
        padding: 10,
    }
});

export default style;