import Octicons from '@expo/vector-icons/Octicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

// Dados das 4 telas de apresentação
const telas = [
  {
    id: '1',
    titulo: 'Organize sua vida com clareza',
    descricao: 'A ferramenta definitiva para gerenciar suas tarefas e alcançar seus objetivos com inteligência.',
    dica: 'Usuários que organizam suas tarefas pela manhã aumentam sua taxa de conclusão em 40%.',
    dicaTitulo: 'Dica de Produtividade',
    icone: 'light-bulb',
    cor: '#1A5CE5',
  },
  {
    id: '2',
    titulo: 'Inteligência que trabalha por você',
    descricao: 'Receba sugestões personalizadas de IA para otimizar seu fluxo de trabalho e evitar sobrecarga.',
    dica: 'Priorização Automática • Análise de Fluxo',
    dicaTitulo: 'Recursos IA',
    icone: 'sparkle-fill',
    cor: '#8B5CF6',
  },
  {
    id: '3',
    titulo: 'Mantenha o foco no que importa',
    descricao: 'Defina metas de foco diárias e acompanhe seu progresso em tempo real com gamificação.',
    dica: '',
    dicaTitulo: '',
    icone: 'goal',
    cor: '#1A5CE5',
  },
  {
    id: '4',
    titulo: 'Pronto para iluminar sua produtividade?',
    descricao: 'Junte-se a milhares de usuários que já transformaram sua rotina.',
    dica: '4.9/5 estrelas baseado em 10k+ avaliações.',
    dicaTitulo: 'Destaque da semana',
    icone: 'graph',
    cor: '#1A5CE5',
  },
];

export default function Onboarding() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [telaAtual, setTelaAtual] = useState(0);

  // Permissões
  const [calendario, setCalendario] = useState(false);
  const [lembretes, setLembretes] = useState(false);
  const [analise, setAnalise] = useState(false);

  // Verifica se está na tela de permissões (índice 4)
  const naPermissoes = telaAtual === 4;
  const naUltimaTela = telaAtual === 3;

  const avancar = () => {
    if (telaAtual < 3) {
      flatListRef.current?.scrollToIndex({ index: telaAtual + 1 });
      setTelaAtual(telaAtual + 1);
    } else if (telaAtual === 3) {
      setTelaAtual(4); // vai para permissões
    }
  };

  const pular = async () => {
    await AsyncStorage.setItem('onboarding_visto', 'true');
    await AsyncStorage.setItem('permissoes_ativas', 'false');
    router.replace('/');
  };

  const habilitarPermissoes = async () => {
    await AsyncStorage.setItem('onboarding_visto', 'true');
    await AsyncStorage.setItem('permissoes_ativas', 'true');
    await AsyncStorage.setItem('perm_calendario', String(calendario));
    await AsyncStorage.setItem('perm_lembretes', String(lembretes));
    await AsyncStorage.setItem('perm_analise', String(analise));
    router.replace('/');
  };

  const pularPermissoes = async () => {
    await AsyncStorage.setItem('onboarding_visto', 'true');
    await AsyncStorage.setItem('permissoes_ativas', 'false');
    router.replace('/');
  };

  // Tela de permissões
  if (naPermissoes) {
    return (
      <View style={{ flex: 1, backgroundColor: '#F0F5FA', paddingTop: 60, paddingHorizontal: 24 }}>

        {/* Ícone */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <View style={{
            backgroundColor: '#1A5CE5',
            width: 64,
            height: 64,
            borderRadius: 32,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Octicons name="shield-check" size={30} color="#fff" />
          </View>
        </View>

        {/* Título */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 }}>
          Habilitar Permissões
        </Text>
        <Text style={{ fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 32 }}>
          Personalize sua experiência e maximize sua produtividade
        </Text>

        {/* Permissão: Calendário */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
            <View style={{ backgroundColor: '#DBEAFE', padding: 10, borderRadius: 12 }}>
              <Octicons name="calendar" size={20} color="#1A5CE5" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Sincronização de Calendário</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Conecte seu calendário para exibir eventos automaticamente</Text>
            </View>
          </View>
          <Switch value={calendario} onValueChange={setCalendario} trackColor={{ true: '#1A5CE5' }} />
        </View>

        {/* Permissão: Lembretes */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 16,
          padding: 16,
          marginBottom: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
            <View style={{ backgroundColor: '#EDE9FE', padding: 10, borderRadius: 12 }}>
              <Octicons name="bell" size={20} color="#8B5CF6" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Lembretes Inteligentes</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Receba notificações antes das reuniões e prazos importantes</Text>
            </View>
          </View>
          <Switch value={lembretes} onValueChange={setLembretes} trackColor={{ true: '#8B5CF6' }} />
        </View>

        {/* Permissão: Análise */}
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 16,
          padding: 16,
          marginBottom: 24,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
            <View style={{ backgroundColor: '#D1FAE5', padding: 10, borderRadius: 12 }}>
              <Octicons name="graph" size={20} color="#10B981" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Análise de Atividades</Text>
              <Text style={{ color: '#666', fontSize: 12 }}>Permita que a IA analise suas atividades para sugestões personalizadas</Text>
            </View>
          </View>
          <Switch value={analise} onValueChange={setAnalise} trackColor={{ true: '#10B981' }} />
        </View>

        {/* Aviso de segurança */}
        <View style={{ backgroundColor: '#EFF6FF', borderRadius: 12, padding: 16, marginBottom: 24, flexDirection: 'row', gap: 8 }}>
          <Octicons name="sparkle-fill" size={16} color="#1A5CE5" />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', color: '#1A5CE5', fontSize: 13 }}>Seus dados estão seguros</Text>
            <Text style={{ color: '#1A5CE5', fontSize: 12 }}>
              Todas as informações são criptografadas e mantidas privadas. Você pode desativar qualquer permissão a qualquer momento.
            </Text>
          </View>
        </View>

        {/* Botão habilitar */}
        <TouchableOpacity
          style={{
            backgroundColor: '#1A5CE5',
            borderRadius: 12,
            height: 52,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 12
          }}
          onPress={habilitarPermissoes}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Habilitar todas as permissões</Text>
        </TouchableOpacity>

        {/* Pular */}
        <TouchableOpacity onPress={pularPermissoes} style={{ alignItems: 'center' }}>
          <Text style={{ color: '#666', fontSize: 14 }}>Pular por enquanto</Text>
        </TouchableOpacity>

      </View>
    );
  }

  // Telas de apresentação
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F5FA' }}>

      {/* Botão pular */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 50 }}>
        <Text style={{ color: '#1A5CE5', fontWeight: 'bold', fontSize: 16 }}>Produtividade</Text>
        <TouchableOpacity onPress={pular}>
          <Text style={{ color: '#666' }}>Pular</Text>
        </TouchableOpacity>
      </View>

      {/* Telas deslizáveis */}
      <FlatList
        ref={flatListRef}
        data={telas}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width, padding: 24, alignItems: 'center', justifyContent: 'center' }}>

            {/* Ícone */}
            <View style={{
              backgroundColor: item.cor,
              width: 80,
              height: 80,
              borderRadius: 24,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 32
            }}>
              <Octicons name={item.icone as any} size={36} color="#fff" />
            </View>

            {/* Título */}
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, color: '#1a1a1a' }}>
              {item.titulo}
            </Text>

            {/* Descrição */}
            <Text style={{ fontSize: 15, color: '#666', textAlign: 'center', marginBottom: 24, lineHeight: 22 }}>
              {item.descricao}
            </Text>

            {/* Card de dica */}
            {item.dica !== '' && (
              <View style={{
                backgroundColor: '#EFF6FF',
                borderRadius: 12,
                padding: 16,
                width: '100%',
                flexDirection: 'row',
                gap: 8,
                alignItems: 'flex-start'
              }}>
                <Octicons name="light-bulb" size={16} color="#1A5CE5" />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', color: '#1A5CE5', fontSize: 13 }}>{item.dicaTitulo}</Text>
                  <Text style={{ color: '#1A5CE5', fontSize: 12 }}>{item.dica}</Text>
                </View>
              </View>
            )}

          </View>
        )}
      />

      {/* Indicadores de página */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, marginBottom: 24 }}>
        {telas.map((_, index) => (
          <View
            key={index}
            style={{
              width: index === telaAtual ? 24 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: index === telaAtual ? '#1A5CE5' : '#ddd'
            }}
          />
        ))}
      </View>

      {/* Botão Próximo */}
      <TouchableOpacity
        style={{
          backgroundColor: '#1A5CE5',
          marginHorizontal: 24,
          borderRadius: 12,
          height: 52,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 40,
          flexDirection: 'row',
          gap: 8
        }}
        onPress={avancar}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
          {naUltimaTela ? 'Começar' : 'Próximo'}
        </Text>
        <Octicons name="arrow-right" size={18} color="#fff" />
      </TouchableOpacity>

    </View>
  );
}