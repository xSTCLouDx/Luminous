import { StyleSheet } from "react-native";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — altere aqui e propaga para todo o app
// ─────────────────────────────────────────────────────────────────────────────
export const colors = {
  // Primária
  primary:       '#1A5CE5',
  primaryLight:  '#DBEAFE',
  primaryDark:   '#1243B0',

  // IA / Assistente
  ia:            '#8B5CF6',
  iaLight:       '#EDE9FE',
  iaDark:        '#6D28D9',

  // Sucesso
  success:       '#10B981',
  successLight:  '#D1FAE5',

  // Atenção
  warning:       '#F59E0B',
  warningLight:  '#FEF3C7',

  // Erro
  danger:        '#EF4444',
  dangerLight:   '#FEE2E2',

  // Neutros
  bg:            '#F0F5FA',   // fundo geral de todas as telas
  white:         '#FFFFFF',
  border:        '#E5E7EB',
  text:          '#1A1A1A',
  textSecondary: '#666666',
  textMuted:     '#999999',
  placeholder:   '#999999',
};

export const radius = {
  sm:   8,
  md:   12,
  lg:   16,
  xl:   20,
  full: 999,
};

export const spacing = {
  xs:  4,
  sm:  8,
  md:  12,
  lg:  16,
  xl:  24,
  xxl: 32,
};

export const font = {
  sm:   12,
  base: 14,
  md:   15,
  lg:   16,
  xl:   18,
  xxl:  22,
  hero: 25,
};

// ─────────────────────────────────────────────────────────────────────────────
// ESTILOS COMPARTILHADOS — usados em múltiplas telas
// ─────────────────────────────────────────────────────────────────────────────
export const shared = StyleSheet.create({

  // ── Layout ────────────────────────────────────────────────────────────────

  /** Fundo padrão de todas as telas */
  screenBg: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  /** Padding de conteúdo dentro de ScrollViews */
  scrollContent: {
    paddingBottom: 24,
  },

  /** Padding de conteúdo dentro de ScrollViews das tabs */
  tabScrollContent: {
    paddingBottom: 80, // espaço para a tab bar
  },

  /** Card branco padrão */
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },

  /** Card azul destacado (IA Insight, clima, etc.) */
  cardPrimary: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },

  /** Card roxo IA */
  cardIA: {
    backgroundColor: colors.ia,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },

  /** Card fundo azul claro */
  cardPrimaryLight: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },

  /** Card fundo roxo claro */
  cardIALight: {
    backgroundColor: colors.iaLight,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },

  // ── Header das telas tabs ─────────────────────────────────────────────────

  tabHeader: {
    paddingHorizontal: spacing.lg,
    paddingTop: 50,
    paddingBottom: spacing.lg,
  },

  tabHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tabTitle: {
    fontSize: font.xxl,
    fontWeight: 'bold',
    color: colors.text,
  },

  tabSubtitle: {
    color: colors.textSecondary,
    fontSize: font.sm,
    marginTop: 2,
  },

  // ── Tipografia ────────────────────────────────────────────────────────────

  h1: {
    fontSize: font.hero,
    fontWeight: 'bold',
    color: colors.text,
  },

  h2: {
    fontSize: font.xxl,
    fontWeight: 'bold',
    color: colors.text,
  },

  h3: {
    fontSize: font.lg,
    fontWeight: 'bold',
    color: colors.text,
  },

  bodyText: {
    fontSize: font.base,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  labelText: {
    fontSize: font.sm,
    color: colors.textMuted,
  },

  primaryText: {
    color: colors.primary,
    fontWeight: 'bold',
  },

  iaText: {
    color: colors.ia,
    fontWeight: 'bold',
  },

  // ── Botões ────────────────────────────────────────────────────────────────

  /** Botão primário azul cheio */
  btnPrimary: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnPrimaryText: {
    color: colors.white,
    fontSize: font.lg,
    fontWeight: 'bold',
  },

  /** Botão outline (bordas) */
  btnOutline: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },

  /** Botão ícone circular */
  btnIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnIconPrimary: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /** FAB — Floating Action Button */
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: colors.primary,
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  // ── Inputs ────────────────────────────────────────────────────────────────

  /** Container de input com ícone */
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md - 2,
    paddingHorizontal: spacing.md,
    height: 48,
    gap: spacing.sm,
    marginBottom: spacing.lg,
    backgroundColor: colors.white,
  },

  input: {
    flex: 1,
    fontSize: font.base,
    color: colors.text,
  },

  /** Campo de busca (fundo cinza, sem borda) */
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 44,
    gap: spacing.sm,
  },

  label: {
    fontSize: font.base,
    color: '#333',
    marginBottom: 6,
  },

  // ── Badges / Tags ─────────────────────────────────────────────────────────

  badge: {
    borderRadius: radius.sm - 2,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },

  badgeText: {
    fontSize: font.sm - 1,
    fontWeight: 'bold',
  },

  badgePrimary: {
    backgroundColor: colors.primary,
    borderRadius: radius.sm - 2,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },

  badgePrimaryText: {
    color: colors.white,
    fontSize: font.sm - 1,
    fontWeight: 'bold',
  },

  // ── Row helpers ───────────────────────────────────────────────────────────

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // ── Avatar ────────────────────────────────────────────────────────────────

  avatarMd: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarLg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ── Separador ─────────────────────────────────────────────────────────────

  divider: {
    height: 1,
    backgroundColor: colors.border,
  },

  // ── Progress bar ──────────────────────────────────────────────────────────

  progressTrack: {
    backgroundColor: colors.bg,
    borderRadius: 4,
    height: 8,
  },

  progressFill: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    height: 8,
  },

});

// ─────────────────────────────────────────────────────────────────────────────
// ESTILOS DAS TELAS DE AUTENTICAÇÃO (index, cadastro, reset-senha)
// ─────────────────────────────────────────────────────────────────────────────
export const styles = StyleSheet.create({

  botaoContainer: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
  },

  botaoTexto: {
    color: colors.white,
    fontSize: font.lg,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  IndexView1: {
    backgroundColor: colors.bg,
    borderRadius: radius.xl,
    margin: spacing.lg,
    padding: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
  },

  IndexText1: {
    color: '#2a03b6',
    fontSize: font.xl,
    margin: spacing.sm,
    fontWeight: 'bold',
  },

  IconeIndex: {
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  IndexView2: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    margin: spacing.sm,
    padding: spacing.xl,
  },

  TextoDestacado: {
    fontSize: font.hero,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },

  label: {
    fontSize: font.base,
    color: '#333',
    marginBottom: 6,
  },

  forgot: {
    fontSize: font.base,
    color: colors.primary,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.md,
    height: 48,
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },

  input: {
    flex: 1,
    fontSize: font.base,
    color: colors.text,
  },

  senha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  icon: {
    width: 22,
    height: 22,
  },

  oucom: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  oucom2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: radius.full,
    borderColor: '#000000',
  },
});
