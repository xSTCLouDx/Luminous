import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'; // ✅ TextInput adicionado

const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const dias = [11, 12, 13, 14, 15, 16, 17];
const diaAtual = 15;

const eventos = [
  {
    id: '1',
    hora: '09:00',
    duracao: '1h',
    titulo: 'Reunião Estratégia',
    cor: '#1A5CE5',
    local: 'Sala de Reuniões A',
    participantes: 5,
    tag: 'Reunião',
  },
  {
    id: '2',
    hora: '11:00',
    duracao: '2h',
    titulo: 'Deep Work - Produção do 1º trimestre',
    cor: '#8B5CF6',
    tag: 'Deep Work',
  },
  {
    id: '3',
    hora: '13:00',
    duracao: '1h',
    titulo: 'Almoço e Descanso',
    cor: '#10B981',
    tag: 'Pausa',
  },
  {
    id: '4',
    hora: '14:30',
    duracao: '1h 30min',
    titulo: 'Revisar modelos para dispositivos móveis',
    cor: '#1A5CE5',
    participantes: 3,
  },
  {
    id: '5',
    hora: '16:30',
    duracao: '45min',
    titulo: 'Agenda revisão de feedback da sprint',
    cor: '#F59E0B',
    local: 'Google Meet',
    participantes: 8,
  },
];

export default function Agenda() {
  const [diaSelecionado, setDiaSelecionado] = useState(diaAtual);

  return (
    <View style={{ flex: 1, backgroundColor: '#F0F5FA' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>

        {/* Header */}
        <View style={{ paddingHorizontal: 16, paddingTop: 50, paddingBottom: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1a1a1a' }}>Agenda</Text>
              <Text style={{ color: '#666', fontSize: 13 }}>Planeje seu dia com foco</Text>
            </View>
            <TouchableOpacity style={{
              backgroundColor: '#1A5CE5',
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Octicons name="plus" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingHorizontal: 16, gap: 16 }}>

          {/* Calendário */}
          <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
            {/* Mês */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Maio 2026</Text>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <TouchableOpacity>
                  <Octicons name="chevron-left" size={20} color="#666" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Octicons name="chevron-right" size={20} color="#666" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Dias da semana */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
              {diasSemana.map((dia, index) => (
                <Text key={index} style={{ fontSize: 12, color: '#999', width: 36, textAlign: 'center' }}>
                  {dia}
                </Text>
              ))}
            </View>

            {/* Números dos dias */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {dias.map((dia, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setDiaSelecionado(dia)}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: dia === diaSelecionado ? '#1A5CE5' : '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: dia === diaSelecionado ? '#fff' : '#333',
                  }}>
                    {dia}
                  </Text>
                  {[12, 14, 15].includes(dia) && (
                    <View style={{
                      width: 4,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: dia === diaSelecionado ? '#fff' : '#1A5CE5',
                      position: 'absolute',
                      bottom: 2,
                    }} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Card Adicionar com IA */}
          <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, gap: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Octicons name="sparkle-fill" size={16} color="#8B5CF6" />
              <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#8B5CF6' }}>Adicionar com IA</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Digite em linguagem natural</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F0F5FA',
              borderRadius: 10,
              paddingHorizontal: 12,
              height: 44,
              gap: 8,
            }}>
              <TextInput
                style={{ flex: 1, fontSize: 13, color: '#333' }}
                placeholder="Ex: Reunião com cliente amanhã às 15h"
                placeholderTextColor="#999"
              />
              <Octicons name="paper-airplane" size={16} color="#1A5CE5" />
            </View>
          </View>

          {/* Card Clima */}
          <View style={{ backgroundColor: '#1A5CE5', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View>
                <Text style={{ color: '#fff', fontSize: 13, opacity: 0.8 }}>São Paulo</Text>
                <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>24°C</Text>
                <Text style={{ color: '#fff', fontSize: 13, opacity: 0.8 }}>Parcialmente Nublado</Text>
              </View>
              <Octicons name="cloud" size={48} color="#ffffff80" />
            </View>

            <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
              <View style={{ flex: 1, backgroundColor: '#ffffff20', borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  <Feather name="droplet" size={12} color="#fff" />
                  <Text style={{ color: '#fff', fontSize: 11, opacity: 0.8 }}>Umidade</Text>
                </View>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>65%</Text>
              </View>
              <View style={{ flex: 1, backgroundColor: '#ffffff20', borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  <Octicons name="zap" size={12} color="#fff" />
                  <Text style={{ color: '#fff', fontSize: 11, opacity: 0.8 }}>Vento</Text>
                </View>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>12 km/h</Text>
              </View>
            </View>
          </View>

          {/* Visão do Dia */}
          <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Octicons name="calendar" size={16} color="#1A5CE5" />
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#1A5CE5' }}>Visão do Dia</Text>
              </View>
              <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#1A5CE5' }}>18:05</Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
              <View style={{ flex: 1, backgroundColor: '#F0F5FA', borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  <Octicons name="clock" size={12} color="#1A5CE5" />
                  <Text style={{ color: '#666', fontSize: 11 }}>Tarefas Hoje</Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#1a1a1a' }}>12</Text>
              </View>
              <View style={{ flex: 1, backgroundColor: '#F5F3FF', borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  <Octicons name="goal" size={12} color="#8B5CF6" />
                  <Text style={{ color: '#666', fontSize: 11 }}>Tempo Foco</Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#8B5CF6' }}>2h</Text>
              </View>
            </View>

            {/* Eventos */}
            {eventos.map(evento => (
              <View key={evento.id} style={{ flexDirection: 'row', gap: 12, marginBottom: 12 }}>
                <View style={{ alignItems: 'flex-end', width: 44 }}>
                  <Text style={{ fontSize: 12, color: '#666', fontWeight: 'bold' }}>{evento.hora}</Text>
                  <Text style={{ fontSize: 10, color: '#999' }}>{evento.duracao}</Text>
                </View>
                <View style={{
                  flex: 1,
                  backgroundColor: evento.cor + '15',
                  borderLeftWidth: 3,
                  borderLeftColor: evento.cor,
                  borderRadius: 8,
                  padding: 10,
                }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#1a1a1a' }}>{evento.titulo}</Text>
                  {evento.tag && (
                    <View style={{
                      backgroundColor: evento.cor + '30',
                      borderRadius: 6,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      alignSelf: 'flex-start',
                      marginTop: 4,
                    }}>
                      <Text style={{ fontSize: 11, color: evento.cor, fontWeight: 'bold' }}>{evento.tag}</Text>
                    </View>
                  )}
                  {evento.local && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                      <Octicons name="location" size={11} color="#666" />
                      <Text style={{ fontSize: 11, color: '#666' }}>{evento.local}</Text>
                    </View>
                  )}
                  {evento.participantes && (
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
                      <Octicons name="people" size={11} color="#666" />
                      <Text style={{ fontSize: 11, color: '#666' }}>{evento.participantes} participantes</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}

            {/* Meta de Foco */}
            <View style={{ backgroundColor: '#EFF6FF', borderRadius: 12, padding: 12, marginTop: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <Octicons name="clock" size={14} color="#1A5CE5" />
                <Text style={{ fontWeight: 'bold', color: '#1A5CE5', fontSize: 13 }}>Meta de Foco Diária</Text>
              </View>
              <Text style={{ color: '#666', fontSize: 12, marginBottom: 8 }}>
                Você agendou 3h de Deep Work hoje. Continue assim!
              </Text>
              <View style={{ backgroundColor: '#ddd', borderRadius: 4, height: 6 }}>
                <View style={{ backgroundColor: '#1A5CE5', borderRadius: 4, height: 6, width: '60%' }} />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
                <Text style={{ fontSize: 11, color: '#666' }}>3h agendadas</Text>
                <Text style={{ fontSize: 11, color: '#666' }}>Meta: 5h</Text>
              </View>
            </View>

          </View>

        </View>
      </ScrollView>
    </View>
  );
}
