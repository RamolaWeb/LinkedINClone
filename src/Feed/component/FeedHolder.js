import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native'

import FeedItem from './FeedItem'
import FeedHeader from './FeedHeader'

const FeedHolder = props => {

  const renderFeedItem = ({item, index}) => {
    return (
      <FeedItem />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderFeedItem}
        data={[1,2,3,4,5]}
        keyExtractor={(item, index) => `feed-${index}`}
        ListHeaderComponent={FeedHeader}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8E6DE"
  }
})

export default FeedHolder
