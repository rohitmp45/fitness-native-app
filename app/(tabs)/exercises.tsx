import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Exercise = {
  id: string;
  name: string;
  muscle: string;
};

type FilterType = 'All' | 'Chest' | 'Back' | 'Legs' | 'Arms' | 'Shoulders';

type FilterPillProps = {
  label: FilterType;
  active: boolean;
  onPress: (label: FilterType) => void;
};

function FilterPill({ label, active, onPress }: FilterPillProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      className={`mr-2 rounded-full px-3 py-1 ${
        active ? 'bg-primary-600' : 'bg-gray-800'
      }`}
    >
      <Text className="text-white">{label}</Text>
    </TouchableOpacity>
  );
}

export default function ExercisesScreen() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<FilterType>('All');

  const allExercises = useMemo<Exercise[]>(
    () => [
      { id: '1', name: 'Bench Press', muscle: 'Chest' },
      { id: '2', name: 'Incline Press', muscle: 'Chest' },
      { id: '3', name: 'Squat', muscle: 'Legs' },
      { id: '4', name: 'Deadlift', muscle: 'Back' },
      { id: '5', name: 'Overhead Press', muscle: 'Shoulders' },
      { id: '6', name: 'Barbell Row', muscle: 'Back' },
      { id: '7', name: 'Biceps Curl', muscle: 'Arms' },
      { id: '8', name: 'Triceps Pushdown', muscle: 'Arms' },
    ],
    [],
  );

  const exercises = useMemo(() => {
    const q = query.toLowerCase();
    return allExercises.filter(
      (e) =>
        (filter === 'All' || e.muscle === filter) &&
        e.name.toLowerCase().includes(q),
    );
  }, [allExercises, filter, query]);

  const renderItem = ({ item }: { item: Exercise }) => (
    <View className="mb-3 rounded-xl bg-gray-800 p-4">
      <Text className="text-white">{item.name}</Text>
      <Text className="text-gray-400">{item.muscle}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <View className="mb-3 flex-row items-center rounded-xl bg-gray-800 px-3">
        <Ionicons name="search" size={18} color="#9ca3af" />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search exercises"
          placeholderTextColor="#9ca3af"
          className="ml-2 flex-1 py-2 text-white"
        />
      </View>

      <View className="mb-3 flex-row">
        {(['All', 'Chest', 'Back', 'Legs', 'Arms', 'Shoulders'] as const).map(
          (m) => (
            <FilterPill
              key={m}
              label={m}
              active={filter === m}
              onPress={setFilter}
            />
          ),
        )}
      </View>

      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
