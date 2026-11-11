/**
 * TRILHANDO O CAMINHO DO CÓDIGO — Classroom, Quiz (NotebookLM Style) & Homework Engine
 * CEFET-MG & FAPEMIG • Ensino Fundamental II (7º ao 9º ano)
 */

(function () {
    'use strict';

    const STORAGE_KEY_USERS = 'trilhando_classroom_users_v1';
    const STORAGE_KEY_DELETED_USERS = 'trilhando_classroom_deleted_users_v1';
    const STORAGE_KEY_SUBMISSIONS = 'trilhando_classroom_submissions_v1';
    const STORAGE_KEY_ATTENDANCE = 'trilhando_classroom_attendance_v1';
    const STORAGE_KEY_SESSION = 'trilhando_classroom_session_v1';
    const STORAGE_KEY_CLOUD = 'trilhando_classroom_cloud_cfg_v1';
    const STORAGE_KEY_UNLOCKED_LESSONS = 'trilhando_classroom_unlocked_lessons_v1';
    const STORAGE_KEY_UNLOCKED_LESSONS_TS = 'trilhando_classroom_unlocked_lessons_ts_v1';
    const STORAGE_KEY_UNLOCKED_QUIZZES = 'trilhando_classroom_unlocked_quizzes_v1';
    const STORAGE_KEY_UNLOCKED_QUIZZES_TS = 'trilhando_classroom_unlocked_quizzes_ts_v1';
    const STORAGE_KEY_QUIZ_ANSWERS = 'trilhando_classroom_quiz_answers_v1';
    const STORAGE_KEY_RECENT_USERS = 'trilhando_classroom_recent_users_v1';
    const STORAGE_KEY_CHALLENGES = 'trilhando_classroom_challenges_v1';
    const STORAGE_KEY_CHATBOT_CFG = 'trilhando_classroom_chatbot_cfg_v1';

    // Controle anti-força bruta por usuário (tentativas erradas de senha)
    const LOGIN_ATTEMPTS_MAP = {};

    // Padrão inicial: Aula 01 (feita em 07/10) e Aula 02 (amanhã 04/11) liberadas
    const DEFAULT_UNLOCKED_LESSONS = ['aula01', 'aula02'];

    // Padrão inicial de quizzes liberados: vazio (o quiz começa trancado para os alunos durante a aula de apresentação)
    const DEFAULT_UNLOCKED_QUIZZES = [];

    // Cronograma oficial de aulas atualizado (conclusão em 09/12/2026)
    const LESSONS_SCHEDULE = [
        { key: 'aula01', shortLabel: 'A1', label: 'Aula 01', date: '07/10', topic: 'Abertura, T0 & Prompt' },
        { key: 'aula02', shortLabel: 'A2', label: 'Aula 02', date: '04/11', topic: 'Variáveis & Condicionais (if/else)' },
        { key: 'aula03', shortLabel: 'A3', label: 'Aula 03', date: '11/11', topic: 'Erros (try/except), Laços (while/for) & Listas' },
        { key: 'aula04', shortLabel: 'A4', label: 'Aula 04', date: '18/11', topic: 'Funções (def/return) & Dicionários (dict)' },
        { key: 'aula05', shortLabel: 'A5', label: 'Aula 05', date: '25/11', topic: 'Interfaces Visuais: Flet Básico & Avançado' },
        { key: 'aula06', shortLabel: 'A6', label: 'Aula 06', date: '02/12', topic: 'Sprint Final, Integração IA & Pitch' },
        { key: 'aula07', shortLabel: 'A7', label: 'Aula 07', date: '09/12', topic: 'Feira Final de Soluções, T1 & Certificados' }
    ];

    // Default Admin Accounts (Victor + 2 Discentes do Projeto)
    // Único Login de Administrador compartilhado pela equipe (Victor, Rafael e Kaique)
    const DEFAULT_ADMINS = [
        {
            id: 'adm_trilhando_unico',
            fullName: 'Trilhando o Caminho do Código',
            username: 'trilhando-adm',
            password: 'Trilhando#2026',
            role: 'admin',
            title: 'Coordenação & Tutores ADM'
        }
    ];

    // =========================================================================
    // BANCO DE QUESTÕES: QUIZZES (ESTILO NOTEBOOK LM) E TAREFAS DE CASA
    // =========================================================================

    const QUIZZES_BY_LESSON = {
        aula03: {
            id: 'quiz_aula03',
            lessonNumber: 3,
            title: 'Quiz de Revisão — Aulas 01 e 02',
            subtitle: '10 questões rápidas para relembrar print(), input(), variáveis e condicionais (if / elif / else)',
            questions: [
                {
                    id: 'q1',
                    topic: 'Aula 01 & 02 • Saída de Dados',
                    question: 'Qual comando em Python usamos quando queremos que o computador "fale" (mostre uma mensagem na tela)?',
                    code: '# Queremos mostrar: Olá, turma!\n________("Olá, turma!")',
                    options: [
                        {
                            letter: 'A',
                            text: 'input("Olá, turma!")',
                            isCorrect: false,
                            explanation: 'O comando input() serve para o computador ESCUTAR (ler o que o usuário digita no teclado), e não apenas falar.'
                        },
                        {
                            letter: 'B',
                            text: 'print("Olá, turma!")',
                            isCorrect: true,
                            explanation: 'Exato! O comando print() é o "alto-falante" do Python: tudo que está dentro dos parênteses aparece na tela.'
                        },
                        {
                            letter: 'C',
                            text: 'escreva("Olá, turma!")',
                            isCorrect: false,
                            explanation: 'Em linguagens em português (como o Portugol) usamos "escreva", mas o Python usa termos em inglês: o comando correto é print().'
                        },
                        {
                            letter: 'D',
                            text: 'texto("Olá, turma!")',
                            isCorrect: false,
                            explanation: '"texto" não é um comando padrão do Python para exibir mensagens; o comando oficial de saída é print().'
                        }
                    ]
                },
                {
                    id: 'q2',
                    topic: 'Aula 01 & 02 • Entrada e Variáveis',
                    question: 'O que acontece quando executamos a linha de código abaixo?',
                    code: 'heroi = input("Qual é o nome do seu personagem? ")',
                    options: [
                        {
                            letter: 'A',
                            text: 'O programa mostra a pergunta, espera o usuário digitar no teclado e guarda a resposta na variável "heroi".',
                            isCorrect: true,
                            explanation: 'Perfeito! O input() faz a pergunta e espera a resposta, e o sinal "=" guarda o valor digitado dentro da caixinha (variável) chamada "heroi".'
                        },
                        {
                            letter: 'B',
                            text: 'O programa apenas exibe a pergunta na tela, mas não salva a resposta digitada em lugar nenhum.',
                            isCorrect: false,
                            explanation: 'Como escrevemos "heroi = input(...)", o sinal de igual garante que a resposta do jogador fica guardada na variável!'
                        },
                        {
                            letter: 'C',
                            text: 'A variável "heroi" é criada vazia e o Python ignora o que o usuário digitou.',
                            isCorrect: false,
                            explanation: 'O Python pega exatamente o texto que a pessoa digitou e armazena dentro da variável "heroi".'
                        },
                        {
                            letter: 'D',
                            text: 'O programa dá erro porque faltou colocar o comando print() antes do input().',
                            isCorrect: false,
                            explanation: 'O input() já exibe o texto da pergunta sozinho entre os parênteses, não sendo necessário colocar print() antes.'
                        }
                    ]
                },
                {
                    id: 'q3',
                    topic: 'Aula 02 • Tipos de Dados',
                    question: 'Verdadeiro ou Falso? "O comando input() SEMPRE devolve um texto (str), mesmo que o usuário digite um número como 15."',
                    code: 'idade = input("Digite sua idade: ")  # Usuário digitou: 15',
                    options: [
                        {
                            letter: 'A',
                            text: 'Verdadeiro! O input() sempre entrega texto (str), por isso usamos int() ou float() quando queremos fazer contas.',
                            isCorrect: true,
                            explanation: 'Mandou bem! Para o input(), "15" é texto. Para somar ou comparar como número, convertemos usando int(input(...)).'
                        },
                        {
                            letter: 'B',
                            text: 'Falso! O Python converte sozinho para número inteiro sempre que o usuário digita apenas dígitos.',
                            isCorrect: false,
                            explanation: 'O input() nunca converte sozinho: sem o int(), se você somar "5" + "3", ele junta os textos e vira "53"!'
                        },
                        {
                            letter: 'C',
                            text: 'Falso! O input() só aceita letras e trava se você digitar números.',
                            isCorrect: false,
                            explanation: 'O input() aceita qualquer tecla (letras, números ou símbolos), mas guarda tudo no formato de texto (str).'
                        },
                        {
                            letter: 'D',
                            text: 'Verdadeiro, mas apenas se a frase da pergunta contiver palavras.',
                            isCorrect: false,
                            explanation: 'O retorno do input() é SEMPRE do tipo texto (str), independentemente do que foi escrito na mensagem da pergunta.'
                        }
                    ]
                },
                {
                    id: 'q4',
                    topic: 'Aula 02 • Conversão de Tipos',
                    question: 'Qual será o resultado impresso na tela pelo código abaixo se o usuário digitar 5 e depois 3?',
                    code: 'n1 = input("Digite o 1º número: ")  # digitou 5\nn2 = input("Digite o 2º número: ")  # digitou 3\nprint(n1 + n2)',
                    options: [
                        {
                            letter: 'A',
                            text: '8',
                            isCorrect: false,
                            explanation: 'Daríamos 8 somente se tivéssemos usado int(input()). Sem o int(), o Python não soma matematicamente, ele gruda os textos!'
                        },
                        {
                            letter: 'B',
                            text: '53',
                            isCorrect: true,
                            explanation: 'Exatamente! Como não usamos int(), o Python juntou o texto "5" com o texto "3", formando "53" (concatenação).'
                        },
                        {
                            letter: 'C',
                            text: 'Dá erro de sintaxe, pois o sinal de + não pode ser usado entre textos.',
                            isCorrect: false,
                            explanation: 'O sinal de + funciona perfeitamente com textos em Python, mas para juntar (concatenar) palavras uma ao lado da outra.'
                        },
                        {
                            letter: 'D',
                            text: 'n1 + n2',
                            isCorrect: false,
                            explanation: 'Como n1 e n2 não estão entre aspas no print(n1 + n2), o Python mostra o valor guardado nelas ("53"), e não a palavra "n1 + n2".'
                        }
                    ]
                },
                {
                    id: 'q5',
                    topic: 'Aula 02 • int() vs float()',
                    question: 'Se quisermos pedir o preço de um lanche que custa R$ 12.50 (com centavos), qual conversão devemos usar?',
                    code: 'preco = ______(input("Qual o preço do lanche? "))',
                    options: [
                        {
                            letter: 'A',
                            text: 'int',
                            isCorrect: false,
                            explanation: 'O int() serve apenas para números INTEIROS (sem casas decimais, como 10 ou 25). Com 12.50 ele geraria um erro!'
                        },
                        {
                            letter: 'B',
                            text: 'str',
                            isCorrect: false,
                            explanation: 'O str é texto! Com texto não conseguimos fazer operações matemáticas, como somar o preço do lanche com o suco.'
                        },
                        {
                            letter: 'C',
                            text: 'float',
                            isCorrect: true,
                            explanation: 'Isso aí! O tipo float guarda números com casas decimais (usando ponto flutuante, como 12.50 ou 1.75).'
                        },
                        {
                            letter: 'D',
                            text: 'round',
                            isCorrect: false,
                            explanation: 'A função round() serve para arredondar valores já numéricos, mas para ler números com vírgula/ponto usamos float().'
                        }
                    ]
                },
                {
                    id: 'q6',
                    topic: 'Aula 02 • Operadores de Comparação',
                    question: 'Em Python, qual é a diferença entre usar um sinal de igual ( = ) e dois sinais de igual ( == )?',
                    code: 'vidas = 3        # Linha 1\nif vidas == 3:   # Linha 2',
                    options: [
                        {
                            letter: 'A',
                            text: 'Não há diferença, podemos usar "=" ou "==" em qualquer parte do código.',
                            isCorrect: false,
                            explanation: 'Eles têm funções bem diferentes! Se você usar apenas "=" dentro do if, o Python vai acusar erro de sintaxe.'
                        },
                        {
                            letter: 'B',
                            text: '"=" guarda um valor na variável, enquanto "==" compara se dois valores são iguais.',
                            isCorrect: true,
                            explanation: 'Na mosca! Um igual (=) coloca o valor dentro da variável; dois iguais (==) perguntam ao Python: "esses dois valores são iguais?".'
                        },
                        {
                            letter: 'C',
                            text: '"=" compara se os valores são iguais e "==" guarda o valor dentro da variável.',
                            isCorrect: false,
                            explanation: 'Cuidado para não inverter: um único sinal (=) é para atribuição/guardar, e dois sinais (==) são para teste de igualdade!'
                        },
                        {
                            letter: 'D',
                            text: '"=" cria uma nova variável e "==" apaga o valor que estava salvo anteriormente.',
                            isCorrect: false,
                            explanation: 'O "==" não apaga dados; ele apenas faz um teste lógico (devolvendo Verdadeiro ou Falso) sem alterar as variáveis.'
                        }
                    ]
                },
                {
                    id: 'q7',
                    topic: 'Aula 02 • Estrutura Condicional (if / else)',
                    question: 'Analise o código abaixo. Se o jogador tiver 80 moedas, o que vai aparecer na tela?',
                    code: 'moedas = 80\nif moedas >= 100:\n    print("🗡️ Comprou a Espada Lendária!")\nelse:\n    print("💰 Moedas insuficientes! Continue na missão.")',
                    options: [
                        {
                            letter: 'A',
                            text: '🗡️ Comprou a Espada Lendária!',
                            isCorrect: false,
                            explanation: 'Para comprar a espada, moedas precisava ser maior ou igual a 100 (moedas >= 100). Como 80 é menor que 100, a condição do if é Falsa!'
                        },
                        {
                            letter: 'B',
                            text: '💰 Moedas insuficientes! Continue na missão.',
                            isCorrect: true,
                            explanation: 'Correto! Como 80 >= 100 é Falso, o Python pula o bloco do if e executa o Plano B, que é o bloco do else!'
                        },
                        {
                            letter: 'C',
                            text: 'O programa encerra sem imprimir nada porque a condição principal falhou.',
                            isCorrect: false,
                            explanation: 'Como temos um bloco else (Plano B), quando o if é falso o programa sempre executa o que está dentro do else.'
                        },
                        {
                            letter: 'D',
                            text: 'Aparecem as duas mensagens na tela, uma após a outra.',
                            isCorrect: false,
                            explanation: 'No if/else, o computador escolhe apenas UM caminho: ou entra no if (se verdadeiro) ou entra no else (se falso), nunca nos dois!'
                        }
                    ]
                },
                {
                    id: 'q8',
                    topic: 'Aula 02 • Múltiplas Decisões (if / elif / else)',
                    question: 'Se o aluno tirou nota 6, qual mensagem será impressa pelo programa abaixo?',
                    code: 'nota = 6\nif nota >= 7:\n    print("✅ Aprovado!")\nelif nota >= 5:\n    print("⚠️ Recuperação!")\nelse:\n    print("❌ Reprovado!")',
                    options: [
                        {
                            letter: 'A',
                            text: '✅ Aprovado!',
                            isCorrect: false,
                            explanation: '6 não é maior nem igual a 7, então a primeira condição (if nota >= 7) é falsa.'
                        },
                        {
                            letter: 'B',
                            text: '⚠️ Recuperação!',
                            isCorrect: true,
                            explanation: 'Show! O Python testa de cima para baixo: 6 >= 7 é Falso, mas no elif 6 >= 5 é Verdadeiro! Então ele imprime "⚠️ Recuperação!" e para.'
                        },
                        {
                            letter: 'C',
                            text: '❌ Reprovado!',
                            isCorrect: false,
                            explanation: 'O else só roda quando TODAS as condições acima falham. Como 6 >= 5 deu verdadeiro no elif, ele não chega no else.'
                        },
                        {
                            letter: 'D',
                            text: 'Imprime tanto "⚠️ Recuperação!" quanto "❌ Reprovado!".',
                            isCorrect: false,
                            explanation: 'Assim que o Python encontra o primeiro teste verdadeiro no elif, ele executa aquele bloco e encerra toda a estrutura!'
                        }
                    ]
                },
                {
                    id: 'q9',
                    topic: 'Aula 02 • Regra da Indentação',
                    question: 'Por que deixamos um espaço (Tab / 4 espaços) antes do print() logo abaixo do if?',
                    code: 'if pontos >= 10:\n    print("🎉 Passou de fase!")',
                    options: [
                        {
                            letter: 'A',
                            text: 'É apenas uma recomendação visual de organização, mas funcionaria igual sem o espaço.',
                            isCorrect: false,
                            explanation: 'Em Python não é só estética! Se você não colocar o recuo (indentação), o Python dá erro (IndentationError) e não roda.'
                        },
                        {
                            letter: 'B',
                            text: 'Para avisar ao Python que aquele print() está DENTRO do if e só deve rodar se a condição for verdadeira.',
                            isCorrect: true,
                            explanation: 'Exatamente! A indentação (recuo com Tab) é como o Python sabe quais linhas pertencem ao bloco do if, elif ou else.'
                        },
                        {
                            letter: 'C',
                            text: 'Serve para o computador pular uma linha em branco no terminal antes de exibir o texto.',
                            isCorrect: false,
                            explanation: 'O espaço no código define a estrutura dos blocos lógicos, e não linhas vazias impressas no terminal.'
                        },
                        {
                            letter: 'D',
                            text: 'Serve para transformar a linha em um comentário temporário que o computador ignora.',
                            isCorrect: false,
                            explanation: 'Comentários em Python começam com o símbolo # (jogo da velha); o recuo serve para delimitar blocos condicionais.'
                        }
                    ]
                },
                {
                    id: 'q10',
                    topic: 'Aula 02 • Operadores Lógicos (and / or)',
                    question: 'Para entrar na montanha-russa radical, a pessoa precisa ter idade >= 12 E altura >= 1.40. Qual operador usamos para exigir as DUAS condições ao mesmo tempo?',
                    code: 'if idade >= 12 _____ altura >= 1.40:\n    print("🎢 Entrada liberada!")',
                    options: [
                        {
                            letter: 'A',
                            text: 'and',
                            isCorrect: true,
                            explanation: 'Perfeito! O operador "and" (E) exige que as DUAS condições sejam verdadeiras ao mesmo tempo para liberar a entrada.'
                        },
                        {
                            letter: 'B',
                            text: 'or',
                            isCorrect: false,
                            explanation: 'O operador "or" (OU) deixaria entrar se apenas UMA condição fosse verdadeira (por exemplo, alguém com idade mas sem a altura mínima).'
                        },
                        {
                            letter: 'C',
                            text: 'e',
                            isCorrect: false,
                            explanation: 'Em português falamos "e", mas o Python utiliza palavras em inglês, sendo "and" o operador correto.'
                        },
                        {
                            letter: 'D',
                            text: 'then',
                            isCorrect: false,
                            explanation: 'A palavra "then" existe em outras linguagens, mas no Python usamos dois pontos (:) no fim da linha e o operador lógico "and".'
                        }
                    ]
                }
            ]
        },

        aula04: {
            id: 'quiz_aula04',
            lessonNumber: 4,
            title: 'Quiz de Revisão — Aula 03 (try/except, while, for e Listas)',
            subtitle: '10 questões rápidas sobre tratamento de erros, laços de repetição e listas em Python',
            questions: [
                {
                    id: 'q4_1',
                    topic: 'Aula 03 • Tratamento de Erros',
                    question: 'Qual estrutura usamos em Python para impedir que o programa trave quando o usuário digita algo inválido (ex: letras em vez de números)?',
                    code: '________:\n    idade = int(input("Sua idade: "))\n________ ValueError:\n    print("⚠️ Digite apenas números!")',
                    options: [
                        { letter: 'A', text: 'if / else', isCorrect: false, explanation: 'O if/else testa condições lógicas, mas não impede que o int() quebre ao receber letras.' },
                        { letter: 'B', text: 'try / except', isCorrect: true, explanation: 'Exato! O try tenta rodar o código perigoso e o except captura o erro sem fechar o programa!' },
                        { letter: 'C', text: 'while / break', isCorrect: false, explanation: 'O while repete código e o break para o loop, mas não tratam exceções como ValueError.' },
                        { letter: 'D', text: 'error / catch', isCorrect: false, explanation: 'Em Python as palavras reservadas corretas são try e except.' }
                    ]
                },
                {
                    id: 'q4_2',
                    topic: 'Aula 03 • Laço while',
                    question: 'Quando devemos escolher o laço WHILE em vez do laço FOR?',
                    options: [
                        { letter: 'A', text: 'Quando queremos repetir enquanto uma condição for verdadeira, sem saber exatamente quantas tentativas o usuário vai precisar.', isCorrect: true, explanation: 'Perfeito! O while é ideal para validação de senha, menus e jogos onde o loop depende de uma condição.' },
                        { letter: 'B', text: 'Apenas quando queremos somar dois números inteiros uma única vez.', isCorrect: false, explanation: 'Para executar algo uma única vez não precisamos de laço de repetição.' },
                        { letter: 'C', text: 'Para criar uma lista vazia na memória.', isCorrect: false, explanation: 'Listas são criadas com colchetes [], e não com while.' },
                        { letter: 'D', text: 'Para converter um texto em número decimal.', isCorrect: false, explanation: 'Quem converte texto em decimal é a função float().' }
                    ]
                },
                {
                    id: 'q4_3',
                    topic: 'Aula 03 • Laço for e range()',
                    question: 'Quais números serão exibidos pelo código abaixo?',
                    code: 'for n in range(1, 5):\n    print(n)',
                    options: [
                        { letter: 'A', text: '1, 2, 3, 4 e 5', isCorrect: false, explanation: 'Pegadinha clássica! O segundo número do range(início, fim) nunca é incluído!' },
                        { letter: 'B', text: '1, 2, 3 e 4', isCorrect: true, explanation: 'Certíssimo! O range(1, 5) começa no 1 e para ANTES do 5, gerando 1, 2, 3 e 4.' },
                        { letter: 'C', text: '0, 1, 2, 3, 4 e 5', isCorrect: false, explanation: 'Como informamos o início 1 em range(1, 5), ele começa no 1 e para no 4.' },
                        { letter: 'D', text: 'Apenas o número 1 e o número 5', isCorrect: false, explanation: 'O range gera toda a sequência inteira do início até fim - 1.' }
                    ]
                },
                {
                    id: 'q4_4',
                    topic: 'Aula 03 • Comando break',
                    question: 'O que o comando "break" faz quando é executado dentro de um laço while ou for?',
                    options: [
                        { letter: 'A', text: 'Interrompe e sai do laço de repetição imediatamente.', isCorrect: true, explanation: 'Isso mesmo! O break funciona como um freio de emergência que encerra o loop na hora.' },
                        { letter: 'B', text: 'Apaga todas as variáveis criadas no programa.', isCorrect: false, explanation: 'O break apenas encerra o loop atual; as variáveis continuam salvas normalmente.' },
                        { letter: 'C', text: 'Reinicia o computador do usuário.', isCorrect: false, explanation: 'O break só controla o fluxo do laço de repetição no Python.' },
                        { letter: 'D', text: 'Faz o loop rodar duas vezes mais rápido.', isCorrect: false, explanation: 'O break interrompe a repetição em vez de acelerá-la.' }
                    ]
                },
                {
                    id: 'q4_5',
                    topic: 'Aula 03 • Listas e Índices (Base 0)',
                    question: 'Dada a lista abaixo, o que será impresso pelo comando print(jogos[0])?',
                    code: 'jogos = ["Minecraft", "Roblox", "Valorant", "FIFA"]\nprint(jogos[0])',
                    options: [
                        { letter: 'A', text: 'Roblox', isCorrect: false, explanation: '"Roblox" está na posição de índice 1 (segunda posição).' },
                        { letter: 'B', text: 'Minecraft', isCorrect: true, explanation: 'Exato! Em Python a contagem dos índices começa sempre no ZERO (0)!' },
                        { letter: 'C', text: 'FIFA', isCorrect: false, explanation: '"FIFA" está no índice 3 (ou índice -1).' },
                        { letter: 'D', text: 'Dá erro porque não existe posição 0.', isCorrect: false, explanation: 'Em Python, toda lista com elementos começa justamente na posição 0.' }
                    ]
                },
                {
                    id: 'q4_6',
                    topic: 'Aula 03 • Adicionando na Lista',
                    question: 'Qual método usamos para adicionar um NOVO item no final de uma lista existente?',
                    code: 'mochila = ["Caderno", "Caneta"]\nmochila.________("Borracha")',
                    options: [
                        { letter: 'A', text: 'add', isCorrect: false, explanation: 'Em listas do Python não usamos .add(); o método correto é .append().' },
                        { letter: 'B', text: 'append', isCorrect: true, explanation: 'Perfeito! O método .append() pendura um novo item no final da lista.' },
                        { letter: 'C', text: 'push', isCorrect: false, explanation: 'O método .push() é usado em JavaScript; no Python usamos .append().' },
                        { letter: 'D', text: 'novo', isCorrect: false, explanation: 'Os métodos do Python são em inglês: .append() adiciona ao final.' }
                    ]
                },
                {
                    id: 'q4_7',
                    topic: 'Aula 03 • Removendo Itens (.remove vs .pop)',
                    question: 'Qual é a diferença entre lista.remove("Maçã") e lista.pop(0)?',
                    options: [
                        { letter: 'A', text: 'O .remove() apaga buscando pelo VALOR/NOME do item, enquanto o .pop() apaga pela POSIÇÃO (índice).', isCorrect: true, explanation: 'Mandou muito bem! .remove("Maçã") procura o valor "Maçã", já .pop(0) remove quem estiver na gaveta 0.' },
                        { letter: 'B', text: 'Os dois fazem exatamente a mesma coisa sem nenhuma diferença.', isCorrect: false, explanation: 'Eles funcionam de maneiras diferentes: um recebe o valor e o outro recebe o índice.' },
                        { letter: 'C', text: 'O .pop() adiciona itens e o .remove() apaga itens.', isCorrect: false, explanation: 'Ambos removem itens da lista; quem adiciona é o .append().' },
                        { letter: 'D', text: 'O .remove() apaga a lista inteira da memória.', isCorrect: false, explanation: 'O .remove(x) apaga apenas a primeira ocorrência do valor x.' }
                    ]
                },
                {
                    id: 'q4_8',
                    topic: 'Aula 03 • Tamanho da Lista',
                    question: 'Qual função retorna a quantidade total de itens guardados dentro de uma lista?',
                    code: 'amigos = ["Ana", "Bruno", "Carla"]\nprint(________(amigos)) # Mostra 3',
                    options: [
                        { letter: 'A', text: 'size(amigos)', isCorrect: false, explanation: 'A função size() não existe por padrão para listas em Python.' },
                        { letter: 'B', text: 'count(amigos)', isCorrect: false, explanation: 'Para medir o tamanho total da lista usamos a função nativa len().' },
                        { letter: 'C', text: 'len(amigos)', isCorrect: true, explanation: 'Exato! len() vem de "length" (comprimento/tamanho) e conta quantos itens existem na lista.' },
                        { letter: 'D', text: 'total(amigos)', isCorrect: false, explanation: 'A função correta do Python para medir o tamanho é len().' }
                    ]
                },
                {
                    id: 'q4_9',
                    topic: 'Aula 03 • Erro de Índice (IndexError)',
                    question: 'Se uma lista tem 3 elementos (índices 0, 1 e 2) e tentamos acessar lista[5], qual erro acontece?',
                    options: [
                        { letter: 'A', text: 'ValueError', isCorrect: false, explanation: 'ValueError ocorre quando um valor tem conteúdo inválido (ex: int("abc") ou .remove() de item ausente).' },
                        { letter: 'B', text: 'IndexError', isCorrect: true, explanation: 'Certíssimo! IndexError avisa que você tentou abrir uma gaveta (índice) que não existe na lista!' },
                        { letter: 'C', text: 'ZeroDivisionError', isCorrect: false, explanation: 'ZeroDivisionError só ocorre em divisões matemáticas por zero.' },
                        { letter: 'D', text: 'NameError', isCorrect: false, explanation: 'NameError ocorre quando usamos o nome de uma variável que nunca foi criada.' }
                    ]
                },
                {
                    id: 'q4_10',
                    topic: 'Aula 03 • Percorrendo Lista com for + if',
                    question: 'O que o código abaixo faz ao percorrer a lista de notas?',
                    code: 'notas = [5.0, 8.5, 9.0, 4.0]\nfor n in notas:\n    if n >= 7.0:\n        print(n)',
                    options: [
                        { letter: 'A', text: 'Imprime todas as 4 notas da lista sem filtro.', isCorrect: false, explanation: 'O bloco if n >= 7.0 filtra apenas as notas maiores ou iguais a 7.0.' },
                        { letter: 'B', text: 'Imprime apenas as notas aprovadas (8.5 e 9.0).', isCorrect: true, explanation: 'Perfeito! O for visita cada nota da lista e o if seleciona apenas aquelas >= 7.0!' },
                        { letter: 'C', text: 'Apaga todas as notas da lista.', isCorrect: false, explanation: 'O comando print(n) apenas exibe na tela sem apagar nada da lista.' },
                        { letter: 'D', text: 'Mostra apenas a primeira nota (5.0).', isCorrect: false, explanation: '5.0 é menor que 7.0, então o if ignora o 5.0 e mostra 8.5 e 9.0.' }
                    ]
                }
            ]
        },

        aula05: {
            id: 'quiz_aula05',
            lessonNumber: 5,
            title: 'Quiz de Revisão — Aula 04 (Funções def e Dicionários)',
            subtitle: '10 questões rápidas para revisar def, parâmetros, return e dicionários {chave: valor}',
            questions: [
                {
                    id: 'q5_1',
                    topic: 'Aula 04 • Criando Funções',
                    question: 'Qual palavra-chave usamos em Python para CRIAR (definir) uma nova função?',
                    code: '________ saudar():\n    print("Olá, dev!")',
                    options: [
                        { letter: 'A', text: 'function', isCorrect: false, explanation: 'A palavra "function" é usada em JavaScript; em Python usamos a abreviação "def".' },
                        { letter: 'B', text: 'def', isCorrect: true, explanation: 'Exato! "def" vem de "define" (definir) e ensina um novo comando ao Python!' },
                        { letter: 'C', text: 'fun', isCorrect: false, explanation: 'Em Python usamos "def" seguido do nome da função e parênteses.' },
                        { letter: 'D', text: 'criar', isCorrect: false, explanation: 'Os comandos do Python são em inglês: usamos "def".' }
                    ]
                },
                {
                    id: 'q5_2',
                    topic: 'Aula 04 • Chamando uma Função',
                    question: 'Se criamos a função def pular():, por que ela NÃO executa nada se não escrevermos pular() depois?',
                    options: [
                        { letter: 'A', text: 'Porque o def apenas ensina a receita ao Python; para executar de verdade precisamos CHAMAR a função pelo nome com parênteses.', isCorrect: true, explanation: 'Perfeito! Definir (def) guarda a receita na memória; chamar pular() coloca a receita em ação!' },
                        { letter: 'B', text: 'Porque funções em Python só funcionam dentro de arquivos diferentes.', isCorrect: false, explanation: 'Funções funcionam no mesmo arquivo, bastando chamá-las com nome() após o def.' },
                        { letter: 'C', text: 'Porque toda função precisa obrigatoriamente de um laço while.', isCorrect: false, explanation: 'Funções não precisam de while para funcionar; só precisam ser chamadas.' },
                        { letter: 'D', text: 'Porque o Python ignora funções que não usam try/except.', isCorrect: false, explanation: 'O try/except é opcional; o que executa a função é a sua chamada.' }
                    ]
                },
                {
                    id: 'q5_3',
                    topic: 'Aula 04 • Parâmetros',
                    question: 'No código def somar(a, b):, o que são "a" e "b" dentro dos parênteses?',
                    options: [
                        { letter: 'A', text: 'São parâmetros (os "ingredientes" que a função recebe para trabalhar).', isCorrect: true, explanation: 'Isso mesmo! Parâmetros são variáveis de entrada que recebem os valores enviados quando chamamos somar(3, 5).' },
                        { letter: 'B', text: 'São erros de sintaxe que travam o programa.', isCorrect: false, explanation: 'Colocar variáveis separadas por vírgula nos parênteses é a sintaxe correta de parâmetros.' },
                        { letter: 'C', text: 'São listas vazias criadas automaticamente.', isCorrect: false, explanation: 'Parâmetros podem receber qualquer tipo de valor (números, textos, listas).' },
                        { letter: 'D', text: 'São chaves fixas de um dicionário.', isCorrect: false, explanation: 'Nos parênteses de um def, eles são parâmetros da função.' }
                    ]
                },
                {
                    id: 'q5_4',
                    topic: 'Aula 04 • return vs print',
                    question: 'Qual é a diferença entre usar print() e usar return dentro de uma função?',
                    options: [
                        { letter: 'A', text: 'O print() apenas mostra na tela, enquanto o return DEVOLVE o valor para podermos guardar em uma variável ou usar em outra conta.', isCorrect: true, explanation: 'Exato! Sem return, a função devolve None e não conseguimos reaproveitar o resultado em outra variável.' },
                        { letter: 'B', text: 'O return imprime o texto em letras vermelhas no terminal.', isCorrect: false, explanation: 'O return não imprime nada na tela sozinho; ele entrega o resultado para quem chamou a função.' },
                        { letter: 'C', text: 'Não existe diferença, os dois comandos são sinônimos.', isCorrect: false, explanation: 'Eles têm papéis bem diferentes: print exibe na tela, return entrega o dado de volta ao programa.' },
                        { letter: 'D', text: 'O return serve para apagar a função da memória.', isCorrect: false, explanation: 'A função continua existindo normalmente para ser chamada outras vezes.' }
                    ]
                },
                {
                    id: 'q5_5',
                    topic: 'Aula 04 • Escopo Local',
                    question: 'Se criarmos uma variável "pontos = 10" DENTRO de uma função def, o que acontece se tentarmos dar print(pontos) FORA da função (sem usar return)?',
                    options: [
                        { letter: 'A', text: 'Dá NameError, porque variáveis criadas dentro da função são locais (só existem lá dentro).', isCorrect: true, explanation: 'Mandou bem! O que nasce dentro da função fica dentro da função (escopo local), a menos que seja devolvido com return!' },
                        { letter: 'B', text: 'Mostra o número 10 normalmente em qualquer lugar.', isCorrect: false, explanation: 'Fora da função a variável local não é enxergada, gerando NameError.' },
                        { letter: 'C', text: 'Mostra o número 0 por padrão.', isCorrect: false, explanation: 'O Python não cria variáveis com zero sozinho; ele avisa NameError.' },
                        { letter: 'D', text: 'Dá ZeroDivisionError.', isCorrect: false, explanation: 'ZeroDivisionError só acontece em divisões por zero.' }
                    ]
                },
                {
                    id: 'q5_6',
                    topic: 'Aula 04 • Dicionários vs Listas',
                    question: 'Qual símbolo usamos para criar um DICIONÁRIO com pares de {chave: valor} em Python?',
                    code: 'heroi = ________"nome": "Link", "vida": 100________',
                    options: [
                        { letter: 'A', text: 'Colchetes [ ]', isCorrect: false, explanation: 'Colchetes [ ] são usados para criar Listas e acessar índices.' },
                        { letter: 'B', text: 'Chaves { } com dois-pontos separando chave e valor', isCorrect: true, explanation: 'Perfeito! Dicionários usam chaves { "chave": valor } para etiquetar cada informação!' },
                        { letter: 'C', text: 'Parênteses ( )', isCorrect: false, explanation: 'Parênteses são usados em chamadas de funções e tuplas.' },
                        { letter: 'D', text: 'Barras / /', isCorrect: false, explanation: 'Barras são operadores de divisão matemática.' }
                    ]
                },
                {
                    id: 'q5_7',
                    topic: 'Aula 04 • Acessando Dados no Dicionário',
                    question: 'Dado o dicionário abaixo, como mostramos na tela o valor 1500?',
                    code: 'jogador = {"nick": "Shadow", "xp": 1500}',
                    options: [
                        { letter: 'A', text: 'print(jogador[0])', isCorrect: false, explanation: 'Dicionários não são acessados por posição 0, e sim pelo nome da chave!' },
                        { letter: 'B', text: 'print(jogador["xp"])', isCorrect: true, explanation: 'Exato! Passamos a etiqueta (chave) "xp" entre colchetes para abrir o valor 1500!' },
                        { letter: 'C', text: 'print(jogador[1500])', isCorrect: false, explanation: 'Para buscar no dicionário usamos a chave ("xp"), e não o valor.' },
                        { letter: 'D', text: 'print(xp)', isCorrect: false, explanation: '"xp" é uma chave dentro de jogador, e não uma variável solta.' }
                    ]
                },
                {
                    id: 'q5_8',
                    topic: 'Aula 04 • Erro de Chave (KeyError) e .get()',
                    question: 'Por que usar jogador.get("guilda", "Sem guilda") é mais seguro do que jogador["guilda"]?',
                    options: [
                        { letter: 'A', text: 'Porque se a chave "guilda" não existir, o .get() devolve o valor padrão ("Sem guilda") sem travar o programa com KeyError.', isCorrect: true, explanation: 'Certíssimo! O método .get() evita o temido KeyError quando uma chave ainda não foi cadastrada.' },
                        { letter: 'B', text: 'Porque o .get() apaga todas as outras chaves do dicionário.', isCorrect: false, explanation: 'O .get() apenas consulta o valor com segurança, sem apagar nada.' },
                        { letter: 'C', text: 'Porque colchetes não funcionam em dicionários do Python.', isCorrect: false, explanation: 'Colchetes funcionam quando a chave existe, mas dão KeyError se a chave faltar.' },
                        { letter: 'D', text: 'Porque o .get() transforma o dicionário em número inteiro.', isCorrect: false, explanation: 'O .get() apenas busca o valor associado à chave informada.' }
                    ]
                },
                {
                    id: 'q5_9',
                    topic: 'Aula 04 • Modificando e Criando Chaves',
                    question: 'O que acontece ao executar aluno["nota"] = 9.5 em um dicionário aluno = {"nome": "Bia"}?',
                    options: [
                        { letter: 'A', text: 'Cria automaticamente a nova chave "nota" com o valor 9.5 dentro do dicionário aluno.', isCorrect: true, explanation: 'Exato! Em dicionários, atribuir a uma chave nova adiciona o par chave:valor na hora (e se já existir, atualiza o valor).' },
                        { letter: 'B', text: 'Trava o programa porque dicionários não podem receber novas chaves.', isCorrect: false, explanation: 'Dicionários em Python são dinâmicos e podem receber novas chaves a qualquer momento.' },
                        { letter: 'C', text: 'Apaga a chave "nome" para dar lugar à chave "nota".', isCorrect: false, explanation: 'A chave "nome" continua intacta; "nota" é adicionada ao lado dela.' },
                        { letter: 'D', text: 'Precisa usar .append() porque dicionários usam o mesmo método das listas.', isCorrect: false, explanation: 'Dicionários NÃO têm .append()! Neles usamos dicionario["nova_chave"] = valor.' }
                    ]
                },
                {
                    id: 'q5_10',
                    topic: 'Aula 04 • Lista de Dicionários',
                    question: 'Quando combinamos uma LISTA contendo vários DICIONÁRIOS (ex: catalogo = [{"nome": "Poção"}, {"nome": "Espada"}]), como acessamos o nome "Espada"?',
                    options: [
                        { letter: 'A', text: 'catalogo[1]["nome"]', isCorrect: true, explanation: 'Brilhante! Primeiro pegamos o item de índice 1 da lista (o 2º dicionário) e depois abrimos a chave ["nome"]!' },
                        { letter: 'B', text: 'catalogo["nome"][0]', isCorrect: false, explanation: 'Como catalogo é uma lista por fora, primeiro precisamos informar o índice numérico [1] e depois a chave ["nome"].' },
                        { letter: 'C', text: 'catalogo(1, "nome")', isCorrect: false, explanation: 'Acessos a índices de lista e chaves de dicionário usam colchetes: catalogo[1]["nome"].' },
                        { letter: 'D', text: 'catalogo.get(1)', isCorrect: false, explanation: 'Listas não possuem o método .get(); usamos colchetes para o índice da lista.' }
                    ]
                }
            ]
        },

        aula06: {
            id: 'quiz_aula06',
            lessonNumber: 6,
            title: 'Quiz de Revisão — Aula 05 (Interfaces Visuais com Flet)',
            subtitle: '10 questões rápidas sobre páginas, widgets, eventos on_click, layouts e navegação no Flet',
            questions: [
                {
                    id: 'q6_1',
                    topic: 'Aula 05 • O que é o Flet',
                    question: 'Para que serve a biblioteca Flet (import flet as ft) que aprendemos na Aula 05?',
                    options: [
                        { letter: 'A', text: 'Para transformar nossos códigos Python de terminal em aplicativos visuais com janelas, botões, cores e ícones.', isCorrect: true, explanation: 'Exato! O Flet permite criar interfaces gráficas modernas (web, desktop e mobile) usando apenas Python!' },
                        { letter: 'B', text: 'Apenas para fazer contas matemáticas sem mostrar nada na tela.', isCorrect: false, explanation: 'O foco do Flet é justamente construir a interface visual (GUI) do aplicativo.' },
                        { letter: 'C', text: 'Para desinstalar o Python do computador.', isCorrect: false, explanation: 'O Flet é um pacote instalado via pip que trabalha junto com o Python.' },
                        { letter: 'D', text: 'Para substituir o uso de variáveis por arquivos de áudio.', isCorrect: false, explanation: 'No Flet continuamos usando variáveis, funções, listas e dicionários normalmente.' }
                    ]
                },
                {
                    id: 'q6_2',
                    topic: 'Aula 05 • Estrutura Base do App',
                    question: 'Na função principal def main(page: ft.Page):, o que o objeto "page" representa?',
                    options: [
                        { letter: 'A', text: 'Representa a tela / janela do aplicativo onde adicionamos os componentes visuais.', isCorrect: true, explanation: 'Perfeito! A page é a "tela em branco" onde penduramos textos, campos e botões com page.add().' },
                        { letter: 'B', text: 'Representa um erro de conexão com a internet.', isCorrect: false, explanation: 'O objeto page é a janela principal da interface gráfica.' },
                        { letter: 'C', text: 'Representa apenas o ícone de fechar o programa.', isCorrect: false, explanation: 'Ele representa toda a página e suas configurações (título, tema, componentes).' },
                        { letter: 'D', text: 'É uma lista que só aceita números inteiros.', isCorrect: false, explanation: 'O objeto page aceita diversos controles visuais (widgets) do Flet.' }
                    ]
                },
                {
                    id: 'q6_3',
                    topic: 'Aula 05 • Widgets de Entrada e Saída',
                    question: 'No Flet, quais componentes substituem o print() e o input() do terminal?',
                    options: [
                        { letter: 'A', text: 'ft.Text() para exibir textos na tela e ft.TextField() para criar uma caixa onde o usuário digita.', isCorrect: true, explanation: 'Certíssimo! ft.Text mostra informações na janela e ft.TextField cria o campo de digitação!' },
                        { letter: 'B', text: 'ft.Print() e ft.Input()', isCorrect: false, explanation: 'No Flet os nomes corretos dos controles são ft.Text e ft.TextField.' },
                        { letter: 'C', text: 'ft.Column() e ft.Row()', isCorrect: false, explanation: 'Column e Row são organizadores de layout (vertical e horizontal), não caixas de texto.' },
                        { letter: 'D', text: 'ft.Icon() e ft.Color()', isCorrect: false, explanation: 'Ícones e cores são elementos visuais de estilo, não substituem entrada e saída de texto.' }
                    ]
                },
                {
                    id: 'q6_4',
                    topic: 'Aula 05 • Lendo o Valor Digitado',
                    question: 'Se criamos o campo nome_input = ft.TextField(label="Seu nome"), como pegamos o texto que o usuário digitou lá dentro?',
                    options: [
                        { letter: 'A', text: 'Usando nome_input.value', isCorrect: true, explanation: 'Exato! A propriedade .value guarda o conteúdo atual de um TextField ou Text!' },
                        { letter: 'B', text: 'Usando nome_input.label', isCorrect: false, explanation: 'A propriedade .label é apenas o título de dica da caixa ("Seu nome"), e não o que o usuário digitou.' },
                        { letter: 'C', text: 'Usando input(nome_input)', isCorrect: false, explanation: 'Não usamos input() do terminal em widgets do Flet; acessamos direto .value.' },
                        { letter: 'D', text: 'Usando nome_input[0]', isCorrect: false, explanation: 'Um TextField não é uma lista; lemos seu conteúdo com .value.' }
                    ]
                },
                {
                    id: 'q6_5',
                    topic: 'Aula 05 • Atualizando a Tela',
                    question: 'Depois de alterar o texto de um componente dentro de uma função de clique (ex: resultado.value = "Salvo!"), qual comando é OBRIGATÓRIO para a mudança aparecer na tela?',
                    options: [
                        { letter: 'A', text: 'page.update()', isCorrect: true, explanation: 'Regra de ouro do Flet! Sempre que mudamos algo visualmente, chamamos page.update() para redesenhar a tela!' },
                        { letter: 'B', text: 'page.close()', isCorrect: false, explanation: 'page.update() é quem atualiza os controles na janela.' },
                        { letter: 'C', text: 'print(page)', isCorrect: false, explanation: 'print() só escreve no terminal e não atualiza a janela gráfica.' },
                        { letter: 'D', text: 'ft.restart()', isCorrect: false, explanation: 'Para refletir as alterações nos controles usamos page.update().' }
                    ]
                },
                {
                    id: 'q6_6',
                    topic: 'Aula 05 • Eventos de Clique',
                    question: 'No botão ft.ElevatedButton("Calcular", on_click=calcular_imc), por que escrevemos on_click=calcular_imc SEM parênteses no nome da função?',
                    options: [
                        { letter: 'A', text: 'Porque queremos passar a referência da função para o botão executar SÓ quando o usuário clicar (com parênteses ela rodaria na hora de abrir o app).', isCorrect: true, explanation: 'Perfeito! Passamos apenas o nome da função para o evento on_click acioná-la no momento do clique!' },
                        { letter: 'B', text: 'Porque funções no Python nunca usam parênteses.', isCorrect: false, explanation: 'Ao definir ou chamar funções normalmente usamos parênteses; só omitimos ao passar como callback no on_click.' },
                        { letter: 'C', text: 'Porque o botão não aceita funções criadas com def.', isCorrect: false, explanation: 'O on_click foi feito justamente para receber funções criadas com def!' },
                        { letter: 'D', text: 'Porque com parênteses o botão muda de cor para vermelho.', isCorrect: false, explanation: 'Colocar parênteses executa a função imediatamente ao iniciar em vez de esperar o clique.' }
                    ]
                },
                {
                    id: 'q6_7',
                    topic: 'Aula 05 • Layouts Column e Row',
                    question: 'Qual é a diferença entre organizar componentes dentro de ft.Column([...]) e ft.Row([...])?',
                    options: [
                        { letter: 'A', text: 'ft.Column empilha os itens na VERTICAL (um embaixo do outro) e ft.Row alinha na HORIZONTAL (lado a lado).', isCorrect: true, explanation: 'Isso mesmo! Column = Coluna (vertical) e Row = Linha (horizontal, ótimo para colocar botões lado a lado).' },
                        { letter: 'B', text: 'ft.Column apaga os itens e ft.Row duplica os itens.', isCorrect: false, explanation: 'Ambos são containers de posicionamento visual na tela.' },
                        { letter: 'C', text: 'ft.Row só aceita números e ft.Column só aceita textos.', isCorrect: false, explanation: 'Ambos aceitam qualquer componente visual do Flet (botões, textos, ícones, cards).' },
                        { letter: 'D', text: 'Não há diferença visual entre os dois.', isCorrect: false, explanation: 'Eles organizam em eixos opostos: vertical vs horizontal.' }
                    ]
                },
                {
                    id: 'q6_8',
                    topic: 'Aula 05 • Temas e Cores',
                    question: 'Como ativamos o modo escuro ou mudamos a cor de fundo da janela no Flet?',
                    options: [
                        { letter: 'A', text: 'Usando page.theme_mode = ft.ThemeMode.DARK ou definindo page.bgcolor = "#0f172a".', isCorrect: true, explanation: 'Exato! Podemos configurar tanto o tema claro/escuro quanto o código hexadecimal em page.bgcolor!' },
                        { letter: 'B', text: 'Desligando o monitor do computador.', isCorrect: false, explanation: 'Controlamos o tema diretamente pelo código através das propriedades da page.' },
                        { letter: 'C', text: 'Usando int("escuro") no início do código.', isCorrect: false, explanation: 'int("escuro") causaria um ValueError!' },
                        { letter: 'D', text: 'Não é possível mudar cores em aplicativos Flet.', isCorrect: false, explanation: 'O Flet permite personalizar cores de fundo, textos, botões e ícones livremente.' }
                    ]
                },
                {
                    id: 'q6_9',
                    topic: 'Aula 05 • Navegação Multi-Telas',
                    question: 'Qual componente do Flet cria aquela barra inferior de aplicativo de celular com abas (ex: Início, Cadastro, Sobre)?',
                    options: [
                        { letter: 'A', text: 'page.navigation_bar = ft.NavigationBar(...)', isCorrect: true, explanation: 'Perfeito! O ft.NavigationBar com ft.NavigationBarDestination cria a navegação clássica de apps mobile!' },
                        { letter: 'B', text: 'ft.TextField()', isCorrect: false, explanation: 'TextField é apenas um campo de digitação de texto.' },
                        { letter: 'C', text: 'ft.ElevatedButton()', isCorrect: false, explanation: 'ElevatedButton cria um botão único, não a barra de navegação inferior.' },
                        { letter: 'D', text: 'range(1, 3)', isCorrect: false, explanation: 'range() gera sequências numéricas para laços for.' }
                    ]
                },
                {
                    id: 'q6_10',
                    topic: 'Aula 05 • Blindagem no Flet',
                    question: 'O que acontece se o usuário clicar em "Calcular" deixando um ft.TextField numérico em branco e tentarmos fazer float(campo.value) sem proteção?',
                    options: [
                        { letter: 'A', text: 'Dá ValueError! Por isso devemos verificar se o campo está vazio ou usar try/except para mostrar um aviso amigável na tela.', isCorrect: true, explanation: 'Excelente! Um app profissional nunca trava: validamos o campo ou usamos try/except e avisamos o usuário na interface!' },
                        { letter: 'B', text: 'O Python adivinha automaticamente o número que o usuário pensou.', isCorrect: false, explanation: 'String vazia "" não pode ser convertida por float() ou int(), gerando ValueError.' },
                        { letter: 'C', text: 'O computador formata o disco rígido.', isCorrect: false, explanation: 'Ele apenas dispara uma exceção ValueError no console do app.' },
                        { letter: 'D', text: 'O Flet fecha o navegador e abre o bloco de notas.', isCorrect: false, explanation: 'Sem tratamento, a função falha com ValueError e a tela para de atualizar.' }
                    ]
                }
            ]
        },

        aula07: {
            id: 'quiz_aula07',
            lessonNumber: 7,
            title: 'Quiz da Grande Final — Revisão Geral da Trilha Python + Flet + IA',
            subtitle: '10 questões integrando todos os pilares da nossa jornada antes da Feira de Soluções!',
            questions: [
                {
                    id: 'q7_1',
                    topic: 'Revisão Geral • Engenharia de Prompt e IA',
                    question: 'Ao usar uma IA generativa como co-piloto no projeto (com o arquivo GEMINI.md), qual é a postura correta do programador?',
                    options: [
                        { letter: 'A', text: 'Dar contexto claro, pedir explicações passo a passo, auditar e testar cada linha antes de colocar no app.', isCorrect: true, explanation: 'Perfeito! Você é o piloto e arquiteto do software; a IA é sua copiloto!' },
                        { letter: 'B', text: 'Copiar qualquer código sem ler e sem saber explicar na apresentação.', isCorrect: false, explanation: 'Na banca e na vida real, precisamos compreender e validar tudo que está no nosso código.' },
                        { letter: 'C', text: 'Pedir apenas "faz tudo aí" sem dizer qual é o problema nem as regras.', isCorrect: false, explanation: 'Prompts vagos geram códigos genéricos ou cheios de bugs.' },
                        { letter: 'D', text: 'Desativar o try/except porque a IA nunca comete erros.', isCorrect: false, explanation: 'Toda aplicação real precisa de validação e testes humanos.' }
                    ]
                },
                {
                    id: 'q7_2',
                    topic: 'Revisão Geral • Variáveis e Condicionais',
                    question: 'Qual estrutura decide qual caminho o programa deve seguir com base em uma condição (ex: verificar se o consumo de água passou da meta)?',
                    options: [
                        { letter: 'A', text: 'if / elif / else', isCorrect: true, explanation: 'Exato! As condicionais permitem ao app tomar decisões inteligentes!' },
                        { letter: 'B', text: 'import flet', isCorrect: false, explanation: 'import serve para carregar bibliotecas no código.' },
                        { letter: 'C', text: '.append()', isCorrect: false, explanation: '.append() adiciona elementos ao final de uma lista.' },
                        { letter: 'D', text: 'page.title', isCorrect: false, explanation: 'page.title define o título da janela no Flet.' }
                    ]
                },
                {
                    id: 'q7_3',
                    topic: 'Revisão Geral • Blindagem com try/except',
                    question: 'Durante a demonstração ao vivo na Feira de Soluções, um visitante digita "abc" em um campo de preço do seu app. O que garante que seu app não vai travar?',
                    options: [
                        { letter: 'A', text: 'Ter envolvido a conversão int()/float() em um bloco try / except ValueError mostrando um aviso visual na tela.', isCorrect: true, explanation: 'Isso mesmo! O try/except blinda o seu app durante a auditoria ao vivo!' },
                        { letter: 'B', text: 'Aumentar o tamanho da fonte do título.', isCorrect: false, explanation: 'Estética não impede exceções de conversão de tipo.' },
                        { letter: 'C', text: 'Usar apenas variáveis globais sem validação.', isCorrect: false, explanation: 'Sem validação ou try/except, converter "abc" para número sempre gera ValueError.' },
                        { letter: 'D', text: 'Trocar a cor de fundo para azul.', isCorrect: false, explanation: 'A cor de fundo não trata erros de entrada de dados.' }
                    ]
                },
                {
                    id: 'q7_4',
                    topic: 'Revisão Geral • Laços de Repetição',
                    question: 'Para percorrer todos os itens cadastrados em uma lista e criar um card visual para cada um na tela do Flet, qual laço usamos?',
                    options: [
                        { letter: 'A', text: 'for item in lista:', isCorrect: true, explanation: 'Perfeito! O laço for percorre cada elemento da lista de forma limpa e automática!' },
                        { letter: 'B', text: 'except ValueError:', isCorrect: false, explanation: 'except captura erros, não percorre listas.' },
                        { letter: 'C', text: 'def item():', isCorrect: false, explanation: 'def define uma função.' },
                        { letter: 'D', text: 'break', isCorrect: false, explanation: 'break interrompe um laço.' }
                    ]
                },
                {
                    id: 'q7_5',
                    topic: 'Revisão Geral • Listas + Dicionários',
                    question: 'Qual combinação de estruturas é perfeita para guardar vários registros completos na memória do app (ex: vários livros, cada um com título, autor e status)?',
                    options: [
                        { letter: 'A', text: 'Uma Lista de Dicionários: [ {"titulo": "...", "autor": "..."}, ... ]', isCorrect: true, explanation: 'Combinação campeã! A lista guarda a coleção inteira e cada dicionário organiza os campos com chaves claras!' },
                        { letter: 'B', text: 'Trinta variáveis soltas chamadas livro1, livro2, livro3...', isCorrect: false, explanation: 'Variáveis soltas não escalam e são difíceis de percorrer com for.' },
                        { letter: 'C', text: 'Apenas um número float.', isCorrect: false, explanation: 'Um float guarda apenas um único número decimal.' },
                        { letter: 'D', text: 'Um comando break solto.', isCorrect: false, explanation: 'break é um controle de loop, não uma estrutura de dados.' }
                    ]
                },
                {
                    id: 'q7_6',
                    topic: 'Revisão Geral • Funções (def)',
                    question: 'Por que dividimos o código do nosso aplicativo em funções (def) em vez de misturar tudo?',
                    options: [
                        { letter: 'A', text: 'Para organizar o código em blocos reutilizáveis, fáceis de ler, testar e conectar aos botões (on_click).', isCorrect: true, explanation: 'Exato! Modularizar com def deixa o projeto limpo e permite conectar ações aos eventos do Flet.' },
                        { letter: 'B', text: 'Porque o Python proíbe códigos com mais de 10 linhas fora de funções.', isCorrect: false, explanation: 'O Python não impõe esse limite, mas organizar em funções é uma prática essencial de engenharia.' },
                        { letter: 'C', text: 'Para deixar o código impossível de ser lido por outras pessoas.', isCorrect: false, explanation: 'Pelo contrário: boas funções deixam o código muito mais legível!' },
                        { letter: 'D', text: 'Para apagar os dados da lista toda vez que o app abre.', isCorrect: false, explanation: 'Funções executam exatamente a lógica que programarmos nelas.' }
                    ]
                },
                {
                    id: 'q7_7',
                    topic: 'Revisão Geral • Flet UI',
                    question: 'Qual dupla de comandos usamos no Flet para adicionar um componente na janela inicial e para atualizar a janela após mudanças?',
                    options: [
                        { letter: 'A', text: 'page.add(...) e page.update()', isCorrect: true, explanation: 'Certíssimo! page.add() coloca os controles na página e page.update() atualiza a tela!' },
                        { letter: 'B', text: 'page.append(...) e page.print()', isCorrect: false, explanation: 'Em Flet usamos page.add() e page.update().' },
                        { letter: 'C', text: 'input() e print()', isCorrect: false, explanation: 'Esses são comandos de terminal em modo texto.' },
                        { letter: 'D', text: 'ft.start() e ft.stop()', isCorrect: false, explanation: 'Os métodos corretos do objeto page são .add() e .update().' }
                    ]
                },
                {
                    id: 'q7_8',
                    topic: 'Revisão Geral • Estrutura do Pitch',
                    question: 'Em um Pitch de 3 a 5 minutos na Feira de Soluções, qual é a sequência mais clara para encantar a banca?',
                    options: [
                        { letter: 'A', text: '1º Problema Real (Dor/ODS) → 2º Solução (Demonstração ao vivo do App Flet) → 3º Arquitetura do Código (Bastidores Python).', isCorrect: true, explanation: 'Perfeito! Começar pelo problema engaja a plateia, a demo prova que funciona e a arquitetura mostra seu domínio técnico!' },
                        { letter: 'B', text: 'Ler 200 linhas de código em voz alta sem mostrar o aplicativo funcionando.', isCorrect: false, explanation: 'Mostrar o problema e a demonstração visual primeiro torna a apresentação muito mais clara.' },
                        { letter: 'C', text: 'Falar apenas sobre a cor do botão e encerrar em 10 segundos.', isCorrect: false, explanation: 'O pitch deve apresentar o problema, a solução prática e a lógica construída pela equipe.' },
                        { letter: 'D', text: 'Esconder o código caso alguém faça uma pergunta técnica.', isCorrect: false, explanation: 'Na Auditoria Viva, mostrar e explicar suas listas, funções e try/except valoriza o trabalho da dupla!' }
                    ]
                },
                {
                    id: 'q7_9',
                    topic: 'Revisão Geral • ODS e Impacto Real',
                    question: 'O que significa conectar o seu aplicativo a um ODS (Objetivo de Desenvolvimento Sustentável) ou problema da escola/comunidade?',
                    options: [
                        { letter: 'A', text: 'Usar a programação como ferramenta para resolver uma necessidade real das pessoas ao nosso redor.', isCorrect: true, explanation: 'Exato! Programar ganha propósito quando transforma e melhora a vida da nossa escola ou comunidade!' },
                        { letter: 'B', text: 'Criar um programa que ninguém nunca vai conseguir usar.', isCorrect: false, explanation: 'O objetivo do projeto é criar soluções úteis, acessíveis e funcionais.' },
                        { letter: 'C', text: 'Decorar siglas sem relação com o aplicativo.', isCorrect: false, explanation: 'O ODS escolhido reflete o impacto prático do problema que sua dupla decidiu resolver.' },
                        { letter: 'D', text: 'Proibir o uso de listas e dicionários no projeto.', isCorrect: false, explanation: 'Listas e dicionários são a base técnica para armazenar os dados da solução.' }
                    ]
                },
                {
                    id: 'q7_10',
                    topic: 'Revisão Geral • Mentalidade Dev',
                    question: 'Ao olhar para trás desde a Aula 01 até hoje, qual é a maior conquista de quem domina a lógica de programação com Python?',
                    options: [
                        { letter: 'A', text: 'Deixar de ser apenas consumidor passivo de tecnologia para se tornar CRIADOR de soluções digitais com pensamento crítico!', isCorrect: true, explanation: 'Parabéns pela jornada! Vocês agora sabem transformar ideias em software real com Python, Flet e IA responsável!' },
                        { letter: 'B', text: 'Nunca mais precisar testar nenhum código.', isCorrect: false, explanation: 'Testar e refinar faz parte do trabalho até dos programadores mais experientes do mundo.' },
                        { letter: 'C', text: 'Decorar todos os dicionários do mundo sem entender a lógica.', isCorrect: false, explanation: 'Programar não é decorar, e sim saber raciocinar, estruturar e resolver problemas!' },
                        { letter: 'D', text: 'Usar apenas um único comando para tudo.', isCorrect: false, explanation: 'Nossa caixa de ferramentas agora é completa: variáveis, if/else, try/except, loops, listas, funções, dicts e Flet!' }
                    ]
                }
            ]
        }
    };

    const HOMEWORKS_BY_LESSON = {
        aula02: {
            id: 'hw_aula02',
            lessonNumber: 2,
            lessonTag: 'AULA 02 • VARIÁVEIS, TIPOS E CONDICIONAIS',
            title: 'Tarefa de Casa — Aula 02: Tomada de Decisão (if / elif / else)',
            subtitle: '5 questões rápidas de múltipla escolha + 1 desafio prático simples para testar no PC ou Celular',
            dueInfo: 'Entregar antes da Aula 03',
            questions: [
                {
                    id: 'hw2_q1',
                    question: '1. Qual das opções abaixo pede um número inteiro ao usuário da maneira CORRETA para fazermos contas depois?',
                    code: '# Queremos guardar a quantidade de vidas como número inteiro',
                    options: [
                        {
                            letter: 'A',
                            text: 'vidas = input("Quantas vidas? ")',
                            isCorrect: false,
                            explanation: 'Sem o int(), o input() guarda o valor como texto (str), o que impede contas matemáticas corretas.'
                        },
                        {
                            letter: 'B',
                            text: 'vidas = int(input("Quantas vidas? "))',
                            isCorrect: true,
                            explanation: 'Correto! O int() converte o texto digitado no input() para um número inteiro de verdade.'
                        },
                        {
                            letter: 'C',
                            text: 'vidas = input(int("Quantas vidas? "))',
                            isCorrect: false,
                            explanation: 'Não podemos colocar o int() por fora do texto da pergunta; o int() deve envolver toda a chamada do input().'
                        },
                        {
                            letter: 'D',
                            text: 'vidas = int("Quantas vidas? ")',
                            isCorrect: false,
                            explanation: 'Faltou chamar a função input() para ler o teclado; tentar converter a frase em número gerará ValueError.'
                        }
                    ]
                },
                {
                    id: 'hw2_q2',
                    question: '2. O que a letra "f" antes das aspas faz no comando print(f"Olá, {nome}!")?',
                    options: [
                        {
                            letter: 'A',
                            text: 'Substitui {nome} pelo valor que está guardado dentro da variável nome.',
                            isCorrect: true,
                            explanation: 'Exatamente! Isso se chama f-string: permite misturar texto normal com valores de variáveis usando chaves {}.'
                        },
                        {
                            letter: 'B',
                            text: 'Serve para indicar que o texto deve ser exibido em letras maiúsculas no terminal.',
                            isCorrect: false,
                            explanation: 'O "f" vem de "formatted string" (texto formatado), permitindo injetar variáveis com chaves {}.'
                        },
                        {
                            letter: 'C',
                            text: 'Converte todo o conteúdo da mensagem para número decimal (float).',
                            isCorrect: false,
                            explanation: 'Quem transforma em decimal é a função float(), e não a letra "f" antes das aspas do print.'
                        },
                        {
                            letter: 'D',
                            text: 'É opcional; sem a letra "f" o Python colocaria o nome da pessoa da mesma maneira.',
                            isCorrect: false,
                            explanation: 'Sem o "f", o Python imprime literalmente o texto "{nome}" com as chaves na tela em vez do nome da pessoa!'
                        }
                    ]
                },
                {
                    id: 'hw2_q3',
                    question: '3. Observe o código abaixo. Se a variável temperatura tiver o valor 15, o que será exibido?',
                    code: 'temperatura = 15\nif temperatura >= 25:\n    print("🏖️ Dia de calor!")\nelif temperatura >= 18:\n    print("🌤️ Clima agradável!")\nelse:\n    print("🧥 Pegue um casaco!")',
                    options: [
                        {
                            letter: 'A',
                            text: '🏖️ Dia de calor!',
                            isCorrect: false,
                            explanation: '15 não é maior ou igual a 25, então o primeiro if dá Falso.'
                        },
                        {
                            letter: 'B',
                            text: '🌤️ Clima agradável!',
                            isCorrect: false,
                            explanation: '15 também é menor que 18, então o elif temperatura >= 18 também dá Falso.'
                        },
                        {
                            letter: 'C',
                            text: '🧥 Pegue um casaco!',
                            isCorrect: true,
                            explanation: 'Perfeito! Como 15 é menor que 25 e menor que 18, tanto o if quanto o elif são falsos, caindo direto no else!'
                        },
                        {
                            letter: 'D',
                            text: 'O programa encerra no primeiro if e não mostra mensagem nenhuma.',
                            isCorrect: false,
                            explanation: 'Quando todas as condições anteriores falham, o Python sempre executa o bloco alternativo else.'
                        }
                    ]
                },
                {
                    id: 'hw2_q4',
                    question: '4. Qual operador usamos em Python para verificar se dois valores são DIFERENTES?',
                    options: [
                        {
                            letter: 'A',
                            text: '==',
                            isCorrect: false,
                            explanation: 'O operador == verifica se dois valores são IGUAIS.'
                        },
                        {
                            letter: 'B',
                            text: '!=',
                            isCorrect: true,
                            explanation: 'Isso mesmo! O ponto de exclamação seguido de igual (!=) significa "diferente de" em Python.'
                        },
                        {
                            letter: 'C',
                            text: '<>',
                            isCorrect: false,
                            explanation: 'O símbolo <> era usado em linguagens antigas e planilhas, mas no Python moderno o correto é !=.'
                        },
                        {
                            letter: 'D',
                            text: 'not=',
                            isCorrect: false,
                            explanation: 'Em Python não existe "not="; para expressar diferença usamos o sinal de exclamação com igual (!=).'
                        }
                    ]
                },
                {
                    id: 'hw2_q5',
                    question: '5. Verdadeiro ou Falso? "Quando usamos o operador OR (ou) em um if, basta que PELO MENOS UMA das condições seja verdadeira para o bloco rodar."',
                    code: 'if cupom == "VIP" or compra >= 100:\n    print("🎁 Ganhou frete grátis!")',
                    options: [
                        {
                            letter: 'A',
                            text: 'Verdadeiro! Com o "or", se tiver cupom VIP OU se a compra for >= 100 (qualquer um dos dois), ganha frete grátis.',
                            isCorrect: true,
                            explanation: 'Exatamente! O "or" precisa de apenas uma condição verdadeira para liberar o bloco do if.'
                        },
                        {
                            letter: 'B',
                            text: 'Falso! O operador "or" exige que as duas condições sejam verdadeiras ao mesmo tempo.',
                            isCorrect: false,
                            explanation: 'Quem exige as duas condições verdadeiras ao mesmo tempo é o operador "and", e não o "or".'
                        },
                        {
                            letter: 'C',
                            text: 'Falso! O operador "or" só pode comparar números inteiros, não funcionando com textos.',
                            isCorrect: false,
                            explanation: 'O operador "or" funciona com qualquer tipo de dado ou condição válida em Python.'
                        },
                        {
                            letter: 'D',
                            text: 'Falso! Se as duas condições forem verdadeiras simultaneamente, o "or" dá erro.',
                            isCorrect: false,
                            explanation: 'No Python o "or" aceita que uma ou ambas as condições sejam verdadeiras sem gerar erro.'
                        }
                    ]
                }
            ],
            practicalTask: {
                title: '💻 Desafio Prático da Aula 02: Mercadinho Gamer ou Mini-RPG',
                description: 'Escolha UMA das duas ideias simples abaixo, teste o seu código no computador (VS Code) ou no celular (Pydroid 3) e depois cole o código pronto no espaço abaixo!',
                options: [
                    {
                        badge: '🛒 Opção 1: Caixa do Mercadinho com Desconto',
                        text: 'Peça o valor de uma compra com float(input()). Use if / elif / else: se a compra for >= 100, mostre "🎉 Parabéns! Você ganhou R$ 15 de desconto!"; elif for >= 50, mostre "✨ Você ganhou um brinde!"; else, mostre "🛍️ Obrigado pela compra!".'
                    },
                    {
                        badge: '⚔️ Opção 2: Escolha de Classe no Mini-RPG',
                        text: 'Peça ao jogador para escolher um número (1 - Guerreiro, 2 - Mago, 3 - Arqueiro) usando input(). Use if / elif / else para mostrar uma mensagem especial com os poderes da classe escolhida!'
                    }
                ],
                starterHint: '# Exemplo de começo (você pode criar do seu jeito!):\nvalor = float(input("Digite o valor da compra: R$ "))\n\nif valor >= 100:\n    print("🎉 Você ganhou desconto VIP!")\nelif valor >= 50:\n    print("✨ Você ganhou um brinde!")\nelse:\n    print("🛍️ Obrigado pela preferência!")'
            }
        },

        aula03: {
            id: 'hw_aula03',
            lessonNumber: 3,
            lessonTag: 'AULA 03 • TRY/EXCEPT, LAÇOS (WHILE / FOR) E LISTAS',
            title: 'Tarefa de Casa — Aula 03: Blindagem de Erros, Repetição e Listas',
            subtitle: '5 questões rápidas sobre try/except, while/for e listas + 1 desafio prático à sua escolha',
            dueInfo: 'Entregar antes da Aula 04 (18/11)',
            questions: [
                {
                    id: 'hw3_q1',
                    question: '1. Para que serve a estrutura try / except no Python?',
                    code: 'try:\n    numero = int(input("Digite um número: "))\nexcept ValueError:\n    print("⚠️ Digite apenas números!")',
                    options: [
                        {
                            letter: 'A',
                            text: 'Para impedir que o programa trave (quebre) caso aconteça um erro, mostrando uma mensagem amigável no lugar.',
                            isCorrect: true,
                            explanation: 'Perfeito! O try tenta executar o código perigoso e, se der erro (como digitar letras no int), o except captura o erro sem fechar o programa!'
                        },
                        {
                            letter: 'B',
                            text: 'Para repetir um bloco de código várias vezes seguidas até o usuário acertar.',
                            isCorrect: false,
                            explanation: 'Quem repete código são os laços while e for; o try/except serve para tratamento e proteção contra erros.'
                        },
                        {
                            letter: 'C',
                            text: 'Para forçar o Python a aceitar letras onde deveriam ser digitados números.',
                            isCorrect: false,
                            explanation: 'O try/except não altera a regra dos tipos; ele apenas executa um código alternativo quando uma falha ocorre.'
                        },
                        {
                            letter: 'D',
                            text: 'Para acelerar a velocidade de execução do programa no computador.',
                            isCorrect: false,
                            explanation: 'O try/except é uma proteção de segurança do código e não altera o desempenho do processador.'
                        }
                    ]
                },
                {
                    id: 'hw3_q2',
                    question: '2. Quando devemos usar o laço WHILE e qual comando usamos se quisermos PARAR o laço imediatamente?',
                    code: 'while True:\n    senha = input("Digite a senha: ")\n    if senha == "1234":\n        break',
                    options: [
                        {
                            letter: 'A',
                            text: 'O while repete ENQUANTO uma condição for verdadeira, e o comando break encerra o loop na mesma hora.',
                            isCorrect: true,
                            explanation: 'Mandou muito bem! O while mantém a repetição ativa e o break funciona como freio imediato quando o objetivo é atingido.'
                        },
                        {
                            letter: 'B',
                            text: 'O while testa a condição apenas uma única vez, e o comando stop para o programa.',
                            isCorrect: false,
                            explanation: 'Quem testa uma única vez é o if, e a palavra reservada do Python para interromper loops é break (não stop).'
                        },
                        {
                            letter: 'C',
                            text: 'O while serve apenas para apagar listas da memória.',
                            isCorrect: false,
                            explanation: 'O while é uma estrutura de repetição baseada em condição lógica.'
                        },
                        {
                            letter: 'D',
                            text: 'O comando break faz o loop repetir o dobro de vezes.',
                            isCorrect: false,
                            explanation: 'O comando break interrompe o laço imediatamente em vez de multiplicá-lo.'
                        }
                    ]
                },
                {
                    id: 'hw3_q3',
                    question: '3. Quantas vezes a frase "⚡ Treinando Python!" será impressa pelo laço for abaixo?',
                    code: 'for i in range(1, 4):\n    print("⚡ Treinando Python!")',
                    options: [
                        {
                            letter: 'A',
                            text: '1 vez',
                            isCorrect: false,
                            explanation: 'O range(1, 4) gera os números 1, 2 e 3, então ele repete mais de uma vez.'
                        },
                        {
                            letter: 'B',
                            text: '3 vezes (para i = 1, 2 e 3)',
                            isCorrect: true,
                            explanation: 'Certíssimo! Em Python, o range(1, 4) começa no 1 e para ANTES do 4 (ou seja: 1, 2 e 3 = 3 repetições).'
                        },
                        {
                            letter: 'C',
                            text: '4 vezes (para i = 1, 2, 3 e 4)',
                            isCorrect: false,
                            explanation: 'Cuidado com a pegadinha clássica: o último número do range(início, fim) nunca é incluído! Ele para no 3.'
                        },
                        {
                            letter: 'D',
                            text: 'Infinitas vezes (loop infinito)',
                            isCorrect: false,
                            explanation: 'O for com range() tem começo e fim bem definidos, então ele para sozinho após as 3 repetições.'
                        }
                    ]
                },
                {
                    id: 'hw3_q4',
                    question: '4. Observe a lista abaixo. Qual será a saída do comando print(frutas[0]) e qual método adiciona "Uva" no final da lista?',
                    code: 'frutas = ["Maçã", "Banana", "Morango"]',
                    options: [
                        {
                            letter: 'A',
                            text: 'Mostra "Maçã" (porque os índices começam no 0) e usamos frutas.append("Uva") para adicionar no final.',
                            isCorrect: true,
                            explanation: 'Perfeito! Toda lista em Python começa no índice 0 e o método .append() adiciona novos itens ao final.'
                        },
                        {
                            letter: 'B',
                            text: 'Mostra "Banana" e usamos frutas.add("Uva") para adicionar no final.',
                            isCorrect: false,
                            explanation: '"Banana" está no índice 1, e listas em Python usam .append() em vez de .add().'
                        },
                        {
                            letter: 'C',
                            text: 'Dá erro porque não existe índice 0 em Python.',
                            isCorrect: false,
                            explanation: 'Em Python, o primeiro elemento de qualquer lista fica sempre na posição 0.'
                        },
                        {
                            letter: 'D',
                            text: 'Mostra "Morango" e usamos frutas.pop("Uva") para adicionar.',
                            isCorrect: false,
                            explanation: '"Morango" está no índice 2, e o método .pop() serve para remover por posição, não para adicionar.'
                        }
                    ]
                },
                {
                    id: 'hw3_q5',
                    question: '5. Qual é a diferença entre usar lista.remove("Pizza") e lista.pop(1)?',
                    options: [
                        {
                            letter: 'A',
                            text: 'O .remove("Pizza") apaga buscando pelo VALOR/NOME do item, enquanto o .pop(1) apaga quem estiver na POSIÇÃO de índice 1.',
                            isCorrect: true,
                            explanation: 'Exato! Usamos .remove() quando sabemos o nome do item e .pop() quando sabemos o número da gaveta (índice)!'
                        },
                        {
                            letter: 'B',
                            text: 'O .remove() adiciona um item no início e o .pop() conta o tamanho da lista.',
                            isCorrect: false,
                            explanation: 'Ambos removem itens da lista; quem conta o tamanho da lista é a função len().'
                        },
                        {
                            letter: 'C',
                            text: 'Não há diferença: ambos exigem um número inteiro dentro dos parênteses.',
                            isCorrect: false,
                            explanation: 'O .remove() recebe o valor (ex: texto "Pizza"), enquanto o .pop() recebe o índice numérico.'
                        },
                        {
                            letter: 'D',
                            text: 'O .pop(1) multiplica todos os itens da lista por 1.',
                            isCorrect: false,
                            explanation: 'O .pop(1) remove e devolve o elemento que estava no índice 1 da lista.'
                        }
                    ]
                }
            ],
            practicalTask: {
                title: '💻 Desafio Prático da Aula 03: Listas, Laços e Blindagem',
                description: 'Escolha UMA das opções abaixo, teste no VS Code (PC) ou Pydroid 3 (Celular) e cole seu código abaixo!',
                options: [
                    {
                        badge: '🛒 Opção 1: Lista de Compras / Playlist dos Sonhos (Listas + for)',
                        text: 'Crie uma lista vazia. Use um laço for com range(5) (ou while) para pedir 5 itens/músicas com input() e guardar com .append(). Depois mostre a lista numerada com for, o total com len(), e pergunte se o usuário quer remover algum item usando if item in lista e .remove()!'
                    },
                    {
                        badge: '🎯 Opção 2: Jogo da Adivinhação ou Cofre Blindado (while/for + try/except)',
                        text: 'Guarde um número secreto (ex: 7) ou saldo inicial (ex: 100). Use um laço for ou while para dar tentativas ao usuário, protegendo o int(input()) com try/except ValueError e usando if/else (e break) para verificar o resultado!'
                    }
                ],
                starterHint: '# Modelo Opção 1 (Lista / Playlist com for + if/else):\nplaylist = []\n\nfor i in range(3):\n    musica = input(f"Digite a {i+1}ª música: ")\n    playlist.append(musica)\n\nprint(f"\\n🎵 Sua playlist tem {len(playlist)} músicas:")\nfor pos, m in enumerate(playlist):\n    print(f"{pos + 1}. {m}")\n\nremover = input("\\nDeseja remover alguma música? Digite o nome (ou Enter p/ pular): ")\nif remover in playlist:\n    playlist.remove(remover)\n    print("✅ Música removida! Lista final:", playlist)\nelse:\n    print("👌 Playlist mantida:", playlist)'
            }
        },

        aula04: {
            id: 'hw_aula04',
            lessonNumber: 4,
            lessonTag: 'AULA 04 • FUNÇÕES (DEF / RETURN) E DICIONÁRIOS (DICT)',
            title: 'Tarefa de Casa — Aula 04: Modularização com Funções e Dicionários',
            subtitle: '5 questões rápidas sobre def, parâmetros, return e dicionários + 1 desafio prático',
            dueInfo: 'Entregar antes da Aula 05 (25/11)',
            questions: [
                {
                    id: 'hw4_q1',
                    question: '1. Qual é a forma correta de definir uma função em Python que recebe um nome e devolve uma frase formatada?',
                    code: 'def dar_boas_vindas(nome):\n    return f"Bem-vindo(a), {nome}!"',
                    options: [
                        {
                            letter: 'A',
                            text: 'Usamos a palavra-chave def seguida do nome da função, parâmetros entre parênteses, dois-pontos (:) e o bloco recuado com return.',
                            isCorrect: true,
                            explanation: 'Perfeito! Essa é a anatomia exata de uma função com parâmetro e retorno em Python.'
                        },
                        {
                            letter: 'B',
                            text: 'Usamos a palavra function sem dois-pontos e sem indentação.',
                            isCorrect: false,
                            explanation: 'Em Python usamos def, dois-pontos (:) no final do cabeçalho e indentação obrigatória.'
                        },
                        {
                            letter: 'C',
                            text: 'Não precisamos chamar dar_boas_vindas("Ana") depois, pois o def já executa sozinho.',
                            isCorrect: false,
                            explanation: 'O def apenas define a função; para ela rodar é obrigatório chamá-la pelo nome com parênteses.'
                        },
                        {
                            letter: 'D',
                            text: 'O comando return apaga a variável nome do computador.',
                            isCorrect: false,
                            explanation: 'O return entrega o resultado calculado pela função para quem a chamou.'
                        }
                    ]
                },
                {
                    id: 'hw4_q2',
                    question: '2. O que será guardado na variável resultado após executar o código abaixo?',
                    code: 'def dobrar(numero):\n    return numero * 2\n\nresultado = dobrar(6) + 3',
                    options: [
                        {
                            letter: 'A',
                            text: '15 (porque dobrar(6) devolve 12 via return, e 12 + 3 = 15).',
                            isCorrect: true,
                            explanation: 'Exato! Graças ao return, o valor 12 substitui a chamada dobrar(6) e pode ser somado com 3!'
                        },
                        {
                            letter: 'B',
                            text: '6',
                            isCorrect: false,
                            explanation: 'A função multiplica 6 por 2 (dando 12) e depois somamos 3, resultando em 15.'
                        },
                        {
                            letter: 'C',
                            text: 'Dá erro porque não podemos somar o retorno de uma função com outro número.',
                            isCorrect: false,
                            explanation: 'Quando a função usa return para devolver um número, podemos usá-lo em qualquer conta matemática!'
                        },
                        {
                            letter: 'D',
                            text: 'None',
                            isCorrect: false,
                            explanation: 'Ela só devolveria None se tivéssemos esquecido o comando return.'
                        }
                    ]
                },
                {
                    id: 'hw4_q3',
                    question: '3. Observe o dicionário abaixo. Como acessamos o preço do "Hambúrguer" e como adicionamos "Suco" custando 7.0?',
                    code: 'cardapio = {"Pizza": 35.0, "Hambúrguer": 22.0}',
                    options: [
                        {
                            letter: 'A',
                            text: 'Acessamos com cardapio["Hambúrguer"] e adicionamos com cardapio["Suco"] = 7.0',
                            isCorrect: true,
                            explanation: 'Certíssimo! Em dicionários usamos a chave entre colchetes tanto para ler quanto para criar/atualizar valores!'
                        },
                        {
                            letter: 'B',
                            text: 'Acessamos com cardapio[1] e adicionamos com cardapio.append("Suco", 7.0)',
                            isCorrect: false,
                            explanation: 'Dicionários usam chaves (etiquetas) em vez de índices numéricos e não possuem o método .append().'
                        },
                        {
                            letter: 'C',
                            text: 'Acessamos com cardapio(22.0) e adicionamos com cardapio + "Suco"',
                            isCorrect: false,
                            explanation: 'Em dicionários a consulta é sempre feita pela chave entre colchetes.'
                        },
                        {
                            letter: 'D',
                            text: 'Não é possível adicionar novos itens em um dicionário depois que ele é criado.',
                            isCorrect: false,
                            explanation: 'Dicionários são mutáveis: basta atribuir dicionario["nova_chave"] = valor.'
                        }
                    ]
                },
                {
                    id: 'hw4_q4',
                    question: '4. O que acontece se tentarmos acessar produto["desconto"] quando a chave "desconto" NÃO existe no dicionário, e como evitamos esse erro?',
                    options: [
                        {
                            letter: 'A',
                            text: 'Acontece um KeyError! Podemos evitar usando produto.get("desconto", 0).',
                            isCorrect: true,
                            explanation: 'Mandou muito bem! O KeyError ocorre quando a chave não existe, e o método .get() retorna um valor padrão com segurança.'
                        },
                        {
                            letter: 'B',
                            text: 'Acontece um ZeroDivisionError! Evitamos usando range().',
                            isCorrect: false,
                            explanation: 'Chave inexistente em dicionário gera KeyError, e a solução segura é .get().'
                        },
                        {
                            letter: 'C',
                            text: 'O Python apaga o dicionário inteiro automaticamente.',
                            isCorrect: false,
                            explanation: 'O Python não apaga o dicionário; ele interrompe a execução com KeyError se não usarmos .get() ou try/except.'
                        },
                        {
                            letter: 'D',
                            text: 'Acontece um SyntaxError que só se resolve trocando chaves por colchetes.',
                            isCorrect: false,
                            explanation: 'A sintaxe está correta; o erro em tempo de execução é KeyError.'
                        }
                    ]
                },
                {
                    id: 'hw4_q5',
                    question: '5. Temos uma lista de dicionários: alunos = [{"nome": "Leo", "nota": 8}, {"nome": "Mia", "nota": 10}]. O que o laço for aluno in alunos: print(aluno["nome"]) imprime?',
                    options: [
                        {
                            letter: 'A',
                            text: 'Imprime "Leo" e depois "Mia".',
                            isCorrect: true,
                            explanation: 'Perfeito! A cada volta do for, a variável aluno representa um dicionário da lista, e aluno["nome"] pega o nome dele!'
                        },
                        {
                            letter: 'B',
                            text: 'Imprime 8 e depois 10.',
                            isCorrect: false,
                            explanation: 'Para imprimir as notas teríamos que escrever aluno["nota"]; com aluno["nome"] ele imprime os nomes.'
                        },
                        {
                            letter: 'C',
                            text: 'Dá erro porque listas não podem conter dicionários.',
                            isCorrect: false,
                            explanation: 'Listas de dicionários são uma das estruturas mais usadas em programação real!'
                        },
                        {
                            letter: 'D',
                            text: 'Imprime apenas a palavra "nome" duas vezes.',
                            isCorrect: false,
                            explanation: 'aluno["nome"] busca o valor guardado dentro da chave "nome" de cada dicionário.'
                        }
                    ]
                }
            ],
            practicalTask: {
                title: '💻 Desafio Prático da Aula 04: Funções + Dicionários em Ação!',
                description: 'Escolha UMA das opções abaixo, teste no VS Code (PC) ou Pydroid 3 (Celular) e cole seu código abaixo!',
                options: [
                    {
                        badge: '🧙‍♂️ Opção 1: Ficha de Personagem / Pet Virtual (Dicionário + Função)',
                        text: 'Crie um dicionário com pelo menos 4 chaves (ex: nome, classe, nivel, vida). Crie uma função def mostrar_ficha(heroi): que recebe o dicionário e imprime os dados formatados, e outra função que aumenta o nível ou vida do personagem!'
                    },
                    {
                        badge: '🍔 Opção 2: Cardápio / Catálogo Inteligente (Lista de Dicionários + def)',
                        text: 'Crie uma lista com 3 dicionários de produtos (cada um com "nome" e "preco"). Crie uma função def calcular_desconto(preco): que usa return para devolver o preço com 10% de desconto e mostre o cardápio com for!'
                    }
                ],
                starterHint: '# Modelo combinando Dicionário e Funções (def + return):\ndef calcular_xp_proximo_nivel(nivel_atual):\n    return nivel_atual * 100\n\ndef mostrar_ficha(personagem):\n    xp_meta = calcular_xp_proximo_nivel(personagem["nivel"])\n    print(f"=== 🛡️ FICHA DE {personagem[\'nome\'].upper()} ===")\n    print(f"Classe: {personagem[\'classe\']} | Nível: {personagem[\'nivel\']}")\n    print(f"XP necessário p/ subir: {xp_meta} pts")\n\nheroi = {\n    "nome": input("Nome do seu herói: "),\n    "classe": input("Classe (Mago/Guerreiro/Arqueiro): "),\n    "nivel": 1\n}\n\nmostrar_ficha(heroi)'
            }
        },

        aula05: {
            id: 'hw_aula05',
            lessonNumber: 5,
            lessonTag: 'AULA 05 • INTERFACES VISUAIS COM FLET (BÁSICO E AVANÇADO)',
            title: 'Tarefa de Casa — Aula 05: Criando Apps Visuais com Flet',
            subtitle: '5 questões rápidas sobre widgets, eventos, layouts e temas no Flet + 1 desafio prático de interface',
            dueInfo: 'Entregar antes da Aula 06 (02/12)',
            questions: [
                {
                    id: 'hw5_q1',
                    question: '1. Qual comando do Flet adiciona componentes visuais na janela inicial e qual comando atualiza a tela depois que alteramos um valor?',
                    options: [
                        {
                            letter: 'A',
                            text: 'page.add() para adicionar componentes na tela e page.update() para atualizar a janela.',
                            isCorrect: true,
                            explanation: 'Perfeito! page.add() monta os elementos na janela e page.update() redesenha a interface após qualquer mudança!'
                        },
                        {
                            letter: 'B',
                            text: 'page.append() para adicionar e page.refresh() para atualizar.',
                            isCorrect: false,
                            explanation: 'No Flet os métodos oficiais do objeto page são .add() e .update().'
                        },
                        {
                            letter: 'C',
                            text: 'print() para adicionar na janela e input() para atualizar.',
                            isCorrect: false,
                            explanation: 'print() e input() funcionam apenas no terminal de texto.'
                        },
                        {
                            letter: 'D',
                            text: 'ft.Column() para atualizar e ft.Row() para fechar.',
                            isCorrect: false,
                            explanation: 'Column e Row são containers de layout (vertical e horizontal).'
                        }
                    ]
                },
                {
                    id: 'hw5_q2',
                    question: '2. Se criamos caixa_nome = ft.TextField(label="Digite seu nome") e msg = ft.Text(""), como copiamos o nome digitado para dentro de msg quando o botão é clicado?',
                    code: 'def ao_clicar(e):\n    # Queremos colocar o texto digitado dentro do componente msg\n    ____________________________\n    page.update()',
                    options: [
                        {
                            letter: 'A',
                            text: 'msg.value = f"Olá, {caixa_nome.value}!"',
                            isCorrect: true,
                            explanation: 'Exato! Lemos o que o usuário digitou usando caixa_nome.value e alteramos o texto exibido mudando msg.value!'
                        },
                        {
                            letter: 'B',
                            text: 'msg = input(caixa_nome)',
                            isCorrect: false,
                            explanation: 'No Flet não usamos input(); acessamos a propriedade .value dos componentes.'
                        },
                        {
                            letter: 'C',
                            text: 'caixa_nome.label = msg',
                            isCorrect: false,
                            explanation: '.label é apenas o título do campo de texto; quem guarda o conteúdo é .value.'
                        },
                        {
                            letter: 'D',
                            text: 'print(caixa_nome)',
                            isCorrect: false,
                            explanation: 'print() escreve apenas no terminal e não altera o componente visual ft.Text na janela.'
                        }
                    ]
                },
                {
                    id: 'hw5_q3',
                    question: '3. Qual é a função de ft.Column([...]) e ft.Row([...]) na organização da tela do aplicativo?',
                    options: [
                        {
                            letter: 'A',
                            text: 'ft.Column organiza os controles na vertical (um abaixo do outro) e ft.Row organiza na horizontal (lado a lado).',
                            isCorrect: true,
                            explanation: 'Certíssimo! Combinar Column e Row permite montar qualquer tela profissional no Flet.'
                        },
                        {
                            letter: 'B',
                            text: 'ft.Column cria um banco de dados e ft.Row apaga arquivos.',
                            isCorrect: false,
                            explanation: 'Ambos são widgets de layout visual.'
                        },
                        {
                            letter: 'C',
                            text: 'ft.Column deixa o app no modo escuro e ft.Row muda a fonte.',
                            isCorrect: false,
                            explanation: 'Quem controla o modo escuro é page.theme_mode = ft.ThemeMode.DARK.'
                        },
                        {
                            letter: 'D',
                            text: 'Eles servem apenas para somar números inteiros.',
                            isCorrect: false,
                            explanation: 'Eles servem para posicionar elementos visuais na janela.'
                        }
                    ]
                },
                {
                    id: 'hw5_q4',
                    question: '4. Como personalizamos o visual do nosso app com modo escuro, cor de fundo e ícones nos botões?',
                    options: [
                        {
                            letter: 'A',
                            text: 'Usando page.theme_mode = ft.ThemeMode.DARK, page.bgcolor = "#..." e icon=ft.Icons.STAR nos botões.',
                            isCorrect: true,
                            explanation: 'Mandou bem! Essas propriedades dão identidade visual moderna ao aplicativo da dupla.'
                        },
                        {
                            letter: 'B',
                            text: 'Não é possível usar cores nem ícones no Flet.',
                            isCorrect: false,
                            explanation: 'O Flet possui suporte completo a cores hexadecimais, temas e centenas de ícones em ft.Icons.'
                        },
                        {
                            letter: 'C',
                            text: 'Usando o comando break dentro do page.title.',
                            isCorrect: false,
                            explanation: 'break só é usado dentro de laços while ou for.'
                        },
                        {
                            letter: 'D',
                            text: 'Apenas instalando outro sistema operacional.',
                            isCorrect: false,
                            explanation: 'A estilização é feita diretamente no código Python do Flet.'
                        }
                    ]
                },
                {
                    id: 'hw5_q5',
                    question: '5. Na navegação entre abas com ft.NavigationBar, qual propriedade dos containers (ex: tela_inicio.visible = True / tela_cadastro.visible = False) usamos para alternar qual tela aparece?',
                    options: [
                        {
                            letter: 'A',
                            text: 'A propriedade .visible (True para mostrar a tela da aba escolhida e False para esconder as outras), seguida de page.update().',
                            isCorrect: true,
                            explanation: 'Perfeito! Alternar .visible entre True e False é a técnica mais simples, rápida e segura para criar apps multi-telas!'
                        },
                        {
                            letter: 'B',
                            text: 'O comando exit() para fechar o aplicativo toda vez que trocar de aba.',
                            isCorrect: false,
                            explanation: 'Fechar o app encerraria a sessão do usuário; usamos .visible para alternar suavemente.'
                        },
                        {
                            letter: 'C',
                            text: 'O método .pop(0) para deletar a janela.',
                            isCorrect: false,
                            explanation: '.pop() é método de listas; nos controles do Flet usamos .visible.'
                        },
                        {
                            letter: 'D',
                            text: 'Não é possível ter mais de uma seção em um app Flet.',
                            isCorrect: false,
                            explanation: 'Com NavigationBar e containers visíveis/ocultos podemos ter várias abas no mesmo app!'
                        }
                    ]
                }
            ],
            practicalTask: {
                title: '💻 Desafio Prático da Aula 05: Meu Primeiro App Visual com Flet',
                description: 'Escolha UMA das opções abaixo! Se estiver no PC com Flet instalado, teste com python app.py; se estiver no celular sem Flet, escreva a estrutura do código Flet seguindo o modelo abaixo!',
                options: [
                    {
                        badge: '📱 Opção 1: Cartão / Calculadora Interativa no Flet',
                        text: 'Crie uma janela Flet com título, cor de fundo ou tema escuro, 1 ou 2 campos ft.TextField, 1 botão ft.ElevatedButton com on_click e 1 ft.Text de resultado que atualiza com page.update()!'
                    },
                    {
                        badge: '🌍 Opção 2: Esqueleto da Tela Inicial do Projeto ODS da Dupla',
                        text: 'Monte o código Flet da tela principal do aplicativo da sua dupla (com título do app, um ft.TextField para cadastrar um item/dado na lista e um botão que adiciona e mostra na tela)!'
                    }
                ],
                starterHint: 'import flet as ft\n\ndef main(page: ft.Page):\n    page.title = "Meu App Flet"\n    page.theme_mode = ft.ThemeMode.DARK\n\n    titulo = ft.Text("🚀 Calculadora de Metas", size=24, weight="bold")\n    campo_nome = ft.TextField(label="Qual é a sua meta de hoje?")\n    resposta = ft.Text("", size=18, color="cyan")\n\n    def salvar_meta(e):\n        if campo_nome.value.strip() == "":\n            resposta.value = "⚠️ Digite uma meta antes de salvar!"\n        else:\n            resposta.value = f"✅ Meta cadastrada: {campo_nome.value}"\n            campo_nome.value = ""\n        page.update()\n\n    botao = ft.ElevatedButton("Salvar Meta", on_click=salvar_meta)\n    page.add(ft.Column([titulo, campo_nome, botao, resposta]))\n\nft.app(target=main)'
            }
        },

        aula06: {
            id: 'hw_aula06',
            lessonNumber: 6,
            lessonTag: 'AULA 06 • SPRINT FINAL, INTEGRAÇÃO IA E PREPARAÇÃO DO PITCH',
            title: 'Tarefa de Casa — Aula 06: Reta Final para a Feira de Soluções (09/12)',
            subtitle: '5 questões rápidas de revisão de blindagem e Pitch + Registro do Código/Roteiro Final da Dupla',
            dueInfo: 'Entregar antes da Feira Final (09/12)',
            questions: [
                {
                    id: 'hw6_q1',
                    question: '1. Para que serve o arquivo GEMINI.md na pasta do projeto da sua dupla?',
                    options: [
                        {
                            letter: 'A',
                            text: 'Para dar contexto do projeto e definir regras pedagógicas para que a IA atue como tutora/copiloto sem entregar código complexo incompreensível.',
                            isCorrect: true,
                            explanation: 'Exato! O GEMINI.md garante que a IA conheça o objetivo do seu app e respeite as ferramentas que você domina.'
                        },
                        {
                            letter: 'B',
                            text: 'Para substituir o arquivo principal .py do Python.',
                            isCorrect: false,
                            explanation: 'O GEMINI.md é um arquivo de instruções em Markdown para a IA; o código do app fica no arquivo .py.'
                        },
                        {
                            letter: 'C',
                            text: 'Para deixar o computador sem acesso ao teclado.',
                            isCorrect: false,
                            explanation: 'Ele é apenas um documento de texto com diretrizes de contexto para o assistente de IA.'
                        },
                        {
                            letter: 'D',
                            text: 'Para apagar os comentários do código.',
                            isCorrect: false,
                            explanation: 'Pelo contrário, ele incentiva código bem comentado e didático.'
                        }
                    ]
                },
                {
                    id: 'hw6_q2',
                    question: '2. No Teste de Usabilidade Cruzado (Dupla A testa o app da Dupla B), o que devemos observar?',
                    options: [
                        {
                            letter: 'A',
                            text: 'Se os botões e textos são claros e se o app está blindado contra cliques com campos vazios ou letras em campos numéricos.',
                            isCorrect: true,
                            explanation: 'Perfeito! Testar com outra dupla revela bugs e melhorias de usabilidade antes do grande dia da Feira!'
                        },
                        {
                            letter: 'B',
                            text: 'Apenas se o computador do colega tem a mesma cor de gabinete.',
                            isCorrect: false,
                            explanation: 'O foco do teste de usabilidade é a experiência do usuário e a estabilidade do software.'
                        },
                        {
                            letter: 'C',
                            text: 'Apagar o código da outra dupla sem avisar.',
                            isCorrect: false,
                            explanation: 'O teste cruzado é colaborativo e construtivo para ajudar os colegas a polirem seus apps.'
                        },
                        {
                            letter: 'D',
                            text: 'Ignorar qualquer erro ValueError que aparecer.',
                            isCorrect: false,
                            explanation: 'Todo ValueError encontrado no teste deve ser corrigido com validação ou try/except!'
                        }
                    ]
                },
                {
                    id: 'hw6_q3',
                    question: '3. Qual é a estrutura de 3 partes do Pitch que cada dupla apresentará no dia 09/12?',
                    options: [
                        {
                            letter: 'A',
                            text: '1) O Problema (Dor real/ODS) → 2) A Solução (Demo ao vivo do App) → 3) A Arquitetura (Explicação do código Python).',
                            isCorrect: true,
                            explanation: 'Certíssimo! Essa estrutura de 3 atos deixa a apresentação profissional, dinâmica e objetiva!'
                        },
                        {
                            letter: 'B',
                            text: '1) Ligar o PC → 2) Desligar o PC → 3) Ir embora sem mostrar nada.',
                            isCorrect: false,
                            explanation: 'A Feira é o momento de brilhar mostrando o problema resolvido, o app funcionando e o código!'
                        },
                        {
                            letter: 'C',
                            text: 'Falar apenas sobre a Aula 01 durante 20 minutos.',
                            isCorrect: false,
                            explanation: 'O pitch é focado no projeto da dupla e dura de 3 a 5 minutos.'
                        },
                        {
                            letter: 'D',
                            text: 'Mostrar apenas uma imagem estática sem abrir o código.',
                            isCorrect: false,
                            explanation: 'A demonstração do app e a Auditoria Viva do código são partes essenciais da apresentação.'
                        }
                    ]
                },
                {
                    id: 'hw6_q4',
                    question: '4. Na "Auditoria Viva" (defesa técnica), o que os professores podem perguntar para a dupla?',
                    options: [
                        {
                            letter: 'A',
                            text: 'Onde estão a lista/dicionário, as funções (def), o laço (for/while) e o tratamento de erros (try/except) dentro do código do app.',
                            isCorrect: true,
                            explanation: 'Exato! Saber apontar e explicar cada bloco do seu próprio código comprova a sua autoria e aprendizado!'
                        },
                        {
                            letter: 'B',
                            text: 'Apenas perguntas sobre capitais de países distantes.',
                            isCorrect: false,
                            explanation: 'A Auditoria Viva é sobre a lógica do código que vocês mesmos construíram.'
                        },
                        {
                            letter: 'C',
                            text: 'Pedir para programar em linguagem de máquina binária 0 e 1 de olhos fechados.',
                            isCorrect: false,
                            explanation: 'As perguntas são tranquilas e baseadas exatamente no código Python do projeto da dupla.'
                        },
                        {
                            letter: 'D',
                            text: 'Nenhuma pergunta; é proibido falar sobre Python na feira.',
                            isCorrect: false,
                            explanation: 'Explicar como o Python faz o app funcionar é o ponto alto da defesa técnica!'
                        }
                    ]
                },
                {
                    id: 'hw6_q5',
                    question: '5. Qual checklist técnico garante nota máxima no código do projeto final?',
                    options: [
                        {
                            letter: 'A',
                            text: 'Ter interface Flet (ou fluxo completo), usar Lista/Dicionário, Funções (def), Condicionais/Laços e Blindagem (try/except ou validação de campos vazios).',
                            isCorrect: true,
                            explanation: 'Perfeito! Esse checklist reúne todas as ferramentas que aprendemos ao longo do curso!'
                        },
                        {
                            letter: 'B',
                            text: 'Ter apenas uma linha com print("Oi").',
                            isCorrect: false,
                            explanation: 'O projeto final integra os pilares aprendidos para resolver um problema real.'
                        },
                        {
                            letter: 'C',
                            text: 'Não usar nenhuma variável nem função.',
                            isCorrect: false,
                            explanation: 'Variáveis, coleções e funções são indispensáveis para o funcionamento do app.'
                        },
                        {
                            letter: 'D',
                            text: 'Deixar erros de sintaxe propositais para o app não abrir.',
                            isCorrect: false,
                            explanation: 'O código deve estar testado e rodando sem erros de sintaxe.'
                        }
                    ]
                }
            ],
            practicalTask: {
                title: '💻 Entrega Prévia da Aula 06: Código do App da Dupla + Roteiro de Pitch',
                description: 'Cole abaixo a versão atual do código Python do aplicativo da sua dupla (ou o resumo estruturado do Problema + Solução + Código do seu projeto para a Feira do dia 09/12)!',
                options: [
                    {
                        badge: '🚀 Opção 1: Código Python/Flet do Projeto Final da Dupla',
                        text: 'Cole o código completo do aplicativo que você e sua dupla estão construindo para a Feira de Soluções, contendo listas/dicionários, funções (def) e proteção contra erros (try/except).'
                    },
                    {
                        badge: '🎤 Opção 2: Roteiro do Pitch (3 Atos) + Funções Principais do App',
                        text: 'Escreva em comentários (#) os 3 atos do seu Pitch (1. Problema/ODS, 2. Como o App resolve, 3. Quais estruturas Python usaram) seguido das funções principais do seu código!'
                    }
                ],
                starterHint: '# PROJETO FINAL — TRILHANDO O CAMINHO DO CÓDIGO\n# Dupla: [Seu Nome] e [Nome da Dupla]\n# Tema / ODS: ...\n# Ato 1 (Problema): ...\n# Ato 2 (Solução): ...\n\nimport flet as ft\n\ndados_cadastrados = []\n\ndef main(page: ft.Page):\n    page.title = "Nosso App Final"\n    # Cole o restante do código do seu projeto aqui!'
            }
        },

        aula07: {
            id: 'hw_aula07',
            lessonNumber: 7,
            lessonTag: 'AULA 07 • FEIRA DE SOLUÇÕES, PÓS-TESTE T1 E CERTIFICAÇÃO',
            title: 'Registro Final — Aula 07: Portfólio do Projeto & Conclusão da Trilha',
            subtitle: '5 questões finais de consolidação (Pós-Teste Rápido) + Entrega Oficial do Código Final Apresentado',
            dueInfo: 'Entrega Final — 09/12/2026',
            questions: [
                {
                    id: 'hw7_q1',
                    question: '1. Qual conjunto de estruturas Python forma a base completa de lógica que você dominou no projeto?',
                    options: [
                        { letter: 'A', text: 'Variáveis, Condicionais (if/elif/else), Tratamento de Erros (try/except), Laços (while/for), Listas, Funções (def) e Dicionários.', isCorrect: true, explanation: 'Parabéns! Você completou todos os pilares fundamentais da programação em Python!' },
                        { letter: 'B', text: 'Apenas o comando print() sem variáveis.', isCorrect: false, explanation: 'Sua jornada cobriu muito mais do que o print(): você dominou lógica, estruturas de dados e interfaces!' },
                        { letter: 'C', text: 'Apenas edição de imagens sem código.', isCorrect: false, explanation: 'Vocês programaram software real em Python com Flet!' },
                        { letter: 'D', text: 'Nenhum comando de decisão ou repetição.', isCorrect: false, explanation: 'Decisão e repetição foram pilares essenciais de todas as aulas.' }
                    ]
                },
                {
                    id: 'hw7_q2',
                    question: '2. Quando um aplicativo Flet precisa guardar vários cadastros estruturados (ex: nome, categoria e valor) em memória, qual é a melhor estrutura?',
                    options: [
                        { letter: 'A', text: 'Uma lista contendo dicionários: [{"nome": "...", "valor": 10}, ...]', isCorrect: true, explanation: 'Exato! Listas de dicionários permitem armazenar, listar com for e filtrar dados com clareza.' },
                        { letter: 'B', text: 'Um único número inteiro.', isCorrect: false, explanation: 'Um número inteiro guarda apenas um valor simples.' },
                        { letter: 'C', text: 'Um erro ZeroDivisionError.', isCorrect: false, explanation: 'ZeroDivisionError é uma exceção matemática.' },
                        { letter: 'D', text: 'Um comentário vazio.', isCorrect: false, explanation: 'Comentários são ignorados pelo Python e não guardam dados em execução.' }
                    ]
                },
                {
                    id: 'hw7_q3',
                    question: '3. Por que o uso de try / except é indispensável em aplicativos usados por pessoas reais?',
                    options: [
                        { letter: 'A', text: 'Porque impede que entradas inesperadas do usuário (como letras em campos numéricos) fechem ou travem o aplicativo.', isCorrect: true, explanation: 'Perfeito! Tratamento de exceções garante resiliência e boa experiência ao usuário.' },
                        { letter: 'B', text: 'Porque deixa a fonte do texto maior.', isCorrect: false, explanation: 'Quem altera o tamanho da fonte no Flet é a propriedade size.' },
                        { letter: 'C', text: 'Porque apaga todas as funções do arquivo.', isCorrect: false, explanation: 'O try/except protege as funções contra quebras inesperadas.' },
                        { letter: 'D', text: 'Porque substitui o comando def.', isCorrect: false, explanation: 'def cria funções e try/except trata erros.' }
                    ]
                },
                {
                    id: 'hw7_q4',
                    question: '4. No Flet, o que acontece quando o usuário clica em um botão configurado com on_click=salvar_dados?',
                    options: [
                        { letter: 'A', text: 'O Flet executa a função salvar_dados(e), que lê os campos (.value), processa a lógica e chama page.update() para atualizar a tela.', isCorrect: true, explanation: 'Certíssimo! Esse é o ciclo de eventos de toda aplicação gráfica moderna!' },
                        { letter: 'B', text: 'O Python desliga o computador imediatamente.', isCorrect: false, explanation: 'O evento on_click dispara apenas a função Python associada ao botão.' },
                        { letter: 'C', text: 'Nada acontece porque botões no Flet são apenas decorativos.', isCorrect: false, explanation: 'Com on_click os botões executam qualquer lógica Python que você programar.' },
                        { letter: 'D', text: 'O código é apagado do arquivo .py.', isCorrect: false, explanation: 'O arquivo .py permanece intacto.' }
                    ]
                },
                {
                    id: 'hw7_q5',
                    question: '5. Qual é a regra de ouro do Uso Ético e Crítico de IA que praticamos no projeto CEFET-MG / FAPEMIG?',
                    options: [
                        { letter: 'A', text: 'Usar a IA como copiloto e tutora, mas sempre compreender, testar, validar e saber explicar cada linha do nosso código.', isCorrect: true, explanation: 'Excelente! A autoria e o pensamento computacional são sempre seus!' },
                        { letter: 'B', text: 'Copiar código sem ler e sem testar.', isCorrect: false, explanation: 'Todo código precisa ser compreendido e auditado pelo desenvolvedor.' },
                        { letter: 'C', text: 'Nunca fazer perguntas nem testar o programa.', isCorrect: false, explanation: 'Questionar, testar e depurar são habilidades centrais da programação.' },
                        { letter: 'D', text: 'Deixar o aplicativo com erros sem corrigir.', isCorrect: false, explanation: 'Sempre testamos e corrigimos os erros antes da entrega.' }
                    ]
                }
            ],
            practicalTask: {
                title: '🏆 Portfólio Final (Aula 07): Código Oficial Apresentado na Feira + Reflexão',
                description: 'Registre aqui a versão final oficial do código do aplicativo apresentado pela sua dupla na Feira de Soluções do dia 09/12 e deixe um comentário sobre o que mais gostou de aprender!',
                options: [
                    {
                        badge: '🎓 Opção Única: Código Final do App da Dupla (Certificação 30h)',
                        text: 'Cole o código Python/Flet final apresentado hoje na Feira de Soluções para ficar salvo no seu portfólio oficial do projeto Trilhando o Caminho do Código!'
                    }
                ],
                starterHint: '# PORTFÓLIO OFICIAL — FEIRA DE SOLUÇÕES (09/12/2026)\n# Nome do App: ...\n# Dupla: ...\n\nimport flet as ft\n# Cole aqui a versão final do seu código!'
            }
        }
    };

    // =========================================================================
    // DATA PERSISTENCE LAYER (LOCALSTORAGE + SUPABASE CLOUD SYNC)
    // =========================================================================

    function normalizeName(name) {
        return String(name || '')
            .trim()
            .replace(/\s+/g, ' ')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    // Chave estrita anti-duplicidade (remove acentos, espaços extras e pontuação para impedir nomes iguais disfarçados)
    function normalizeUsernameKey(name) {
        return normalizeName(name).replace(/[^a-z0-9]/g, '');
    }

    function isUsernameTaken(name, ignoreUserId) {
        const norm = normalizeName(name);
        const normKey = normalizeUsernameKey(name);
        if (!norm || !normKey) return false;
        const users = getUsers();
        return users.some(u => {
            if (!u || (ignoreUserId && u.id === ignoreUserId)) return false;
            const uNorm = normalizeName(u.fullName);
            const uKey = normalizeUsernameKey(u.fullName);
            const uUserNorm = u.username ? normalizeName(u.username) : '';
            const uUserKey = u.username ? normalizeUsernameKey(u.username) : '';
            return uNorm === norm || uKey === normKey || (uUserNorm && uUserNorm === norm) || (uUserKey && uUserKey === normKey);
        });
    }

    // Configuração Oficial em Nuvem (Supabase) pré-configurada para todos os PCs da faculdade e celulares
    const DEFAULT_CLOUD_CONFIG = {
        supabaseUrl: 'https://tghgdgersdkxkjhljjjp.supabase.co',
        supabaseKey: 'sb_publishable_n10sVPI_PHdeRTur22ky1A_pBVSTTDz',
        enabled: true
    };

    function getCloudConfig() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_CLOUD);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && parsed.supabaseUrl && parsed.supabaseKey) {
                    return parsed;
                }
            }
        } catch (e) {}
        return Object.assign({}, DEFAULT_CLOUD_CONFIG);
    }

    function saveCloudConfig(url, key, enabled) {
        const cfg = {
            supabaseUrl: String(url || '').trim().replace(/\/+$/, ''),
            supabaseKey: String(key || '').trim(),
            enabled: Boolean(enabled && url && key)
        };
        localStorage.setItem(STORAGE_KEY_CLOUD, JSON.stringify(cfg));
        return cfg;
    }

    function getDeletedUserIds() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_DELETED_USERS);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch (e) {}
        return [];
    }

    function saveDeletedUserIds(ids) {
        const unique = Array.from(new Set(ids || []));
        localStorage.setItem(STORAGE_KEY_DELETED_USERS, JSON.stringify(unique));
        return unique;
    }

    function getUsers() {
        let users = [];
        try {
            const raw = localStorage.getItem(STORAGE_KEY_USERS);
            if (raw) users = JSON.parse(raw);
        } catch (e) {
            users = [];
        }
        const deletedIds = new Set(getDeletedUserIds());
        // Keep only non-deleted student accounts + the single official Admin account
        const filteredStudents = users.filter(u =>
            u &&
            u.role !== 'admin' &&
            u.role !== 'system_tombstones' &&
            u.role !== 'system_quiz_config' &&
            u.role !== 'system_permissions_config' &&
            !(typeof u.role === 'string' && u.role.startsWith('system_')) &&
            !deletedIds.has(u.id)
        );
        // Garante unicidade estrita de nomes de usuários (mantendo a conta mais antiga caso haja duplicata legada)
        const uniqueByName = new Map();
        filteredStudents.forEach(u => {
            const key = normalizeUsernameKey(u.fullName) || u.id;
            const existing = uniqueByName.get(key);
            if (!existing) {
                uniqueByName.set(key, u);
            } else {
                const exCreated = existing.createdAt || '9999';
                const curCreated = u.createdAt || '9999';
                const keeper = curCreated < exCreated ? u : existing;
                const other = keeper === u ? existing : u;
                keeper.attendance = Object.assign({}, other.attendance || {}, keeper.attendance || {});
                keeper.challengesProgress = Object.assign({}, other.challengesProgress || {}, keeper.challengesProgress || {});
                uniqueByName.set(key, keeper);
            }
        });
        users = Array.from(uniqueByName.values());
        DEFAULT_ADMINS.forEach(adm => {
            users.unshift(Object.assign({}, adm, { createdAt: '2026-09-16T15:00:00Z' }));
        });
        return users;
    }

    function saveUsers(users) {
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
        syncToCloudAsync();
    }

    function getSubmissions() {
        const deletedIds = new Set(getDeletedUserIds());
        try {
            const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    return parsed.filter(s => s && !deletedIds.has(s.userId));
                }
            }
        } catch (e) {}
        return [];
    }

    function saveSubmissions(subs) {
        localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(subs));
        syncToCloudAsync();
    }

    // =========================================================================
    // CONTROLE DE LIBERAÇÃO DE AULAS E SLIDES PELO ADM
    // =========================================================================

    function getUnlockedLessons() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_UNLOCKED_LESSONS);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch (e) {}
        return DEFAULT_UNLOCKED_LESSONS.slice();
    }

    function saveUnlockedLessons(lessonsList, fromRemote, remoteTs) {
        const unique = Array.from(new Set(lessonsList || []));
        const prevRaw = localStorage.getItem(STORAGE_KEY_UNLOCKED_LESSONS);
        const nextRaw = JSON.stringify(unique);
        localStorage.setItem(STORAGE_KEY_UNLOCKED_LESSONS, nextRaw);
        if (fromRemote) {
            if (remoteTs) localStorage.setItem(STORAGE_KEY_UNLOCKED_LESSONS_TS, remoteTs);
            if (prevRaw !== nextRaw) {
                window.dispatchEvent(new CustomEvent('trilhando:lessonschange', { detail: { unlocked: unique } }));
                window.dispatchEvent(new CustomEvent('trilhando:datasync'));
            }
        } else {
            const nowTs = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY_UNLOCKED_LESSONS_TS, nowTs);
            pushStateDirectToCloudAsync();
            window.dispatchEvent(new CustomEvent('trilhando:lessonschange', { detail: { unlocked: unique } }));
            window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        }
        return unique;
    }

    function isLessonUnlocked(lessonKey) {
        const list = getUnlockedLessons();
        return list.includes(lessonKey);
    }

    function toggleLessonUnlocked(lessonKey) {
        const list = getUnlockedLessons();
        const idx = list.indexOf(lessonKey);
        if (idx >= 0) {
            list.splice(idx, 1);
        } else {
            list.push(lessonKey);
        }
        saveUnlockedLessons(list, false);
        return list.includes(lessonKey);
    }

    function setLessonUnlocked(lessonKey, shouldUnlock) {
        const list = getUnlockedLessons();
        const idx = list.indexOf(lessonKey);
        if (shouldUnlock && idx < 0) {
            list.push(lessonKey);
        } else if (!shouldUnlock && idx >= 0) {
            list.splice(idx, 1);
        }
        saveUnlockedLessons(list, false);
        return list.includes(lessonKey);
    }

    // =========================================================================
    // LIBERAÇÃO DE QUIZZES (MODO APRESENTAÇÃO DO PROFESSOR VS PRÁTICA DO ALUNO)
    // =========================================================================

    function getUnlockedQuizzes() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_UNLOCKED_QUIZZES);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch (e) {}
        return DEFAULT_UNLOCKED_QUIZZES.slice();
    }

    function saveUnlockedQuizzes(quizzesList, fromRemote, remoteTs) {
        const unique = Array.from(new Set(quizzesList || []));
        const prevRaw = localStorage.getItem(STORAGE_KEY_UNLOCKED_QUIZZES);
        const nextRaw = JSON.stringify(unique);
        localStorage.setItem(STORAGE_KEY_UNLOCKED_QUIZZES, nextRaw);
        if (fromRemote) {
            if (remoteTs) localStorage.setItem(STORAGE_KEY_UNLOCKED_QUIZZES_TS, remoteTs);
            if (prevRaw !== nextRaw) {
                window.dispatchEvent(new CustomEvent('trilhando:quizzeschange', { detail: { unlocked: unique } }));
                window.dispatchEvent(new CustomEvent('trilhando:datasync'));
            }
        } else {
            const nowTs = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY_UNLOCKED_QUIZZES_TS, nowTs);
            pushStateDirectToCloudAsync();
            window.dispatchEvent(new CustomEvent('trilhando:quizzeschange', { detail: { unlocked: unique } }));
            window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        }
        return unique;
    }

    function isQuizUnlocked(lessonKey) {
        const list = getUnlockedQuizzes();
        return list.includes(lessonKey);
    }

    function toggleQuizUnlocked(lessonKey) {
        const list = getUnlockedQuizzes();
        const idx = list.indexOf(lessonKey);
        if (idx >= 0) {
            list.splice(idx, 1);
        } else {
            list.push(lessonKey);
        }
        saveUnlockedQuizzes(list, false);
        return list.includes(lessonKey);
    }

    function setQuizUnlocked(lessonKey, shouldUnlock) {
        const list = getUnlockedQuizzes();
        const idx = list.indexOf(lessonKey);
        if (shouldUnlock && idx < 0) {
            list.push(lessonKey);
        } else if (!shouldUnlock && idx >= 0) {
            list.splice(idx, 1);
        }
        saveUnlockedQuizzes(list, false);
        return list.includes(lessonKey);
    }

    // =========================================================================
    // CONTAS RECENTES NESTE COMPUTADOR / NAVEGADOR (NUNCA SALVA SENHAS!)
    // =========================================================================

    function getRecentUsers() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_RECENT_USERS);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    return parsed.filter(item => item && (typeof item === 'string' || item.fullName));
                }
            }
        } catch (e) {}
        return [];
    }

    function addRecentUser(user) {
        if (!user) return;
        const name = String(user.fullName || (typeof user === 'string' ? user : '')).trim();
        if (!name || name.length < 3) return;
        try {
            let list = getRecentUsers().filter(item => {
                const n = typeof item === 'string' ? item : item.fullName;
                return n.toLowerCase() !== name.toLowerCase();
            });
            list.unshift({
                fullName: name,
                role: user.role || 'student',
                lastLogin: new Date().toISOString()
            });
            if (list.length > 8) list = list.slice(0, 8);
            localStorage.setItem(STORAGE_KEY_RECENT_USERS, JSON.stringify(list));
        } catch (e) {}
    }

    function removeRecentUser(fullName) {
        if (!fullName) return;
        try {
            const norm = String(fullName).trim().toLowerCase();
            const list = getRecentUsers().filter(item => {
                const n = typeof item === 'string' ? item : item.fullName;
                return n.toLowerCase() !== norm;
            });
            localStorage.setItem(STORAGE_KEY_RECENT_USERS, JSON.stringify(list));
        } catch (e) {}
    }

    // Lista de Chamada (Presença Visual por Dia/Aula)
    // Estrutura: { [userId]: { [lessonKey]: { present: true/false, updatedAt: ISOString } } }
    function getAttendance() {
        let att = {};
        const deletedIds = new Set(getDeletedUserIds());
        try {
            const raw = localStorage.getItem(STORAGE_KEY_ATTENDANCE);
            if (raw) att = JSON.parse(raw);
        } catch (e) {
            att = {};
        }
        Object.keys(att).forEach(uid => {
            if (deletedIds.has(uid)) delete att[uid];
        });
        // Also merge any attendance saved directly on student objects (for zero-config cloud sync compatibility)
        const users = getUsers();
        users.forEach(u => {
            if (u.role === 'student' && u.attendance && typeof u.attendance === 'object') {
                if (!att[u.id]) att[u.id] = {};
                Object.keys(u.attendance).forEach(lKey => {
                    const existing = att[u.id][lKey];
                    const incoming = u.attendance[lKey];
                    if (!existing || (incoming && incoming.updatedAt && (!existing.updatedAt || incoming.updatedAt >= existing.updatedAt))) {
                        att[u.id][lKey] = incoming;
                    }
                });
            }
        });
        return att;
    }

    function saveAttendance(att) {
        localStorage.setItem(STORAGE_KEY_ATTENDANCE, JSON.stringify(att));
        // Mirror attendance inside student objects in STORAGE_KEY_USERS so Supabase syncs it automatically
        const users = getUsers();
        users.forEach(u => {
            if (u.role === 'student' && att[u.id]) {
                u.attendance = att[u.id];
            }
        });
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
        syncToCloudAsync();
    }

    function setStudentAttendance(userId, lessonKey, isPresent) {
        const att = getAttendance();
        if (!att[userId]) att[userId] = {};
        const now = new Date().toISOString();
        if (isPresent === null || typeof isPresent === 'undefined') {
            delete att[userId][lessonKey];
        } else {
            att[userId][lessonKey] = {
                present: Boolean(isPresent),
                updatedAt: now
            };
        }
        const users = getUsers();
        const uIdx = users.findIndex(u => u.id === userId);
        if (uIdx >= 0) {
            users[uIdx].attendance = att[userId];
            users[uIdx].updatedAt = now;
            localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
        }
        localStorage.setItem(STORAGE_KEY_ATTENDANCE, JSON.stringify(att));
        syncToCloudAsync();
        return att;
    }

    function markAllAttendance(lessonKey, isPresent) {
        const att = getAttendance();
        const users = getUsers();
        const now = new Date().toISOString();
        users.forEach(u => {
            if (u.role === 'student') {
                if (!att[u.id]) att[u.id] = {};
                att[u.id][lessonKey] = {
                    present: Boolean(isPresent),
                    updatedAt: now
                };
                u.attendance = att[u.id];
                u.updatedAt = now;
            }
        });
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
        localStorage.setItem(STORAGE_KEY_ATTENDANCE, JSON.stringify(att));
        syncToCloudAsync();
        return att;
    }

    // Excluir acesso de um aluno (ex: usuário de teste) pelo ADM
    function deleteStudentByAdmin(userId) {
        if (!userId) return { ok: false, error: 'ID de aluno inválido.' };
        const users = getUsers();
        const target = users.find(u => u.id === userId);
        if (!target) {
            return { ok: false, error: 'Aluno não encontrado.' };
        }
        if (target.role === 'admin') {
            return { ok: false, error: 'A conta de Administrador não pode ser excluída.' };
        }

        const deletedIds = getDeletedUserIds();
        deletedIds.push(userId);
        saveDeletedUserIds(deletedIds);

        const remainingUsers = users.filter(u => u.id !== userId);
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(remainingUsers));

        const att = getAttendance();
        delete att[userId];
        localStorage.setItem(STORAGE_KEY_ATTENDANCE, JSON.stringify(att));

        const remainingSubs = getSubmissions().filter(s => s.userId !== userId);
        localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(remainingSubs));

        const curr = getCurrentUser();
        if (curr && curr.id === userId) {
            setCurrentUser(null);
        }

        pushStateDirectToCloudAsync();
        window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        return { ok: true, deletedUser: target };
    }

    // Cadastro rápido de aluno pelo ADM (caso queira adicionar manualmente)
    function registerStudentByAdmin(fullName, password) {
        const cleanName = String(fullName || '').trim().replace(/\s+/g, ' ');
        const cleanPass = String(password || '1234').trim() || '1234';

        if (!cleanName || cleanName.length < 3) {
            return { ok: false, error: 'Digite o Nome Completo do aluno (pelo menos 3 letras).' };
        }
        if (isUsernameTaken(cleanName)) {
            return { ok: false, error: 'Já existe um usuário com este nome na turma! Nomes duplicados são bloqueados.' };
        }
        const users = getUsers();
        const now = new Date().toISOString();
        const newStudent = {
            id: 'stu_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
            fullName: cleanName,
            password: cleanPass,
            role: 'student',
            attendance: {},
            challengesProgress: {},
            createdAt: now,
            updatedAt: now
        };
        users.push(newStudent);
        saveUsers(users);
        return { ok: true, user: newStudent };
    }

    function resetStudentPasswordByAdmin(userId, newPassword) {
        const cleanPass = String(newPassword || '').trim();
        if (!cleanPass || cleanPass.length < 3) {
            return { ok: false, error: 'A nova senha deve ter pelo menos 3 caracteres.' };
        }
        const users = getUsers();
        const idx = users.findIndex(u => u.id === userId && u.role === 'student');
        if (idx < 0) return { ok: false, error: 'Aluno não encontrado.' };
        users[idx].password = cleanPass;
        users[idx].updatedAt = new Date().toISOString();
        saveUsers(users);
        return { ok: true, user: users[idx] };
    }

    // =========================================================================
    // PROGRESSO DOS DESAFIOS PYTHON (ESTILO BEECROWD) E CONFIGURAÇÃO DO CHAT IA
    // =========================================================================

    function getAllChallengesProgress() {
        let map = {};
        const deletedIds = new Set(getDeletedUserIds());
        try {
            const raw = localStorage.getItem(STORAGE_KEY_CHALLENGES);
            if (raw) map = JSON.parse(raw);
        } catch (e) {
            map = {};
        }
        Object.keys(map).forEach(uid => {
            if (deletedIds.has(uid)) delete map[uid];
        });
        const users = getUsers();
        users.forEach(u => {
            if (u.role === 'student' && u.challengesProgress && typeof u.challengesProgress === 'object') {
                if (!map[u.id]) map[u.id] = {};
                Object.keys(u.challengesProgress).forEach(cId => {
                    const existing = map[u.id][cId];
                    const incoming = u.challengesProgress[cId];
                    if (!existing || (incoming && incoming.updatedAt && (!existing.updatedAt || incoming.updatedAt >= existing.updatedAt))) {
                        map[u.id][cId] = incoming;
                    }
                });
            }
        });
        return map;
    }

    function getStudentChallenges(userId) {
        if (!userId) return {};
        const all = getAllChallengesProgress();
        return all[userId] || {};
    }

    function saveStudentChallengeProgress(userId, challengeId, entryData) {
        if (!userId || !challengeId) return null;
        const all = getAllChallengesProgress();
        if (!all[userId]) all[userId] = {};
        const prev = all[userId][challengeId] || {};
        const now = new Date().toISOString();

        const merged = {
            challengeId: challengeId,
            solved: Boolean(prev.solved || entryData.solved),
            code: typeof entryData.code === 'string' ? entryData.code : (prev.code || ''),
            xp: Number(entryData.xp || prev.xp || 0),
            attempts: (Number(prev.attempts) || 0) + 1,
            lastVerdict: entryData.lastVerdict || prev.lastVerdict || 'PENDING',
            solvedAt: prev.solvedAt || (entryData.solved ? now : null),
            updatedAt: now
        };
        all[userId][challengeId] = merged;
        localStorage.setItem(STORAGE_KEY_CHALLENGES, JSON.stringify(all));

        const users = getUsers();
        const uIdx = users.findIndex(u => u.id === userId);
        if (uIdx >= 0) {
            users[uIdx].challengesProgress = all[userId];
            users[uIdx].updatedAt = now;
            localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
        }
        syncToCloudAsync();
        window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        return merged;
    }

    const BUILTIN_GEMINI_KEY = (function () {
        try {
            return atob('QVEuQWI4Uk42S0diaEJkalpqNXJXQjZDZGFCSmZ5MWxNMEhjVVpHTkF5d1g3c1FWRjBORkE=');
        } catch (e) {
            return '';
        }
    })();

    const DEFAULT_CHATBOT_CFG = {
        geminiApiKey: BUILTIN_GEMINI_KEY,
        streamlitUrl: '',
        mode: 'native',
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe9ksgUqxMqSY8OUtDwmjwY187PPVguHBu7wHcUnOQA1eQTIg/formResponse',
        entryNome: 'entry.1009783107',
        entryPrompt: 'entry.1559793013',
        entryResposta: 'entry.2041274618',
        updatedAt: '1970-01-01T00:00:00.000Z'
    };

    function getChatbotConfig() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_CHATBOT_CFG);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === 'object') {
                    const merged = Object.assign({}, DEFAULT_CHATBOT_CFG, parsed);
                    if (!merged.geminiApiKey || !String(merged.geminiApiKey).trim()) {
                        merged.geminiApiKey = BUILTIN_GEMINI_KEY;
                    }
                    return merged;
                }
            }
        } catch (e) {}
        return Object.assign({}, DEFAULT_CHATBOT_CFG);
    }

    function saveChatbotConfig(newCfg, fromRemote) {
        const current = getChatbotConfig();
        const updated = Object.assign({}, current, newCfg || {}, {
            updatedAt: (fromRemote && newCfg && newCfg.updatedAt) ? newCfg.updatedAt : new Date().toISOString()
        });
        localStorage.setItem(STORAGE_KEY_CHATBOT_CFG, JSON.stringify(updated));
        if (!fromRemote) {
            pushStateDirectToCloudAsync();
            window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        }
        return updated;
    }

    function getCurrentUser() {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY_SESSION) || localStorage.getItem(STORAGE_KEY_SESSION);
            if (raw) {
                const u = JSON.parse(raw);
                if (u && u.role !== 'admin') {
                    const deletedIds = new Set(getDeletedUserIds());
                    if (deletedIds.has(u.id)) {
                        sessionStorage.removeItem(STORAGE_KEY_SESSION);
                        localStorage.removeItem(STORAGE_KEY_SESSION);
                        return null;
                    }
                }
                return u;
            }
        } catch (e) {}
        return null;
    }

    function setCurrentUser(user) {
        if (!user) {
            try {
                sessionStorage.removeItem(STORAGE_KEY_SESSION);
                localStorage.removeItem(STORAGE_KEY_SESSION);
            } catch (e) {}
        } else {
            try {
                sessionStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(user));
                localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(user));
            } catch (e) {}
            addRecentUser(user);
        }
        window.dispatchEvent(new CustomEvent('trilhando:authchange', { detail: { user } }));
    }

    async function pushStateDirectToCloudAsync() {
        const cfg = getCloudConfig();
        if (!cfg.enabled || !cfg.supabaseUrl || !cfg.supabaseKey) return false;
        try {
            const usersPayload = getUsers().slice();
            const deletedIds = getDeletedUserIds();
            if (deletedIds.length > 0) {
                usersPayload.push({
                    id: '__deleted_tombstones__',
                    role: 'system_tombstones',
                    deletedIds: deletedIds,
                    updatedAt: new Date().toISOString()
                });
            }
            usersPayload.push({
                id: '__classroom_permissions_cfg__',
                role: 'system_permissions_config',
                unlockedLessons: getUnlockedLessons(),
                lessonsUpdatedAt: localStorage.getItem(STORAGE_KEY_UNLOCKED_LESSONS_TS) || '1970-01-01T00:00:00.000Z',
                unlockedQuizzes: getUnlockedQuizzes(),
                quizzesUpdatedAt: localStorage.getItem(STORAGE_KEY_UNLOCKED_QUIZZES_TS) || '1970-01-01T00:00:00.000Z',
                updatedAt: new Date().toISOString()
            });
            const chatCfg = getChatbotConfig();
            usersPayload.push({
                id: '__chatbot_cloud_cfg__',
                role: 'system_chatbot_config',
                chatbotConfig: chatCfg,
                updatedAt: chatCfg.updatedAt || new Date().toISOString()
            });
            // IMPORTANTE: a tabela public.trilhando_sync no Supabase possui apenas (id, users_json, submissions_json, updated_at)
            const payload = {
                id: 'main_state',
                users_json: usersPayload,
                submissions_json: getSubmissions(),
                updated_at: new Date().toISOString()
            };
            const res = await fetch(`${cfg.supabaseUrl}/rest/v1/trilhando_sync?on_conflict=id`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': cfg.supabaseKey,
                    'Authorization': `Bearer ${cfg.supabaseKey}`,
                    'Prefer': 'resolution=merge-duplicates'
                },
                body: JSON.stringify(payload)
            });
            return res.ok;
        } catch (err) {
            console.warn('Direct cloud push warning:', err);
            return false;
        }
    }

    // Optional Supabase Cloud Sync (uses simple REST table `trilhando_sync` with id='main_state')
    // Suporta múltiplos ADMs logados simultaneamente: faz pull + merge por timestamp antes de enviar!
    async function syncToCloudAsync() {
        const cfg = getCloudConfig();
        if (!cfg.enabled || !cfg.supabaseUrl || !cfg.supabaseKey) return false;
        try {
            // Pull & merge remote first so two tutors editing at the same time never overwrite each other
            await pullFromCloudAsync(true);
            return await pushStateDirectToCloudAsync();
        } catch (err) {
            console.warn('Cloud sync warning:', err);
            return false;
        }
    }

    async function pullFromCloudAsync(silent) {
        const cfg = getCloudConfig();
        if (!cfg.enabled || !cfg.supabaseUrl || !cfg.supabaseKey) return false;
        try {
            const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
            const timer = controller ? setTimeout(() => controller.abort(), 3500) : null;
            const res = await fetch(`${cfg.supabaseUrl}/rest/v1/trilhando_sync?id=eq.main_state&select=*`, {
                headers: {
                    'apikey': cfg.supabaseKey,
                    'Authorization': `Bearer ${cfg.supabaseKey}`
                },
                signal: controller ? controller.signal : undefined
            });
            if (timer) clearTimeout(timer);
            if (!res.ok) return false;
            const rows = await res.json();
            if (rows && rows.length > 0) {
                const prevLessonsJson = JSON.stringify(getUnlockedLessons());
                const prevQuizzesJson = JSON.stringify(getUnlockedQuizzes());
                const prevUsersJson = localStorage.getItem(STORAGE_KEY_USERS) || '';
                const prevSubsJson = localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || '';
                const remote = rows[0];
                if (Array.isArray(remote.users_json)) {
                    const mergedUsers = mergeUsersWithAttendance(getUsers(), remote.users_json);
                    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(mergedUsers));
                    // Rebuild attendance & challenges maps from merged users
                    const att = getAttendance();
                    localStorage.setItem(STORAGE_KEY_ATTENDANCE, JSON.stringify(att));
                    const chProg = getAllChallengesProgress();
                    localStorage.setItem(STORAGE_KEY_CHALLENGES, JSON.stringify(chProg));
                }
                if (Array.isArray(remote.submissions_json)) {
                    const mergedSubs = mergeById(getSubmissions(), remote.submissions_json, 'id');
                    localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(mergedSubs));
                }
                if (!silent) {
                    const nextLessons = getUnlockedLessons();
                    const nextQuizzes = getUnlockedQuizzes();
                    const nextUsersJson = localStorage.getItem(STORAGE_KEY_USERS) || '';
                    const nextSubsJson = localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || '';
                    const lessonsChanged = JSON.stringify(nextLessons) !== prevLessonsJson;
                    const quizzesChanged = JSON.stringify(nextQuizzes) !== prevQuizzesJson;
                    const dataChanged = lessonsChanged || quizzesChanged || nextUsersJson !== prevUsersJson || nextSubsJson !== prevSubsJson;
                    if (lessonsChanged) {
                        window.dispatchEvent(new CustomEvent('trilhando:lessonschange', { detail: { unlocked: nextLessons } }));
                    }
                    if (quizzesChanged) {
                        window.dispatchEvent(new CustomEvent('trilhando:quizzeschange', { detail: { unlocked: nextQuizzes } }));
                    }
                    if (dataChanged) {
                        window.dispatchEvent(new CustomEvent('trilhando:datasync'));
                    }
                }
                return true;
            }
        } catch (err) {
            console.warn('Cloud pull warning:', err);
        }
        return false;
    }

    function mergeUsersWithAttendance(localUsers, remoteUsers) {
        // Merge remote tombstones (deleted test users) and permissions config first
        let currentDeleted = getDeletedUserIds();
        remoteUsers.forEach(rem => {
            if (rem && rem.id === '__deleted_tombstones__' && Array.isArray(rem.deletedIds)) {
                currentDeleted = saveDeletedUserIds(currentDeleted.concat(rem.deletedIds));
            }
            if (rem && rem.id === '__classroom_permissions_cfg__') {
                if (Array.isArray(rem.unlockedLessons)) {
                    const localTs = localStorage.getItem(STORAGE_KEY_UNLOCKED_LESSONS_TS) || '';
                    const remTs = rem.lessonsUpdatedAt || '';
                    if (remTs && remTs !== '1970-01-01T00:00:00.000Z' && (!localTs || remTs >= localTs)) {
                        saveUnlockedLessons(rem.unlockedLessons, true, remTs);
                    }
                }
                if (Array.isArray(rem.unlockedQuizzes)) {
                    const localQTs = localStorage.getItem(STORAGE_KEY_UNLOCKED_QUIZZES_TS) || '';
                    const remQTs = rem.quizzesUpdatedAt || '';
                    if (remQTs && remQTs !== '1970-01-01T00:00:00.000Z' && (!localQTs || remQTs >= localQTs)) {
                        saveUnlockedQuizzes(rem.unlockedQuizzes, true, remQTs);
                    }
                }
            }
            if (rem && rem.id === '__chatbot_cloud_cfg__' && rem.chatbotConfig) {
                const localChatCfg = getChatbotConfig();
                const locTs = localChatCfg.updatedAt || '';
                const remTs = rem.chatbotConfig.updatedAt || rem.updatedAt || '';
                if (remTs && remTs !== '1970-01-01T00:00:00.000Z' && (!locTs || remTs >= locTs)) {
                    saveChatbotConfig(rem.chatbotConfig, true);
                }
            }
        });
        const deletedIds = new Set(currentDeleted);
        const map = new Map();
        const isSystemRecord = (u) => !u || u.role === 'system_tombstones' || u.role === 'system_quiz_config' || u.role === 'system_permissions_config' || u.role === 'system_chatbot_config' || (typeof u.role === 'string' && u.role.startsWith('system_'));
        localUsers.forEach(u => {
            if (!isSystemRecord(u) && !deletedIds.has(u.id)) {
                map.set(u.id, Object.assign({}, u));
            }
        });
        remoteUsers.forEach(rem => {
            if (isSystemRecord(rem) || deletedIds.has(rem.id)) return;
            const loc = map.get(rem.id);
            if (!loc) {
                map.set(rem.id, Object.assign({}, rem));
            } else {
                // Merge per-lesson attendance by updatedAt timestamp so concurrent ADM attendance clicks merge cleanly
                const mergedAtt = Object.assign({}, loc.attendance || {});
                if (rem.attendance && typeof rem.attendance === 'object') {
                    Object.keys(rem.attendance).forEach(lKey => {
                        const locEntry = mergedAtt[lKey];
                        const remEntry = rem.attendance[lKey];
                        if (!locEntry || (remEntry && remEntry.updatedAt && (!locEntry.updatedAt || remEntry.updatedAt >= locEntry.updatedAt))) {
                            mergedAtt[lKey] = remEntry;
                        }
                    });
                }
                // Merge per-challenge Beecrowd progress
                const mergedCh = Object.assign({}, loc.challengesProgress || {});
                if (rem.challengesProgress && typeof rem.challengesProgress === 'object') {
                    Object.keys(rem.challengesProgress).forEach(cId => {
                        const locCh = mergedCh[cId];
                        const remCh = rem.challengesProgress[cId];
                        if (!locCh || (remCh && remCh.updatedAt && (!locCh.updatedAt || remCh.updatedAt >= locCh.updatedAt))) {
                            mergedCh[cId] = Object.assign({}, locCh || {}, remCh, {
                                solved: Boolean((locCh && locCh.solved) || (remCh && remCh.solved))
                            });
                        }
                    });
                }
                const newer = (rem.updatedAt && (!loc.updatedAt || rem.updatedAt >= loc.updatedAt)) ? rem : loc;
                map.set(rem.id, Object.assign({}, newer, { attendance: mergedAtt, challengesProgress: mergedCh }));
            }
        });
        // Deduplica contas de estudantes com o mesmo nome normalizado (mantém a mais antiga para impedir que um 2º cadastro roube o nome)
        const dedupedByName = new Map();
        const adminsList = [];
        Array.from(map.values()).forEach(u => {
            if (u.role === 'admin') {
                adminsList.push(u);
                return;
            }
            const nameKey = normalizeUsernameKey(u.fullName) || u.id;
            const prev = dedupedByName.get(nameKey);
            if (!prev) {
                dedupedByName.set(nameKey, u);
            } else {
                const prevCreated = prev.createdAt || '9999';
                const curCreated = u.createdAt || '9999';
                const keeper = curCreated < prevCreated ? u : prev;
                const duplicate = keeper === u ? prev : u;
                keeper.attendance = Object.assign({}, duplicate.attendance || {}, keeper.attendance || {});
                keeper.challengesProgress = Object.assign({}, duplicate.challengesProgress || {}, keeper.challengesProgress || {});
                dedupedByName.set(nameKey, keeper);
            }
        });
        return adminsList.concat(Array.from(dedupedByName.values()));
    }

    function mergeById(localArr, remoteArr, key) {
        const deletedIds = new Set(getDeletedUserIds());
        const map = new Map();
        localArr.forEach(item => {
            if (item && !deletedIds.has(item.userId)) map.set(item[key], item);
        });
        remoteArr.forEach(item => {
            if (!item || deletedIds.has(item.userId)) return;
            const existing = map.get(item[key]);
            if (!existing || (item.updatedAt && (!existing.updatedAt || item.updatedAt >= existing.updatedAt))) {
                map.set(item[key], item);
            }
        });
        return Array.from(map.values());
    }

    // =========================================================================
    // AUTHENTICATION API (SEPARADO EM "ENTRAR NA CONTA" VS "CRIAR CONTA")
    // =========================================================================

    function loginOrRegister({ fullName, password, confirmPassword, mode }) {
        const cleanName = String(fullName || '').trim().replace(/\s+/g, ' ');
        const cleanPass = String(password || '').trim();
        const cleanConfirm = typeof confirmPassword !== 'undefined' ? String(confirmPassword || '').trim() : null;
        const norm = normalizeName(cleanName);
        const normKey = normalizeUsernameKey(cleanName);

        if (!cleanName || cleanName.length < 3) {
            return { ok: false, error: 'Por favor, digite seu Nome Completo.' };
        }
        if (!cleanPass || cleanPass.length < 3) {
            return { ok: false, error: 'A senha precisa ter pelo menos 3 caracteres.' };
        }

        // Proteção contra tentativas repetidas de adivinhar senha (força bruta)
        const attemptEntry = LOGIN_ATTEMPTS_MAP[normKey];
        if (attemptEntry && attemptEntry.lockedUntil && Date.now() < attemptEntry.lockedUntil) {
            const waitSec = Math.ceil((attemptEntry.lockedUntil - Date.now()) / 1000);
            return {
                ok: false,
                error: `🔒 Muitas tentativas incorretas para este usuário! Aguarde ${waitSec}s antes de tentar novamente.`
            };
        }

        const users = getUsers();
        const existing = users.find(u =>
            normalizeName(u.fullName) === norm ||
            normalizeUsernameKey(u.fullName) === normKey ||
            (u.username && (normalizeName(u.username) === norm || normalizeUsernameKey(u.username) === normKey))
        );

        function registerFailedAttempt() {
            const cur = LOGIN_ATTEMPTS_MAP[normKey] || { count: 0, lockedUntil: 0 };
            cur.count += 1;
            if (cur.count >= 5) {
                cur.lockedUntil = Date.now() + 30000;
                cur.count = 0;
            }
            LOGIN_ATTEMPTS_MAP[normKey] = cur;
        }

        function clearFailedAttempts() {
            delete LOGIN_ATTEMPTS_MAP[normKey];
        }

        const isAdmAlias = [
            'admin', 'adm', 'professor', 'professores', 'tutores', 'trilhando',
            'trilhandoadm', 'trilhandoocaminhodocodigo'
        ].includes(normKey);

        // 1. MODO PROFESSOR / ADM (ou login geral com credencial de equipe)
        if (mode === 'admin' || (mode === 'login' && isAdmAlias)) {
            const adm = users.find(u =>
                u.role === 'admin' && (
                    isAdmAlias ||
                    normalizeName(u.fullName) === norm ||
                    normalizeUsernameKey(u.fullName) === normKey ||
                    (u.username && (normalizeName(u.username) === norm || normalizeUsernameKey(u.username) === normKey))
                )
            );
            if (!adm) {
                return { ok: false, error: 'Usuário de Administrador inválido. Use "Trilhando o Caminho do Código", "admin" ou "trilhando-adm".' };
            }
            if (adm.password !== cleanPass) {
                registerFailedAttempt();
                return { ok: false, error: 'Senha de Administrador incorreta!' };
            }
            clearFailedAttempts();
            setCurrentUser(adm);
            return { ok: true, user: adm, isNew: false, message: 'Login de Administrador realizado!' };
        }

        // 2. MODO ENTRAR NA CONTA (NÃO CRIA CONTA SE ERRAR O NOME OU A SENHA!)
        if (mode === 'login') {
            if (!existing) {
                return {
                    ok: false,
                    error: 'Usuário não encontrado! Verifique se digitou seu Nome Completo corretamente ou clique na aba "✨ Criar Conta" se for seu 1º acesso.'
                };
            }
            if (existing.password !== cleanPass) {
                registerFailedAttempt();
                return {
                    ok: false,
                    error: 'Senha incorreta! Este nome de usuário é protegido por senha. Verifique sua senha e tente novamente.'
                };
            }
            clearFailedAttempts();
            setCurrentUser(existing);
            return { ok: true, user: existing, isNew: false, message: 'Login realizado com sucesso!' };
        }

        // 3. MODO CRIAR CONTA (BARRA NOMES DE USUÁRIOS IGUAIS COM SEGURANÇA REFORÇADA)
        if (existing || isUsernameTaken(cleanName)) {
            return {
                ok: false,
                error: '🚫 Nome de usuário já cadastrado! O sistema bloqueia nomes iguais para proteger o seu ranking e suas atividades. Se a conta é sua, clique em "🔑 Entrar na Conta". Se você tem o mesmo nome de um colega, adicione mais um sobrenome!'
            };
        }

        const nameParts = cleanName.split(' ').filter(p => p.length >= 2);
        if (nameParts.length < 2) {
            return {
                ok: false,
                error: 'Digite seu Nome e Sobrenome completos (ex: Lucas Almeida Santos) para criar um identificador único e seguro!'
            };
        }

        if (cleanPass.length < 4) {
            return {
                ok: false,
                error: 'Para sua segurança nos desafios e no ranking, crie uma senha com pelo menos 4 caracteres!'
            };
        }

        if (normalizeUsernameKey(cleanPass) === normKey || normalizeUsernameKey(cleanPass) === normalizeUsernameKey(nameParts[0])) {
            return {
                ok: false,
                error: 'Por segurança, sua senha não pode ser igual ao seu próprio nome! Escolha outra senha.'
            };
        }

        if (cleanConfirm !== null && cleanConfirm !== cleanPass) {
            return {
                ok: false,
                error: 'As duas senhas digitadas não conferem! Digite a mesma senha no campo de confirmação.'
            };
        }

        const now = new Date().toISOString();
        const newUser = {
            id: 'stu_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
            fullName: cleanName,
            password: cleanPass,
            role: 'student',
            attendance: {},
            challengesProgress: {},
            createdAt: now,
            updatedAt: now
        };
        users.push(newUser);
        saveUsers(users);
        setCurrentUser(newUser);
        return {
            ok: true,
            user: newUser,
            isNew: true,
            message: 'Conta segura criada com sucesso! Seu nome único já está protegido e salvo no ranking!'
        };
    }

    function submitHomework(lessonKey, answersMap, practicalCode, studentComment) {
        const user = getCurrentUser();
        if (!user) {
            return { ok: false, error: 'Você precisa entrar com seu Nome Completo e Senha antes de enviar a tarefa.' };
        }
        if (user.role === 'admin') {
            return { ok: false, error: 'Professores (ADM) não realizam atividades — apenas visualizam os slides e as correções dos alunos.' };
        }
        const hw = HOMEWORKS_BY_LESSON[lessonKey];
        if (!hw) {
            return { ok: false, error: 'Tarefa não encontrada.' };
        }

        let correctCount = 0;
        const detailedAnswers = hw.questions.map(q => {
            const chosenLetter = answersMap[q.id] || null;
            const chosenOpt = q.options.find(o => o.letter === chosenLetter);
            const rightOpt = q.options.find(o => o.isCorrect);
            const isCorrect = Boolean(chosenOpt && chosenOpt.isCorrect);
            if (isCorrect) correctCount++;
            return {
                questionId: q.id,
                chosenLetter,
                correctLetter: rightOpt ? rightOpt.letter : 'A',
                isCorrect
            };
        });

        const totalQuestions = hw.questions.length;
        const wrongCount = totalQuestions - correctCount;
        const grade10 = Number(((correctCount / totalQuestions) * 10).toFixed(1));

        const submissions = getSubmissions();
        const subId = `${user.id}_${lessonKey}`;
        const existingIdx = submissions.findIndex(s => s.id === subId);

        const record = {
            id: subId,
            userId: user.id,
            studentName: user.fullName,
            lessonKey,
            lessonNumber: hw.lessonNumber,
            lessonTitle: hw.title,
            answers: answersMap,
            detailedAnswers,
            correctCount,
            wrongCount,
            totalQuestions,
            grade10,
            practicalCode: String(practicalCode || '').trim(),
            studentComment: String(studentComment || '').trim(),
            tutorFeedback: existingIdx >= 0 ? (submissions[existingIdx].tutorFeedback || '') : '',
            codeReviewed: existingIdx >= 0 ? Boolean(submissions[existingIdx].codeReviewed) : false,
            submittedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        if (existingIdx >= 0) {
            submissions[existingIdx] = record;
        } else {
            submissions.push(record);
        }
        saveSubmissions(submissions);
        return { ok: true, submission: record };
    }

    // Atualização exclusiva da Parte 2 (Código Prático & Comentário) pelo aluno após ter dado baixa
    // Preserva rigorosamente as respostas, nota e gabarito do questionário
    function updateHomeworkCode(lessonKey, practicalCode, studentComment) {
        const user = getCurrentUser();
        if (!user) {
            return { ok: false, error: 'Você precisa entrar com seu Nome Completo e Senha antes de salvar.' };
        }
        if (user.role === 'admin') {
            return { ok: false, error: 'Professores (ADM) não realizam atividades — apenas visualizam os slides e as correções dos alunos.' };
        }
        const submissions = getSubmissions();
        const subId = `${user.id}_${lessonKey}`;
        const existingIdx = submissions.findIndex(s => s.id === subId);
        if (existingIdx < 0) {
            return { ok: false, error: 'Nenhuma entrega anterior encontrada para atualizar o código.' };
        }

        const sub = submissions[existingIdx];
        sub.practicalCode = String(practicalCode || '').trim();
        if (typeof studentComment !== 'undefined') {
            sub.studentComment = String(studentComment || '').trim();
        }
        sub.updatedAt = new Date().toISOString();

        submissions[existingIdx] = sub;
        saveSubmissions(submissions);
        window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        return { ok: true, submission: sub };
    }

    function saveTutorFeedback(submissionId, tutorFeedback, codeReviewed) {
        const subs = getSubmissions();
        const idx = subs.findIndex(s => s.id === submissionId);
        if (idx === -1) return { ok: false, error: 'Entrega não encontrada.' };
        subs[idx].tutorFeedback = String(tutorFeedback || '').trim();
        subs[idx].codeReviewed = Boolean(codeReviewed);
        subs[idx].updatedAt = new Date().toISOString();
        saveSubmissions(subs);
        return { ok: true, submission: subs[idx] };
    }

    // =========================================================================
    // 1. RENDERIZADOR DE QUIZ ESTILO NOTEBOOK LM (PARA SLIDES AULA 03+)
    // =========================================================================

    function escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // Respostas do quiz por aluno/aula (cada pergunta só pode ser respondida uma vez pelos alunos; o ADM pode refazer livremente)
    const ADM_QUIZ_MEMORY = {};
    const QUIZ_CURRENT_IDX_MAP = {};

    function quizAnswersStorageKey(user, lessonKey) {
        const uid = user && user.id ? user.id : 'anon';
        return `${uid}_${lessonKey}`;
    }

    function loadQuizAnswers(user, lessonKey) {
        if (user && user.role === 'admin') return {};
        try {
            const all = JSON.parse(localStorage.getItem(STORAGE_KEY_QUIZ_ANSWERS) || '{}');
            const saved = all[quizAnswersStorageKey(user, lessonKey)];
            if (saved && typeof saved === 'object') return Object.assign({}, saved);
        } catch (e) {}
        return {};
    }

    function saveQuizAnswers(user, lessonKey, answers) {
        if (user && user.role === 'admin') return;
        try {
            const all = JSON.parse(localStorage.getItem(STORAGE_KEY_QUIZ_ANSWERS) || '{}');
            all[quizAnswersStorageKey(user, lessonKey)] = Object.assign({}, answers);
            localStorage.setItem(STORAGE_KEY_QUIZ_ANSWERS, JSON.stringify(all));
        } catch (e) {}
    }

    function renderNotebookLMQuiz(containerId, lessonKey) {
        const container = document.getElementById(containerId);
        const quizData = QUIZZES_BY_LESSON[lessonKey];
        if (!container || !quizData) return;

        const user = getCurrentUser();
        const isAdm = user && user.role === 'admin';
        const isUnlocked = isQuizUnlocked(lessonKey);

        // Se o usuário NÃO for ADM e o quiz ainda estiver trancado pelo professor:
        if (!isAdm && !isUnlocked) {
            container.innerHTML = `
                <div class="nb-quiz-shell" style="border:1.5px dashed rgba(245,158,11,0.5);background:radial-gradient(circle at 50% 30%, rgba(245,158,11,0.08), rgba(15,23,42,0.96));padding:40px 24px;text-align:center;border-radius:24px;">
                    <div style="font-size:3.5rem;margin-bottom:12px;">🔒</div>
                    <span class="tr-badge-cyan" style="border-color:#f59e0b;color:#fcd34d;background:rgba(245,158,11,0.15);font-size:0.85rem;padding:6px 16px;">
                        MODO APRESENTAÇÃO EM SALA DE AULA
                    </span>
                    <h3 style="font-size:1.45rem;color:#fff;margin-top:14px;margin-bottom:8px;">
                        Quiz em Andamento com os Professores
                    </h3>
                    <p style="font-size:0.92rem;color:#cbd5e1;line-height:1.6;max-width:580px;margin:0 auto 18px;">
                        Este quiz interativo está sendo apresentado no projetor para toda a turma responder junta com os professores Victor, Rafael e Kaique.
                    </p>
                    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:16px 20px;max-width:540px;margin:0 auto 16px;font-size:0.88rem;color:#94a3b8;line-height:1.6;">
                        ⏳ <strong>Fique tranquilo(a):</strong> Assim que a aula terminar, os professores vão liberar o quiz no portal para você responder individualmente e revisar o gabarito comentado de cada pergunta!
                    </div>
                    <div style="font-size:0.78rem;color:#64748b;">
                        Aguardando liberação do professor...
                    </div>
                </div>
            `;
            return;
        }

        const idxKey = `${containerId}_${lessonKey}`;
        if (typeof QUIZ_CURRENT_IDX_MAP[idxKey] !== 'number') {
            QUIZ_CURRENT_IDX_MAP[idxKey] = 0;
        }
        // Track selected option per question: { [questionId]: 'A' | 'B' | 'C' | 'D' }
        // Para alunos, as respostas ficam salvas no navegador (recarregar a página não libera nova tentativa).
        // Para o ADM (professor), o quiz pode ser refeito/reiniciado quantas vezes quiser!
        if (isAdm && !ADM_QUIZ_MEMORY[lessonKey]) ADM_QUIZ_MEMORY[lessonKey] = {};
        const selectedAnswers = isAdm ? ADM_QUIZ_MEMORY[lessonKey] : loadQuizAnswers(user, lessonKey);

        function renderCurrentQuestion() {
            const currentUser = getCurrentUser();
            const currentIsAdm = currentUser && currentUser.role === 'admin';
            const currentIsUnlocked = isQuizUnlocked(lessonKey);
            const total = quizData.questions.length;
            let currentIdx = QUIZ_CURRENT_IDX_MAP[idxKey] || 0;
            if (currentIdx < 0 || currentIdx >= total) {
                currentIdx = 0;
                QUIZ_CURRENT_IDX_MAP[idxKey] = 0;
            }
            const q = quizData.questions[currentIdx];
            const pickedLetter = selectedAnswers[q.id] || null;

            // Count how many answered & how many right so far
            let answeredCount = 0;
            let rightCount = 0;
            quizData.questions.forEach(item => {
                const pick = selectedAnswers[item.id];
                if (pick) {
                    answeredCount++;
                    const opt = item.options.find(o => o.letter === pick);
                    if (opt && opt.isCorrect) rightCount++;
                }
            });

            const dotsHtml = quizData.questions.map((item, idx) => {
                const pick = selectedAnswers[item.id];
                let stateClass = '';
                if (pick) {
                    const opt = item.options.find(o => o.letter === pick);
                    stateClass = (opt && opt.isCorrect) ? 'nb-dot-correct' : 'nb-dot-wrong';
                }
                const activeClass = idx === currentIdx ? 'nb-dot-active' : '';
                return `<button type="button" class="nb-quiz-dot ${stateClass} ${activeClass}" data-qidx="${idx}" title="Ir para Questão ${idx + 1}">${idx + 1}</button>`;
            }).join('');

            const optionsHtml = q.options.map(opt => {
                let cardStateClass = '';
                let feedbackBadgeHtml = '';
                let explanationHtml = '';

                if (pickedLetter) {
                    const isPicked = pickedLetter === opt.letter;
                    if (opt.isCorrect) {
                        // Always highlight the right option in green once an answer is clicked (NotebookLM behavior!)
                        cardStateClass = 'nb-opt-correct';
                        feedbackBadgeHtml = isPicked
                            ? `<span class="nb-feedback-pill nb-pill-correct">✅ Você acertou! Alternativa Correta</span>`
                            : `<span class="nb-feedback-pill nb-pill-correct">✅ Esta era a alternativa correta</span>`;
                        explanationHtml = `
                            <div class="nb-opt-explanation nb-exp-correct">
                                <strong>💡 Por que está certa:</strong> ${escapeHtml(opt.explanation)}
                            </div>`;
                    } else if (isPicked && !opt.isCorrect) {
                        // Highlight the wrong clicked option in red and explain why it's wrong
                        cardStateClass = 'nb-opt-wrong';
                        feedbackBadgeHtml = `<span class="nb-feedback-pill nb-pill-wrong">❌ Alternativa Incorreta</span>`;
                        explanationHtml = `
                            <div class="nb-opt-explanation nb-exp-wrong">
                                <strong>⚠️ Por que está errada:</strong> ${escapeHtml(opt.explanation)}
                            </div>`;
                    } else {
                        cardStateClass = 'nb-opt-dimmed';
                    }
                }

                return `
                    <button type="button" class="nb-quiz-option ${cardStateClass}" data-letter="${opt.letter}" ${pickedLetter ? 'disabled aria-disabled="true" style="cursor:default;"' : ''}>
                        <div class="nb-opt-main">
                            <span class="nb-opt-letter">${opt.letter}</span>
                            <span class="nb-opt-text">${escapeHtml(opt.text)}</span>
                        </div>
                        ${feedbackBadgeHtml}
                        ${explanationHtml}
                    </button>
                `;
            }).join('');

            const adminBarHtml = currentIsAdm ? `
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;background:rgba(37,99,235,0.16);border:1.5px solid rgba(59,130,246,0.5);border-radius:14px;padding:10px 16px;margin-bottom:12px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                        <span style="font-size:1.3rem;">🛡️</span>
                        <div style="text-align:left;">
                            <div style="font-weight:700;color:#93c5fd;font-size:0.9rem;">Modo Apresentação do Professor (ADM) — Teste &amp; Aplicação em Aula</div>
                            <div style="font-size:0.78rem;color:#cbd5e1;">
                                ${currentIsUnlocked
                                    ? '🔓 <strong style="color:#6ee7b7;">Liberado p/ Alunos:</strong> A turma já pode ver e praticar este quiz nos seus próprios dispositivos.'
                                    : '🔒 <strong style="color:#fcd34d;">Trancado p/ Alunos:</strong> Apenas você pode ver na tela projetada. Você pode testar e refazer quantas vezes quiser!'
                                }
                            </div>
                        </div>
                    </div>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
                        <button type="button" id="${containerId}_admResetFullBtn" class="tr-btn-ghost" style="padding:8px 14px;font-size:0.82rem;border-color:rgba(0,229,255,0.45);color:#00e5ff;cursor:pointer;" title="Zera todas as questões respondidas para você aplicar o quiz do zero na aula">
                            🔄 Refazer / Zerar Quiz do Zero
                        </button>
                        <button type="button" id="${containerId}_admToggleQuizBtn" class="tr-btn-primary" style="padding:8px 16px;font-size:0.84rem;background:${currentIsUnlocked ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.25)'};border-color:${currentIsUnlocked ? '#ef4444' : '#10b981'};color:${currentIsUnlocked ? '#fca5a5' : '#6ee7b7'};cursor:pointer;">
                            ${currentIsUnlocked ? '🔒 Trancar Quiz p/ Alunos' : '🔓 Liberar Quiz para os Alunos Agora'}
                        </button>
                    </div>
                </div>
            ` : '';

            container.innerHTML = `
                <div class="nb-quiz-shell">
                    ${adminBarHtml}

                    <!-- Top Header bar like NotebookLM -->
                    <div class="nb-quiz-topbar">
                        <div class="nb-quiz-meta">
                            <span class="nb-quiz-pill">🧠 QUIZ INTERATIVO • NOTEBOOK LM MODE</span>
                            <span class="nb-quiz-topic">${escapeHtml(q.topic || '')}</span>
                        </div>
                        <div class="nb-quiz-stats">
                            <span class="nb-stat-badge">✨ Acertos: <strong>${rightCount}</strong> / ${answeredCount}</span>
                            ${currentIsAdm && pickedLetter ? `<button type="button" class="nb-reset-btn" id="${containerId}_clearCurrentQBtn" title="Limpar apenas esta pergunta">↺ Limpar Questão</button>` : ''}
                            ${currentIsAdm ? `<button type="button" class="nb-reset-btn" id="${containerId}_resetBtn" title="Reiniciar todas as questões do Quiz">🔄 Reiniciar Tudo</button>` : ''}
                        </div>
                    </div>

                    <!-- Numbered Question Dots (1 to 10) -->
                    <div class="nb-quiz-dots-bar">
                        ${dotsHtml}
                    </div>

                    <!-- Question Box -->
                    <div class="nb-quiz-question-card">
                        <div class="nb-q-counter">Pergunta ${currentIdx + 1} de ${total}</div>
                        <h3 class="nb-q-title">${escapeHtml(q.question)}</h3>
                        ${q.code ? `<pre class="nb-q-code"><code>${escapeHtml(q.code)}</code></pre>` : ''}
                    </div>

                    <!-- 4 Clickable Options -->
                    <div class="nb-quiz-options-grid">
                        ${optionsHtml}
                    </div>

                    <!-- Footer Controls inside Quiz -->
                    <div class="nb-quiz-footer">
                        <button type="button" class="nb-nav-btn" id="${containerId}_prevQ" ${currentIdx === 0 ? 'disabled' : ''}>
                            ← Pergunta Anterior
                        </button>
                        <div class="nb-footer-hint">
                            ${pickedLetter
                                ? '✅ Resposta revelada! Leia a explicação acima ou avance para a próxima.'
                                : '👆 Clique em uma das 4 alternativas para verificar na hora!'}
                        </div>
                        <button type="button" class="nb-nav-btn nb-nav-primary" id="${containerId}_nextQ" ${currentIdx === total - 1 ? 'disabled' : ''}>
                            Próxima Pergunta →
                        </button>
                    </div>
                </div>
            `;

            // Attach listeners (stopPropagation so clicking inside quiz doesn't trigger slide swipe/keys)
            const admBtn = document.getElementById(`${containerId}_admToggleQuizBtn`);
            if (admBtn) {
                admBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleQuizUnlocked(lessonKey);
                    renderNotebookLMQuiz(containerId, lessonKey);
                });
            }

            const resetAllQuizFn = (e) => {
                if (e) e.stopPropagation();
                Object.keys(selectedAnswers).forEach(k => delete selectedAnswers[k]);
                QUIZ_CURRENT_IDX_MAP[idxKey] = 0;
                renderCurrentQuestion();
            };

            const admResetFullBtn = document.getElementById(`${containerId}_admResetFullBtn`);
            if (admResetFullBtn) {
                admResetFullBtn.addEventListener('click', resetAllQuizFn);
            }

            const clearCurrentQBtn = document.getElementById(`${containerId}_clearCurrentQBtn`);
            if (clearCurrentQBtn) {
                clearCurrentQBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    delete selectedAnswers[q.id];
                    renderCurrentQuestion();
                });
            }

            // Attach listeners (stopPropagation so clicking inside quiz doesn't trigger slide swipe/keys)
            container.querySelectorAll('.nb-quiz-option').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Pergunta já respondida: resposta travada (ADM pode clicar em "Limpar Questão" ou "Refazer Quiz" se quiser repetir)
                    if (selectedAnswers[q.id]) return;
                    const letter = btn.getAttribute('data-letter');
                    selectedAnswers[q.id] = letter;
                    if (!currentIsAdm) saveQuizAnswers(currentUser, lessonKey, selectedAnswers);
                    renderCurrentQuestion();
                });
            });

            container.querySelectorAll('.nb-quiz-dot').forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    QUIZ_CURRENT_IDX_MAP[idxKey] = parseInt(dot.getAttribute('data-qidx'), 10);
                    renderCurrentQuestion();
                });
            });

            const prevQBtn = document.getElementById(`${containerId}_prevQ`);
            const nextQBtn = document.getElementById(`${containerId}_nextQ`);
            const resetBtn = document.getElementById(`${containerId}_resetBtn`);

            if (prevQBtn) {
                prevQBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (QUIZ_CURRENT_IDX_MAP[idxKey] > 0) {
                        QUIZ_CURRENT_IDX_MAP[idxKey]--;
                        renderCurrentQuestion();
                    }
                });
            }
            if (nextQBtn) {
                nextQBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (QUIZ_CURRENT_IDX_MAP[idxKey] < total - 1) {
                        QUIZ_CURRENT_IDX_MAP[idxKey]++;
                        renderCurrentQuestion();
                    }
                });
            }
            if (resetBtn) {
                resetBtn.addEventListener('click', resetAllQuizFn);
            }
        }

        renderCurrentQuestion();
    }

    // =========================================================================
    // 2. MODAL / COMPONENTE DE TAREFA DE CASA (DENTRO DOS SLIDES OU NO PORTAL)
    // =========================================================================

    function openHomeworkModal(lessonKey) {
        const hw = HOMEWORKS_BY_LESSON[lessonKey];
        if (!hw) return;

        const currCheckUser = getCurrentUser();
        const isAdmUser = currCheckUser && currCheckUser.role === 'admin';
        if (!isLessonUnlocked(lessonKey) && !isAdmUser) {
            if (typeof window.alert === 'function') {
                window.alert('🔒 Esta aula e sua tarefa de casa ainda estão bloqueadas pelo professor.');
            }
            return;
        }

        let modal = document.getElementById('trilhandoHomeworkModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'trilhandoHomeworkModal';
            modal.className = 'tr-hw-modal-overlay';
            document.body.appendChild(modal);
        }

        const draftAnswers = {};
        let draftCode = '';
        let draftComment = '';
        let authMode = 'register'; // 'register' | 'login'
        let authFeedback = '';

        // Pre-populate if user already submitted
        function loadExistingSubmission() {
            const user = getCurrentUser();
            if (!user) return null;
            const subs = getSubmissions();
            const existing = subs.find(s => s.userId === user.id && s.lessonKey === lessonKey);
            if (existing) {
                Object.assign(draftAnswers, existing.answers || {});
                draftCode = existing.practicalCode || '';
                draftComment = existing.studentComment || '';
            }
            return existing;
        }

        let existingSub = loadExistingSubmission();

        function renderModalContent() {
            const prevBody = modal.querySelector('.tr-hw-modal-body');
            const prevScroll = prevBody ? prevBody.scrollTop : 0;

            const user = getCurrentUser();
            existingSub = loadExistingSubmission();

            const authSectionHtml = !user ? `
                <div class="tr-hw-auth-card">
                    <div class="tr-hw-auth-header">
                        <div>
                            <span class="tr-badge-cyan">🔐 IDENTIFICAÇÃO DO ESTUDANTE</span>
                            <h4>Entre com seu Nome Completo e Senha para salvar sua nota</h4>
                            <p>Ao fazer login pela 1ª vez, você já é cadastrado automaticamente na lista de chamada!</p>
                        </div>
                    </div>
                    <div class="tr-auth-form-row">
                        <input type="text" id="trHwFullName" class="tr-input" placeholder="Seu Nome Completo (ex: João Pedro Silva)" autocomplete="name">
                        <input type="password" id="trHwPassword" class="tr-input" placeholder="Sua Senha" autocomplete="current-password">
                        <button type="button" id="trHwAuthSubmitBtn" class="tr-btn-primary">
                            🚀 Entrar →
                        </button>
                    </div>
                    ${authFeedback ? `<div class="tr-auth-alert">${escapeHtml(authFeedback)}</div>` : ''}
                </div>
            ` : `
                <div class="tr-hw-user-bar">
                    <div>
                        <span class="tr-user-dot"></span>
                        Logado como: <strong>${escapeHtml(user.fullName)}</strong>
                        <span class="tr-role-pill">${user.role === 'admin' ? '🛡️ Professor / ADM' : '🎓 Estudante'}</span>
                    </div>
                    <div style="display:flex;gap:10px;align-items:center;">
                        ${existingSub ? `<span class="tr-submitted-badge">✅ Entregue • Acertos: ${existingSub.correctCount}/${existingSub.totalQuestions} (Nota ${existingSub.grade10})</span>` : '<span class="tr-pending-badge">📝 Atividade em andamento</span>'}
                        <button type="button" id="trHwLogoutBtn" class="tr-btn-ghost">Trocar usuário</button>
                    </div>
                </div>
            `;

            const isSubmitted = Boolean(existingSub);
            // Professor (ADM): modo somente visualização (gabarito comentado, sem responder/enviar)
            const isAdmView = Boolean(user && user.role === 'admin');

            const questionsHtml = hw.questions.map((q, qIndex) => {
                const picked = isAdmView ? null : (draftAnswers[q.id] || null);
                const isLockedView = isSubmitted || isAdmView;

                const optsHtml = q.options.map(opt => {
                    const isSelected = picked === opt.letter;
                    let optStatusClass = isSelected ? 'tr-hw-opt-selected' : '';
                    let explanationBlock = '';

                    if (isAdmView) {
                        if (opt.isCorrect) {
                            optStatusClass = 'tr-hw-opt-correct';
                            explanationBlock = `<div class="nb-opt-explanation nb-exp-correct"><strong>✅ Gabarito:</strong> ${escapeHtml(opt.explanation)}</div>`;
                        } else {
                            optStatusClass = '';
                        }
                    } else if (isSubmitted) {
                        if (opt.isCorrect) {
                            optStatusClass = 'tr-hw-opt-correct';
                            explanationBlock = `<div class="nb-opt-explanation nb-exp-correct"><strong>✅ Correta:</strong> ${escapeHtml(opt.explanation)}</div>`;
                        } else if (isSelected && !opt.isCorrect) {
                            optStatusClass = 'tr-hw-opt-wrong';
                            explanationBlock = `<div class="nb-opt-explanation nb-exp-wrong"><strong>❌ Por que está errada:</strong> ${escapeHtml(opt.explanation)}</div>`;
                        }
                    }

                    return `
                        <button type="button" class="tr-hw-opt-btn ${optStatusClass}" data-qid="${q.id}" data-letter="${opt.letter}" ${isLockedView ? 'disabled style="cursor:default;"' : ''}>
                            <div class="nb-opt-main">
                                <span class="nb-opt-letter">${opt.letter}</span>
                                <span class="nb-opt-text">${escapeHtml(opt.text)}</span>
                            </div>
                            ${explanationBlock}
                        </button>
                    `;
                }).join('');

                return `
                    <div class="tr-hw-q-block">
                        <div class="tr-hw-q-header">
                            <span class="tr-hw-q-num">Questão ${qIndex + 1} de ${hw.questions.length}</span>
                            ${isAdmView ? '<span class="nb-feedback-pill nb-pill-correct">🛡️ Gabarito do Professor</span>' : (isSubmitted ? (
                                (q.options.find(o => o.letter === picked && o.isCorrect))
                                     ? '<span class="nb-feedback-pill nb-pill-correct">✅ Você Acertou</span>'
                                     : '<span class="nb-feedback-pill nb-pill-wrong">❌ Você Errou (Veja a explicação abaixo)</span>'
                            ) : '')}
                        </div>
                        <h4 class="tr-hw-q-title">${escapeHtml(q.question)}</h4>
                        ${q.code ? `<pre class="nb-q-code"><code>${escapeHtml(q.code)}</code></pre>` : ''}
                        <div class="tr-hw-opts-list">
                            ${optsHtml}
                        </div>
                    </div>
                `;
            }).join('');

            const practicalOptionsHtml = hw.practicalTask.options.map(op => `
                <div class="tr-prac-option-card">
                    <div class="tr-prac-badge">${escapeHtml(op.badge)}</div>
                    <p>${escapeHtml(op.text)}</p>
                </div>
            `).join('');

            modal.innerHTML = `
                <div class="tr-hw-modal-card">
                    <div class="tr-hw-modal-top">
                        <div>
                            <span class="tr-badge-cyan">🏠 ${escapeHtml(hw.lessonTag)}</span>
                            <h2>${escapeHtml(hw.title)}</h2>
                            <p>${escapeHtml(hw.subtitle)}</p>
                        </div>
                        <button type="button" class="tr-modal-close-btn" id="trHwCloseModalBtn" title="Fechar (Esc)">✕</button>
                    </div>

                    <div class="tr-hw-modal-body">
                        ${authSectionHtml}

                        ${isAdmView ? `
                            <div class="tr-tutor-feedback-banner" style="background:rgba(37,99,235,0.14);border-color:rgba(59,130,246,0.5);">
                                <strong style="color:#93c5fd;">🛡️ Modo Professor (ADM) — somente visualização</strong>
                                <p style="margin-top:4px;font-size:0.83rem;color:#cbd5e1;">
                                    Professores não realizam a atividade. Abaixo está o <strong>gabarito comentado</strong> do questionário e o enunciado da prática.
                                    As entregas e correções dos alunos ficam na aba <strong>🛡️ Painel ADM</strong> do portal.
                                </p>
                            </div>
                        ` : ''}

                        ${existingSub ? `
                            <div class="tr-tutor-feedback-banner" style="background:rgba(16,185,129,0.12);border-color:rgba(16,185,129,0.4);">
                                <strong style="color:#10b981;">🔒 Questionário Concluído e Registrado (${existingSub.correctCount}/${existingSub.totalQuestions} acertos • Nota ${existingSub.grade10}):</strong>
                                <p style="margin-top:4px;font-size:0.83rem;color:#cbd5e1;">
                                    As respostas e a nota do questionário já foram salvas e estão travadas para consulta. <strong>Você pode continuar editando seu código prático abaixo na Parte 2!</strong>
                                </p>
                            </div>
                        ` : ''}

                        ${existingSub && existingSub.tutorFeedback ? `
                            <div class="tr-tutor-feedback-banner">
                                <strong>💬 Comentário do Professor na sua atividade:</strong>
                                <p>${escapeHtml(existingSub.tutorFeedback)}</p>
                            </div>
                        ` : ''}

                        <div class="tr-hw-section-title">
                            <span>📋 PARTE 1 — Questionário Rápido (5 Questões de Múltipla Escolha)</span>
                            <small>${isAdmView ? 'Gabarito comentado (modo de consulta do professor):' : (isSubmitted ? 'Respostas salvas e explicadas abaixo (modo de consulta):' : 'Marque uma alternativa em cada questão. Após enviar, o gabarito comentado é liberado!')}</small>
                        </div>

                        <div class="tr-hw-questions-container">
                            ${questionsHtml}
                        </div>

                        <div class="tr-hw-section-title" style="margin-top:28px;">
                            <span>💻 PARTE 2 — Prática de Código (PC / VS Code ou Celular / Pydroid 3)</span>
                            <small>${isAdmView ? 'Enunciado da prática que os alunos devem entregar:' : (isSubmitted ? 'Você pode editar seu código e comentários quantas vezes quiser:' : 'Sem correção automática: teste seu código primeiro e cole ele aqui como comentário para corrigirmos na próxima aula!')}</small>
                        </div>

                        <div class="tr-hw-practical-box">
                            <h4>${escapeHtml(hw.practicalTask.title)}</h4>
                            <p style="color:#cbd5e1;font-size:0.88rem;margin-bottom:14px;">${escapeHtml(hw.practicalTask.description)}</p>
                            <div class="tr-prac-grid">
                                ${practicalOptionsHtml}
                            </div>

                            <details class="tr-hint-details">
                                <summary>💡 Precisa de uma ideia de como começar o código? Clique aqui para ver um modelo</summary>
                                <pre class="nb-q-code" style="margin-top:10px;"><code>${escapeHtml(hw.practicalTask.starterHint)}</code></pre>
                            </details>

                            ${isAdmView ? '' : `
                            <label class="tr-field-label" for="trHwPracticalCode">📥 Cole seu Código Python abaixo (depois de testar no PC ou Pydroid 3):</label>
                            <textarea id="trHwPracticalCode" class="tr-code-textarea" rows="8" placeholder="# Cole aqui o código Python que você fez e testou...\nnome = input('Digite seu nome: ')\nprint(f'Olá, {nome}!')">${escapeHtml(draftCode)}</textarea>

                            <label class="tr-field-label" for="trHwStudentComment" style="margin-top:12px;">💬 Comentário ou Dúvida sobre a Prática (opcional):</label>
                            <input type="text" id="trHwStudentComment" class="tr-input" placeholder="Ex: Fiz pelo celular no Pydroid 3 e funcionou certinho! / Tive dúvida no elif..." value="${escapeHtml(draftComment)}">
                            `}
                        </div>

                        <div id="trHwSubmitStatusBox"></div>
                    </div>

                    <div class="tr-hw-modal-footer">
                        <span style="font-size:0.8rem;color:#94a3b8;">
                            ${isAdmView ? '🛡️ Modo professor: somente visualização (sem envio).' : (existingSub ? '✅ Questionário salvo! Você pode salvar novas versões do seu código prático.' : '📌 Responda as 5 questões e cole seu código prático antes de enviar.')}
                        </span>
                        <div style="display:flex;gap:12px;">
                            <button type="button" class="tr-btn-ghost" id="trHwCancelBtn">Fechar</button>
                            ${isAdmView ? '' : `
                            <button type="button" class="tr-btn-primary" id="trHwSubmitFinalBtn">
                                ${existingSub ? '💾 Salvar Alterações do Código' : '🚀 Enviar Tarefa e Ver Nota'}
                            </button>
                            `}
                        </div>
                    </div>
                </div>
            `;

            modal.classList.add('active');

            // Restaura posição do scroll se houver para evitar saltos
            const newBody = modal.querySelector('.tr-hw-modal-body');
            if (newBody && prevScroll > 0) {
                newBody.scrollTop = prevScroll;
            }

            // Event Listeners inside Modal
            const closeBtn = document.getElementById('trHwCloseModalBtn');
            const cancelBtn = document.getElementById('trHwCancelBtn');
            const closeFn = () => { modal.classList.remove('active'); };
            if (closeBtn) closeBtn.addEventListener('click', closeFn);
            if (cancelBtn) cancelBtn.addEventListener('click', closeFn);

            // Auth tabs
            modal.querySelectorAll('.tr-auth-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    authMode = tab.getAttribute('data-mode');
                    authFeedback = '';
                    renderModalContent();
                });
            });

            const authBtn = document.getElementById('trHwAuthSubmitBtn');
            if (authBtn) {
                authBtn.addEventListener('click', () => {
                    const fullName = document.getElementById('trHwFullName').value;
                    const password = document.getElementById('trHwPassword').value;
                    const res = loginOrRegister({ fullName, password, mode: authMode });
                    if (!res.ok) {
                        authFeedback = '⚠️ ' + res.error;
                    } else {
                        authFeedback = '';
                    }
                    renderModalContent();
                });
            }

            const logoutBtn = document.getElementById('trHwLogoutBtn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', () => {
                    setCurrentUser(null);
                    renderModalContent();
                });
            }

            // Keep code & comment synced as student types
            const codeArea = document.getElementById('trHwPracticalCode');
            const commentInput = document.getElementById('trHwStudentComment');
            if (codeArea) {
                codeArea.addEventListener('input', () => { draftCode = codeArea.value; });
                // Stop propagation on keydown so space/arrows inside textarea don't advance slides!
                codeArea.addEventListener('keydown', e => e.stopPropagation());
            }
            if (commentInput) {
                commentInput.addEventListener('input', () => { draftComment = commentInput.value; });
                commentInput.addEventListener('keydown', e => e.stopPropagation());
            }
            modal.querySelectorAll('input').forEach(inp => {
                inp.addEventListener('keydown', e => e.stopPropagation());
            });

            // Seleção de alternativas no questionário:
            // Se já enviou (baixa dada), o quiz está travado (botões desabilitados).
            // Se não enviou, apenas altera a classe visual SEM reconstruir a tela e SEM subir o scroll pro topo!
            modal.querySelectorAll('.tr-hw-opt-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (existingSub) return; // Travado após entrega!
                    if (isAdmView) return;   // Professor não responde atividades

                    const qid = btn.getAttribute('data-qid');
                    const letter = btn.getAttribute('data-letter');
                    draftAnswers[qid] = letter;

                    // Atualiza a seleção visualmente direto no DOM da questão sem recriar o modal
                    const parentOpts = btn.closest('.tr-hw-opts-list');
                    if (parentOpts) {
                        parentOpts.querySelectorAll('.tr-hw-opt-btn').forEach(b => {
                            if (b.getAttribute('data-letter') === letter) {
                                b.classList.add('tr-hw-opt-selected');
                            } else {
                                b.classList.remove('tr-hw-opt-selected');
                            }
                        });
                    }
                });
            });

            // Envio Final ou Atualização de Código
            const submitBtn = document.getElementById('trHwSubmitFinalBtn');
            if (submitBtn) {
                submitBtn.addEventListener('click', () => {
                    const statusBox = document.getElementById('trHwSubmitStatusBox');
                    const currUser = getCurrentUser();
                    if (!currUser) {
                        if (statusBox) {
                            statusBox.innerHTML = `<div class="tr-auth-alert">⚠️ Role até o topo da janela e digite seu <strong>Nome Completo e Senha</strong> para identificar sua tarefa!</div>`;
                            statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                        return;
                    }

                    if (!draftCode || draftCode.trim().length < 5) {
                        if (statusBox) {
                            statusBox.innerHTML = `<div class="tr-auth-alert">⚠️ Cole seu código Python do desafio prático na Parte 2 antes de salvar!</div>`;
                            statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                        return;
                    }

                    // Se a tarefa JÁ foi entregue (baixa dada), atualiza APENAS o código prático sem alterar as respostas do quiz!
                    if (existingSub) {
                        const updResult = updateHomeworkCode(lessonKey, draftCode, draftComment);
                        if (updResult.ok) {
                            if (statusBox) {
                                statusBox.innerHTML = `
                                    <div class="tr-submit-success-box" style="margin-top:14px;">
                                        <h4>🎉 Código prático atualizado com sucesso, ${escapeHtml(currUser.fullName)}!</h4>
                                        <p>Seu novo código Python foi salvo para a avaliação dos professores. A pontuação do seu questionário (Nota: <strong>${existingSub.grade10}</strong>) permanece intacta.</p>
                                    </div>
                                `;
                                statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                        } else {
                            if (statusBox) statusBox.innerHTML = `<div class="tr-auth-alert">⚠️ ${escapeHtml(updResult.error)}</div>`;
                        }
                        return;
                    }

                    // Se é o PRIMEIRO envio, valida se todas as 5 questões foram respondidas
                    const unanswered = hw.questions.filter(q => !draftAnswers[q.id]);
                    if (unanswered.length > 0) {
                        if (statusBox) {
                            statusBox.innerHTML = `<div class="tr-auth-alert">⚠️ Você ainda precisa marcar uma alternativa em ${unanswered.length} questão(ões) antes de enviar!</div>`;
                            statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                        return;
                    }

                    const result = submitHomework(lessonKey, draftAnswers, draftCode, draftComment);
                    if (result.ok) {
                        renderModalContent();
                        const newStatusBox = document.getElementById('trHwSubmitStatusBox');
                        if (newStatusBox) {
                            newStatusBox.innerHTML = `
                                <div class="tr-submit-success-box">
                                    <h4>🎉 Tarefa enviada com sucesso, ${escapeHtml(currUser.fullName)}!</h4>
                                    <p>Você acertou <strong>${result.submission.correctCount} de ${result.submission.totalQuestions}</strong> questões objetivas (Nota: <strong>${result.submission.grade10}</strong>) e seu código prático foi salvo para correção!</p>
                                    <p style="font-size:0.82rem;margin-top:6px;color:#a7f3d0;">👆 Role as questões acima para ver a explicação detalhada de cada alternativa!</p>
                                </div>
                            `;
                            newStatusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                    }
                });
            }
        }

        renderModalContent();
    }

    // =========================================================================
    // 3. TELA DE LOGIN OBRIGATÓRIA NOS SLIDES (SE ACESSAR DIRETO SEM LOGAR)
    // =========================================================================

    function ensureSlideAuthGate() {
        const isSlidePage = Boolean(document.querySelector('.presentation-stage'));
        if (!isSlidePage) return;

        const user = getCurrentUser();
        const isAdm = user && user.role === 'admin';

        // Identifica qual aula é esta página pelo nome do arquivo
        const pathMatch = window.location.pathname.match(/aula-(\d+)-slides\.html/i);
        let lessonKey = null;
        let lessonNum = 0;
        if (pathMatch) {
            lessonNum = parseInt(pathMatch[1], 10);
            lessonKey = 'aula' + (lessonNum < 10 ? '0' + lessonNum : lessonNum);
        }

        // Se a aula estiver bloqueada para alunos e quem estiver acessando NÃO for ADM:
        if (lessonKey && !isLessonUnlocked(lessonKey) && !isAdm) {
            let authGate = document.getElementById('trSlideAuthGate');
            if (authGate) authGate.remove();

            let lockedGate = document.getElementById('trSlideLockedGate');
            if (!lockedGate) {
                lockedGate = document.createElement('div');
                lockedGate.id = 'trSlideLockedGate';
                lockedGate.className = 'tr-hw-modal-overlay active';
                lockedGate.style.background = 'radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.25), rgba(4, 9, 22, 0.98) 70%)';
                lockedGate.style.zIndex = '100001';
                lockedGate.innerHTML = `
                    <div class="auth-modal-card" style="max-width:520px;text-align:center;padding:34px 24px;border:1.5px solid rgba(239,68,68,0.5);border-radius:22px;">
                        <div style="font-size:3.2rem;margin-bottom:12px;">🔒</div>
                        <span class="tr-badge-cyan" style="border-color:#ef4444;color:#fca5a5;background:rgba(239,68,68,0.15);">AULA BLOQUEADA PELO PROFESSOR</span>
                        <h3 style="font-size:1.35rem;color:#fff;margin-top:12px;margin-bottom:8px;">Aula 0${lessonNum} ainda não liberada</h3>
                        <p style="font-size:0.88rem;color:#cbd5e1;line-height:1.6;margin-bottom:22px;">
                            Os slides e materiais desta aula serão liberados pelos professores Victor, Rafael e Kaique através do painel de administração no dia correspondente.
                        </p>
                        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
                            <button type="button" id="trLockedGateBackBtn" class="tr-btn-ghost" style="padding:12px 24px;font-size:0.92rem;cursor:pointer;">
                                ⬅ Voltar
                            </button>
                            <a href="../../index.html" class="tr-btn-primary" style="text-decoration:none;padding:12px 24px;font-size:0.92rem;">
                                🏠 Voltar ao Menu Principal
                            </a>
                        </div>
                    </div>
                `;
                document.body.appendChild(lockedGate);
                const backBtn = document.getElementById('trLockedGateBackBtn');
                if (backBtn) {
                    backBtn.addEventListener('click', () => {
                        // Volta para a página anterior na MESMA aba (ou para o menu, se não houver histórico)
                        if (window.history.length > 1 && document.referrer) {
                            window.history.back();
                        } else {
                            window.location.href = '../../index.html';
                        }
                    });
                }
            }
            return;
        } else {
            let lockedGate = document.getElementById('trSlideLockedGate');
            if (lockedGate) lockedGate.remove();
        }

        let gate = document.getElementById('trSlideAuthGate');
        if (user) {
            if (gate) gate.remove();
            return;
        }

        if (!gate) {
            gate = document.createElement('div');
            gate.id = 'trSlideAuthGate';
            gate.className = 'tr-hw-modal-overlay active';
            gate.style.background = 'radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.25), rgba(4, 9, 22, 0.98) 70%)';
            gate.style.zIndex = '100000';
            document.body.appendChild(gate);
        }

        let gateMode = 'login';
        let gateError = '';

        function renderGate() {
            const isReg = gateMode === 'register';
            const isAdm = gateMode === 'admin';

            const recentUsers = getRecentUsers();
            let recentUsersHtml = '';
            let dataListHtml = '';
            if (gateMode === 'login' && recentUsers.length > 0) {
                const chips = recentUsers.map(u => {
                    const name = typeof u === 'string' ? u : u.fullName;
                    const role = typeof u === 'object' && u.role ? u.role : 'student';
                    return `
                        <button type="button" class="tr-slide-chip" data-tr-fill-user="${escapeHtml(name)}" style="display:inline-flex;align-items:center;gap:6px;background:rgba(0,229,255,0.08);border:1px solid rgba(0,229,255,0.25);border-radius:100px;padding:4px 10px;font-size:0.78rem;color:#e2e8f0;cursor:pointer;">
                            <span>${role === 'admin' ? '🛡️' : '🎓'}</span>
                            <span>${escapeHtml(name)}</span>
                            <span class="tr-chip-remove" data-tr-remove-user="${escapeHtml(name)}" style="opacity:0.6;font-size:0.9rem;padding-left:4px;cursor:pointer;" title="Remover da lista">×</span>
                        </button>
                    `;
                }).join('');

                const opts = recentUsers.map(u => {
                    const name = typeof u === 'string' ? u : u.fullName;
                    return `<option value="${escapeHtml(name)}">`;
                }).join('');
                dataListHtml = `<datalist id="trSlideRecentList">${opts}</datalist>`;

                recentUsersHtml = `
                    <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:10px 12px;margin-bottom:12px;text-align:left;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                            <span style="font-size:0.73rem;font-weight:700;color:#94a3b8;letter-spacing:0.5px;text-transform:uppercase;">
                                👤 Contas recentes neste computador:
                            </span>
                            <span style="font-size:0.7rem;color:#64748b;">(Clique para preencher o nome)</span>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:6px;">
                            ${chips}
                        </div>
                    </div>
                `;
            }

            gate.innerHTML = `
                <div class="tr-hw-modal-card" style="max-width:500px;padding:28px;border-radius:22px;">
                    <span class="tr-badge-cyan">🔐 LOGIN OBRIGATÓRIO • TRILHANDO CLASSROOM</span>
                    <h2 style="font-size:1.35rem;color:#fff;margin-top:10px;margin-bottom:6px;">
                        ${isReg ? 'Criar Conta de Aluno(a)' : (isAdm ? 'Acesso do Professor (ADM)' : 'Entrar na Minha Conta')}
                    </h2>
                    <p style="font-size:0.84rem;color:#94a3b8;line-height:1.5;margin-bottom:16px;">
                        ${isReg
                            ? 'Crie seu acesso com <strong>Nome Completo e Senha</strong> para já ficar salvo na chamada e usar nas próximas aulas!'
                            : 'Digite seu <strong>Nome Completo e Senha</strong> cadastrados (se errar o nome ou a senha, o acesso é bloqueado).'}
                    </p>

                    <div class="tr-auth-tabs" style="margin-bottom:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
                        <button type="button" class="tr-auth-tab ${gateMode === 'login' ? 'active' : ''}" data-gmode="login">🔑 Entrar na Conta</button>
                        <button type="button" class="tr-auth-tab ${gateMode === 'register' ? 'active' : ''}" data-gmode="register">✨ Criar Conta</button>
                        <button type="button" class="tr-auth-tab ${gateMode === 'admin' ? 'active' : ''}" data-gmode="admin">🛡️ Professor (ADM)</button>
                    </div>

                    ${recentUsersHtml}

                    <div style="display:flex;flex-direction:column;gap:12px;">
                        <div>
                            <label class="tr-field-label">${isAdm ? 'Usuário ADM da Equipe:' : 'Seu Nome Completo (Nome e Sobrenome):'}</label>
                            <input type="text" id="trSlideGateName" class="tr-input" placeholder="${isAdm ? 'Trilhando o Caminho do Código' : 'Ex: Lucas Almeida Santos'}" autocomplete="username" ${dataListHtml ? 'list="trSlideRecentList"' : ''}>
                            ${dataListHtml}
                        </div>
                        <div>
                            <label class="tr-field-label">${isReg ? 'Crie uma Senha (mínimo 4 caracteres):' : 'Sua Senha:'}</label>
                            <input type="password" id="trSlideGatePass" class="tr-input" placeholder="${isAdm ? 'Senha de Administrador' : (isReg ? 'Crie uma senha segura (mín. 4 caracteres)' : 'Digite sua senha cadastrada')}" autocomplete="current-password">
                        </div>
                        ${isReg ? `
                        <div>
                            <label class="tr-field-label">Confirme sua Senha:</label>
                            <input type="password" id="trSlideGatePassConfirm" class="tr-input" placeholder="Digite a mesma senha novamente" autocomplete="new-password">
                        </div>
                        ` : ''}
                        ${gateError ? `<div class="tr-auth-alert">⚠️ ${escapeHtml(gateError)}</div>` : ''}
                        <button type="button" id="trSlideGateSubmit" class="tr-btn-primary" style="width:100%;padding:12px;margin-top:4px;font-size:0.92rem;">
                            ${isReg ? '✨ Criar Minha Conta e Liberar Slides' : '🔑 Entrar na Conta e Liberar Slides'}
                        </button>
                    </div>
                </div>
            `;

            gate.querySelectorAll('[data-gmode]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    gateMode = btn.getAttribute('data-gmode');
                    gateError = '';
                    renderGate();
                });
            });

            gate.querySelectorAll('.tr-slide-chip').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const removeBtn = e.target.closest('[data-tr-remove-user]');
                    if (removeBtn) {
                        const targetName = removeBtn.getAttribute('data-tr-remove-user');
                        removeRecentUser(targetName);
                        renderGate();
                        return;
                    }
                    const fillName = chip.getAttribute('data-tr-fill-user');
                    const nInp = document.getElementById('trSlideGateName');
                    const pInp = document.getElementById('trSlideGatePass');
                    if (nInp) nInp.value = fillName;
                    if (pInp) {
                        pInp.value = '';
                        pInp.focus();
                    }
                });
            });

            const nameInp = document.getElementById('trSlideGateName');
            const passInp = document.getElementById('trSlideGatePass');
            const passConfirmInp = document.getElementById('trSlideGatePassConfirm');
            const submitBtn = document.getElementById('trSlideGateSubmit');

            const handleLogin = async () => {
                if (submitBtn) submitBtn.textContent = '⏳ Verificando na nuvem...';
                await pullFromCloudAsync(true);
                const res = loginOrRegister({
                    fullName: nameInp ? nameInp.value : '',
                    password: passInp ? passInp.value : '',
                    confirmPassword: isReg && passConfirmInp ? passConfirmInp.value : undefined,
                    mode: gateMode
                });
                if (!res.ok) {
                    gateError = res.error;
                    renderGate();
                } else {
                    gate.remove();
                    ensureSlideAuthGate();
                }
            };

            if (submitBtn) {
                submitBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    handleLogin();
                });
            }
            [nameInp, passInp].forEach(inp => {
                if (!inp) return;
                inp.addEventListener('keydown', (e) => {
                    e.stopPropagation();
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleLogin();
                    }
                });
            });
        }

        renderGate();
    }

    // Pull latest data from cloud on startup, on window focus, and every 4s so all lab PCs and ADM stay synced
    pullFromCloudAsync();
    setInterval(() => {
        pullFromCloudAsync(false);
    }, 4000);
    window.addEventListener('focus', () => {
        pullFromCloudAsync(false);
    });
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            pullFromCloudAsync(false);
        }
    });

    // Sincronização instantânea entre abas do mesmo navegador (ex: aba do Professor ADM e aba do Aluno abertas juntas)
    window.addEventListener('storage', (e) => {
        if (!e || !e.key) return;
        if (e.key === STORAGE_KEY_UNLOCKED_LESSONS) {
            window.dispatchEvent(new CustomEvent('trilhando:lessonschange', { detail: { unlocked: getUnlockedLessons() } }));
            window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        } else if (e.key === STORAGE_KEY_UNLOCKED_QUIZZES) {
            window.dispatchEvent(new CustomEvent('trilhando:quizzeschange', { detail: { unlocked: getUnlockedQuizzes() } }));
            window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        } else if (e.key === STORAGE_KEY_USERS || e.key === STORAGE_KEY_SUBMISSIONS || e.key === STORAGE_KEY_ATTENDANCE) {
            window.dispatchEvent(new CustomEvent('trilhando:datasync'));
        }
    });

    // Expose public API globally
    window.TrilhandoClassroom = {
        QUIZZES_BY_LESSON,
        HOMEWORKS_BY_LESSON,
        LESSONS_SCHEDULE,
        DEFAULT_ADMINS,
        getUsers,
        saveUsers,
        getDeletedUserIds,
        saveDeletedUserIds,
        deleteStudentByAdmin,
        getSubmissions,
        saveSubmissions,
        updateHomeworkCode,
        getUnlockedLessons,
        saveUnlockedLessons,
        isLessonUnlocked,
        toggleLessonUnlocked,
        setLessonUnlocked,
        getUnlockedQuizzes,
        saveUnlockedQuizzes,
        isQuizUnlocked,
        toggleQuizUnlocked,
        setQuizUnlocked,
        getRecentUsers,
        addRecentUser,
        removeRecentUser,
        getAttendance,
        saveAttendance,
        setStudentAttendance,
        markAllAttendance,
        registerStudentByAdmin,
        resetStudentPasswordByAdmin,
        isUsernameTaken,
        normalizeName,
        normalizeUsernameKey,
        getAllChallengesProgress,
        getStudentChallenges,
        saveStudentChallengeProgress,
        getChatbotConfig,
        saveChatbotConfig,
        getCurrentUser,
        setCurrentUser,
        loginOrRegister,
        submitHomework,
        saveTutorFeedback,
        getCloudConfig,
        saveCloudConfig,
        syncToCloudAsync,
        pullFromCloudAsync,
        renderNotebookLMQuiz,
        openHomeworkModal,
        ensureSlideAuthGate
    };

    // Auto-initialize quizzes & auth gate on slide pages
    document.addEventListener('DOMContentLoaded', () => {
        ensureSlideAuthGate();
        window.addEventListener('trilhando:authchange', ensureSlideAuthGate);
        window.addEventListener('trilhando:lessonschange', ensureSlideAuthGate);
        window.addEventListener('trilhando:datasync', ensureSlideAuthGate);

        const quizEl = document.querySelector('[data-trilhando-quiz]');
        if (quizEl) {
            const lessonKey = quizEl.getAttribute('data-trilhando-quiz');
            renderNotebookLMQuiz(quizEl.id, lessonKey);
            window.addEventListener('trilhando:quizzeschange', () => {
                renderNotebookLMQuiz(quizEl.id, lessonKey);
            });
            window.addEventListener('trilhando:authchange', () => {
                renderNotebookLMQuiz(quizEl.id, lessonKey);
            });
        }

        document.addEventListener('click', (e) => {
            const hwBtn = e.target.closest('[data-open-homework]');
            if (hwBtn) {
                e.preventDefault();
                e.stopPropagation();
                const lessonKey = hwBtn.getAttribute('data-open-homework');
                openHomeworkModal(lessonKey);
            }
        });
    });
})();
