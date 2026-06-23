import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { getInsight } from '../services/ia';

// ─── Tipos ───────────────────────────────────────────────────────────────────

type Mensagem = {
  id: string;
  tipo: 'usuario' | 'ia';
  texto: string;
  hora: string;
};

// ─── Dados estáticos ──────────────────────────────────────────────────────────

const metricas = [
  { icone: 'check-circle', cor: '#10B981', valor: '24', label: 'Tarefas Sugeridas' },
  { icone: 'clock',        cor: '#1A5CE5', valor: '8.5h', label: 'Tempo Economizado' },
  { icone: 'goal',         cor: '#8B5CF6', valor: '94%',  label: 'Precisão' },
];

const recursosIA = [
  {
    icone: 'calendar',
    cor: '#1A5CE5',
    bg: '#DBEAFE',
    titulo: 'Agendamento Inteligente',
    descricao: 'A IA agenda suas tarefas nos melhores horários baseado no seu histórico',
    ativo: true,
  },
  {
    icone: 'zap',
    cor: '#8B5CF6',
    bg: '#EDE9FE',
    titulo: 'Priorização Automática',
    descricao: 'Organiza automaticamente suas tarefas com base em prazos e importância',
    ativo: true,
  },
  {
    icone: 'graph',
    cor: '#10B981',
    bg: '#D1FAE5',
    titulo: 'Detecção de Padrões',
    descricao: 'Identifica padrões de produtividade e sugere otimizações',
    ativo: true,
  },
];

const insightsIniciais = [
  {
    id: 'i1',
    icone: 'light-bulb',
    cor: '#1A5CE5',
    bg: '#DBEAFE',
    badge: 'Alto Impacto',
    badgeCor: '#EF4444',
    titulo: 'Melhor horário para Deep Work',
    descricao: 'Você é 40% mais produtivo entre 9h–11h. Agende tarefas complexas neste período.',
    acao: 'Aplicar sugestão',
  },
  {
    id: 'i2',
    icone: 'issue-reopened',
    cor: '#8B5CF6',
    bg: '#EDE9FE',
    badge: null,
    badgeCor: null,
    titulo: 'Reorganizar prioridades',
    descricao: '3 tarefas urgentes precisam ser priorizadas antes do fim do dia.',
    acao: 'Ver tarefas',
  },
  {
    id: 'i3',
    icone: 'graph',
    cor: '#10B981',
    bg: '#D1FAE5',
    badge: 'Alto Impacto',
    badgeCor: '#EF4444',
    titulo: 'Padrão de sobrecarga detectado',
    descricao: 'Você tem agendado muitas reuniões às terças. Considere redistribuir.',
    acao: 'Ajustar agenda',
  },
];

const sugestoesRapidas = [
  'Como organizar meu dia?',
  'Quais tarefas priorizar?',
  'Meu horário mais produtivo?',
  'Dica para foco profundo',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function horaAtual() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Assistente() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  const [aba, setAba] = useState<'chat' | 'recursos'>('chat');
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      id: 'm0',
      tipo: 'ia',
      texto:
        'Olá! Sou seu Assistente IA de Produtividade. Posso analisar seus padrões de trabalho, sugerir horários ideais e ajudar a organizar suas tarefas. Como posso ajudar você hoje?',
      hora: horaAtual(),
    },
  ]);
  const [inputTexto, setInputTexto] = useState('');
  const [carregando, setCarregando] = useState(false);

  // Rola para o fim sempre que novas mensagens chegam
  useEffect(() => {
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
  }, [mensagens]);

  const enviarMensagem = async (texto: string) => {
    const textoFinal = texto.trim();
    if (!textoFinal || carregando) return;

    const novaMsgUsuario: Mensagem = {
      id: Date.now().toString(),
      tipo: 'usuario',
      texto: textoFinal,
      hora: horaAtual(),
    };

    setMensagens(prev => [...prev, novaMsgUsuario]);
    setInputTexto('');
    setCarregando(true);

    try {
      // Quando a IA real estiver pronta, getInsight já vai retornar a resposta correta.
      // Por enquanto usa o stub de services/ia.ts
      const resposta = await getInsight(textoFinal);

      const novaMsgIA: Mensagem = {
        id: (Date.now() + 1).toString(),
        tipo: 'ia',
        texto: resposta,
        hora: horaAtual(),
      };
      setMensagens(prev => [...prev, novaMsgIA]);
    } catch {
      setMensagens(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          tipo: 'ia',
          texto: 'Desculpe, ocorreu um erro. Tente novamente.',
          hora: horaAtual(),
        },
      ]);
    } finally {
      setCarregando(false);
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#F0F5FA' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      {/* ── Header ── */}
      <View style={{ backgroundColor: '#8B5CF6', paddingTop: 50, paddingBottom: 20, paddingHorizontal: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              width: 36, height: 36, borderRadius: 18,
              backgroundColor: '#ffffff20',
              justifyContent: 'center', alignItems: 'center',
            }}
          >
            <Octicons name="arrow-left" size={18} color="#fff" />
          </TouchableOpacity>

          <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Octicons name="sparkle-fill" size={18} color="#fff" />
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Assistente IA</Text>
            </View>
            <Text style={{ color: '#ffffff80', fontSize: 12 }}>Seu copiloto de produtividade</Text>
          </View>

          <TouchableOpacity
            style={{
              width: 36, height: 36, borderRadius: 18,
              backgroundColor: '#ffffff20',
              justifyContent: 'center', alignItems: 'center',
            }}
          >
            <Octicons name="gear" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Métricas rápidas */}
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderRadius: 16,
          padding: 16,
          marginTop: 16,
          justifyContent: 'space-around',
        }}>
          {metricas.map((m, i) => (
            <View key={i} style={{ alignItems: 'center', flex: 1 }}>
              <Octicons name={m.icone as any} size={18} color={m.cor} />
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#1a1a1a', marginTop: 6 }}>{m.valor}</Text>
              <Text style={{ color: '#666', fontSize: 10, textAlign: 'center' }}>{m.label}</Text>
            </View>
          ))}
        </View>

        {/* Abas */}
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#ffffff20',
          borderRadius: 12,
          padding: 4,
          marginTop: 12,
        }}>
          {(['chat', 'recursos'] as const).map(a => (
            <TouchableOpacity
              key={a}
              onPress={() => setAba(a)}
              style={{
                flex: 1,
                paddingVertical: 8,
                borderRadius: 10,
                backgroundColor: aba === a ? '#fff' : 'transparent',
                alignItems: 'center',
              }}
            >
              <Text style={{
                fontWeight: 'bold',
                fontSize: 13,
                color: aba === a ? '#8B5CF6' : '#ffffff80',
              }}>
                {a === 'chat' ? '💬  Chat' : '⚙️  Recursos'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* ── Aba Chat ── */}
      {aba === 'chat' && (
        <>
          <ScrollView
            ref={scrollRef}
            style={{ flex: 1 }}
            contentContainerStyle={{ padding: 16, gap: 12 }}
            showsVerticalScrollIndicator={false}
          >
            {mensagens.map(msg => (
              <View
                key={msg.id}
                style={{
                  alignItems: msg.tipo === 'usuario' ? 'flex-end' : 'flex-start',
                  marginBottom: 4,
                }}
              >
                {/* Avatar IA */}
                {msg.tipo === 'ia' && (
                  <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8, maxWidth: '85%' }}>
                    <View style={{
                      width: 32, height: 32, borderRadius: 16,
                      backgroundColor: '#8B5CF6',
                      justifyContent: 'center', alignItems: 'center',
                      marginBottom: 2,
                    }}>
                      <Octicons name="sparkle-fill" size={14} color="#fff" />
                    </View>
                    <View style={{ flex: 1 }}>
                      <View style={{
                        backgroundColor: '#fff',
                        borderRadius: 16,
                        borderBottomLeftRadius: 4,
                        padding: 12,
                        elevation: 1,
                        shadowColor: '#000',
                        shadowOpacity: 0.05,
                        shadowRadius: 4,
                        shadowOffset: { width: 0, height: 1 },
                      }}>
                        <Text style={{ color: '#1a1a1a', fontSize: 14, lineHeight: 20 }}>{msg.texto}</Text>
                      </View>
                      <Text style={{ color: '#999', fontSize: 10, marginTop: 4, marginLeft: 4 }}>{msg.hora}</Text>
                    </View>
                  </View>
                )}

                {/* Balão usuário */}
                {msg.tipo === 'usuario' && (
                  <View style={{ maxWidth: '80%' }}>
                    <View style={{
                      backgroundColor: '#8B5CF6',
                      borderRadius: 16,
                      borderBottomRightRadius: 4,
                      padding: 12,
                    }}>
                      <Text style={{ color: '#fff', fontSize: 14, lineHeight: 20 }}>{msg.texto}</Text>
                    </View>
                    <Text style={{ color: '#999', fontSize: 10, marginTop: 4, textAlign: 'right' }}>{msg.hora}</Text>
                  </View>
                )}
              </View>
            ))}

            {/* Indicador de digitação */}
            {carregando && (
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 8 }}>
                <View style={{
                  width: 32, height: 32, borderRadius: 16,
                  backgroundColor: '#8B5CF6',
                  justifyContent: 'center', alignItems: 'center',
                }}>
                  <Octicons name="sparkle-fill" size={14} color="#fff" />
                </View>
                <View style={{
                  backgroundColor: '#fff',
                  borderRadius: 16,
                  borderBottomLeftRadius: 4,
                  padding: 14,
                  flexDirection: 'row',
                  gap: 4,
                  alignItems: 'center',
                }}>
                  {[0, 1, 2].map(i => (
                    <View key={i} style={{
                      width: 6, height: 6, borderRadius: 3,
                      backgroundColor: '#8B5CF6',
                      opacity: 0.5 + i * 0.25,
                    }} />
                  ))}
                </View>
              </View>
            )}

            {/* Sugestões rápidas (só aparecem enquanto só há a mensagem inicial) */}
            {mensagens.length === 1 && !carregando && (
              <View style={{ marginTop: 8 }}>
                <Text style={{ color: '#999', fontSize: 12, marginBottom: 8, textAlign: 'center' }}>
                  Sugestões rápidas
                </Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                  {sugestoesRapidas.map((s, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => enviarMensagem(s)}
                      style={{
                        backgroundColor: '#EDE9FE',
                        borderRadius: 20,
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                      }}
                    >
                      <Text style={{ color: '#8B5CF6', fontSize: 13, fontWeight: '600' }}>{s}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}
          </ScrollView>

          {/* Input */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: 12,
            gap: 10,
            borderTopWidth: 1,
            borderTopColor: '#eee',
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F0F5FA',
              borderRadius: 24,
              paddingHorizontal: 16,
              paddingVertical: 10,
              gap: 8,
            }}>
              <TextInput
                style={{ flex: 1, fontSize: 14, color: '#333', maxHeight: 80 }}
                placeholder="Pergunte algo à IA..."
                placeholderTextColor="#999"
                value={inputTexto}
                onChangeText={setInputTexto}
                multiline
                onSubmitEditing={() => enviarMensagem(inputTexto)}
                returnKeyType="send"
              />
            </View>
            <TouchableOpacity
              onPress={() => enviarMensagem(inputTexto)}
              disabled={!inputTexto.trim() || carregando}
              style={{
                width: 44, height: 44, borderRadius: 22,
                backgroundColor: inputTexto.trim() && !carregando ? '#8B5CF6' : '#ddd',
                justifyContent: 'center', alignItems: 'center',
              }}
            >
              <Octicons name="paper-airplane" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </>
      )}

      {/* ── Aba Recursos ── */}
      {aba === 'recursos' && (
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 16, gap: 16, paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Recursos de IA */}
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#1a1a1a', marginBottom: 12 }}>
              Recursos de IA
            </Text>
            {recursosIA.map((r, i) => (
              <View key={i} style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 16,
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
                  <View style={{
                    backgroundColor: r.bg,
                    padding: 10, borderRadius: 12,
                  }}>
                    <Octicons name={r.icone as any} size={20} color={r.cor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#1a1a1a' }}>{r.titulo}</Text>
                    <Text style={{ color: '#666', fontSize: 12, marginTop: 2, lineHeight: 16 }}>{r.descricao}</Text>
                  </View>
                </View>
                {/* Switch visual (sem estado mutável — ativar quando IA estiver pronta) */}
                <View style={{
                  width: 44, height: 24, borderRadius: 12,
                  backgroundColor: r.ativo ? '#8B5CF6' : '#ddd',
                  justifyContent: 'center',
                  paddingHorizontal: 2,
                  alignItems: r.ativo ? 'flex-end' : 'flex-start',
                }}>
                  <View style={{
                    width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff',
                  }} />
                </View>
              </View>
            ))}
          </View>

          {/* Insights Inteligentes */}
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#1a1a1a' }}>Insights Inteligentes</Text>
              <View style={{ backgroundColor: '#EDE9FE', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 3 }}>
                <Text style={{ color: '#8B5CF6', fontSize: 12, fontWeight: 'bold' }}>3 novos</Text>
              </View>
            </View>

            {insightsIniciais.map(insight => (
              <View key={insight.id} style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 16,
                marginBottom: 10,
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 12 }}>
                  <View style={{
                    backgroundColor: insight.bg,
                    padding: 10, borderRadius: 12,
                  }}>
                    <Octicons name={insight.icone as any} size={18} color={insight.cor} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#1a1a1a', flex: 1 }}>
                        {insight.titulo}
                      </Text>
                      {insight.badge && (
                        <View style={{ backgroundColor: '#FEE2E2', borderRadius: 6, paddingHorizontal: 6, paddingVertical: 2 }}>
                          <Text style={{ color: '#EF4444', fontSize: 10, fontWeight: 'bold' }}>{insight.badge}</Text>
                        </View>
                      )}
                    </View>
                    <Text style={{ color: '#666', fontSize: 13, lineHeight: 18 }}>{insight.descricao}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setAba('chat');
                        enviarMensagem(insight.titulo);
                      }}
                      style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 10 }}
                    >
                      <Octicons name="light-bulb" size={13} color={insight.cor} />
                      <Text style={{ color: insight.cor, fontSize: 13, fontWeight: '600' }}>{insight.acao}</Text>
                      <Octicons name="chevron-right" size={13} color={insight.cor} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Como Funciona */}
          <View style={{ backgroundColor: '#EDE9FE', borderRadius: 16, padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <View style={{ backgroundColor: '#8B5CF6', padding: 6, borderRadius: 8 }}>
                <Octicons name="graph" size={14} color="#fff" />
              </View>
              <Text style={{ fontWeight: 'bold', color: '#8B5CF6', fontSize: 14 }}>Como Funciona</Text>
            </View>
            <Text style={{ color: '#4C1D95', fontSize: 13, lineHeight: 20 }}>
              Nossa IA analisa continuamente seus padrões de trabalho, histórico de conclusão de tarefas e picos de produtividade para fornecer recomendações personalizadas que se adaptam ao seu estilo único.
            </Text>
          </View>
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
}
