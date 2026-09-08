# Toco & Teco Mobile Lab

Projeto React + Vite + Capacitor para transformar uma interface web em aplicativo Android.

## Requisitos

- Node.js 20+
- npm
- Android Studio com Android SDK
- JDK 21 configurado para o Gradle do Android

## Scripts

- `npm install`
- `npm run dev` — inicia o ambiente web
- `npm run build` — gera a pasta `dist`
- `npm run lint` — verifica o código com Oxlint
- `npm run android:sync` — sincroniza a web build com o projeto Android
- `npm run android:open` — abre o projeto no Android Studio
- `npm run android:build` — gera o APK de debug do Android

## Execução local

1. Instale as dependências:
   `npm install`
2. Rode a aplicação web:
   `npm run dev`
3. Para compilar o Android:
   `npm run android:sync`
   `npm run android:build`

## Observações

- O projeto usa Vite para frontend.
- O Capacitor gera a camada nativa Android a partir da pasta `dist`.
- Arquivos gerados (`dist`, `node_modules`, `android` build outputs) ficam ignorados pelo Git para manter a estrutura limpa.
