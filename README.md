# Luminous Productivity 💡

App mobile de produtividade feito com React Native, Expo e Supabase.

## Screenshots

| Login | Cadastro | Recuperar Senha |
|-------|----------|-----------------|
| ![Login](screenshots/login.png) | ![Cadastro](screenshots/cadastro.png) | ![Reset](screenshots/reset-senha.png) |

## Como rodar o projeto

### 1. Criar o projeto Expo
```bash
npx create-expo-app@latest Luminous
```

### 2. Entrar na pasta do projeto
```bash
cd Luminous
```

### 3. Resetar o projeto
```bash
npm run reset-project
```

### 4. Clonar o repositório dentro da pasta app
```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO app
```

### 5. Instalar dependências

```bash
npm install
```

```bash
npm install @supabase/supabase-js
npm install react-native-url-polyfill
npx expo install --fix
```

### 6. Configurar o Supabase
Abra o arquivo `app/supabase.ts` e substitua com suas credenciais:
```ts
const supabaseUrl = 'https://SEU_PROJETO.supabase.co';
const supabaseKey = 'SUA_PUBLISHABLE_KEY';
```

### 7. Rodar o projeto

```bash
npx expo start
```

No output você encontrará opções para abrir o app em:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## Tecnologias
- React Native
- Expo
- TypeScript
- Expo Router
- Supabase
- Expo Vector Icons

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Supabase documentation](https://supabase.com/docs)
