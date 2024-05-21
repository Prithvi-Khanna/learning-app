import React from 'react';
import {View, Animated} from 'react-native';
import styles from './styles';

type PropsType = {
  progress: number;
};

const LinearProgressBar = ({progress}: PropsType) => {
  const animatedValue = new Animated.Value(progress);

  const width = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progressBar, {width}]} />
    </View>
  );
};

export default LinearProgressBar;
