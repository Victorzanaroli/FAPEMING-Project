import os
import time
import threading
import requests
import base64
from datetime import datetime
import streamlit as st
import google.generativeai as genai
from dotenv import load_dotenv

# Carrega variaveis de ambiente de um arquivo .env local, se existir
load_dotenv()

# ==============================================================================
# CONFIGURACAO DE PAGINA DO STREAMLIT & MODO ESCURO INSTITUCIONAL
# ==============================================================================
st.set_page_config(
    page_title="TRILHANDO O CAMINHO DO CODIGO",
    page_icon="\U0001f916",
    layout="wide"
)

# Resolucao dinamica e a prova de falhas para caminhos de imagem
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, ".."))

def get_base64_image(file_name: str) -> str:
    possible_paths = [
        os.path.join(BASE_DIR, "assets", file_name),
        os.path.join(ROOT_DIR, "assets", file_name),
        os.path.join(ROOT_DIR, "arquivos-trilhando", "Imagens", file_name),
        os.path.join(os.getcwd(), "assets", file_name),
        os.path.join(os.getcwd(), "Chat Gemini", "assets", file_name),
        file_name
    ]
    for path in possible_paths:
        if os.path.exists(path):
            try:
                with open(path, "rb") as img_file:
                    return base64.b64encode(img_file.read()).decode()
            except Exception:
                pass
    return ""

cefet_b64 = get_base64_image("logo-cefet.jpg")
fapemig_b64 = get_base64_image("logo-fapemig.jpg")

# ==============================================================================
# CSS - Replica fiel ao design de referencia (corrigido para deploy)
# ==============================================================================
st.markdown("""
<meta name="google" content="notranslate">
<style>
    /* Base */
    .stApp {
        translate: no !important;
        background-color: #0B0E14 !important;
        color: #F3F4F6 !important;
    }

    .block-container {
        padding-top: 4rem !important;
        padding-bottom: 6rem !important;
        max-width: 950px !important;
        margin-left: auto !important;
        margin-right: auto !important;
    }

    /* Cabecalho Institucional */
    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0 20px 0;
        background-color: #0B0E14;
        gap: 12px;
    }

    .cefet-card-box {
        background: #09203F;
        border: 1.5px solid #2563EB;
        box-shadow: 0 0 16px rgba(37, 99, 235, 0.45);
        border-radius: 14px;
        padding: 6px 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        min-width: 110px;
        height: 75px;
        flex-shrink: 0;
    }

    .cefet-card-box img {
        max-height: 55px;
        max-width: 120px;
        object-fit: contain;
    }

    .title-center-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-grow: 1;
        padding: 0 10px;
        min-width: 0;
    }

    .header-title-text {
        color: #38BDF8 !important;
        font-family: 'Segoe UI', system-ui, sans-serif;
        font-size: clamp(1.0rem, 2.2vw, 1.55rem) !important;
        font-weight: 800 !important;
        letter-spacing: 1.5px;
        margin: 0 auto !important;
        text-align: center !important;
        text-transform: uppercase;
        text-shadow: 0 0 18px rgba(56, 189, 248, 0.35);
        line-height: 1.2;
        word-break: break-word;
        width: 100%;
    }

    .header-subtitle-text {
        color: #94A3B8 !important;
        font-family: 'Segoe UI', system-ui, sans-serif;
        font-size: clamp(0.75rem, 1.4vw, 1.05rem) !important;
        margin: 4px auto 0 auto !important;
        text-align: center !important;
        font-weight: 400;
        width: 100%;
    }

    .fapemig-card-box {
        flex-shrink: 0;
    }

    .fapemig-card-box img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0 0 16px rgba(56, 189, 248, 0.45);
        border: 1.5px solid #38BDF8;
    }

    /* Linha Divisoria Neon */
    .neon-divider {
        height: 2px;
        background: linear-gradient(90deg, #1E3A8A 0%, #EC4899 50%, #38BDF8 100%);
        box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        margin-bottom: 25px;
    }

    /* Campo Estudante Ativo */
    div[data-testid="stTextInput"] > label {
        color: #94A3B8 !important;
        font-size: 1rem !important;
        font-weight: 600 !important;
        margin-bottom: 6px !important;
    }

    div[data-testid="stTextInput"] input {
        background-color: #1E2638 !important;
        color: #FFFFFF !important;
        border: 1px solid #334155 !important;
        border-radius: 8px !important;
        padding: 10px 14px !important;
        font-size: 1rem !important;
    }

    div[data-testid="stTextInput"] input:focus {
        border-color: #38BDF8 !important;
        box-shadow: 0 0 10px rgba(56, 189, 248, 0.3) !important;
        outline: none !important;
    }

    /* Banner Verde de Sucesso */
    .success-alert-box {
        background-color: rgba(16, 185, 129, 0.08);
        border: 1.5px solid #10B981;
        border-radius: 10px;
        padding: 12px 20px;
        color: #34D399;
        font-size: 1.05rem;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: 25px;
        box-shadow: 0 0 12px rgba(16, 185, 129, 0.15);
    }

    .success-alert-box strong {
        color: #34D399;
    }

    /* Baloes de Chat */
    [data-testid="stChatMessage"] {
        background-color: transparent !important;
        border: none !important;
        padding: 4px 0 !important;
    }

    /* Resposta do Gemini - borda roxa/azul escura igual a imagem de referencia */
    [data-testid="stChatMessage"]:has([data-testid="chatAvatarIcon-assistant"]) {
        background-color: #111827 !important;
        border: 1.5px solid #312E81 !important;
        border-radius: 12px !important;
        padding: 14px 18px !important;
        margin: 8px 0 !important;
    }

    /* Bloco de codigo dentro da resposta */
    [data-testid="stChatMessage"]:has([data-testid="chatAvatarIcon-assistant"]) pre,
    [data-testid="stChatMessage"]:has([data-testid="chatAvatarIcon-assistant"]) .stCodeBlock {
        background-color: #0D1117 !important;
        border: 1px solid #30363D !important;
        border-radius: 8px !important;
    }

    /* Input de Chat (rodape) - corrige largura no deploy */
    [data-testid="stBottom"] {
        background: linear-gradient(to top, #0B0E14 80%, transparent) !important;
        padding-bottom: 14px !important;
    }

    [data-testid="stBottom"] > div {
        max-width: 950px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }

    /* Chat input container - override todas as variantes de borda do Streamlit */
    div[data-testid="stChatInputContainer"],
    div[data-testid="stChatInputContainer"]:focus-within,
    div[data-testid="stChatInputContainer"]:focus,
    div[data-testid="stChatInputContainer"]:hover,
    div[data-testid="stChatInputContainer"]:active {
        background-color: #161B26 !important;
        border: 1px solid #2D3748 !important;
        border-radius: 28px !important;
        padding: 4px 8px !important;
        box-shadow: none !important;
        outline: none !important;
    }

    /* Override agressivo do box-shadow vermelho/laranja do Streamlit no focus */
    div[data-testid="stChatInputContainer"] * {
        box-shadow: none !important;
        outline: none !important;
    }

    div[data-testid="stChatInputContainer"] textarea {
        background-color: transparent !important;
        color: #E2E8F0 !important;
        font-size: 1rem !important;
        caret-color: #38BDF8 !important;
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
        resize: none !important;
    }

    div[data-testid="stChatInputContainer"] textarea:focus {
        border: none !important;
        box-shadow: none !important;
        outline: none !important;
    }

    div[data-testid="stChatInputContainer"] textarea::placeholder {
        color: #64748B !important;
    }

    /* Botao de enviar (seta azul) */
    div[data-testid="stChatInputContainer"] button {
        background-color: #2563EB !important;
        border-radius: 50% !important;
        color: white !important;
        border: none !important;
        box-shadow: none !important;
    }

    div[data-testid="stChatInputContainer"] button:hover {
        background-color: #1D4ED8 !important;
        box-shadow: 0 0 10px rgba(37, 99, 235, 0.5) !important;
    }

    /* ============================================================
       RESPONSIVIDADE MOBILE (telas <= 640px)
    ============================================================ */
    @media (max-width: 640px) {

        /* Container principal - padding lateral seguro */
        .block-container {
            padding-top: 3.5rem !important;
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
            padding-bottom: 5rem !important;
            max-width: 100% !important;
        }

        /* Header empilha verticalmente no mobile */
        .header-wrapper {
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
            padding: 8px 0 14px 0 !important;
        }

        /* Logos menores no mobile */
        .cefet-card-box {
            width: 110px !important;
            min-width: 90px !important;
            height: 58px !important;
            padding: 4px 10px !important;
        }

        .cefet-card-box img {
            max-height: 42px !important;
            max-width: 95px !important;
        }

        .fapemig-card-box img {
            width: 60px !important;
            height: 60px !important;
        }

        /* Titulo e subtitulo no mobile */
        .header-title-text {
            font-size: 1.15rem !important;
            letter-spacing: 0.8px !important;
        }

        .header-subtitle-text {
            font-size: 0.78rem !important;
        }

        /* Linha divisoria mais compacta */
        .neon-divider {
            margin-bottom: 16px !important;
        }

        /* Balão do Gemini - padding menor no mobile */
        [data-testid="stChatMessage"]:has([data-testid="chatAvatarIcon-assistant"]) {
            padding: 10px 12px !important;
        }

        /* Campo Estudante Ativo */
        div[data-testid="stTextInput"] input {
            font-size: 0.95rem !important;
            padding: 8px 12px !important;
        }

        /* Banner de sucesso */
        .success-alert-box {
            font-size: 0.92rem !important;
            padding: 10px 14px !important;
        }

        /* Input de chat - rodapé no mobile */
        [data-testid="stBottom"] > div {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
        }

        div[data-testid="stChatInputContainer"] textarea {
            font-size: 0.95rem !important;
        }
    }

    /* ============================================================
       TABLET (641px - 900px)
    ============================================================ */
    @media (min-width: 641px) and (max-width: 900px) {

        .block-container {
            max-width: 100% !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
        }

        .cefet-card-box {
            width: 115px !important;
            height: 65px !important;
        }

        .header-title-text {
            font-size: clamp(1.1rem, 3vw, 1.4rem) !important;
        }
    }

    /* Ocultar elementos padrao do Streamlit */
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
</style>
""", unsafe_allow_html=True)


# ==============================================================================
# RENDERIZACAO DO CABECALHO (LOGO CEFET, TITULO E LOGO FAPEMIG)
# ==============================================================================
cefet_img_html = f'<img src="data:image/jpeg;base64,{cefet_b64}">' if cefet_b64 else '<b style="color:white;">CEFET-MG</b>'
fapemig_img_html = f'<img src="data:image/jpeg;base64,{fapemig_b64}">' if fapemig_b64 else '<b style="color:white;">FAPEMIG</b>'

st.markdown(f"""
<div class="header-wrapper">
    <div class="cefet-card-box">
        {cefet_img_html}
    </div>
    <div class="title-center-box">
        <h1 class="header-title-text">TRILHANDO O CAMINHO DO CODIGO</h1>
        <p class="header-subtitle-text">Projeto de Pesquisa e Extensao CEFET-MG &amp; FAPEMIG</p>
    </div>
    <div class="fapemig-card-box">
        {fapemig_img_html}
    </div>
</div>
<div class="neon-divider"></div>
""", unsafe_allow_html=True)


# ==============================================================================
# FUNCOES DE CONFIGURACAO E WEBHOOK
# ==============================================================================
def get_config(key: str, default: str = "") -> str:
    try:
        if key in st.secrets:
            return str(st.secrets[key])
    except Exception:
        pass
    return os.getenv(key, default)


DEFAULT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe9ksgUqxMqSY8OUtDwmjwY187PPVguHBu7wHcUnOQA1eQTIg/formResponse"
DEFAULT_ENTRY_NOME = "entry.1009783107"
DEFAULT_ENTRY_PROMPT = "entry.1559793013"
DEFAULT_ENTRY_RESPOSTA = "entry.2041274618"

def send_to_google_forms(student_name: str, prompt: str, response: str):
    form_url = get_config("GOOGLE_FORM_URL", DEFAULT_FORM_URL)
    entry_nome = get_config("GOOGLE_ENTRY_NOME_ALUNO", DEFAULT_ENTRY_NOME)
    entry_prompt = get_config("GOOGLE_ENTRY_PROMPT_ALUNO", DEFAULT_ENTRY_PROMPT)
    entry_resposta = get_config("GOOGLE_ENTRY_RESPOSTA_IA", DEFAULT_ENTRY_RESPOSTA)

    def _post_request():
        if "SEU_FORM_ID_AQUI" in form_url or not form_url or not form_url.startswith("http"):
            return

        payload = {
            entry_nome: student_name,
            entry_prompt: prompt,
            entry_resposta: response
        }
        
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        
        try:
            requests.post(form_url, data=payload, headers=headers, timeout=5)
        except Exception as e:
            print(f"[Webhook Forms Log] Erro ao enviar mineracao de dados: {e}")

    threading.Thread(target=_post_request, daemon=True).start()


# Configuracao da API Gemini
api_key = get_config("GEMINI_API_KEY")

if not api_key:
    with st.sidebar:
        st.header("\U0001f511 Configuracao da API")
        api_key = st.text_input("Gemini API Key", type="password", help="Insira sua chave da API do Google AI Studio.")
        st.info("Para salvar permanentemente, configure em `.env` ou em `.streamlit/secrets.toml`.")

if not api_key:
    st.error("\u26a0\ufe0f Chave de API do Gemini nao encontrada! Por favor, insira a chave na barra lateral ou configure o ambiente.")
    st.stop()

genai.configure(api_key=api_key)


# ==============================================================================
# CONTROLE DE INTERFACE (UI) - "ESTUDANTE ATIVO"
# ==============================================================================
student_name = st.text_input(
    label="Estudante Ativo:",
    placeholder="Digite seu nome completo aqui para liberar o chat...",
    key="student_name_input"
).strip()

is_student_identified = bool(student_name)

if not is_student_identified:
    st.warning("\U0001f512 Por favor, informe seu nome no campo 'Estudante Ativo' acima para liberar o chat.")
else:
    st.markdown(f"""
    <div class="success-alert-box">
        \u2705 Bem-vindo(a), <strong>{student_name}</strong>! Seu chat esta liberado.
    </div>
    """, unsafe_allow_html=True)


# ==============================================================================
# CEREBRO E PERSONALIDADE DO MODELO (GEMINI 3.8 / FLASH)
# ==============================================================================
SYSTEM_INSTRUCTION = """
Voce e o GEMINI-1.5-FLASH, assistente virtual e tutor especialista do projeto "TRILHANDO O CAMINHO DO CODIGO".

SUA MISSAO E DIRETRIA DE RESPOSTA INTELIGENTE:

1. DISTINCAO INTELIGENTE DO CONTEXTO:
   - Se a pergunta do aluno for CONCEITUAL, TEORICA ou UMA DUVIDA GERAL (ex: "o que e uma variavel?", "como funciona o Flet?", "o que e um loop?"):
     -> Responda de forma clara, didatica, concisa e explicativa, SEM incluir blocos de codigo desnecessarios no final.
   
   - Se a pergunta do aluno pedir CODIGO, EXEMPLO PRATICO, IMPLEMENTACAO ou COMO PROGRAMAR ALGO (ex: "como criar um botao no Flet?", "faca o jogo da cobrinha", "me de um exemplo de codigo"):
     -> Forneca a explicacao e inclua o CODIGO COMPLETO, limpo e pronto para ser executado (em blocos ```python), incluindo todos os imports e funcoes necessarias.

2. TOM DE VOZ:
   - Responda sempre com tom didatico, profissional, encorajador, claro e direto.
"""

GENERATION_CONFIG = {
    "temperature": 0.2,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 2048,
}

@st.cache_resource
def get_generative_model():
    candidatos = ["gemini-3.1-flash-lite", "gemini-3.5-flash-lite", "gemini-3.8-flash"]
    for m_name in candidatos:
        try:
            return genai.GenerativeModel(
                model_name=m_name,
                generation_config=GENERATION_CONFIG,
                system_instruction=SYSTEM_INSTRUCTION
            )
        except Exception:
            continue
    return genai.GenerativeModel(
        model_name="gemini-3.1-flash-lite",
        generation_config=GENERATION_CONFIG,
        system_instruction=SYSTEM_INSTRUCTION
    )

model = get_generative_model()

# ==============================================================================
# CHAMADA COM RETRY AUTOMATICO E BACKOFF PROGRESSIVO (ERRO 429 / QUOTA)
# ==============================================================================
def generate_response_with_retry(chat_session, prompt: str, max_retries: int = 4):
    """
    Envia a mensagem para a API do Gemini com sistema de Espera Automatica (Retry com Backoff).
    Lida com limites de requisicoes (429 / Quota / Resource Exhausted) pausando progressivamente.
    """
    retries = 0
    backoff_times = [5, 10, 15, 20]
    status_placeholder = st.empty()

    while retries <= max_retries:
        try:
            response = chat_session.send_message(prompt)
            status_placeholder.empty()
            return response.text
        except Exception as e:
            err_str = str(e).lower()
            is_quota_error = any(kw in err_str for kw in ["429", "quota", "resource exhausted", "resourceexhausted"])

            if is_quota_error:
                if retries < max_retries:
                    wait_time = backoff_times[retries] if retries < len(backoff_times) else 15
                    retries += 1
                    status_placeholder.info(f"\u23f3 A IA esta ocupada com a turma! Aguardando {wait_time}s para tentar novamente (tentativa {retries} de {max_retries})...")
                    time.sleep(wait_time)
                else:
                    status_placeholder.empty()
                    st.warning("A IA est\u00e1 processando muitos c\u00f3digos da turma. Aguarde um minuto e tente enviar novamente.")
                    return None
            else:
                status_placeholder.empty()
                st.error(f"Erro ao processar resposta da IA: {e}")
                return None

    status_placeholder.empty()
    return None

# ==============================================================================
# MEMORIA DE SESSAO & EXIBICAO DO CHAT
# ==============================================================================
if "chat_session" not in st.session_state:
    st.session_state.chat_session = model.start_chat(history=[])

for message in st.session_state.chat_session.history:
    if message.role == "user":
        with st.chat_message("user"):
            st.markdown(message.parts[0].text)
    else:
        with st.chat_message("assistant", avatar="\U0001f916"):
            st.markdown(f"**\U0001f916 GEMINI IA**")
            st.markdown(message.parts[0].text)

# Input de mensagens do usuario
prompt = st.chat_input(
    placeholder="Digite sua duvida de Python ou peca um codigo em Flet...",
    disabled=not is_student_identified
)

if prompt:
    with st.chat_message("user"):
        st.markdown(prompt)

    with st.chat_message("assistant", avatar="\U0001f916"):
        with st.spinner("\U0001f916 GEMINI IA gerando a resposta..."):
            response_text = generate_response_with_retry(st.session_state.chat_session, prompt)

        if response_text:
            st.markdown(f"**\U0001f916 GEMINI-1.5-FLASH**")
            st.markdown(response_text)
            
            # MINERACAO DE DADOS (WEBHOOK INVISIVEL EM BACKGROUND)
            send_to_google_forms(
                student_name=student_name,
                prompt=prompt,
                response=response_text
            )
