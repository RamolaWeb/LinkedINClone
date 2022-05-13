import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

const FeedHeaderItem = props => {
  const {
    profileImageUrl,
    userName,
    userSubTitle,
    postedAt,
    onMoreDetailsClicked,
  } = props
  return (
    <View style={styles.feedHeaderItemContainer}>
      <View style={styles.feedHeaderLeftItemContainer}>
        <Image
          source={{uri: profileImageUrl}}
          style={styles.feedHeaderLeftItemImageContainer}
        />
      </View>
      <View style={styles.feedHeaderRightItemContainer}>
        <View style={styles.feedHeaderRightItemContentContainer}>
          <Text style={styles.userNameText}>{userName}</Text>
          <Text style={styles.userNameSubtitleText}>{userSubTitle}</Text>
          <Text style={styles.postCreatedAtText}>{postedAt}</Text>
        </View>
        <View style={styles.feedHeaderRightItemContentIconContainer}>
          <Icon
            name="more-vertical"
            size={20}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  feedHeaderItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    paddingTop: 12
  },
  feedHeaderLeftItemContainer: {},
  feedHeaderRightItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex:1
  },
  feedHeaderRightItemContentContainer: {
    marginLeft: 8
  },
  feedHeaderRightItemContentIconContainer: {},
  feedHeaderLeftItemImageContainer: {
    width: 36,
    height: 36,
    borderRadius: 36
  },
  userNameText: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    lineHeight: 15,
    color: "#424242"
  },
  userNameSubtitleText: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#686868"
  },
  postCreatedAtText: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    lineHeight: 15,
    color: "#686868"
  }
})

FeedHeaderItem.defaultProps = {
  profileImageUrl: "https://picsum.photos/36",
  userName: "Rahul Subramanian",
  userSubTitle: "Demotivational Speaker",
  postedAt: "7m",
  onMoreDetailsClicked: () => {},
}

export default FeedHeaderItem