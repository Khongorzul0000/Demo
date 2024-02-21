import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function TabOneScreen(): React.ReactNode {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
          }}
          style={{ padding: 20, height: 400 }}>
          <View>
            <Text style={styles.title}>Fastest way to find volunteer</Text>
            <View style={{ width: 370 }}>
              <Text style={{ color: 'white', paddingLeft: 20 }}>
                Your kindness has the potential to brighten someone's day and change the world.
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View style={{ padding: 20 }}>
          <View style={styles.flex}>
            <Text style={{ fontSize: 23, marginBottom: 20, color: '#2bb730' }}>Categories</Text>
          </View>
          <ScrollView horizontal>
            <TouchableOpacity style={styles.line}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                  height={60}
                  width={60}
                  style={{ borderRadius: 100 }}
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                  }}
                />
                <Text>animal</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                  height={60}
                  width={60}
                  style={{ borderRadius: 100 }}
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                  }}
                />
                <Text>animal</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                  height={60}
                  width={60}
                  style={{ borderRadius: 100 }}
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                  }}
                />
                <Text>animal</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.flex}>
            <Text style={{ fontSize: 23, marginBottom: 20, color: '#2bb730' }}>
              Latiest volunteers
            </Text>
          </View>
          <TouchableOpacity style={{ marginBottom: 20 }}>
            <View style={styles.line}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                  height={50}
                  width={50}
                  style={{ borderRadius: 100 }}
                  source={{
                    uri: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
                  }}
                />
                <View>
                  <Text style={{ color: '#2bb730' }}>Homiloki</Text>
                  <Text style={{ color: ' #4f5e64 ' }}>in Ulaanbaatar</Text>
                </View>
              </View>
              <Text style={{ fontWeight: '600', fontSize: 20, marginBottom: 10, marginTop: 10 }}>
                Onon goliin hogiig tsverletsgeeye
              </Text>
              <Text>
                As you embark upon each day, remember that within you lies an abundance of potential
                waiting to be unleashed. You are capable of achieving greatness, of making a
                difference, of leaving an indelible mark on the world. Take a moment to acknowledge
                your strengths, your resilience, and your unwavering spirit.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginBottom: 20 }}>
            <View style={styles.line}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                  height={50}
                  width={50}
                  style={{ borderRadius: 100 }}
                  source={{
                    uri: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
                  }}
                />
                <View>
                  <Text style={{ color: '#2bb730' }}>Homiloki</Text>
                  <Text style={{ color: ' #4f5e64 ' }}>in Ulaanbaatar</Text>
                </View>
              </View>
              <Text style={{ fontWeight: '600', fontSize: 20, marginBottom: 10, marginTop: 10 }}>
                Onon goliin hogiig tsverletsgeeye
              </Text>
              <Text>
                As you embark upon each day, remember that within you lies an abundance of potential
                waiting to be unleashed. You are capable of achieving greatness, of making a
                difference, of leaving an indelible mark on the world. Take a moment to acknowledge
                your strengths, your resilience, and your unwavering spirit.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    width: 240,
    color: 'white',
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  flex: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
