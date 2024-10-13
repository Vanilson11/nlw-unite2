# 📝 Gerenciador de Participantes de Eventos
Esta aplicação web permite gerenciar a lista de participantes de um evento, permitindo cadastrar novos participantes, confirmar check-ins e remover participantes. A interface é dinâmica e responsiva, garantindo uma experiência de usuário fluida.

## 🚀 Funcionalidades
### 1. Cadastrar Participantes: 
Adiciona novos participantes com nome, email e data de inscrição.
### 2. Confirmar Check-in: 
Permite confirmar a presença do participante no evento, marcando a data de check-in.
### 3. Deletar Participantes: 
Remove participantes da lista.
### 4. Atualização Dinâmica da Interface: 
A lista de participantes é atualizada em tempo real na interface, sem a necessidade de recarregar a página.

## 🛠️ Tecnologias Utilizadas
- **HTML**: Para a estruturação da página.
- **CSS**: Para estilização e responsividade do layout.
- **JavaScript (ES6+)**: Para manipulação da DOM, requisições assíncronas e lógica de negócios.
- **Day.js**: Biblioteca para manipulação de datas.
- **Local Storage**: Para armazenar dados temporariamente no navegador.

## 📁 Estrutura do Projeto
O projeto está dividido em módulos para organizar melhor o código:

- **Modal.js**: Lida com a exibição de modais para confirmação de ações.
- **Data.js**: Contém a lógica para manipulação dos dados dos participantes, como busca e armazenamento.
- **Events.js**: Gerencia os eventos do formulário e faz a integração com as outras classes.
- **UpdateListHtml.js**: Atualiza dinamicamente a lista de participantes na interface.

## 📜 Considerações Finais
Essa aplicação foi desenvolvida para ser um exemplo de manipulação de dados e uso de eventos em JavaScript. As funcionalidades podem ser facilmente expandidas para se adaptar a outras necessidades, como envio de e-mails de confirmação ou integração com bancos de dados reais.

Você pode acessar o projeto através desse [link](https://nlw-unite2.netlify.app/) 