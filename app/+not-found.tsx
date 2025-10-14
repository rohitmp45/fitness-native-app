import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Page not found</Text>
      <Link href="/">Go Home</Link>
    </View>
  );
}
