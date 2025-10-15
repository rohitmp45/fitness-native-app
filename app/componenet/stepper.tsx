import type React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

// Define the type for our step labels
const labels: string[] = ['Step 1', 'Step 2', 'Step 3'];

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 35,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#4aae4f',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#4aae4f',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#4aae4f',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
};

const StepperExample: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  const handleNext = () => {
    if (currentPosition < labels.length - 1) {
      setCurrentPosition(currentPosition + 1);
    } else {
      alert('All steps completed!');
    }
  };

  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={labels.length}
      />

      <View style={styles.content}>
        {currentPosition === 0 && <Text>Step 1 Content</Text>}
        {currentPosition === 1 && <Text>Step 2 Content</Text>}
        {currentPosition === 2 && <Text>Step 3 Content</Text>}

        <Button
          title={currentPosition < labels.length - 1 ? 'Next' : 'Finish'}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

export default StepperExample;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
