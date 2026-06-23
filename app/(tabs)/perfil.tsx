import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../firebase';

const metricas = [
  { icone: '🎯', valor: '1,247', label: 'Tarefas Totais' },
  { icone: '🕐', valor: '342h', label: 'Horas de Foco' },
  { icone: '🔥', valor: '28 dias', label: 'Sequência Recorde' },
  { icone: '🏆', valor: '24', label: 'Conquistas' },
];

const opcoes = [
  { icone: 'bell', label: 'Notificações', descricao: 'Gerencie suas preferências' },
  { icone: 'goal', label: 'Metas e Objetivos', descricao: 'Configure suas metas diárias' },
  { icone: 'shield-lock', label: 'Privacidade e Segurança', descricao: 'Proteja sua conta' },
  { icone: 'question', label: 'Ajuda e Suporte', descricao: 'Central de ajuda' },
  { icone: 'globe', label: 'Idioma', descricao: '🇧🇷 Português (Brasil)' },
];

export default function Perfil() {
  const router = useRouter();

  const handleSair = async () => {
    Alert.alert(
      'Sair da Conta',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            await signOut(auth);
            router.replace('/');
          }
        }
      ]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F5FA' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Header azul */}
        <View style={{ backgroundColor: '#1A5CE5', paddingTop: 50, paddingHorizontal: 16, paddingBottom: 80 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>Perfil</Text>
            <TouchableOpacity style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: '#ffffff20',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Octicons name="gear" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: -60, gap: 16 }}>

          {/* Card do usuário */}
          <View style={{ backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 }}>

              {/* Avatar */}
              <View style={{ position: 'relative' }}>
                <View style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: '#8B5CF6',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 22 }}>JM</Text>
                </View>
                <TouchableOpacity style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  backgroundColor: '#1A5CE5',
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Octicons name="pencil" size={10} color="#fff" />
                </TouchableOpacity>
              </View>

              {/* Nome e cargo */}
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#1a1a1a' }}>João Martins</Text>
                  <View style={{ backgroundColor: '#1A5CE5', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 }}>
                    <Text style={{ color: '#fff', fontSize: 11, fontWeight: 'bold' }}>Pro</Text>
                  </View>
                </View>
                <Text style={{ color: '#666', fontSize: 13 }}>Desenvolvedor Full Stack | Entusiasta de Produtividade</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                  <Octicons name="sparkle-fill" size={12} color="#F59E0B" />
                  <Text style={{ color: '#F59E0B', fontSize: 12, fontWeight: 'bold' }}>Nível 12 • Produtivo Elite</Text>
                </View>
              </View>
            </View>

            {/* Barra de progresso */}
            <View style={{ marginBottom: 4 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
                <Text style={{ fontSize: 13, color: '#666' }}>Progresso para Nível 13</Text>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#1A5CE5' }}>78%</Text>
              </View>
              <View style={{ backgroundColor: '#F0F5FA', borderRadius: 6, height: 8 }}>
                <View style={{ backgroundColor: '#1A5CE5', borderRadius: 6, height: 8, width: '78%' }} />
              </View>
              <Text style={{ color: '#999', fontSize: 11, marginTop: 4 }}>
                Mais 550 XP necessários para o próximo nível
              </Text>
            </View>
          </View>

          {/* Métricas */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {metricas.map((item, index) => (
              <View key={index} style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 16,
                width: '47%',
                alignItems: 'center',
              }}>
                <Text style={{ fontSize: 24, marginBottom: 4 }}>{item.icone}</Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1a1a1a' }}>{item.valor}</Text>
                <Text style={{ color: '#666', fontSize: 12 }}>{item.label}</Text>
              </View>
            ))}
          </View>

          {/* Assistente IA */}
          <TouchableOpacity
            style={{
              backgroundColor: '#8B5CF6',
              borderRadius: 16,
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            onPress={() => router.push('/(tabs)/assistente')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Octicons name="sparkle-fill" size={20} color="#fff" />
              <View>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Assistente IA</Text>
                <Text style={{ color: '#ffffff80', fontSize: 12 }}>Seu copiloto de produtividade</Text>
              </View>
            </View>
            <Octicons name="chevron-right" size={18} color="#fff" />
          </TouchableOpacity>

          {/* Opções */}
          <View style={{ backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden' }}>
            {opcoes.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 16,
                  borderBottomWidth: index < opcoes.length - 1 ? 1 : 0,
                  borderBottomColor: '#F0F5FA',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                  <Octicons name={item.icone as any} size={18} color="#666" />
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1a1a1a' }}>{item.label}</Text>
                    <Text style={{ fontSize: 12, color: '#999' }}>{item.descricao}</Text>
                  </View>
                </View>
                <Octicons name="chevron-right" size={16} color="#999" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Botão Sair */}
          <TouchableOpacity
            onPress={handleSair}
            style={{
              backgroundColor: '#FFF0F0',
              borderRadius: 16,
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              borderWidth: 1,
              borderColor: '#FFCDD2',
            }}
          >
            <Octicons name="sign-out" size={18} color="#EF4444" />
            <Text style={{ color: '#EF4444', fontWeight: 'bold', fontSize: 15 }}>Sair da Conta</Text>
          </TouchableOpacity>

          {/* Rodapé */}
          <Text style={{ textAlign: 'center', color: '#999', fontSize: 12 }}>
            Luminous Productivity v2.1.0{'\n'}© 2024 Todos os direitos reservados
          </Text>

        </View>
      </ScrollView>
    </View>
  );
}