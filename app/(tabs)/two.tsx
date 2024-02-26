import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function TabTwoScreen(): React.ReactNode {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Image
            style={{ height: 250, width: '100%' }}
            source={{
              uri: 'https://i.insider.com/5e14bfdfb13e47060a703953?width=600&format=jpeg&auto=webp',
            }}
          />
          <View style={{ marginRight: 20, marginLeft: 20 }}>
            <View style={{ paddingTop: 20 }}>
              <Text style={styles.title}>Username</Text>
              <Text style={{ marginTop: 6 }}>Joined February 2024</Text>
              <Text style={{ marginTop: 6 }}>email@gmail.com</Text>
              <Text style={{ marginTop: 6 }}>99990000</Text>
              <Text style={{ marginTop: 6 }}>Location( Duureg )</Text>
              <Text>rating badget</Text>
              <Text>edit</Text>
              <Text>likes</Text>
            </View>
            <Text style={{ fontWeight: '600', fontSize: 25, marginTop: 10 }}>
              Hiisen sain duriin ajiluud
            </Text>
            <ScrollView style={{ marginTop: 20, marginBottom: 20 }} horizontal>
              <TouchableOpacity style={styles.line1}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <Image
                    height={50}
                    width={50}
                    style={{ borderRadius: 100 }}
                    source={{
                      uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                    }}
                  />
                  <View>
                    <Text style={{ fontSize: 12, color: '#2bb730' }}>Homiloki</Text>
                    <Text style={{ fontSize: 12 }}>Ulaanbaatar</Text>
                  </View>
                </View>
                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 9, marginTop: 9 }}>
                  Onon goliin hogiig tsverletsgeeye
                </Text>
                <Text>
                  As you embark upon each day, remember that within you lies an abundance of
                  potential waiting to be unleashed. You are capable of achieving greatness, of
                  making a difference...
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.line1}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <Image
                    height={50}
                    width={50}
                    style={{ borderRadius: 100 }}
                    source={{
                      uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                    }}
                  />
                  <View>
                    <Text style={{ fontSize: 12, color: '#2bb730' }}>Homiloki</Text>
                    <Text style={{ fontSize: 12 }}>Ulaanbaatar</Text>
                  </View>
                </View>
                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 9, marginTop: 9 }}>
                  Onon goliin hogiig tsverletsgeeye
                </Text>
                <Text>
                  As you embark upon each day, remember that within you lies an abundance of
                  potential waiting to be unleashed. You are capable of achieving greatness, of
                  making a difference...
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.line1}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <Image
                    height={50}
                    width={50}
                    style={{ borderRadius: 100 }}
                    source={{
                      uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                    }}
                  />
                  <View>
                    <Text style={{ fontSize: 12, color: '#2bb730' }}>Homiloki</Text>
                    <Text style={{ fontSize: 12 }}>Ulaanbaatar</Text>
                  </View>
                </View>
                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 9, marginTop: 9 }}>
                  Onon goliin hogiig tsverletsgeeye
                </Text>
                <Text>
                  As you embark upon each day, remember that within you lies an abundance of
                  potential waiting to be unleashed. You are capable of achieving greatness, of
                  making a difference...
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  line1: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    marginRight: 15,
    width: 300,
    maxHeight: '100%',
    paddingBottom: 20,
  },
});
