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
                <AntDesign name="home" size={24} color={focused ? 'black' : 'grey'} />
                <Text style={{ fontSize: 10, color: 'black' }}>Profile</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ focused }) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <AntDesign name="user" size={24} color={focused ? 'black' : 'grey'} />
                <Text style={{ fontSize: 10, color: 'black' }}>Profile</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: ({ focused }) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <AntDesign name="team" size={24} color={focused ? 'black' : 'grey'} />
                <Text style={{ fontSize: 10, color: 'black' }}>Profile</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarIcon: ({ focused }) => {
            // eslint-disable-next-line no-unused-expressions
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 17 }}>
                <AntDesign name="user" size={24} color={focused ? 'black' : 'grey'} />
                <Text style={{ fontSize: 10, color: 'black' }}>Profile</Text>
              </View>
            );
          },
          tabBarLabel: ' ',
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
