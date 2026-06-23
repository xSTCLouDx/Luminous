import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const verificar = async () => {
      // Aguarda o router estar pronto
      await new Promise(resolve => setTimeout(resolve, 100));

      const visto = await AsyncStorage.getItem('onboarding_visto');

      // Só redireciona ao onboarding se o usuário NUNCA passou por ele.
      // Se passou e pulou as permissões, segue normalmente para o login.
      if (!visto) {
        router.replace('/onboarding');
      }
    };

    verificar();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="cadastro" />
      <Stack.Screen name="reset-senha" />
    </Stack>
  );
}
