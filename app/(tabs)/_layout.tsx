import { AntDesign } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabLayout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Volfour',
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
