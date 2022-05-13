import React from 'react'
import {
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const FeedBody = props => {
  const {
    bodyText,
    bodyImageUrl,
    likedBy,
    likeCount
  } = props
  return (
    <View style={styles.feedBodyContainer}>
      <Text style={styles.feedBodyText}>{bodyText}</Text>
      <Image
        source={{uri: bodyImageUrl}}
        style={styles.feedBodyImageContainer}
      />
      <View style={styles.postAnalyticsContainer}>
        <Text style={styles.countText}>{likedBy}</Text>
        <Text style={styles.countText}>{likeCount}</Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name="thumbs-up"
            size={16}
            regular
          />
          <Text>Like</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="comment"
            size={16}
            regular
          />
          <Text>Comment</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="share"
            size={16}
            regular
          />
          <Text>Share</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="paper-plane"
            size={16}
            regular
          />
          <Text>Send</Text>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  feedBodyImageContainer: {
    height: 100,
  },
  feedBodyText: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    lineHeight: 12,
    paddingTop: 4,
    paddingBottom: 8,
    paddingLeft: 8,
    color: "#1A1A1A"
  },
  feedBodyContainer: {

  },
  postAnalyticsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 20
  },
  countText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 15,
    color: "#7A7A7A"
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderTopWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderTopColor: "#EDEDED"
  },
  iconContainer: {
    alignItems: "center"
  }
})

FeedBody.defaultProps = {
  bodyImageUrl: "https://picsum.photos/500/500",
  bodyText: "Rahul Subramanian",
  likedBy: "Rohan Gupta and 2,634 others",
  likeCount: `85 comments \u2022 25 Shares`
}

export default FeedBody

