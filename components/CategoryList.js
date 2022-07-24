import React  from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import SkiiImage from '../assets/ski.png';

export default function CategoryListItem(props){
    return <View style={styles.container}>
        <Text style={styles.title}>CategoryListItem</Text>
        <Image style={styles.image} source={SkiiImage} />
    </View>
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FFF',
        padding: 16,
        shadowColor:'#000',
        shadowOpacity: 0.3,
        shadowRadius:10,
        shadowOffset: {width:0, height:0},
        marginBottom: 16,
    },
    
    image:{
        height: 60,
        width: 60,
    },

    title:{
        textTransform:'uppercase',
        marginBottom: 8,
        fontWeight: '700',
    }
})