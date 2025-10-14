import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useMemo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

type Workout = {
  id: string;
  name: string;
  description: string;
  focus: string;
  durationMin?: number;
};

type WorkoutItemProps = {
  item: Workout;
};

// ✅ Moved render item into its own component (better performance)
function WorkoutItem({ item }: WorkoutItemProps) {
  return (
    <Link
      asChild
      href={{
        pathname: '/workout-detail',
        params: { name: item.name },
      }}
    >
      <TouchableOpacity className="mb-4 rounded-xl bg-gray-800 p-4">
        <View className="flex-row items-center justify-between">
          {/* Left section: workout name & description */}
          <View>
            <Text className="text-lg font-semibold text-white">
              {item.name}
            </Text>
            <Text className="mt-1 text-gray-400">{item.description}</Text>
          </View>

          {/* Right section: focus & duration */}
          <View className="items-end">
            <Text className="text-gray-400">{item.focus}</Text>
            <View className="mt-1 flex-row items-center gap-1">
              <Ionicons name="time" size={14} color="#9ca3af" />
              <Text className="text-gray-400">{item.durationMin}m</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

export default function WorkoutsScreen() {
  const workouts = useMemo<Workout[]>(
    () => [
      {
        id: 'w1',
        name: 'Push Day',
        description: 'Chest, shoulders, triceps',
        focus: 'Push',
        durationMin: 60,
      },
      {
        id: 'w2',
        name: 'Pull Day',
        description: 'Back and biceps',
        focus: 'Pull',
        durationMin: 55,
      },
      {
        id: 'w3',
        name: 'Leg Day',
        description: 'Quads, hamstrings, glutes',
        focus: 'Legs',
        durationMin: 65,
      },
    ],
    [],
  );

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <FlatList
        data={workouts}
        renderItem={({ item }) => <WorkoutItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
