import React from "react";
import {View, Text, Image} from "react-native";
import styles from './MusicCard.styles';

const MusicCard = ({data}) => {
    return(
        <View style = {styles.container}>
            <Image  resizeMode="contain" style= {styles.image} source={{uri: data.imageUrl}}/>
            <View>
                <Text numberOfLines={1} style = {styles.title}>{data.title}</Text>
                <View style={styles.containerText}>
                    <Text style = {styles.artist}>{data.artist}</Text>
                    <Text style={{color:"black"}}>-  </Text>
                    <Text style = {styles.year}>{data.year}</Text>
                    
                </View>
                <Text style = {styles.album}>{data.album}</Text>
            </View>
            <View style={styles.containerSold}>
                <Text style={styles.isSoldOut}>{(data.isSoldOut)?"TÜKENDİ":null}</Text> 
            </View> 
        </View>
    )
}

export default MusicCard