import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { Link, Stack, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from './firebase';
import { styles } from './styles';

export default function Cadastro() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // salva o nome do usuário no perfil
      await updateProfile(userCredential.user, { displayName: name });
      router.push('/');
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
          <Text style={styles.TextoDestacado}>Criar conta</Text>
          <Text style={{ marginTop: 10, marginBottom: 25, fontSize: 15 }}>
            Comece sua jornada de produtividade hoje.
          </Text>
          <Text style={styles.label}>Nome Completo</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={18} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Ex: Joao Silva"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          </View>
          <Text style={styles.label}>Email Profissional</Text>
          <View style={styles.inputContainer}>
            <Octicons name='mail' size={18} color="#999"/>
            <TextInput
              style={styles.input}
              placeholder="seu@email.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.inputContainer}>
            <Octicons name="lock" size={18} color="#999" />
            <TextInput
              style={styles.input}
              placeholder="Mínimo 8 caracteres"
              placeholderTextColor="#999"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <Octicons name="eye" size={18} color="#999" />
          </View>
          <TouchableOpacity style={styles.botaoContainer} onPress={handleCadastro}>
            <Text style={styles.botaoTexto}>CADASTRAR</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 16 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
            <Text style={{ marginHorizontal: 12, color: "#999", fontSize: 13 }}>OU CADASTRE COM</Text>
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
            Já tem uma conta?{" "}
            <Link href="/" style={{ color: "#1a56db" }}>Entrar</Link>
          </Text>
        </View>
      </View>
    </>
  );
}