import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '../context/AuthContext';
import LoadingScreen from './loading';

function RootNavigator() {
  const { isLoading } = useAuth();

  // Afficher loading pendant la vérification
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="courses" />
      <Stack.Screen name="loading" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}