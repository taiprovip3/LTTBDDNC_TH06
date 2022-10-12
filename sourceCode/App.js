import {useState, useCallback} from 'react';
import { Text, View, StyleSheet, FlatList, Image, Button, Pressable} from 'react-native';
import { TextInput } from 'react-native-paper';
// import { v4 } from 'uuid';

export default function App() {
  //0. Khởi tạo biến
  const [id, setId] = useState(1);
  const [job, setJob] = useState('');
  const [dataList, setDataList] = useState([]);

  //1. Hàm cần thiết
  const handleClick = useCallback((e) => {
    setDataList( [...dataList, {id: id, name: job, isComplete: false}] );
    setId((id) => id + 1);
  }, [job, dataList, id]);
  const renderItem = ({ item }) => (
    <OneItem item={item} />
  );
  function OneItem ({ item }) {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignContent:'center'}}>
        <Text style={{ width: '100%', fontWeight:'900' }}>{item.id}</Text>
        <Text style={{ width: '100%' }}>{item.name}</Text>
        {
          item.isComplete
          ?
          <Text style={{textDecorationLine: 'line-through'}}>Mark</Text>
          :
          <Button title="Mark" onPress={() => functionToDeleteOneItem(item.id)}>Remove</Button>
        }
      </View>
    )
  }
  const functionToDeleteOneItem = useCallback((id) => {
        setDataList(
          (prevState) => prevState.map (
            (dataObject) => dataObject.id === id ? { ...dataObject, isComplete: true } : dataObject
          )
        );
  }, []);
  
  //2. Render
  return (
    <View style={styles.container}>
    <Text>Lab01 - ToDoApp</Text>
    <TextInput
        placeholder="Enter to do job"
        style={{borderColor:'lightgrey', borderWidth:1, borderRadius:'10px'}}
        label="Enter your job..."
        right={<TextInput.Icon icon="plus" onPress={handleClick} />}
        onChangeText={useCallback((e) => setJob(e), [])}
    />
    <View style={{flexDirection: 'row', justifyContent: 'center', alignContent:'center', borderColor:'black', borderWidth:1}}>
      <Text style={{ width: '100%', fontWeight:'900' }}>Mã</Text>
      <Text style={{ width: '100%', fontWeight:'900' }}>Tên</Text>
      <Text style={{ width: '100%', fontWeight:'900' }}>Hành động</Text>
    </View>
    <FlatList
      data={dataList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </View>
  );
}

  //3. StyleSheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'top',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
  });
