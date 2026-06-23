import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import { Link, Stack } from 'expo-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from './firebase';
import { styles } from './styles';

export default function ResetSenha() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setEnviado(true);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.IndexView1}>
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <Text style={{ color: "#5C96E3", fontSize: 25, fontWeight: "bold" }}>lightbulb </Text>
            <Text style={{ color: "#1E62D0", fontSize: 25, fontWeight: "bold" }}>Produtividade</Text>
          </View>
        </View>
        <View style={styles.IndexView2}>
          <Text style={styles.TextoDestacado}>Recuperar Senha</Text>
          <Text style={{ marginTop: 10, marginBottom: 25, fontSize: 15 }}>
            Não se preocupe! Insira o seu e-mail cadastrado abaixo e
            enviaremos um link de redefinição de senha para você.
          </Text>
          <Text style={styles.label}>Email Corporativo</Text>
          <View style={styles.inputContainer}>
            <Octicons name='mail' size={18} color="#999"/>
            <TextInput
              style={styles.input}
              placeholder="nome@empresa.com"
              placeholderTextColor="#999"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <TouchableOpacity
            style={[styles.botaoContainer, enviado && { backgroundColor: "#22c55e" }]}
            onPress={handleEnviar}
            disabled={enviado}
          >
            <Text style={styles.botaoTexto}>
              {enviado ? "✓ Link Enviado!" : "Enviar Link"}
            </Text>
          </TouchableOpacity>
          {enviado && (
            <Text style={{ textAlign: "center", marginTop: 12, color: "#22c55e", fontSize: 14 }}>
              Verifique sua caixa de entrada.
            </Text>
          )}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16 }}>
            <FontAwesome5 name="arrow-left" size={16} color="#1a56db" />
            <Link href="/" style={{ color: "#1a56db" }}>Voltar para o login</Link>
          </View>
        </View>
      </View>
    </>
  );
}