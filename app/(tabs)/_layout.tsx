import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1A5CE5',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tarefas"
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color }) => (
            <Octicons name="checklist" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ color }) => (
            <Octicons name="calendar" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="historico"
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color }) => (
            <Octicons name="clock" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
<Tabs.Screen
  name="assistente"
  options={{
    title: 'IA',
    tabBarIcon: ({ color }) => (
      <Octicons name="sparkle-fill" size={22} color={color} />
    ),
    href: null, // esconde da tab bar (acesso só pelo Perfil)
  }}
/>