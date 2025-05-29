
# Compartilhe e Ganhe

Este é um sistema simples e legítimo de "Compartilhe e Ganhe" usando:
- HTML/CSS para a interface
- Google Apps Script + Planilhas para o backend de rastreio

## Como usar

1. Publique o `index.html` no GitHub Pages ou outro servidor.
2. Crie um script no Google Apps Script com o código fornecido.
3. Publique como Web App e substitua `YOUR_SCRIPT_ID` pelo ID do seu script publicado.
4. A planilha conectada ao script armazenará os dados de usuários e referências.

Os usuários recebem um link de indicação. Cada novo acesso gera um ID único e é registrado na planilha.

## Estrutura da Planilha

| usuario      | ref          | creditos |
|--------------|--------------|----------|
| user_xyz123  | user_abc456  | 10       |

## Regras (exemplo)
- Cada indicação válida = 10 créditos
- Ao atingir 100 créditos, o usuário pode resgatar um prêmio (manual ou automático)

