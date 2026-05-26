import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import { supabase } from './supabase';

export default function ResetSenha() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) alert(error.message);
    else setEnviado(true);
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      {/* View principal */}
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.IndexView1}>
          <View style={{ flexDirection: "row", marginTop: 40 }}>
            <Text style={{ color: "#5C96E3", fontSize: 25, fontWeight: "bold" }}>lightbulb </Text>
            <Text style={{ color: "#1E62D0", fontSize: 25, fontWeight: "bold" }}>Produtividade</Text>
          </View>
        </View>

        {/* Card branco */}
        <View style={styles.IndexView2}>

          {/* Título */}
          <Text style={styles.TextoDestacado}>Recuperar Senha</Text>

          {/* Subtítulo */}
          <Text style={{ marginTop: 10, marginBottom: 25, fontSize: 15 }}>
            Não se preocupe! Insira o seu e-mail cadastrado abaixo e
            enviaremos um link de redefinição de senha para você.
          </Text>

          {/* Campo Email */}
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

          {/* Botão Enviar — fica verde após enviar */}
          <TouchableOpacity
            style={[styles.botaoContainer, enviado && { backgroundColor: "#22c55e" }]}
            onPress={handleEnviar}
            disabled={enviado}
          >
            <Text style={styles.botaoTexto}>
              {enviado ? "✓ Link Enviado!" : "Enviar Link"}
            </Text>
          </TouchableOpacity>

          {/* Mensagem de confirmação */}
          {enviado && (
            <Text style={{ textAlign: "center", marginTop: 12, color: "#22c55e", fontSize: 14 }}>
              Verifique sua caixa de entrada.
            </Text>
          )}

          {/* Voltar ao login */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16 }}>
            <FontAwesome5 name="arrow-left" size={16} color="#1a56db" />
            <Link href="/" style={{ color: "#1a56db" }}>Voltar para o login</Link>
          </View>

        </View>

      </View>
    </>
  );
}