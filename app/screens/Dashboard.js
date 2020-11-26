import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import { colors } from 'app/config'
import { fetchData } from 'app/thunks'
import { useSelector, useDispatch } from 'react-redux'
import { selectData, selectDataLoading } from 'app/store/reducers/rackings'
import SystemCell from '../components/common/SystemCell'
const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  const rackingData = useSelector((state) => state.rackings.data)
  const { systems } = rackingData
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View style={styles.container}>
          {systems &&
            systems.map((system, index) => {
              const { name, icon, header_image } = system.fields
              return (
                <SystemCell
                  key={index}
                  title={name}
                  iconName={icon.name}
                  imageUrl={header_image}
                  onPress={() =>
                    navigation.navigate('Info', {
                      systemId: system.id,
                      rackingChildren: system.children.rackings,
                      title: name,
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

export default Dashboard
