import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  FlatList,
} from 'react-native'
import { colors } from 'app/config'
import ListHeader from '../components/common/ListHeader'
import ListItem from '../components/common/ListItem'
import { useSelector } from 'react-redux'
import { selectRackingsByIds } from '../store/reducers/rackings'
import { selectSystemById } from '../store/reducers/systems'

const Info = ({ navigation, route }) => {
  const { systemId, rackingChildren } = route.params
  const rackings = useSelector(selectRackingsByIds(rackingChildren))
  const system = useSelector(selectSystemById(systemId))
  const renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.fields.name}
        subTitle={item.fields.short_description}
        onPress={() =>
          navigation.navigate('Detail', {
            id: item.id,
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
          <ListHeader images={system.fields.header_image} />
          <FlatList
            data={rackings}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
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

export default Info
