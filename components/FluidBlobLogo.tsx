import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface FluidBlobLogoProps {
  size?: number;
  iconSize?: number;
}

export default function FluidBlobLogo({ 
  size = 120, 
  iconSize = 60 
}: FluidBlobLogoProps) {
  // Valeurs animées pour créer l'effet blob
  const morphAnim1 = useRef(new Animated.Value(0)).current;
  const morphAnim2 = useRef(new Animated.Value(0)).current;
  const morphAnim3 = useRef(new Animated.Value(0)).current;
  const morphAnim4 = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation de morphing 1 (haut-bas)
    const morph1 = Animated.loop(
      Animated.sequence([
        Animated.timing(morphAnim1, {
          toValue: 1,
          duration: 3000,
          easing: Easing.bezier(0.45, 0.05, 0.55, 0.95),
          useNativeDriver: true,
        }),
        Animated.timing(morphAnim1, {
          toValue: 0,
          duration: 3000,
          easing: Easing.bezier(0.45, 0.05, 0.55, 0.95),
          useNativeDriver: true,
        }),
      ])
    );

    // Animation de morphing 2 (gauche-droite) - décalée
    const morph2 = Animated.loop(
      Animated.sequence([
        Animated.timing(morphAnim2, {
          toValue: 1,
          duration: 4000,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          useNativeDriver: true,
        }),
        Animated.timing(morphAnim2, {
          toValue: 0,
          duration: 4000,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          useNativeDriver: true,
        }),
      ])
    );

    // Animation de morphing 3 (diagonale)
    const morph3 = Animated.loop(
      Animated.sequence([
        Animated.timing(morphAnim3, {
          toValue: 1,
          duration: 5000,
          easing: Easing.bezier(0.65, 0, 0.35, 1),
          useNativeDriver: true,
        }),
        Animated.timing(morphAnim3, {
          toValue: 0,
          duration: 5000,
          easing: Easing.bezier(0.65, 0, 0.35, 1),
          useNativeDriver: true,
        }),
      ])
    );

    // Animation de morphing 4 (scale pulsation)
    const morph4 = Animated.loop(
      Animated.sequence([
        Animated.timing(morphAnim4, {
          toValue: 1,
          duration: 3500,
          easing: Easing.bezier(0.4, 0, 0.6, 1),
          useNativeDriver: true,
        }),
        Animated.timing(morphAnim4, {
          toValue: 0,
          duration: 3500,
          easing: Easing.bezier(0.4, 0, 0.6, 1),
          useNativeDriver: true,
        }),
      ])
    );

    // Rotation lente pour le gradient
    const rotate = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    // Démarrer toutes les animations
    morph1.start();
    morph2.start();
    morph3.start();
    morph4.start();
    rotate.start();

    return () => {
      morph1.stop();
      morph2.stop();
      morph3.stop();
      morph4.stop();
      rotate.stop();
    };
  }, []);

  // Interpolations pour créer l'effet blob organique
  const scale1 = morphAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.15],
  });

  const translateX1 = morphAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const translateY1 = morphAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -8],
  });

  const scale2 = morphAnim3.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.12],
  });

  const translateX2 = morphAnim3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -12],
  });

  const scale3 = morphAnim4.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.08],
  });

  const translateY2 = morphAnim4.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const skewX = morphAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '5deg'],
  });

  const skewY = morphAnim3.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-3deg'],
  });

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Blob layer 1 */}
      <Animated.View
        style={[
          styles.blobLayer,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            transform: [
              { rotate },
              { scaleX: scale1 },
              { scaleY: scale2 },
              { translateX: translateX1 },
              { translateY: translateY1 },
              { skewX },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={['#8B5CF6', '#6366F1', '#3B82F6', '#8B5CF6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradient, { borderRadius: size / 2 }]}
        />
      </Animated.View>

      {/* Blob layer 2 (légèrement plus petit, effet de profondeur) */}
      <Animated.View
        style={[
          styles.blobLayer,
          {
            width: size * 0.9,
            height: size * 0.9,
            borderRadius: size / 2,
            opacity: 0.6,
            transform: [
              { rotate },
              { scaleX: scale2 },
              { scaleY: scale3 },
              { translateX: translateX2 },
              { translateY: translateY2 },
              { skewY },
            ],
          },
        ]}
      >
        <LinearGradient
          colors={['#6366F1', '#3B82F6', '#8B5CF6', '#6366F1']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={[styles.gradient, { borderRadius: size / 2 }]}
        />
      </Animated.View>

      {/* Cercle intérieur blanc avec l'icône */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  blobLayer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  innerCircle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});