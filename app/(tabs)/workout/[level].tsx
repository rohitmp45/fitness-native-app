import { Link, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';

const exercisesData: Record<string, { name: string; image: string }[]> = {
  beginner: [
    { name: 'Push Ups', image: 'https://source.unsplash.com/100x100/?pushups' },
    { name: 'Squats', image: 'https://source.unsplash.com/100x100/?squat' },
    { name: 'Plank', image: 'https://source.unsplash.com/100x100/?plank' },
    {
      name: 'Jumping Jacks',
      image: 'https://source.unsplash.com/100x100/?jumpingjacks',
    },
    { name: 'Lunges', image: 'https://source.unsplash.com/100x100/?lunges' },
  ],
  intermediate: [
    {
      name: 'Bench Press',
      image: 'https://source.unsplash.com/100x100/?benchpress',
    },
    { name: 'Pull Ups', image: 'https://source.unsplash.com/100x100/?pullups' },
    {
      name: 'Deadlift',
      image: 'https://source.unsplash.com/100x100/?deadlift',
    },
    {
      name: 'Overhead Press',
      image: 'https://source.unsplash.com/100x100/?overheadpress',
    },
    {
      name: 'Bicep Curls',
      image: 'https://source.unsplash.com/100x100/?bicepcurls',
    },
  ],
  advanced: [
    {
      name: 'Clean & Jerk',
      image: 'https://source.unsplash.com/100x100/?cleanjerk',
    },
    { name: 'Snatch', image: 'https://source.unsplash.com/100x100/?snatch' },
    {
      name: 'Muscle Ups',
      image: 'https://source.unsplash.com/100x100/?muscleups',
    },
    {
      name: 'Front Squat',
      image: 'https://source.unsplash.com/100x100/?frontsquat',
    },
    {
      name: 'Handstand Push Ups',
      image: 'https://source.unsplash.com/100x100/?handstandpushups',
    },
  ],
};

export default function LevelExercises() {
  const params = useLocalSearchParams();
  const level = (params.level as string).toLowerCase();
  const exercises = exercisesData[level] || [];

  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <Text className="mb-6 text-2xl font-bold text-white">
        {level} Exercises
      </Text>
      {exercises.map((ex) => (
        <Link
          key={ex.name}
          href={{
            pathname: '/(tabs)/workout/exercises/[exercise]',
            params: { exercise: ex.name.toLowerCase(), level },
          }}
          asChild
        >
          <TouchableOpacity className="mb-3 flex-row items-center rounded-lg bg-gray-800 p-3">
            <Image
              source={{ uri: ex.image }}
              className="mr-4 size-16 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-lg font-semibold text-white">{ex.name}</Text>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}
