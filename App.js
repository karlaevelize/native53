import React, {useEffect, useState} from 'react';
import axios from "axios"
import { ScrollView, Text, Image, Button, Alert, TouchableOpacity, View, StyleSheet} from 'react-native';

export default function App() {

  const [ data, setData ] = useState([])

  const fetchData = async () => {
    const response = await axios.get("https://hp-assessment-api.herokuapp.com/characters") 
    console.log("response", response)
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ScrollView style={{marginVertical: 60}}>
      <Text style={{fontSize: 24, textAlign: "center", fontWeight: "bold"}}>
        Hello from React Native!
      </Text>
      <TouchableOpacity onPress={() => Alert.alert("You lazy coder!")}>
        <Image
          source={{uri: "https://www.semicolonworld.com/uploads/memes/gmOAZ1nNYV.jpg"}}
          style={{width: "100%", height: 400, marginVertical: 20}}
        />
      </TouchableOpacity>
      <Button title="Test" color="green" onPress={() => Alert.alert("You clicked me!")}/>
      {data.map(char => {
        return <View key={char.id}>
          <Text style={styles.nameTitle}>{char.name}</Text>
          <Image source={{uri: char.imgUrl}} style={{width: "100%", height: 400, marginVertical: 20,}}/>
          </View>     
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nameTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold"
  }
})