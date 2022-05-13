import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import IconChat from 'react-native-vector-icons/FontAwesome'

const FeedHeader = props => {
  const {
    profileImageUrl
  } = props
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: profileImageUrl}}
          style={styles.feedHeaderLeftItemImageContainer}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightContentContainer}>
          <Icon
            name="search"
            size={20}
            style={styles.searchIconContainer}
          />
          <Text style={styles.searchText}>Search</Text>
        </View>
        <IconChat
          name="comment"
          size={30}
          style={styles.messageIconContainer}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  feedHeaderLeftItemImageContainer: {
    width: 36,
    height: 36,
    borderRadius: 36
  },
  container: {
    backgroundColor: "#FFF",
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  rightContentContainer: {
    marginLeft: 16,
    backgroundColor: "#EFF3F5",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    flex:1,
  },
  searchText: {
    marginLeft: 8,
    color: "#35373A",
    fontFamily: "Roboto-Regular",
    fontSize: 18
  },
  rightContainer: {
    flexDirection: "row",
    flex:1,
    alignItems: "center",
  },
  messageIconContainer: {
    marginLeft: 16,
    marginRight: 8
  },
  searchIconContainer: {
    marginLeft: 8
  }
})

FeedHeader.defaultProps = {
  profileImageUrl: "https://picsum.photos/36",
}

export default FeedHeader