import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Animated,
  SafeAreaView,
  useWindowDimensions,
  FlatList,
} from 'react-native';

import { volunteers } from '../../data/datas';

import { Volunteer } from '@/types';
const images = new Array(6).fill(
  'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp',
);
export default function TabOneScreen(): React.ReactNode {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();
  const [vols, setVols] = useState<Volunteer[]>([]);
  useEffect(() => {
    setVols(volunteers);
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event([
                {
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX,
                    },
                  },
                },
              ])}
              scrollEventThrottle={1}>
              {images.map((image, imageIndex) => {
                return (
                  <View style={{ width: windowWidth, height: 400 }} key={imageIndex}>
                    <ImageBackground source={{ uri: image }} style={styles.card}>
                      <View style={styles.textContainer}>
                        <Text style={styles.infoText}>{'Image - ' + imageIndex}</Text>
                      </View>
                    </ImageBackground>
                  </View>
                );
              })}
            </ScrollView>
            <View style={styles.indicatorContainer}>
              {images.map((image, imageIndex) => {
                const width = scrollX.interpolate({
                  inputRange: [
                    windowWidth * (imageIndex - 1),
                    windowWidth * imageIndex,
                    windowWidth * (imageIndex + 1),
                  ],
                  outputRange: [8, 16, 8],
                  extrapolate: 'clamp',
                });
                return <Animated.View key={imageIndex} style={[styles.normalDot, { width }]} />;
              })}
            </View>
          </View>
        </SafeAreaView>
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>Categories</Text>
          <ScrollView horizontal>
            <TouchableOpacity style={styles.line1}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                  style={styles.categoryPic}
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                  }}
                />
                <Text style={{ color: 'white' }}>Cleaning</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line1}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                  style={styles.categoryPic}
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                  }}
                />
                <Text style={{ color: 'white' }}>Enviroment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.line1}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                  style={styles.categoryPic}
                  source={{
                    uri: 'https://www.shutterstock.com/image-photo/this-beautiful-animel-260nw-2304786059.jpg',
                  }}
                />
                <Text style={{ color: 'white' }}>Animal</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <Text style={styles.title}>Latiest volunteers</Text>
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
                  <Text style={{ color: 'white' }}>Homiloki</Text>
                  <Text style={{ color: '#06C149' }}>in Ulaanbaatar</Text>
                </View>
              </View>
              <Text style={styles.cardTitle}>Onon goliin hogiig tsverletsgeeye</Text>
              <Text style={{ color: 'white' }}>
                As you embark upon each day, remember that within you lies an abundance of potential
                waiting to be unleashed. You are capable of achieving greatness, of making a
                difference, of leaving an indelible mark on the world. Take a moment to acknowledge
                your strengths, your resilience, and your unwavering spirit.
              </Text>
            </View>
          </TouchableOpacity>
          <FlatList
            data={vols}
            renderItem={({ item }) => {
              return (
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
                        <Text style={{ color: '#2bb730' }}>{item.name}</Text>
                        <Text style={{ color: '#4f5e64' }}>in Ulaanbaatar</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
  },
  title: {
    fontSize: 23,
    marginBottom: 20,
    marginTop: 10,
    color: '#06C149',
    fontWeight: 'bold',
  },
  flex: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    padding: 20,
    backgroundColor: '#1F222A',
    borderRadius: 20,
  },
  line1: {
    padding: 20,
    backgroundColor: '#1F222A',
    borderRadius: 20,
    marginRight: 15,
  },
  scrollContainer: {
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    color: 'white',
  },
  categoryPic: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});
