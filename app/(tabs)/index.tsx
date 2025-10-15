import { Ionicons } from '@expo/vector-icons';
import StepperExample from 'app/componenet/stepper';
import { Link } from 'expo-router';
import { useMemo, useRef, useState } from 'react';
import {
  Image,
  PanResponder,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export default function Home() {
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const images = [
    {
      id: 'pexels-3757371',
      uri: 'https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg',
    },
    {
      id: 'pexels-2294403',
      uri: 'https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg',
    },
    {
      id: 'pexels-1552249',
      uri: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
    },
    {
      id: 'pexels-3764012',
      uri: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg',
    },
  ];
  // const swipeRef = useRef<CarouselRef>(null);
  const swipeRef = useRef<any>(null);
  const activeIndex = page % images.length;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => setIsAutoPlay(false), // stop autoplay when user touches
      }),
    [],
  );

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
      <View {...panResponder.panHandlers}>
        <Carousel
          ref={swipeRef}
          loop
          autoPlay={isAutoPlay}
          width={width - 40}
          height={200}
          data={images}
          scrollAnimationDuration={0}
          onSnapToItem={(index: number) => setPage(index)}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.uri }}
              style={{ width: width - 40, height: 200, borderRadius: 16 }}
            />
          )}
        />
      </View>

      {/* Dot Indicators */}
      <View className="mt-3 flex-row justify-center space-x-2">
        {images.map((img, idx) => (
          <View
            key={img.id}
            style={{
              width: activeIndex === idx ? 10 : 8,
              height: activeIndex === idx ? 10 : 8,
              borderRadius: 10,
              backgroundColor: activeIndex === idx ? '#3B82F6' : '#9CA3AF',
            }}
          />
        ))}
      </View>

      <StepperExample />
    </View>
  );
}
