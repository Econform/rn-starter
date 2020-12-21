import React, { useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from 'react-native'
import { colors } from 'app/config'
import { fetchData } from 'app/thunks'
import { useSelector, useDispatch } from 'react-redux'
import { selectSystems } from 'app/store/reducers/systems'
import SystemCell from '../components/common/SystemCell'
const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  const systems = useSelector(selectSystems)
  const renderItem = ({ item }) => {
    return (
      <SystemCell
        title={item.fields.name}
        iconName={item.fields.icon.name}
        imageUrl={item.fields.header_image}
        onPress={() =>
          navigation.navigate('Info', {
            systemId: item.id,
            rackingChildren: item.children.rackings,
            title: item.fields.name,
          })
        }
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <FlatList data={systems} renderItem={renderItem} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
})

export default Dashboard
