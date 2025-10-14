import Ionicons from '@expo/vector-icons/Ionicons';
import { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';

type Plan = {
  id: string;
  name: string;
  durationWeeks: number;
  sessionsPerWeek: number;
};

export default function PlansScreen() {
  const plans = useMemo<Plan[]>(
    () => [
      {
        id: 'p1',
        name: 'Beginner Full Body',
        durationWeeks: 6,
        sessionsPerWeek: 3,
      },
      {
        id: 'p2',
        name: 'Push/Pull/Legs',
        durationWeeks: 8,
        sessionsPerWeek: 6,
      },
      { id: 'p3', name: 'Upper/Lower', durationWeeks: 10, sessionsPerWeek: 4 },
    ],
    [],
  );

  const renderItem = ({ item }: { item: Plan }) => (
    <View className="mb-4 rounded-2xl bg-gray-800 p-5">
      <Text className="text-xl font-semibold text-white">{item.name}</Text>
      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Ionicons name="calendar" size={16} color="#9ca3af" />
          <Text className="text-gray-300">{item.durationWeeks} weeks</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Ionicons name="repeat" size={16} color="#9ca3af" />
          <Text className="text-gray-300">{item.sessionsPerWeek}/week</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <FlatList
        data={plans}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
      />
    </View>
  );
}
