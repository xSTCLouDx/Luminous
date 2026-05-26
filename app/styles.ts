import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    // Botão principal azul (Entrar)
    botaoContainer: {
        backgroundColor: "#1a56db",  // azul do design
        borderRadius: 12,
        height: 52,
        justifyContent: "center",  // centraliza texto verticalmente
        alignItems: "center",      // centraliza texto horizontalmente
        marginTop: 8,
        marginBottom: 4,
    },

    // Texto dentro do botão Entrar
    botaoTexto: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    // Tela inteira — flex:1 faz ocupar 100% da altura da tela
    container: {
        flex: 1,
        backgroundColor: "#F0F5FA",  // fundo azul claro
    },

    // Header com ícone + "Luminous" — flexDirection row = lado a lado
    IndexView1: {
        backgroundColor: "#F0F5FA",
        borderRadius: 20,
        margin: 16,
        padding: 24,
        flexDirection: "row",        // ícone e texto ficam na mesma linha
        alignItems: "center",        // alinha verticalmente ao centro
        paddingTop: 50
    },

    // Texto "Luminous"
    IndexText1: {
        color: "#2a03b6",
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },

    // Quadrado azul que envolve o ícone de lâmpada
    IconeIndex: {
        backgroundColor: "#1a56db",
        borderRadius: 10,
        width: 50,
        height: 50,
        justifyContent: "center",  // centraliza ícone verticalmente
        alignItems: "center",      // centraliza ícone horizontalmente
    },

    // Card branco do formulário — margin pequena para ocupar mais espaço
    IndexView2: {
        backgroundColor: "#fff",
        borderRadius: 20,
        margin: 10,
        padding: 24,
    },

    // Título "Bem-vindo de volta"
    TextoDestacado: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 8,
        marginBottom: 4,
    },

    // Label acima dos campos (E-mail, Senha)
    label: {
        fontSize: 14,
        color: "#333",
        marginBottom: 6,
    },

    // Texto "Esqueci minha senha"
    forgot: {
        fontSize: 14,
        color: "#1a56db",
    },

    // Container dos inputs — row coloca ícone e TextInput na mesma linha
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",        // alinha ícone e texto verticalmente
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 12,       // espaço interno nas laterais
        height: 48,
        gap: 10,                     // espaço entre ícone e TextInput
        marginBottom: 16,
    },

    // TextInput — flex:1 faz ele ocupar todo espaço restante no container
    input: {
        flex: 1,
        fontSize: 14,
        color: "#333",
    },

    // Linha com "Senha" e "Esqueci minha senha" — space-between separa os dois
    senha: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 6,
    },

    // Ícone Google e Apple — tamanho igual para os dois
    icon: {
        width: 22,
        height: 22,
    },

    // Container dos botões Google e Apple lado a lado
    oucom: {
        flexDirection: "row",
        gap: 12,                     // espaço entre os dois botões
    },

    // Cada botão (Google ou Apple) — flex:1 faz cada um ocupar metade igual
    oucom2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",    // centraliza conteúdo horizontalmente
        alignItems: "center",        // centraliza conteúdo verticalmente
        gap: 8,                      // espaço entre ícone e texto
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#000000",
        // elevation: 2,                // sombra no Android
        
    },
});