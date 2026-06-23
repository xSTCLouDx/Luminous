import Octicons from '@expo/vector-icons/Octicons';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const tarefasIniciais = [
  {
    id: '1',
    titulo: 'Proposta de orçamento completo',
    descricao: 'Finalizar apresentação para cliente',
    prioridade: 'Alta',
    corPrioridade: '#EF4444',
    data: 'Hoje, 14:00',
    categoria: 'Trabalho',
    concluida: false,
  },
  {
    id: '2',
    titulo: 'Revisar modelos para dispositivos móveis',
    descricao: 'UX/UI review',
    prioridade: 'Média',
    corPrioridade: '#F59E0B',
    data: 'Amanhã',
    categoria: 'Design',
    concluida: false,
  },
  {
    id: '3',
    titulo: 'Reunião core da equipe',
    descricao: 'Sprint planning Q2',
    prioridade: 'Alta',
    corPrioridade: '#EF4444',
    data: 'Hoje, 16:00',
    categoria: 'Reuniões',
    concluida: true,
  },
  {
    id: '4',
    titulo: 'Agenda revisão de feedback da sprint',
    descricao: 'Retrospectiva semanal',
    prioridade: 'Baixa',
    corPrioridade: '#10B981',
    data: 'Sex, 10:00',
    categoria: 'Reuniões',
    concluida: false,
  },
];

type Filtro = 'Todas' | 'Ativas' | 'Concluídas';

export default function Tarefas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const [filtro, setFiltro] = useState<Filtro>('Todas');
  const [busca, setBusca] = useState('');

  const totalConcluidas = tarefas.filter(t => t.concluida).length;

  const tarefasFiltradas = tarefas.filter(t => {
    const matchBusca = t.titulo.toLowerCase().includes(busca.toLowerCase());
    if (filtro === 'Ativas') return !t.concluida && matchBusca;
    if (filtro === 'Concluídas') return t.concluida && matchBusca;
    return matchBusca;
  });

  const toggleConcluida = (id: string) => {
    setTarefas(prev =>
      prev.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t)
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F5FA' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>

        {/* Header */}
        <View style={{ paddingHorizontal: 16, paddingTop: 50, paddingBottom: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1a1a1a' }}>Minhas tarefas</Text>
              <Text style={{ color: '#666', fontSize: 13 }}>{totalConcluidas} de {tarefas.length} concluídas</Text>
            </View>
            <TouchableOpacity>
              <Octicons name="filter" size={22} color="#1A5CE5" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, gap: 12 }}>

          {/* Busca */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 12,
            paddingHorizontal: 12,
            height: 44,
            gap: 8,
          }}>
            <Octicons name="search" size={16} color="#999" />
            <TextInput
              style={{ flex: 1, fontSize: 14, color: '#333' }}
              placeholder="Buscar tarefas..."
              placeholderTextColor="#999"
              value={busca}
              onChangeText={setBusca}
            />
          </View>

          {/* Filtros */}
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {(['Todas', 'Ativas', 'Concluídas'] as Filtro[]).map(f => {
              const count = f === 'Todas'
                ? tarefas.length
                : f === 'Ativas'
                ? tarefas.filter(t => !t.concluida).length
                : tarefas.filter(t => t.concluida).length;

              return (
                <TouchableOpacity
                  key={f}
                  onPress={() => setFiltro(f)}
                  style={{
                    backgroundColor: filtro === f ? '#1A5CE5' : '#fff',
                    borderRadius: 20,
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                  }}
                >
                  <Text style={{
                    color: filtro === f ? '#fff' : '#666',
                    fontWeight: filtro === f ? 'bold' : 'normal',
                    fontSize: 13,
                  }}>
                    {f} ({count})
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Lista de tarefas */}
          {tarefasFiltradas.map(tarefa => (
            <View
              key={tarefa.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 16,
                gap: 8,
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 12 }}>

                {/* Checkbox */}
                <TouchableOpacity
                  onPress={() => toggleConcluida(tarefa.id)}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 11,
                    borderWidth: 2,
                    borderColor: tarefa.concluida ? '#1A5CE5' : '#ddd',
                    backgroundColor: tarefa.concluida ? '#1A5CE5' : '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 2,
                  }}
                >
                  {tarefa.concluida && <Octicons name="check" size={12} color="#fff" />}
                </TouchableOpacity>

                {/* Conteúdo */}
                <View style={{ flex: 1 }}>
                  <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: tarefa.concluida ? '#999' : '#1a1a1a',
                    textDecorationLine: tarefa.concluida ? 'line-through' : 'none',
                  }}>
                    {tarefa.titulo}
                  </Text>
                  <Text style={{ color: '#666', fontSize: 13 }}>{tarefa.descricao}</Text>
                </View>

                {/* Menu */}
                <Octicons name="kebab-horizontal" size={16} color="#999" />
              </View>

              {/* Tags */}
              <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: tarefa.corPrioridade + '20',
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  gap: 4,
                }}>
                  <Octicons name="flag" size={12} color={tarefa.corPrioridade} />
                  <Text style={{ fontSize: 12, color: tarefa.corPrioridade, fontWeight: 'bold' }}>
                    {tarefa.prioridade}
                  </Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#F0F5FA',
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  gap: 4,
                }}>
                  <Octicons name="clock" size={12} color="#666" />
                  <Text style={{ fontSize: 12, color: '#666' }}>{tarefa.data}</Text>
                </View>

                <View style={{
                  backgroundColor: '#F0F5FA',
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}>
                  <Text style={{ fontSize: 12, color: '#666' }}>{tarefa.categoria}</Text>
                </View>
              </View>
            </View>
          ))}

        </View>
      </ScrollView>

      {/* Botão adicionar */}
      <TouchableOpacity style={{
        position: 'absolute',
        bottom: 24,
        right: 24,
        backgroundColor: '#1A5CE5',
        width: 52,
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
      }}>
        <Octicons name="plus" size={24} color="#fff" />
      </TouchableOpacity>

    </View>
  );
}