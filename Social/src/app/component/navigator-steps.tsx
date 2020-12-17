import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#7dfbb0',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#7dfbb0',
  stepStrokeUnFinishedColor: '#7dfbb0',
  separatorFinishedColor: '#7dfbb0',
  separatorUnFinishedColor: '#7dfbb0',
  stepIndicatorFinishedColor: 'white',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#7dfbb0',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#30626a',
  currentStepLabelColor: '#30626a'
};

function NavigatorSteps(props) {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    if(props && props.step) {
      setCount(props.step);
    }
  }, [props]);

  return (
    <View style={{ 
        width: '100%', 
        display: 'flex',
        justifyContent: 'center' 
      }}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={count}
        stepCount={5}
      />
    </View>
  );
}

export default NavigatorSteps;