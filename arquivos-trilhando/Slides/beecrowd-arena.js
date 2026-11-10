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
                "starterCode": "# Escreva seu código Python abaixo:\nprint(\"Ola, Mundo!\")\n",
                "hint": "Use o comando print(\"Ola, Mundo!\") respeitando as letras maiúsculas e minúsculas.",
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
                "starterCode": "# Leia o texto com input() e mostre na tela com print():\nmensagem = input()\nprint(mensagem)\n",
                "hint": "Dica: No Beecrowd, use input() vazio (sem frase dentro dos parênteses) para não imprimir texto extra na saída!",
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
                "starterCode": "nome = input()\n# Use print(f\"Bem-vindo, {nome}!\")\n",
                "hint": "Use f-string: print(f\"Bem-vindo, {nome}!\")",
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
                "starterCode": "nome = input()\nturma = input()\n# Imprima no formato pedido:\n",
                "hint": "Use: print(f\"Aluno: {nome} | Turma: {turma}\")",
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
                "starterCode": "nome = input()\nprofissao = input()\ncidade = input()\n# Exiba no formato NOME - PROFISSAO - CIDADE\n",
                "hint": "Use print(f\"{nome} - {profissao} - {cidade}\")",
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
                "starterCode": "palavra = input()\n# Repita a palavra 3 vezes e adicione !\n",
                "hint": "Use print(f\"{palavra * 3}!\") ou print(palavra * 3 + \"!\")",
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
                "starterCode": "a = input()\nb = input()\n# Imprima primeiro b e depois a:\n",
                "hint": "Use print(b) na primeira linha e print(a) na segunda linha.",
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
                "starterCode": "time1 = input()\ngols1 = input()\ntime2 = input()\ngols2 = input()\n# Mostre o placar:\n",
                "hint": "Use print(f\"{time1} {gols1} x {gols2} {time2}\")",
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
                "starterCode": "tag = input()\ntexto = input()\n# Monte a tag HTML:\n",
                "hint": "Use print(f\"<{tag}>{texto}</{tag}>\")",
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
                "starterCode": "x = input()\ny = input()\n# Imprima Posicao: (X, Y)\n",
                "hint": "Use print(f\"Posicao: ({x}, {y})\")",
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
                "starterCode": "usuario = input()\ndominio = input()\n# Imprima o e-mail completo:\n",
                "hint": "Use print(f\"{usuario}@{dominio}\")",
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
                "starterCode": "missao = input()\nmoedas = input()\n# Imprima no formato da guilda:\n",
                "hint": "Use print(f\"[MISSAO] {missao} | Recompensa: {moedas} moedas\")",
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
                "starterCode": "a = int(input())\nb = int(input())\nx = a + b\nprint(f\"X = {x}\")\n",
                "hint": "Lembre-se de usar int(input()) para converter o texto lido em número inteiro!",
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
                "starterCode": "n1 = int(input())\nn2 = int(input())\n# Calcule a multiplicação com * e imprima PROD = resultado\n",
                "hint": "Em Python, o operador de multiplicação é o asterisco (*). Ex: prod = n1 * n2",
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
                "starterCode": "n = int(input())\n# Mostre o Dobro na 1ª linha e o Triplo na 2ª linha:\n",
                "hint": "Use dois comandos print(): print(f\"Dobro: {n * 2}\") e print(f\"Triplo: {n * 3}\")",
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
                "starterCode": "nota1 = float(input())\nnota2 = float(input())\n# Calcule a média entre parênteses: (nota1 + nota2) / 2\n",
                "hint": "Para formatar com 1 casa decimal na f-string, escreva: print(f\"MEDIA = {media:.1f}\")",
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
                "starterCode": "n = int(input())\n# Calcule n - 1 e n + 1:\n",
                "hint": "Use print(f\"ANTECESSOR = {n - 1} | SUCESSOR = {n + 1}\")",
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
                "starterCode": "base = int(input())\naltura = int(input())\n# Calcule a área e o perímetro:\n",
                "hint": "area = base * altura e perimetro = 2 * (base + altura)",
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
                "starterCode": "c = float(input())\n# Aplique a fórmula f = (c * 1.8) + 32\n",
                "hint": "Use print(f\"FAHRENHEIT = {f:.1f}\")",
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
                "starterCode": "a = int(input())\nb = int(input())\n# Use // para divisão inteira e % para o resto:\n",
                "hint": "print(f\"QUOCIENTE = {a // b} | RESTO = {a % b}\")",
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
                "starterCode": "base = int(input())\nexp = int(input())\n# Calcule base ** exp:\n",
                "hint": "Use print(f\"POTENCIA = {base ** exp}\")",
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
                "starterCode": "distancia = float(input())\nlitros = float(input())\n# Divida distancia por litros e formate com :.2f\n",
                "hint": "consumo = distancia / litros e depois print(f\"{consumo:.2f} km/l\")",
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
                "starterCode": "salario = float(input())\nvendas = float(input())\n# Some o salario com 15% das vendas (vendas * 0.15):\n",
                "hint": "total = salario + (vendas * 0.15) e print(f\"TOTAL = R$ {total:.2f}\")",
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
                "starterCode": "segundos = int(input())\nhoras = segundos // 3600\nresto = segundos % 3600\nminutos = resto // 60\nseg_finais = resto % 60\n# Imprima no formato H:M:S\n",
                "hint": "Use print(f\"{horas}:{minutos}:{seg_finais}\")",
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
                "starterCode": "a = int(input())\nb = int(input())\nc = int(input())\nd = int(input())\n# Calcule (a * b) - (c * d):\n",
                "hint": "dif = (a * b) - (c * d) e print(f\"DIFERENCA = {dif}\")",
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
                "starterCode": "valor = int(input())\nn100 = valor // 100\nvalor = valor % 100\nn50 = valor // 50\nvalor = valor % 50\nn10 = valor // 10\n# Imprima no formato pedido:\n",
                "hint": "Use print(f\"100: {n100} | 50: {n50} | 10: {n10}\")",
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
                "starterCode": "n = int(input())\n# Use if n % 2 == 0:\n",
                "hint": "O operador % calcula o resto da divisão. Se n % 2 == 0, imprima PAR; senão (else), imprima IMPAR.",
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
                "starterCode": "n = int(input())\n# Use if, elif e else:\n",
                "hint": "Teste primeiro if n > 0:, depois elif n < 0:, e por fim else:.",
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
                "starterCode": "a = int(input())\nb = int(input())\n# Compare a e b usando if / elif / else:\n",
                "hint": "Se a > b, o maior é a; elif b > a, o maior é b; else, imprima IGUAIS.",
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
                "starterCode": "nota = float(input())\n# Complete a estrutura condicional:\n",
                "hint": "Cuidado para não usar acento na palavra RECUPERACAO para bater com o juiz automático!",
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
                "starterCode": "valor = float(input())\n# Se valor >= 100, aplique 10% de desconto:\n",
                "hint": "Se valor >= 100: final = valor * 0.90, senão final = valor. Depois use print(f\"TOTAL = {final:.2f}\").",
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
                "starterCode": "idade = int(input())\n# Classifique com if / elif / else:\n",
                "hint": "Teste em ordem: if idade < 12:, elif idade < 18:, elif idade < 60:, else:.",
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
                "starterCode": "ano = int(input())\n# Verifique a regra do ano bissexto:\n",
                "hint": "if (ano % 400 == 0) or (ano % 4 == 0 and ano % 100 != 0):",
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
                "starterCode": "a = int(input())\nb = int(input())\nc = int(input())\n# Compare os lados a, b e c:\n",
                "hint": "Se a == b and b == c -> EQUILATERO; elif a == b or b == c or a == c -> ISOSCELES; else -> ESCALENO.",
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
                "starterCode": "a = int(input())\nb = int(input())\n# Verifique se a % b == 0 or b % a == 0:\n",
                "hint": "if a % b == 0 or b % a == 0: print(\"SAO MULTIPLOS\") else: print(\"NAO SAO MULTIPLOS\")",
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
                "starterCode": "vel = int(input())\n# Verifique se vel > 80:\n",
                "hint": "Se vel > 80: multa = (vel - 80) * 5 e print(f\"MULTA = R$ {multa}\")",
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
                "starterCode": "j1 = input()\nj2 = input()\n# Regras: PEDRA vence TESOURA, TESOURA vence PAPEL, PAPEL vence PEDRA\n",
                "hint": "Teste if j1 == j2: print(\"EMPATE\"), depois elif com as 3 combinações em que j1 vence!",
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
                "starterCode": "x = int(input())\ny = int(input())\n# Determine o quadrante:\n",
                "hint": "if x > 0 and y > 0: Q1 | elif x < 0 and y > 0: Q2 | elif x < 0 and y < 0: Q3 | else: Q4",
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
                "starterCode": "ddd = int(input())\n# Verifique o DDD com if / elif / else:\n",
                "hint": "Compare ddd == 31, ddd == 11, ddd == 21, ddd == 61.",
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
                "starterCode": "a = int(input())\nb = int(input())\nc = int(input())\n# Encontre o maior entre a, b e c:\n",
                "hint": "Você pode usar if/elif/else ou a função max(a, b, c)!",
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
                "starterCode": "salario = float(input())\nparcela = float(input())\n# Verifique se parcela <= salario * 0.30:\n",
                "hint": "if parcela <= salario * 0.30: print(\"APROVADO\") else: print(\"NEGADO\")",
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
                "starterCode": "n = int(input())\n# Use for i in range(1, n + 1):\n",
                "hint": "Lembre-se que range(1, n + 1) começa no 1 e vai até incluir o n!",
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
                "starterCode": "n = int(input())\nfor i in range(1, 6):\n    # Imprima f\"{n} x {i} = {n * i}\"\n    pass\n",
                "hint": "Dentro do for i in range(1, 6): coloque print(f\"{n} x {i} = {n * i}\")",
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
                "starterCode": "n = int(input())\nsoma = 0\n# Some todos os valores de 1 até n:\n",
                "hint": "Crie soma = 0 antes do for, e dentro de for i in range(1, n + 1): faça soma = soma + i.",
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
                "starterCode": "entrada = input()\ntry:\n    # Converta entrada para int e imprima DOBRO = ...\n    pass\nexcept ValueError:\n    # Imprima a mensagem de erro\n    pass\n",
                "hint": "Dentro do try: n = int(entrada) e print(f\"DOBRO = {n * 2}\"). No except ValueError: print(\"ERRO: DIGITE APENAS NUMEROS\").",
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
                "starterCode": "n = int(input())\n# Conte de n até 1 diminuindo 1 a cada passo:\n",
                "hint": "Use for i in range(n, 0, -1): print(i) e depois fora do laço print(\"FOGO!\")",
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
                "starterCode": "n = int(input())\n# Imprima os pares de 2 até n:\n",
                "hint": "Use for i in range(2, n + 1, 2): print(i)",
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
                "starterCode": "n = int(input())\nfat = 1\n# Multiplique fat pelos números de 1 até n:\n",
                "hint": "for i in range(1, n + 1): fat = fat * i e depois print(f\"FATORIAL = {fat}\")",
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
                "starterCode": "n = int(input())\nfor i in range(1, n + 1):\n    # Imprima i, i**2 e i**3 separados por espaço\n    pass\n",
                "hint": "Use print(f\"{i} {i**2} {i**3}\")",
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
                "starterCode": "n = int(input())\nfor i in range(1, n + 1):\n    # Imprima '*' repetido i vezes:\n    pass\n",
                "hint": "Use print(\"*\" * i) dentro do laço for!",
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
                "starterCode": "n = int(input())\ndivisores = 0\nfor i in range(1, n + 1):\n    if n % i == 0:\n        divisores += 1\n# Se divisores == 2 é PRIMO, senão NAO PRIMO:\n",
                "hint": "if divisores == 2: print(\"PRIMO\") else: print(\"NAO PRIMO\")",
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
                "starterCode": "n = int(input())\nfor i in range(1, n + 1):\n    # Se n % i == 0, imprima i\n    pass\n",
                "hint": "Dentro do for: if n % i == 0: print(i)",
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
                "starterCode": "soma = 0\nwhile True:\n    num = int(input())\n    if num == 0:\n        break\n    soma += num\n# Imprima TOTAL = ...\n",
                "hint": "Após o while, faça print(f\"TOTAL = {soma}\")",
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
                "starterCode": "while True:\n    senha = input()\n    if senha == \"2002\":\n        print(\"Acesso Permitido\")\n        break\n    else:\n        print(\"Senha Invalida\")\n",
                "hint": "O modelo já mostra a estrutura com while True e break! Teste e envie.",
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
                "starterCode": "a = int(input())\nb = int(input())\ntry:\n    # Calcule a // b e imprima RESULTADO = ...\n    pass\nexcept ZeroDivisionError:\n    # Imprima DIVISAO IMPOSSIVEL\n    pass\n",
                "hint": "No try: print(f\"RESULTADO = {a // b}\"). No except ZeroDivisionError: print(\"DIVISAO IMPOSSIVEL\").",
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
                "starterCode": "n = int(input())\npassos = 0\nwhile n > 1:\n    # Aplique a regra de Collatz e some 1 em passos\n    pass\n",
                "hint": "Dentro do while: se n % 2 == 0 faça n = n // 2, senão n = 3 * n + 1. Aumente passos += 1.",
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
                "starterCode": "numeros = []\nfor i in range(4):\n    numeros.append(int(input()))\n# Mostre o maior e o menor valor:\n",
                "hint": "Em Python, você pode usar max(numeros) para achar o maior e min(numeros) para achar o menor (ou percorrer com for)!",
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
                "starterCode": "pares = 0\nfor i in range(5):\n    num = int(input())\n    # Verifique se num é par:\n",
                "hint": "Se num % 2 == 0, aumente o contador pares += 1.",
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
                "starterCode": "partes = input().split()\nnumeros = []\nfor p in partes:\n    numeros.append(int(p))\n# Calcule a soma da lista:\n",
                "hint": "Você pode usar sum(numeros) e imprimir print(f\"SOMA = {sum(numeros)}\")!",
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
                "starterCode": "itens = input().split()\n# Inverta a lista e imprima com ' '.join():\n",
                "hint": "Use itens.reverse() (ou itens[::-1]) e depois print(\" \".join(itens))",
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
                "starterCode": "entrada = input().split()\nunicos = []\nfor item in entrada:\n    # Se item não estiver em unicos, adicione:\n    pass\n",
                "hint": "if item not in unicos: unicos.append(item) e no final print(\" \".join(unicos))",
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
                "starterCode": " nums = [int(x) for x in input().split()]\n# Ordene a lista e pegue o penúltimo elemento:\n",
                "hint": "Ordene com nums.sort() e pegue nums[-2]: print(f\"VICE = {nums[-2]}\")",
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
                "starterCode": "notas = [int(x) for x in input().split()]\nmedia = sum(notas) / len(notas)\n# Conte quantas notas são > media:\n",
                "hint": "Use um contador para cada n in notas: se n > media, some 1. Depois print(f\"ACIMA = {cont}\")",
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
                "starterCode": "nums = [int(x) for x in input().split()]\n# Ordene nums e imprima separados por espaço:\n",
                "hint": "Use nums.sort() e depois print(\" \".join(str(x) for x in nums))",
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
                "starterCode": "lista = input().split()\nalvo = input().strip()\n# Conte quantas vezes alvo aparece na lista:\n",
                "hint": "Use lista.count(alvo) e print(f\"APARECEU = {lista.count(alvo)}\")",
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
                "starterCode": "a = [int(x) for x in input().split()]\nb = [int(x) for x in input().split()]\n# Some a[i] * b[i] para i de 0 a 2:\n",
                "hint": "soma = a[0]*b[0] + a[1]*b[1] + a[2]*b[2]",
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
                "starterCode": "a = input().split()\nb = input().split()\nres = []\n# Adicione a[i] e b[i] dentro de um for:\n",
                "hint": "for i in range(3): res.append(a[i]); res.append(b[i]) e print(\" \".join(res))",
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
                "starterCode": "dados = [int(x) for x in input().split()]\n# Calcule max(dados) - min(dados):\n",
                "hint": "Use print(f\"AMPLITUDE = {max(dados) - min(dados)}\")",
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
                "starterCode": "l0 = [int(x) for x in input().split()]\nl1 = [int(x) for x in input().split()]\nl2 = [int(x) for x in input().split()]\n# Some l0[0] + l1[1] + l2[2]:\n",
                "hint": "soma = l0[0] + l1[1] + l2[2] e print(f\"DIAGONAL = {soma}\")",
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
                "starterCode": "fila = input().split()\n# Remova o primeiro com pop(0) e adicione no final com append():\n",
                "hint": "primeiro = fila.pop(0); fila.append(primeiro); print(\" \".join(fila))",
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
                "starterCode": "texto = input().lower()\ncont = 0\n# Percorra cada letra do texto e conte se estiver em \"aeiou\":\n",
                "hint": "Use: for letra in texto: if letra in \"aeiou\": cont += 1",
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
                "starterCode": "palavra = input().upper()\n# Inverta a string e imprima:\n",
                "hint": "Em Python, palavra[::-1] inverte um texto automaticamente (ou você pode usar um laço for)!",
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
                "starterCode": "limpo = input().lower().replace(\" \", \"\")\n# Compare limpo com limpo[::-1]:\n",
                "hint": "if limpo == limpo[::-1]: print(\"PALINDROMO\") else: print(\"COMUM\")",
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
                "starterCode": "frase = input()\n# Use .split() e len() para contar as palavras:\n",
                "hint": "palavras = frase.split() e print(f\"PALAVRAS = {len(palavras)}\")",
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
                "starterCode": "palavras = input().upper().split()\nsigla = \"\"\nfor p in palavras:\n    # Concatene a primeira letra p[0] em sigla:\n    pass\n",
                "hint": "Dentro do for: sigla += p[0] e depois print(sigla)",
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
                "starterCode": "texto = input()\nresultado = \"\"\nfor c in texto:\n    # Se c.lower() estiver em 'aeiou', adicione '*', senão adicione c:\n    pass\n",
                "hint": "if c.lower() in \"aeiou\": resultado += \"*\" else: resultado += c",
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
                "starterCode": "numero_txt = input().strip()\nsoma = 0\nfor digito in numero_txt:\n    # Converta digito para int e some:\n    pass\n",
                "hint": "soma += int(digito) e no final print(f\"SOMA DOS DIGITOS = {soma}\")",
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
                "starterCode": "p1 = input().strip().lower()\np2 = input().strip().lower()\n# Dica: sorted(p1) == sorted(p2)\n",
                "hint": "if sorted(p1) == sorted(p2): print(\"ANAGRAMA\") else: print(\"DIFERENTES\")",
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
                "starterCode": "alfabeto = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"\ntexto = input().strip()\ncifrado = \"\"\nfor letra in texto:\n    pos = alfabeto.index(letra)\n    nova_pos = (pos + 3) % 26\n    cifrado += alfabeto[nova_pos]\nprint(cifrado)\n",
                "hint": "O uso de (pos + 3) % 26 garante que X, Y e Z deem a volta para A, B e C!",
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
                "starterCode": "cpf = input().strip()\n# Use fatiamento cpf[0:3], cpf[3:6], cpf[6:9] e cpf[9:11]:\n",
                "hint": "print(f\"{cpf[0:3]}.{cpf[3:6]}.{cpf[6:9]}-{cpf[9:11]}\")",
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
                "starterCode": "palavras = input().split()\nmaior = \"\"\nfor p in palavras:\n    # Se len(p) > len(maior), atualize maior:\n    pass\n",
                "hint": "if len(p) > len(maior): maior = p e no final print(f\"MAIOR PALAVRA = {maior}\")",
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
                "starterCode": "senha = input().strip()\ntem_numero = False\nfor c in senha:\n    if c in \"0123456789\":\n        tem_numero = True\n# Verifique se len(senha) >= 8 and tem_numero:\n",
                "hint": "if len(senha) >= 8 and tem_numero: print(\"FORTE\") else: print(\"FRACA\")",
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
                "starterCode": "titulo = input().strip()\n# Use .lower() e .replace(' ', '_'):\n",
                "hint": "print(titulo.lower().replace(\" \", \"_\"))",
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
                "starterCode": "texto = input()\ncont = 0\nfor c in texto:\n    if c in \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\":\n        cont += 1\n# Imprima MAIUSCULAS = ...\n",
                "hint": "print(f\"MAIUSCULAS = {cont}\")",
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
                "starterCode": "def calcular_dano(ataque, multiplicador):\n    return (ataque * multiplicador) + 10\n\natk = int(input())\nmult = int(input())\n# Chame a função e imprima DANO TOTAL = ...\n",
                "hint": "resultado = calcular_dano(atk, mult) e depois print(f\"DANO TOTAL = {resultado}\")",
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
                "starterCode": "heroi = {\n    \"nome\": input(),\n    \"nivel\": int(input()),\n    \"xp\": int(input())\n}\n# Se heroi[\"xp\"] >= 100, some 1 em heroi[\"nivel\"]:\n",
                "hint": "Use if heroi[\"xp\"] >= 100: heroi[\"nivel\"] += 1 e depois print(f'Heroi: {heroi[\"nome\"]} | Nivel: {heroi[\"nivel\"]}')",
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
                "starterCode": "precos = {1: 4.00, 2: 4.50, 3: 5.00, 4: 2.00, 5: 1.50}\ncodigo = int(input())\nqtd = int(input())\n# Calcule precos[codigo] * qtd:\n",
                "hint": "total = precos[codigo] * qtd e print(f\"Total: R$ {total:.2f}\")",
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
                "starterCode": "cores = {\n    \"red\": \"vermelho\",\n    \"blue\": \"azul\",\n    \"green\": \"verde\",\n    \"yellow\": \"amarelo\"\n}\ncor = input().strip().lower()\n# Use cores.get(cor, 'COR DESCONHECIDA'):\n",
                "hint": "print(cores.get(cor, \"COR DESCONHECIDA\"))",
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
                "starterCode": "def manhattan(x1, y1, x2, y2):\n    return abs(x1 - x2) + abs(y1 - y2)\n\nx1, y1 = [int(v) for v in input().split()]\nx2, y2 = [int(v) for v in input().split()]\n# Chame a função e imprima DISTANCIA = ...\n",
                "hint": "d = manhattan(x1, y1, x2, y2) e print(f\"DISTANCIA = {d}\")",
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
                "starterCode": "votos = input().split()\ncontagem = {}\nfor nome in votos:\n    contagem[nome] = contagem.get(nome, 0) + 1\n# Descubra quem teve mais votos:\n",
                "hint": "vencedor = max(contagem, key=contagem.get) e print(f\"VENCEDOR = {vencedor} ({contagem[vencedor]} votos)\")",
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
                "starterCode": "def conceito(n):\n    if n >= 90:\n        return \"A\"\n    elif n >= 75:\n        return \"B\"\n    elif n >= 60:\n        return \"C\"\n    else:\n        return \"D\"\n\nnota = int(input())\n# Imprima CONCEITO = ...\n",
                "hint": "print(f\"CONCEITO = {conceito(nota)}\")",
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
                "starterCode": "palavras = input().lower().split()\nunicas = []\nfor p in palavras:\n    if p not in unicas:\n        unicas.append(p)\n# Imprima UNICAS = ...\n",
                "hint": "print(f\"UNICAS = {len(unicas)}\")",
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
                "starterCode": "n = int(input())\ntermos = []\na = 0\nb = 1\nfor i in range(n):\n    termos.append(str(a))\n    proximo = a + b\n    a = b\n    b = proximo\nprint(\" \".join(termos))\n",
                "hint": "Guarde cada termo convertido em str(a) na lista e use \" \".join(termos) para imprimir separado por espaço!",
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
                "starterCode": "a = int(input())\nb = int(input())\nwhile b != 0:\n    resto = a % b\n    a = b\n    b = resto\n# Imprima MDC = ...\n",
                "hint": "print(f\"MDC = {a}\")",
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
                "starterCode": "a = int(input())\nb = int(input())\nx, y = a, b\nwhile y != 0:\n    x, y = y, x % y\nmmc = (a * b) // x\n# Imprima MMC = ...\n",
                "hint": "print(f\"MMC = {mmc}\")",
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
                "starterCode": "n = int(input())\n# Dica: bin(n)[2:] converte inteiro para binário em Python!\n",
                "hint": "Use print(f\"BINARIO = {bin(n)[2:]}\")",
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
                "starterCode": "binario = input().strip()\n# Dica: int(binario, 2) converte da base 2 para decimal!\n",
                "hint": "Use print(f\"DECIMAL = {int(binario, 2)}\")",
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
                "starterCode": "n = int(input())\nsoma_div = 0\nfor i in range(1, n):\n    if n % i == 0:\n        soma_div += i\n# Compare soma_div com n:\n",
                "hint": "if soma_div == n: print(\"PERFEITO\") else: print(\"NAO PERFEITO\")",
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
                "starterCode": "txt = input().strip()\nk = len(txt)\nsoma = 0\nfor d in txt:\n    soma += int(d) ** k\n# Verifique se soma == int(txt):\n",
                "hint": "if soma == int(txt): print(\"ARMSTRONG\") else: print(\"COMUM\")",
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
                "starterCode": "hp = int(input())\ndano = int(input())\nturnos = 0\nwhile hp > 0:\n    hp -= dano\n    turnos += 1\n# Imprima TURNOS PARA VENCER = ...\n",
                "hint": "print(f\"TURNOS PARA VENCER = {turnos}\")",
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

    const chatHistorySession = [];

    function sendToGoogleFormsWebhook(studentName, promptText, responseText) {
        const cfg = window.TrilhandoClassroom.getChatbotConfig();
        const formUrl = cfg.formUrl;
        if (!formUrl || !formUrl.startsWith('http')) return;

        try {
            const formData = new URLSearchParams();
            formData.append(cfg.entryNome || 'entry.1009783107', studentName);
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

    async function askGeminiApiAsync(promptText, studentName) {
        const cfg = window.TrilhandoClassroom.getChatbotConfig();
        const apiKey = (cfg.geminiApiKey || '').trim();

        chatHistorySession.push({
            role: 'user',
            parts: [{ text: promptText }]
        });

        // CAMADA 1: API Oficial Google Gemini (se houver chave AIza... configurada no painel)
        if (apiKey && apiKey.startsWith('AIza')) {
            const candidateModels = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
            for (let i = 0; i < candidateModels.length; i++) {
                const modelName = candidateModels[i];
                try {
                    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(apiKey)}`;
                    const payload = {
                        system_instruction: {
                            parts: [{ text: CHAT_SYSTEM_INSTRUCTION }]
                        },
                        contents: chatHistorySession.slice(-12),
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
                    }, 16000);
                    if (res.ok) {
                        const data = await res.json();
                        const reply = cleanAiReplyText(
                            data &&
                            data.candidates &&
                            data.candidates[0] &&
                            data.candidates[0].content &&
                            data.candidates[0].content.parts &&
                            data.candidates[0].content.parts[0] &&
                            data.candidates[0].content.parts[0].text
                        );
                        if (reply) {
                            chatHistorySession.push({
                                role: 'model',
                                parts: [{ text: reply }]
                            });
                            sendToGoogleFormsWebhook(studentName, promptText, reply);
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
        const recentHistory = chatHistorySession.slice(-10);
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
                        chatHistorySession.push({
                            role: 'model',
                            parts: [{ text: reply }]
                        });
                        sendToGoogleFormsWebhook(studentName, promptText, reply);
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
                (studentName || '') + ': ' + promptText
            );
            const res = await fetchWithTimeout(directUrl, { method: 'GET' }, 15000);
            if (res.ok) {
                const txt = cleanAiReplyText(await res.text());
                if (txt && txt.length > 5) {
                    chatHistorySession.push({
                        role: 'model',
                        parts: [{ text: txt }]
                    });
                    sendToGoogleFormsWebhook(studentName, promptText, txt);
                    return txt;
                }
            }
        } catch (err) {
            console.warn('Direct Cloud AI backup failed:', err);
        }

        // CAMADA 3: Contingência Offline Pedagógica Instantânea (se a escola estiver sem internet externa)
        await new Promise(r => setTimeout(r, 350));
        const fallbackReply = generateSmartTutorFallbackResponse(promptText, studentName);
        chatHistorySession.push({
            role: 'model',
            parts: [{ text: fallbackReply }]
        });
        sendToGoogleFormsWebhook(studentName, promptText, fallbackReply);
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
        getChatHistory: () => chatHistorySession,
        clearChatHistory: () => { chatHistorySession.length = 0; }
    };
})();
