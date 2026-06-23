import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const diasSemana = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const diaAtual = 4; // quarta-feira

const conquistas = [
  {
    id: '1',
    icone: '🎯',
    titulo: 'Sequência de 5 Dias',
    descricao: 'Consistência é a chave para a maestria',
    cor: '#EFF6FF',
  },
  {
    id: '2',
    icone: '🏆',
    titulo: 'Meta Alcançada: Deep Work',
    descricao: '15 horas de concentração focada est...',
    cor: '#F5F3FF',
  },
  {
    id: '3',
    icone: '⚡',
    titulo: 'Mestre das Tarefas',
    descricao: 'Você completou todas as tarefas diár...',
    cor: '#FFFBEB',
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F5FA' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>

        {/* Header */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingTop: 50,
          paddingBottom: 16,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{
              backgroundColor: '#1A5CE5',
              width: 42,
              height: 42,
              borderRadius: 21,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>P</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1A5CE5' }}>Produtividade</Text>
          </View>
          <TouchableOpacity>
            <Octicons name="bell" size={24} color="#1A5CE5" />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 16, gap: 16 }}>

          {/* Card Resumo Semanal */}
          <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Resumo Semanal</Text>
              <View style={{ backgroundColor: '#1A5CE5', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 }}>
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>Esta Semana</Text>
              </View>
            </View>
            <Text style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>
              Suas tarefas estão crescendo 12%
            </Text>

            {/* Dias da semana */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {diasSemana.map((dia, index) => (
                <View key={index} style={{ alignItems: 'center', gap: 4 }}>
                  <Text style={{ fontSize: 12, color: '#999' }}>{dia}</Text>
                  <View style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    backgroundColor: index + 1 === diaAtual ? '#1A5CE5' : '#F0F5FA',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{
                      fontWeight: 'bold',
                      fontSize: 13,
                      color: index + 1 === diaAtual ? '#fff' : '#333',
                    }}>
                      {index + 1}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Card Pontuação de Foco */}
          <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 4 }}>Pontuação de Foco</Text>
                <Text style={{ color: '#666', fontSize: 13 }}>Status de elite mantido.</Text>
              </View>

              {/* Círculo de progresso */}
              <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                borderWidth: 6,
                borderColor: '#1A5CE5',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#1A5CE5' }}>92%</Text>
              </View>
            </View>
          </View>

          {/* Card IA Insight */}
          <View style={{ backgroundColor: '#1A5CE5', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Octicons name="sparkle-fill" size={18} color="#fff" />
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>IA Insight</Text>
            </View>
            <Text style={{ color: '#fff', fontSize: 13, lineHeight: 20 }}>
              Sua produtividade atinge o pico entre 09:00 e 11:00. Tente agendar suas tarefas de "Deep Work" neste período para maximizar seus resultados.
            </Text>
          </View>

          {/* Conquistas Recentes */}
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Conquistas Recentes</Text>
              <TouchableOpacity>
                <Text style={{ color: '#1A5CE5', fontSize: 13 }}>Ver tudo</Text>
              </TouchableOpacity>
            </View>

            {conquistas.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 16,
                  padding: 16,
                  marginBottom: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
                  <View style={{
                    backgroundColor: item.cor,
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{ fontSize: 20 }}>{item.icone}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.titulo}</Text>
                    <Text style={{ color: '#666', fontSize: 12 }}>{item.descricao}</Text>
                  </View>
                </View>
                <Octicons name="chevron-right" size={16} color="#999" />
              </TouchableOpacity>
            ))}
          </View>

        </View>
      </ScrollView>
    </View>
  );
}