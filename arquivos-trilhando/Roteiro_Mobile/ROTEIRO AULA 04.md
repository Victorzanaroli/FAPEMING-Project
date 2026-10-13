# 📜 Roteiro de Aula — Aula 04 (Trilha Mobile)
## Estruturas de Dados: Listas no Celular e Terminal (`list`, `append`, `len`, `for`, `pop`)

**Data:** 07 de outubro de 2026 (quarta-feira) — **Horário:** 15h00 às 18h00  
**Duração total:** 180 minutos (3h00)  
**Público-alvo:** Estudantes do Ensino Médio  
**Ferramenta de execução:** Pydroid 3 (smartphone) / VS Code + IA (Gemini/ChatGPT)  
**Pré-requisitos da aula anterior:** Variáveis, `input()`, `if/elif/else`, `while`, `for`, `try/except` (Aulas 1 a 3)

> **🔑 Legenda do Roteiro:**
> - `[SLIDE]` → Projetar no telão (conceito visual/teórico)
> - `[IDE]` → Abrir o VS Code ou Pydroid 3 e digitar ao vivo (alunos copiam junto)
> - `[❓ ENGAJAMENTO]` → Jogar a pergunta para a turma, aguardar respostas
> - `[⏱️]` → Marcação de tempo estimado para o bloco

---

## 📅 Grade de Horários

| Bloco | Atividade | Duração | Horário |
|-------|-----------|---------|---------|
| 1 | **⚡ Quiz da Aula Anterior** — Revisão de Laços/Exceções e Checagem da Tarefa | 15 min | 15h00 – 15h15 |
| 2 | **⌨️ Digitando Enquanto Acompanha na Lousa**: Criando e Manipulando Listas (`list`, `append`, `len`, `for`) + **Mini Exercícios** | 35 min | 15h15 – 15h50 |
| 3 | **🔍 Analisar um Código Pronto** (Engenharia Reversa Guiada: Inventário de RPG/Gamer) | 25 min | 15h50 – 16h15 |
| **☕** | **Intervalo / Pausa para Lanche** | **15 min** | **16h15 – 16h30** |
| 4 | **🤖 3 Exercícios Práticos Solo / Engenharia Reversa com IA** (Desafio do Dia - Missões A, B e C) | 50 min | 16h30 – 17h20 |
| 5 | **🔨 Quebrando o Código para Investigar Erros** (Teste de Estresse & `IndexError`) | 25 min | 17h20 – 17h45 |
| 6 | **🎯 Resumão e Conclusão das Sintaxes Aprendidas no Dia** + Micro-Tarefa | 15 min | 17h45 – 18h00 |
| **Total** | | **180 min (3h00)** | **15h00 – 18h00** |

---

## 🟢 Bloco 1: Quiz da Aula Anterior e Abertura (15 min)

> **Objetivo:** Recapitular os conceitos da Aula 03 (`try/except`, `while`, `for`), verificar rapidamente a micro-tarefa semanal e conectar a necessidade de guardar múltiplas informações com a criação de Listas (`list`).

### ⏱️ [0–3 min] Boas-vindas e Abertura

Projete no telão:
```
"Hoje o seu código vai aprender a guardar COLEÇÕES de informações numa caixinha mágica chamada LISTA!"
```

Diga:
> *"Sejam muito bem-vindos à Aula 04! Na aula passada aprendemos a dar resiliência ao código com `try/except` e a repetir comandos com `while` e `for`. Hoje daremos um salto gigante: em vez de criar 10 variáveis isoladas para guardar 10 itens, aprenderemos a usar LISTAS — a estrutura essencial para qualquer aplicativo de celular!"*

---

### ⏱️ [3–12 min] ⚡ Quiz da Aula 03 (Revisão Expressa)

`[SLIDE]` — Projete no telão:

#### ❓ Pergunta 1: Para que serve o bloco `try/except`?
- A) Para deixar o código mais rápido
- B) Para impedir que o programa trave feio quando o usuário digita algo errado
- C) Para repetir uma ação 100 vezes
- D) Para criar gráficos na tela

**🔑 Gabarito:** **Alternativa B!** 🛡️ O `try/except` captura erros e executa um plano B amigável.

---

#### ❓ Pergunta 2: Verdadeiro ou Falso?
> *"O laço `while` deve ser usado quando sabemos exatamente quantas repetições faremos, enquanto o `for` é usado quando não sabemos quantas vezes o loop vai rodar."*
- [ ] Verdadeiro
- [ ] Falso

**🔑 Gabarito:** **FALSO!** ❌ É exatamente o contrário! `while` é para condições (indeterminado) e `for` é para sequências/contagens conhecidas.

---

#### ❓ Pergunta 3: Múltipla Escolha — Controle de Fluxo
O que acontece quando o comando `break` é executado dentro de um loop `while True`?
- A) O código volta ao início do programa
- B) O laço de repetição é encerrado imediatamente e a execução segue após o bloco
- C) O programa dispara um erro `ValueError`
- D) O laço continua rodando indefinidamente

**🔑 Gabarito:** **Alternativa B!** 🛑 O `break` força a saída imediata do laço de repetição.

---

### ⏱️ [12–15 min] 🏠 Checagem Rápida da Micro-Tarefa Semanal

`[❓ ENGAJAMENTO]`
> **"Quem conseguiu rodar o Caixa Eletrônico ou o Jogo de Adivinhação no celular durante a semana? Alguém precisou do try/except para evitar o crash quando digitou errado?"**  
> *(Momento rápido de 3 minutos para valorizar quem fez a tarefa e conectar que hoje aprenderemos a guardar históricos de palpites ou extratos usando Listas!)*

---

## 🔵 Bloco 2: Digitando Enquanto Acompanha na Lousa + Mini Exercícios (35 min)

> **Objetivo:** Apresentar a estrutura de Listas (`list`), índices de base 0, método `append()`, função `len()` e varredura com laço `for`.

### ⏱️ [0–12 min] Teoria na Lousa + Live Coding 1: Criando Listas e `append()`

`[SLIDE]` — Projete a analogia:
```
Variável Normal  →  📦 Uma caixa contendo 1 único objeto: item = "Espada"
Lista Python     →  🧰 Uma mochila organizadora com compartimentos numerados:
                    mochila = ["Espada", "Escudo", "Poção"]
                    Índices:     [0]       [1]        [2]
```

`[IDE]` — Crie o arquivo `aula04_listas.py` no Pydroid 3 / VS Code. **Alunos digitam juntos**:

```python
# 1. Criando uma lista de inventário
mochila = ["Espada de Ferro", "Escudo de Madeira", "Poção de Vida"]

# 2. Acessando elementos pelo índice (ATENÇÃO: começa do ZERO!)
print(f"Item principal (índice 0): {mochila[0]}")
print(f"Segundo item (índice 1): {mochila[1]}")

# 3. Adicionando um novo item dinamicamente com .append()
mochila.append("Chave Dourada")
print(f"Mochila atualizada: {mochila}")

# 4. Verificando a quantidade de itens com len()
print(f"Total de itens guardados: {len(mochila)}")
```

**Roteiro de fala enquanto digita:**
- *"Reparem nos colchetes `[]` — é assim que o Python sabe que estamos criando uma LISTA."*
- *"O primeiro elemento NUNCA é o 1, é sempre o [0]! Em programação, a contagem começa no zero."*
- *"O `.append()` é a ação de colocar algo no final da fila da lista."*

---

### ⏱️ [12–25 min] Teoria na Lousa + Live Coding 2: Percorrendo Listas com `for`

`[IDE]` — Acrescente ao mesmo código. **Alunos digitam juntos**:

```python
# 5. Percorrendo todos os elementos com laço FOR
print("\n🎒 LISTANDO ITENS DA MOCHILA:")
for item in mochila:
    print(f"➡️ Guardado: {item}")

# 6. Removendo um item com .pop() ou .remove()
mochila.pop(0)  # Remove o item do índice 0 (Espada)
print(f"\nItem usado! Restam na mochila: {mochila}")
```

`[❓ ENGAJAMENTO]`
> **"Se a lista tem 4 itens e eu dou `mochila.pop(0)`, qual item passa a ser o novo índice 0?"**  
> *(Resposta: o "Escudo de Madeira"! Os índices se reajustam automaticamente!)*

---

### ⏱️ [25–35 min] 🧩 Mini Exercícios Práticos Pós-Teoria (Alunos fazem agora na IDE)

Projete os 3 mini desafios na lousa (5 min para fazer, 5 min para correção ao vivo):

1. **Mini Desafio 1:** Crie uma lista vazia chamada `compras = []`. Adicione 2 frutas usando `.append()`.
2. **Mini Desafio 2:** Imprima o tamanho da lista `compras` usando `len()`.
3. **Mini Desafio 3:** Use um laço `for` para imprimir cada fruta com a frase `"Preciso comprar: [fruta]"`.

`[IDE]` — **Gabarito rápido projetado pelo tutor:**
```python
compras = []
compras.append("Maçã")
compras.append("Banana")
print(f"Quantidade: {len(compras)}")
for fruta in compras:
    print(f"Preciso comprar: {fruta}")
```

---

## 🟡 Bloco 3: Analisar um Código Pronto — Engenharia Reversa (25 min)

> **Objetivo:** Analisar um programa completo que gerencia uma lista dinâmica de tarefas/itens via menu interativo `while True`.

`[SLIDE]` — Projete a missão no telão:
```
🔍 MISSÃO DETETIVE: Analise o código do "Gerenciador de Playlist".
Identifique onde a lista é alterada, exibida e como o for varre os itens!
```

`[IDE]` — Projete o código `playlist_manager.py`:

```python
# === GERENCIADOR DE PLAYLIST MUSICAL ===
playlist = ["Bohemian Rhapsody", "Evidências", "Fogo nos Racistas"]

while True:
    print("\n--- 🎧 SUA PLAYLIST ATUAL ---")
    print(f"Total de músicas: {len(playlist)}")
    
    # Exibe a lista numerada a partir do 1
    for i, musica in enumerate(playlist, start=1):
        print(f"{i}. {musica}")
        
    print("\n[1] Adicionar Música | [2] Remover Última | [3] Sair")
    opcao = input("Escolha uma opção: ")
    
    if opcao == "1":
        nova_musica = input("Nome da música: ")
        playlist.append(nova_musica)
        print(f"✅ '{nova_musica}' adicionada à playlist!")
    elif opcao == "2":
        if len(playlist) > 0:
            removida = playlist.pop()
            print(f"🗑️ '{removida}' foi removida.")
        else:
            print("⚠️ A playlist já está vazia!")
    elif opcao == "3":
        print("👋 Fechando o tocador de música... Até logo!")
        break
    else:
        print("⚠️ Opção inválida! Escolha 1, 2 ou 3.")
```

### ❓ Perguntas Pedagógicas de Engenharia Reversa:
1. `[❓ ENGAJAMENTO]` → **"O que acontece com a lista quando o usuário digita a opção 1 e escreve uma música nova?"**  
   *(O comando `playlist.append(nova_musica)` insere a nova música no final da lista)*
2. `[❓ ENGAJAMENTO]` → **"Para que serve a verificação `if len(playlist) > 0:` na opção 2?"**  
   *(Para evitar um erro ao tentar remover um item com `.pop()` quando a lista já estiver vazia!)*
3. `[❓ ENGAJAMENTO]` → **"Como a função `enumerate()` ajuda a mostrar a lista numerada bonitinha na tela?"**  
   *(Ela pega o índice numérico e o valor da música ao mesmo tempo)*

---

## ☕ Intervalo — 15 minutos (16h15 – 16h30)

Projete no telão:
```
☕ PAUSA PARA O LANCHE (15 min)
Ao voltar: Crie seu próprio App de Gestão de Coleções com a IA!
Deixe o Pydroid 3 / VS Code aberto. 📱
```

---

## 🟠 Bloco 4: 3 Exercícios Práticos Solo / Engenharia Reversa com IA (50 min)

> **Objetivo:** Construção autônoma de scripts utilizando IA para gerar, testar e personalizar coleções de dados com listas.

`[SLIDE]` — Projete as 3 Missões no telão:

---

### 🛒 MISSÃO A — "O Carrinho de Compras do App" *(Foco em e-Commerce)*

**Prompt para copiar na IA (Gemini/ChatGPT):**
```
Atue como desenvolvedor Python mobile.
Crie um aplicativo em Python para rodar no Pydroid 3 / VS Code que gerencie um Carrinho de Compras.
Regras:
1. Crie uma lista vazia carrinho = [].
2. Use um laço while True com o menu: 1-Adicionar Produto | 2-Ver Carrinho | 3-Limpar Carrinho | 4-Finalizar Compra.
3. Na opção 1, peça o nome do produto com input() e adicione com append().
4. Na opção 2, use um laço for para exibir todos os produtos com emoji de sacola 🛍️.
5. Se o carrinho estiver vazio na opção 2, avise o usuário.
6. Máximo 30 linhas, sem bibliotecas externas, comentários em português.
```

**Desafio Extra:** Adicione uma segunda lista paralela `precos = []` que guarda o preço do produto correspondente.

---

### 🏆 MISSÃO B — "O Hall da Fama dos Gamers" *(Foco em Jogos e Ranks)*

**Prompt para copiar na IA (Gemini/ChatGPT):**
```
Atue como desenvolvedor de jogos indies.
Crie um sistema de Placar de Líderes (Leaderboard) em Python:
1. Crie uma lista com 3 nomes de jogadores iniciais.
2. Peça ao usuário para cadastrar mais 2 novos jogadores com seus respetivos nicknames.
3. Adicione os novos nomes na lista com append().
4. Use o método lista.sort() para colocar os nomes em ordem alfabética.
5. Imprima o Ranking Oficial formatado em Posições (1º lugar, 2º lugar...) usando um laço for.
6. Máximo 25 linhas, comentários explicativos.
```

**Desafio Extra:** Peça à IA para permitir que o usuário pesquise se um nickname específico já está cadastrado no Hall da Fama com `if nome in lista:`.

---

### 📝 MISSÃO C — "O Diário de Chamada Escolar" *(Foco em Gestão e Educação)*

**Prompt para copiar na IA (Gemini/ChatGPT):**
```
Atue como desenvolvedor de sistemas educacionais.
Crie um programa de Registro de Alunos para terminal:
1. Crie uma lista vazia chamada alunos = [].
2. Peça para o usuário cadastrar a quantidade de alunos que desejar usando um laço while.
3. Para cada aluno digitado, use append() para guardar na lista.
4. Quando o usuário digitar "FIM", encerre o cadastro.
5. Mostre o total de alunos presentes com len() e liste os nomes em linha única com ", ".
6. Máximo 25 linhas, sem bibliotecas externas.
```

**Desafio Extra:** Peça à IA para ordenar a chamada em ordem alfabética antes de exibir.

---

### 🎯 Atuação do Monitor/Tutor durante a Prática:
Circular pela sala e incentivar o raciocínio:
- `[❓ ENGAJAMENTO]` → *"Me mostra onde você usou o `.append()`. O que ele fez com a sua lista?"*
- `[❓ ENGAJAMENTO]` → *"Como você faria para saber quantas coisas têm na lista sem contar na mão?"*

---

## 🟣 Bloco 5: Quebrando o Código para Investigar Erros (25 min)

> **Objetivo:** Forçar exceções clássicas com listas (`IndexError`), entender a causa raiz e aprender a prevenir falhas em produção.

`[SLIDE]` — Projete a tabela de Testes de Estresse:

```
🔨 OPERAÇÃO DESTRUIÇÃO: Tentando quebrar a Lista!
Computadores não adivinham índices que não existem.
```

| Teste | O que fazer no código | Qual erro o Python dispara? | Como resolver? |
|-------|-----------------------|-----------------------------|----------------|
| 1. Índice Inexistente | Tentar imprimir `lista[99]` em uma lista com 3 itens | `IndexError: list index out of range` | Verificar o tamanho com `len()` antes de acessar |
| 2. Remoção em Lista Vazia | Dar `.pop()` em uma lista `[]` vazia | `IndexError: pop from empty list` | Usar `if len(lista) > 0:` antes de dar pop |
| 3. Append sem parênteses | Escrever `lista.append "item"` | `SyntaxError` | `append` é uma função! Exige `()` |

### 🧪 Exercício de Debugging com IA:

Projete o código quebrado abaixo e peça aos alunos para colocarem na IDE, lerem a falha e pedirem à IA a solução:

```python
# CÓDIGO COM BUG PROPOSITÁAL
frutas = ["Maçã", "Banana"]
print(frutas[2])  # 🚨 ERRO!
```

**Prompt de investigação para a IA:**
```
Meu código Python no Pydroid 3 deu este erro:
IndexError: list index out of range

Explique por que o índice 2 deu erro se a lista tem 2 frutas,
e me ensine como a contagem de índices funciona no Python.
```

---

## 🔴 Bloco 6: Resumão e Conclusão das Sintaxes Aprendidas (15 min)

### ⏱️ [0–8 min] Resumão das Sintaxes

`[SLIDE]` — Projete no telão:

```
🎯 SINTAXES DOMINADAS NA AULA 04:

✅ lista = []       → Criar uma lista vazia ou com elementos
✅ lista[0]         → Acessar o PRIMEIRO item (índice zero)
✅ lista.append(x)  → Adicionar um item ao final da lista
✅ len(lista)       → Retornar o número total de itens na lista
✅ for item in lista→ Percorrer cada item sequencialmente
✅ lista.pop()      → Remover e retornar o último item da lista
✅ IndexError       → Erro ao tentar acessar um índice que não existe
```

---

### ⏱️ [8–15 min] Encerramento e Micro-Tarefa de Casa

Diga:
> *"Parabéns pessoal! Hoje vocês dominaram as listas. Agora o aplicativo de vocês consegue guardar quantos itens o usuário quiser. Guardem seus scripts no celular!"*

---

## ✅ Conceitos de Programação Absorvidos

- [x] Conceito de estrutura de dados linear (`list`)
- [x] Indexação de base zero (primeiro elemento no índice `[0]`)
- [x] Adição dinâmica de dados com `.append()`
- [x] Medição do tamanho de coleções com a função `len()`
- [x] Varredura completa de listas com laços `for`
- [x] Remoção de itens com `.pop()` e tratamento de `IndexError`
- [x] Uso da IA para simulação de e-commerce e leaderboards

---

## 🔑 Gabarito de Respostas — Para o Tutor

| Pergunta de Engajamento | Resposta Esperada |
|------------------------|-------------------|
| Por que o item 1 de uma lista fica na posição `[0]`? | Porque em Python (e na maioria das linguagens) os índices começam no zero |
| O que acontece se eu acessar `lista[len(lista)]`? | Dá `IndexError`! Pois se a lista tem 3 itens, os índices são 0, 1 e 2. O índice 3 não existe! |
| Como o `.append()` insere o novo elemento? | Sempre ao final da lista, aumentando seu tamanho (`len`) em 1 |
| Qual a diferença entre `pop()` e `remove()`? | `pop(i)` remove pelo índice numérico; `remove(x)` remove pelo valor do conteúdo |

---

## 🏠 Micro-Missão de Casa (Entregar na Aula 05)

> **Escolha UMA das duas opções abaixo para realizar no Pydroid 3 do celular (10 a 15 min):**

### 🛒 Opção A — "A Lista de Compras do Futuro"
Crie no Pydroid 3 uma lista chamada `compras = []`. Faça um laço `while` que pede ao usuário para cadastrar 3 produtos e adiciona à lista com `append()`. No final, exiba os produtos em ordem numerada usando `for`.

### 🎵 Opção B — "A Playlist dos Meus Sonhos"
Crie no Pydroid 3 uma lista com suas 3 músicas favoritas. Use o comando `input()` para perguntar o nome de mais uma música e insira na lista com `append()`. Mostre a playlist atualizada e o tamanho com `len()`!
