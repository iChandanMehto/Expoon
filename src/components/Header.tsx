import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import Color from '../../constants/Colors' 

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
<Ionicons name="chevron-back" size={22} color={Color.textPrimary} />
        </TouchableOpacity>
<Text style={styles.title}>Today's task</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Color.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {},
});