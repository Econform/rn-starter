import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import { colors } from 'app/config'
import ListHeader from '../components/common/ListHeader'
import ListItem from '../components/common/ListItem'
import { useSelector } from 'react-redux'

const Info = ({ navigation, route }) => {
  const rackingData = useSelector((state) => state.rackings.data)
  const { rackings, systems } = rackingData
  const { systemId, rackingChildren } = route.params
  const system = systems.find((syst) => {
    return syst.id === systemId
  })
  const racking = rackings.filter((rack) => {
    return rackingChildren.includes(rack.id)
  })
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.container}>
          <ListHeader images={system.fields.header_image} />
          {racking.map((rack, index) => {
            return (
              <ListItem
                key={index}
                title={rack.fields.name}
                subTitle={rack.fields.short_description}
                onPress={() =>
                  navigation.navigate('Detail', {
                    id: rack.id,
                    title: rack.fields.name,
                  })
                }
              />
            )
          })}
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
