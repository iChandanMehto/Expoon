import { View, Text , Button, Alert, ScrollView, StyleSheet, FlatList} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {StatusBar} from 'expo-status-bar';
import Color from "../../constants/Colors";
import { TASKS } from "../../constants/Tasks";


function Homescreen(){
const insets = useSafeAreaInsets();

  return(
    <View style = {[styles.container,{paddingTop  : insets.top}]} >
      <StatusBar style="light"/>
<FlatList
data={TASKS}
keyExtractor={(item) =>item.id}
renderItem={({item})=><Text>{item.title}</Text>}
ListHeaderComponent={
  <>
  
  </>
}
/>
    </View>

  );
};


export default Homescreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Color.Background,
  },
});
