// Arquivo central da IA — quando a IA estiver pronta,
// só muda aqui e o resto do app funciona automaticamente

export async function getInsight(contexto: string): Promise<string> {
  // Por enquanto retorna uma mensagem fixa
  // Quando integrar a IA real, só troca esse return
  return "Sua produtividade atinge o pico entre 09:00 e 11:00. Tente agendar suas tarefas de Deep Work neste período.";
}

export async function analisarTarefas(tarefas: any[]): Promise<string> {
  // Futuramente vai analisar as tarefas do usuário
  return "Você tem 3 tarefas de alta prioridade hoje.";
}

export async function getSugestao(historico: any[]): Promise<string> {
  // Futuramente vai sugerir com base no histórico
  return "Baseado no seu histórico, quinta-feira é seu dia mais produtivo.";
}