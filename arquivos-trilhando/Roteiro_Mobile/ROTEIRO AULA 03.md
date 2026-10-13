# 🔁 Roteiro de Aula — Aula 03 (Trilha Mobile)
## Tratamento de Erros (`try/except`) + Repetição (`while`, `for`)

**Data:** 30 de setembro de 2026 (quarta-feira) — **Horário:** 15h00 às 18h00  
**Duração total:** 180 minutos (3h00)  
**Público-alvo:** Estudantes do Ensino Médio  
**Ferramenta de execução:** VS Code (desktop) / Pydroid 3 + IA (Gemini/ChatGPT) como auxiliar de código  
**Pré-requisitos da aula anterior:** Variáveis, tipos de dados (`str`, `int`, `float`), `print()`, `input()`, `if/elif/else`

> **🔑 Legenda do Roteiro:**
> - `[SLIDE]` → Projetar no telão (conceito visual/teórico)
> - `[IDE]` → Abrir o VS Code e digitar ao vivo (alunos copiam junto)
> - `[❓ ENGAJAMENTO]` → Jogar a pergunta para a turma, aguardar respostas
> - `[⏱️]` → Marcação de tempo estimado para o bloco

---

## 📅 Grade de Horários

| Bloco | Atividade | Duração | Horário |
|-------|-----------|---------|---------|
| 1 | **⚡ Quiz da Aula Anterior** — Resgate da Aula 02 | 15 min | 15h00 – 15h15 |
| 2 | **⌨️ Digitando Enquanto Acompanha na Lousa**: `try/except`, `while` e `for` + **Mini Exercícios Pós-Teoria** | 35 min | 15h15 – 15h50 |
| 3 | **🔍 Analisar um Código Pronto** (Engenharia Reversa Guiada no VS Code) | 25 min | 15h50 – 16h15 |
| **☕** | **Intervalo / Pausa para Lanche** | **15 min** | **16h15 – 16h30** |
| 4 | **🤖 3 Exercícios Práticos Solo / Engenharia Reversa com IA** (Desafio do Dia - Missões A, B e C) | 50 min | 16h30 – 17h20 |
| 5 | **🔨 Quebrando o Código para Investigar Erros** (Teste de Estresse & Debugging) | 25 min | 17h20 – 17h45 |
| 6 | **🎯 Resumão e Conclusão das Sintaxes Aprendidas no Dia** + Micro-Tarefa de Casa Semanal | 15 min | 17h45 – 18h00 |
| **Total** | | **180 min (3h00)** | **15h00 – 18h00** |

---

## 🟢 Bloco 1: Quiz da Aula Anterior e Abertura (15 min)

> **Objetivo:** Ativar os conceitos de condicionais (`if/elif/else`) e conversão de tipos aprendidos na Aula 02 de forma interativa.

### ⏱️ [0–3 min] Boas-vindas

Projete no telão:
```
"Hoje nosso código vai aprender a REPETIR sem cansar e a SE DEFENDER de erros!"
```

Diga:
> *"Sejam bem-vindos à Aula 3! Nas aulas anteriores ensinamos o computador a falar, ouvir e tomar decisões. Hoje vamos dar a ele superpoderes de resiliência com o `try/except` e a capacidade de fazer tarefas repetitivas em milissegundos com `while` e `for`!"*

---

### ⏱️ [3–15 min] ⚡ Quiz da Aula 02

`[SLIDE]` — Projete as perguntas no telão uma a uma. Deixe a turma responder em voz alta antes de revelar o gabarito.

#### ❓ Pergunta 1: Verdadeiro ou Falso?
> *"O `input()` sempre retorna um número quando o usuário digita um dígito, então posso somar dois `input()` direto sem converter."*
- [ ] Verdadeiro
- [ ] Falso

**🔑 Gabarito:** **FALSO!** ❌ O `input()` SEMPRE retorna `str` (texto). `"5" + "3"` = `"53"` e não `8`. Por isso precisamos do `int()` ou `float()`.

---

#### ❓ Pergunta 2: Múltipla Escolha
O código abaixo vai gerar qual resultado na tela?
```python
nota = int(input("Sua nota: "))
if nota >= 7:
    print("✅ Aprovado!")
elif nota >= 5:
    print("📋 Recuperação")
else:
    print("❌ Reprovado")
```
Se o aluno digitar `5`, o programa imprime:
- A) `✅ Aprovado!`
- B) `📋 Recuperação`
- C) `❌ Reprovado`
- D) Não imprime nada

**🔑 Gabarito:** **Alternativa B!** 🎯 `5 >= 7` é falso, então cai no `elif nota >= 5` que é **verdadeiro**.

---

#### ❓ Pergunta 3: Encontre o Erro! 🔍
```python
idade = input("Quantos anos você tem? ")
if idade >= 18:
    print("Você é maior de idade!")
```
**Qual é o problema e como corrigir?**

**🔑 Gabarito:** O `input()` retorna texto (`str`) e não dá para comparar texto com número (`>=`). Corrigir com `idade = int(input("Quantos anos você tem? "))`.

`[❓ ENGAJAMENTO]`
> **"E o que acontece se o usuário digitar 'dezoito' por extenso? O programa roda ou quebra? Vamos ver hoje como impedir essa quebra!"**

---

## 🔵 Bloco 2: Digitando Enquanto Acompanha na Lousa + Mini Exercícios (35 min)

> **Objetivo:** Os alunos acompanham o professor no VS Code digitando os conceitos de `try/except`, `while` e `for` em blocos curtos, seguido de mini exercícios de fixação imediata.

### ⏱️ [0–12 min] Teoria na Lousa + Live Coding 1: `try/except`

`[SLIDE]` — Projete a estrutura visual:
```
try:
    # Código que PODE dar erro ao converter ou dividir
except:
    # Código que RODA se der erro (Plano B)
```

`[IDE]` — Crie o arquivo `aula03_try.py`. **Alunos digitam juntos**:

```python
# 🛡️ Testando a blindagem contra erros de entrada
try:
    idade = int(input("Digite sua idade em números: "))
    print(f"Ano que vem você terá {idade + 1} anos!")
except ValueError:
    print("⚠️ Ei! Você precisa digitar um número inteiro válido (ex: 16).")
```

**Roteiro de fala enquanto digita:**
- *"Observem a palavra `try:` — ela avisa o Python: 'tente rodar isso aqui'. Se o usuário digitar 'quinze' em texto, o `int()` falha. Mas em vez de fechar o programa com uma tela vermelha de erro, o Python pula direto para o `except ValueError:`!"*

`[❓ ENGAJAMENTO]`
> **"Se eu digitar 20, o bloco `except` vai ser executado?"** *(Não, o except é pulado!)*

---

### ⏱️ [12–25 min] Teoria na Lousa + Live Coding 2: Laços `while` e `for`

`[SLIDE]` — Projete a diferença na lousa:
- `while` → **Enquanto** uma condição for verdadeira (útil para menus e tentativas ilimitadas).
- `for` → **Para cada** elemento em uma sequência/contagem determinada.

`[IDE]` — Crie o arquivo `aula03_loops.py`. **Alunos digitam juntos**:

```python
# 1. Loop WHILE: Repetir até acertar a senha
senha_correta = "python123"
tentativa = ""

while tentativa != senha_correta:
    tentativa = input("🔑 Digite a senha secreta: ")
    if tentativa != senha_correta:
        print("❌ Senha incorreta! Tente novamente.")

print("🔓 Acesso liberado com sucesso!\n")

# 2. Loop FOR: Contagem regressiva de lançamento
print("🚀 Lançamento em:")
for segundo in range(5, 0, -1):
    print(f"{segundo}...")
print("💥 DECOLAR!")
```

---

### ⏱️ [25–35 min] 🧩 Mini Exercícios Práticos Pós-Teoria (Alunos fazem agora na IDE)

Projete os 3 desafios rápidos na lousa (5 min para os alunos tentarem, 5 min para correção ao vivo):

1. **Mini Desafio 1:** Crie um `try/except` que peça a altura (ex: `1.75`) com `float(input())`. Se o usuário digitar texto, mostre "Digite usando ponto!".
2. **Mini Desafio 2:** Crie um `while` que imprima os números de 1 até 5 no terminal.
3. **Mini Desafio 3:** Crie um `for` usando `range(1, 4)` que imprima "Minha mensagem nº X".

`[IDE]` — **Gabarito rápido projetado pelo tutor:**
```python
# Solução rápida 1
try:
    altura = float(input("Sua altura: "))
    print(f"Altura: {altura}m")
except ValueError:
    print("Digite usando ponto!")

# Solução rápida 2
cont = 1
while cont <= 5:
    print(cont)
    cont += 1

# Solução rápida 3
for i in range(1, 4):
    print(f"Minha mensagem nº {i}")
```

---

## 🟡 Bloco 3: Analisar um Código Pronto — Engenharia Reversa (25 min)

> **Objetivo:** Inspecionar e compreender a arquitetura de um código pronto que junta `try/except`, `while` e `if/else`, desenvolvendo a habilidade de leitura de código.

`[SLIDE]` — Projete a missão no telão:
```
🔍 MISSÃO DETETIVE: Analise o código abaixo sem executar primeiro.
Descubra onde o loop se repete, onde o erro é tratado e como o usuário sai!
```

`[IDE]` — Projete o código `arcade_passatempo.py` e peça aos alunos que abram ou leiam na tela:

```python
# === ARCADE PASSATEMPO DE PYTHON ===
vidas = 3
pontos = 0

print("🎮 BEM-VINDO AO DESAFIO DA SORTE!")

while vidas > 0:
    print(f"\n❤️ Vidas: {vidas} | ⭐ Pontos: {pontos}")
    try:
        chute = int(input("Adivinhe o número secreto (1 a 5): "))
        
        if chute < 1 or chute > 5:
            print("⚠️ Número fora do intervalo (1 a 5)!")
            continue  # Volta para o início do loop sem perder vida
            
        if chute == 3:
            print("🎉 ACERTOU! Você ganhou 100 pontos!")
            pontos += 100
        else:
            print("❌ Errou! Perdeu uma vida.")
            vidas -= 1
            
    except ValueError:
        print("🚨 Entrada inválida! Digite apenas números inteiros.")

print(f"\n💥 GAME OVER! Sua pontuação final foi: {pontos} pontos.")
```

### ❓ Perguntas Pedagógicas de Engenharia Reversa (Interação com a Turma):
1. `[❓ ENGAJAMENTO]` → **"O que acontece se o usuário digitar 'três' por extenso?"**  
   *(Cai no `except ValueError`, imprime a mensagem de alerta e NÃO perde vida!)*
2. `[❓ ENGAJAMENTO]` → **"Qual instrução impede que o jogador perca vida quando digita o número 9?"**  
   *(O `if chute < 1 or chute > 5:` acompanhado da instrução `continue`!)*
3. `[❓ ENGAJAMENTO]` → **"O que faz o loop `while` parar de rodar?"**  
   *(Quando a variável `vidas` chega a 0 após 3 erros de chute)*

---

## ☕ Intervalo — 15 minutos (16h15 – 16h30)

Projete no telão:
```
☕ PAUSA PARA O LANCHE (15 min)
Ao voltar: Missões Práticas com IA e criação do seu próprio jogo!
Mantenha o VS Code aberto. 🎮
```

---

## 🟠 Bloco 4: 3 Exercícios Práticos Solo / Engenharia Reversa com IA (50 min)

> **Objetivo:** Alunos escolhem uma missão prática de complexidade real e usam a IA para construir, testar e entender o código no VS Code.

`[SLIDE]` — Projete as 3 Missões no telão:

---

### 🎲 MISSÃO A — "O Caixa Eletrônico Blindado" *(Foco em Validação Finanças)*

**Prompt para copiar na IA (Gemini/ChatGPT):**
```
Atue como professor de Python para iniciantes.
Crie um programa de Caixa Eletrônico simples no terminal do VS Code.
Regras:
1. O programa deve ter um saldo inicial de R$ 500,00.
2. Use um laço while True com o menu: 1-Ver Saldo | 2-Sacar | 3-Depositar | 4-Sair.
3. Use try/except ValueError para tratar entradas não numéricas no saque e depósito.
4. Não permita sacar mais do que o saldo disponível (use if para isso).
5. Máximo 30 linhas, sem bibliotecas externas, com comentários explicativos em português.
```

**Desafio Extra:** Peça à IA para limitar o valor máximo de saque a R$ 1.000,00 por operação.

---

### 🎮 MISSÃO B — "O Quiz Implacável" *(Foco em Jogos e Repetição)*

**Prompt para copiar na IA (Gemini/ChatGPT):**
```
Atue como um apresentador animado de game show.
Crie um programa Python para rodar no terminal do VS Code com as regras:
1. Faça 3 perguntas de múltipla escolha (A, B, C, D) para o usuário.
2. Para cada pergunta, use um laço while que só aceita as letras A, B, C ou D.
3. Se o usuário digitar algo diferente ou inválido, use try/except ou if para avisar e repetir a pergunta.
4. Ao final, use if/elif/else para dar um troféu de acordo com a nota (3 acertos, 2 acertos, etc.).
5. Máximo 35 linhas, sem bibliotecas externas.
```

**Desafio Extra:** Peça à IA para exibir uma dica temática caso o usuário erre na primeira tentativa.

---

### 🌡️ MISSÃO C — "O Monitor de Saúde Pessoal" *(Foco em Estatística e Laços)*

**Prompt para copiar na IA (Gemini/ChatGPT):**
```
Atue como desenvolvedor de apps de saúde.
Crie um assistente de monitoramento cardíaco no VS Code:
1. Use um laço for para pedir ao usuário 4 medições de frequência cardíaca (bpm).
2. Use try/except ValueError para rejeitar entradas não numéricas e exigir que digite novamente.
3. Calcule e exiba: a média das 4 medições e o maior valor lido.
4. Use if/elif/else para classificar a média: <60 ("Repouso/Atleta"), 60-100 ("Normal"), >100 ("Elevado").
5. Máximo 30 linhas, comentários em português.
```

**Desafio Extra:** Peça à IA para emitir um alerta `⚠️ ALERTA VERMELHO` se qualquer uma das medições for maior que 140 bpm.

---

### 🎯 Atuação do Monitor/Tutor durante a Prática:
Circular pela sala e fazer perguntas individuais:
- `[❓ ENGAJAMENTO]` → *"Onde no seu código está a parte que impede o programa de fechar se eu digitar letras?"*
- `[❓ ENGAJAMENTO]` → *"Como o `while` sabe a hora exata de parar?"*

---

## 🟣 Bloco 5: Quebrando o Código para Investigar Erros (25 min)

> **Objetivo:** Desenvolver mentalidade de Teste de Estresse (QA) e aprender a debugar mensagens de exceção reais com auxílio da IA.

`[SLIDE]` — Projete a tabela de Testes de Estresse:

```
🔨 OPERAÇÃO DESTRUIÇÃO: Tente QUEBRAR o seu código!
Descubra como o Python reage quando submetido a dados incomuns.
```

| Teste | O que fazer no terminal | Qual erro o Python dispara? | Como o `try/except` tratou? |
|-------|-------------------------|-----------------------------|-----------------------------|
| 1. Texto em Número | Digitar `"dez"` no campo numérico | `ValueError` | O `except` evitou o crash? |
| 2. Divisão por Zero | Digitar `0` quando for dividir algo | `ZeroDivisionError` | Tem `except` específico? |
| 3. Enter Vazio | Apertar Enter sem digitar nada | `ValueError` | O programa repetiu o pedido? |

### 🧪 Exercício de Debugging com IA:

Peça aos alunos para forçarem um erro proposital (ex: remover a linha do `except`) e copiarem a mensagem vermelha do terminal.

**Prompt de investigação para a IA:**
```
Meu código Python no VS Code gerou o seguinte erro no terminal:
[COLE O ERRO AQUI]

Explique em apenas 2 frases:
1. O que provocou essa falha.
2. Como posso adicionar um try/except para resolver definitivamente.
```

---

## 🔴 Bloco 6: Resumão, Conclusão e Tarefa de Casa Semanal (15 min)

### ⏱️ [0–8 min] Resumão e Conclusão das Sintaxes

`[SLIDE]` — Projete o resumo de sintaxes aprendidas:

```
🎯 SINTAXES DOMINADAS NA AULA 03:

✅ try / except    → Trata exceções e impede o encerramento abrupto do app
✅ ValueError      → Exceção disparada ao tentar converter dados incompatíveis
✅ while condicao: → Repete o bloco enquanto a condição permanecer verdadeira
✅ while True:     → Loop contínuo (requer break para encerrar)
✅ break           → Força a saída imediata do laço de repetição
✅ for i in range: → Executa repetições com contagem definida
```

---

### ⏱️ [8–15 min] 🏠 Apresentação da Micro-Tarefa de Casa Semanal

`[SLIDE]` — Projete os desafios para a próxima aula:

Diga:
> *"Parabéns, turma! Hoje o código de vocês aprendeu a se defender de falhas e a executar tarefas repetitivas em frações de segundo. Para fixar isso para a nossa próxima quarta-feira, escolham uma das micro-missões abaixo para fazer no celular (Pydroid 3) ou no computador. Leva só de 10 a 15 minutinhos!"*

---

## ✅ Conceitos de Programação Absorvidos

- [x] Tratamento de exceções com `try/except` no VS Code e Pydroid 3
- [x] Captura de exceções específicas (`ValueError`, `ZeroDivisionError`)
- [x] Laço `while` com condição de parada e laço infinito com `break`
- [x] Laço `for` com a função `range()`
- [x] Integração de validação de dados em menus interativos
- [x] Prática de Engenharia Reversa e Testes de Estresse
- [x] Utilização da IA para auxílio na depuração de stack traces

---

## 🔑 Gabarito de Respostas — Para o Tutor

| Pergunta de Engajamento | Resposta Esperada |
|------------------------|-------------------|
| Por que o `input()` causa `ValueError` no `int()`? | Porque `int()` não consegue converter caracteres alfabéticos (ex: `"abc"`) em número |
| O que acontece se o `except` for omitido em um `try`? | Erro de sintaxe (`SyntaxError`), pois todo `try` exige pelo menos um `except` ou `finally` |
| Qual a principal diferença entre `while` e `for`? | `while` roda com base em uma condição (indeterminado); `for` roda em uma sequência definida |
| Para que serve a instrução `break`? | Interrompe imediatamente o laço de repetição atual e passa para a linha pós-loop |

---

## 🏠 Micro-Missão de Casa (Entregar na Aula 04)

> **Escolha UMA das duas opções abaixo para realizar no Pydroid 3 do celular ou no VS Code (10 a 15 min):**

### 🏧 Opção A — "O Caixa Eletrônico Seguro"
Crie um simulador de caixa eletrônico no Pydroid 3:
1. Defina um saldo inicial (ex: `saldo = 500.0`).
2. Crie um laço `while True` que solicita o valor do saque.
3. Utilize `try/except ValueError` para garantir que o usuário digite apenas números válidos.
4. Se o valor for maior que o saldo, exiba `"⚠️ Saldo insuficiente! Seu saldo atual é R$ [saldo]"`.
5. Se o saque for bem-sucedido, deduza do saldo e pergunte se ele quer sacar de novo ou sair (use `break` para encerrar).

### 🎯 Opção B — "O Jogo da Adivinhação com 3 Chances"
Crie um jogo no qual o computador guarda um número secreto (ex: `numero_secreto = 7`):
1. Crie um laço `for tentativa in range(1, 4):` dando 3 chances para o jogador adivinhar.
2. Utilize `try/except ValueError` para caso o jogador digite uma letra por engano.
3. Use `if/elif/else` para dar dicas: `"Muito alto!"`, `"Muito baixo!"` ou `"Acertou!"`.
4. Se ele acertar antes das 3 chances, encerre o jogo comemorando usando `break`.
