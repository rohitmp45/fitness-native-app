import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';

type Exercise = {
  id: string;
  name: string;
  sets: number;
  reps: number;
};

type RenderItemProps = {
  item: Exercise;
};

// ✅ Move renderItem outside to prevent redefinition on every render
function ExerciseItem({ item }: RenderItemProps) {
  return (
    <View className="mb-4 rounded-xl bg-gray-800 p-4">
      <Text className="text-lg font-semibold text-white">{item.name}</Text>
      <Text className="mt-1 text-gray-400">
        {item.sets} sets × {item.reps} reps
      </Text>
    </View>
  );
}

export default function WorkoutDetailScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();

  const exercises = useMemo<Exercise[]>(
    () => [
      { id: 'e1', name: 'Bench Press', sets: 4, reps: 8 },
      { id: 'e2', name: 'Incline DB Press', sets: 3, reps: 10 },
      { id: 'e3', name: 'Overhead Press', sets: 3, reps: 8 },
      { id: 'e4', name: 'Triceps Pushdown', sets: 3, reps: 12 },
    ],
    [],
  );

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Stack.Screen
        options={{
          title: (name as string) || 'Workout',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell" color={color} size={size} />
          ),
        }}
      />

      <FlatList
        data={exercises}
        renderItem={({ item }) => <ExerciseItem item={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text className="mt-8 text-center text-gray-400">
            No exercises found for this workout.
          </Text>
        }
      />
    </View>
  );
}
