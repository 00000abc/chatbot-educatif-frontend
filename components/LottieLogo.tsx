import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, ViewStyle, StyleProp, Platform } from 'react-native';
import LottieView from 'lottie-react-native';

interface LottieLogoProps {
  size?: number;
  style?: StyleProp<ViewStyle>;
  loop?: boolean;
  autoPlay?: boolean;
}

export default function LottieLogo({
  size = 100,
  style,
  loop = true,
  autoPlay = true,
}: LottieLogoProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    if (autoPlay) {
      animationRef.current?.play();
    }
  }, [autoPlay]);

  return (
    <View style={[styles.container, { width: size, height: size }, style]}>
      <LottieView
        ref={animationRef}
        source={require('../assets/animations/fluid-logo.json')}
        style={StyleSheet.absoluteFill}
        loop={loop}
        autoPlay={autoPlay}
        resizeMode="cover"
        // Amélioration web : désactive le contrôle gesture (optionnel)
        enableMergePathsAndroidForKitKatAndAbove
        hardwareAccelerationAndroid
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999, // cercle parfait
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
});