# 🚀 Cypress UI Automation – SauceDemo

Automação de testes end-to-end com **Cypress** validando fluxos reais de interface no site [SauceDemo](https://www.saucedemo.com/). O projeto simula a jornada completa de um usuário em um e-commerce, desde o login até o logout, com dados reais e cenários automatizados.

---

## 🧩 O que é UI (Interface do Usuário)?

A Interface do Usuário (UI) é o ponto de contato entre o sistema e o usuário. Testar a UI garante que elementos visuais como botões, formulários e fluxos estejam funcionando corretamente — reduzindo falhas na experiência final e melhorando a confiabilidade da aplicação.

---

## 📋 O que o Projeto Faz

- Executa o login automaticamente com `beforeEach()`
- Valida a adição de produtos ao carrinho
- Confirma visualização correta dos itens adicionados
- Realiza o checkout com dados válidos (nome, sobrenome e CEP)
- Executa logout e valida redirecionamento
- Todos os testes usam comandos reais de interação: clique, digitação, navegação e verificação visual

---

## 🔍 Detalhes Técnicos

- Usa `cy.get()`, `cy.click()`, `cy.type()`, `cy.contains()` para simular ações do usuário
- Seletores estáveis com atributos `data-test`
- Verificação de URL e textos visíveis
- `beforeEach()` aplicado para garantir estado autenticado
- Estrutura pronta para integração com CI/CD

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Framework de testes de interface
- [JavaScript (ES6)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Mocha](https://mochajs.org/) e [Chai](https://www.chaijs.com/) – Test runner e biblioteca de assertivas

---

## ▶️ Executando o Projeto

1. **Clone o repositório**

```bash
git clone https://github.com/rocha5021/cypress-ui-saucedemo.git
cd cypress-ui-saucedemo

    Instale as dependências

npm install

    Execute os testes no modo interativo

npx cypress open

    Ou execute no modo headless

npx cypress run

📁 Estrutura dos Testes

cypress/
├── e2e/
│   └── saucedemo.cy.js    # Casos de teste com beforeEach() e dados reais
├── fixtures/
├── support/
│   ├── commands.js
│   └── e2e.js

💡 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests.
🧪 Autor

Desenvolvido por Marcus Rocha
🔗 GitHub
📄 Licença

Este projeto está licenciado sob a MIT License.


Se quiser, posso te ajudar a criar o `LICENSE` ou configurar o `.gitignore` também. Deseja isso?

Você disse:
sim
O ChatGPT disse:

Ótimo! Aqui estão os arquivos adicionais para seu projeto:
📄 LICENSE (MIT License)

MIT License

Copyright (c) 2025 Marcus Rocha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

📄 .gitignore (para projeto Cypress com Node.js)

# Node modules
node_modules/

# Cypress cache
.cypress/
cypress/screenshots/
cypress/videos/

# System files
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Env
.env
