import React from "react";
import { View, TextInput } from 'react-native'
import styles from "./SearchBar.styles"

const SearchBar = props => {

    return(
        <View>
            <TextInput placeholder="Ara..." placeholderTextColor={"#FF5B1C"} cursorColor={"#FF5B1C"} 
            style={styles.input} onChangeText={props.onSearch} />
        </View>
    )
}

export default SearchBar