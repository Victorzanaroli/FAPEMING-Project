/**
 * TRILHANDO O CAMINHO DO CÓDIGO — Arena de 100 Desafios Python (Estilo Beecrowd) & Chat Gemini IA 24/7 Integrado
 * CEFET-MG & FAPEMIG
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. SISTEMA DE RANKS / PATENTES (INICIANTE ATÉ LENDA SUPREMA)
    // =========================================================================
    const RANK_TIERS = [
        { level: 1, name: 'Iniciante', badge: '🥉', minXp: 0, maxXp: 59, color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.14)' },
        { level: 2, name: 'Aprendiz Python', badge: '🥈', minXp: 60, maxXp: 149, color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { level: 3, name: 'Explorador Lógico', badge: '🥇', minXp: 150, maxXp: 299, color: '#10b981', bg: 'rgba(16, 185, 129, 0.14)' },
        { level: 4, name: 'Programador Júnior', badge: '💎', minXp: 300, maxXp: 549, color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.15)' },
        { level: 5, name: 'Desenvolvedor Pleno', badge: '⚡', minXp: 550, maxXp: 899, color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.16)' },
        { level: 6, name: 'Mestre do Código', badge: '🚀', minXp: 900, maxXp: 1399, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.16)' },
        { level: 7, name: 'Grão-Mestre Python', badge: '🔥', minXp: 1400, maxXp: 2199, color: '#f97316', bg: 'rgba(249, 115, 22, 0.17)' },
        { level: 8, name: 'Lenda Suprema do Python', badge: '👑', minXp: 2200, maxXp: 99999, color: '#ec4899', bg: 'rgba(236, 72, 153, 0.18)' }
    ];

    const CHALLENGE_CATEGORIES = [
        { key: 'all', label: '🌐 Todos os Desafios (100)', short: 'Todos' },
        { key: 'cat1', label: '🌱 Nível 1: Iniciante I (Entrada, Saída & Textos)', short: 'Nível 1 • Iniciante I' },
        { key: 'cat2', label: '🔢 Nível 2: Iniciante II (Matemática & Conversões)', short: 'Nível 2 • Matemática' },
        { key: 'cat3', label: '🔀 Nível 3: Condicionais (if / elif / else)', short: 'Nível 3 • Condicionais' },
        { key: 'cat4', label: '🔁 Nível 4: Laços & Blindagem (for / while / try)', short: 'Nível 4 • Repetição' },
        { key: 'cat5', label: '📦 Nível 5: Listas, Vetores & Matrizes', short: 'Nível 5 • Listas' },
        { key: 'cat6', label: '🔤 Nível 6: Strings, Textos & Criptografia', short: 'Nível 6 • Strings' },
        { key: 'cat7', label: '⚙️ Nível 7: Funções (def) & Dicionários', short: 'Nível 7 • Funções & Dict' },
        { key: 'cat8', label: '🧠 Nível 8: Algoritmos Clássicos & Desafios Gerais', short: 'Nível 8 • Algoritmos' }
    ];

    // =========================================================================
    // 2. BANCO DE 100 DESAFIOS PYTHON (ESTILO BEECROWD #1001 A #1100)
    // =========================================================================
    const PYTHON_CHALLENGES = [
        {
                "id": "bee_1001",
                "number": 1001,
                "title": "Olá, Mundo do Código!",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 15,
                "description": "Bem-vindo à Arena de Desafios Python! O seu primeiro desafio no estilo Beecrowd é o clássico universal da programação: faça o computador mostrar exatamente a mensagem \"Ola, Mundo!\" (sem acento no a) na tela.",
                "inputSpec": "Este problema não possui nenhuma entrada.",
                "outputSpec": "Imprima exatamente uma linha contendo: Ola, Mundo!",
                "starterCode": "# Desafio #1001 — Olá, Mundo do Código!\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Este desafio não possui dados de entrada. Você não precisa usar `input()` — basta focar diretamente no processamento e no comando `print()`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima exatamente uma linha contendo: Ola, Mundo!*\n• Compare sua saída com o exemplo `Ola, Mundo!` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "",
                                "expected": "Ola, Mundo!"
                        },
                        {
                                "input": "",
                                "expected": "Ola, Mundo!"
                        },
                        {
                                "input": "",
                                "expected": "Ola, Mundo!"
                        }
                ]
        },
        {
                "id": "bee_1002",
                "number": 1002,
                "title": "Eco do Robô",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 15,
                "description": "O Robô CEFET está aprendendo a escutar! Leia uma palavra ou frase digitada pelo usuário usando input() e imprima exatamente a mesma mensagem na tela.",
                "inputSpec": "A entrada contém 1 linha de texto.",
                "outputSpec": "Imprima exatamente o mesmo texto lido na entrada.",
                "starterCode": "# Desafio #1002 — Eco do Robô\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Python\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima exatamente o mesmo texto lido na entrada.*\n• Compare sua saída com o exemplo `Python` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Python",
                                "expected": "Python"
                        },
                        {
                                "input": "Trilhando o Codigo",
                                "expected": "Trilhando o Codigo"
                        },
                        {
                                "input": "CEFET-MG 2026",
                                "expected": "CEFET-MG 2026"
                        }
                ]
        },
        {
                "id": "bee_1003",
                "number": 1003,
                "title": "Saudação ao Herói",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Um novo jogador acabou de entrar no servidor! Leia o nome do jogador e exiba uma mensagem de boas-vindas personalizada usando f-string.",
                "inputSpec": "A entrada contém o nome de um jogador (texto).",
                "outputSpec": "Imprima \"Bem-vindo, NOME!\" substituindo NOME pelo valor lido.",
                "starterCode": "# Desafio #1003 — Saudação ao Herói\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Lucas\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"Bem-vindo, NOME!\" substituindo NOME pelo valor lido.*\n• Compare sua saída com o exemplo `Bem-vindo, Lucas!` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Lucas",
                                "expected": "Bem-vindo, Lucas!"
                        },
                        {
                                "input": "Maria",
                                "expected": "Bem-vindo, Maria!"
                        },
                        {
                                "input": "Arqueiro",
                                "expected": "Bem-vindo, Arqueiro!"
                        }
                ]
        },
        {
                "id": "bee_1004",
                "number": 1004,
                "title": "Crachá do Estudante",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Leia duas informações em linhas separadas: na primeira linha o Nome do aluno e na segunda linha a Turma dele. Em seguida, mostre o crachá formatado.",
                "inputSpec": "Duas linhas de texto: a 1ª linha tem o nome e a 2ª linha tem a turma.",
                "outputSpec": "Imprima: Aluno: NOME | Turma: TURMA",
                "starterCode": "# Desafio #1004 — Crachá do Estudante\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: Aluno: NOME | Turma: TURMA*\n• Compare sua saída com o exemplo `Aluno: Ana | Turma: 8A` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Ana\n8A",
                                "expected": "Aluno: Ana | Turma: 8A"
                        },
                        {
                                "input": "Pedro\n9B",
                                "expected": "Aluno: Pedro | Turma: 9B"
                        },
                        {
                                "input": "Sofia\n7C",
                                "expected": "Aluno: Sofia | Turma: 7C"
                        }
                ]
        },
        {
                "id": "bee_1025",
                "number": 1025,
                "title": "Cartão de Visita Digital",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Leia o Nome, a Profissão e a Cidade de uma pessoa (um por linha) e imprima um cartão de visita em uma única linha separada por hífens.",
                "inputSpec": "3 linhas de texto: Nome, Profissão e Cidade.",
                "outputSpec": "Imprima: NOME - PROFISSAO - CIDADE",
                "starterCode": "# Desafio #1025 — Cartão de Visita Digital\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **3 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: NOME - PROFISSAO - CIDADE*\n• Compare sua saída com o exemplo `Victor - Programador - Belo Horizonte` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Victor\nProgramador\nBelo Horizonte",
                                "expected": "Victor - Programador - Belo Horizonte"
                        },
                        {
                                "input": "Carla\nEngenheira\nContagem",
                                "expected": "Carla - Engenheira - Contagem"
                        },
                        {
                                "input": "Rafael\nCientista\nBetim",
                                "expected": "Rafael - Cientista - Betim"
                        }
                ]
        },
        {
                "id": "bee_1026",
                "number": 1026,
                "title": "Grito de Torcida (Repetição de Texto)",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Em Python, multiplicar um texto por um número inteiro repete o texto várias vezes! Leia uma sílaba/palavra e imprima ela repetida 3 vezes grudada, seguida de um ponto de exclamação.",
                "inputSpec": "Uma linha contendo uma palavra curta.",
                "outputSpec": "A palavra repetida 3 vezes seguida de ! (ex: GolGolGol!).",
                "starterCode": "# Desafio #1026 — Grito de Torcida (Repetição de Texto)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Gol\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *A palavra repetida 3 vezes seguida de ! (ex: GolGolGol!).*\n• Compare sua saída com o exemplo `GolGolGol!` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Gol",
                                "expected": "GolGolGol!"
                        },
                        {
                                "input": "Vai",
                                "expected": "VaiVaiVai!"
                        },
                        {
                                "input": "Py",
                                "expected": "PyPyPy!"
                        }
                ]
        },
        {
                "id": "bee_1027",
                "number": 1027,
                "title": "Troca de Cristais (Swap A e B)",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Leia dois textos A e B (um em cada linha) e imprima na ordem invertida: primeiro o valor de B na primeira linha e depois o valor de A na segunda linha.",
                "inputSpec": "Duas linhas de texto: A e B.",
                "outputSpec": "Duas linhas: na 1ª linha o valor de B, na 2ª linha o valor de A.",
                "starterCode": "# Desafio #1027 — Troca de Cristais (Swap A e B)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Duas linhas: na 1ª linha o valor de B, na 2ª linha o valor de A.*\n• Compare sua saída com o exemplo `Gelo ↵ Fogo` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Fogo\nGelo",
                                "expected": "Gelo\nFogo"
                        },
                        {
                                "input": "Sol\nLua",
                                "expected": "Lua\nSol"
                        },
                        {
                                "input": "Primeiro\nSegundo",
                                "expected": "Segundo\nPrimeiro"
                        }
                ]
        },
        {
                "id": "bee_1028",
                "number": 1028,
                "title": "Placar do Campeonato",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Leia 4 linhas: o nome do Time 1, os gols do Time 1, o nome do Time 2 e os gols do Time 2. Mostre o placar oficial da partida.",
                "inputSpec": "4 linhas: Time1, Gols1, Time2, Gols2.",
                "outputSpec": "Imprima: TIME1 GOLS1 x GOLS2 TIME2",
                "starterCode": "# Desafio #1028 — Placar do Campeonato\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **4 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: TIME1 GOLS1 x GOLS2 TIME2*\n• Compare sua saída com o exemplo `Brasil 3 x 1 Franca` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Brasil\n3\nFranca\n1",
                                "expected": "Brasil 3 x 1 Franca"
                        },
                        {
                                "input": "CEFET\n5\nRival\n2",
                                "expected": "CEFET 5 x 2 Rival"
                        },
                        {
                                "input": "Leoes\n0\nTigres\n0",
                                "expected": "Leoes 0 x 0 Tigres"
                        }
                ]
        },
        {
                "id": "bee_1029",
                "number": 1029,
                "title": "Gerador de Tag HTML",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Na criação de sites web, textos ficam dentro de tags como <h1>Título</h1>. Leia o nome da tag na 1ª linha e o conteúdo na 2ª linha, e monte a tag HTML completa.",
                "inputSpec": "Duas linhas: nome da tag (ex: h1) e texto.",
                "outputSpec": "Imprima: <tag>texto</tag>",
                "starterCode": "# Desafio #1029 — Gerador de Tag HTML\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: <tag>texto</tag>*\n• Compare sua saída com o exemplo `<h1>Bem-vindo</h1>` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "h1\nBem-vindo",
                                "expected": "<h1>Bem-vindo</h1>"
                        },
                        {
                                "input": "p\nOla Python",
                                "expected": "<p>Ola Python</p>"
                        },
                        {
                                "input": "b\nDestaque",
                                "expected": "<b>Destaque</b>"
                        }
                ]
        },
        {
                "id": "bee_1030",
                "number": 1030,
                "title": "Coordenadas no Mapa 2D",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Leia a posição X e a posição Y de um personagem no mapa (uma por linha) e exiba no formato matemático de par ordenado.",
                "inputSpec": "Duas linhas contendo X e Y.",
                "outputSpec": "Imprima: Posicao: (X, Y)",
                "starterCode": "# Desafio #1030 — Coordenadas no Mapa 2D\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: Posicao: (X, Y)*\n• Compare sua saída com o exemplo `Posicao: (10, 25)` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10\n25",
                                "expected": "Posicao: (10, 25)"
                        },
                        {
                                "input": "-3\n8",
                                "expected": "Posicao: (-3, 8)"
                        },
                        {
                                "input": "0\n0",
                                "expected": "Posicao: (0, 0)"
                        }
                ]
        },
        {
                "id": "bee_1031",
                "number": 1031,
                "title": "Gerador de E-mail Institucional",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Leia o nome de usuário (login) na 1ª linha e o domínio da escola na 2ª linha, e forme o endereço de e-mail completo juntando os dois com @.",
                "inputSpec": "Duas linhas: usuario e dominio.",
                "outputSpec": "Imprima: usuario@dominio",
                "starterCode": "# Desafio #1031 — Gerador de E-mail Institucional\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: usuario@dominio*\n• Compare sua saída com o exemplo `aluno.python@cefetmg.br` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "aluno.python\ncefetmg.br",
                                "expected": "aluno.python@cefetmg.br"
                        },
                        {
                                "input": "maria.silva\nescola.edu.br",
                                "expected": "maria.silva@escola.edu.br"
                        },
                        {
                                "input": "dev\ntrilhando.org",
                                "expected": "dev@trilhando.org"
                        }
                ]
        },
        {
                "id": "bee_1032",
                "number": 1032,
                "title": " Anúncio de Missão RPG",
                "category": "cat1",
                "difficulty": "Iniciante",
                "xp": 20,
                "description": "Leia o nome de uma missão e a recompensa em moedas de ouro. Imprima o aviso oficial da guilda.",
                "inputSpec": "Duas linhas: nome da missão e quantidade de moedas.",
                "outputSpec": "Imprima: [MISSAO] NOME | Recompensa: MOEDAS moedas",
                "starterCode": "# Desafio #1032 —  Anúncio de Missão RPG\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Em desafios de entrada e saída no estilo Beecrowd, **nunca coloque mensagens dentro do `input()`** (use sempre `input()` vazio), pois qualquer texto extra reprova no juiz.\n• Para montar o texto final combinando palavras fixas com o conteúdo das suas variáveis, utilize uma **f-string**: coloque a letra `f` antes das aspas no `print(f\"...\")` e insira o nome de cada variável entre chaves `{variavel}`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: [MISSAO] NOME | Recompensa: MOEDAS moedas*\n• Compare sua saída com o exemplo `[MISSAO] Derrotar o Dragao | Recompensa: 500 moedas` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Derrotar o Dragao\n500",
                                "expected": "[MISSAO] Derrotar o Dragao | Recompensa: 500 moedas"
                        },
                        {
                                "input": "Coletar Ervas\n50",
                                "expected": "[MISSAO] Coletar Ervas | Recompensa: 50 moedas"
                        },
                        {
                                "input": "Proteger a Vila\n250",
                                "expected": "[MISSAO] Proteger a Vila | Recompensa: 250 moedas"
                        }
                ]
        },
        {
                "id": "bee_1005",
                "number": 1005,
                "title": "Extremamente Básico (Soma)",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Inspirado no problema mais famoso do Beecrowd! Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X e imprima como mostrado nos exemplos.",
                "inputSpec": "A entrada contém 2 valores inteiros, um em cada linha.",
                "outputSpec": "Imprima a mensagem \"X = \" (letra X maiúscula) seguido pelo valor da variável X.",
                "starterCode": "# Desafio #1005 — Extremamente Básico (Soma)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Use `+` (soma), `-` (subtração), `*` (multiplicação) ou `/` (divisão).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima a mensagem \"X = \" (letra X maiúscula) seguido pelo valor da variável X.*\n• Compare sua saída com o exemplo `X = 19` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10\n9",
                                "expected": "X = 19"
                        },
                        {
                                "input": "-10\n4",
                                "expected": "X = -6"
                        },
                        {
                                "input": "15\n-7",
                                "expected": "X = 8"
                        }
                ]
        },
        {
                "id": "bee_1006",
                "number": 1006,
                "title": "Produto Simples",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Leia dois valores inteiros. A seguir, calcule o produto (multiplicação) entre estes dois valores e atribua esta operação à variável PROD.",
                "inputSpec": "O arquivo de entrada contém 2 valores inteiros, um em cada linha.",
                "outputSpec": "Imprima a mensagem \"PROD = \" seguido pelo resultado da multiplicação.",
                "starterCode": "# Desafio #1006 — Produto Simples\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Use `+` (soma), `-` (subtração), `*` (multiplicação) ou `/` (divisão).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima a mensagem \"PROD = \" seguido pelo resultado da multiplicação.*\n• Compare sua saída com o exemplo `PROD = 27` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "3\n9",
                                "expected": "PROD = 27"
                        },
                        {
                                "input": "-30\n10",
                                "expected": "PROD = -300"
                        },
                        {
                                "input": "0\n9",
                                "expected": "PROD = 0"
                        }
                ]
        },
        {
                "id": "bee_1007",
                "number": 1007,
                "title": "Dobro e Triplo de um Número",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Leia um único número inteiro N. Calcule e mostre na primeira linha o dobro desse número e na segunda linha o triplo desse número.",
                "inputSpec": "A entrada contém 1 número inteiro N.",
                "outputSpec": "Duas linhas:\nDobro: X\nTriplo: Y",
                "starterCode": "# Desafio #1007 — Dobro e Triplo de um Número\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `5`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Use `+` (soma), `-` (subtração), `*` (multiplicação) ou `/` (divisão).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Duas linhas: | Dobro: X | Triplo: Y*\n• Compare sua saída com o exemplo `Dobro: 10 ↵ Triplo: 15` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "5",
                                "expected": "Dobro: 10\nTriplo: 15"
                        },
                        {
                                "input": "12",
                                "expected": "Dobro: 24\nTriplo: 36"
                        },
                        {
                                "input": "0",
                                "expected": "Dobro: 0\nTriplo: 0"
                        }
                ]
        },
        {
                "id": "bee_1008",
                "number": 1008,
                "title": "Média Escolar Simples",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Leia 2 valores com casas decimais (float), que correspondem a 2 notas de um estudante. A seguir, calcule a média simples do aluno (soma das duas notas dividida por 2) e mostre com 1 casa decimal.",
                "inputSpec": "Dois valores decimais (float), um em cada linha.",
                "outputSpec": "Imprima \"MEDIA = \" seguido do resultado com 1 casa decimal (use :.1f).",
                "starterCode": "# Desafio #1008 — Média Escolar Simples\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** numéricas. Leia cada linha na ordem descrita no enunciado usando `int(input())` para inteiros e `float(input())` para números com casas decimais.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Atenção à **ordem de precedência matemática**: a multiplicação `*` e a divisão `/` acontecem antes da soma `+` e subtração `-`. Use **parênteses `( )`** para somar valores antes de dividir ou multiplicar!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"MEDIA = \" seguido do resultado com 1 casa decimal (use :.1f).* Formate o número com **1 casa decimal** usando `{valor:.1f}` dentro da f-string.\n• Compare sua saída com o exemplo `MEDIA = 6.0` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "5.0\n7.1",
                                "expected": "MEDIA = 6.0"
                        },
                        {
                                "input": "0.0\n7.1",
                                "expected": "MEDIA = 3.5"
                        },
                        {
                                "input": "10.0\n8.0",
                                "expected": "MEDIA = 9.0"
                        }
                ]
        },
        {
                "id": "bee_1033",
                "number": 1033,
                "title": "Antecessor e Sucessor",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Leia um número inteiro N e mostre na mesma linha o seu antecessor (N - 1) e o seu sucessor (N + 1).",
                "inputSpec": "Um número inteiro N.",
                "outputSpec": "Imprima: ANTECESSOR = X | SUCESSOR = Y",
                "starterCode": "# Desafio #1033 — Antecessor e Sucessor\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `10`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Use `+` (soma), `-` (subtração), `*` (multiplicação) ou `/` (divisão).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: ANTECESSOR = X | SUCESSOR = Y*\n• Compare sua saída com o exemplo `ANTECESSOR = 9 | SUCESSOR = 11` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10",
                                "expected": "ANTECESSOR = 9 | SUCESSOR = 11"
                        },
                        {
                                "input": "0",
                                "expected": "ANTECESSOR = -1 | SUCESSOR = 1"
                        },
                        {
                                "input": "-5",
                                "expected": "ANTECESSOR = -6 | SUCESSOR = -4"
                        }
                ]
        },
        {
                "id": "bee_1034",
                "number": 1034,
                "title": "Área e Perímetro do Retângulo",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Leia a base e a altura de um retângulo (inteiros). Calcule a Área (base * altura) e o Perímetro (2 * (base + altura)).",
                "inputSpec": "Dois números inteiros: base e altura, um por linha.",
                "outputSpec": "Duas linhas:\nAREA = X\nPERIMETRO = Y",
                "starterCode": "# Desafio #1034 — Área e Perímetro do Retângulo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Atenção à **ordem de precedência matemática**: a multiplicação `*` e a divisão `/` acontecem antes da soma `+` e subtração `-`. Use **parênteses `( )`** para somar valores antes de dividir ou multiplicar!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Duas linhas: | AREA = X | PERIMETRO = Y*\n• Compare sua saída com o exemplo `AREA = 20 ↵ PERIMETRO = 18` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "5\n4",
                                "expected": "AREA = 20\nPERIMETRO = 18"
                        },
                        {
                                "input": "10\n3",
                                "expected": "AREA = 30\nPERIMETRO = 26"
                        },
                        {
                                "input": "7\n7",
                                "expected": "AREA = 49\nPERIMETRO = 28"
                        }
                ]
        },
        {
                "id": "bee_1035",
                "number": 1035,
                "title": "Conversor Celsius para Fahrenheit",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Leia uma temperatura em graus Celsius (float) e converta para Fahrenheit usando a fórmula: F = (C * 1.8) + 32. Mostre com 1 casa decimal.",
                "inputSpec": "Um valor float representando graus Celsius.",
                "outputSpec": "Imprima: FAHRENHEIT = X.X",
                "starterCode": "# Desafio #1035 — Conversor Celsius para Fahrenheit\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada contém 1 número com casas decimais (ex: `0`). Utilize `float(input())` para realizar a leitura convertendo para número real.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Atenção à **ordem de precedência matemática**: a multiplicação `*` e a divisão `/` acontecem antes da soma `+` e subtração `-`. Use **parênteses `( )`** para somar valores antes de dividir ou multiplicar!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: FAHRENHEIT = X.X* Formate o número com **1 casa decimal** usando `{valor:.1f}` dentro da f-string.\n• Compare sua saída com o exemplo `FAHRENHEIT = 32.0` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "0",
                                "expected": "FAHRENHEIT = 32.0"
                        },
                        {
                                "input": "100",
                                "expected": "FAHRENHEIT = 212.0"
                        },
                        {
                                "input": "25",
                                "expected": "FAHRENHEIT = 77.0"
                        }
                ]
        },
        {
                "id": "bee_1036",
                "number": 1036,
                "title": "Divisão Inteira e Resto",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Leia dois números inteiros A e B. Calcule o quociente da divisão inteira (A // B) e o resto da divisão (A % B).",
                "inputSpec": "Dois números inteiros positivos A e B.",
                "outputSpec": "Imprima: QUOCIENTE = X | RESTO = Y",
                "starterCode": "# Desafio #1036 — Divisão Inteira e Resto\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Lembre-se da dupla poderosa da divisão em Python: `//` calcula o **quociente inteiro** (sem parte decimal) e `%` calcula o **resto da divisão**!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: QUOCIENTE = X | RESTO = Y*\n• Compare sua saída com o exemplo `QUOCIENTE = 3 | RESTO = 2` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "17\n5",
                                "expected": "QUOCIENTE = 3 | RESTO = 2"
                        },
                        {
                                "input": "20\n4",
                                "expected": "QUOCIENTE = 5 | RESTO = 0"
                        },
                        {
                                "input": "9\n2",
                                "expected": "QUOCIENTE = 4 | RESTO = 1"
                        }
                ]
        },
        {
                "id": "bee_1037",
                "number": 1037,
                "title": "Potência Matemática (Base e Expoente)",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Em Python, o operador ** calcula potências! Leia dois inteiros: a Base e o Expoente, e mostre o resultado de Base elevado ao Expoente.",
                "inputSpec": "Dois inteiros: base e expoente.",
                "outputSpec": "Imprima: POTENCIA = X",
                "starterCode": "# Desafio #1037 — Potência Matemática (Base e Expoente)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Para elevar um número a uma potência em Python, use dois asteriscos `**` (ex: `x ** 2` para ao quadrado, `x ** 3` para ao cubo, ou `x ** 0.5` para raiz quadrada).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: POTENCIA = X*\n• Compare sua saída com o exemplo `POTENCIA = 1024` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "2\n10",
                                "expected": "POTENCIA = 1024"
                        },
                        {
                                "input": "3\n4",
                                "expected": "POTENCIA = 81"
                        },
                        {
                                "input": "5\n0",
                                "expected": "POTENCIA = 1"
                        }
                ]
        },
        {
                "id": "bee_1038",
                "number": 1038,
                "title": "Consumo Médio de Combustível",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros). Mostre com 2 casas decimais.",
                "inputSpec": "Dois valores (float): distância em Km e litros gastos.",
                "outputSpec": "Imprima: X.XX km/l",
                "starterCode": "# Desafio #1038 — Consumo Médio de Combustível\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** numéricas. Leia cada linha na ordem descrita no enunciado usando `int(input())` para inteiros e `float(input())` para números com casas decimais.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Use `+` (soma), `-` (subtração), `*` (multiplicação) ou `/` (divisão).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: X.XX km/l* Formate o resultado com **2 casas decimais** usando `{valor:.2f}` dentro da f-string.\n• Compare sua saída com o exemplo `14.29 km/l` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "500\n35.0",
                                "expected": "14.29 km/l"
                        },
                        {
                                "input": "2254\n124.4",
                                "expected": "18.12 km/l"
                        },
                        {
                                "input": "100\n10.0",
                                "expected": "10.00 km/l"
                        }
                ]
        },
        {
                "id": "bee_1039",
                "number": 1039,
                "title": "Salário com Bônus de Comissão",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Faça um programa que leia o salário fixo de um vendedor e o valor total de vendas efetuadas por ele no mês. Sabendo que este vendedor ganha 15% (0.15) de comissão sobre suas vendas, calcule o total a receber no final do mês com 2 casas decimais.",
                "inputSpec": "Dois valores float: salário fixo e total de vendas.",
                "outputSpec": "Imprima: TOTAL = R$ X.XX",
                "starterCode": "# Desafio #1039 — Salário com Bônus de Comissão\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** numéricas. Leia cada linha na ordem descrita no enunciado usando `int(input())` para inteiros e `float(input())` para números com casas decimais.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Use `+` (soma), `-` (subtração), `*` (multiplicação) ou `/` (divisão).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: TOTAL = R$ X.XX* Formate o resultado com **2 casas decimais** usando `{valor:.2f}` dentro da f-string.\n• Compare sua saída com o exemplo `TOTAL = R$ 684.54` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "500.00\n1230.30",
                                "expected": "TOTAL = R$ 684.54"
                        },
                        {
                                "input": "700.00\n0.00",
                                "expected": "TOTAL = R$ 700.00"
                        },
                        {
                                "input": "1700.00\n1230.50",
                                "expected": "TOTAL = R$ 1884.58"
                        }
                ]
        },
        {
                "id": "bee_1040",
                "number": 1040,
                "title": "Conversão de Tempo (Segundos para HH:MM:SS)",
                "category": "cat2",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.",
                "inputSpec": "Um número inteiro N (total de segundos).",
                "outputSpec": "Imprima: H:M:S",
                "starterCode": "# Desafio #1040 — Conversão de Tempo (Segundos para HH:MM:SS)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `556`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Lembre-se da dupla poderosa da divisão em Python: `//` calcula o **quociente inteiro** (sem parte decimal) e `%` calcula o **resto da divisão**!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: H:M:S*\n• Compare sua saída com o exemplo `0:9:16` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "556",
                                "expected": "0:9:16"
                        },
                        {
                                "input": "1",
                                "expected": "0:0:1"
                        },
                        {
                                "input": "140153",
                                "expected": "38:55:53"
                        }
                ]
        },
        {
                "id": "bee_1041",
                "number": 1041,
                "title": "Diferença de Produtos (A*B - C*D)",
                "category": "cat2",
                "difficulty": "Fácil",
                "xp": 25,
                "description": "Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).",
                "inputSpec": "4 valores inteiros, um em cada linha.",
                "outputSpec": "Imprima: DIFERENCA = X",
                "starterCode": "# Desafio #1041 — Diferença de Produtos (A*B - C*D)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **4 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Use `+` (soma), `-` (subtração), `*` (multiplicação) ou `/` (divisão).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: DIFERENCA = X*\n• Compare sua saída com o exemplo `DIFERENCA = -26` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "5\n6\n7\n8",
                                "expected": "DIFERENCA = -26"
                        },
                        {
                                "input": "0\n0\n7\n8",
                                "expected": "DIFERENCA = -56"
                        },
                        {
                                "input": "5\n6\n-7\n8",
                                "expected": "DIFERENCA = 86"
                        }
                ]
        },
        {
                "id": "bee_1042",
                "number": 1042,
                "title": "Caixa Eletrônico (Notas de 100, 50 e 10)",
                "category": "cat2",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia um valor inteiro múltiplo de 10 e calcule o menor número de notas de 100, 50 e 10 necessárias para formar esse valor.",
                "inputSpec": "Um número inteiro múltiplo de 10.",
                "outputSpec": "Imprima: 100: X | 50: Y | 10: Z",
                "starterCode": "# Desafio #1042 — Caixa Eletrônico (Notas de 100, 50 e 10)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `570`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Depois de converter as entradas para número (`int` ou `float`), crie uma variável para guardar o resultado da fórmula pedida no enunciado.\n• Use `+` (soma), `-` (subtração), `*` (multiplicação) ou `/` (divisão).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: 100: X | 50: Y | 10: Z*\n• Compare sua saída com o exemplo `100: 5 | 50: 1 | 10: 2` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "570",
                                "expected": "100: 5 | 50: 1 | 10: 2"
                        },
                        {
                                "input": "130",
                                "expected": "100: 1 | 50: 0 | 10: 3"
                        },
                        {
                                "input": "80",
                                "expected": "100: 0 | 50: 1 | 10: 3"
                        }
                ]
        },
        {
                "id": "bee_1009",
                "number": 1009,
                "title": "Detector de Par ou Ímpar",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 30,
                "description": "Leia um número inteiro N e descubra se ele é PAR ou ÍMPAR. Lembre-se que um número é par quando o resto da divisão dele por 2 (N % 2) é igual a 0.",
                "inputSpec": "A entrada contém 1 número inteiro.",
                "outputSpec": "Imprima \"PAR\" se o número for par, ou \"IMPAR\" (sem acento) se for ímpar.",
                "starterCode": "# Desafio #1009 — Detector de Par ou Ímpar\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `8`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"PAR\" se o número for par, ou \"IMPAR\" (sem acento) se for ímpar.*\n• Compare sua saída com o exemplo `PAR` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "8",
                                "expected": "PAR"
                        },
                        {
                                "input": "7",
                                "expected": "IMPAR"
                        },
                        {
                                "input": "0",
                                "expected": "PAR"
                        }
                ]
        },
        {
                "id": "bee_1010",
                "number": 1010,
                "title": "Positivo, Negativo ou Zero",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 30,
                "description": "Leia um número inteiro e classifique-o usando if, elif e else: se for maior que zero, mostre POSITIVO; se for menor que zero, mostre NEGATIVO; se for igual a zero, mostre ZERO.",
                "inputSpec": "Um único número inteiro.",
                "outputSpec": "Imprima POSITIVO, NEGATIVO ou ZERO.",
                "starterCode": "# Desafio #1010 — Positivo, Negativo ou Zero\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `15`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima POSITIVO, NEGATIVO ou ZERO.*\n• Compare sua saída com o exemplo `POSITIVO` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "15",
                                "expected": "POSITIVO"
                        },
                        {
                                "input": "-4",
                                "expected": "NEGATIVO"
                        },
                        {
                                "input": "0",
                                "expected": "ZERO"
                        }
                ]
        },
        {
                "id": "bee_1011",
                "number": 1011,
                "title": "Maior de Dois Números",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia dois números inteiros A e B. Se forem diferentes, imprima o maior deles no formato \"MAIOR = X\". Se os dois números forem iguais, imprima \"IGUAIS\".",
                "inputSpec": "Dois números inteiros, um por linha.",
                "outputSpec": "Imprima \"MAIOR = X\" ou \"IGUAIS\".",
                "starterCode": "# Desafio #1011 — Maior de Dois Números\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"MAIOR = X\" ou \"IGUAIS\".*\n• Compare sua saída com o exemplo `MAIOR = 25` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10\n25",
                                "expected": "MAIOR = 25"
                        },
                        {
                                "input": "42\n18",
                                "expected": "MAIOR = 42"
                        },
                        {
                                "input": "7\n7",
                                "expected": "IGUAIS"
                        }
                ]
        },
        {
                "id": "bee_1012",
                "number": 1012,
                "title": "Boletim de Aprovação CEFET",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia a nota final (float) de um estudante. Se a nota for maior ou igual a 7.0, imprima \"APROVADO\". Se for maior ou igual a 5.0 (e menor que 7.0), imprima \"RECUPERACAO\". Caso contrário, imprima \"REPROVADO\".",
                "inputSpec": "Um valor numérico decimal (float) representando a nota.",
                "outputSpec": "Imprima APROVADO, RECUPERACAO ou REPROVADO.",
                "starterCode": "# Desafio #1012 — Boletim de Aprovação CEFET\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada contém 1 número com casas decimais (ex: `8.5`). Utilize `float(input())` para realizar a leitura convertendo para número real.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima APROVADO, RECUPERACAO ou REPROVADO.*\n• Compare sua saída com o exemplo `APROVADO` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "8.5",
                                "expected": "APROVADO"
                        },
                        {
                                "input": "6.0",
                                "expected": "RECUPERACAO"
                        },
                        {
                                "input": "4.2",
                                "expected": "REPROVADO"
                        }
                ]
        },
        {
                "id": "bee_1013",
                "number": 1013,
                "title": "Desconto VIP do Mercadinho",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "No Mercadinho Gamer, compras de valor maior ou igual a R$ 100.00 ganham 10% de desconto (ou seja, você multiplica o valor por 0.90). Compras abaixo de R$ 100.00 pagam o valor normal. Leia o valor da compra e imprima o total final com 2 casas decimais.",
                "inputSpec": "Um número decimal (float) com o valor da compra.",
                "outputSpec": "Imprima \"TOTAL = \" seguido do valor com 2 casas decimais (:.2f).",
                "starterCode": "# Desafio #1013 — Desconto VIP do Mercadinho\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada contém 1 número com casas decimais (ex: `150.00`). Utilize `float(input())` para realizar a leitura convertendo para número real.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"TOTAL = \" seguido do valor com 2 casas decimais (:.2f).* Formate o resultado com **2 casas decimais** usando `{valor:.2f}` dentro da f-string.\n• Compare sua saída com o exemplo `TOTAL = 135.00` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "150.00",
                                "expected": "TOTAL = 135.00"
                        },
                        {
                                "input": "80.00",
                                "expected": "TOTAL = 80.00"
                        },
                        {
                                "input": "100.00",
                                "expected": "TOTAL = 90.00"
                        }
                ]
        },
        {
                "id": "bee_1043",
                "number": 1043,
                "title": "Classificador de Faixa Etária",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia a idade de uma pessoa (int). Se for menor que 12, imprima CRIANCA. Se tiver entre 12 e 17, imprima ADOLESCENTE. Se tiver entre 18 e 59, imprima ADULTO. Se tiver 60 ou mais, imprima IDOSO.",
                "inputSpec": "Um número inteiro representando a idade.",
                "outputSpec": "Imprima CRIANCA, ADOLESCENTE, ADULTO ou IDOSO.",
                "starterCode": "# Desafio #1043 — Classificador de Faixa Etária\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `9`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima CRIANCA, ADOLESCENTE, ADULTO ou IDOSO.*\n• Compare sua saída com o exemplo `CRIANCA` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "9",
                                "expected": "CRIANCA"
                        },
                        {
                                "input": "15",
                                "expected": "ADOLESCENTE"
                        },
                        {
                                "input": "30",
                                "expected": "ADULTO"
                        },
                        {
                                "input": "65",
                                "expected": "IDOSO"
                        }
                ]
        },
        {
                "id": "bee_1044",
                "number": 1044,
                "title": "Detector de Ano Bissexto",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Um ano é bissexto se for divisível por 400, OU se for divisível por 4 mas NÃO for divisível por 100. Leia um ano e imprima BISSEXTO ou NORMAL.",
                "inputSpec": "Um número inteiro representando o ano.",
                "outputSpec": "Imprima BISSEXTO ou NORMAL.",
                "starterCode": "# Desafio #1044 — Detector de Ano Bissexto\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `2024`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima BISSEXTO ou NORMAL.*\n• Compare sua saída com o exemplo `BISSEXTO` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "2024",
                                "expected": "BISSEXTO"
                        },
                        {
                                "input": "2000",
                                "expected": "BISSEXTO"
                        },
                        {
                                "input": "1900",
                                "expected": "NORMAL"
                        },
                        {
                                "input": "2026",
                                "expected": "NORMAL"
                        }
                ]
        },
        {
                "id": "bee_1045",
                "number": 1045,
                "title": "Classificação de Triângulos",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia 3 lados inteiros A, B e C de um triângulo válido. Se os 3 lados forem iguais, imprima EQUILATERO. Se apenas 2 lados forem iguais, imprima ISOSCELES. Se todos os 3 forem diferentes, imprima ESCALENO.",
                "inputSpec": "3 números inteiros, um por linha.",
                "outputSpec": "Imprima EQUILATERO, ISOSCELES ou ESCALENO.",
                "starterCode": "# Desafio #1045 — Classificação de Triângulos\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **3 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima EQUILATERO, ISOSCELES ou ESCALENO.*\n• Compare sua saída com o exemplo `EQUILATERO` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "5\n5\n5",
                                "expected": "EQUILATERO"
                        },
                        {
                                "input": "5\n5\n3",
                                "expected": "ISOSCELES"
                        },
                        {
                                "input": "3\n4\n5",
                                "expected": "ESCALENO"
                        }
                ]
        },
        {
                "id": "bee_1046",
                "number": 1046,
                "title": "São Múltiplos?",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia 2 valores inteiros positivos A e B. O programa deve indicar se os valores lidos são múltiplos entre si (ou seja, se A % B == 0 ou B % A == 0).",
                "inputSpec": "Dois números inteiros positivos, um por linha.",
                "outputSpec": "Imprima SAO MULTIPLOS ou NAO SAO MULTIPLOS.",
                "starterCode": "# Desafio #1046 — São Múltiplos?\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima SAO MULTIPLOS ou NAO SAO MULTIPLOS.*\n• Compare sua saída com o exemplo `SAO MULTIPLOS` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "6\n24",
                                "expected": "SAO MULTIPLOS"
                        },
                        {
                                "input": "24\n6",
                                "expected": "SAO MULTIPLOS"
                        },
                        {
                                "input": "6\n25",
                                "expected": "NAO SAO MULTIPLOS"
                        }
                ]
        },
        {
                "id": "bee_1047",
                "number": 1047,
                "title": "Radar de Velocidade Rodoviário",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "O limite de uma rodovia é 80 km/h. Se o motorista passar de 80 km/h, ele recebe uma multa de R$ 5 por cada km acima do limite. Leia a velocidade inteira: se for <= 80, imprima SEM MULTA. Se for > 80, imprima MULTA = R$ X.",
                "inputSpec": "Um número inteiro com a velocidade do carro.",
                "outputSpec": "Imprima SEM MULTA ou MULTA = R$ X",
                "starterCode": "# Desafio #1047 — Radar de Velocidade Rodoviário\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `75`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima SEM MULTA ou MULTA = R$ X*\n• Compare sua saída com o exemplo `SEM MULTA` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "75",
                                "expected": "SEM MULTA"
                        },
                        {
                                "input": "80",
                                "expected": "SEM MULTA"
                        },
                        {
                                "input": "100",
                                "expected": "MULTA = R$ 100"
                        }
                ]
        },
        {
                "id": "bee_1048",
                "number": 1048,
                "title": "Juiz de Pedra, Papel e Tesoura",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia a jogada do Jogador 1 e do Jogador 2 (PEDRA, PAPEL ou TESOURA). Imprima EMPATE se forem iguais, JOGADOR 1 se o 1º vencer, ou JOGADOR 2 se o 2º vencer.",
                "inputSpec": "Duas linhas contendo PEDRA, PAPEL ou TESOURA.",
                "outputSpec": "Imprima EMPATE, JOGADOR 1 ou JOGADOR 2.",
                "starterCode": "# Desafio #1048 — Juiz de Pedra, Papel e Tesoura\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima EMPATE, JOGADOR 1 ou JOGADOR 2.*\n• Compare sua saída com o exemplo `JOGADOR 1` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "PEDRA\nTESOURA",
                                "expected": "JOGADOR 1"
                        },
                        {
                                "input": "PAPEL\nTESOURA",
                                "expected": "JOGADOR 2"
                        },
                        {
                                "input": "PEDRA\nPEDRA",
                                "expected": "EMPATE"
                        }
                ]
        },
        {
                "id": "bee_1049",
                "number": 1049,
                "title": "Coordenadas de um Ponto (Quadrantes)",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia 2 valores inteiros X e Y (diferentes de zero) e determine em qual quadrante do plano cartesiano o ponto está: Q1 (x>0, y>0), Q2 (x<0, y>0), Q3 (x<0, y<0) ou Q4 (x>0, y<0).",
                "inputSpec": "Dois números inteiros X e Y (não nulos).",
                "outputSpec": "Imprima Q1, Q2, Q3 ou Q4.",
                "starterCode": "# Desafio #1049 — Coordenadas de um Ponto (Quadrantes)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima Q1, Q2, Q3 ou Q4.*\n• Compare sua saída com o exemplo `Q1` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "4\n5",
                                "expected": "Q1"
                        },
                        {
                                "input": "-3\n2",
                                "expected": "Q2"
                        },
                        {
                                "input": "-2\n-6",
                                "expected": "Q3"
                        },
                        {
                                "input": "5\n-1",
                                "expected": "Q4"
                        }
                ]
        },
        {
                "id": "bee_1050",
                "number": 1050,
                "title": "DDD de Cidades Brasileiras",
                "category": "cat3",
                "difficulty": "Fácil",
                "xp": 30,
                "description": "Leia um número inteiro que representa um código de DDD: 31 -> Belo Horizonte, 11 -> Sao Paulo, 21 -> Rio de Janeiro, 61 -> Brasilia. Qualquer outro número deve imprimir DDD NAO CADASTRADO.",
                "inputSpec": "Um número inteiro (DDD).",
                "outputSpec": "O nome da cidade correspondente ou DDD NAO CADASTRADO.",
                "starterCode": "# Desafio #1050 — DDD de Cidades Brasileiras\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `31`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *O nome da cidade correspondente ou DDD NAO CADASTRADO.*\n• Compare sua saída com o exemplo `Belo Horizonte` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "31",
                                "expected": "Belo Horizonte"
                        },
                        {
                                "input": "11",
                                "expected": "Sao Paulo"
                        },
                        {
                                "input": "99",
                                "expected": "DDD NAO CADASTRADO"
                        }
                ]
        },
        {
                "id": "bee_1051",
                "number": 1051,
                "title": "Maior de Três Números",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 35,
                "description": "Leia 3 números inteiros (um por linha) e mostre qual é o maior valor entre os três.",
                "inputSpec": "3 números inteiros, um em cada linha.",
                "outputSpec": "Imprima: MAIOR = X",
                "starterCode": "# Desafio #1051 — Maior de Três Números\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **3 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: MAIOR = X*\n• Compare sua saída com o exemplo `MAIOR = 106` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "7\n14\n106",
                                "expected": "MAIOR = 106"
                        },
                        {
                                "input": "50\n20\n10",
                                "expected": "MAIOR = 50"
                        },
                        {
                                "input": "-5\n-2\n-10",
                                "expected": "MAIOR = -2"
                        }
                ]
        },
        {
                "id": "bee_1052",
                "number": 1052,
                "title": "Aprovação de Empréstimo Bancário",
                "category": "cat3",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Para aprovar um financiamento, a parcela mensal não pode ultrapassar 30% (0.30) do salário do cliente. Leia o salário e o valor da parcela: imprima APROVADO se parcela <= salario * 0.30, ou NEGADO caso contrário.",
                "inputSpec": "Dois valores float: salário e parcela.",
                "outputSpec": "Imprima APROVADO ou NEGADO.",
                "starterCode": "# Desafio #1052 — Aprovação de Empréstimo Bancário\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** numéricas. Leia cada linha na ordem descrita no enunciado usando `int(input())` para inteiros e `float(input())` para números com casas decimais.\n\nfalse\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima APROVADO ou NEGADO.*\n• Compare sua saída com o exemplo `APROVADO` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "3000.00\n800.00",
                                "expected": "APROVADO"
                        },
                        {
                                "input": "2000.00\n750.00",
                                "expected": "NEGADO"
                        },
                        {
                                "input": "1000.00\n300.00",
                                "expected": "APROVADO"
                        }
                ]
        },
        {
                "id": "bee_1014",
                "number": 1014,
                "title": "Contagem de 1 até N",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia um número inteiro positivo N e utilize um laço de repetição (for ou while) para imprimir todos os números inteiros de 1 até N, um em cada linha.",
                "inputSpec": "Um número inteiro N (1 <= N <= 20).",
                "outputSpec": "Os números de 1 até N, um por linha.",
                "starterCode": "# Desafio #1014 — Contagem de 1 até N\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `4`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Como a repetição depende de uma condição dinâmica (ou de um valor de parada como `0`), utilize um laço **`while`** ou `while True:` com `break` quando o valor de parada for lido.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Os números de 1 até N, um por linha.*\n• Compare sua saída com o exemplo `1 ↵ 2 ↵ 3 ↵ 4` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "4",
                                "expected": "1\n2\n3\n4"
                        },
                        {
                                "input": "2",
                                "expected": "1\n2"
                        },
                        {
                                "input": "6",
                                "expected": "1\n2\n3\n4\n5\n6"
                        }
                ]
        },
        {
                "id": "bee_1015",
                "number": 1015,
                "title": "Mini Tabuada de 1 a 5",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia um número inteiro N e mostre os 5 primeiros resultados da tabuada dele (de 1 até 5) no formato \"N x i = resultado\".",
                "inputSpec": "Um número inteiro N.",
                "outputSpec": "5 linhas no formato: N x i = resultado",
                "starterCode": "# Desafio #1015 — Mini Tabuada de 1 a 5\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `7`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Use `for i in range(inicio, fim + 1):` quando souber onde a contagem começa e termina (lembrando que o `range` para um número antes do limite final!).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *5 linhas no formato: N x i = resultado*\n• Compare sua saída com o exemplo `7 x 1 = 7 ↵ 7 x 2 = 14 ↵ 7 x 3 = 21 ↵ 7 x 4 = 28 ↵ 7 x 5 = 35` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "7",
                                "expected": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35"
                        },
                        {
                                "input": "3",
                                "expected": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15"
                        },
                        {
                                "input": "10",
                                "expected": "10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50"
                        }
                ]
        },
        {
                "id": "bee_1016",
                "number": 1016,
                "title": "Soma de 1 até N",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia um número inteiro N e calcule a soma de todos os números inteiros de 1 até N (por exemplo, se N = 4, calcule 1 + 2 + 3 + 4 = 10).",
                "inputSpec": "Um número inteiro N.",
                "outputSpec": "Imprima \"SOMA = \" seguido do total acumulado.",
                "starterCode": "# Desafio #1016 — Soma de 1 até N\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `4`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Crie uma variável **acumuladora** (ex: `soma = 0` ou `contador = 0`) ANTES do laço começar, e atualize seu valor dentro do bloco repetido usando `+=`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"SOMA = \" seguido do total acumulado.*\n• Compare sua saída com o exemplo `SOMA = 10` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "4",
                                "expected": "SOMA = 10"
                        },
                        {
                                "input": "5",
                                "expected": "SOMA = 15"
                        },
                        {
                                "input": "10",
                                "expected": "SOMA = 55"
                        }
                ]
        },
        {
                "id": "bee_1017",
                "number": 1017,
                "title": "Cofre Blindado (try / except)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Pratique a blindagem de erros da Aula 03! Leia uma entrada do usuário e tente convertê-la para número inteiro (int) dentro de um bloco try. Se funcionar, imprima o dobro desse número (\"DOBRO = X\"). Se o usuário tiver digitado letras e disparar ValueError, capture no except e imprima \"ERRO: DIGITE APENAS NUMEROS\".",
                "inputSpec": "Uma linha contendo números ou letras.",
                "outputSpec": "Imprima \"DOBRO = X\" ou \"ERRO: DIGITE APENAS NUMEROS\".",
                "starterCode": "# Desafio #1017 — Cofre Blindado (try / except)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `21`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Use `for i in range(inicio, fim + 1):` quando souber onde a contagem começa e termina (lembrando que o `range` para um número antes do limite final!).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"DOBRO = X\" ou \"ERRO: DIGITE APENAS NUMEROS\".*\n• Compare sua saída com o exemplo `DOBRO = 42` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "21",
                                "expected": "DOBRO = 42"
                        },
                        {
                                "input": "abc",
                                "expected": "ERRO: DIGITE APENAS NUMEROS"
                        },
                        {
                                "input": "-5",
                                "expected": "DOBRO = -10"
                        }
                ]
        },
        {
                "id": "bee_1053",
                "number": 1053,
                "title": "Contagem Regressiva de Foguete",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia um número inteiro N e faça uma contagem regressiva de N até 1 (um por linha) e, na última linha, imprima FOGO!",
                "inputSpec": "Um número inteiro N (1 <= N <= 15).",
                "outputSpec": "Números de N até 1 e FOGO! no final.",
                "starterCode": "# Desafio #1053 — Contagem Regressiva de Foguete\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `3`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Crie uma variável **acumuladora** (ex: `soma = 0` ou `contador = 0`) ANTES do laço começar, e atualize seu valor dentro do bloco repetido usando `+=`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Números de N até 1 e FOGO! no final.*\n• Compare sua saída com o exemplo `3 ↵ 2 ↵ 1 ↵ FOGO!` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "3",
                                "expected": "3\n2\n1\nFOGO!"
                        },
                        {
                                "input": "5",
                                "expected": "5\n4\n3\n2\n1\nFOGO!"
                        },
                        {
                                "input": "1",
                                "expected": "1\nFOGO!"
                        }
                ]
        },
        {
                "id": "bee_1054",
                "number": 1054,
                "title": "Pares de 2 até N",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 40,
                "description": "Leia um valor inteiro N (N >= 2). Mostre todos os valores pares entre 2 e N (inclusive N, se for par), um em cada linha.",
                "inputSpec": "Um número inteiro N >= 2.",
                "outputSpec": "Todos os números pares de 2 até N, um por linha.",
                "starterCode": "# Desafio #1054 — Pares de 2 até N\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `6`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Crie uma variável **acumuladora** (ex: `soma = 0` ou `contador = 0`) ANTES do laço começar, e atualize seu valor dentro do bloco repetido usando `+=`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Todos os números pares de 2 até N, um por linha.*\n• Compare sua saída com o exemplo `2 ↵ 4 ↵ 6` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "6",
                                "expected": "2\n4\n6"
                        },
                        {
                                "input": "7",
                                "expected": "2\n4\n6"
                        },
                        {
                                "input": "2",
                                "expected": "2"
                        }
                ]
        },
        {
                "id": "bee_1055",
                "number": 1055,
                "title": "Fatorial Simples (N!)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Ler um valor N. Calcular e escrever seu respectivo fatorial N! = N * (N-1) * ... * 1. Lembre-se que 0! = 1.",
                "inputSpec": "Um número inteiro N (0 <= N <= 12).",
                "outputSpec": "Imprima: FATORIAL = X",
                "starterCode": "# Desafio #1055 — Fatorial Simples (N!)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `4`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Crie uma variável **acumuladora** (ex: `soma = 0` ou `contador = 0`) ANTES do laço começar, e atualize seu valor dentro do bloco repetido usando `+=`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: FATORIAL = X*\n• Compare sua saída com o exemplo `FATORIAL = 24` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "4",
                                "expected": "FATORIAL = 24"
                        },
                        {
                                "input": "5",
                                "expected": "FATORIAL = 120"
                        },
                        {
                                "input": "0",
                                "expected": "FATORIAL = 1"
                        }
                ]
        },
        {
                "id": "bee_1056",
                "number": 1056,
                "title": "Quadrado e ao Cubo",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia um inteiro positivo N. Para cada número i de 1 até N, imprima uma linha contendo o número i, seu quadrado (i**2) e seu cubo (i**3) separados por espaço.",
                "inputSpec": "Um número inteiro N (1 <= N <= 15).",
                "outputSpec": "N linhas no formato: i quadrado cubo",
                "starterCode": "# Desafio #1056 — Quadrado e ao Cubo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `3`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Use `for i in range(inicio, fim + 1):` quando souber onde a contagem começa e termina (lembrando que o `range` para um número antes do limite final!).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *N linhas no formato: i quadrado cubo*\n• Compare sua saída com o exemplo `1 1 1 ↵ 2 4 8 ↵ 3 9 27` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "3",
                                "expected": "1 1 1\n2 4 8\n3 9 27"
                        },
                        {
                                "input": "2",
                                "expected": "1 1 1\n2 4 8"
                        },
                        {
                                "input": "4",
                                "expected": "1 1 1\n2 4 8\n3 9 27\n4 16 64"
                        }
                ]
        },
        {
                "id": "bee_1057",
                "number": 1057,
                "title": "Escadinha de Asteriscos",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia um inteiro N e desenhe uma escadinha de asteriscos de altura N: a 1ª linha tem 1 asterisco (*), a 2ª tem 2 (**), até a linha N.",
                "inputSpec": "Um número inteiro N.",
                "outputSpec": "N linhas de asteriscos crescentes.",
                "starterCode": "# Desafio #1057 — Escadinha de Asteriscos\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `3`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Use `for i in range(inicio, fim + 1):` quando souber onde a contagem começa e termina (lembrando que o `range` para um número antes do limite final!).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *N linhas de asteriscos crescentes.*\n• Compare sua saída com o exemplo `* ↵ ** ↵ ***` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "3",
                                "expected": "*\n**\n***"
                        },
                        {
                                "input": "5",
                                "expected": "*\n**\n***\n****\n*****"
                        },
                        {
                                "input": "1",
                                "expected": "*"
                        }
                ]
        },
        {
                "id": "bee_1058",
                "number": 1058,
                "title": "Detector de Número Primo",
                "category": "cat4",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Um número inteiro maior que 1 é PRIMO se for divisível apenas por 1 e por ele mesmo. Leia um inteiro N (N >= 2) e imprima PRIMO ou NAO PRIMO.",
                "inputSpec": "Um número inteiro N >= 2.",
                "outputSpec": "Imprima PRIMO ou NAO PRIMO.",
                "starterCode": "# Desafio #1058 — Detector de Número Primo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `7`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Use `for i in range(inicio, fim + 1):` quando souber onde a contagem começa e termina (lembrando que o `range` para um número antes do limite final!).\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima PRIMO ou NAO PRIMO.*\n• Compare sua saída com o exemplo `PRIMO` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "7",
                                "expected": "PRIMO"
                        },
                        {
                                "input": "12",
                                "expected": "NAO PRIMO"
                        },
                        {
                                "input": "2",
                                "expected": "PRIMO"
                        }
                ]
        },
        {
                "id": "bee_1059",
                "number": 1059,
                "title": "Divisores de um Número",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Ler um número inteiro N e calcular todos os seus divisores positivos em ordem crescente, um por linha.",
                "inputSpec": "Um número inteiro N.",
                "outputSpec": "Todos os divisores de N, um por linha.",
                "starterCode": "# Desafio #1059 — Divisores de um Número\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `6`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Crie uma variável **acumuladora** (ex: `soma = 0` ou `contador = 0`) ANTES do laço começar, e atualize seu valor dentro do bloco repetido usando `+=`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Todos os divisores de N, um por linha.*\n• Compare sua saída com o exemplo `1 ↵ 2 ↵ 3 ↵ 6` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "6",
                                "expected": "1\n2\n3\n6"
                        },
                        {
                                "input": "10",
                                "expected": "1\n2\n5\n10"
                        },
                        {
                                "input": "7",
                                "expected": "1\n7"
                        }
                ]
        },
        {
                "id": "bee_1060",
                "number": 1060,
                "title": "Soma até Digitar Zero (While Sentinela)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia vários números inteiros (um por linha) até que o número 0 seja digitado. Quando o 0 aparecer, pare de ler e mostre a soma de todos os números lidos.",
                "inputSpec": "Várias linhas com inteiros, terminando com 0.",
                "outputSpec": "Imprima: TOTAL = X",
                "starterCode": "# Desafio #1060 — Soma até Digitar Zero (While Sentinela)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **4 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Como a repetição depende de uma condição dinâmica (ou de um valor de parada como `0`), utilize um laço **`while`** ou `while True:` com `break` quando o valor de parada for lido.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: TOTAL = X*\n• Compare sua saída com o exemplo `TOTAL = 35` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10\n20\n5\n0",
                                "expected": "TOTAL = 35"
                        },
                        {
                                "input": "4\n-2\n8\n0",
                                "expected": "TOTAL = 10"
                        },
                        {
                                "input": "0",
                                "expected": "TOTAL = 0"
                        }
                ]
        },
        {
                "id": "bee_1061",
                "number": 1061,
                "title": "Validador de Senha Fixa (2002)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Clássico Beecrowd #1114! Escreva um programa que repita a leitura de uma senha até que ela seja válida (2002). Para cada leitura incorreta, escrever 'Senha Invalida'. Quando a senha for '2002', escrever 'Acesso Permitido' e encerrar.",
                "inputSpec": "Várias linhas com tentativas de senha até aparecer 2002.",
                "outputSpec": "'Senha Invalida' para cada erro e 'Acesso Permitido' no final.",
                "starterCode": "# Desafio #1061 — Validador de Senha Fixa (2002)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **4 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Como a repetição depende de uma condição dinâmica (ou de um valor de parada como `0`), utilize um laço **`while`** ou `while True:` com `break` quando o valor de parada for lido.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *'Senha Invalida' para cada erro e 'Acesso Permitido' no final.*\n• Compare sua saída com o exemplo `Senha Invalida ↵ Senha Invalida ↵ Senha Invalida ↵ Acesso Permitido` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "2200\n1020\n2022\n2002",
                                "expected": "Senha Invalida\nSenha Invalida\nSenha Invalida\nAcesso Permitido"
                        },
                        {
                                "input": "2002",
                                "expected": "Acesso Permitido"
                        },
                        {
                                "input": "1234\n2002",
                                "expected": "Senha Invalida\nAcesso Permitido"
                        }
                ]
        },
        {
                "id": "bee_1062",
                "number": 1062,
                "title": "Divisão Blindada contra Zero (try/except)",
                "category": "cat4",
                "difficulty": "Médio",
                "xp": 45,
                "description": "Leia dois inteiros A e B. Tente calcular a divisão inteira A // B dentro de um bloco try. Se B for 0 (ZeroDivisionError), capture o erro e imprima 'DIVISAO IMPOSSIVEL'. Caso contrário, imprima 'RESULTADO = X'.",
                "inputSpec": "Dois números inteiros A e B.",
                "outputSpec": "Imprima RESULTADO = X ou DIVISAO IMPOSSIVEL.",
                "starterCode": "# Desafio #1062 — Divisão Blindada contra Zero (try/except)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Como a repetição depende de uma condição dinâmica (ou de um valor de parada como `0`), utilize um laço **`while`** ou `while True:` com `break` quando o valor de parada for lido.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima RESULTADO = X ou DIVISAO IMPOSSIVEL.*\n• Compare sua saída com o exemplo `RESULTADO = 5` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "20\n4",
                                "expected": "RESULTADO = 5"
                        },
                        {
                                "input": "15\n0",
                                "expected": "DIVISAO IMPOSSIVEL"
                        },
                        {
                                "input": "9\n2",
                                "expected": "RESULTADO = 4"
                        }
                ]
        },
        {
                "id": "bee_1063",
                "number": 1063,
                "title": "Conjectura de Collatz (Passos até 1)",
                "category": "cat4",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Dado um inteiro positivo N: enquanto N > 1, se N for par divida por 2 (N = N // 2); se N for ímpar multiplique por 3 e some 1 (N = 3 * N + 1). Conte quantos passos são necessários até N chegar em 1.",
                "inputSpec": "Um número inteiro positivo N.",
                "outputSpec": "Imprima: PASSOS = X",
                "starterCode": "# Desafio #1063 — Conjectura de Collatz (Passos até 1)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `6`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este problema exige repetição de passos (loops).\n• Como a repetição depende de uma condição dinâmica (ou de um valor de parada como `0`), utilize um laço **`while`** ou `while True:` com `break` quando o valor de parada for lido.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: PASSOS = X*\n• Compare sua saída com o exemplo `PASSOS = 8` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "6",
                                "expected": "PASSOS = 8"
                        },
                        {
                                "input": "1",
                                "expected": "PASSOS = 0"
                        },
                        {
                                "input": "3",
                                "expected": "PASSOS = 7"
                        }
                ]
        },
        {
                "id": "bee_1018",
                "number": 1018,
                "title": "Maior e Menor da Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia 4 números inteiros (um em cada linha), guarde-os dentro de uma lista Python e depois mostre qual é o maior e qual é o menor valor da lista.",
                "inputSpec": "4 números inteiros, um por linha.",
                "outputSpec": "Duas linhas:\nMAIOR = X\nMENOR = Y",
                "starterCode": "# Desafio #1018 — Maior e Menor da Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **4 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Duas linhas: | MAIOR = X | MENOR = Y*\n• Compare sua saída com o exemplo `MAIOR = 45 ↵ MENOR = 3` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10\n45\n3\n28",
                                "expected": "MAIOR = 45\nMENOR = 3"
                        },
                        {
                                "input": "-5\n0\n12\n-20",
                                "expected": "MAIOR = 12\nMENOR = -20"
                        },
                        {
                                "input": "7\n7\n7\n7",
                                "expected": "MAIOR = 7\nMENOR = 7"
                        }
                ]
        },
        {
                "id": "bee_1021",
                "number": 1021,
                "title": "Caçador de Números Pares na Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia 5 números inteiros (um por linha), armazene em uma lista e conte quantos deles são números PARES.",
                "inputSpec": "5 números inteiros, um em cada linha.",
                "outputSpec": "Imprima \"PARES = X\" com a quantidade de números pares encontrados.",
                "starterCode": "# Desafio #1021 — Caçador de Números Pares na Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **5 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"PARES = X\" com a quantidade de números pares encontrados.*\n• Compare sua saída com o exemplo `PARES = 3` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "2\n5\n8\n11\n14",
                                "expected": "PARES = 3"
                        },
                        {
                                "input": "1\n3\n5\n7\n9",
                                "expected": "PARES = 0"
                        },
                        {
                                "input": "4\n6\n0\n-2\n10",
                                "expected": "PARES = 5"
                        }
                ]
        },
        {
                "id": "bee_1064",
                "number": 1064,
                "title": "Soma de Todos os Elementos da Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma linha com vários números inteiros separados por espaço, converta para uma lista de inteiros e mostre a soma total deles.",
                "inputSpec": "Uma linha com números inteiros separados por espaço.",
                "outputSpec": "Imprima: SOMA = X",
                "starterCode": "# Desafio #1064 — Soma de Todos os Elementos da Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Os valores vêm em uma única linha separados por espaço (ex: `10 20 30 40`). Use `input().split()` para separar os itens e converta cada um para inteiro com `[int(x) for x in input().split()]` ou `map(int, input().split())`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: SOMA = X*\n• Compare sua saída com o exemplo `SOMA = 100` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10 20 30 40",
                                "expected": "SOMA = 100"
                        },
                        {
                                "input": "5 -2 8 1",
                                "expected": "SOMA = 12"
                        },
                        {
                                "input": "100",
                                "expected": "SOMA = 100"
                        }
                ]
        },
        {
                "id": "bee_1065",
                "number": 1065,
                "title": "Inverter Ordem da Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma linha com palavras separadas por espaço, guarde em uma lista e imprima os itens na ordem inversa (do último para o primeiro), separados por espaço.",
                "inputSpec": "Uma linha com palavras separadas por espaço.",
                "outputSpec": "As palavras na ordem inversa, na mesma linha.",
                "starterCode": "# Desafio #1065 — Inverter Ordem da Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Leia a linha inteira com `input()` e, se precisar separar as palavras por espaço, utilize o método `.split()` (que transforma a frase em uma lista de palavras).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *As palavras na ordem inversa, na mesma linha.*\n• Compare sua saída com o exemplo `bronze prata ouro` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "ouro prata bronze",
                                "expected": "bronze prata ouro"
                        },
                        {
                                "input": "A B C D",
                                "expected": "D C B A"
                        },
                        {
                                "input": "Python Flet",
                                "expected": "Flet Python"
                        }
                ]
        },
        {
                "id": "bee_1066",
                "number": 1066,
                "title": "Remover Duplicatas Mantendo a Ordem",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia uma sequência de números separados por espaço e crie uma nova lista sem números repetidos, preservando a ordem em que apareceram pela primeira vez.",
                "inputSpec": "Uma linha de números separados por espaço.",
                "outputSpec": "Os números únicos separados por espaço.",
                "starterCode": "# Desafio #1066 — Remover Duplicatas Mantendo a Ordem\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Os valores vêm em uma única linha separados por espaço (ex: `1 2 2 3 1 4`). Use `input().split()` para separar os itens e converta cada um para inteiro com `[int(x) for x in input().split()]` ou `map(int, input().split())`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Os números únicos separados por espaço.*\n• Compare sua saída com o exemplo `1 2 3 4` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "1 2 2 3 1 4",
                                "expected": "1 2 3 4"
                        },
                        {
                                "input": "5 5 5 5",
                                "expected": "5"
                        },
                        {
                                "input": "9 8 7 8 9",
                                "expected": "9 8 7"
                        }
                ]
        },
        {
                "id": "bee_1067",
                "number": 1067,
                "title": "Vice-Campeão (Segundo Maior Valor)",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Em um torneio de e-sports, queremos premiar o 2º colocado! Leia uma linha de pontuações inteiras distintas separadas por espaço e mostre a segunda maior pontuação.",
                "inputSpec": "Pelo menos 2 números inteiros distintos separados por espaço.",
                "outputSpec": "Imprima: VICE = X",
                "starterCode": "# Desafio #1067 — Vice-Campeão (Segundo Maior Valor)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Os valores vêm em uma única linha separados por espaço (ex: `10 50 30 80 40`). Use `input().split()` para separar os itens e converta cada um para inteiro com `[int(x) for x in input().split()]` ou `map(int, input().split())`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: VICE = X*\n• Compare sua saída com o exemplo `VICE = 50` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10 50 30 80 40",
                                "expected": "VICE = 50"
                        },
                        {
                                "input": "100 200",
                                "expected": "VICE = 100"
                        },
                        {
                                "input": "5 9 2 7",
                                "expected": "VICE = 7"
                        }
                ]
        },
        {
                "id": "bee_1068",
                "number": 1068,
                "title": "Acima da Média da Turma",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia uma linha com várias notas inteiras separadas por espaço. Calcule a média da turma e conte quantos alunos tiveram nota estritamente maior que a média.",
                "inputSpec": "Uma linha de inteiros separados por espaço.",
                "outputSpec": "Imprima: ACIMA = X",
                "starterCode": "# Desafio #1068 — Acima da Média da Turma\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Os valores vêm em uma única linha separados por espaço (ex: `5 7 8 10`). Use `input().split()` para separar os itens e converta cada um para inteiro com `[int(x) for x in input().split()]` ou `map(int, input().split())`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: ACIMA = X*\n• Compare sua saída com o exemplo `ACIMA = 2` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "5 7 8 10",
                                "expected": "ACIMA = 2"
                        },
                        {
                                "input": "6 6 6 6",
                                "expected": "ACIMA = 0"
                        },
                        {
                                "input": "2 4 6 8 10",
                                "expected": "ACIMA = 2"
                        }
                ]
        },
        {
                "id": "bee_1069",
                "number": 1069,
                "title": "Ordenação Crescente de Lista",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma lista de números inteiros separados por espaço, ordene do menor para o maior e imprima os números ordenados separados por espaço.",
                "inputSpec": "Uma linha de números inteiros separados por espaço.",
                "outputSpec": "Os números em ordem crescente separados por espaço.",
                "starterCode": "# Desafio #1069 — Ordenação Crescente de Lista\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Os valores vêm em uma única linha separados por espaço (ex: `9 3 7 1 5`). Use `input().split()` para separar os itens e converta cada um para inteiro com `[int(x) for x in input().split()]` ou `map(int, input().split())`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Os números em ordem crescente separados por espaço.*\n• Compare sua saída com o exemplo `1 3 5 7 9` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "9 3 7 1 5",
                                "expected": "1 3 5 7 9"
                        },
                        {
                                "input": "10 -5 0 3",
                                "expected": "-5 0 3 10"
                        },
                        {
                                "input": "4 2",
                                "expected": "2 4"
                        }
                ]
        },
        {
                "id": "bee_1070",
                "number": 1070,
                "title": "Contagem de Ocorrências do Alvo",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Na 1ª linha leia vários números separados por espaço. Na 2ª linha leia um número ALVO. Mostre quantas vezes o ALVO aparece na lista.",
                "inputSpec": "1ª linha: números separados por espaço. 2ª linha: número alvo.",
                "outputSpec": "Imprima: APARECEU = X",
                "starterCode": "# Desafio #1070 — Contagem de Ocorrências do Alvo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: APARECEU = X*\n• Compare sua saída com o exemplo `APARECEU = 3` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "1 4 2 4 5 4\n4",
                                "expected": "APARECEU = 3"
                        },
                        {
                                "input": "10 20 30\n5",
                                "expected": "APARECEU = 0"
                        },
                        {
                                "input": "7 7 7\n7",
                                "expected": "APARECEU = 3"
                        }
                ]
        },
        {
                "id": "bee_1071",
                "number": 1071,
                "title": "Produto Escalar de Dois Vetores",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia duas linhas, cada uma com 3 números inteiros separados por espaço (representando dois vetores A e B). Calcule o produto escalar: A[0]*B[0] + A[1]*B[1] + A[2]*B[2].",
                "inputSpec": "Duas linhas, cada uma com 3 inteiros separados por espaço.",
                "outputSpec": "Imprima: ESCALAR = X",
                "starterCode": "# Desafio #1071 — Produto Escalar de Dois Vetores\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: ESCALAR = X*\n• Compare sua saída com o exemplo `ESCALAR = 32` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "1 2 3\n4 5 6",
                                "expected": "ESCALAR = 32"
                        },
                        {
                                "input": "2 0 -1\n3 5 2",
                                "expected": "ESCALAR = 4"
                        },
                        {
                                "input": "0 0 0\n1 2 3",
                                "expected": "ESCALAR = 0"
                        }
                ]
        },
        {
                "id": "bee_1072",
                "number": 1072,
                "title": "Intercalação de Duas Listas",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia duas listas de 3 palavras cada (uma lista por linha) e gere uma única lista intercalando os elementos: A1 B1 A2 B2 A3 B3.",
                "inputSpec": "Duas linhas com 3 palavras cada.",
                "outputSpec": "As 6 palavras intercaladas separadas por espaço.",
                "starterCode": "# Desafio #1072 — Intercalação de Duas Listas\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *As 6 palavras intercaladas separadas por espaço.*\n• Compare sua saída com o exemplo `A 1 B 2 C 3` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "A B C\n1 2 3",
                                "expected": "A 1 B 2 C 3"
                        },
                        {
                                "input": "Sol Mar Ceo\nLua Rio Paz",
                                "expected": "Sol Lua Mar Rio Ceo Paz"
                        },
                        {
                                "input": "X Y Z\nA B C",
                                "expected": "X A Y B Z C"
                        }
                ]
        },
        {
                "id": "bee_1073",
                "number": 1073,
                "title": "Amplitude da Amostra (Max - Min)",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Na estatística, a amplitude de um conjunto de dados é a diferença entre o maior e o menor valor. Leia uma linha de inteiros e mostre a amplitude.",
                "inputSpec": "Uma linha de inteiros separados por espaço.",
                "outputSpec": "Imprima: AMPLITUDE = X",
                "starterCode": "# Desafio #1073 — Amplitude da Amostra (Max - Min)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Os valores vêm em uma única linha separados por espaço (ex: `10 25 5 40 18`). Use `input().split()` para separar os itens e converta cada um para inteiro com `[int(x) for x in input().split()]` ou `map(int, input().split())`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: AMPLITUDE = X*\n• Compare sua saída com o exemplo `AMPLITUDE = 35` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10 25 5 40 18",
                                "expected": "AMPLITUDE = 35"
                        },
                        {
                                "input": "7 7 7",
                                "expected": "AMPLITUDE = 0"
                        },
                        {
                                "input": "-10 0 15",
                                "expected": "AMPLITUDE = 25"
                        }
                ]
        },
        {
                "id": "bee_1074",
                "number": 1074,
                "title": "Soma da Diagonal Principal (Matriz 3x3)",
                "category": "cat5",
                "difficulty": "Avançado",
                "xp": 60,
                "description": "Leia uma matriz 3x3 (3 linhas, cada uma com 3 inteiros separados por espaço) e calcule a soma dos elementos da diagonal principal (posições [0][0], [1][1] e [2][2]).",
                "inputSpec": "3 linhas com 3 inteiros cada.",
                "outputSpec": "Imprima: DIAGONAL = X",
                "starterCode": "# Desafio #1074 — Soma da Diagonal Principal (Matriz 3x3)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **3 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: DIAGONAL = X*\n• Compare sua saída com o exemplo `DIAGONAL = 15` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "1 2 3\n4 5 6\n7 8 9",
                                "expected": "DIAGONAL = 15"
                        },
                        {
                                "input": "10 0 0\n0 20 0\n0 0 30",
                                "expected": "DIAGONAL = 60"
                        },
                        {
                                "input": "2 1 1\n1 2 1\n1 1 2",
                                "expected": "DIAGONAL = 6"
                        }
                ]
        },
        {
                "id": "bee_1075",
                "number": 1075,
                "title": "Rotação de Fila para a Esquerda",
                "category": "cat5",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia uma fila de nomes separados por espaço. Mova o primeiro da fila para o final da fila e imprima a nova formação.",
                "inputSpec": "Uma linha com pelo menos 2 nomes separados por espaço.",
                "outputSpec": "A fila após mover o 1º elemento para o final.",
                "starterCode": "# Desafio #1075 — Rotação de Fila para a Esquerda\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Leia a linha inteira com `input()` e, se precisar separar as palavras por espaço, utilize o método `.split()` (que transforma a frase em uma lista de palavras).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Aqui o objetivo é **blindar o programa contra falhas** usando tratamento de exceções (`try / except`).\n• Coloque a leitura/conversão numérica (ex: `int(input())` ou `float(input())`) e a operação dentro do bloco `try:`.\n• Caso o usuário digite texto inválido ou tente dividir por zero, capture o erro no bloco `except ValueError:` (ou `except ZeroDivisionError:`) e imprima a mensagem de erro exata pedida.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *A fila após mover o 1º elemento para o final.*\n• Compare sua saída com o exemplo `Bruno Carlos Diana Ana` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Ana Bruno Carlos Diana",
                                "expected": "Bruno Carlos Diana Ana"
                        },
                        {
                                "input": "Primeiro Segundo",
                                "expected": "Segundo Primeiro"
                        },
                        {
                                "input": "10 20 30",
                                "expected": "20 30 10"
                        }
                ]
        },
        {
                "id": "bee_1019",
                "number": 1019,
                "title": "Contador de Vogais",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma palavra ou frase e conte quantas vogais (a, e, i, o, u — tanto maiúsculas quanto minúsculas, sem acento) aparecem nela.",
                "inputSpec": "Uma linha de texto.",
                "outputSpec": "Imprima \"VOGAIS = X\" onde X é a quantidade total de vogais.",
                "starterCode": "# Desafio #1019 — Contador de Vogais\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Programador\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"VOGAIS = X\" onde X é a quantidade total de vogais.*\n• Compare sua saída com o exemplo `VOGAIS = 4` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Programador",
                                "expected": "VOGAIS = 4"
                        },
                        {
                                "input": "CEFET MG",
                                "expected": "VOGAIS = 2"
                        },
                        {
                                "input": "Python",
                                "expected": "VOGAIS = 1"
                        }
                ]
        },
        {
                "id": "bee_1020",
                "number": 1020,
                "title": "Mensagem Espelhada (Inversor)",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Para decifrar um pergaminho secreto do jogo, você precisa ler uma palavra, transformá-la em letras MAIÚSCULAS e imprimi-la de trás para frente (invertida)!",
                "inputSpec": "Uma palavra ou frase em uma linha.",
                "outputSpec": "A palavra invertida e toda em letras maiúsculas.",
                "starterCode": "# Desafio #1020 — Mensagem Espelhada (Inversor)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"python\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *A palavra invertida e toda em letras maiúsculas.*\n• Compare sua saída com o exemplo `NOHTYP` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "python",
                                "expected": "NOHTYP"
                        },
                        {
                                "input": "cefet",
                                "expected": "TEFEC"
                        },
                        {
                                "input": "radar",
                                "expected": "RADAR"
                        }
                ]
        },
        {
                "id": "bee_1076",
                "number": 1076,
                "title": "Detector de Palíndromo",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Um palíndromo é uma palavra ou frase que é lida da mesma forma da esquerda para a direita e da direita para a esquerda (desconsiderando espaços e maiúsculas, ex: 'arara', 'apos a sopa'). Leia um texto e imprima PALINDROMO ou COMUM.",
                "inputSpec": "Uma linha de texto.",
                "outputSpec": "Imprima PALINDROMO ou COMUM.",
                "starterCode": "# Desafio #1076 — Detector de Palíndromo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Arara\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima PALINDROMO ou COMUM.*\n• Compare sua saída com o exemplo `PALINDROMO` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Arara",
                                "expected": "PALINDROMO"
                        },
                        {
                                "input": "Apos a sopa",
                                "expected": "PALINDROMO"
                        },
                        {
                                "input": "Python",
                                "expected": "COMUM"
                        }
                ]
        },
        {
                "id": "bee_1077",
                "number": 1077,
                "title": "Contador de Palavras na Frase",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma frase completa e informe quantas palavras existem nela.",
                "inputSpec": "Uma linha contendo uma frase.",
                "outputSpec": "Imprima: PALAVRAS = X",
                "starterCode": "# Desafio #1077 — Contador de Palavras na Frase\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Trilhando o Caminho do Codigo\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: PALAVRAS = X*\n• Compare sua saída com o exemplo `PALAVRAS = 5` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Trilhando o Caminho do Codigo",
                                "expected": "PALAVRAS = 5"
                        },
                        {
                                "input": "Python",
                                "expected": "PALAVRAS = 1"
                        },
                        {
                                "input": "Eu curto programar jogos em Python",
                                "expected": "PALAVRAS = 6"
                        }
                ]
        },
        {
                "id": "bee_1078",
                "number": 1078,
                "title": "Gerador de Sigla / Acrônimo",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia um nome composto ou frase e gere uma sigla formada pela primeira letra de cada palavra em MAIÚSCULO.",
                "inputSpec": "Uma linha com palavras separadas por espaço.",
                "outputSpec": "A sigla em letras maiúsculas.",
                "starterCode": "# Desafio #1078 — Gerador de Sigla / Acrônimo\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Leia a linha inteira com `input()` e, se precisar separar as palavras por espaço, utilize o método `.split()` (que transforma a frase em uma lista de palavras).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *A sigla em letras maiúsculas.*\n• Compare sua saída com o exemplo `CFDET` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Centro Federal de Educacao Tecnologica",
                                "expected": "CFDET"
                        },
                        {
                                "input": "Inteligencia Artificial Generativa",
                                "expected": "IAG"
                        },
                        {
                                "input": "Objetivos Desenvolvimento Sustentavel",
                                "expected": "ODS"
                        }
                ]
        },
        {
                "id": "bee_1079",
                "number": 1079,
                "title": "Censura Secreta (Trocar Vogais por *)",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma mensagem e substitua todas as vogais (maiúsculas ou minúsculas) pelo caractere asterisco (*), mantendo as consoantes e espaços intactos.",
                "inputSpec": "Uma linha de texto.",
                "outputSpec": "O texto com vogais substituídas por *.",
                "starterCode": "# Desafio #1079 — Censura Secreta (Trocar Vogais por *)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Secreto\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *O texto com vogais substituídas por *.*\n• Compare sua saída com o exemplo `S*cr*t*` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Secreto",
                                "expected": "S*cr*t*"
                        },
                        {
                                "input": "Python 3",
                                "expected": "Pyth*n 3"
                        },
                        {
                                "input": "CEFET",
                                "expected": "C*F*T"
                        }
                ]
        },
        {
                "id": "bee_1080",
                "number": 1080,
                "title": "Soma dos Dígitos de um Número Gigante",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia um número inteiro positivo grande (como texto) e calcule a soma de todos os seus algarismos individuais (ex: '2026' -> 2 + 0 + 2 + 6 = 10).",
                "inputSpec": "Uma string contendo apenas dígitos numéricos.",
                "outputSpec": "Imprima: SOMA DOS DIGITOS = X",
                "starterCode": "# Desafio #1080 — Soma dos Dígitos de um Número Gigante\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `2026`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Explore funções nativas de listas como `len(lista)`, `sum(lista)`, `max(lista)`, `min(lista)` e `sorted(lista)`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: SOMA DOS DIGITOS = X*\n• Compare sua saída com o exemplo `SOMA DOS DIGITOS = 10` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "2026",
                                "expected": "SOMA DOS DIGITOS = 10"
                        },
                        {
                                "input": "999",
                                "expected": "SOMA DOS DIGITOS = 27"
                        },
                        {
                                "input": "12345",
                                "expected": "SOMA DOS DIGITOS = 15"
                        }
                ]
        },
        {
                "id": "bee_1081",
                "number": 1081,
                "title": "Verificador de Anagramas",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Duas palavras são anagramas se possuem exatamente as mesmas letras em qualquer ordem (ex: 'amor' e 'roma'). Leia duas palavras e imprima ANAGRAMA ou DIFERENTES.",
                "inputSpec": "Duas linhas contendo uma palavra cada.",
                "outputSpec": "Imprima ANAGRAMA ou DIFERENTES.",
                "starterCode": "# Desafio #1081 — Verificador de Anagramas\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima ANAGRAMA ou DIFERENTES.*\n• Compare sua saída com o exemplo `ANAGRAMA` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "amor\nroma",
                                "expected": "ANAGRAMA"
                        },
                        {
                                "input": "iracema\namerica",
                                "expected": "ANAGRAMA"
                        },
                        {
                                "input": "python\njava",
                                "expected": "DIFERENTES"
                        }
                ]
        },
        {
                "id": "bee_1082",
                "number": 1082,
                "title": "Cifra de César (+3 Posições)",
                "category": "cat6",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Júlio César protegia suas mensagens trocando cada letra maiúscula por outra 3 posições à frente no alfabeto (A->D, B->E, ..., X->A, Y->B, Z->C). Leia uma palavra em letras MAIÚSCULAS (A-Z) e codifique-a com deslocamento +3.",
                "inputSpec": "Uma palavra contendo apenas letras maiúsculas de A a Z.",
                "outputSpec": "A palavra cifrada.",
                "starterCode": "# Desafio #1082 — Cifra de César (+3 Posições)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"ABC\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *A palavra cifrada.*\n• Compare sua saída com o exemplo `DEF` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "ABC",
                                "expected": "DEF"
                        },
                        {
                                "input": "PYTHON",
                                "expected": "SBWKRQ"
                        },
                        {
                                "input": "XYZ",
                                "expected": "ABC"
                        }
                ]
        },
        {
                "id": "bee_1083",
                "number": 1083,
                "title": "Formatador de CPF",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma string contendo exatamente 11 dígitos numéricos (ex: 12345678901) e formate-a no padrão oficial de CPF: XXX.XXX.XXX-XX.",
                "inputSpec": "Uma linha com 11 dígitos.",
                "outputSpec": "O CPF formatado com pontos e traço.",
                "starterCode": "# Desafio #1083 — Formatador de CPF\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"12345678901\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *O CPF formatado com pontos e traço.*\n• Compare sua saída com o exemplo `123.456.789-01` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "12345678901",
                                "expected": "123.456.789-01"
                        },
                        {
                                "input": "00011122233",
                                "expected": "000.111.222-33"
                        },
                        {
                                "input": "98765432199",
                                "expected": "987.654.321-99"
                        }
                ]
        },
        {
                "id": "bee_1084",
                "number": 1084,
                "title": "Palavra Mais Longa da Frase",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Leia uma frase e descubra qual é a palavra com o maior número de letras. Se houver empate, mantenha a primeira que apareceu.",
                "inputSpec": "Uma frase em uma linha.",
                "outputSpec": "Imprima: MAIOR PALAVRA = X",
                "starterCode": "# Desafio #1084 — Palavra Mais Longa da Frase\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Eu estudo programacao no CEFET\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: MAIOR PALAVRA = X*\n• Compare sua saída com o exemplo `MAIOR PALAVRA = programacao` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Eu estudo programacao no CEFET",
                                "expected": "MAIOR PALAVRA = programacao"
                        },
                        {
                                "input": "Sol Lua Estrela Mar",
                                "expected": "MAIOR PALAVRA = Estrela"
                        },
                        {
                                "input": "Python Flet",
                                "expected": "MAIOR PALAVRA = Python"
                        }
                ]
        },
        {
                "id": "bee_1085",
                "number": 1085,
                "title": "Validador de Senha Forte",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 55,
                "description": "Uma senha é considerada FORTE se tiver pelo menos 8 caracteres E contiver pelo menos um número (0-9). Caso contrário, é FRACA. Leia uma senha e classifique-a.",
                "inputSpec": "Uma string representando a senha.",
                "outputSpec": "Imprima FORTE ou FRACA.",
                "starterCode": "# Desafio #1085 — Validador de Senha Forte\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Python2026\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Explore funções nativas de listas como `len(lista)`, `sum(lista)`, `max(lista)`, `min(lista)` e `sorted(lista)`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima FORTE ou FRACA.*\n• Compare sua saída com o exemplo `FORTE` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Python2026",
                                "expected": "FORTE"
                        },
                        {
                                "input": "Abc123",
                                "expected": "FRACA"
                        },
                        {
                                "input": "SomenteLetras",
                                "expected": "FRACA"
                        }
                ]
        },
        {
                "id": "bee_1086",
                "number": 1086,
                "title": "Conversor Snake_Case",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Em Python, nomes de variáveis usam o estilo snake_case (tudo em minúsculo e espaços trocados por underline _). Leia um título e converta para snake_case.",
                "inputSpec": "Uma linha de texto.",
                "outputSpec": "O texto em minúsculas com espaços substituídos por _.",
                "starterCode": "# Desafio #1086 — Conversor Snake_Case\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"Nome Completo do Aluno\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Explore funções nativas de listas como `len(lista)`, `sum(lista)`, `max(lista)`, `min(lista)` e `sorted(lista)`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *O texto em minúsculas com espaços substituídos por _.*\n• Compare sua saída com o exemplo `nome_completo_do_aluno` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Nome Completo do Aluno",
                                "expected": "nome_completo_do_aluno"
                        },
                        {
                                "input": "Pontuacao Maxima",
                                "expected": "pontuacao_maxima"
                        },
                        {
                                "input": "Trilhando Python",
                                "expected": "trilhando_python"
                        }
                ]
        },
        {
                "id": "bee_1087",
                "number": 1087,
                "title": "Contador de Letras Maiúsculas",
                "category": "cat6",
                "difficulty": "Intermediário",
                "xp": 50,
                "description": "Leia uma frase e conte quantas letras MAIÚSCULAS (A-Z) existem nela.",
                "inputSpec": "Uma linha de texto.",
                "outputSpec": "Imprima: MAIUSCULAS = X",
                "starterCode": "# Desafio #1087 — Contador de Letras Maiúsculas\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"CEFET-MG e FAPEMIG\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Este desafio explora coleções de dados (**Listas** ou **Strings**).\n• Para manipular textos (`str`), lembre-se que `texto[::-1]` inverte uma string, `.upper()` / `.lower()` alteram a caixa das letras, `.replace(antigo, novo)` substitui trechos e você pode percorrer letra por letra com `for letra in texto:`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: MAIUSCULAS = X*\n• Compare sua saída com o exemplo `MAIUSCULAS = 14` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "CEFET-MG e FAPEMIG",
                                "expected": "MAIUSCULAS = 14"
                        },
                        {
                                "input": "Python",
                                "expected": "MAIUSCULAS = 1"
                        },
                        {
                                "input": "tudo minusculo",
                                "expected": "MAIUSCULAS = 0"
                        }
                ]
        },
        {
                "id": "bee_1022",
                "number": 1022,
                "title": "Função de Dano Crítico (def)",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Crie uma função chamada calcular_dano(ataque, multiplicador) usando def que devolva (return) o ataque multiplicado pelo multiplicador mais um bônus fixo de 10 pontos. Depois leia os dois inteiros e mostre o resultado.",
                "inputSpec": "Dois números inteiros (ataque e multiplicador), um por linha.",
                "outputSpec": "Imprima \"DANO TOTAL = X\".",
                "starterCode": "# Desafio #1022 — Função de Dano Crítico (def)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Organize seu código usando estruturas modulares (**Funções `def`** ou **Dicionários**).\n• Defina sua função com `def nome_da_funcao(parametros):`, calcule o resultado lá dentro e devolva com `return`. Depois, leia a entrada e chame sua função dentro do `print()`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima \"DANO TOTAL = X\".*\n• Compare sua saída com o exemplo `DANO TOTAL = 70` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "20\n3",
                                "expected": "DANO TOTAL = 70"
                        },
                        {
                                "input": "15\n2",
                                "expected": "DANO TOTAL = 40"
                        },
                        {
                                "input": "50\n1",
                                "expected": "DANO TOTAL = 60"
                        }
                ]
        },
        {
                "id": "bee_1023",
                "number": 1023,
                "title": "Ficha de Herói com Dicionário",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 70,
                "description": "Armazene os dados de um personagem em um dicionário Python contendo \"nome\", \"nivel\" (int) e \"xp\" (int). Se o xp for maior ou igual a 100, aumente o nível do herói em +1! Ao final, imprima a ficha atualizada.",
                "inputSpec": "3 linhas: Nome (str), Nível atual (int) e XP acumulado (int).",
                "outputSpec": "Imprima: Heroi: NOME | Nivel: X",
                "starterCode": "# Desafio #1023 — Ficha de Herói com Dicionário\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **3 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Organize seu código usando estruturas modulares (**Funções `def`** ou **Dicionários**).\n• Use um **dicionário** `{chave: valor}` para associar cada identificador ao seu respectivo dado. O método `dicionario.get(chave, valor_padrao)` é excelente para buscar uma chave com segurança sem gerar erro caso ela não exista!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: Heroi: NOME | Nivel: X*\n• Compare sua saída com o exemplo `Heroi: Arthas | Nivel: 6` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Arthas\n5\n120",
                                "expected": "Heroi: Arthas | Nivel: 6"
                        },
                        {
                                "input": "Jaina\n3\n80",
                                "expected": "Heroi: Jaina | Nivel: 3"
                        },
                        {
                                "input": "Thrall\n10\n100",
                                "expected": "Heroi: Thrall | Nivel: 11"
                        }
                ]
        },
        {
                "id": "bee_1088",
                "number": 1088,
                "title": "Cardápio da Lanchonete (Dicionário)",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 60,
                "description": "Use um dicionário com os códigos e preços de lanches: 1 -> 4.00, 2 -> 4.50, 3 -> 5.00, 4 -> 2.00, 5 -> 1.50. Leia o código do item e a quantidade, e mostre o total com 2 casas decimais.",
                "inputSpec": "Dois inteiros (código e quantidade), um por linha.",
                "outputSpec": "Imprima: Total: R$ X.XX",
                "starterCode": "# Desafio #1088 — Cardápio da Lanchonete (Dicionário)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Organize seu código usando estruturas modulares (**Funções `def`** ou **Dicionários**).\n• Use um **dicionário** `{chave: valor}` para associar cada identificador ao seu respectivo dado. O método `dicionario.get(chave, valor_padrao)` é excelente para buscar uma chave com segurança sem gerar erro caso ela não exista!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: Total: R$ X.XX* Formate o resultado com **2 casas decimais** usando `{valor:.2f}` dentro da f-string.\n• Compare sua saída com o exemplo `Total: R$ 10.00` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "3\n2",
                                "expected": "Total: R$ 10.00"
                        },
                        {
                                "input": "4\n3",
                                "expected": "Total: R$ 6.00"
                        },
                        {
                                "input": "2\n3",
                                "expected": "Total: R$ 13.50"
                        }
                ]
        },
        {
                "id": "bee_1089",
                "number": 1089,
                "title": "Tradutor de Cores Inglês-Português",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 60,
                "description": "Crie um dicionário que traduza: red -> vermelho, blue -> azul, green -> verde, yellow -> amarelo. Se a cor digitada não estiver no dicionário, imprima COR DESCONHECIDA.",
                "inputSpec": "Uma palavra em inglês (minúscula).",
                "outputSpec": "A tradução em português ou COR DESCONHECIDA.",
                "starterCode": "# Desafio #1089 — Tradutor de Cores Inglês-Português\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"blue\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Organize seu código usando estruturas modulares (**Funções `def`** ou **Dicionários**).\n• Use um **dicionário** `{chave: valor}` para associar cada identificador ao seu respectivo dado. O método `dicionario.get(chave, valor_padrao)` é excelente para buscar uma chave com segurança sem gerar erro caso ela não exista!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *A tradução em português ou COR DESCONHECIDA.*\n• Compare sua saída com o exemplo `azul` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "blue",
                                "expected": "azul"
                        },
                        {
                                "input": "green",
                                "expected": "verde"
                        },
                        {
                                "input": "purple",
                                "expected": "COR DESCONHECIDA"
                        }
                ]
        },
        {
                "id": "bee_1090",
                "number": 1090,
                "title": "Função Distância de Manhattan",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Em jogos de tabuleiro em grade, a distância de Manhattan entre (x1, y1) e (x2, y2) é |x1 - x2| + |y1 - y2|. Crie uma função que calcule essa distância.",
                "inputSpec": "Duas linhas, cada uma com 2 inteiros separados por espaço.",
                "outputSpec": "Imprima: DISTANCIA = X",
                "starterCode": "# Desafio #1090 — Função Distância de Manhattan\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada é composta por **2 linhas** lidas em sequência. Use um comando `input()` para cada linha (convertendo com `int()` ou `float()` apenas nas linhas que forem números para cálculo).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Organize seu código usando estruturas modulares (**Funções `def`** ou **Dicionários**).\n• Defina sua função com `def nome_da_funcao(parametros):`, calcule o resultado lá dentro e devolva com `return`. Depois, leia a entrada e chame sua função dentro do `print()`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: DISTANCIA = X*\n• Compare sua saída com o exemplo `DISTANCIA = 7` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "0 0\n3 4",
                                "expected": "DISTANCIA = 7"
                        },
                        {
                                "input": "2 5\n2 1",
                                "expected": "DISTANCIA = 4"
                        },
                        {
                                "input": "-1 -2\n3 2",
                                "expected": "DISTANCIA = 8"
                        }
                ]
        },
        {
                "id": "bee_1091",
                "number": 1091,
                "title": "Contagem de Votos (Urna Eletrônica)",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Leia uma linha com vários nomes votados separados por espaço. Conte os votos usando um dicionário e imprima o nome mais votado e quantos votos ele recebeu.",
                "inputSpec": "Nomes separados por espaço.",
                "outputSpec": "Imprima: VENCEDOR = NOME (X votos)",
                "starterCode": "# Desafio #1091 — Contagem de Votos (Urna Eletrônica)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** Leia a linha inteira com `input()` e, se precisar separar as palavras por espaço, utilize o método `.split()` (que transforma a frase em uma lista de palavras).\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Organize seu código usando estruturas modulares (**Funções `def`** ou **Dicionários**).\n• Use um **dicionário** `{chave: valor}` para associar cada identificador ao seu respectivo dado. O método `dicionario.get(chave, valor_padrao)` é excelente para buscar uma chave com segurança sem gerar erro caso ela não exista!\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: VENCEDOR = NOME (X votos)*\n• Compare sua saída com o exemplo `VENCEDOR = Ana (3 votos)` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "Ana Lucas Ana Pedro Ana Lucas",
                                "expected": "VENCEDOR = Ana (3 votos)"
                        },
                        {
                                "input": "Bot1 Bot2 Bot2",
                                "expected": "VENCEDOR = Bot2 (2 votos)"
                        },
                        {
                                "input": "Python Python Python",
                                "expected": "VENCEDOR = Python (3 votos)"
                        }
                ]
        },
        {
                "id": "bee_1092",
                "number": 1092,
                "title": "Função Conversora de Nota para Conceito",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 60,
                "description": "Crie uma função conceito(nota) que receba uma nota inteira (0 a 100) e retorne: 'A' (>=90), 'B' (>=75), 'C' (>=60) ou 'D' (<60).",
                "inputSpec": "Um número inteiro de 0 a 100.",
                "outputSpec": "Imprima: CONCEITO = X",
                "starterCode": "# Desafio #1092 — Função Conversora de Nota para Conceito\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `95`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Organize seu código usando estruturas modulares (**Funções `def`** ou **Dicionários**).\n• Defina sua função com `def nome_da_funcao(parametros):`, calcule o resultado lá dentro e devolva com `return`. Depois, leia a entrada e chame sua função dentro do `print()`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: CONCEITO = X*\n• Compare sua saída com o exemplo `CONCEITO = A` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "95",
                                "expected": "CONCEITO = A"
                        },
                        {
                                "input": "80",
                                "expected": "CONCEITO = B"
                        },
                        {
                                "input": "62",
                                "expected": "CONCEITO = C"
                        },
                        {
                                "input": "45",
                                "expected": "CONCEITO = D"
                        }
                ]
        },
        {
                "id": "bee_1093",
                "number": 1093,
                "title": "Frequência de Palavras Únicas",
                "category": "cat7",
                "difficulty": "Avançado",
                "xp": 65,
                "description": "Leia uma frase em letras minúsculas e mostre quantas palavras DIFERENTES (únicas) existem nela.",
                "inputSpec": "Uma linha de texto.",
                "outputSpec": "Imprima: UNICAS = X",
                "starterCode": "# Desafio #1093 — Frequência de Palavras Únicas\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"sol lua sol estrela lua sol\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Organize seu código usando estruturas modulares (**Funções `def`** ou **Dicionários**).\n• Defina sua função com `def nome_da_funcao(parametros):`, calcule o resultado lá dentro e devolva com `return`. Depois, leia a entrada e chame sua função dentro do `print()`.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: UNICAS = X*\n• Compare sua saída com o exemplo `UNICAS = 3` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "sol lua sol estrela lua sol",
                                "expected": "UNICAS = 3"
                        },
                        {
                                "input": "a b c d",
                                "expected": "UNICAS = 4"
                        },
                        {
                                "input": "ola ola ola",
                                "expected": "UNICAS = 1"
                        }
                ]
        },
        {
                "id": "bee_1024",
                "number": 1024,
                "title": "Sequência de Fibonacci (Desafio Mestre)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "A sequência de Fibonacci começa com 0 e 1, e cada número seguinte é sempre a soma dos dois anteriores (0, 1, 1, 2, 3, 5, 8, 13...). Leia um inteiro N (1 <= N <= 15) e imprima os N primeiros números dessa sequência separados por um espaço.",
                "inputSpec": "Um número inteiro N (entre 1 e 15).",
                "outputSpec": "Os N primeiros termos de Fibonacci na mesma linha, separados por espaço.",
                "starterCode": "# Desafio #1024 — Sequência de Fibonacci (Desafio Mestre)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `5`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Desafio de lógica e algoritmos! Antes de programar, acompanhe no papel como o Primeiro Exemplo de Entrada (`5`) se transforma na Saída Esperada (`0 1 1 2 3`).\n• Estruture variáveis claras para controlar o estado do algoritmo a cada passo do laço ou condição.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Os N primeiros termos de Fibonacci na mesma linha, separados por espaço.*\n• Compare sua saída com o exemplo `0 1 1 2 3` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "5",
                                "expected": "0 1 1 2 3"
                        },
                        {
                                "input": "1",
                                "expected": "0"
                        },
                        {
                                "input": "8",
                                "expected": "0 1 1 2 3 5 8 13"
                        }
                ]
        },
        {
                "id": "bee_1094",
                "number": 1094,
                "title": "Máximo Divisor Comum (MDC de Euclides)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "O Algoritmo de Euclides encontra o maior número que divide A e B ao mesmo tempo (MDC). Enquanto B != 0, atualize A, B = B, A % B. Ao final, A é o MDC!",
                "inputSpec": "Dois inteiros positivos A e B, um por linha.",
                "outputSpec": "Imprima: MDC = X",
                "starterCode": "# Desafio #1094 — Máximo Divisor Comum (MDC de Euclides)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Desafio de lógica e algoritmos! Antes de programar, acompanhe no papel como o Primeiro Exemplo de Entrada (`12, 18`) se transforma na Saída Esperada (`MDC = 6`).\n• Estruture variáveis claras para controlar o estado do algoritmo a cada passo do laço ou condição.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: MDC = X*\n• Compare sua saída com o exemplo `MDC = 6` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "12\n18",
                                "expected": "MDC = 6"
                        },
                        {
                                "input": "100\n75",
                                "expected": "MDC = 25"
                        },
                        {
                                "input": "17\n13",
                                "expected": "MDC = 1"
                        }
                ]
        },
        {
                "id": "bee_1095",
                "number": 1095,
                "title": "Mínimo Múltiplo Comum (MMC)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "Leia dois inteiros positivos A e B e calcule o Mínimo Múltiplo Comum (MMC) entre eles. Dica: MMC(A, B) = (A * B) // MDC(A, B).",
                "inputSpec": "Dois inteiros positivos A e B, um por linha.",
                "outputSpec": "Imprima: MMC = X",
                "starterCode": "# Desafio #1095 — Mínimo Múltiplo Comum (MMC)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Desafio de lógica e algoritmos! Antes de programar, acompanhe no papel como o Primeiro Exemplo de Entrada (`4, 6`) se transforma na Saída Esperada (`MMC = 12`).\n• Estruture variáveis claras para controlar o estado do algoritmo a cada passo do laço ou condição.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: MMC = X*\n• Compare sua saída com o exemplo `MMC = 12` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "4\n6",
                                "expected": "MMC = 12"
                        },
                        {
                                "input": "12\n15",
                                "expected": "MMC = 60"
                        },
                        {
                                "input": "7\n5",
                                "expected": "MMC = 35"
                        }
                ]
        },
        {
                "id": "bee_1096",
                "number": 1096,
                "title": "Conversor Decimal para Binário",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "Os computadores funcionam na base binária (0 e 1). Leia um número inteiro positivo N na base 10 e imprima sua representação em binário.",
                "inputSpec": "Um número inteiro N >= 0.",
                "outputSpec": "Imprima: BINARIO = X",
                "starterCode": "# Desafio #1096 — Conversor Decimal para Binário\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `10`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Desafio de lógica e algoritmos! Antes de programar, acompanhe no papel como o Primeiro Exemplo de Entrada (`10`) se transforma na Saída Esperada (`BINARIO = 1010`).\n• Estruture variáveis claras para controlar o estado do algoritmo a cada passo do laço ou condição.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: BINARIO = X*\n• Compare sua saída com o exemplo `BINARIO = 1010` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "10",
                                "expected": "BINARIO = 1010"
                        },
                        {
                                "input": "255",
                                "expected": "BINARIO = 11111111"
                        },
                        {
                                "input": "0",
                                "expected": "BINARIO = 0"
                        }
                ]
        },
        {
                "id": "bee_1097",
                "number": 1097,
                "title": "Conversor Binário para Decimal",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 75,
                "description": "Leia uma sequência de 0s e 1s (número binário) e converta para o valor correspondente na base decimal (base 10).",
                "inputSpec": "Uma string contendo dígitos 0 e 1.",
                "outputSpec": "Imprima: DECIMAL = X",
                "starterCode": "# Desafio #1097 — Conversor Binário para Decimal\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha de texto (ex: `\"1010\"`). Use `input()` (com os parênteses vazios, sem perguntas dentro) e guarde o resultado em uma variável.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Desafio de lógica e algoritmos! Antes de programar, acompanhe no papel como o Primeiro Exemplo de Entrada (`1010`) se transforma na Saída Esperada (`DECIMAL = 10`).\n• Estruture variáveis claras para controlar o estado do algoritmo a cada passo do laço ou condição.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: DECIMAL = X*\n• Compare sua saída com o exemplo `DECIMAL = 10` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "1010",
                                "expected": "DECIMAL = 10"
                        },
                        {
                                "input": "1111",
                                "expected": "DECIMAL = 15"
                        },
                        {
                                "input": "100000",
                                "expected": "DECIMAL = 32"
                        }
                ]
        },
        {
                "id": "bee_1098",
                "number": 1098,
                "title": "Detector de Número Perfeito",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 80,
                "description": "Na matemática, um número perfeito é aquele cuja soma de seus divisores próprios (menores que ele mesmo) é igual ao próprio número (ex: 6 = 1 + 2 + 3). Leia N e imprima PERFEITO ou NAO PERFEITO.",
                "inputSpec": "Um número inteiro positivo N.",
                "outputSpec": "Imprima PERFEITO ou NAO PERFEITO.",
                "starterCode": "# Desafio #1098 — Detector de Número Perfeito\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `6`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Desafio de lógica e algoritmos! Antes de programar, acompanhe no papel como o Primeiro Exemplo de Entrada (`6`) se transforma na Saída Esperada (`PERFEITO`).\n• Estruture variáveis claras para controlar o estado do algoritmo a cada passo do laço ou condição.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima PERFEITO ou NAO PERFEITO.*\n• Compare sua saída com o exemplo `PERFEITO` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "6",
                                "expected": "PERFEITO"
                        },
                        {
                                "input": "28",
                                "expected": "PERFEITO"
                        },
                        {
                                "input": "10",
                                "expected": "NAO PERFEITO"
                        }
                ]
        },
        {
                "id": "bee_1099",
                "number": 1099,
                "title": "Número de Armstrong (Narcisista)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 80,
                "description": "Um número de K dígitos é um Número de Armstrong se a soma de cada dígito elevado a K resulta no próprio número (ex: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153). Leia um inteiro e imprima ARMSTRONG ou COMUM.",
                "inputSpec": "Um número inteiro positivo.",
                "outputSpec": "Imprima ARMSTRONG ou COMUM.",
                "starterCode": "# Desafio #1099 — Número de Armstrong (Narcisista)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui 1 linha contendo um número inteiro (ex: `153`). Use `int(input())` para ler o texto do teclado e já convertê-lo para o tipo numérico `int`.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Desafio de lógica e algoritmos! Antes de programar, acompanhe no papel como o Primeiro Exemplo de Entrada (`153`) se transforma na Saída Esperada (`ARMSTRONG`).\n• Estruture variáveis claras para controlar o estado do algoritmo a cada passo do laço ou condição.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima ARMSTRONG ou COMUM.*\n• Compare sua saída com o exemplo `ARMSTRONG` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "153",
                                "expected": "ARMSTRONG"
                        },
                        {
                                "input": "370",
                                "expected": "ARMSTRONG"
                        },
                        {
                                "input": "123",
                                "expected": "COMUM"
                        }
                ]
        },
        {
                "id": "bee_1100",
                "number": 1100,
                "title": "Simulador de Batalha Boss Final (#1100)",
                "category": "cat8",
                "difficulty": "Avançado",
                "xp": 100,
                "description": "Desafio #1100! O Herói enfrenta o Boss Final. Leia a vida do Boss (HP) e o dano por turno do Herói (DANO). Calcule em quantos turnos de ataque o Herói derrota o Boss (HP <= 0).",
                "inputSpec": "Dois números inteiros positivos: HP do Boss e DANO por turno.",
                "outputSpec": "Imprima: TURNOS PARA VENCER = X",
                "starterCode": "# Desafio #1100 — Simulador de Batalha Boss Final (#1100)\n# Escreva sua solução em Python 3 abaixo:\n\n",
                "hint": "📥 **1. Como ler a Entrada:** A entrada possui **2 linhas** com números inteiros (uma por linha). Chame `int(input())` para cada linha (ou dentro de um laço, se a quantidade for variável) e armazene em variáveis separadas.\n\n🧠 **2. Raciocínio e Conceito Python:**\n• Desafio de lógica e algoritmos! Antes de programar, acompanhe no papel como o Primeiro Exemplo de Entrada (`100, 25`) se transforma na Saída Esperada (`TURNOS PARA VENCER = 4`).\n• Estruture variáveis claras para controlar o estado do algoritmo a cada passo do laço ou condição.\n\n📤 **3. Atenção ao Formato de Saída:**\n• Especificação: *Imprima: TURNOS PARA VENCER = X*\n• Compare sua saída com o exemplo `TURNOS PARA VENCER = 4` (respeitando letras maiúsculas, acentos e espaços antes/depois do sinal de `=` ou `:`).",
                "testCases": [
                        {
                                "input": "100\n25",
                                "expected": "TURNOS PARA VENCER = 4"
                        },
                        {
                                "input": "100\n30",
                                "expected": "TURNOS PARA VENCER = 4"
                        },
                        {
                                "input": "50\n60",
                                "expected": "TURNOS PARA VENCER = 1"
                        }
                ]
        }
];

    // =========================================================================
    // 3. CÁLCULO DE RANK, XP E LEADERBOARD DA TURMA
    // =========================================================================

    function getRankForXp(xp) {
        const val = Number(xp) || 0;
        let currentTier = RANK_TIERS[0];
        for (let i = 0; i < RANK_TIERS.length; i++) {
            if (val >= RANK_TIERS[i].minXp) {
                currentTier = RANK_TIERS[i];
            }
        }
        const nextTier = RANK_TIERS.find(t => t.level === currentTier.level + 1) || null;
        let pctToNext = 100;
        let xpNeeded = 0;
        if (nextTier) {
            const span = nextTier.minXp - currentTier.minXp;
            const gainedInTier = val - currentTier.minXp;
            pctToNext = Math.min(100, Math.max(0, Math.round((gainedInTier / span) * 100)));
            xpNeeded = Math.max(0, nextTier.minXp - val);
        }
        return {
            currentTier,
            nextTier,
            xp: val,
            pctToNext,
            xpNeeded
        };
    }

    function getUserChallengeStats(userId) {
        const prog = window.TrilhandoClassroom.getStudentChallenges(userId);
        let totalXp = 0;
        let solvedCount = 0;
        let totalAttempts = 0;
        PYTHON_CHALLENGES.forEach(ch => {
            const entry = prog[ch.id];
            if (entry) {
                totalAttempts += (Number(entry.attempts) || 0);
                if (entry.solved) {
                    solvedCount++;
                    totalXp += ch.xp;
                }
            }
        });
        const rankInfo = getRankForXp(totalXp);
        return {
            userId,
            solvedCount,
            totalChallenges: PYTHON_CHALLENGES.length,
            totalXp,
            totalAttempts,
            rankInfo,
            progressMap: prog
        };
    }

    function getClassLeaderboard() {
        const users = window.TrilhandoClassroom.getUsers().filter(u => u.role === 'student');
        const rows = users.map(u => {
            const stats = getUserChallengeStats(u.id);
            return {
                userId: u.id,
                fullName: u.fullName,
                solvedCount: stats.solvedCount,
                totalXp: stats.totalXp,
                totalAttempts: stats.totalAttempts,
                rankInfo: stats.rankInfo
            };
        });
        rows.sort((a, b) => {
            if (b.totalXp !== a.totalXp) return b.totalXp - a.totalXp;
            if (b.solvedCount !== a.solvedCount) return b.solvedCount - a.solvedCount;
            return a.fullName.localeCompare(b.fullName, 'pt-BR');
        });
        return rows.map((r, idx) => Object.assign({}, r, { position: idx + 1 }));
    }

    // =========================================================================
    // 4. INTERPRETADOR PYTHON NO NAVEGADOR (SKULPT + TRANSPILADOR DE F-STRINGS)
    // =========================================================================

    let skulptLoadPromise = null;

    function ensureSkulptLoaded() {
        if (window.Sk && window.Sk.builtinFiles) {
            return Promise.resolve(true);
        }
        if (skulptLoadPromise) return skulptLoadPromise;

        skulptLoadPromise = new Promise((resolve) => {
            const s1 = document.createElement('script');
            s1.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js';
            s1.onload = () => {
                const s2 = document.createElement('script');
                s2.src = 'https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js';
                s2.onload = () => resolve(Boolean(window.Sk));
                s2.onerror = () => resolve(false);
                document.head.appendChild(s2);
            };
            s1.onerror = () => resolve(false);
            document.head.appendChild(s1);
        });
        return skulptLoadPromise;
    }

    function convertFStringMatch(quote, inner) {
        const args = [];
        const fmtStr = inner.replace(/\{([^{}]+)\}/g, function (_, expr) {
            const colonIdx = expr.indexOf(':');
            if (colonIdx >= 0) {
                const varPart = expr.slice(0, colonIdx).trim();
                const specPart = expr.slice(colonIdx + 1).trim();
                args.push(varPart);
                return '{:' + specPart + '}';
            }
            args.push(expr.trim());
            return '{}';
        });
        return quote + fmtStr + quote + '.format(' + args.join(', ') + ')';
    }

    // Converte f-strings (f"..." e f'...') para .format() inclusive quando há aspas internas em dicionários
    function preprocessPythonCode(code) {
        let out = String(code || '');
        out = out.replace(/\bf"([^"\\]*(?:\\.[^"\\]*)*)"/g, function (_, inner) {
            return convertFStringMatch('"', inner);
        });
        out = out.replace(/\bf'([^'\\]*(?:\\.[^'\\]*)*)'/g, function (_, inner) {
            return convertFStringMatch("'", inner);
        });
        return out;
    }

    async function runPythonCodeAsync(code, stdinText) {
        const hasSkulpt = await ensureSkulptLoaded();
        const inputLines = String(stdinText || '').replace(/\r\n/g, '\n').split('\n');
        let lineIdx = 0;
        let outputChunks = [];

        if (hasSkulpt && window.Sk) {
            const preparedCode = preprocessPythonCode(code);
            return new Promise((resolve) => {
                window.Sk.configure({
                    output: function (text) {
                        outputChunks.push(text);
                    },
                    read: function (x) {
                        if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles['files'][x] === undefined) {
                            throw new Error("File not found: '" + x + "'");
                        }
                        return window.Sk.builtinFiles['files'][x];
                    },
                    inputfun: function () {
                        const val = lineIdx < inputLines.length ? inputLines[lineIdx++] : '';
                        return val;
                    },
                    inputfunTakesPrompt: true,
                    execLimit: 3500,
                    __future__: window.Sk.python3
                });

                const promise = window.Sk.misceval.asyncToPromise(function () {
                    return window.Sk.importMainWithBody('<stdin>', false, preparedCode, true);
                });

                promise.then(
                    function () {
                        resolve({
                            ok: true,
                            stdout: outputChunks.join('').replace(/\r\n/g, '\n').replace(/\n+$/, ''),
                            error: null
                        });
                    },
                    function (err) {
                        resolve({
                            ok: false,
                            stdout: outputChunks.join('').replace(/\r\n/g, '\n').replace(/\n+$/, ''),
                            error: String(err ? err.toString() : 'Erro de execução no Python')
                        });
                    }
                );
            });
        }

        return {
            ok: false,
            stdout: '',
            error: 'Não foi possível carregar o motor Python no navegador. Verifique sua conexão com a internet.'
        };
    }

    async function judgeChallengeSubmissionAsync(challenge, studentCode) {
        const results = [];
        let allPassed = true;
        let firstFailure = null;

        for (let i = 0; i < challenge.testCases.length; i++) {
            const tc = challenge.testCases[i];
            const execRes = await runPythonCodeAsync(studentCode, tc.input);
            const actualTrimmed = String(execRes.stdout || '').trim();
            const expectedTrimmed = String(tc.expected || '').trim();

            if (!execRes.ok) {
                allPassed = false;
                const failObj = {
                    caseIndex: i + 1,
                    passed: false,
                    verdict: 'RUNTIME_ERROR',
                    input: tc.input,
                    expected: expectedTrimmed,
                    actual: actualTrimmed,
                    error: execRes.error
                };
                results.push(failObj);
                if (!firstFailure) firstFailure = failObj;
                break;
            }

            const passed = actualTrimmed === expectedTrimmed;
            const caseResult = {
                caseIndex: i + 1,
                passed,
                verdict: passed ? 'ACCEPTED' : 'WRONG_ANSWER',
                input: tc.input,
                expected: expectedTrimmed,
                actual: actualTrimmed,
                error: null
            };
            results.push(caseResult);
            if (!passed && !firstFailure) {
                allPassed = false;
                firstFailure = caseResult;
            }
        }

        return {
            allPassed,
            verdict: allPassed ? 'ACCEPTED' : (firstFailure ? firstFailure.verdict : 'WRONG_ANSWER'),
            results,
            firstFailure
        };
    }

    // =========================================================================
    // 5. CHAT GEMINI IA 24/7 (SEMPRE ATIVO NA NUVEM — SEM REBOOT, SEM PRECISAR DO PC!)
    // =========================================================================

    const CHAT_SYSTEM_INSTRUCTION = `Você é o GEMINI-1.5-FLASH, assistente virtual e tutor especialista do projeto "TRILHANDO O CAMINHO DO CÓDIGO" (CEFET-MG & FAPEMIG).

SUA MISSÃO E DIRETRIZ DE RESPOSTA INTELIGENTE:
1. DISTINÇÃO INTELIGENTE DO CONTEXTO:
   - Se a pergunta do aluno for CONCEITUAL, TEÓRICA ou UMA DÚVIDA GERAL (ex: "o que é uma variável?", "como funciona o Flet?", "o que é um loop?"):
     -> Responda de forma clara, didática, concisa e explicativa, SEM incluir blocos de código desnecessários no final.
   - Se a pergunta do aluno pedir CÓDIGO, EXEMPLO PRÁTICO, IMPLEMENTAÇÃO ou COMO PROGRAMAR ALGO (ex: "como criar um botão no Flet?", "faça o jogo da cobrinha", "me dê um exemplo de código"):
     -> Forneça a explicação e inclua o CÓDIGO COMPLETO, limpo e pronto para ser executado (em blocos \`\`\`python), incluindo todos os imports e funções necessárias.
2. TOM DE VOZ:
   - Responda sempre em português do Brasil, com tom didático, profissional, encorajador, claro e direto para estudantes e aprendizes de Python.`;

    // =========================================================================
    // GESTÃO DO HISTÓRICO DO CHAT POR USUÁRIO (ISOLAMENTO TOTAL POR CONTA)
    // =========================================================================
    const STORAGE_KEY_CHAT_HISTORIES = 'trilhando_chat_histories_v1';
    let chatHistoriesMemory = null;

    function resolveChatUserId(explicitUserId) {
        if (explicitUserId && typeof explicitUserId === 'string' && explicitUserId.trim()) {
            return explicitUserId.trim();
        }
        try {
            if (window.TrilhandoClassroom && typeof window.TrilhandoClassroom.getCurrentUser === 'function') {
                const u = window.TrilhandoClassroom.getCurrentUser();
                if (u && u.id) return String(u.id).trim();
            }
        } catch (e) {}
        return 'anon';
    }

    function resolveStudentName(explicitName, userId) {
        if (explicitName && typeof explicitName === 'string' && explicitName.trim()) {
            return explicitName.trim();
        }
        try {
            if (window.TrilhandoClassroom && typeof window.TrilhandoClassroom.getCurrentUser === 'function') {
                const u = window.TrilhandoClassroom.getCurrentUser();
                if (u) {
                    if (u.role === 'admin') return u.fullName || 'Professor / Administrador';
                    return u.fullName || u.username || ('Aluno #' + String(u.id));
                }
            }
        } catch (e) {}
        return (userId && userId !== 'anon') ? ('Aluno #' + userId) : 'Estudante';
    }

    function loadAllChatHistories() {
        if (chatHistoriesMemory) return chatHistoriesMemory;
        try {
            const raw = localStorage.getItem(STORAGE_KEY_CHAT_HISTORIES);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === 'object') {
                    chatHistoriesMemory = parsed;
                    return chatHistoriesMemory;
                }
            }
        } catch (e) {}
        chatHistoriesMemory = {};
        return chatHistoriesMemory;
    }

    function saveAllChatHistories() {
        if (!chatHistoriesMemory) return;
        try {
            localStorage.setItem(STORAGE_KEY_CHAT_HISTORIES, JSON.stringify(chatHistoriesMemory));
        } catch (e) {}
    }

    function getUserChatHistory(explicitUserId) {
        const uid = resolveChatUserId(explicitUserId);
        const all = loadAllChatHistories();
        if (!Array.isArray(all[uid])) {
            all[uid] = [];
        }
        return all[uid];
    }

    function pushUserChatMessage(explicitUserId, msgObj) {
        const uid = resolveChatUserId(explicitUserId);
        const history = getUserChatHistory(uid);
        history.push(msgObj);
        // Limita a 60 mensagens por usuário para preservar performance e localStorage
        if (history.length > 60) {
            history.splice(0, history.length - 60);
        }
        saveAllChatHistories();
    }

    function clearUserChatHistory(explicitUserId) {
        const uid = resolveChatUserId(explicitUserId);
        const all = loadAllChatHistories();
        all[uid] = [];
        saveAllChatHistories();
    }

    function sendToGoogleFormsWebhook(studentName, promptText, responseText) {
        const cfg = window.TrilhandoClassroom.getChatbotConfig();
        const formUrl = cfg.formUrl;
        if (!formUrl || !formUrl.startsWith('http')) return;

        try {
            const resolvedName = resolveStudentName(studentName);
            const formData = new URLSearchParams();
            formData.append(cfg.entryNome || 'entry.1009783107', resolvedName);
            formData.append(cfg.entryPrompt || 'entry.1559793013', promptText);
            formData.append(cfg.entryResposta || 'entry.2041274618', responseText);

            fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData.toString()
            }).catch(() => {});
        } catch (e) {}
    }

    function cleanAiReplyText(rawText) {
        if (!rawText) return '';
        // Remove blocos internos <think>...</think> caso algum modelo de raciocínio os inclua
        return String(rawText)
            .replace(/<think>[\s\S]*?<\/think>/gi, '')
            .trim();
    }

    // Tutor IA Pedagógico Inteligente Offline (contingência caso o computador do aluno esteja sem acesso externo)
    function generateSmartTutorFallbackResponse(promptText, studentName) {
        const q = String(promptText || '').toLowerCase();
        const firstName = String(studentName || 'estudante').split(' ')[0];

        if (q.includes('cobrinha') || q.includes('snake') || q.includes('jogo')) {
            return `Excelente ideia, **${firstName}**! Aqui está um exemplo de jogo interativo em Python usando **Flet** para você testar e adaptar:\n\n\`\`\`python\nimport flet as ft\nimport random\n\ndef main(page: ft.Page):\n    page.title = "Mini Jogo de Adivinhação"\n    page.theme_mode = ft.ThemeMode.DARK\n    secreto = random.randint(1, 20)\n\n    entrada = ft.TextField(label="Palpite (1 a 20)", width=220)\n    aviso = ft.Text("Tente adivinhar o número secreto!", size=18)\n\n    def testar(e):\n        try:\n            chute = int(entrada.value)\n            if chute == secreto:\n                aviso.value = "🎉 Parabéns! Você acertou!"\n            elif chute < secreto:\n                aviso.value = "⬆️ Tente um número MAIOR!"\n            else:\n                aviso.value = "⬇️ Tente um número MENOR!"\n        except ValueError:\n            aviso.value = "⚠️ Digite apenas números inteiros!"\n        page.update()\n\n    page.add(entrada, ft.ElevatedButton("Chutar", on_click=testar), aviso)\n\nft.app(target=main)\n\`\`\``;
        }

        if (q.includes('variavel') || q.includes('variável') || q.includes('variaveis') || q.includes('variáveis')) {
            return `Olá, **${firstName}**! Uma **variável** em Python funciona como uma **caixinha com uma etiqueta** na memória do computador onde guardamos informações (como um nome, uma pontuação ou a quantidade de vidas de um jogo).\n\nPara criar uma variável, usamos o sinal de igual (\`=\`), que significa **guardar / atribuir**:\n\n\`\`\`python\nheroi = "Arthas"      # texto (str)\nvidas = 3             # número inteiro (int)\nvelocidade = 4.5      # número decimal (float)\n\nprint(f"O herói {heroi} tem {vidas} vidas!")\n\`\`\`\n\nSe quiser testar, experimente mudar os valores e usar \`print()\`!`;
        }

        if (q.includes('if') || q.includes('elif') || q.includes('else') || q.includes('condicional') || q.includes('condicionais')) {
            return `Ótima pergunta, **${firstName}**! As estruturas **\`if\` (se)**, **\`elif\` (senão se)** e **\`else\` (senão)** permitem que o seu programa tome decisões sozinho:\n\n- **\`if\`**: testa a 1ª condição.\n- **\`elif\`**: testa outra condição se a anterior deu falso.\n- **\`else\`**: é o Plano B (executa quando todas as condições acima dão falso).\n\nVeja um exemplo completo:\n\n\`\`\`python\npontos = int(input("Digite sua pontuação: "))\n\nif pontos >= 100:\n    print("🏆 Rank Ouro!")\nelif pontos >= 50:\n    print("🥈 Rank Prata!")\nelse:\n    print("🥉 Continue treinando!")\n\`\`\`\n\n💡 **Dica importante:** Não esqueça dos dois pontos (\`:\`) no final da linha e do espaço (**Tab**) nas linhas de dentro!`;
        }

        if (q.includes('while') || q.includes('for') || q.includes('loop') || q.includes('laço') || q.includes('repeticao') || q.includes('repetição')) {
            return `Excelente dúvida, **${firstName}**! Em Python temos dois laços principais para repetir comandos sem precisar copiar e colar código:\n\n1. **\`for\` com \`range()\`** — usado quando sabemos quantas vezes queremos repetir:\n\`\`\`python\n# Conta de 1 até 5:\nfor numero in range(1, 6):\n    print(f"Passo {numero}")\n\`\`\`\n\n2. **\`while\` (enquanto)** — repete enquanto uma condição continuar verdadeira:\n\`\`\`python\nsenha = ""\nwhile senha != "1234":\n    senha = input("Digite a senha secreta: ")\nprint("🔓 Cofre aberto!")\n\`\`\``;
        }

        if (q.includes('try') || q.includes('except') || q.includes('erro') || q.includes('valueerror')) {
            return `Muito bem, **${firstName}**! O bloco **\`try / except\`** funciona como um **escudo de proteção** para o seu código não travar caso o usuário digite algo inválido (por exemplo, digitar letras quando o programa pediu um número inteiro no \`int(input())\`):\n\n\`\`\`python\ntry:\n    idade = int(input("Digite sua idade em números: "))\n    print(f"Daqui a 5 anos você terá {idade + 5} anos!")\nexcept ValueError:\n    print("⚠️ Ops! Digite apenas números inteiros (ex: 13).")\n\`\`\``;
        }

        if (q.includes('lista') || q.includes('append') || q.includes('len')) {
            return `Uma **lista** em Python permite guardar vários itens dentro de uma única variável usando colchetes \`[ ]\`. Veja os comandos mais importantes:\n\n\`\`\`python\nmochila = ["Espada", "Escudo", "Poção"]\n\n# Adicionar um novo item no final da lista:\nmochila.append("Arco Mágico")\n\n# Mostrar quantos itens existem na lista:\nprint(f"Total de itens: {len(mochila)}")\n\n# Percorrer todos os itens com for:\nfor item in mochila:\n    print(f"- {item}")\n\`\`\``;
        }

        if (q.includes('flet') || q.includes('app') || q.includes('botao') || q.includes('botão') || q.includes('interface')) {
            return `Com a biblioteca **Flet**, transformamos códigos Python em aplicativos visuais para celular e computador! Aqui está um exemplo completo e pronto para rodar com campo de texto e botão interativo:\n\n\`\`\`python\nimport flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Meu Primeiro App Flet"\n    page.theme_mode = ft.ThemeMode.DARK\n    page.vertical_alignment = ft.MainAxisAlignment.CENTER\n    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER\n\n    campo_nome = ft.TextField(label="Digite seu nome", width=280)\n    resultado = ft.Text(size=20, weight=ft.FontWeight.BOLD, color=ft.Colors.CYAN_300)\n\n    def saudar_click(e):\n        if campo_nome.value:\n            resultado.value = f"🚀 Olá, {campo_nome.value}! Bem-vindo ao Flet!"\n        else:\n            resultado.value = "⚠️ Digite seu nome primeiro!"\n        page.update()\n\n    botao = ft.ElevatedButton("Clique Aqui", on_click=saudar_click)\n    page.add(campo_nome, botao, resultado)\n\nft.app(target=main)\n\`\`\``;
        }

        if (q.includes('def') || q.includes('funcao') || q.includes('função') || q.includes('funcoes') || q.includes('funções')) {
            return `Em Python, usamos a palavra **\`def\`** para criar uma **função** (um bloco de código reutilizável que podemos chamar quantas vezes quisermos):\n\n\`\`\`python\ndef calcular_media(nota1, nota2):\n    media = (nota1 + nota2) / 2\n    return media\n\nresultado = calcular_media(8.0, 9.0)\nprint(f"A média final é: {resultado}")\n\`\`\``;
        }

        if (q.includes('dicionario') || q.includes('dicionário') || q.includes('dict')) {
            return `Um **dicionário** em Python guarda informações no formato **\`chave: valor\`** usando chaves \`{ }\`, perfeito para criar fichas de personagens ou cadastros:\n\n\`\`\`python\nheroi = {\n    "nome": "Luna",\n    "classe": "Maga",\n    "nivel": 5,\n    "vida": 120\n}\n\nprint(f"Herói: {heroi['nome']} ({heroi['classe']}) - Nível {heroi['nivel']}")\n\`\`\``;
        }

        if (q.includes('print') || q.includes('input')) {
            return `Os comandos **\`print()\`** e **\`input()\`** são a base da comunicação no Python:\n\n- **\`print()\`**: faz o computador **mostrar** uma mensagem na tela.\n- **\`input()\`**: faz o computador **escutar** o que o usuário digita no teclado (sempre devolvendo texto \`str\`).\n\n\`\`\`python\nnome = input("Qual é o seu nome? ")\nidade = int(input("Quantos anos você tem? "))\n\nprint(f"Olá, {nome}! Você tem {idade} anos.")\n\`\`\``;
        }

        return `Olá, **${firstName}**! Sou o assistente de IA do projeto **Trilhando o Caminho do Código**. 🤖\n\nPosso te ajudar explicando passo a passo ou criando códigos em Python sobre:\n- **Comandos básicos**: \`print()\`, \`input()\`, \`int()\`, \`float()\` e f-strings\n- **Tomada de decisão**: \`if\`, \`elif\`, \`else\` e operadores lógicos (\`and\`, \`or\`)\n- **Laços e Erros**: \`for\`, \`while\`, \`break\` e blindagem com \`try / except\`\n- **Estruturas**: Listas (\`append\`, \`len\`), Strings, Funções (\`def\`), Dicionários e Apps com **Flet**\n- **Dicas para qualquer um dos 100 Desafios Python estilo Beecrowd**\n\nMe conte qual dúvida ou código você quer criar agora!`;
    }

    async function fetchWithTimeout(url, options, timeoutMs) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), timeoutMs || 18000);
        try {
            const res = await fetch(url, Object.assign({}, options || {}, { signal: controller.signal }));
            clearTimeout(timer);
            return res;
        } catch (err) {
            clearTimeout(timer);
            throw err;
        }
    }

    async function askGeminiApiAsync(promptText, studentName, explicitUserId) {
        const cfg = window.TrilhandoClassroom.getChatbotConfig();
        let fallbackKey = '';
        try {
            fallbackKey = atob('QVEuQWI4Uk42S0diaEJkalpqNXJXQjZDZGFCSmZ5MWxNMEhjVVpHTkF5d1g3c1FWRjBORkE=');
        } catch (e) {}
        const apiKey = ((cfg && cfg.geminiApiKey) ? String(cfg.geminiApiKey).trim() : '') || fallbackKey;

        const uid = resolveChatUserId(explicitUserId);
        const targetStudentName = resolveStudentName(studentName, uid);

        // Registra o prompt do usuário no histórico ISOLADO deste usuário
        pushUserChatMessage(uid, {
            role: 'user',
            parts: [{ text: promptText }]
        });

        const userHistory = getUserChatHistory(uid);

        // CAMADA 1: API Oficial Google Gemini Flash (suporta chaves AQ... e AIza...)
        if (apiKey && apiKey.length >= 20) {
            const candidateModels = [
                'gemini-flash-lite-latest',
                'gemini-3.5-flash-lite',
                'gemini-3.5-flash',
                'gemini-3.6-flash',
                'gemini-3.8-flash'
            ];
            for (let i = 0; i < candidateModels.length; i++) {
                const modelName = candidateModels[i];
                try {
                    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(apiKey)}`;
                    const payload = {
                        system_instruction: {
                            parts: [{ text: CHAT_SYSTEM_INSTRUCTION }]
                        },
                        contents: userHistory.slice(-12),
                        generationConfig: {
                            temperature: 0.25,
                            topP: 0.95,
                            topK: 40,
                            maxOutputTokens: 2048
                        }
                    };
                    const res = await fetchWithTimeout(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    }, 12000);
                    if (res.ok) {
                        const data = await res.json();
                        const rawParts = (
                            data &&
                            data.candidates &&
                            data.candidates[0] &&
                            data.candidates[0].content &&
                            Array.isArray(data.candidates[0].content.parts)
                        ) ? data.candidates[0].content.parts : [];
                        const joinedText = rawParts
                            .filter(p => p && !p.thought && typeof p.text === 'string')
                            .map(p => p.text)
                            .join('');
                        const reply = cleanAiReplyText(joinedText);
                        if (reply) {
                            pushUserChatMessage(uid, {
                                role: 'model',
                                parts: [{ text: reply }]
                            });
                            sendToGoogleFormsWebhook(targetStudentName, promptText, reply);
                            return reply;
                        }
                    }
                } catch (e) {
                    console.warn('Gemini API model attempt failed:', modelName, e);
                }
            }
        }

        // CAMADA 2: Motor IA em Nuvem 24/7 (Zero-Key, Nunca Dorme, Não Depende do PC nem do Streamlit!)
        const openAiMessages = [
            { role: 'system', content: CHAT_SYSTEM_INSTRUCTION }
        ];
        const recentHistory = userHistory.slice(-10);
        for (let i = 0; i < recentHistory.length; i++) {
            const msg = recentHistory[i];
            const txt = (msg.parts && msg.parts[0] && msg.parts[0].text) ? msg.parts[0].text : '';
            if (txt) {
                openAiMessages.push({
                    role: msg.role === 'user' ? 'user' : 'assistant',
                    content: txt
                });
            }
        }

        const cloudModels = ['openai', 'openai-fast', 'mistral'];
        for (let m = 0; m < cloudModels.length; m++) {
            try {
                const res = await fetchWithTimeout('https://text.pollinations.ai/openai', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        model: cloudModels[m],
                        messages: openAiMessages,
                        temperature: 0.25
                    })
                }, 20000);
                if (res.ok) {
                    const data = await res.json();
                    const rawReply = data &&
                        data.choices &&
                        data.choices[0] &&
                        data.choices[0].message &&
                        data.choices[0].message.content;
                    const reply = cleanAiReplyText(rawReply);
                    if (reply) {
                        pushUserChatMessage(uid, {
                            role: 'model',
                            parts: [{ text: reply }]
                        });
                        sendToGoogleFormsWebhook(targetStudentName, promptText, reply);
                        return reply;
                    }
                }
            } catch (err) {
                console.warn('Cloud AI endpoint attempt failed (' + cloudModels[m] + '):', err);
            }
        }

        // CAMADA 2B: Endpoint GET/Texto Direto de Backup em Nuvem 24/7
        try {
            const directUrl = 'https://text.pollinations.ai/' + encodeURIComponent(
                'Voce e o tutor de Python do projeto Trilhando o Caminho do Codigo. Responda em portugues de forma didatica ao aluno ' +
                (targetStudentName || '') + ': ' + promptText
            );
            const res = await fetchWithTimeout(directUrl, { method: 'GET' }, 15000);
            if (res.ok) {
                const txt = cleanAiReplyText(await res.text());
                if (txt && txt.length > 5) {
                    pushUserChatMessage(uid, {
                        role: 'model',
                        parts: [{ text: txt }]
                    });
                    sendToGoogleFormsWebhook(targetStudentName, promptText, txt);
                    return txt;
                }
            }
        } catch (err) {
            console.warn('Direct Cloud AI backup failed:', err);
        }

        // CAMADA 3: Contingência Offline Pedagógica Instantânea (se a escola estiver sem internet externa)
        await new Promise(r => setTimeout(r, 350));
        const fallbackReply = generateSmartTutorFallbackResponse(promptText, targetStudentName);
        pushUserChatMessage(uid, {
            role: 'model',
            parts: [{ text: fallbackReply }]
        });
        sendToGoogleFormsWebhook(targetStudentName, promptText, fallbackReply);
        return fallbackReply;
    }

    function formatMarkdownMessage(mdText) {
        const escape = (s) => String(s || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Extrai blocos de código ```python ... ```
        const codeBlocks = [];
        let processed = String(mdText || '').replace(/```(\w*)\n([\s\S]*?)```/g, function (_, lang, code) {
            const idx = codeBlocks.length;
            codeBlocks.push({ lang: lang || 'python', code: code.replace(/\n$/, '') });
            return `@@CODE_BLOCK_${idx}@@`;
        });

        processed = escape(processed);
        // Markdown headers ### / ##
        processed = processed.replace(/^###\s+(.+)$/gm, '<strong style="color:#38bdf8;font-size:1.02rem;display:block;margin-top:8px;">$1</strong>');
        processed = processed.replace(/^##\s+(.+)$/gm, '<strong style="color:#38bdf8;font-size:1.08rem;display:block;margin-top:10px;">$1</strong>');
        // Bold **text**
        processed = processed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        // Inline code `code`
        processed = processed.replace(/`([^`]+)`/g, '<code style="background:#1e293b;color:#38bdf8;padding:2px 6px;border-radius:5px;font-family:\'JetBrains Mono\',monospace;font-size:0.86em;">$1</code>');
        // Paragraphs / line breaks
        processed = processed.replace(/\n/g, '<br>');

        // Restaura blocos de código com botão de copiar
        processed = processed.replace(/@@CODE_BLOCK_(\d+)@@/g, function (_, idxStr) {
            const b = codeBlocks[Number(idxStr)];
            if (!b) return '';
            const escapedCode = escape(b.code);
            return `
                <div class="st-replica-codeblock">
                    <div class="st-replica-code-header">
                        <span>🐍 ${escape(b.lang || 'python')}</span>
                        <button type="button" class="st-copy-code-btn" data-raw-code="${encodeURIComponent(b.code)}">📋 Copiar código</button>
                    </div>
                    <pre><code>${escapedCode}</code></pre>
                </div>
            `;
        });

        return processed;
    }

    // =========================================================================
    // EXPORT PUBLIC API
    // =========================================================================
    window.TrilhandoBeecrowd = {
        RANK_TIERS,
        CHALLENGE_CATEGORIES,
        PYTHON_CHALLENGES,
        getRankForXp,
        getUserChallengeStats,
        getClassLeaderboard,
        runPythonCodeAsync,
        judgeChallengeSubmissionAsync,
        askGeminiApiAsync,
        formatMarkdownMessage,
        getChatHistory: (uid) => getUserChatHistory(uid),
        clearChatHistory: (uid) => clearUserChatHistory(uid)
    };
})();
