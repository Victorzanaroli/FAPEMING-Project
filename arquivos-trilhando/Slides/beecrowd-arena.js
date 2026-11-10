/**
 * TRILHANDO O CAMINHO DO CÓDIGO — Arena de Desafios Python (Estilo Beecrowd) & Chat Gemini IA Integrado
 * CEFET-MG & FAPEMIG
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. SISTEMA DE RANKS / PATENTES (INICIANTE ATÉ AVANÇADO)
    // =========================================================================
    const RANK_TIERS = [
        { level: 1, name: 'Iniciante', badge: '🥉', minXp: 0, maxXp: 59, color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.14)' },
        { level: 2, name: 'Aprendiz Python', badge: '🥈', minXp: 60, maxXp: 149, color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)' },
        { level: 3, name: 'Explorador Lógico', badge: '🥇', minXp: 150, maxXp: 279, color: '#10b981', bg: 'rgba(16, 185, 129, 0.14)' },
        { level: 4, name: 'Programador Júnior', badge: '💎', minXp: 280, maxXp: 449, color: '#a78bfa', bg: 'rgba(167, 139, 250, 0.15)' },
        { level: 5, name: 'Mestre do Código', badge: '🚀', minXp: 450, maxXp: 649, color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.16)' },
        { level: 6, name: 'Lenda do Python (Avançado)', badge: '👑', minXp: 650, maxXp: 99999, color: '#ec4899', bg: 'rgba(236, 72, 153, 0.18)' }
    ];

    const CHALLENGE_CATEGORIES = [
        { key: 'all', label: '🌐 Todos os Níveis', short: 'Todos' },
        { key: 'cat1', label: '🌱 Nível 1: Iniciante I (print & input)', short: 'Nível 1 • Iniciante I' },
        { key: 'cat2', label: '🔢 Nível 2: Iniciante II (Contas & Tipos)', short: 'Nível 2 • Iniciante II' },
        { key: 'cat3', label: '🔀 Nível 3: Condicionais (if / elif / else)', short: 'Nível 3 • Condicionais' },
        { key: 'cat4', label: '🔁 Nível 4: Repetição & Erros (for / while / try)', short: 'Nível 4 • Laços & Erros' },
        { key: 'cat5', label: '📦 Nível 5: Intermediário (Listas & Textos)', short: 'Nível 5 • Listas & Strings' },
        { key: 'cat6', label: '👑 Nível 6: Avançado (Funções & Dicionários)', short: 'Nível 6 • Avançado' }
    ];

    // =========================================================================
    // 2. BANCO DE 24 DESAFIOS PYTHON (ESTILO BEECROWD #1001 A #1024)
    // =========================================================================
    const PYTHON_CHALLENGES = [
        // NÍVEL 1: INICIANTE I (print & input)
        {
            id: 'bee_1001',
            number: 1001,
            title: 'Olá, Mundo do Código!',
            category: 'cat1',
            difficulty: 'Iniciante',
            xp: 15,
            description: 'Bem-vindo à Arena de Desafios Python! O seu primeiro desafio no estilo Beecrowd é o clássico universal da programação: faça o computador mostrar exatamente a mensagem "Ola, Mundo!" (sem acento no a) na tela.',
            inputSpec: 'Este problema não possui nenhuma entrada.',
            outputSpec: 'Imprima exatamente uma linha contendo: Ola, Mundo!',
            starterCode: '# Escreva seu código Python abaixo:\nprint("Ola, Mundo!")\n',
            hint: 'Use o comando print("Ola, Mundo!") respeitando as letras maiúsculas e minúsculas.',
            testCases: [
                { input: '', expected: 'Ola, Mundo!' },
                { input: '', expected: 'Ola, Mundo!' },
                { input: '', expected: 'Ola, Mundo!' }
            ]
        },
        {
            id: 'bee_1002',
            number: 1002,
            title: 'Eco do Robô',
            category: 'cat1',
            difficulty: 'Iniciante',
            xp: 15,
            description: 'O Robô CEFET está aprendendo a escutar! Leia uma palavra ou frase digitada pelo usuário usando input() e imprima exatamente a mesma mensagem na tela.',
            inputSpec: 'A entrada contém 1 linha de texto.',
            outputSpec: 'Imprima exatamente o mesmo texto lido na entrada.',
            starterCode: '# Leia o texto com input() e mostre na tela com print():\nmensagem = input()\nprint(mensagem)\n',
            hint: 'Dica: No Beecrowd, use input() vazio (sem frase dentro dos parênteses) para não imprimir texto extra na saída!',
            testCases: [
                { input: 'Python', expected: 'Python' },
                { input: 'Trilhando o Codigo', expected: 'Trilhando o Codigo' },
                { input: 'CEFET-MG 2026', expected: 'CEFET-MG 2026' }
            ]
        },
        {
            id: 'bee_1003',
            number: 1003,
            title: 'Saudação ao Herói',
            category: 'cat1',
            difficulty: 'Iniciante',
            xp: 20,
            description: 'Um novo jogador acabou de entrar no servidor! Leia o nome do jogador e exiba uma mensagem de boas-vindas personalizada usando f-string.',
            inputSpec: 'A entrada contém o nome de um jogador (texto).',
            outputSpec: 'Imprima "Bem-vindo, NOME!" substituindo NOME pelo valor lido.',
            starterCode: 'nome = input()\n# Use print(f"Bem-vindo, {nome}!")\n',
            hint: 'Use f-string: print(f"Bem-vindo, {nome}!")',
            testCases: [
                { input: 'Lucas', expected: 'Bem-vindo, Lucas!' },
                { input: 'Maria', expected: 'Bem-vindo, Maria!' },
                { input: 'Arqueiro', expected: 'Bem-vindo, Arqueiro!' }
            ]
        },
        {
            id: 'bee_1004',
            number: 1004,
            title: 'Crachá do Estudante',
            category: 'cat1',
            difficulty: 'Iniciante',
            xp: 20,
            description: 'Leia duas informações em linhas separadas: na primeira linha o Nome do aluno e na segunda linha a Turma dele. Em seguida, mostre o crachá formatado.',
            inputSpec: 'Duas linhas de texto: a 1ª linha tem o nome e a 2ª linha tem a turma.',
            outputSpec: 'Imprima: Aluno: NOME | Turma: TURMA',
            starterCode: 'nome = input()\nturma = input()\n# Imprima no formato pedido:\n',
            hint: 'Use: print(f"Aluno: {nome} | Turma: {turma}")',
            testCases: [
                { input: 'Ana\n8A', expected: 'Aluno: Ana | Turma: 8A' },
                { input: 'Pedro\n9B', expected: 'Aluno: Pedro | Turma: 9B' },
                { input: 'Sofia\n7C', expected: 'Aluno: Sofia | Turma: 7C' }
            ]
        },

        // NÍVEL 2: INICIANTE II (Variáveis, int, float e Matemática)
        {
            id: 'bee_1005',
            number: 1005,
            title: 'Extremamente Básico (Soma)',
            category: 'cat2',
            difficulty: 'Fácil',
            xp: 25,
            description: 'Inspirado no problema mais famoso do Beecrowd! Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X e imprima como mostrado nos exemplos.',
            inputSpec: 'A entrada contém 2 valores inteiros, um em cada linha.',
            outputSpec: 'Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X.',
            starterCode: 'a = int(input())\nb = int(input())\nx = a + b\nprint(f"X = {x}")\n',
            hint: 'Lembre-se de usar int(input()) para converter o texto lido em número inteiro!',
            testCases: [
                { input: '10\n9', expected: 'X = 19' },
                { input: '-10\n4', expected: 'X = -6' },
                { input: '15\n-7', expected: 'X = 8' }
            ]
        },
        {
            id: 'bee_1006',
            number: 1006,
            title: 'Produto Simples',
            category: 'cat2',
            difficulty: 'Fácil',
            xp: 25,
            description: 'Leia dois valores inteiros. A seguir, calcule o produto (multiplicação) entre estes dois valores e atribua esta operação à variável PROD.',
            inputSpec: 'O arquivo de entrada contém 2 valores inteiros, um em cada linha.',
            outputSpec: 'Imprima a mensagem "PROD = " seguido pelo resultado da multiplicação.',
            starterCode: 'n1 = int(input())\nn2 = int(input())\n# Calcule a multiplicação com * e imprima PROD = resultado\n',
            hint: 'Em Python, o operador de multiplicação é o asterisco (*). Ex: prod = n1 * n2',
            testCases: [
                { input: '3\n9', expected: 'PROD = 27' },
                { input: '-30\n10', expected: 'PROD = -300' },
                { input: '0\n9', expected: 'PROD = 0' }
            ]
        },
        {
            id: 'bee_1007',
            number: 1007,
            title: 'Dobro e Triplo de um Número',
            category: 'cat2',
            difficulty: 'Fácil',
            xp: 25,
            description: 'Leia um único número inteiro N. Calcule e mostre na primeira linha o dobro desse número e na segunda linha o triplo desse número.',
            inputSpec: 'A entrada contém 1 número inteiro N.',
            outputSpec: 'Duas linhas:\nDobro: X\nTriplo: Y',
            starterCode: 'n = int(input())\n# Mostre o Dobro na 1ª linha e o Triplo na 2ª linha:\n',
            hint: 'Use dois comandos print(): print(f"Dobro: {n * 2}") e print(f"Triplo: {n * 3}")',
            testCases: [
                { input: '5', expected: 'Dobro: 10\nTriplo: 15' },
                { input: '12', expected: 'Dobro: 24\nTriplo: 36' },
                { input: '0', expected: 'Dobro: 0\nTriplo: 0' }
            ]
        },
        {
            id: 'bee_1008',
            number: 1008,
            title: 'Média Escolar Simples',
            category: 'cat2',
            difficulty: 'Fácil',
            xp: 30,
            description: 'Leia 2 valores com casas decimais (float), que correspondem a 2 notas de um estudante. A seguir, calcule a média simples do aluno (soma das duas notas dividida por 2) e mostre com 1 casa decimal.',
            inputSpec: 'Dois valores decimais (float), um em cada linha.',
            outputSpec: 'Imprima "MEDIA = " seguido do resultado com 1 casa decimal (use :.1f).',
            starterCode: 'nota1 = float(input())\nnota2 = float(input())\n# Calcule a média entre parênteses: (nota1 + nota2) / 2\n',
            hint: 'Para formatar com 1 casa decimal na f-string, escreva: print(f"MEDIA = {media:.1f}")',
            testCases: [
                { input: '5.0\n7.1', expected: 'MEDIA = 6.0' },
                { input: '0.0\n7.1', expected: 'MEDIA = 3.5' },
                { input: '10.0\n8.0', expected: 'MEDIA = 9.0' }
            ]
        },

        // NÍVEL 3: CONDICIONAIS (if / elif / else)
        {
            id: 'bee_1009',
            number: 1009,
            title: 'Detector de Par ou Ímpar',
            category: 'cat3',
            difficulty: 'Médio',
            xp: 30,
            description: 'Leia um número inteiro N e descubra se ele é PAR ou ÍMPAR. Lembre-se que um número é par quando o resto da divisão dele por 2 (N % 2) é igual a 0.',
            inputSpec: 'A entrada contém 1 número inteiro.',
            outputSpec: 'Imprima "PAR" se o número for par, ou "IMPAR" (sem acento) se for ímpar.',
            starterCode: 'n = int(input())\n# Use if n % 2 == 0:\n',
            hint: 'O operador % calcula o resto da divisão. Se n % 2 == 0, imprima PAR; senão (else), imprima IMPAR.',
            testCases: [
                { input: '8', expected: 'PAR' },
                { input: '7', expected: 'IMPAR' },
                { input: '0', expected: 'PAR' }
            ]
        },
        {
            id: 'bee_1010',
            number: 1010,
            title: 'Positivo, Negativo ou Zero',
            category: 'cat3',
            difficulty: 'Médio',
            xp: 30,
            description: 'Leia um número inteiro e classifique-o usando if, elif e else: se for maior que zero, mostre POSITIVO; se for menor que zero, mostre NEGATIVO; se for igual a zero, mostre ZERO.',
            inputSpec: 'Um único número inteiro.',
            outputSpec: 'Imprima POSITIVO, NEGATIVO ou ZERO.',
            starterCode: 'n = int(input())\n# Use if, elif e else:\n',
            hint: 'Teste primeiro if n > 0:, depois elif n < 0:, e por fim else:.',
            testCases: [
                { input: '15', expected: 'POSITIVO' },
                { input: '-4', expected: 'NEGATIVO' },
                { input: '0', expected: 'ZERO' }
            ]
        },
        {
            id: 'bee_1011',
            number: 1011,
            title: 'Maior de Dois Números',
            category: 'cat3',
            difficulty: 'Médio',
            xp: 35,
            description: 'Leia dois números inteiros A e B. Se forem diferentes, imprima o maior deles no formato "MAIOR = X". Se os dois números forem iguais, imprima "IGUAIS".',
            inputSpec: 'Dois números inteiros, um por linha.',
            outputSpec: 'Imprima "MAIOR = X" ou "IGUAIS".',
            starterCode: 'a = int(input())\nb = int(input())\n# Compare a e b usando if / elif / else:\n',
            hint: 'Se a > b, o maior é a; elif b > a, o maior é b; else, imprima IGUAIS.',
            testCases: [
                { input: '10\n25', expected: 'MAIOR = 25' },
                { input: '42\n18', expected: 'MAIOR = 42' },
                { input: '7\n7', expected: 'IGUAIS' }
            ]
        },
        {
            id: 'bee_1012',
            number: 1012,
            title: 'Boletim de Aprovação CEFET',
            category: 'cat3',
            difficulty: 'Médio',
            xp: 35,
            description: 'Leia a nota final (float) de um estudante. Se a nota for maior ou igual a 7.0, imprima "APROVADO". Se for maior ou igual a 5.0 (e menor que 7.0), imprima "RECUPERACAO". Caso contrário, imprima "REPROVADO".',
            inputSpec: 'Um valor numérico decimal (float) representando a nota.',
            outputSpec: 'Imprima APROVADO, RECUPERACAO ou REPROVADO.',
            starterCode: 'nota = float(input())\n# Complete a estrutura condicional:\n',
            hint: 'Cuidado para não usar acento na palavra RECUPERACAO para bater com o juiz automático!',
            testCases: [
                { input: '8.5', expected: 'APROVADO' },
                { input: '6.0', expected: 'RECUPERACAO' },
                { input: '4.2', expected: 'REPROVADO' }
            ]
        },
        {
            id: 'bee_1013',
            number: 1013,
            title: 'Desconto VIP do Mercadinho',
            category: 'cat3',
            difficulty: 'Médio',
            xp: 40,
            description: 'No Mercadinho Gamer, compras de valor maior ou igual a R$ 100.00 ganham 10% de desconto (ou seja, você multiplica o valor por 0.90). Compras abaixo de R$ 100.00 pagam o valor normal. Leia o valor da compra e imprima o total final com 2 casas decimais.',
            inputSpec: 'Um número decimal (float) com o valor da compra.',
            outputSpec: 'Imprima "TOTAL = " seguido do valor com 2 casas decimais (:.2f).',
            starterCode: 'valor = float(input())\n# Se valor >= 100, aplique 10% de desconto:\n',
            hint: 'Se valor >= 100: final = valor * 0.90, senão final = valor. Depois use print(f"TOTAL = {final:.2f}").',
            testCases: [
                { input: '150.00', expected: 'TOTAL = 135.00' },
                { input: '80.00', expected: 'TOTAL = 80.00' },
                { input: '100.00', expected: 'TOTAL = 90.00' }
            ]
        },

        // NÍVEL 4: REPETIÇÃO E BLINDAGEM DE ERROS (for, while, try/except)
        {
            id: 'bee_1014',
            number: 1014,
            title: 'Contagem de 1 até N',
            category: 'cat4',
            difficulty: 'Médio',
            xp: 40,
            description: 'Leia um número inteiro positivo N e utilize um laço de repetição (for ou while) para imprimir todos os números inteiros de 1 até N, um em cada linha.',
            inputSpec: 'Um número inteiro N (1 <= N <= 20).',
            outputSpec: 'Os números de 1 até N, um por linha.',
            starterCode: 'n = int(input())\n# Use for i in range(1, n + 1):\n',
            hint: 'Lembre-se que range(1, n + 1) começa no 1 e vai até incluir o n!',
            testCases: [
                { input: '4', expected: '1\n2\n3\n4' },
                { input: '2', expected: '1\n2' },
                { input: '6', expected: '1\n2\n3\n4\n5\n6' }
            ]
        },
        {
            id: 'bee_1015',
            number: 1015,
            title: 'Mini Tabuada de 1 a 5',
            category: 'cat4',
            difficulty: 'Médio',
            xp: 40,
            description: 'Leia um número inteiro N e mostre os 5 primeiros resultados da tabuada dele (de 1 até 5) no formato "N x i = resultado".',
            inputSpec: 'Um número inteiro N.',
            outputSpec: '5 linhas no formato: N x i = resultado',
            starterCode: 'n = int(input())\nfor i in range(1, 6):\n    # Imprima f"{n} x {i} = {n * i}"\n    pass\n',
            hint: 'Dentro do for i in range(1, 6): coloque print(f"{n} x {i} = {n * i}")',
            testCases: [
                { input: '7', expected: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35' },
                { input: '3', expected: '3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15' },
                { input: '10', expected: '10 x 1 = 10\n10 x 2 = 20\n10 x 3 = 30\n10 x 4 = 40\n10 x 5 = 50' }
            ]
        },
        {
            id: 'bee_1016',
            number: 1016,
            title: 'Soma de 1 até N',
            category: 'cat4',
            difficulty: 'Médio',
            xp: 45,
            description: 'Leia um número inteiro N e calcule a soma de todos os números inteiros de 1 até N (por exemplo, se N = 4, calcule 1 + 2 + 3 + 4 = 10).',
            inputSpec: 'Um número inteiro N.',
            outputSpec: 'Imprima "SOMA = " seguido do total acumulado.',
            starterCode: 'n = int(input())\nsoma = 0\n# Some todos os valores de 1 até n:\n',
            hint: 'Crie soma = 0 antes do for, e dentro de for i in range(1, n + 1): faça soma = soma + i.',
            testCases: [
                { input: '4', expected: 'SOMA = 10' },
                { input: '5', expected: 'SOMA = 15' },
                { input: '10', expected: 'SOMA = 55' }
            ]
        },
        {
            id: 'bee_1017',
            number: 1017,
            title: 'Cofre Blindado (try / except)',
            category: 'cat4',
            difficulty: 'Médio',
            xp: 45,
            description: 'Pratique a blindagem de erros da Aula 03! Leia uma entrada do usuário e tente convertê-la para número inteiro (int) dentro de um bloco try. Se funcionar, imprima o dobro desse número ("DOBRO = X"). Se o usuário tiver digitado letras e disparar ValueError, capture no except e imprima "ERRO: DIGITE APENAS NUMEROS".',
            inputSpec: 'Uma linha contendo números ou letras.',
            outputSpec: 'Imprima "DOBRO = X" ou "ERRO: DIGITE APENAS NUMEROS".',
            starterCode: 'entrada = input()\ntry:\n    # Converta entrada para int e imprima DOBRO = ...\n    pass\nexcept ValueError:\n    # Imprima a mensagem de erro\n    pass\n',
            hint: 'Dentro do try: n = int(entrada) e print(f"DOBRO = {n * 2}"). No except ValueError: print("ERRO: DIGITE APENAS NUMEROS").',
            testCases: [
                { input: '21', expected: 'DOBRO = 42' },
                { input: 'abc', expected: 'ERRO: DIGITE APENAS NUMEROS' },
                { input: '-5', expected: 'DOBRO = -10' }
            ]
        },

        // NÍVEL 5: INTERMEDIÁRIO (Listas e Strings)
        {
            id: 'bee_1018',
            number: 1018,
            title: 'Maior e Menor da Lista',
            category: 'cat5',
            difficulty: 'Intermediário',
            xp: 50,
            description: 'Leia 4 números inteiros (um em cada linha), guarde-os dentro de uma lista Python e depois mostre qual é o maior e qual é o menor valor da lista.',
            inputSpec: '4 números inteiros, um por linha.',
            outputSpec: 'Duas linhas:\nMAIOR = X\nMENOR = Y',
            starterCode: 'numeros = []\nfor i in range(4):\n    numeros.append(int(input()))\n# Mostre o maior e o menor valor:\n',
            hint: 'Em Python, você pode usar max(numeros) para achar o maior e min(numeros) para achar o menor (ou percorrer com for)!',
            testCases: [
                { input: '10\n45\n3\n28', expected: 'MAIOR = 45\nMENOR = 3' },
                { input: '-5\n0\n12\n-20', expected: 'MAIOR = 12\nMENOR = -20' },
                { input: '7\n7\n7\n7', expected: 'MAIOR = 7\nMENOR = 7' }
            ]
        },
        {
            id: 'bee_1019',
            number: 1019,
            title: 'Contador de Vogais',
            category: 'cat5',
            difficulty: 'Intermediário',
            xp: 50,
            description: 'Leia uma palavra ou frase e conte quantas vogais (a, e, i, o, u — tanto maiúsculas quanto minúsculas, sem acento) aparecem nela.',
            inputSpec: 'Uma linha de texto.',
            outputSpec: 'Imprima "VOGAIS = X" onde X é a quantidade total de vogais.',
            starterCode: 'texto = input().lower()\ncont = 0\n# Percorra cada letra do texto e conte se estiver em "aeiou":\n',
            hint: 'Use: for letra in texto: if letra in "aeiou": cont += 1',
            testCases: [
                { input: 'Programador', expected: 'VOGAIS = 4' },
                { input: 'CEFET MG', expected: 'VOGAIS = 2' },
                { input: 'Python', expected: 'VOGAIS = 1' }
            ]
        },
        {
            id: 'bee_1020',
            number: 1020,
            title: 'Mensagem Espelhada (Inversor)',
            category: 'cat5',
            difficulty: 'Intermediário',
            xp: 55,
            description: 'Para decifrar um pergaminho secreto do jogo, você precisa ler uma palavra, transformá-la em letras MAIÚSCULAS e imprimi-la de trás para frente (invertida)!',
            inputSpec: 'Uma palavra ou frase em uma linha.',
            outputSpec: 'A palavra invertida e toda em letras maiúsculas.',
            starterCode: 'palavra = input().upper()\n# Inverta a string e imprima:\n',
            hint: 'Em Python, palavra[::-1] inverte um texto automaticamente (ou você pode usar um laço for)!',
            testCases: [
                { input: 'python', expected: 'NOHTYP' },
                { input: 'cefet', expected: 'TEFEC' },
                { input: 'radar', expected: 'RADAR' }
            ]
        },
        {
            id: 'bee_1021',
            number: 1021,
            title: 'Caçador de Números Pares na Lista',
            category: 'cat5',
            difficulty: 'Intermediário',
            xp: 55,
            description: 'Leia 5 números inteiros (um por linha), armazene em uma lista e conte quantos deles são números PARES.',
            inputSpec: '5 números inteiros, um em cada linha.',
            outputSpec: 'Imprima "PARES = X" com a quantidade de números pares encontrados.',
            starterCode: 'pares = 0\nfor i in range(5):\n    num = int(input())\n    # Verifique se num é par:\n',
            hint: 'Se num % 2 == 0, aumente o contador pares += 1.',
            testCases: [
                { input: '2\n5\n8\n11\n14', expected: 'PARES = 3' },
                { input: '1\n3\n5\n7\n9', expected: 'PARES = 0' },
                { input: '4\n6\n0\n-2\n10', expected: 'PARES = 5' }
            ]
        },

        // NÍVEL 6: AVANÇADO (Funções def, Dicionários e Lógica Avançada)
        {
            id: 'bee_1022',
            number: 1022,
            title: 'Função de Dano Crítico (def)',
            category: 'cat6',
            difficulty: 'Avançado',
            xp: 65,
            description: 'Crie uma função chamada calcular_dano(ataque, multiplicador) usando def que devolva (return) o ataque multiplicado pelo multiplicador mais um bônus fixo de 10 pontos. Depois leia os dois inteiros e mostre o resultado.',
            inputSpec: 'Dois números inteiros (ataque e multiplicador), um por linha.',
            outputSpec: 'Imprima "DANO TOTAL = X".',
            starterCode: 'def calcular_dano(ataque, multiplicador):\n    return (ataque * multiplicador) + 10\n\natk = int(input())\nmult = int(input())\n# Chame a função e imprima DANO TOTAL = ...\n',
            hint: 'resultado = calcular_dano(atk, mult) e depois print(f"DANO TOTAL = {resultado}")',
            testCases: [
                { input: '20\n3', expected: 'DANO TOTAL = 70' },
                { input: '15\n2', expected: 'DANO TOTAL = 40' },
                { input: '50\n1', expected: 'DANO TOTAL = 60' }
            ]
        },
        {
            id: 'bee_1023',
            number: 1023,
            title: 'Ficha de Herói com Dicionário',
            category: 'cat6',
            difficulty: 'Avançado',
            xp: 70,
            description: 'Armazene os dados de um personagem em um dicionário Python contendo "nome", "nivel" (int) e "xp" (int). Se o xp for maior ou igual a 100, aumente o nível do herói em +1! Ao final, imprima a ficha atualizada.',
            inputSpec: '3 linhas: Nome (str), Nível atual (int) e XP acumulado (int).',
            outputSpec: 'Imprima: Heroi: NOME | Nivel: X',
            starterCode: 'heroi = {\n    "nome": input(),\n    "nivel": int(input()),\n    "xp": int(input())\n}\n# Se heroi["xp"] >= 100, some 1 em heroi["nivel"]:\n',
            hint: 'Use if heroi["xp"] >= 100: heroi["nivel"] += 1 e depois print(f\'Heroi: {heroi["nome"]} | Nivel: {heroi["nivel"]}\')',
            testCases: [
                { input: 'Arthas\n5\n120', expected: 'Heroi: Arthas | Nivel: 6' },
                { input: 'Jaina\n3\n80', expected: 'Heroi: Jaina | Nivel: 3' },
                { input: 'Thrall\n10\n100', expected: 'Heroi: Thrall | Nivel: 11' }
            ]
        },
        {
            id: 'bee_1024',
            number: 1024,
            title: 'Sequência de Fibonacci (Desafio Mestre)',
            category: 'cat6',
            difficulty: 'Avançado',
            xp: 75,
            description: 'A sequência de Fibonacci começa com 0 e 1, e cada número seguinte é sempre a soma dos dois anteriores (0, 1, 1, 2, 3, 5, 8, 13...). Leia um inteiro N (1 <= N <= 15) e imprima os N primeiros números dessa sequência separados por um espaço.',
            inputSpec: 'Um número inteiro N (entre 1 e 15).',
            outputSpec: 'Os N primeiros termos de Fibonacci na mesma linha, separados por espaço.',
            starterCode: 'n = int(input())\ntermos = []\na = 0\nb = 1\nfor i in range(n):\n    termos.append(str(a))\n    proximo = a + b\n    a = b\n    b = proximo\nprint(" ".join(termos))\n',
            hint: 'Guarde cada termo convertido em str(a) na lista e use " ".join(termos) para imprimir separado por espaço!',
            testCases: [
                { input: '5', expected: '0 1 1 2 3' },
                { input: '1', expected: '0' },
                { input: '8', expected: '0 1 1 2 3 5 8 13' }
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

    // Converte f-strings (ex: f"X = {x:.2f}") para .format() caso necessário para máxima compatibilidade
    function preprocessPythonCode(code) {
        return String(code || '').replace(/\bf(["'])(.*?)\1/g, function (match, quote, inner) {
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
        });
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
    // 5. CHAT GEMINI IA NATIVO (DESIGN IDÊNTICO AO STREAMLIT + GOOGLE FORMS)
    // =========================================================================

    const CHAT_SYSTEM_INSTRUCTION = `Você é o GEMINI-1.5-FLASH, assistente virtual e tutor especialista do projeto "TRILHANDO O CAMINHO DO CÓDIGO" (CEFET-MG & FAPEMIG).

SUA MISSÃO E DIRETRIZ DE RESPOSTA INTELIGENTE:
1. DISTINÇÃO INTELIGENTE DO CONTEXTO:
   - Se a pergunta do aluno for CONCEITUAL, TEÓRICA ou UMA DÚVIDA GERAL (ex: "o que é uma variável?", "como funciona o Flet?", "o que é um loop?"):
     -> Responda de forma clara, didática, concisa e explicativa, SEM incluir blocos de código desnecessários no final.
   - Se a pergunta do aluno pedir CÓDIGO, EXEMPLO PRÁTICO, IMPLEMENTAÇÃO ou COMO PROGRAMAR ALGO (ex: "como criar um botão no Flet?", "faça o jogo da cobrinha", "me dê um exemplo de código"):
     -> Forneça a explicação e inclua o CÓDIGO COMPLETO, limpo e pronto para ser executado (em blocos \`\`\`python), incluindo todos os imports e funções necessárias.
2. TOM DE VOZ:
   - Responda sempre em português, com tom didático, profissional, encorajador, claro e direto para estudantes do Ensino Fundamental II (7º ao 9º ano).`;

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

    // Tutor IA Pedagógico Inteligente de Contingência (responde na hora mesmo sem chave externa ou se a cota 429 estourar)
    function generateSmartTutorFallbackResponse(promptText, studentName) {
        const q = String(promptText || '').toLowerCase();
        const firstName = String(studentName || 'estudante').split(' ')[0];

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

        return `Olá, **${firstName}**! Sou o assistente de IA do projeto **Trilhando o Caminho do Código**. 🤖\n\nPosso te ajudar explicando passo a passo ou criando exemplos em Python sobre:\n- **Comandos básicos**: \`print()\`, \`input()\`, \`int()\`, \`float()\` e f-strings\n- **Tomada de decisão**: \`if\`, \`elif\`, \`else\` e operadores lógicos (\`and\`, \`or\`)\n- **Laços e Erros**: \`for\`, \`while\`, \`break\` e blindagem com \`try / except\`\n- **Estruturas**: Listas (\`append\`, \`len\`), Funções (\`def\`), Dicionários e Apps com **Flet**\n- **Dicas para os Desafios estilo Beecrowd**\n\nAqui vai um exemplo rápido em Python relacionado ao seu pedido:\n\n\`\`\`python\n# Exemplo prático em Python:\nnome = input("Digite seu nome: ")\npontos = int(input("Quantos pontos você fez no desafio? "))\n\nif pontos >= 50:\n    print(f"🎉 Parabéns, {nome}! Você subiu de Rank com {pontos} XP!")\nelse:\n    print(f"💪 Continue praticando, {nome}! Você já tem {pontos} XP!")\n\`\`\`\n\nMe conte exatamente qual comando, desafio ou código você quer montar agora!`;
    }

    async function askGeminiApiAsync(promptText, studentName) {
        const cfg = window.TrilhandoClassroom.getChatbotConfig();
        const apiKey = (cfg.geminiApiKey || '').trim();

        chatHistorySession.push({
            role: 'user',
            parts: [{ text: promptText }]
        });

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
                        contents: chatHistorySession,
                        generationConfig: {
                            temperature: 0.2,
                            topP: 0.95,
                            topK: 40,
                            maxOutputTokens: 2048
                        }
                    };
                    const res = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    if (res.ok) {
                        const data = await res.json();
                        const reply = data &&
                            data.candidates &&
                            data.candidates[0] &&
                            data.candidates[0].content &&
                            data.candidates[0].content.parts &&
                            data.candidates[0].content.parts[0] &&
                            data.candidates[0].content.parts[0].text;
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

        // Resposta pedagógica inteligente caso não haja chave AIza configurada ou caso a cota gratuita esteja ocupada
        await new Promise(r => setTimeout(r, 450));
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
