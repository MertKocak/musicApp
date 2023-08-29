import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, TextInput, Dimensions, FlatList} from "react-native";
import music_data from './music_data.json'
import MusicCard from './components/MusicCard'
import SearchBar from './components/SearchBar'

function App() {
  const [list, setList] = useState(music_data);

  const handleSearch = (text: any) => {
    const filteredList = music_data.filter(
      song => {
        const searchedText = text.toLowerCase();
        const currentTitle = song.title.toLowerCase();
        return currentTitle.indexOf(searchedText) > -1;
      }
    )
    setList(filteredList);
  };

  return(
    <SafeAreaView>
      <View>
        <Text style={styles.appbar_title}>
          Music App
        </Text>
        
        <FlatList
        contentContainerStyle={{ paddingBottom: 110 }}
        ListHeaderComponent={
          <SearchBar onSearch={handleSearch} />
        }
        data={list}
        renderItem={({item}) => <MusicCard data = {item} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    /* container: {
        flex:1,
        backgroundColor: "#eceff1",
    }, */
    appbar_title:{
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        height: 48,
        textAlignVertical: 'center',
        backgroundColor: "#FF5B1C",
        color: "white"
    },
})

export default App