import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FluidBlobLogo from '../components/FluidBlobLogo';

export default function LoadingScreen() {
  return (
    <LinearGradient
      colors={['#F9FAFB', '#FFFFFF']}
      style={styles.container}
    >
      <View style={styles.content}>
        <FluidBlobLogo size={120} iconSize={60} />
        <ActivityIndicator 
          size="large" 
          color="#8B5CF6" 
          style={styles.loader}
        />
        <Text style={styles.text}>Chargement...</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  loader: {
    marginTop: 30,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
});