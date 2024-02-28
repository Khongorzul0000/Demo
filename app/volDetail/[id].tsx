import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function TabFourScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Community Forum</Text>
      <ScrollView style={styles.scrollView}>
        {/* Forum posts */}
        <View style={styles.forumPost}>
          <Text style={styles.postTitle}>How to use the new feature?</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae commodo tellus.
            Duis ac justo ligula.
          </Text>
          <View style={styles.flex}>
            <Image
              height={50}
              width={50}
              borderRadius={100}
              source={{
                uri: 'https://media1.popsugar-assets.com/files/thumbor/ptdgPx5tCvvD9kUsU7pQFMUkBIA/207x134:1865x1792/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/028/n/1922398/066318895d76e2ef0c31d8.46065434_/i/Jennifer-Aniston.jpg',
              }}
            />
            <View>
              <Text style={styles.postAuthor}>Posted by John Doe</Text>
              <Text style={styles.postDate}>Posted on January 1, 2023</Text>
            </View>
          </View>
          {/* Comments */}
          <View style={styles.comment}>
            <Text>This is a great feature! Thanks for impting it.</Text>
            <Text style={styles.commentAuthor}>Posted by Jane Smith</Text>
            <Text style={styles.commentDate}>Posted on January 2, 2023</Text>
          </View>
          <View style={styles.comment}>
            <Text>This is a great feature! Thanks for implementing it.</Text>
            <Text style={styles.commentAuthor}>Posted by Jane Smith</Text>
            <Text style={styles.commentDate}>Posted on January 2, 2023</Text>
          </View>
          {/* More comments can be added here */}
        </View>
        {/* More forum posts can be added here */}
        <Text style={styles.postTitle}>How to use the new feature?</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae commodo tellus. Duis
          ac justo ligula.
        </Text>
        <View style={styles.flex}>
          <Image
            height={50}
            width={50}
            borderRadius={100}
            source={{
              uri: 'https://media1.popsugar-assets.com/files/thumbor/ptdgPx5tCvvD9kUsU7pQFMUkBIA/207x134:1865x1792/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/028/n/1922398/066318895d76e2ef0c31d8.46065434_/i/Jennifer-Aniston.jpg',
            }}
          />
          <View>
            <Text style={styles.postAuthor}>Posted by John Doe</Text>
            <Text style={styles.postDate}>Posted on January 1, 2023</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  forumPost: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  postTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postAuthor: {
    fontStyle: 'italic',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  postDate: {
    fontSize: 12,
    color: '#777',
  },
  comment: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
    marginTop: 10,
    paddingLeft: 20,
  },
  commentAuthor: {
    fontStyle: 'italic',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  commentDate: {
    fontSize: 12,
    color: '#777',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
});
