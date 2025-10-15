/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * NOTE: For dev only.
 * Put your key in .env as EXPO_PUBLIC_GEMINI_API_KEY for quick testing.
 * For production, call a secure backend that holds the key.
 */
const GEMINI_API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY ?? '';

export default function ExerciseDetail() {
  const params = useLocalSearchParams();
  const exercise = (params.exercise as string) ?? 'exercise';
  const level = (params.level as string) ?? 'beginner';

  const [aiText, setAiText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Optional: preload image URL
  const imageUri = `https://source.unsplash.com/800x450/?${encodeURIComponent(
    exercise,
  )}`;

  // Build a helpful prompt — you can tune or localize this
  function buildPrompt(exerciseName: string, levelName: string) {
    return `You are a professional gym trainer. Provide a clear, concise guide for the exercise "${exerciseName}" for a ${levelName} level user.
- Give correct form & posture (step by step).
- List suggested sets/reps and a simple progression.
- Mention common mistakes and safety tips.
- Include a short motivational tip at the end.
Return the answer as plain text with newlines (no markdown).`;
  }

  const generateGuidance = async () => {
    if (!GEMINI_API_KEY) {
      Alert.alert(
        'Missing API Key',
        'Gemini API key not found. For development set EXPO_PUBLIC_GEMINI_API_KEY in your .env (not for production).',
      );
      return;
    }

    setLoading(true);
    setAiText(null);

    try {
      // Chat-style request to Gemini / Generative Language API
      // Endpoint used: /v1beta/chat/completions (widely shown in docs)
      // If your account requires x-goog-api-key, add that header instead (or both).
      const endpoint =
        'https://generativelanguage.googleapis.com/v1beta/chat/completions';

      const prompt = buildPrompt(exercise, level);

      const body = {
        model: 'gemini-flash-latest', // choose model you have access to
        // single-turn chat messages
        messages: [
          { role: 'system', content: 'You are a helpful fitness coach.' },
          { role: 'user', content: prompt },
        ],
        // tune length/creativity if needed:
        temperature: 0.2,
      };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Many docs show using either Authorization Bearer or x-goog-api-key.
          // If one fails, try the other. For API key auth:
          Authorization: `Bearer ${GEMINI_API_KEY}`,
          // 'x-goog-api-key': GEMINI_API_KEY,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        throw new Error(`AI request failed: ${res.status}`);
      }

      const json = await res.json();
      // response shape varies; many examples place text under
      // json.choices[0].message.content or json.choices[0].message
      // The Generative API may return candidates or content fields.
      // We'll attempt several common locations:
      let text = '';

      // OpenAI-compatible style (some Google endpoints emulate this)
      if (json?.choices?.[0]?.message?.content) {
        text = Array.isArray(json.choices[0].message.content)
          ? json.choices[0].message.content
              .map((c: any) => c.text || '')
              .join('')
          : json.choices[0].message.content;
      }

      // Some Gemini responses include 'candidates' or 'response' fields
      if (!text && json?.candidates?.[0]?.content) {
        text = json.candidates[0].content;
      }
      if (!text && json?.response) {
        // e.g. result.response.text or similar
        if (typeof json.response === 'string') text = json.response;
        else if (json.response?.candidates?.[0]?.content)
          text = json.response.candidates[0].content;
      }

      // fallback: stringify whole JSON (for debugging)
      if (!text) text = JSON.stringify(json, null, 2);

      setAiText(text);
    } catch (err: any) {
      Alert.alert('AI error', err?.message ?? 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <Text className="mb-4 text-2xl font-bold capitalize text-white">
        {exercise}
      </Text>

      <Image
        source={{ uri: imageUri }}
        className="mb-4 h-64 w-full rounded-lg"
        resizeMode="cover"
      />

      {/* Generate button */}
      <View className="mb-4">
        <TouchableOpacity
          onPress={generateGuidance}
          disabled={loading}
          className="items-center rounded-lg bg-blue-600 p-3"
        >
          {loading ? (
            <View className="flex-row items-center space-x-2">
              <ActivityIndicator color="#fff" />
              <Text className="ml-2 font-semibold text-white">
                Generating guidance...
              </Text>
            </View>
          ) : (
            <Text className="font-semibold text-white">
              Generate Guidance (AI)
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {/* AI output */}
      {aiText ? (
        <View className="mb-12 rounded-lg bg-gray-800 p-4">
          <Text className="whitespace-pre-line text-white">{aiText}</Text>
        </View>
      ) : (
        <Text className="text-gray-400">
          Tap “Generate Guidance (AI)” to get tips.
        </Text>
      )}
    </ScrollView>
  );
}
