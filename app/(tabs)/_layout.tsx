import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';

const TabLayout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <AntDesign name="home" size={24} color={focused ? '#06C149' : 'grey'} />
                <Text style={{ fontSize: 10, color: focused ? '#06C149' : 'grey' }}>Profile</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
          headerStyle: {
            backgroundColor: '#181A20',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarItemStyle: { backgroundColor: '#181A20' },
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ focused }) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <AntDesign name="user" size={24} color={focused ? '#06C149' : 'grey'} />
                <Text style={{ fontSize: 10, color: focused ? '#06C149' : 'grey' }}>Profile</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
          tabBarItemStyle: { backgroundColor: '#181A20' },
          headerStyle: {
            backgroundColor: '#181A20',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: ({ focused }) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <AntDesign name="team" size={24} color={focused ? '#06C149' : 'grey'} />
                <Text style={{ fontSize: 10, color: focused ? '#06C149' : 'grey' }}>Community</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
          tabBarItemStyle: { backgroundColor: '#181A20' },
          headerStyle: {
            backgroundColor: '#181A20',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarIcon: ({ focused }) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <AntDesign
                  name="exclamationcircleo"
                  size={24}
                  color={focused ? '#06C149' : 'grey'}
                />
                <Text style={{ fontSize: 10, color: focused ? '#06C149' : 'grey' }}>
                  Report feedback support
                </Text>
              </View>
            );
          },
          tabBarLabel: ' ',
          tabBarItemStyle: { backgroundColor: '#181A20' },
          headerStyle: {
            backgroundColor: '#181A20',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
