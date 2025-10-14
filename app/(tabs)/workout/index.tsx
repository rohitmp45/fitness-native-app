/* eslint-disable global-require */
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function WorkoutPage() {
  const levels = [
    {
      title: 'Beginner',
      desc: 'Start your fitness journey with light full-body workouts.',
      icon: 'walk',
      bg: 'bg-green-600',
      // image: require('../assets/beginner.png'),
    },
    {
      title: 'Intermediate',
      desc: 'Build strength and stamina with moderate intensity plans.',
      icon: 'bicycle',
      bg: 'bg-yellow-600',
      // image: require('../assets/intermediate.png'),
    },
    {
      title: 'Advanced',
      desc: 'Challenge yourself with high-intensity full-body workouts.',
      icon: 'barbell',
      bg: 'bg-red-600',
      // image: require('../assets/advanced.png'),
    },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <Text className="mb-4 text-2xl font-bold text-white">
        Choose Your Level
      </Text>

      {levels.map((level) => (
        <TouchableOpacity
          className={`mb-4 flex-row items-center rounded-xl p-4 ${level.bg}`}
          key={level.title}
          onPress={() => router.push(`/workout/${level.title}`)}
        >
          <Image
            // source={level.image}
            className="mr-4 size-16 rounded-lg"
            resizeMode="contain"
          />
          <View className="flex-1">
            <Text className="text-lg font-bold text-white">{level.title}</Text>
            <Text className="mt-1 text-sm text-gray-100">{level.desc}</Text>
          </View>
          <Ionicons name={level.icon as any} size={26} color="#fff" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
