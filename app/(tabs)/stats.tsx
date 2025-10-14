import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';

export default function StatsScreen() {
  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Text className="mb-4 text-2xl font-bold text-white">Progress</Text>

      <View className="mb-4 rounded-2xl bg-gray-800 p-5">
        <Text className="text-gray-400">Workouts this week</Text>
        <Text className="mt-1 text-3xl font-bold text-white">4</Text>
      </View>

      <View className="mb-4 rounded-2xl bg-gray-800 p-5">
        <Text className="text-gray-400">Total volume (30d)</Text>
        <Text className="mt-1 text-3xl font-bold text-white">82,450 kg</Text>
      </View>

      <View className="rounded-2xl bg-gray-800 p-5">
        <Text className="text-gray-400">PR Highlights</Text>
        <View className="mt-2">
          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-white">Bench Press</Text>
            <View className="flex-row items-center gap-2">
              <Ionicons name="arrow-up" size={14} color="#34d399" />
              <Text className="text-white">105 kg</Text>
            </View>
          </View>

          <View className="mb-2 flex-row items-center justify-between">
            <Text className="text-white">Squat</Text>
            <View className="flex-row items-center gap-2">
              <Ionicons name="arrow-up" size={14} color="#34d399" />
              <Text className="text-white">160 kg</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
