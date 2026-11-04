# Roteiro de Aula — Aula 01

## Abertura, Diagnóstico, Demonstração Tecnológica e Engenharia de Prompt

**Duração total:** 180 minutos (3h00) — **Horário:** 15h00 às 18h00
**Público-alvo:** Estudantes do Ensino Médio sem conhecimento prévio em programação ou IA
**Pré-requisitos:** Nenhum

---

## Bloco 1: Abertura e Formalização (10 min)

**Objetivo:** Garantir a validade ética da pesquisa e estabelecer as regras do laboratório.

### Ações do Tutor:
- Apresentar brevemente o projeto, destacando a união entre a extensão universitária e a pesquisa acadêmica sobre Inteligência Artificial.
  > *"Olá a todos! Sejam muito bem-vindos à nossa Aula 01 do projeto Trilhando o Caminho do Código! Hoje nós vamos dar o primeiro passo para vocês deixarem de ser apenas usuários ou consumidores de tecnologia e passarem a ser CRIADORES. Nós vamos unir a linguagem Python com Inteligência Artificial e construir jogos reais juntos!"*
- Passar a lista de presença anotando **Nome completo**, **CPF** e **E-mail** (dados para validação e emissão de certificado).
- Link do questionário de cadastro:
  ```
  https://docs.google.com/forms/d/1cti5P6zpnqMxsRky83t9_mzwyhQPSM-l3XNMAq9LNyU/edit
  ```

---

## Bloco 2: Coleta da Linha de Base — T0 (45 min)

**Objetivo:** Obter a fotografia inicial do conhecimento da turma antes de qualquer instrução, validando o "Delta de Aprendizagem" futuro para a pesquisa.

### Estrutura do Instrumento T0:

| Módulo | Construto Medido | Nº de Itens | Tempo |
|--------|-----------------|-------------|-------|
| 1. Perfil Sociodemográfico | Acesso tecnológico, experiência prévia | 6 | 5 min |
| 2. Pensamento Computacional (Bebras/CTt) | Raciocínio algorítmico, abstração, decomposição, lógica | 10 | 25 min |
| 3. Autoeficácia (CPSES) | Percepção de capacidade para programar | 6 | 5 min |
| 4. Letramento em IA | Conhecimento e atitude sobre IA generativa | 5 | 5 min |

### Ações do Tutor:
- Liberar o acesso apenas ao navegador e enviar o link do formulário (T0).
- Supervisionar a aplicação, garantindo que os alunos **não façam consultas** a abas externas ou motores de busca.
- Monitorar o preenchimento das quatro etapas do instrumento.
- Identificação anônima via código do estudante (ex: `ALUNO-2026-01`) para futuro pareamento com o pós-teste (T1).

### Questões do Módulo 2 — Pensamento Computacional (Resumo):

| Questão | Habilidade | Descrição |
|---------|-----------|-----------|
| Q1 | Reconhecimento de Padrões | Sequência lógica de fases de semáforo (aritmética modular) |
| Q2 | Decomposição | Isolamento de falha em sistema de cadastro |
| Q3 | Rastreamento de Variáveis | Algoritmo de troca (swap) de valores X e Y |
| Q4 | Laços de Repetição | Carrinho robótico com "Repita 4 vezes" na malha cartesiana |
| Q5 | Laços Aninhados | Contagem de pontos em rodadas × desafios |
| Q6 | Condicionais Simples | Cancela de estacionamento com SE/SENÃO |
| Q7 | Condicionais Compostas | Sensor agrícola com E, OU, NÃO |
| Q8 | Condicionais Aninhadas | Árvore de decisão de notas escolares |
| Q9 | Modularidade | Reuso de procedimento "Desenhar_Janela" |
| Q10 | Funções e Parâmetros | Avaliação funcional de Calcular_Custo(Distância, Peso) |

### Itens do Módulo 3 — Escala de Autoeficácia (CPSES, Likert 1–5):
1. *"Sinto-me confiante de que posso aprender a escrever programas de computador para resolver problemas reais."*
2. *"Quando encontro um erro em uma tarefa lógica, consigo analisar o processo passo a passo até encontrar a falha."*
3. *"Acredito que sou capaz de criar aplicativos visuais ou páginas funcionais a partir do zero."*
4. *"Consigo utilizar ferramentas tecnológicas por conta própria, mesmo quando a instrução inicial é complexa."*
5. *"Acho difícil entender como computadores tomam decisões lógicas através de códigos."* (item invertido)
6. *"Consigo aprender a integrar diferentes partes de um sistema para formar um projeto completo."*

---

## Bloco 3: Showcase Tecnológico (20 min)

**Objetivo:** Engajar os estudantes demonstrando o teto técnico do que é possível fazer com Python integrado à IA generativa. Causar o "efeito wow".

### Demonstrações ao Vivo:

| Jogo/Demo | Arquivo | O que destacar |
|-----------|---------|---------------|
| 🧱 **Tetris** | `Jogos/tetris_tkinter.py` | Matrizes, rotação de peças, física de queda. *"Tudo isso é lógica matemática traduzida em Python."* |
| 🐦 **Flappy Bird** | `Jogos/flappy_bird.py` | Gravidade, impulso de pulo, colisão com canos, placar salvo em disco. *"A IA calculou a física do voo."* |
| 🐍 **Cobrinha (Snake)** | `Jogos/cobrinha.py` | Grade 2D, crescimento ao comer, detecção de colisão. *"Parece simples, mas são 400 linhas de lógica."* |

### Ações do Tutor:
- Executar cada jogo por 30–60 segundos, jogando brevemente.
- Ao final, projetar o código do Flappy Bird por 5 segundos e dizer:
  > *"Parece assustador, né? Mas calma: tudo isso foi estruturado com ajuda da IA. Vocês não precisam decorar nada disso — vocês vão ENTENDER como funciona, passo a passo, ao longo das próximas aulas."*
- Conexão final:
  > *"A tecnologia que vocês usam no celular todo dia — jogos, apps, filtros — é feita assim: com código e lógica. Hoje vocês passam de consumidores a CRIADORES."*

---

## Bloco 4: Instrução Técnica — Engenharia de Prompt Inicial (15 min)

**Objetivo:** Ensinar a sintaxe básica de acionamento da IA e a diferença entre comandos pobres e comandos estruturados.

### O que é Inteligência Artificial? (3 min)
> *"A IA é como um estagiário que leu todos os livros do mundo, mas que SÓ responde se vocês perguntarem direito. Ela não lê mentes — ela precisa de instruções claras e detalhadas. A qualidade da resposta depende 100% da qualidade da sua pergunta."*

### O que é um Prompt? (2 min)
> *"Prompt é a ordem, a instrução que vocês dão para a IA. É o comando que faz ela trabalhar."*

### Os Três Pilares de um Bom Prompt (5 min)
| Pilar | O que é | Exemplo |
|-------|--------|---------|
| **Contexto** 🗺️ | Quem a IA deve ser e para que serve | *"Atue como um professor de Python para iniciantes"* |
| **Regras** 🛡️ | O que pode e o que NÃO pode fazer | *"Use apenas print e input, sem bibliotecas externas"* |
| **Formato** 📐 | Como quer o resultado | *"Entregue o código comentado linha por linha"* |

### Frameworks de Prompt (5 min)

#### Método P.R.R.E
- **P — Personagem:** Dê um papel de autoridade para a IA
- **R — Realizações:** Defina anos de experiência
- **R — Requisição:** O que você precisa exatamente
- **E — Exemplo:** Mostre um modelo do resultado esperado

#### Método P.R.O.M.P.T
- **P — Persona:** Quem ela é
- **R — Roteiro:** Qual a tarefa
- **O — Objetivo:** Propósito do resultado
- **M — Modelo:** Formato da resposta
- **P — Panorama:** Contexto da situação
- **T — Transformar:** Feedback para refinar

### Demonstração Prática — Prompt BOM vs RUIM:

#### Exemplos Visuais (projetar na tela):

**Imagens:**
- Imagem RUIM da Capivara (`Imagens/Imagem RUIM Capivara.jpeg`): Prompt vago gerou patas esquisitas, fundo sem sentido.
- Imagem BOA da Capivara (`Imagens/Imagem BOA Capivara.jpeg`): Prompt detalhado gerou iluminação e estilo fotográfico corretos.

**Vídeos:**
- Vídeo RUIM (`Vídeos/Video RUIM.mp4`): Morphing e deformações por falta de instrução.
- Vídeo BOM (`Vídeos/Video BOM.mp4`): Continuidade suave graças ao detalhamento do prompt.

**Códigos:**
| Tipo | Prompt | Resultado |
|------|--------|-----------|
| 💀 **Ruim** | *"Faça um jogo em Python"* | Código gigante com Pygame, janelas que travam, 10 bibliotecas |
| ✨ **Bom** | *"Crie um jogo de adivinhação de números em Python para rodar no terminal, use apenas print e input, com comentários em português"* | Código limpo, funcional, legível |

### Ações do Tutor:
- Solicitar que os alunos abram o ambiente de desenvolvimento/terminal.
- Validar **silenciosamente** se o script de captura de logs da pesquisa está rodando no plano de fundo de todas as máquinas.
- Ensinar o comando de terminal para acionar a IA (ex: `gemini "seu prompt aqui"`).

---

## Bloco 5: Dinâmica Prática — Dois Grupos + Hackathon de Jogos (50 min)

**Objetivo:** Fazer os alunos usarem a IA para gerar produtos funcionais, comparando prompts bons e ruins, e depois criar jogos autorais.

### Parte 1 — Dinâmica dos Dois Grupos: Bom vs Ruim (15 min)

Dividir a turma em dois blocos. Cada bloco recebe um prompt diferente para a mesma tarefa:

#### Tarefa 1: Desenho Visual
| Grupo | Prompt |
|-------|--------|
| 💀 RUIM | *"Faça um código em Python que desenhe um cachorro."* |
| ✨ BOM | *"Aja como um artista digital. Crie um programa em Python que mostre o desenho de um cachorro usando apenas letras, números e símbolos do teclado. O programa não pode tentar abrir janelas novas, o desenho tem que aparecer diretamente no texto da nossa tela preta (terminal)."* |

#### Tarefa 2: Sorteio de Alunos
| Grupo | Prompt |
|-------|--------|
| 💀 RUIM | *"Faça um programa de sorteio de alunos em Python."* |
| ✨ BOM | *"Crie um programa de texto em Python para decidir quem do grupo vai apresentar o trabalho de história primeiro. O programa deverá perguntar o nome de 3 alunos. Depois, ele deve escolher um deles por sorte. Regra de ouro: antes de revelar o nome do perdedor na tela preta, o programa deve avisar 'Sorteando...' e esperar por 3 segundos para fazer o suspense."* |

#### Tarefa 3: Criptografia de Mensagens
| Grupo | Prompt |
|-------|--------|
| 💀 RUIM | *"Faça um programa que criptografa mensagens."* |
| ✨ BOM | *"Crie um aplicativo de texto em Python para mandar mensagens secretas na sala de aula. O programa deve pedir para eu digitar uma frase normal. Depois, ele deve pegar essa frase e trocar todas as letras 'A' pelo símbolo '@' e todas as letras 'E' pelo número '3'. No final, mostre como ficou a mensagem disfarçada."* |

**Discussão pós-dinâmica (3 min):**
> *"Viram a diferença? O grupo que usou o prompt ruim provavelmente recebeu código quebrado ou complexo demais. O grupo do prompt bom recebeu exatamente o que pediu. A IA é tão boa quanto a sua instrução!"*

---

### Parte 2 — Hackathon Competitivo de Jogos (35 min)

#### Metodologia: Engenharia Reversa
> *"Como vamos trabalhar: A IA gera a estrutura, nós analisamos a lógica. O ciclo é: Gerar → Desmontar → Entender. Deixando de ser 'copiadores' para nos tornarmos 'inspetores'."*

#### Primeiros Conceitos de Código: print(), input() e Variáveis
Antes de começar o hackathon, ensinar os 3 pilares iniciais:
1. **`print()` — A voz do computador:** Mostra mensagens e textos na tela.
2. **`input()` — Os ouvidos do computador:** Faz uma pergunta e espera o usuário digitar a resposta.
3. **Variáveis — As caixas de memória:** Guardam as informações digitadas para usar mais tarde.

```python
# Exemplo ao vivo no Pydroid 3 / projetor:
nome = input("Qual é o seu nome, jogador? ")
print(f"🔥 Bem-vindo ao jogo, {nome}!")

# Hackeando a mensagem de Game Over
print("💀 GAME OVER!")
```
> *"Reparem como a caixa `nome` guarda o que você digitou e o `print()` usa esse nome depois! No hackathon, vocês vão identificar e personalizar os `print()` e `input()` do jogo de vocês!"*

#### O Desafio:
A turma escolhe **um entre três jogos** para gerar via prompt e personalizar:

| Opção | Jogo | Arquivo de Referência |
|-------|------|----------------------|
| 👾 Opção 1 | **Pac-Man de Turnos** | `Jogos/Pac-Man.py` |
| 🚢 Opção 2 | **Batalha Naval** | `Jogos/BatalhaNaval.py` |
| 🏫 Opção 3 | **Escape Room** | `Jogos/EscapeRoom.py` |

#### Prompts-Modelo para os Alunos:

**Pac-Man:**
```
Crie um jogo simples do Pac-Man em Python para rodar direto no terminal
usando apenas texto (caracteres ASCII). O mapa deve ter paredes (#),
pílulas (.) e o Pac-Man (C). O jogador move usando W, A, S, D.
O código deve ser simples, usar apenas a biblioteca padrão e ter
comentários explicando onde está cada parte do jogo.
```

**Batalha Naval:**
```
Atue como um professor de Python para iniciantes e crie um jogo de
Batalha Naval simples em modo texto para rodar no terminal.
Crie um tabuleiro de tamanho 4x4 representado por texto no terminal,
onde a água é marcada por '~'. Esconda 2 navios do computador em
posições aleatórias. O jogador tem 5 tentativas para acertar.
Use apenas 'random'. Insira comentários explicativos em português.
```

**Escape Room:**
```
Atue como um professor de programação Python e crie um jogo de Escape
Room interativo em texto para rodar diretamente no terminal. História:
Uma princesa precisa escapar de um castelo mágico para reencontrar
seus pais. Ela passa por 3 salas. O jogador interage digitando opções
numéricas. A princesa começa com 3 vidas. Inclua pelo menos um
desafio de charada. Adicione comentários curtos no código Python.
```

#### Fases da Competição:
1. **Construir o prompt perfeito** para gerar o jogo
2. **Fazer o código rodar liso** no terminal (é obrigatório que rode no TERMINAL apenas)
3. **"Hackear" os comandos `print`** para personalizar o jogo do seu grupo

#### Critérios de Vitória:
🏆 1. Rodar sem erros no terminal • 2. Qualidade do prompt utilizado • 3. Criatividade nos textos e mensagens hackeadas!

#### Dinâmica de Depuração:
Caso a IA gere um código com erro, o aluno **não deve tentar arrumar manualmente**. Deve copiar o erro, colar no prompt e pedir para a IA explicar e corrigir:
```
Meu código Python deu este erro: [COLAR O ERRO AQUI].
Explique o que fiz de errado em 2 frases e me dê o código corrigido.
```

### Ações do Tutor:
- Circular pelo laboratório destravando alunos que entrarem em loops de respostas incorretas com a IA.
- Quando o jogo estiver rodando, o monitor passa na mesa e faz a **pergunta pedagógica**:
  > *"Que legal que funcionou! Me mostra aqui no código onde está a linha que mostra a mensagem de Game Over?"*
- Isso garante que o aluno não apenas copiou, mas sabe localizar o `print()` no código.

---

## Bloco 6: Encerramento e Backup (10 min)

**Objetivo:** Salvar o progresso, validar a coleta de dados do dia e preparar o terreno para a próxima aula.

### Ações do Tutor:
- Verificar quais alunos conseguiram rodar o jogo com sucesso.
- Orientar o salvamento dos arquivos Python gerados.
- Garantir que a rotina de fechamento do laboratório faça a exportação do arquivo `.jsonl` com os logs das interações do dia para o repositório da pesquisa.

### Salvando os Chats com a IA:
1. Ir nos 3 pontinhos (⋯) do canto superior direito do chat do Gemini.
2. Selecionar "Compartilhar Conversa".
3. Clicar em "Copiar Link".
4. Colar o link no formulário de coleta:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSfP_wFBFI35Ombbv0kctuP5EAMBLqK2OpG78OmKXHBAT9x4lA/viewform
   ```

### Frase de Fechamento:
> *"Hoje vocês viram o que a ferramenta faz. Na próxima aula, começaremos a DESMONTAR o código para entender como o Python realmente pensa."*

---

## Resumo da Duração

| Bloco | Atividade | Duração |
|-------|-----------|---------|
| 1 | Abertura e Formalização (TCLE/TALE + Cadastro) | 10 min |
| 2 | Linha de Base — T0 (Perfil + Bebras + CPSES + IA) | 45 min |
| 3 | Showcase Tecnológico (Tetris, Flappy Bird, Cobrinha) | 20 min |
| 4 | Engenharia de Prompt Inicial (Bom vs Ruim + Frameworks) | 15 min |
| 5 | Dinâmica: Dois Grupos + Hackathon de Jogos | 50 min |
| 6 | Encerramento e Backup (Salvar chats + logs) | 10 min |
| **Total** | | **150 min (2h30)** |

---

## Conceitos de Programação Absorvidos

- [x] O que é Inteligência Artificial e como funciona
- [x] O que é um prompt e como estruturá-lo (Contexto + Regras + Formato)
- [x] Frameworks de prompt: P.R.R.E e P.R.O.M.P.T
- [x] O comando `print()` — a voz do computador
- [x] Leitura superficial de código Python
- [x] Depuração básica: copiar erro → colar no prompt → pedir correção

## Recursos Utilizados da Pasta do Projeto

| Recurso | Uso |
|---------|-----|
| `Jogos/tetris_tkinter.py` | Showcase (demonstração ao vivo) |
| `Jogos/flappy_bird.py` | Showcase (demonstração ao vivo) |
| `Jogos/cobrinha.py` | Showcase (demonstração ao vivo) |
| `Jogos/Pac-Man.py` | Hackathon (opção de jogo + referência) |
| `Jogos/BatalhaNaval.py` | Hackathon (opção de jogo + referência) |
| `Jogos/EscapeRoom.py` | Hackathon (opção de jogo + referência) |
| `Imagens/Imagem BOA Capivara.jpeg` | Demonstração de prompt bom (imagem) |
| `Imagens/Imagem RUIM Capivara.jpeg` | Demonstração de prompt ruim (imagem) |
| `Imagens/Imagem BOA Lanche.jpeg` | Demonstração de prompt bom (imagem) |
| `Imagens/Imagem RUIM Lanche.jpeg` | Demonstração de prompt ruim (imagem) |
| `Vídeos/Video BOM.mp4` | Demonstração de prompt bom (vídeo) |
| `Vídeos/Video RUIM.mp4` | Demonstração de prompt ruim (vídeo) |
| Slides Netlify | Apresentação visual completa de 12 slides |
| Formulário Google (cadastro) | Presença e certificação |
| Formulário Google (chats) | Coleta dos links de conversa com IA |

## Vínculo com a Pesquisa

- **Artigo 1 (Crossover):** O pré-teste T0 (Bloco 2) estabelece a linha de base para o cálculo do ΔPC e ΔCPSES. Ao final desta aula, definir a randomização estratificada dos Grupos A e B.
- **Artigo 2 (DBR / Learning Analytics):** Os primeiros logs de prompt (Bloco 5) iniciam a captura de dados para a taxonomia P1–P5 e o Índice de Iteração de Depuração (DII).

## Links Importantes

- **Portfólio do Projeto:** https://github.com/Victorzanaroli/FAPEMING-Project
- **Slides do Projeto:** https://victorzanaroli.github.io/FAPEMING-Project/
- **Questionário Alunos (Cadastro + T0):** https://docs.google.com/forms/d/1cti5P6zpnqMxsRky83t9_mzwyhQPSM-l3XNMAq9LNyU/edit
- **Formulário de Coleta dos Chats:** https://docs.google.com/forms/d/e/1FAIpQLSfP_wFBFI35Ombbv0kctuP5EAMBLqK2OpG78OmKXHBAT9x4lA/viewform

---

## Material Didático Complementar

### ⚡ Quiz de Aquecimento (Para o início da Aula 02)

#### ❓ Pergunta 1: Verdadeiro ou Falso?
A Inteligência Artificial (IA) é como um telepata superpoderoso: ela lê seus pensamentos e descobre exatamente o jogo que você quer criar, mesmo se você só pedir "faça um jogo legal".
* [ ] Verdadeiro
* [ ] Falso

#### ❓ Pergunta 2: Múltipla Escolha
Você quer pedir para a IA criar uma mensagem de vitória para o seu jogo de corrida. Qual dos prompts abaixo segue a regra de ouro de um **BOM Prompt** (Contexto + Regras + Formato)?
* A) *"Manda uma frase top aí de quando ganha no jogo."*
* B) *"Atue como um narrador de e-sports empolgado. Crie uma frase de vitória em Python usando apenas print(), sem usar palavrões e em uma única linha."*
* C) *"Faça um jogo de corrida completo 3D tipo Need for Speed com gráficos em 4K e mod de física realista agora."*
* D) *"Por favor IA, meu consagrado, seja legal e adivinhe o que eu quero."*

#### ❓ Pergunta 3: Encontre o Erro! 🔍
Um aluno tentou personalizar a mensagem de vitória do seu jogo no terminal, mas o código deu um erro feio:
```python
print("🔥 VOCÊ VENCEU, BRUNO! CHORA MAIS!
```
**Qual é o erro óbvious nesse código e como corrigir?**

---

#### 🔑 Gabarito Comentado (Para o Tutor)
1. **FALSO!** ❌ A IA é como um estagiário inteligente, mas que não lê mentes! Prompts vagos geram respostas sem sentido ou complexas demais.
2. **Alternativa B!** 🎯 Possui Contexto (*narrador de e-sports*), Regras (*apenas print, sem palavrões*) e Formato (*uma linha*). A opção C é absurda para o terminal.
3. **Faltou fechar as aspas no final do texto!** 🛑 No Python, a frase entre aspas dentro do `print()` precisa ser fechada (`print("texto")`), senão o computador não sabe onde a mensagem termina.
