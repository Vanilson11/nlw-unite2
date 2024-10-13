# 📝 Gerenciador de Participantes de Eventos
Esta aplicação web foi desenvolvida durante a NLW-Unite da [Rocketseat](https://www.rocketseat.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=lead&utm_term=perpetuo&utm_content=institucional-lead-home-texto-lead-brandkws-none-none-institucional-none-none-br-google&utm_term=rocketseat&utm_campaign=PROGRAMAS-ALL-BRANDKWS-SEM&utm_source=adwords&utm_medium=cpc&hsa_acc=8545075154&hsa_cam=16048648686&hsa_grp=135825188594&hsa_ad=579096962131&hsa_src=g&hsa_tgt=kwd-679159515078&hsa_kw=rocketseat&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjw3624BhBAEiwAkxgTOgXWCaiSUizZ6I1iLCToY1M3Xi-GPzuXIeTOHYl2YlKUvcnOmjmxZxoCrwoQAvD_BwE). Ela permite gerenciar a lista de participantes de um evento, permitindo cadastrar novos participantes, confirmar check-ins e remover participantes. A interface é dinâmica e não responsiva, garantindo uma experiência de usuário fluida.

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
- **JavaScript (ES6+)**: Para manipulação da DOM.
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