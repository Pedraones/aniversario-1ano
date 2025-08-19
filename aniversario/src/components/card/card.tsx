import { Image, Text, View } from "react-native";
import style from "./styles";

function cardComponent(){    
    return(
        <View style={style.card}>
            <View style={style.header}>
                <Text style={style.text}>
                    Nosso primero "encontro"
                </Text>
                <Image 
                style={style.img}
                source={require(`../../../assets/lavado.jpg`)}
                resizeMode="center"
                />
            </View>
    
            <View style={style.body}>
                <Text style={style.text}>
                    Lembro bem desse dia, 15/10/2022, nosso primero bj e quando nos comprometemos um com o outro antes do namoro
                </Text>
            </View>
        </View>
    )
}

export default cardComponent;

const imgs: Array<string> = [
    '../../../assets/1_encontro.jpg',
    '1_wallpaper',
    'chiquinha.jpg',
    'cablo.jpg',
    'crisma.jpg',
    'eucaristia.jpg',
    'lavado.jpg',
    'niver_mae.jpg',
    'pitica.jpg',
    'vestido.jpg'
];
