# 🎮 Roteiro de Aula — Aula 02 (Trilha Mobile)
## Variáveis, Tipos de Dados e Tomada de Decisão (`if`, `elif`, `else`)

**Duração total:** 180 minutos (3h00) — **Horário:** 15h00 às 18h00
**Público-alvo:** Estudantes do Ensino Médio
**Ferramenta de execução:** VS Code (desktop) + IA (Gemini/ChatGPT) como auxiliar de código

> **🔑 Legenda do Roteiro:**
> - `[SLIDE]` → Projetar no telão (conceito visual/teórico)
> - `[IDE]` → Abrir o VS Code e digitar ao vivo (alunos copiam junto)
> - `[❓ ENGAJAMENTO]` → Jogar a pergunta para a turma, aguardar respostas
> - `[⏱️]` → Marcação de tempo estimado para o bloco

---

## 📅 Grade de Horários

| Bloco | Atividade | Duração | Horário |
|-------|-----------|---------|---------|
| 1 | Abertura + **Nivelamento** (quem não veio na Aula 1) | 20 min | 15h00 – 15h20 |
| 2 | Aula Expositiva: Tipos e Condicionais — Live Coding Incremental | 35 min | 15h20 – 15h55 |
| 3 | Engenharia Reversa Guiada no VS Code | 20 min | 15h55 – 16h15 |
| **☕** | **Intervalo / Pausa para Lanche** | **15 min** | **16h15 – 16h30** |
| 4 | Prática com IA: Missões com Prompts Dinâmicos (`if/elif/else`) | 55 min | 16h30 – 17h25 |
| 5 | Prompting Condicional e Testes de Estresse | 20 min | 17h25 – 17h45 |
| 6 | Encerramento e Backup dos Scripts | 15 min | 17h45 – 18h00 |
| **Total** | | **180 min (3h00)** | **15h00 – 18h00** |

---

## 🟢 Bloco 1: Abertura e Nivelamento — "Todo Mundo na Mesma Página" (20 min)

> **Objetivo:** Garantir que todos — inclusive os **novatos** que não vieram na Aula 1 — entendam os três pilares: `print()`, `input()` e variáveis.

### ⏱️ [0–3 min] Boas-vindas

Receba os alunos enquanto abrem o VS Code. Projete no telão:

```
"Hoje o computador vai aprender a PENSAR com a gente."
```

Diga:
> *"Gente, sejam bem-vindos à Aula 2! Antes de entrarmos no conteúdo novo, vou fazer um resgate rápido da última aula — quem veio vai lembrar, quem não veio vai aprender agora. Todo mundo estará no mesmo nível em 10 minutos, prometido!"*

---

### ⏱️ [3–13 min] Nivelamento Expresso — Os 3 Pilares do Python

`[SLIDE]` — Projete a tabela abaixo no telão:

---

**🧱 OS 3 PILARES QUE USAREMOS HOJE**

| Ferramenta | Analogia | O que faz |
|------------|----------|-----------|
| `print()` | 🔊 **Alto-falante** do computador | Mostra texto na tela |
| `input()` | 🎤 **Microfone** do computador | Lê o que o usuário digita |
| Variável | 📦 **Caixa com nome** | Guarda uma informação para usar depois |

---

Explique em voz alta:
> *"O `print()` é a voz do computador — é ele quem fala com a gente. O `input()` são os ouvidos — é ele quem escuta o que a gente digita. E a variável é a mochila do computador — ela guarda as coisas para usar depois."*

`[❓ ENGAJAMENTO]`
> **"Quem lembra o que a gente fez no VS Code na semana passada?"**
> *(Deixe 2–3 alunos responderem. Valorize toda resposta!)*

---

`[IDE]` — **LIVE CODING: Nivelamento em 4 linhas (alunos copiam junto)**

Abra o VS Code, crie `nivelamento.py` e **digite devagar**:

```python
# Meu primeiro programa: o computador me conhece!
nome = input("Qual é o seu nome? ")
idade = input("Quantos anos você tem? ")
print(f"Olá, {nome}! Você tem {idade} anos. Que incrível!")
```

**Roteiro de fala enquanto digita:**
- Ao escrever `nome = input(...)`: *"Estou criando uma caixinha chamada `nome` e pedindo para o usuário preencher ela digitando algo."*
- Ao escrever `print(f"...")`: *"O `f` antes das aspas é mágica: ele deixa a gente colocar o conteúdo das caixinhas dentro da frase com `{}`!"*

Rode o código (`F5` ou terminal: `python nivelamento.py`). Mostre o resultado.

`[❓ ENGAJAMENTO]`
> **"O que acontece se eu deletar o `f` antes das aspas no `print()`? Alguém chuta?"**
> *(Execute sem o `f` ao vivo — `{nome}` vai aparecer como texto literal. Efeito uau garantido!)*

---

### ⏱️ [13–20 min] Conectando com o conteúdo de hoje

`[SLIDE]` — Projete no telão:

```
print()  →  O computador FALA
input()  →  O computador ESCUTA
if/else  →  O computador PENSA e DECIDE  ← Isso é hoje!
```

Diga:
> *"Hoje vamos adicionar o terceiro poder ao nosso programa: a capacidade de TOMAR DECISÕES. Um programa que só fala e escuta é como um papagaio. Com o `if`, ele começa a PENSAR!"*

---

## 🔵 Bloco 2: Live Coding Incremental — `if`, `elif` e `else` (35 min)

> **Objetivo:** Ensinar condicionais em **3 passos progressivos**, com temática de redes sociais. Os alunos digitam junto no VS Code.

### ⏱️ [0–5 min] Tipos de Dados e Conversão

`[SLIDE]` — Tabela de tipos:

| Tipo | O que guarda | Exemplo | Como obter do `input()` |
|------|-------------|---------|------------------------|
| `str` | Texto | `"Ana"`, `"sim"` | Padrão (não precisa converter) |
| `int` | Número inteiro | `16`, `100` | `int(input(...))` |
| `float` | Número decimal | `1.75`, `9.5` | `float(input(...))` |

`[❓ ENGAJAMENTO]`
> **"Por que o `input()` não retorna número automaticamente? O que acontece se eu somar dois `input()` sem converter?"**
> *(Execute ao vivo: `print(input("N1: ") + input("N2: "))` — o Python concatena "5"+"3"="53" em vez de 8. Causa o "eita!" da turma!)*

---

### ⏱️ [5–12 min] PASSO 1 — Só o `if`

`[IDE]` — Crie `decisao_passo1.py`:

```python
# PASSO 1: if simples
# Temática: Você tem seguidores suficientes para ser influencer?

seguidores = int(input("Quantos seguidores você tem? "))

if seguidores >= 10000:
    print("🌟 Você é INFLUENCER! Manda DM para as marcas!")
```

**Roteiro de fala:**
- *"Notem a indentação — esse espaço no começo da linha dentro do `if` é OBRIGATÓRIO no Python. É assim que ele sabe o que pertence ao `if`."*
- Rode com >= 10000 e depois com um valor menor.

`[❓ ENGAJAMENTO]`
> **"O que acontece quando digito 5000? O programa não mostra nada. Por quê?"**
> *(Resposta esperada: não tem `else`. Use isso para criar a ponte para o Passo 2!)*

---

### ⏱️ [12–22 min] PASSO 2 — `if` + `else`

`[IDE]` — Crie `decisao_passo2.py` (evolução do mesmo código):

```python
# PASSO 2: if + else
# Agora o programa tem resposta para QUALQUER entrada

seguidores = int(input("Quantos seguidores você tem? "))

if seguidores >= 10000:
    print("🌟 Você é INFLUENCER! Manda DM para as marcas!")
else:
    print("📈 Ainda não... Mas continua postando, você chega lá!")
```

**Roteiro de fala:**
- *"O `else` é o plano B. Se a condição do `if` for falsa, o Python executa o `else`. Agora o programa sempre dá uma resposta!"*
- Rode com vários valores diferentes.

`[❓ ENGAJAMENTO]`
> **"E se eu quiser separar quem tem entre 1.000 e 9.999 de quem tem 0? Como faço com só um `if/else`?"**
> *(Deixe a turma pensar. Depois: "Não dá fácil... mas existe o `elif`!")*

---

### ⏱️ [22–35 min] PASSO 3 — `if` + `elif` + `else` (Forma completa)

`[IDE]` — Crie `decisao_passo3.py` (evolução final):

```python
# PASSO 3: if + elif + else — Versão completa!
# Classificador de perfil nas redes sociais

seguidores = int(input("Quantos seguidores você tem? "))

if seguidores >= 100000:
    print("🏆 MEGA INFLUENCER! Você é uma celebridade digital!")
elif seguidores >= 10000:
    print("🌟 Influencer confirmado! As marcas querem você!")
elif seguidores >= 1000:
    print("📱 Microinfluencer em ascensão. Continue assim!")
else:
    print("🌱 Conta nova! Todo grande influencer começou do zero.")
```

**Roteiro de fala:**
- *"O `elif` é 'else if' — uma nova condição verificada SOMENTE se a anterior foi falsa. O Python testa de cima para baixo e para quando encontra a primeira verdadeira."*
- *"Posso ter quantos `elif` quiser entre o `if` e o `else`."*
- Rode com 0, 500, 5000, 50000 e 500000 para mostrar cada caminho.

`[❓ ENGAJAMENTO]`
> **"Se eu digitar 10000, qual bloco vai rodar: o `if` ou o primeiro `elif`?"**
> *(Resposta: o `if >= 100000` é falso, então vai para o `elif >= 10000` que é verdadeiro. Explique a ordem!)*

---

## 🟡 Bloco 3: Engenharia Reversa Guiada no VS Code (20 min)

> **Objetivo:** Os alunos leem e ENTENDEM um código pronto, identificando onde o `if/else` decide — sem precisar digitar tudo do zero.

`[SLIDE]` — Projete no telão:

```
🔍 MISSÃO: Você é um DETETIVE DE CÓDIGO.
Encontre onde o programa toma cada decisão.
```

`[IDE]` — Projete o VS Code com o código abaixo. Os alunos leem e respondem às perguntas:

```python
# Jogo: Porta Secreta
print("=== BEM-VINDO AO LABIRINTO MÁGICO ===")
print("Você está em uma sala com 3 portas.")

escolha = input("Qual porta você abre? (1, 2 ou 3): ")

if escolha == "1":
    print("🗝️  Você encontrou a Chave Dourada! +50 pontos!")
elif escolha == "2":
    pontos = int(input("Uma charada! Quanto é 7 x 8? "))
    if pontos == 56:
        print("✅ Correto! Você encontrou um mapa do tesouro!")
    else:
        print("❌ Errado! Um fantasma te assombra... -10 pontos.")
elif escolha == "3":
    print("🐉 DRAGÃO! Você perdeu uma vida!")
else:
    print("⚠️  Porta inválida! O labirinto não aceita essa opção.")
```

`[❓ ENGAJAMENTO]` → **"Quantas condições `if/elif/else` existem?"** *(4 — if, dois elif, um else)*

`[❓ ENGAJAMENTO]` → **"O que acontece se o aluno digitar 'A' em vez de 1, 2 ou 3?"** *(Cai no `else` final)*

`[❓ ENGAJAMENTO]` → **"Tem um `if` dentro de outro `if` na porta 2. Como chamamos isso?"** *(If aninhado)*

`[❓ ENGAJAMENTO]` → **"Se eu mudar `==` por `!=` na linha `if escolha == "1"`, o que muda na lógica?"**

---

## ☕ Intervalo — 15 minutos (16h15 – 16h30)

Antes de liberar, projete no telão:

```
☕ INTERVALO!
Quando voltar: você vai criar seu PRÓPRIO programa com IA.
Deixe o VS Code aberto. 🎮
```

---

## 🟠 Bloco 4: Prática com IA — Missões com `if/elif/else` (55 min)

> **Objetivo:** Os alunos usam a IA (Gemini/ChatGPT) para gerar e personalizar scripts Python com `if/elif/else`, rodando no VS Code.

### ⏱️ [0–10 min] Instrução: Como usar a IA como parceira

`[SLIDE]` — Projete no telão:

```
🤖 REGRAS DO JOGO COM A IA:
1. A IA gera o código — você ENTENDE e TESTA.
2. Se der erro → copie o erro → cole na IA → peça a correção.
3. Não copie sem ler. Seja o DETETIVE, não o copista!
```

**Rotina de depuração** (projetar enquanto os alunos trabalham):

```
🐛 DEU ERRO? Siga os passos:
1. Leia a mensagem de erro
2. Copie o erro completo
3. Cole na IA com o prompt:
   "Meu código Python deu este erro: [COLE O ERRO].
    Explique o que está errado em 2 frases
    e me dê o código corrigido."
4. Substitua o código, salve (Ctrl+S) e rode de novo.
```

---

### ⏱️ [10–55 min] Escolha sua Missão! (projete as 3 opções)

---

#### 🎲 MISSÃO A — O Mestre de RPG *(para quem curte jogos e aventura)*

**Prompt para copiar na IA:**
```
Atue como um Mestre de RPG de texto sombrio e misterioso.
Crie um programa Python para rodar no VS Code (terminal) com estas regras:
1. Peça o nome do herói com input().
2. Apresente uma situação de perigo com 3 escolhas numeradas (input()).
3. Use if/elif/else para dar 3 destinos: vitória, derrota, item secreto.
4. Use print() com emojis para tornar o texto dramático.
5. Código simples, sem bibliotecas externas, máximo 20 linhas.
Escreva os comentários em português explicando cada bloco.
```

**Desafio extra:** Peça à IA para adicionar uma variável `pontos` que sobe na vitória e cai na derrota, e ao final use `if/elif/else` para dar um título ao herói.

---

#### 🧠 MISSÃO B — O Avaliador de Quiz *(para quem curte desafios)*

**Prompt para copiar na IA:**
```
Atue como um apresentador animado de quiz, estilo "Show do Milhão".
Crie um programa Python para rodar no terminal do VS Code com estas regras:
1. Peça o nome do participante com input().
2. Crie uma variável pontos = 0.
3. Faça 3 perguntas de cultura pop (séries, músicas, games).
4. Para cada resposta, use if/else: acerto soma 1 ponto; erro mostra resposta certa.
5. No final, use if/elif/else para dar um título:
   - 3 pontos: "🏆 Gênio Pop!"
   - 2 pontos: "😎 Quase lá!"
   - 1 ponto: "📚 Maratone mais séries!"
   - 0 pontos: "😅 Sai de debaixo da pedra!"
6. Máximo 25 linhas, sem bibliotecas externas.
```

**Desafio extra:** Peça à IA para personalizar as perguntas com tema da sua escola ou cidade!

---

#### 🌡️ MISSÃO C — O Assistente Inteligente *(para quem curte apps úteis)*

**Prompt para copiar na IA:**
```
Atue como desenvolvedor sênior de apps Python.
Crie um assistente pessoal no terminal do VS Code com estas regras:
1. Peça o nome do usuário com input().
2. Peça a temperatura atual em graus Celsius com int(input()).
3. Peça se está chovendo: sim ou não (input()).
4. Use if/elif/else com "and" e "or" para dar recomendações:
   - Quente E sem chuva: roupa leve e óculos de sol.
   - Quente E com chuva: roupa leve + guarda-chuva.
   - Frio E sem chuva: casaco e calça.
   - Frio E com chuva: casaco pesado + bota + guarda-chuva.
5. Finalize com uma frase motivacional com o nome do usuário.
6. Máximo 20 linhas, sem bibliotecas externas.
```

**Desafio extra:** Peça à IA para perguntar o humor do usuário (`sim/não`) e adaptar a frase motivacional.

---

### 🎯 Perguntas Pedagógicas do Monitor (circular pela sala)

Quando o código estiver rodando, o monitor se aproxima e faz **uma** destas perguntas:

`[❓ ENGAJAMENTO]` → *"Me mostra onde está a parte que decide qual título o usuário ganha?"*

`[❓ ENGAJAMENTO]` → *"Se eu digitar um número negativo, o que acontece? Testa!"*

`[❓ ENGAJAMENTO]` → *"Você consegue apontar o `elif`? Me explica o que ele faz com suas palavras."*

`[❓ ENGAJAMENTO]` → *"O que você mudaria para adicionar uma quarta opção de escolha?"*

---

## 🟣 Bloco 5: Prompting Condicional e Testes de Estresse (20 min)

> **Objetivo:** Os alunos testam os limites do próprio código pensando como "usuário mal-intencionado".

`[SLIDE]` — Projete no telão:

```
🔨 TESTE DE ESTRESSE: Tente QUEBRAR o seu próprio código!
Computadores são literais. Eles fazem EXATAMENTE o que você manda.
```

| Teste | O que digitar | O que observar |
|-------|--------------|----------------|
| 🔡 Texto onde espera número | `"abc"` quando pede `int(input())` | Vai dar `ValueError`! |
| 📭 Campo vazio | Apertar Enter sem digitar nada | O que acontece? |
| 🔠 Maiúscula vs minúscula | `"Sim"` vs `"sim"` vs `"SIM"` | O `if` diferencia! |
| 🔢 Números extremos | `-1`, `0`, `999999` | Alguma condição cobre todos? |

`[❓ ENGAJAMENTO]`
> **"O que aconteceu quando você digitou texto onde esperava número? Que erro apareceu?"**
> *(Após as respostas: "Nas próximas aulas aprenderemos `try/except` para tratar isso. Por enquanto a IA já pode ajudar!")*

**Prompt de melhoria para a IA:**
```
Meu código Python deu erro quando o usuário digitou texto
onde eu esperava um número inteiro.
Como posso usar try/except para tratar esse erro de forma simples?
Me mostre o exemplo aplicado ao meu código.
```

---

## 🔴 Bloco 6: Encerramento e Backup dos Scripts (15 min)

### ⏱️ [0–8 min] Salvamento no VS Code

`[SLIDE]` — Projete as instruções:

```
💾 COMO SALVAR SEU SCRIPT:

1. No VS Code: Ctrl + S
2. Nome do arquivo: quiz_[seunome].py
3. Salve em: Documentos > TRILHANDO > Aula02

📋 BACKUP DO CHAT COM A IA:
1. Copie o link da conversa
2. Cole no formulário de coleta (link abaixo)
```

### ⏱️ [8–12 min] Salvando o Chat com a IA

**Se usar o Gemini:**
1. Clique nos 3 pontinhos (⋯) no canto superior direito.
2. Selecione "Compartilhar Conversa".
3. Clique em "Copiar Link".
4. Cole no formulário:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSfP_wFBFI35Ombbv0kctuP5EAMBLqK2OpG78OmKXHBAT9x4lA/viewform
   ```

### ⏱️ [12–15 min] Encerramento

`[SLIDE]` — Projete no telão:

```
🎯 O QUE VOCÊS APRENDERAM HOJE:

✅ print()  → O computador FALA
✅ input()  → O computador ESCUTA
✅ if       → O computador DECIDE
✅ elif     → O computador tem MAIS OPÇÕES
✅ else     → O computador tem um PLANO B

🚀 NA PRÓXIMA AULA: Laços de Repetição (while e for)
   → O computador vai aprender a REPETIR ações!
```

**Frase de fechamento:**
> *"Hoje vocês ensinaram o computador a pensar. Ele não é mais só um papagaio — ele toma decisões baseadas em dados. Isso é a essência da programação. Guardem o código: ele será o ponto de partida da próxima aula. Parabéns!"*

`[❓ ENGAJAMENTO]` — Rodada rápida de fechamento:
> **"Me fala em UMA palavra o que você achou da aula de hoje!"**
> *(Cada aluno fala uma palavra: "incrível", "difícil", "legal", "confuso" — acolha tudo!)*

---

## ✅ Conceitos de Programação Absorvidos

- [x] Variáveis e conversão de tipos (`str`, `int`, `float`) no VS Code
- [x] Leitura de dados com `input()`
- [x] Condicional simples (`if`)
- [x] Condicional com alternativa (`if/else`)
- [x] Condicional múltipla (`if/elif/else`)
- [x] Operadores relacionais (`==`, `!=`, `>`, `<`, `>=`, `<=`)
- [x] Operadores lógicos (`and`, `or`)
- [x] Uso da IA como parceira de geração e depuração de código
- [x] Teste de estresse e mentalidade de QA (verificação de falhas)

---

## 🔑 Gabarito de Respostas — Para o Tutor

| Pergunta de Engajamento | Resposta Esperada |
|------------------------|-------------------|
| O que acontece se deletar o `f` do f-string? | `{nome}` aparece como texto literal, sem substituição |
| O que acontece se digitar texto onde espera `int()`? | `ValueError: invalid literal for int()` |
| `"Sim"` vs `"sim"` — o `if == "sim"` diferencia? | **Sim!** Python é case-sensitive |
| O que o `elif` faz diferente do `if`? | `elif` só é verificado se o `if` anterior for falso |
| Quantos `elif` posso ter? | Quantos quiser — não tem limite! |
| O que é indentação e por que é obrigatória? | Recuo (4 espaços/Tab) que delimita blocos no Python |

---

### 🏠 Micro-Missão de Casa (Para entregar na Aula 3)

> **Escolha UMA das duas opções abaixo para realizar no VS Code (10 a 15 min):**

#### 🎮 Opção A — "O Classificador de Gamer"
**Tarefa:** Crie no VS Code um script que pede a idade e as horas de jogo por dia. Use `if/elif/else` para classificar em:
- `"🏆 Pro Player"` → mais de 6h
- `"🎮 Gamer Casual"` → entre 2h e 6h
- `"📚 Foco nos Estudos!"` → menos de 2h

**Prompt para a IA:**
```
Atue como professor de Python para iniciantes.
Crie um classificador de gamer que pede idade e horas de jogo
e usa if/elif/else para dar um perfil.
Máximo 10 linhas, só print e input, sem bibliotecas.
```

#### 🌦️ Opção B — "O Assistente de Vestuário Inteligente"
**Tarefa:** Crie no VS Code um programa que pede a temperatura (`int(input())`) e se está chovendo (`sim/não`). Use `if/elif/else` com `and`/`or` para recomendar o look ideal.

**Prompt para a IA:**
```
Crie um assistente de moda em Python para terminal.
Ele pergunta a temperatura (int) e se está chovendo (sim/não).
Usa if/elif/else com and/or para dar dicas de roupa.
Máximo 15 linhas.
```

---

## 🔗 Links Importantes

- **Portfólio do Projeto:** https://github.com/Victorzanaroli/FAPEMING-Project
- **Formulário de Coleta dos Chats:** https://docs.google.com/forms/d/e/1FAIpQLSfP_wFBFI35Ombbv0kctuP5EAMBLqK2OpG78OmKXHBAT9x4lA/viewform
