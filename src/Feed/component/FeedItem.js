import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import FeedHeaderItem from './FeedHeaderItem'
import FeedBody from './FeedBody'

const FeedItem = props => {
  return (
    <View style={styles.container}>
      <FeedHeaderItem />
      <FeedBody />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginBottom: 8
  }
})

export default FeedItem