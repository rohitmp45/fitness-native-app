import { Pressable, Text, View } from 'react-native';

export function Welcome() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-4 dark:bg-gray-900">
      <View className="space-y-6">
        <View className="items-center space-y-2">
          <Text className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to React Native
          </Text>
          <Text className="text-center text-lg text-gray-600 dark:text-gray-300">
            Your modern React Native boilerplate is ready!
          </Text>
        </View>

        <View className="space-y-4">
          <Text className="text-center text-sm text-gray-500 dark:text-gray-400">
            This boilerplate includes:
          </Text>
          <View className="space-y-2">
            {[
              '⚡ Expo SDK 52',
              '🔧 TypeScript support',
              '🎨 NativeWind (Tailwind CSS)',
              '🧪 Jest & Testing Library',
              '📱 Expo Router v4',
              '🔍 ESLint & Prettier (Auto check disabled)',
            ].map((feature) => (
              <Text
                key={feature}
                className="text-center text-sm text-gray-600 dark:text-gray-300"
              >
                {feature}
              </Text>
            ))}
          </View>
        </View>

        <Pressable
          className="rounded-lg bg-primary-600 px-6 py-3 active:bg-primary-700"
          onPress={() => {
            // Add navigation logic here
            // console.log('Button pressed!');
          }}
        >
          <Text className="text-center font-semibold text-white">
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
