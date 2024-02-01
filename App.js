import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList, Button} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [item, setItem]= useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const AddItem =() =>{
    setShoppingList([...shoppingList,item])
    setItem(''); //tyhjennetään inputField
  }
  const ClearList = () => {
    setShoppingList([])
  }

  return (
    <View style={styles.container}>
    <View style={{marginTop: 70, marginBottom: 20}}> 
      <TextInput
      style={styles.input}
      placeholder='insert item'
      onChangeText = {text => setItem(text)}
      value={item} // tässä asetetaan tekstikentän valueksi item, jotta tyhjennyt onnistuu
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button 
        title='Add'
        onPress={AddItem}
        />
        <Button 
        title='Clear'
        onPress={ClearList}
        />
    </View>
    <View style={{flex:5}}>
      <Text style={{padding: 5}}>Shoppinglist:</Text>  
      <FlatList
        data={shoppingList} //Datan arvoksi asetetaan messages state
        renderItem={({item}) => 
          <View style ={styles.listItem}>
            <Text>{item}</Text>
          </View>
      }
      />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor:'grey',
    borderWidth:1,
    width: 250,
  },
  buttonContainer:{
    flexDirection:'row',
    marginBottom: 25,
    justifyContent: 'space-around',
    width: '30%',
  }
});
