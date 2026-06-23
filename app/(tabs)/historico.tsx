import Octicons from '@expo/vector-icons/Octicons';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

type Periodo = 'Semana' | 'Mês' | 'Ano';

const performanceSemanal = [
  { dia: 'Seg', concluidas: 8, total: 10, horas: '4.5h', percentual: 80 },
  { dia: 'Ter', concluidas: 12, total: 14, horas: '6h', percentual: 86 },
  { dia: 'Qua', concluidas: 10, total: 12, horas: '5.5h', percentual: 83 },
  { dia: 'Qui', concluidas: 15, total: 16, horas: '7h', percentual: 94 },
  { dia: 'Sex', concluidas: 9, total: 11, horas: '4h', percentual: 82 },
  { dia: 'Sáb', concluidas: 5, total: 6, horas: '3h', percentual: 83 },
  { dia: 'Dom', concluidas: 3, total: 4, horas: '2h', percentual: 75 },
];

const conquistas = [
  {
    id: '1',
    icone: '🏆',
    cor: '#F59E0B',
    titulo: 'Mestre da Produtividade',
    descricao: 'Completou 100 tarefas em um mês',
    data: '10 Mai 2026',
  },
  {
    id: '2',
    icone: '🎯',
    cor: '#8B5CF6',
    titulo: 'Foco Total',
    descricao: '50 horas de Deep Work acumuladas',
    data: '08 Mai 2026',
  },
  {
    id: '3',
    icone: '🔥',
    cor: '#F59E0B',
    titulo: 'Sequência de Ouro',
    descricao: '10 dias consecutivos completando todas as tarefas',
    data: '05 Mai 2026',
  },
  {
    id: '4',
    icone: '⚡',
    cor: '#1A5CE5',
    titulo: 'Relâmpago',
    descricao: 'Completou 20 tarefas em um único dia',
    data: '01 Mai 2026',
  },
];

export default function Historico() {
  const [periodo, setPeriodo] = useState<Periodo>('Semana');

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F5FA' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>

        {/* Header */}
        <View style={{ paddingHorizontal: 16, paddingTop: 50, paddingBottom: 16 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1a1a1a' }}>Histórico</Text>
          <Text style={{ color: '#666', fontSize: 13 }}>Acompanhe sua evolução</Text>
        </View>

        <View style={{ paddingHorizontal: 16, gap: 16 }}>

          {/* Filtro Semana/Mês/Ano */}
          <View style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 12, padding: 4 }}>
            {(['Semana', 'Mês', 'Ano'] as Periodo[]).map(p => (
              <TouchableOpacity
                key={p}
                onPress={() => setPeriodo(p)}
                style={{
                  flex: 1,
                  paddingVertical: 8,
                  borderRadius: 10,
                  backgroundColor: periodo === p ? '#1A5CE5' : 'transparent',
                  alignItems: 'center',
                }}
              >
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: periodo === p ? '#fff' : '#666',
                }}>
                  {p}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Cards de métricas */}
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
              <Octicons name="check-circle" size={20} color="#10B981" />
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#1a1a1a', marginTop: 8 }}>62</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Tarefas Concluídas</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <Octicons name="graph" size={12} color="#10B981" />
                <Text style={{ color: '#10B981', fontSize: 12 }}>+23%</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
              <Octicons name="clock" size={20} color="#1A5CE5" />
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#1a1a1a', marginTop: 8 }}>32h</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Horas de Foco</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <Octicons name="graph" size={12} color="#10B981" />
                <Text style={{ color: '#10B981', fontSize: 12 }}>+12%</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
              <Octicons name="flame" size={20} color="#F59E0B" />
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#1a1a1a', marginTop: 8 }}>7 dias</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Sequência Atual</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <Octicons name="graph" size={12} color="#10B981" />
                <Text style={{ color: '#F59E0B', fontSize: 12 }}>Recorde!</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
              <Octicons name="goal" size={20} color="#8B5CF6" />
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#1a1a1a', marginTop: 8 }}>89%</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Taxa de Conclusão</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                <Octicons name="graph" size={12} color="#10B981" />
                <Text style={{ color: '#10B981', fontSize: 12 }}>+5%</Text>
              </View>
            </View>
          </View>

          {/* Performance Semanal */}
          <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Performance Semanal</Text>
              <View style={{ backgroundColor: '#EFF6FF', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4 }}>
                <Text style={{ color: '#1A5CE5', fontSize: 12, fontWeight: 'bold' }}>Tarefas Concluídas</Text>
              </View>
            </View>

            {performanceSemanal.map((item, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                  <Text style={{ fontSize: 13, color: '#666', width: 32 }}>{item.dia}</Text>
                  <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 8 }}>
                    <View style={{ backgroundColor: '#F0F5FA', borderRadius: 4, height: 8 }}>
                      <View style={{
                        backgroundColor: '#1A5CE5',
                        borderRadius: 4,
                        height: 8,
                        width: `${item.percentual}%`,
                      }} />
                    </View>
                  </View>
                  <Text style={{ fontSize: 12, color: '#1A5CE5', fontWeight: 'bold', width: 32 }}>
                    {item.percentual}%
                  </Text>
                  <Text style={{ fontSize: 12, color: '#999', width: 44, textAlign: 'right' }}>
                    {item.concluidas}/{item.total}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#999', width: 36, textAlign: 'right' }}>
                    {item.horas}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Conquistas Recentes */}
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Conquistas Recentes</Text>
              <TouchableOpacity>
                <Text style={{ color: '#1A5CE5', fontSize: 13 }}>Ver todas</Text>
              </TouchableOpacity>
            </View>

            {conquistas.map(item => (
              <View key={item.id} style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 16,
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12,
              }}>
                <View style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: item.cor + '20',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{ fontSize: 20 }}>{item.icone}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14, color: item.cor }}>{item.titulo}</Text>
                  <Text style={{ color: '#666', fontSize: 12 }}>{item.descricao}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                    <Octicons name="calendar" size={11} color="#999" />
                    <Text style={{ color: '#999', fontSize: 11 }}>{item.data}</Text>
                  </View>
                </View>
              </View>
            ))}

          </View>

          {/* Card Análise de Performance IA */}
          <View style={{ backgroundColor: '#EFF6FF', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Octicons name="sparkle-fill" size={16} color="#1A5CE5" />
              <Text style={{ fontWeight: 'bold', color: '#1A5CE5', fontSize: 14 }}>Análise de Performance</Text>
            </View>
            <Text style={{ color: '#333', fontSize: 13, lineHeight: 20 }}>
              Você está 23% mais produtivo esta semana! Sua taxa de conclusão de tarefas aumentou significativamente nas manhãs. Continue mantendo esse ritmo.
            </Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}