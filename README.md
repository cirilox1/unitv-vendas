# unitv-site

Projeto Vite + React + Tailwind com uma landing page pronta para vender a Unitv.

## Como usar

1. Instale dependências:
```bash
npm install
```

2. Rode em desenvolvimento:
```bash
npm run dev
```

3. Para deploy rápido: conecte o repositório no Vercel ou Netlify (link com 1 clique no GitHub).

Observações:
- A geração de QR usa a biblioteca `qrcode` no cliente. O QR codifica o **PIX key** como texto (muitos apps permitem colar a chave caso o QR não seja reconhecido pelo banco).
- Substitua imagens e logos em `src/App.jsx` por suas artes.
