import Octicons from '@expo/vector-icons/Octicons';
import { Link, Stack, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from './firebase';
import { styles } from './styles';

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/(tabs)/home');
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.IndexView1}>
          <View style={styles.IconeIndex}>
            <Octicons name="light-bulb" size={24} color="#ffffff" />
          </View>
          <View>
            <Text style={styles.IndexText1}>Luminous</Text>
          </View>
        </View>
        <View style={styles.IndexView2}>
          <Text style={styles.TextoDestacado}>Bem-vindo de volta</Text>
          <Text style={{ marginTop: 10, marginBottom: 25, fontSize: 15 }}>
            Insira seus dados para acessar sua conta.
          </Text>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputContainer}>
            <Octicons name='mail' size={18} color="#999"/>
            <TextInput
              style={styles.input}
              placeholder="nome@exemplo.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.senha}>
            <Text style={styles.label}>Senha</Text>
            <Text style={styles.forgot}>
              <Link href="/reset-senha">Esqueci minha senha</Link>
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Octicons name="lock" size={18} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#999"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <Octicons name="eye" size={18} color="#999" />
          </View>
          <TouchableOpacity style={styles.botaoContainer} onPress={handleLogin}>
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 16 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
            <Text style={{ marginHorizontal: 12, color: "#999", fontSize: 13 }}>OU CONTINUE COM</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
          </View>
          <View style={styles.oucom}>
            <View style={styles.oucom2}>
              <Image source={require("../assets/images/google-icon.png")} style={styles.icon} alt="Google" />
              <Text>Google</Text>
            </View>
            <View style={styles.oucom2}>
              <Image source={require("../assets/images/apple-icon.png")} style={styles.icon} alt="Apple" />
              <Text>Apple</Text>
            </View>
          </View>
          <Text style={{ textAlign: "center", marginTop: 16, color: "#333" }}>
            Ainda não tem uma conta?{" "}
            <Link href="/cadastro" style={{ color: "#1a56db" }}>Cadastre-se</Link>
          </Text>
        </View>
      </View>
    </>
  );
}