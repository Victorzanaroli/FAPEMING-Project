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

    // Cronograma oficial de aulas para a Lista de Chamada Visual (Presença por dia)
    const LESSONS_SCHEDULE = [
        { key: 'aula01', shortLabel: 'A1', label: 'Aula 01', date: '16/09', topic: 'Abertura, T0 & Prompt' },
        { key: 'aula02', shortLabel: 'A2', label: 'Aula 02', date: '23/09', topic: 'Variáveis & Condicionais (if/else)' },
        { key: 'aula03', shortLabel: 'A3', label: 'Aula 03', date: '30/09', topic: 'Erros (try/except) & Repetição' },
        { key: 'aula04', shortLabel: 'A4', label: 'Aula 04', date: '07/10', topic: 'Estruturas de Dados: Listas' },
        { key: 'aula05', shortLabel: 'A5', label: 'Aula 05', date: '14/10', topic: 'Modularização & Funções (def)' },
        { key: 'aula06', shortLabel: 'A6', label: 'Aula 06', date: '21/10', topic: 'Dicionários & Integração' },
        { key: 'aula07', shortLabel: 'A7', label: 'Aula 07', date: '28/10', topic: 'Prototipagem Mobile com Flet' },
        { key: 'aula08', shortLabel: 'A8', label: 'Aula 08', date: '04/11', topic: 'Sprint de Desenvolvimento Flet' },
        { key: 'aula09', shortLabel: 'A9', label: 'Aula 09', date: '11/11', topic: 'Polimento, Testes & Ensaio' },
        { key: 'aula10', shortLabel: 'A10', label: 'Aula 10', date: '18/11', topic: 'Feira Final, Pós-teste T1 & Certificados' }
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
                            explanation: 'O comando input() serve para o computador ESCUTAR (ler o que o usuário digita), e não apenas falar.'
                        },
                        {
                            letter: 'B',
                            text: 'print("Olá, turma!")',
                            isCorrect: true,
                            explanation: 'Exato! O comando print() é o "alto-falante" do Python: tudo que está dentro dos parênteses aparece na tela.'
                        },
                        {
                            letter: 'C',
                            text: 'mostrar("Olá, turma!")',
                            isCorrect: false,
                            explanation: 'O Python usa palavras em inglês. O comando "mostrar()" não existe por padrão na linguagem.'
                        },
                        {
                            letter: 'D',
                            text: 'if("Olá, turma!")',
                            isCorrect: false,
                            explanation: 'O comando if serve para tomar decisões (se algo acontecer), não para exibir mensagens na tela.'
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
                            text: 'O programa apaga o que estava escrito na tela e fecha sozinho.',
                            isCorrect: false,
                            explanation: 'O input() pausa o programa esperando o usuário digitar e apertar Enter, ele não fecha o programa.'
                        },
                        {
                            letter: 'C',
                            text: 'A variável "heroi" vai guardar sempre o número 0.',
                            isCorrect: false,
                            explanation: 'A variável vai guardar exatamente o texto que a pessoa digitar no terminal, e não 0.'
                        },
                        {
                            letter: 'D',
                            text: 'O Python dá erro porque variáveis não podem guardar nomes de personagens.',
                            isCorrect: false,
                            explanation: 'Variáveis podem guardar textos (strings) normalmente! Guardar nomes é um dos usos mais comuns.'
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
                            text: 'Falso! O Python adivinha sozinho que 15 é um número inteiro sem precisar do int().',
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
                            text: 'Verdadeiro, mas só quando usamos f-string no código.',
                            isCorrect: false,
                            explanation: 'O input() retorna texto (str) sempre, independentemente de ter f-string ou não no restante do código.'
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
                            text: '15',
                            isCorrect: false,
                            explanation: 'O operador + não multiplica valores, e como são dois textos ("5" e "3"), ele apenas cola um ao lado do outro ("53").'
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
                            explanation: 'O int() serve apenas para números INTEIROS (sem casas decimais, como 10 ou 25). Com 12.50 ele daria erro!'
                        },
                        {
                            letter: 'B',
                            text: 'str',
                            isCorrect: false,
                            explanation: 'O str é texto! Com texto não conseguimos somar o preço do lanche com o preço da bebida.'
                        },
                        {
                            letter: 'C',
                            text: 'float',
                            isCorrect: true,
                            explanation: 'Isso aí! O tipo float guarda números com casas decimais (usando ponto, como 12.50 ou 1.75).'
                        },
                        {
                            letter: 'D',
                            text: 'print',
                            isCorrect: false,
                            explanation: 'O print() apenas exibe valores na tela, ele não converte texto em número decimal.'
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
                            text: 'Não há diferença, os dois fazem a mesma coisa.',
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
                            text: '"==" serve apenas para textos e "=" serve apenas para números.',
                            isCorrect: false,
                            explanation: 'Tanto "=" quanto "==" funcionam para números e textos! A diferença é guardar valor (=) versus comparar (==).'
                        },
                        {
                            letter: 'D',
                            text: '"==" soma dois números e "=" subtrai.',
                            isCorrect: false,
                            explanation: 'Para somar usamos + e para subtrair usamos -. O "==" serve para comparar igualdade.'
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
                            text: 'Aparecem as duas mensagens na tela.',
                            isCorrect: false,
                            explanation: 'No if/else, o computador escolhe apenas UM caminho: ou entra no if (se verdadeiro) ou entra no else (se falso), nunca nos dois!'
                        },
                        {
                            letter: 'D',
                            text: 'Não aparece nada na tela.',
                            isCorrect: false,
                            explanation: 'Como temos um bloco else (Plano B), quando o if é falso o programa sempre executa o que está dentro do else.'
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
                            text: 'Imprime "⚠️ Recuperação!" e depois "❌ Reprovado!".',
                            isCorrect: false,
                            explanation: 'Assim que o Python encontra o primeiro elif verdadeiro, ele executa aquele bloco e ignora todo o resto!'
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
                            text: 'É só para deixar o código bonito, mas funciona igual sem o espaço.',
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
                            text: 'Para fazer o computador imprimir a frase mais rápido.',
                            isCorrect: false,
                            explanation: 'O espaço não muda a velocidade do programa; ele define a estrutura lógica de quem está dentro do bloco condicional.'
                        },
                        {
                            letter: 'D',
                            text: 'Para transformar o print() em um comentário.',
                            isCorrect: false,
                            explanation: 'Comentários em Python começam com o símbolo # (jogo da velha), e não com espaço em branco.'
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
                            explanation: 'O operador "or" (OU) deixaria entrar se apenas UMA condição fosse verdadeira (por exemplo, um bebê de 2 anos ou alguém sem a altura mínima).'
                        },
                        {
                            letter: 'C',
                            text: 'not',
                            isCorrect: false,
                            explanation: 'O operador "not" inverte um valor lógico (Verdadeiro vira Falso), não serve para juntar duas exigências.'
                        },
                        {
                            letter: 'D',
                            text: 'elif',
                            isCorrect: false,
                            explanation: 'O elif serve para criar um novo teste em outra linha, não para unir duas condições na mesma linha do if.'
                        }
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
                            text: 'vidas = print(int("Quantas vidas? "))',
                            isCorrect: false,
                            explanation: 'O print() apenas mostra mensagens na tela e não lê o teclado; além disso, int("Quantas vidas?") daria erro.'
                        },
                        {
                            letter: 'D',
                            text: 'int = vidas(input("Quantas vidas? "))',
                            isCorrect: false,
                            explanation: 'O nome da variável deve ficar à esquerda do sinal de igual: vidas = int(input(...)).'
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
                            text: 'Faz o programa fechar (finalizar) logo após o print.',
                            isCorrect: false,
                            explanation: 'O "f" vem de formatted string (texto formatado), não de finalizar o programa.'
                        },
                        {
                            letter: 'C',
                            text: 'Transforma o texto em número decimal (float).',
                            isCorrect: false,
                            explanation: 'Quem transforma em decimal é a função float(), não o "f" do print.'
                        },
                        {
                            letter: 'D',
                            text: 'Não faz diferença nenhuma; sem o "f" o resultado é idêntico.',
                            isCorrect: false,
                            explanation: 'Sem o "f", o Python imprime literalmente as chaves "{nome}" na tela em vez do nome da pessoa!'
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
                            text: 'Dá erro porque não pode ter if e elif juntos.',
                            isCorrect: false,
                            explanation: 'O elif existe justamente para trabalhar junto logo abaixo do if!'
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
                            text: '>=',
                            isCorrect: false,
                            explanation: 'O operador >= significa "maior ou igual a".'
                        },
                        {
                            letter: 'D',
                            text: '=',
                            isCorrect: false,
                            explanation: 'Um único sinal de igual (=) serve para atribuir (guardar) um valor em uma variável.'
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
                            text: 'Falso! O "or" exige que as duas condições sejam falsas.',
                            isCorrect: false,
                            explanation: 'Se as duas forem falsas, o resultado do "or" é falso e o bloco não roda.'
                        },
                        {
                            letter: 'C',
                            text: 'Falso! Precisa cumprir obrigatoriamente as duas condições ao mesmo tempo.',
                            isCorrect: false,
                            explanation: 'Quem exige as duas condições ao mesmo tempo é o operador "and", não o "or".'
                        },
                        {
                            letter: 'D',
                            text: 'Falso! O comando "or" não existe em Python.',
                            isCorrect: false,
                            explanation: 'O comando "or" existe sim e é um dos 3 operadores lógicos principais do Python (and, or, not).'
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
            lessonTag: 'AULA 03 • TRY/EXCEPT E LAÇOS (WHILE / FOR)',
            title: 'Tarefa de Casa — Aula 03: Blindagem de Erros e Repetição',
            subtitle: '5 questões rápidas sobre try/except, while e for + 1 desafio prático simples',
            dueInfo: 'Entregar antes da Aula 04',
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
                            text: 'Para repetir um bloco de código 10 vezes seguidas.',
                            isCorrect: false,
                            explanation: 'Quem repete código são os laços while e for; o try/except serve para tratamento de erros.'
                        },
                        {
                            letter: 'C',
                            text: 'Para apagar todas as variáveis do programa.',
                            isCorrect: false,
                            explanation: 'O try/except não apaga variáveis, ele protege o código contra falhas inesperadas.'
                        },
                        {
                            letter: 'D',
                            text: 'Para desligar o computador se o usuário errar a senha.',
                            isCorrect: false,
                            explanation: 'O except apenas executa o Plano B que você programou (como um print de aviso).'
                        }
                    ]
                },
                {
                    id: 'hw3_q2',
                    question: '2. Qual erro (exceção) o Python dispara quando tentamos converter a palavra "dez" para inteiro usando int("dez")?',
                    options: [
                        {
                            letter: 'A',
                            text: 'ZeroDivisionError',
                            isCorrect: false,
                            explanation: 'ZeroDivisionError só acontece quando tentamos dividir um número por zero (ex: 10 / 0).'
                        },
                        {
                            letter: 'B',
                            text: 'ValueError',
                            isCorrect: true,
                            explanation: 'Exato! ValueError significa "Erro de Valor": o tipo é texto, mas o conteúdo ("dez") não tem dígitos válidos para virar int.'
                        },
                        {
                            letter: 'C',
                            text: 'PrintError',
                            isCorrect: false,
                            explanation: 'PrintError nem existe no Python! O erro de conversão de valor é o ValueError.'
                        },
                        {
                            letter: 'D',
                            text: 'WhileError',
                            isCorrect: false,
                            explanation: 'WhileError não existe; o erro ao converter texto inválido em número é sempre ValueError.'
                        }
                    ]
                },
                {
                    id: 'hw3_q3',
                    question: '3. Quando devemos usar o laço WHILE em vez de um simples IF?',
                    code: 'while senha != "1234":\n    senha = input("Digite a senha: ")',
                    options: [
                        {
                            letter: 'A',
                            text: 'Quando queremos que o programa continue repetindo a pergunta ENQUANTO a condição for verdadeira.',
                            isCorrect: true,
                            explanation: 'Mandou muito bem! Enquanto o if testa apenas uma vez, o while repete o bloco várias vezes enquanto a condição continuar verdadeira.'
                        },
                        {
                            letter: 'B',
                            text: 'Quando queremos testar a condição apenas uma única vez.',
                            isCorrect: false,
                            explanation: 'Para testar apenas uma vez sem repetir, usamos o if.'
                        },
                        {
                            letter: 'C',
                            text: 'Apenas quando não existem variáveis no programa.',
                            isCorrect: false,
                            explanation: 'O while quase sempre usa uma variável na sua condição (como senha ou contador) para saber a hora de parar!'
                        },
                        {
                            letter: 'D',
                            text: 'Nunca, pois o while foi removido do Python.',
                            isCorrect: false,
                            explanation: 'O while é uma das estruturas mais importantes e usadas do Python!'
                        }
                    ]
                },
                {
                    id: 'hw3_q4',
                    question: '4. Quantas vezes a frase "⚡ Treinando Python!" será impressa pelo laço for abaixo?',
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
                    id: 'hw3_q5',
                    question: '5. Qual comando usamos dentro de um laço (while ou for) quando queremos PARAR e sair do loop imediatamente (por exemplo, quando o jogador acerta o número secreto)?',
                    options: [
                        {
                            letter: 'A',
                            text: 'break',
                            isCorrect: true,
                            explanation: 'Exato! O comando break ("freio / quebrar") encerra o laço na mesma hora e pula para o final do loop.'
                        },
                        {
                            letter: 'B',
                            text: 'input',
                            isCorrect: false,
                            explanation: 'O input() apenas lê dados do teclado, não encerra um loop.'
                        },
                        {
                            letter: 'C',
                            text: 'elif',
                            isCorrect: false,
                            explanation: 'O elif é uma condição intermediária do if, não um comando de parada de loop.'
                        },
                        {
                            letter: 'D',
                            text: 'float',
                            isCorrect: false,
                            explanation: 'O float() converte valores para números decimais.'
                        }
                    ]
                }
            ],
            practicalTask: {
                title: '💻 Desafio Prático da Aula 03: Jogo da Adivinhação ou Cofre Blindado',
                description: 'Escolha UMA das opções abaixo, teste no VS Code (PC) ou Pydroid 3 (Celular) usando while/for e try/except, e cole seu código abaixo!',
                options: [
                    {
                        badge: '🎯 Opção 1: Jogo da Adivinhação com 3 Chances',
                        text: 'Guarde um número secreto (ex: secreto = 7). Use um laço for ou while para dar 3 tentativas ao jogador. Use try/except ValueError para não quebrar se ele digitar letras, e if/else para dizer se ele acertou (usando break) ou errou!'
                    },
                    {
                        badge: '🏧 Opção 2: Caixa Eletrônico / Cofre Blindado',
                        text: 'Comece com saldo = 100. Use um while para perguntar quanto o usuário quer sacar, protegendo com try/except ValueError. Se o saque for menor ou igual ao saldo, desconte e mostre o novo saldo; se for maior, avise "Saldo insuficiente!".'
                    }
                ],
                starterHint: '# Exemplo de começo (Jogo da Adivinhação):\nsecreto = 7\n\nfor tentativa in range(1, 4):\n    try:\n        chute = int(input(f"Tentativa {tentativa}/3 - Qual é o número secreto (1 a 10)? "))\n        if chute == secreto:\n            print("🎉 Parabéns! Você acertou em cheio!")\n            break\n        else:\n            print("❌ Ainda não! Tente de novo.")\n    except ValueError:\n        print("⚠️ Ops! Digite apenas números inteiros!")'
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

    function getCloudConfig() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_CLOUD);
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return { supabaseUrl: '', supabaseKey: '', enabled: false };
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
        users = users.filter(u => u && u.role !== 'admin' && !deletedIds.has(u.id));
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
        const norm = normalizeName(cleanName);

        if (!cleanName || cleanName.length < 3) {
            return { ok: false, error: 'Digite o Nome Completo do aluno (pelo menos 3 letras).' };
        }
        const users = getUsers();
        const existing = users.find(u => normalizeName(u.fullName) === norm);
        if (existing) {
            return { ok: false, error: 'Este aluno já está cadastrado na turma!' };
        }
        const now = new Date().toISOString();
        const newStudent = {
            id: 'stu_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
            fullName: cleanName,
            password: cleanPass,
            role: 'student',
            attendance: {},
            createdAt: now,
            updatedAt: now
        };
        users.push(newStudent);
        saveUsers(users);
        return { ok: true, user: newStudent };
    }

    function getCurrentUser() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_SESSION);
            if (raw) {
                const u = JSON.parse(raw);
                if (u && u.role !== 'admin') {
                    const deletedIds = new Set(getDeletedUserIds());
                    if (deletedIds.has(u.id)) {
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
            localStorage.removeItem(STORAGE_KEY_SESSION);
        } else {
            localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(user));
        }
        window.dispatchEvent(new CustomEvent('trilhando:authchange', { detail: { user } }));
    }

    async function pushStateDirectToCloudAsync() {
        const cfg = getCloudConfig();
        if (!cfg.enabled || !cfg.supabaseUrl || !cfg.supabaseKey) return false;
        try {
            const payload = {
                id: 'main_state',
                users_json: getUsers(),
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
            const res = await fetch(`${cfg.supabaseUrl}/rest/v1/trilhando_sync?id=eq.main_state&select=*`, {
                headers: {
                    'apikey': cfg.supabaseKey,
                    'Authorization': `Bearer ${cfg.supabaseKey}`
                }
            });
            if (!res.ok) return false;
            const rows = await res.json();
            if (rows && rows.length > 0) {
                const remote = rows[0];
                if (Array.isArray(remote.users_json)) {
                    const mergedUsers = mergeUsersWithAttendance(getUsers(), remote.users_json);
                    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(mergedUsers));
                    // Rebuild attendance map from merged users
                    const att = getAttendance();
                    localStorage.setItem(STORAGE_KEY_ATTENDANCE, JSON.stringify(att));
                }
                if (Array.isArray(remote.submissions_json)) {
                    const mergedSubs = mergeById(getSubmissions(), remote.submissions_json, 'id');
                    localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(mergedSubs));
                }
                if (!silent) {
                    window.dispatchEvent(new CustomEvent('trilhando:datasync'));
                }
                return true;
            }
        } catch (err) {
            console.warn('Cloud pull warning:', err);
        }
        return false;
    }

    function mergeUsersWithAttendance(localUsers, remoteUsers) {
        const deletedIds = new Set(getDeletedUserIds());
        const map = new Map();
        localUsers.forEach(u => {
            if (u && !deletedIds.has(u.id)) map.set(u.id, Object.assign({}, u));
        });
        remoteUsers.forEach(rem => {
            if (!rem || deletedIds.has(rem.id)) return;
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
                const newer = (rem.updatedAt && (!loc.updatedAt || rem.updatedAt >= loc.updatedAt)) ? rem : loc;
                map.set(rem.id, Object.assign({}, newer, { attendance: mergedAtt }));
            }
        });
        return Array.from(map.values());
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
    // AUTHENTICATION API (LOGIN AUTOMÁTICO = CADASTRO NA CHAMADA)
    // =========================================================================

    function loginOrRegister({ fullName, password, mode }) {
        const cleanName = String(fullName || '').trim().replace(/\s+/g, ' ');
        const cleanPass = String(password || '').trim();
        const norm = normalizeName(cleanName);

        if (!cleanName || cleanName.length < 3) {
            return { ok: false, error: 'Por favor, digite seu Nome Completo.' };
        }
        if (!cleanPass || cleanPass.length < 3) {
            return { ok: false, error: 'A senha precisa ter pelo menos 3 caracteres.' };
        }

        const users = getUsers();
        const existing = users.find(u =>
            normalizeName(u.fullName) === norm ||
            (u.username && normalizeName(u.username) === norm)
        );

        // Se selecionou modo ADM explicitamente
        if (mode === 'admin') {
            const adm = users.find(u =>
                u.role === 'admin' && (
                    normalizeName(u.fullName) === norm ||
                    (u.username && normalizeName(u.username) === norm)
                )
            );
            if (!adm) {
                return { ok: false, error: 'Usuário de Administrador inválido. Use "Trilhando o Caminho do Código" (ou "trilhando-adm").' };
            }
            if (adm.password !== cleanPass) {
                return { ok: false, error: 'Senha de Administrador incorreta!' };
            }
            setCurrentUser(adm);
            return { ok: true, user: adm, isNew: false, message: 'Login de Administrador realizado!' };
        }

        // Fluxo unificado do Aluno (e também reconhece ADM caso digite as credenciais de ADM):
        // Se já existe na lista de chamada/usuários, valida a senha e entra.
        if (existing) {
            if (existing.password === cleanPass) {
                setCurrentUser(existing);
                return { ok: true, user: existing, isNew: false, message: 'Bem-vindo(a) de volta!' };
            }
            return {
                ok: false,
                error: 'Já existe um aluno com esse Nome Completo, mas a senha informada está incorreta. Digite a senha criada no seu 1º acesso ou peça ajuda ao professor.'
            };
        }

        // Se ainda não existe, ao fazer o login o aluno já é cadastrado automaticamente na turma e na Lista de Chamada!
        if (!cleanName.includes(' ')) {
            return {
                ok: false,
                error: 'Digite seu Nome Completo (nome e sobrenome, ex: Lucas Almeida) para registrarmos você na lista de chamada!'
            };
        }

        const now = new Date().toISOString();
        const newUser = {
            id: 'stu_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
            fullName: cleanName,
            password: cleanPass,
            role: 'student',
            attendance: {},
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
            message: 'Login realizado! Você já foi cadastrado automaticamente na lista de chamada da turma!'
        };
    }

    function submitHomework(lessonKey, answersMap, practicalCode, studentComment) {
        const user = getCurrentUser();
        if (!user) {
            return { ok: false, error: 'Você precisa entrar com seu Nome Completo e Senha antes de enviar a tarefa.' };
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

    function renderNotebookLMQuiz(containerId, lessonKey) {
        const container = document.getElementById(containerId);
        const quizData = QUIZZES_BY_LESSON[lessonKey];
        if (!container || !quizData) return;

        let currentIdx = 0;
        // Track selected option per question: { [questionId]: 'A' | 'B' | 'C' | 'D' }
        const selectedAnswers = {};

        function renderCurrentQuestion() {
            const total = quizData.questions.length;
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
                    <button type="button" class="nb-quiz-option ${cardStateClass}" data-letter="${opt.letter}">
                        <div class="nb-opt-main">
                            <span class="nb-opt-letter">${opt.letter}</span>
                            <span class="nb-opt-text">${escapeHtml(opt.text)}</span>
                        </div>
                        ${feedbackBadgeHtml}
                        ${explanationHtml}
                    </button>
                `;
            }).join('');

            container.innerHTML = `
                <div class="nb-quiz-shell">
                    <!-- Top Header bar like NotebookLM -->
                    <div class="nb-quiz-topbar">
                        <div class="nb-quiz-meta">
                            <span class="nb-quiz-pill">🧠 QUIZ INTERATIVO • NOTEBOOK LM MODE</span>
                            <span class="nb-quiz-topic">${escapeHtml(q.topic || '')}</span>
                        </div>
                        <div class="nb-quiz-stats">
                            <span class="nb-stat-badge">✨ Acertos: <strong>${rightCount}</strong> / ${answeredCount}</span>
                            <button type="button" class="nb-reset-btn" id="${containerId}_resetBtn" title="Reiniciar Quiz">🔄 Reiniciar</button>
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
            container.querySelectorAll('.nb-quiz-option').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const letter = btn.getAttribute('data-letter');
                    selectedAnswers[q.id] = letter;
                    renderCurrentQuestion();
                });
            });

            container.querySelectorAll('.nb-quiz-dot').forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentIdx = parseInt(dot.getAttribute('data-qidx'), 10);
                    renderCurrentQuestion();
                });
            });

            const prevQBtn = document.getElementById(`${containerId}_prevQ`);
            const nextQBtn = document.getElementById(`${containerId}_nextQ`);
            const resetBtn = document.getElementById(`${containerId}_resetBtn`);

            if (prevQBtn) {
                prevQBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (currentIdx > 0) {
                        currentIdx--;
                        renderCurrentQuestion();
                    }
                });
            }
            if (nextQBtn) {
                nextQBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (currentIdx < total - 1) {
                        currentIdx++;
                        renderCurrentQuestion();
                    }
                });
            }
            if (resetBtn) {
                resetBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    Object.keys(selectedAnswers).forEach(k => delete selectedAnswers[k]);
                    currentIdx = 0;
                    renderCurrentQuestion();
                });
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

            const questionsHtml = hw.questions.map((q, qIndex) => {
                const picked = draftAnswers[q.id] || null;
                const isSubmitted = Boolean(existingSub);

                const optsHtml = q.options.map(opt => {
                    const isSelected = picked === opt.letter;
                    let optStatusClass = isSelected ? 'tr-hw-opt-selected' : '';
                    let explanationBlock = '';

                    if (isSubmitted) {
                        if (opt.isCorrect) {
                            optStatusClass = 'tr-hw-opt-correct';
                            explanationBlock = `<div class="nb-opt-explanation nb-exp-correct"><strong>✅ Correta:</strong> ${escapeHtml(opt.explanation)}</div>`;
                        } else if (isSelected && !opt.isCorrect) {
                            optStatusClass = 'tr-hw-opt-wrong';
                            explanationBlock = `<div class="nb-opt-explanation nb-exp-wrong"><strong>❌ Por que está errada:</strong> ${escapeHtml(opt.explanation)}</div>`;
                        }
                    }

                    return `
                        <button type="button" class="tr-hw-opt-btn ${optStatusClass}" data-qid="${q.id}" data-letter="${opt.letter}">
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
                            ${isSubmitted ? (
                                (q.options.find(o => o.letter === picked && o.isCorrect))
                                    ? '<span class="nb-feedback-pill nb-pill-correct">✅ Você Acertou</span>'
                                    : '<span class="nb-feedback-pill nb-pill-wrong">❌ Você Errou (Veja a explicação abaixo)</span>'
                            ) : ''}
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

                        ${existingSub && existingSub.tutorFeedback ? `
                            <div class="tr-tutor-feedback-banner">
                                <strong>💬 Comentário do Professor na sua atividade:</strong>
                                <p>${escapeHtml(existingSub.tutorFeedback)}</p>
                            </div>
                        ` : ''}

                        <div class="tr-hw-section-title">
                            <span>📋 PARTE 1 — Questionário Rápido (5 Questões de Múltipla Escolha)</span>
                            <small>Marque uma alternativa em cada questão. Após enviar, o gabarito comentado é liberado!</small>
                        </div>

                        <div class="tr-hw-questions-container">
                            ${questionsHtml}
                        </div>

                        <div class="tr-hw-section-title" style="margin-top:28px;">
                            <span>💻 PARTE 2 — Prática de Código (PC / VS Code ou Celular / Pydroid 3)</span>
                            <small>Sem correção automática: teste seu código primeiro e cole ele aqui como comentário para corrigirmos na próxima aula!</small>
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

                            <label class="tr-field-label" for="trHwPracticalCode">📥 Cole seu Código Python abaixo (depois de testar no PC ou Pydroid 3):</label>
                            <textarea id="trHwPracticalCode" class="tr-code-textarea" rows="8" placeholder="# Cole aqui o código Python que você fez e testou...\nnome = input('Digite seu nome: ')\nprint(f'Olá, {nome}!')">${escapeHtml(draftCode)}</textarea>

                            <label class="tr-field-label" for="trHwStudentComment" style="margin-top:12px;">💬 Comentário ou Dúvida sobre a Prática (opcional):</label>
                            <input type="text" id="trHwStudentComment" class="tr-input" placeholder="Ex: Fiz pelo celular no Pydroid 3 e funcionou certinho! / Tive dúvida no elif..." value="${escapeHtml(draftComment)}">
                        </div>

                        <div id="trHwSubmitStatusBox"></div>
                    </div>

                    <div class="tr-hw-modal-footer">
                        <span style="font-size:0.8rem;color:#94a3b8;">
                            ${existingSub ? '✅ Você já enviou esta tarefa! Pode atualizar sua resposta se quiser.' : '📌 Responda as 5 questões e cole seu código prático antes de enviar.'}
                        </span>
                        <div style="display:flex;gap:12px;">
                            <button type="button" class="tr-btn-ghost" id="trHwCancelBtn">Fechar</button>
                            <button type="button" class="tr-btn-primary" id="trHwSubmitFinalBtn">
                                🚀 ${existingSub ? 'Atualizar Envio da Tarefa' : 'Enviar Tarefa e Ver Nota'}
                            </button>
                        </div>
                    </div>
                </div>
            `;

            modal.classList.add('active');

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

            // Option selection
            modal.querySelectorAll('.tr-hw-opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const qid = btn.getAttribute('data-qid');
                    const letter = btn.getAttribute('data-letter');
                    draftAnswers[qid] = letter;
                    renderModalContent();
                });
            });

            // Final Submit
            const submitBtn = document.getElementById('trHwSubmitFinalBtn');
            if (submitBtn) {
                submitBtn.addEventListener('click', () => {
                    const statusBox = document.getElementById('trHwSubmitStatusBox');
                    const currUser = getCurrentUser();
                    if (!currUser) {
                        if (statusBox) {
                            statusBox.innerHTML = `<div class="tr-auth-alert">⚠️ Role até o topo da janela e digite seu <strong>Nome Completo e Senha</strong> para identificar sua tarefa!</div>`;
                        }
                        return;
                    }

                    const unanswered = hw.questions.filter(q => !draftAnswers[q.id]);
                    if (unanswered.length > 0) {
                        if (statusBox) {
                            statusBox.innerHTML = `<div class="tr-auth-alert">⚠️ Você ainda precisa marcar uma alternativa em ${unanswered.length} questão(ões) antes de enviar!</div>`;
                        }
                        return;
                    }

                    if (!draftCode || draftCode.trim().length < 5) {
                        if (statusBox) {
                            statusBox.innerHTML = `<div class="tr-auth-alert">⚠️ Não esqueça de colar seu código Python do desafio prático na Parte 2!</div>`;
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

        let gate = document.getElementById('trSlideAuthGate');
        const user = getCurrentUser();

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

        let gateMode = 'student';
        let gateError = '';

        function renderGate() {
            gate.innerHTML = `
                <div class="tr-hw-modal-card" style="max-width:480px;padding:28px;border-radius:22px;">
                    <span class="tr-badge-cyan">🔐 LOGIN OBRIGATÓRIO • TRILHANDO CLASSROOM</span>
                    <h2 style="font-size:1.35rem;color:#fff;margin-top:10px;margin-bottom:6px;">Identifique-se para ver os Slides</h2>
                    <p style="font-size:0.84rem;color:#94a3b8;line-height:1.5;margin-bottom:16px;">
                        Digite seu <strong>Nome Completo e Senha</strong>. Ao entrar pela 1ª vez, você já é cadastrado automaticamente na lista de chamada!
                    </p>

                    <div class="tr-auth-tabs" style="margin-bottom:16px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
                        <button type="button" class="tr-auth-tab ${gateMode === 'student' ? 'active' : ''}" data-gmode="student">🎓 Sou Aluno(a)</button>
                        <button type="button" class="tr-auth-tab ${gateMode === 'admin' ? 'active' : ''}" data-gmode="admin">🛡️ Professor (ADM)</button>
                    </div>

                    <div style="display:flex;flex-direction:column;gap:12px;">
                        <div>
                            <label class="tr-field-label">${gateMode === 'admin' ? 'Usuário ADM da Equipe:' : 'Seu Nome Completo (Nome e Sobrenome):'}</label>
                            <input type="text" id="trSlideGateName" class="tr-input" placeholder="${gateMode === 'admin' ? 'Trilhando o Caminho do Código' : 'Ex: Lucas Almeida Santos'}" autocomplete="name">
                        </div>
                        <div>
                            <label class="tr-field-label">Sua Senha:</label>
                            <input type="password" id="trSlideGatePass" class="tr-input" placeholder="${gateMode === 'admin' ? 'Senha de Administrador' : 'Crie ou digite sua senha'}" autocomplete="current-password">
                        </div>
                        ${gateError ? `<div class="tr-auth-alert">⚠️ ${escapeHtml(gateError)}</div>` : ''}
                        <button type="button" id="trSlideGateSubmit" class="tr-btn-primary" style="width:100%;padding:12px;margin-top:4px;font-size:0.92rem;">
                            🚀 Entrar e Liberar Slides
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

            const nameInp = document.getElementById('trSlideGateName');
            const passInp = document.getElementById('trSlideGatePass');
            const submitBtn = document.getElementById('trSlideGateSubmit');

            const handleLogin = () => {
                const res = loginOrRegister({
                    fullName: nameInp ? nameInp.value : '',
                    password: passInp ? passInp.value : '',
                    mode: gateMode
                });
                if (!res.ok) {
                    gateError = res.error;
                    renderGate();
                } else {
                    gate.remove();
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

    // Pull latest data from cloud on startup if configured
    pullFromCloudAsync();

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
        getAttendance,
        saveAttendance,
        setStudentAttendance,
        markAllAttendance,
        registerStudentByAdmin,
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

        const quizEl = document.querySelector('[data-trilhando-quiz]');
        if (quizEl) {
            const lessonKey = quizEl.getAttribute('data-trilhando-quiz');
            renderNotebookLMQuiz(quizEl.id, lessonKey);
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
