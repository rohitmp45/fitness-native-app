import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Text className="mb-4 text-2xl font-bold text-white">
        Welcome to fitness app
      </Text>

      {/* Row 1 */}
      <View className="mb-4 flex-row gap-3">
        <Link asChild href="/(tabs)/workout">
          <TouchableOpacity className="flex-1 items-center justify-center rounded-xl bg-blue-600 p-4">
            <Ionicons name="barbell" size={22} color="#fff" />
            <Text className="mt-1 font-semibold text-white">Workouts</Text>
          </TouchableOpacity>
        </Link>

        <Link asChild href="/(tabs)/exercises">
          <TouchableOpacity className="flex-1 items-center justify-center rounded-xl bg-gray-800 p-4">
            <Ionicons name="list" size={22} color="#fff" />
            <Text className="mt-1 font-semibold text-white">Exercises</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Row 2 */}
      <View className="mb-4 flex-row gap-3">
        <Link asChild href="/(tabs)/plans">
          <TouchableOpacity className="flex-1 items-center justify-center rounded-xl bg-gray-800 p-4">
            <Ionicons name="grid" size={22} color="#fff" />
            <Text className="mt-1 font-semibold text-white">Plans</Text>
          </TouchableOpacity>
        </Link>

        <Link asChild href="/(tabs)/stats">
          <TouchableOpacity className="flex-1 items-center justify-center rounded-xl bg-gray-800 p-4">
            <Ionicons name="stats-chart" size={22} color="#fff" />
            <Text className="mt-1 font-semibold text-white">Stats</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Summary Section */}
      <View className="mt-2 rounded-2xl bg-gray-800 p-4">
        <Text className="text-lg font-semibold text-white">
          Today&apos;s Summary
        </Text>
        <View className="mt-3 flex-row justify-between">
          <View>
            <Text className="text-gray-400">Workout</Text>
            <Text className="text-white">Push Day</Text>
          </View>
          <View>
            <Text className="text-gray-400">Volume</Text>
            <Text className="text-white">9,250 kg</Text>
          </View>
          <View>
            <Text className="text-gray-400">Duration</Text>
            <Text className="text-white">58 min</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
