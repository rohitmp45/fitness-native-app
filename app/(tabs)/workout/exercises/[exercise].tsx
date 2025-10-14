import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text } from 'react-native';

export default function ExerciseDetail() {
  const { exercise } = useLocalSearchParams();

  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <Text className="mb-4 text-2xl font-bold text-white">{exercise}</Text>
      <Image
        source={{ uri: `https://source.unsplash.com/300x200/?${exercise}` }}
        className="mb-4 h-64 w-full rounded-lg"
        resizeMode="cover"
      />
      <Text className="text-lg text-white">
        Here you can describe how to perform the {exercise} in detail. Include
        sets, reps, tips, and common exercise.
      </Text>
    </ScrollView>
  );
}
