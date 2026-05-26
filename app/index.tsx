import Octicons from '@expo/vector-icons/Octicons';
import { Link, Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { supabase } from './supabase';

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else router.push('/(tabs)');
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      {/* View principal */}
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.IndexView1}>
          <View style={styles.IconeIndex}>
            <Octicons name="light-bulb" size={24} color="#ffffff" />
          </View>
          <View>
            <Text style={styles.IndexText1}>Luminous</Text>
          </View>
        </View>

        {/* Card branco do formulário */}
        <View style={styles.IndexView2}>

          {/* Título */}
          <Text style={styles.TextoDestacado}>Bem-vindo de volta</Text>

          {/* Subtítulo */}
          <Text style={{ marginTop: 10, marginBottom: 25, fontSize: 15 }}>
            Insira seus dados para acessar sua conta.
          </Text>

          {/* Campo Email */}
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

          {/* Linha Senha + Esqueci minha senha */}
          <View style={styles.senha}>
            <Text style={styles.label}>Senha</Text>
            <Text style={styles.forgot}>
              <Link href="/reset-senha">Esqueci minha senha</Link>
            </Text>
          </View>

          {/* Campo Senha */}
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

          {/* Botão Entrar */}
          <TouchableOpacity style={styles.botaoContainer} onPress={handleLogin}>
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>

          {/* Divisor */}
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 16 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
            <Text style={{ marginHorizontal: 12, color: "#999", fontSize: 13 }}>OU CONTINUE COM</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
          </View>

          {/* Botões Google e Apple */}
          <View style={styles.oucom}>
            <View style={styles.oucom2}>
              <Image
                source={require("../assets/images/google-icon.png")}
                style={styles.icon}
                alt="Google"
              />
              <Text>Google</Text>
            </View>
            <View style={styles.oucom2}>
              <Image
                source={require("../assets/images/apple-icon.png")}
                style={styles.icon}
                alt="Apple"
              />
              <Text>Apple</Text>
            </View>
          </View>

          {/* Rodapé */}
          <Text style={{ textAlign: "center", marginTop: 16, color: "#333" }}>
            Ainda não tem uma conta?{" "}
            <Link href="/cadastro" style={{ color: "#1a56db" }}>Cadastre-se</Link>
          </Text>

        </View>

      </View>
    </>
  );
}