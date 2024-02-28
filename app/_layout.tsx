import { Stack } from 'expo-router';

const RootLayoutNav: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="volDetail/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayoutNav;
