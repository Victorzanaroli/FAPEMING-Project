import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

def create_sintec_trilhando_deck():
    prs = Presentation()
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.500)
    blank_layout = prs.slide_layouts[6] # blank layout

    # =========================================================================
    # PALETA DE CORES OFICIAL (Idêntica aos slides HTML: slides-style.css)
    # Azul predominante CEFET-MG & FAPEMIG + Tipografia de Alto Contraste
    # =========================================================================
    BG_PRIMARY    = RGBColor(11, 19, 41)       # #0B1329 - Azul Cósmico Profundo (Fundo Principal)
    BG_SECONDARY  = RGBColor(15, 23, 42)       # #0F172A - Slate Navy dos Cartões
    CARD_BG       = RGBColor(15, 23, 42)       # #0F172A - Fundo dos Cards
    CARD_BG_HOVER = RGBColor(22, 34, 61)       # #16223D - Azul Interativo / Destaque
    CARD_BORDER   = RGBColor(37, 99, 235)      # #2563EB - Borda Azul CEFET
    BORDER_CYAN   = RGBColor(0, 229, 255)      # #00E5FF - Ciano Neon (Glow)
    BORDER_MUTED  = RGBColor(30, 41, 59)       # #1E293B - Borda Sutil
    BORDER_BLUE   = RGBColor(37, 99, 235)      # #2563EB - Azul Borda Visível

    # Tipografia calibrada para máxima legibilidade em apresentação / telão
    TEXT_WHITE    = RGBColor(255, 255, 255)    # #FFFFFF - Branco Puro de Alto Contraste
    TEXT_LIGHT    = RGBColor(241, 245, 249)    # #F1F5F9 - Branco Neve Claro (Leitura Confortável)
    TEXT_SILVER   = RGBColor(226, 232, 240)    # #E2E8F0 - Prata Claro (Substitui o cinza apagado)
    TEXT_MUTED    = RGBColor(203, 213, 225)    # #CBD5E1 - Cinza Claro Legível
    TEXT_CYAN     = RGBColor(0, 229, 255)      # #00E5FF - Destaque Ciano
    TEXT_CODE     = RGBColor(226, 232, 240)    # #E2E8F0 - Monospace Claro

    CEFET_BLUE    = RGBColor(37, 99, 235)      # #2563EB - Azul Real Predominante
    CEFET_CYAN    = RGBColor(0, 229, 255)      # #00E5FF - Ciano Vibrante
    CEFET_TEAL    = RGBColor(0, 173, 181)      # #00ADB5 - Verde-Azulado
    CEFET_GOLD    = RGBColor(255, 184, 0)      # #FFB800 - Ouro / Âmbar
    CEFET_GREEN   = RGBColor(16, 185, 129)     # #10B981 - Verde Esmeralda
    CEFET_PURPLE  = RGBColor(139, 92, 246)     # #8B5CF6 - Roxo Vibrante
    CEFET_PINK    = RGBColor(236, 72, 153)     # #EC4899 - Rosa Neon

    CHIP_BG       = RGBColor(255, 255, 255)    # Branco para badges de logos institucionais

    FONT_MAIN = "Segoe UI"
    FONT_CODE = "Consolas"

    # Caminhos oficiais das imagens e logos
    logo_sintec      = "assets/sintec/sintec-logo.png"
    logo_cefet       = "assets/sintec/image1.png"
    logo_bsi         = "assets/sintec/image2.png"
    logo_site        = "assets/sintec/image8.png"
    logo_dedc        = "assets/sintec/image6.png"
    logo_porto       = "assets/sintec/image7.png"
    logo_nascente    = "assets/sintec/image5.png"
    logo_trens       = "assets/sintec/image4.png"
    logo_sebrae      = "assets/sintec/image3.png"
    logo_fapemig     = "arquivos-trilhando/Imagens/logo-fapemig.jpg"
    logo_cefet_alt   = "arquivos-trilhando/Imagens/logo-cefet.jpg"
    img_showcase     = "assets/trilhando/trilhando_showcase.jpg"

    # =========================================================================
    # FUNÇÕES DE DESIGN DO SISTEMA (Idêntico aos slides HTML)
    # =========================================================================
    def apply_slide_background(slide):
        """Aplica o fundo azul cósmico predominante (#0B1329) com linha de glow superior."""
        bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.500))
        bg.fill.solid()
        bg.fill.fore_color.rgb = BG_PRIMARY
        bg.line.fill.background()

        # Orbs decorativos sutis no fundo (simulando glow-orb-1 e glow-orb-2 do CSS)
        orb1 = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(-1.5), Inches(-1.5), Inches(5.0), Inches(5.0))
        orb1.fill.solid()
        orb1.fill.fore_color.rgb = RGBColor(17, 36, 77)
        orb1.line.fill.background()

        orb2 = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(10.5), Inches(4.5), Inches(4.5), Inches(4.5))
        orb2.fill.solid()
        orb2.fill.fore_color.rgb = RGBColor(13, 30, 60)
        orb2.line.fill.background()

        # Linha superior com gradiente luminoso
        seg_w = 13.333 / 4.0
        line_colors = [CEFET_CYAN, CEFET_BLUE, CEFET_PURPLE, CEFET_CYAN]
        for i, c in enumerate(line_colors):
            r = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(i * seg_w), 0, Inches(seg_w + 0.05), Inches(0.06))
            r.fill.solid()
            r.fill.fore_color.rgb = c
            r.line.fill.background()

    def add_slide_header(slide, step_text, title_text, subtitle_text):
        """Cabeçalho com tipografia de alto impacto e legibilidade."""
        # Badge Pill Superior (ex: ⚡ SLIDE 02 • OBJETIVOS)
        badge_w = Inches(len(step_text) * 0.10 + 1.1)
        if badge_w < Inches(3.8):
            badge_w = Inches(3.8)
        badge = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), Inches(0.35), badge_w, Inches(0.32))
        badge.fill.solid()
        badge.fill.fore_color.rgb = RGBColor(14, 30, 58)
        badge.line.color.rgb = BORDER_CYAN
        badge.line.width = Pt(1.5)
        p = badge.text_frame.paragraphs[0]
        p.text = f"⚡ {step_text}"
        p.font.name = FONT_MAIN
        p.font.size = Pt(9)
        p.font.bold = True
        p.font.color.rgb = CEFET_CYAN
        p.alignment = PP_ALIGN.CENTER
        badge.text_frame.vertical_anchor = MSO_ANCHOR.MIDDLE

        # Título Principal do Slide (Branco puro, negrito aumentado para 24pt)
        t_box = slide.shapes.add_textbox(Inches(0.70), Inches(0.70), Inches(11.933), Inches(0.58))
        tf = t_box.text_frame
        tf.word_wrap = True
        tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
        p = tf.paragraphs[0]
        p.text = title_text
        p.font.name = FONT_MAIN
        p.font.size = Pt(24)
        p.font.bold = True
        p.font.color.rgb = TEXT_WHITE

        # Subtítulo (Branco suave claro #F1F5F9 aumentado para 12.5pt)
        s_box = slide.shapes.add_textbox(Inches(0.70), Inches(1.28), Inches(11.933), Inches(0.36))
        stf = s_box.text_frame
        stf.word_wrap = True
        stf.margin_left = stf.margin_top = stf.margin_right = stf.margin_bottom = 0
        p = stf.paragraphs[0]
        p.text = subtitle_text
        p.font.name = FONT_MAIN
        p.font.size = Pt(12.5)
        p.font.color.rgb = TEXT_SILVER

    def add_slide_footer(slide, current_slide, total_slides=8):
        """Rodapé escuro e discreto, preservando o azul predominante com dados claros."""
        y_pos = Inches(7.05)
        
        line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.70), y_pos, Inches(11.933), Inches(0.015))
        line.fill.solid()
        line.fill.fore_color.rgb = RGBColor(30, 58, 138)
        line.line.fill.background()

        t_box = slide.shapes.add_textbox(Inches(0.70), y_pos + Inches(0.05), Inches(8.5), Inches(0.30))
        tf = t_box.text_frame
        tf.margin_left = tf.margin_top = 0
        p = tf.paragraphs[0]
        p.text = "⚡ II SINTEC 2026 • CEFET-MG & FAPEMIG • Trilhando o Caminho do Código"
        p.font.name = FONT_MAIN
        p.font.size = Pt(9.5)
        p.font.color.rgb = TEXT_MUTED

        c_box = slide.shapes.add_textbox(Inches(10.50), y_pos + Inches(0.05), Inches(2.133), Inches(0.30))
        ctf = c_box.text_frame
        ctf.margin_right = ctf.margin_top = 0
        p2 = ctf.paragraphs[0]
        p2.text = f"SLIDE {current_slide:02d} / {total_slides:02d}"
        p2.font.name = FONT_CODE
        p2.font.size = Pt(9.5)
        p2.font.bold = True
        p2.font.color.rgb = CEFET_CYAN
        p2.alignment = PP_ALIGN.RIGHT

    # =========================================================================
    # SLIDE 1: CAPA
    # =========================================================================
    slide1 = prs.slides.add_slide(blank_layout)
    apply_slide_background(slide1)

    sintec_card = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), Inches(0.38), Inches(2.70), Inches(1.18))
    sintec_card.fill.solid()
    sintec_card.fill.fore_color.rgb = CHIP_BG
    sintec_card.line.color.rgb = BORDER_CYAN
    sintec_card.line.width = Pt(1.5)
    if os.path.exists(logo_sintec):
        slide1.shapes.add_picture(logo_sintec, Inches(0.85), Inches(0.48), height=Inches(0.95))

    info_box = slide1.shapes.add_textbox(Inches(3.65), Inches(0.38), Inches(8.98), Inches(1.20))
    itf = info_box.text_frame
    itf.word_wrap = True
    itf.margin_left = itf.margin_top = 0

    p1 = itf.paragraphs[0]
    p1.text = "SIMPÓSIO DE INOVAÇÃO, TECNOLOGIA, EMPREENDEDORISMO E CIÊNCIAS COMPUTACIONAIS"
    p1.font.name = FONT_MAIN
    p1.font.size = Pt(12)
    p1.font.bold = True
    p1.font.color.rgb = CEFET_CYAN

    p2 = itf.add_paragraph()
    p2.text = "II SINTEC 2026 • CEFET-MG & FAPEMIG"
    p2.font.name = FONT_MAIN
    p2.font.size = Pt(11)
    p2.font.bold = True
    p2.font.color.rgb = TEXT_WHITE
    p2.space_before = Pt(3)

    p3 = itf.add_paragraph()
    p3.text = "Apresentação Oral de Projeto de Extensão Universitária & Pesquisa"
    p3.font.name = FONT_MAIN
    p3.font.size = Pt(10)
    p3.font.color.rgb = TEXT_SILVER
    p3.space_before = Pt(3)

    title_box = slide1.shapes.add_textbox(Inches(0.70), Inches(1.70), Inches(11.933), Inches(1.30))
    ttf = title_box.text_frame
    ttf.word_wrap = True
    ttf.margin_left = ttf.margin_top = 0

    tp = ttf.paragraphs[0]
    r1 = tp.add_run()
    r1.text = "TRILHANDO O CAMINHO DO CÓDIGO: "
    r1.font.name = FONT_MAIN
    r1.font.size = Pt(22)
    r1.font.bold = True
    r1.font.color.rgb = CEFET_CYAN

    r2 = tp.add_run()
    r2.text = "Oficinas de Programação Python com Inteligência Artificial Generativa para Estudantes da Educação Básica"
    r2.font.name = FONT_MAIN
    r2.font.size = Pt(22)
    r2.font.bold = True
    r2.font.color.rgb = TEXT_WHITE

    area_pill = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), Inches(3.10), Inches(6.00), Inches(0.40))
    area_pill.fill.solid()
    area_pill.fill.fore_color.rgb = RGBColor(22, 28, 56)
    area_pill.line.color.rgb = CEFET_PURPLE
    area_pill.line.width = Pt(1.5)
    ap_tf = area_pill.text_frame
    ap_p = ap_tf.paragraphs[0]
    ap_p.alignment = PP_ALIGN.CENTER
    ap_r1 = ap_p.add_run()
    ap_r1.text = "ÁREA TEMÁTICA: "
    ap_r1.font.name = FONT_MAIN
    ap_r1.font.size = Pt(10)
    ap_r1.font.bold = True
    ap_r1.font.color.rgb = CEFET_PURPLE

    ap_r2 = ap_p.add_run()
    ap_r2.text = "Projeto de Extensão (Fomento FAPEMIG)"
    ap_r2.font.name = FONT_MAIN
    ap_r2.font.size = Pt(10)
    ap_r2.font.bold = True
    ap_r2.font.color.rgb = TEXT_WHITE

    # 4 Cards de Autores com letras aumentadas e claras
    author_w = Inches(2.83)
    gap_a    = Inches(0.20)
    y_card   = Inches(3.68)
    h_card   = Inches(2.85)

    authors_data = [
        {
            "role": "AUTOR & APRESENTADOR",
            "name": "Victor Couto Zanaroli",
            "email": "victorzanaroli@gmail.com",
            "sub": "Apresentador Oficial do Trabalho",
            "inst": "Graduando em Sistemas de Informação\nCEFET-MG Campus Varginha",
            "accent": CEFET_GREEN,
            "highlight": True
        },
        {
            "role": "AUTOR",
            "name": "Kaique Araújo Xavier",
            "email": "kaiquearaujo162@gmail.com",
            "sub": "Bolsista & Monitor da Trilha",
            "inst": "Graduando em Sistemas de Informação\nCEFET-MG Campus Varginha",
            "accent": CEFET_CYAN,
            "highlight": False
        },
        {
            "role": "AUTOR",
            "name": "Rafael Oliveira Zanelato",
            "email": "evox.rafa@gmail.com",
            "sub": "Bolsista & Monitor da Trilha",
            "inst": "Graduando em Sistemas de Informação\nCEFET-MG Campus Varginha",
            "accent": CEFET_PURPLE,
            "highlight": False
        },
        {
            "role": "ORIENTADOR",
            "name": "Prof. Me. Lázaro Eduardo da Silva",
            "email": "lazaro@cefetmg.br",
            "sub": "Coordenador Geral do Projeto",
            "inst": "Docente Dep. de Computação\nCEFET-MG Campus Varginha",
            "accent": CEFET_GOLD,
            "highlight": False
        }
    ]


    for i, a in enumerate(authors_data):
        cx = Inches(0.70) + i * (author_w + gap_a)
        
        acard = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cx, y_card, author_w, h_card)
        acard.fill.solid()
        acard.fill.fore_color.rgb = CARD_BG_HOVER if a["highlight"] else CARD_BG
        acard.line.color.rgb = a["accent"] if a["highlight"] else BORDER_BLUE
        acard.line.width = Pt(1.5 if a["highlight"] else 1)

        top_stripe = slide1.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cx, y_card, author_w, Inches(0.08))
        top_stripe.fill.solid()
        top_stripe.fill.fore_color.rgb = a["accent"]
        top_stripe.line.fill.background()

        tbox = slide1.shapes.add_textbox(cx + Inches(0.18), y_card + Inches(0.16), author_w - Inches(0.36), h_card - Inches(0.24))
        atf = tbox.text_frame
        atf.word_wrap = True
        atf.margin_left = atf.margin_top = atf.margin_right = atf.margin_bottom = 0

        p_role = atf.paragraphs[0]
        p_role.text = a["role"]
        p_role.font.name = FONT_MAIN
        p_role.font.size = Pt(9.5)
        p_role.font.bold = True
        p_role.font.color.rgb = a["accent"]

        p_name = atf.add_paragraph()
        p_name.text = a["name"]
        p_name.font.name = FONT_MAIN
        p_name.font.size = Pt(13)
        p_name.font.bold = True
        p_name.font.color.rgb = TEXT_WHITE
        p_name.space_before = Pt(6)

        p_email = atf.add_paragraph()
        p_email.text = a["email"]
        p_email.font.name = FONT_CODE
        p_email.font.size = Pt(9.5)
        p_email.font.color.rgb = TEXT_CYAN if a["highlight"] else TEXT_SILVER
        p_email.space_before = Pt(4)

        p_sub = atf.add_paragraph()
        p_sub.text = a["sub"]
        p_sub.font.name = FONT_MAIN
        p_sub.font.size = Pt(9.5)
        p_sub.font.bold = True
        p_sub.font.color.rgb = a["accent"]
        p_sub.space_before = Pt(8)

        p_inst = atf.add_paragraph()
        p_inst.text = a["inst"]
        p_inst.font.name = FONT_MAIN
        p_inst.font.size = Pt(9)
        p_inst.font.color.rgb = TEXT_LIGHT
        p_inst.space_before = Pt(4)

    add_slide_footer(slide1, 1, 8)

    slide1.notes_slide.notes_text_frame.text = (
        "⏱️ TEMPO ESTIMADO: 01:00 min (00:00 - 01:00)\n\n"
        "🎯 ROTEIRO DE FALA DO APRESENTADOR (Victor Couto Zanaroli):\n"
        "1. Cumprimento caloroso: 'Bom dia/boa tarde a todos os presentes, à banca avaliadora, aos professores do CEFET-MG e à comissão organizadora do II SINTEC 2026.'\n"
        "2. Apresentação pessoal e da equipe: 'Meu nome é Victor Couto Zanaroli, sou graduando em Sistemas de Informação no CEFET-MG Campus Varginha e tenho a honra de apresentar, como único apresentador do trabalho, o projeto TRILHANDO O CAMINHO DO CÓDIGO. Este projeto é desenvolvido juntamente com meus colegas bolsistas Kaique Araújo Xavier e Rafael Oliveira Zanelato, sob a criteriosa orientação do Prof. Me. Lázaro Eduardo da Silva.'\n"
        "3. Enquadramento: Trata-se de um Projeto de Extensão Universitária e Pesquisa Científica fomentado pela FAPEMIG.\n"
        "4. Síntese: Nosso objetivo é capacitar discentes do Ensino Fundamental II (7º ao 9º ano) de escolas públicas em programação Python e Inteligência Artificial generativa, desenvolvendo o Pensamento Computacional e a autoeficácia através de práticas dinâmicas e da criação de aplicativos móveis reais."
    )

    # =========================================================================
    # SLIDE 2: OBJETIVO
    # =========================================================================
    slide2 = prs.slides.add_slide(blank_layout)
    apply_slide_background(slide2)
    add_slide_header(slide2, "SLIDE 02 • OBJETIVOS DO PROJETO", "Objetivo Geral & Metas Formativas", "Democratizar a programação, o raciocínio algorítmico e o letramento em IA para a educação básica.")

    # Box Objetivo Geral
    obj_box = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), Inches(1.70), Inches(11.933), Inches(1.40))
    obj_box.fill.solid()
    obj_box.fill.fore_color.rgb = CARD_BG_HOVER
    obj_box.line.color.rgb = BORDER_CYAN
    obj_box.line.width = Pt(1.5)
    
    s_line = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), Inches(1.70), Inches(0.10), Inches(1.40))
    s_line.fill.solid()
    s_line.fill.fore_color.rgb = CEFET_CYAN
    s_line.line.fill.background()

    otf = obj_box.text_frame
    otf.word_wrap = True
    otf.margin_left = Inches(0.30)
    otf.margin_right = Inches(0.30)
    otf.margin_top = Inches(0.16)

    op1 = otf.paragraphs[0]
    op1.text = "🎯 Objetivo Geral (Conforme Resumo Submetido ao SINTEC)"
    op1.font.name = FONT_MAIN
    op1.font.size = Pt(13)
    op1.font.bold = True
    op1.font.color.rgb = CEFET_CYAN

    op2 = otf.add_paragraph()
    op2.text = (
        "Capacitar estudantes do Ensino Fundamental II (7º ao 9º ano) da rede pública em programação Python e Inteligência Artificial generativa, "
        "desenvolvendo o Pensamento Computacional e a criação autoral de aplicativos móveis reais com Flet vinculados aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU."
    )
    op2.font.name = FONT_MAIN
    op2.font.size = Pt(12)
    op2.font.color.rgb = TEXT_WHITE
    op2.space_before = Pt(4)

    # 4 Cards de Eixos Formativos com síntese concisa e letras grandes
    w4 = Inches(2.83)
    gap4 = Inches(0.20)
    y4 = Inches(3.25)
    h4 = Inches(3.55)

    eixos = [
        ("EIXO 01", "🧠 Pensamento Computacional", 
         "• 4 Pilares: Decomposição, Reconhecimento de Padrões, Abstração e Algoritmos.\n\n"
         "• Resolução ativa de problemas sem memorização mecânica de sintaxe.", CEFET_CYAN),
        ("EIXO 02", "🤖 Letramento em IA & Prompts", 
         "• Engenharia de prompt formal: Métodos autorais P.R.R.E e P.R.O.M.P.T.\n\n"
         "• IA como tutora socrática e copiloto de código (sem cópia mecânica).", CEFET_GREEN),
        ("EIXO 03", "📱 Prática com Python & Flet", 
         "• Demonstrações lúdicas e interativas para ilustrar o código em ação.\n\n"
         "• Prototipagem mobile real executável no próprio smartphone (Pydroid 3).", CEFET_PURPLE),
        ("EIXO 04", "📊 Coleta Científica (T0/T1)", 
         "• Delineamento quase-experimental pareado (Aulas 01 e 10).\n\n"
         "• Instrumentos validados: 10 itens Bebras/CTt e escala CPSES (Bandura).", CEFET_GOLD)
    ]

    for i, (tag, title, desc, color) in enumerate(eixos):
        x = Inches(0.70) + i * (w4 + gap4)
        c = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y4, w4, h4)
        c.fill.solid()
        c.fill.fore_color.rgb = CARD_BG
        c.line.color.rgb = BORDER_BLUE
        c.line.width = Pt(1.5)

        t_bar = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y4, w4, Inches(0.08))
        t_bar.fill.solid()
        t_bar.fill.fore_color.rgb = color
        t_bar.line.fill.background()

        ctf = c.text_frame
        ctf.word_wrap = True
        ctf.margin_left = ctf.margin_right = Inches(0.20)
        ctf.margin_top = Inches(0.18)

        p_tag = ctf.paragraphs[0]
        p_tag.text = tag
        p_tag.font.name = FONT_MAIN
        p_tag.font.size = Pt(9)
        p_tag.font.bold = True
        p_tag.font.color.rgb = color

        p_t = ctf.add_paragraph()
        p_t.text = title
        p_t.font.name = FONT_MAIN
        p_t.font.size = Pt(13)
        p_t.font.bold = True
        p_t.font.color.rgb = TEXT_WHITE
        p_t.space_before = Pt(4)

        p_d = ctf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_MAIN
        p_d.font.size = Pt(11.5)
        p_d.font.color.rgb = TEXT_WHITE
        p_d.space_before = Pt(8)

    add_slide_footer(slide2, 2, 8)

    slide2.notes_slide.notes_text_frame.text = (
        "⏱️ TEMPO ESTIMADO: 01:00 min (01:00 - 02:00)\n\n"
        "🎯 ROTEIRO DE FALA DO APRESENTADOR (Victor):\n"
        "1. Apresentar o Objetivo Geral: O projeto visa democratizar a computação. Não estamos apenas ensinando regras sintáticas de Python; estamos munindo os estudantes com raciocínio lógico e autonomia tecnológica.\n"
        "2. Destacar os 4 Eixos:\n"
        "   - Eixo 1 (Pensamento Computacional): Capacidade de dividir problemas complexos em etapas gerenciáveis.\n"
        "   - Eixo 2 (Letramento em IA): Ensinar engenharia de prompt para que a IA seja uma ferramenta investigativa e não uma 'muleta'.\n"
        "   - Eixo 3 (Prática Criativa): Demonstrações lúdicas e visuais de código para engajar, evoluindo para a criação de aplicativos reais em Flet que rodam no smartphone.\n"
        "   - Eixo 4 (Pesquisa Acadêmica): Tudo é respaldado cientificamente com avaliação pré e pós-teste pareada."
    )

    # =========================================================================
    # SLIDE 3: JUSTIFICATIVA (COM PARCEIROS NO RODAPÉ)
    # =========================================================================
    slide3 = prs.slides.add_slide(blank_layout)
    apply_slide_background(slide3)
    add_slide_header(slide3, "SLIDE 03 • JUSTIFICATIVA & CONTEXTO", "Por que o Trilhando o Caminho do Código é Vital?", "A urgência da BNCC Computação, a ascensão da IA Generativa e o impacto social da extensão.")

    w3 = Inches(3.78)
    gap3 = Inches(0.29)
    y3 = Inches(1.70)
    h3 = Inches(3.25)

    just_data = [
        ("🏫", "Desafio BNCC na Educação", 
         "• Computação obrigatória na Educação Básica (MEC 2022).\n\n"
         "• Severa carência de professores de TI e métodos práticos.\n\n"
         "• Urgência de práticas motivadoras para evitar a evasão.",
         CEFET_GOLD, CARD_BG),
        ("⚡", "A Era da IA Generativa",
         "• Novo paradigma com modelos Gemini, Claude e ChatGPT.\n\n"
         "• Redução drástica da barreira inicial de sintaxe do código.\n\n"
         "• IA como tutora socrática guiando na depuração de erros.",
         CEFET_CYAN, CARD_BG_HOVER),
        ("🤝", "Compromisso Social FAPEMIG",
         "• Devolutiva social da universidade pública para a região.\n\n"
         "• Acesso gratuito aos laboratórios de ponta do CEFET-MG.\n\n"
         "• Inclusão digital e incentivo vocacional para carreiras STEM.",
         CEFET_PURPLE, CARD_BG)
    ]

    for i, (icon, title, desc, color, bg_col) in enumerate(just_data):
        x = Inches(0.70) + i * (w3 + gap3)
        c = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y3, w3, h3)
        c.fill.solid()
        c.fill.fore_color.rgb = bg_col
        c.line.color.rgb = color if bg_col != CARD_BG else BORDER_BLUE
        c.line.width = Pt(1.5)

        t_bar = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y3, w3, Inches(0.08))
        t_bar.fill.solid()
        t_bar.fill.fore_color.rgb = color
        t_bar.line.fill.background()

        ctf = c.text_frame
        ctf.word_wrap = True
        ctf.margin_left = ctf.margin_right = Inches(0.22)
        ctf.margin_top = Inches(0.18)

        p_ic = ctf.paragraphs[0]
        p_ic.text = icon
        p_ic.font.size = Pt(24)

        p_t = ctf.add_paragraph()
        p_t.text = title
        p_t.font.name = FONT_MAIN
        p_t.font.size = Pt(14)
        p_t.font.bold = True
        p_t.font.color.rgb = color
        p_t.space_before = Pt(4)

        p_d = ctf.add_paragraph()
        p_d.text = desc
        p_d.font.name = FONT_MAIN
        p_d.font.size = Pt(11)
        p_d.font.color.rgb = TEXT_WHITE
        p_d.space_before = Pt(6)

    # Banner Integrado de Realizadores & Apoiadores
    y_part = Inches(5.05)
    h_part = Inches(1.80)
    w_part = Inches(11.933)

    p_card = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), y_part, w_part, h_part)
    p_card.fill.solid()
    p_card.fill.fore_color.rgb = RGBColor(13, 22, 44)
    p_card.line.color.rgb = BORDER_BLUE
    p_card.line.width = Pt(1.5)

    rx = Inches(0.70)
    rtx = slide3.shapes.add_textbox(rx + Inches(0.20), y_part + Inches(0.08), Inches(6.5), Inches(0.28))
    rtf = rtx.text_frame
    rp = rtf.paragraphs[0]
    rp.text = "⚡ Realizadores do Projeto & do SINTEC 2026"
    rp.font.name = FONT_MAIN
    rp.font.size = Pt(10.5)
    rp.font.bold = True
    rp.font.color.rgb = CEFET_CYAN

    y_logo = y_part + Inches(0.44)
    realiz_logos = [
        (logo_cefet, Inches(0.95), Inches(0.95), Inches(0.85)),
        (logo_bsi, Inches(2.20), Inches(1.10), Inches(0.85)),
        (logo_site, Inches(3.55), Inches(1.10), Inches(0.85)),
        (logo_dedc, Inches(4.90), Inches(1.05), Inches(0.85)),
        (logo_porto, Inches(6.20), Inches(1.00), Inches(0.85))
    ]
    for path, lx, lw, lh in realiz_logos:
        chip = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, lx, y_logo, lw, lh)
        chip.fill.solid()
        chip.fill.fore_color.rgb = CHIP_BG
        chip.line.color.rgb = RGBColor(203, 213, 225)
        chip.line.width = Pt(1)
        if os.path.exists(path):
            slide3.shapes.add_picture(path, lx + Inches(0.08), y_logo + Inches(0.06), width=lw - Inches(0.16))

    div = slide3.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(8.00), y_part + Inches(0.18), Inches(0.015), Inches(1.40))
    div.fill.solid()
    div.fill.fore_color.rgb = RGBColor(30, 58, 138)
    div.line.fill.background()

    ax = Inches(8.20)
    atx = slide3.shapes.add_textbox(ax, y_part + Inches(0.08), Inches(4.3), Inches(0.28))
    atf = atx.text_frame
    ap = atf.paragraphs[0]
    ap.text = "⚡ Apoiadores & Financiamento"
    ap.font.name = FONT_MAIN
    ap.font.size = Pt(10.5)
    ap.font.bold = True
    ap.font.color.rgb = CEFET_GOLD

    apoiad_logos = [
        (logo_fapemig, Inches(8.20), Inches(1.05), Inches(0.85)),
        (logo_nascente, Inches(9.45), Inches(1.05), Inches(0.85)),
        (logo_trens, Inches(10.65), Inches(1.00), Inches(0.85)),
        (logo_sebrae, Inches(11.80), Inches(0.70), Inches(0.85))
    ]
    for path, lx, lw, lh in apoiad_logos:
        chip = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, lx, y_logo, lw, lh)
        chip.fill.solid()
        chip.fill.fore_color.rgb = CHIP_BG
        chip.line.color.rgb = RGBColor(203, 213, 225)
        chip.line.width = Pt(1)
        if os.path.exists(path):
            slide3.shapes.add_picture(path, lx + Inches(0.06), y_logo + Inches(0.06), width=lw - Inches(0.12))

    add_slide_footer(slide3, 3, 8)

    slide3.notes_slide.notes_text_frame.text = (
        "⏱️ TEMPO ESTIMADO: 01:30 min (02:00 - 03:30)\n\n"
        "🎯 ROTEIRO DE FALA DO APRESENTADOR (Victor):\n"
        "1. Contexto da BNCC: Em 2022, o Ministério da Educação aprovou as normas de computação na educação básica. Mas nas escolas públicas de Varginha e do Brasil, como isso é aplicado se faltam professores e infraestrutura? Essa é a dor real que enfrentamos.\n"
        "2. A Oportunidade com a IA Generativa: Quem já tentou aprender a programar sabe que esquecer dois pontos ou errar uma indentação causa mensagens de erro assustadoras. A IA atua como uma tutora socrática e paciente, explicando o erro e ensinando como consertar.\n"
        "3. O Papel da Extensão Universitária: Agradecer à FAPEMIG pelo fomento e ao CEFET-MG por abrir suas portas para a comunidade de Varginha.\n"
        "4. Menção aos Realizadores e Apoiadores exibidos no rodapé do slide."
    )

    # =========================================================================
    # SLIDE 4: METODOLOGIA
    # =========================================================================
    slide4 = prs.slides.add_slide(blank_layout)
    apply_slide_background(slide4)
    add_slide_header(slide4, "SLIDE 04 • METODOLOGIA PEDAGÓGICA", "Engenharia Didática Ativa & Delineamento Científico", "Uma trilha imersiva de 30 horas com ciclo estruturado em 7 etapas e mensuração quase-experimental.")

    w_left = Inches(7.50)
    y_m = Inches(1.70)
    h_m_item = Inches(1.60)
    gap_m = Inches(0.16)

    metod_steps = [
        ("🔄 1. Ciclo Didático em 7 Etapas (Aulas 02 a 06)", 
         "• Sequência Estruturada: Quiz inicial, Live Coding na lousa e Engenharia Reversa.\n\n"
         "• Autonomia & Desafio: Missões solo com IA, Teste de Estresse e Debugging ('quebrar o código').",
         CEFET_CYAN),
        ("💻 2. Laboratório Híbrido & Continuidade no Celular",
         "• Prática Presencial: 3h semanais nos laboratórios do CEFET-MG com VS Code.\n\n"
         "• Estudo em Casa: Execução no smartphone via Pydroid 3 (sem barreira de ter PC próprio).",
         CEFET_GREEN),
        ("📊 3. Delineamento Quase-Experimental Pareado (T0 vs. T1)",
         "• Avaliação Empírica: Coleta pareada na Aula 01 (Pré-teste T0) e Aula 10 (Pós-teste T1).\n\n"
         "• Instrumentos Validados: Raciocínio lógico (Bebras/CTt) e Autoeficácia (CPSES - Bandura).",
         CEFET_PURPLE)
    ]

    for i, (title, desc, color) in enumerate(metod_steps):
        yi = y_m + i * (h_m_item + gap_m)
        c = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), yi, w_left, h_m_item)
        c.fill.solid()
        c.fill.fore_color.rgb = CARD_BG
        c.line.color.rgb = BORDER_BLUE
        c.line.width = Pt(1.5)

        bar = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), yi, Inches(0.08), h_m_item)
        bar.fill.solid()
        bar.fill.fore_color.rgb = color
        bar.line.fill.background()

        ctf = c.text_frame
        ctf.word_wrap = True
        ctf.margin_left = Inches(0.24)
        ctf.margin_top = Inches(0.16)
        ctf.margin_right = Inches(0.18)

        pt = ctf.paragraphs[0]
        pt.text = title
        pt.font.name = FONT_MAIN
        pt.font.size = Pt(13)
        pt.font.bold = True
        pt.font.color.rgb = color

        pd = ctf.add_paragraph()
        pd.text = desc
        pd.font.name = FONT_MAIN
        pd.font.size = Pt(11.5)
        pd.font.color.rgb = TEXT_WHITE
        pd.space_before = Pt(6)

    # Coluna Direita: Ficha Técnica do Projeto com texto grande e conciso
    w_right = Inches(4.15)
    c_arch = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.48), y_m, w_right, Inches(5.12))
    c_arch.fill.solid()
    c_arch.fill.fore_color.rgb = CARD_BG_HOVER
    c_arch.line.color.rgb = BORDER_CYAN
    c_arch.line.width = Pt(1.5)

    t_arch = slide4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.48), y_m, w_right, Inches(0.08))
    t_arch.fill.solid()
    t_arch.fill.fore_color.rgb = CEFET_CYAN
    t_arch.line.fill.background()

    atf = c_arch.text_frame
    atf.word_wrap = True
    atf.margin_left = atf.margin_right = Inches(0.22)
    atf.margin_top = Inches(0.22)

    ap1 = atf.paragraphs[0]
    ap1.text = "📋 Ficha Técnica da Trilha"
    ap1.font.name = FONT_MAIN
    ap1.font.size = Pt(13.5)
    ap1.font.bold = True
    ap1.font.color.rgb = CEFET_CYAN

    specs = [
        ("Carga Horária:", "30 horas presenciais (10 oficinas de 3h)."),
        ("Público-alvo:", "Ensino Fundamental II (7º ao 9º ano) da rede pública."),
        ("Pré-requisito:", "Zero conhecimento prévio exigido."),
        ("Linguagem & Lib:", "Python 3.12 + Flet (baseado em Flutter)."),
        ("Ambiente Mobile:", "Pydroid 3 para smartphone Android/iOS."),
        ("IA Assistiva:", "Google Gemini com frameworks P.R.R.E e P.R.O.M.P.T."),
        ("Culminância:", "Feira de Soluções com foco nos ODS da ONU.")
    ]

    for label, val in specs:
        p = atf.add_paragraph()
        p.space_before = Pt(8)
        r_l = p.add_run()
        r_l.text = f"• {label} "
        r_l.font.name = FONT_MAIN
        r_l.font.size = Pt(11)
        r_l.font.bold = True
        r_l.font.color.rgb = TEXT_WHITE

        r_v = p.add_run()
        r_v.text = val
        r_v.font.name = FONT_MAIN
        r_v.font.size = Pt(11)
        r_v.font.color.rgb = TEXT_SILVER

    add_slide_footer(slide4, 4, 8)

    slide4.notes_slide.notes_text_frame.text = (
        "⏱️ TEMPO ESTIMADO: 01:30 min (03:30 - 05:00)\n\n"
        "🎯 ROTEIRO DE FALA DO APRESENTADOR (Victor):\n"
        "1. Rigor Metodológico: Destacar que a trilha segue um ciclo pedagógico validado em 7 etapas. Não é palestra expositiva; é mão na massa do primeiro ao último minuto.\n"
        "2. Teste de Estresse e Debugging: Explicar o diferencial da etapa 6, onde o aluno é desafiado a quebrar o próprio código propositalmente para perder o medo de mensagens de erro.\n"
        "3. Inclusão Mobile: Frisar que muitos alunos não possuem computador em casa. Por isso, ensinamos a rodar os códigos no smartphone via Pydroid 3, garantindo autonomia continuada.\n"
        "4. Delineamento Científico: Explicar a aplicação pareada do T0 e T1 com questões Bebras e escala CPSES de autoeficácia."
    )

    # =========================================================================
    # SLIDE 5: DESCRIÇÃO DO PROJETO
    # =========================================================================
    slide5 = prs.slides.add_slide(blank_layout)
    apply_slide_background(slide5)
    add_slide_header(slide5, "SLIDE 05 • DESCRIÇÃO DETALHADA DO PROJETO", "A Jornada em 4 Fases: Do Zero ao Aplicativo Mobile", "Progressão curricular contínua unindo raciocínio algorítmico, desenvolvimento e impacto social.")

    w5 = Inches(2.83)
    gap5 = Inches(0.20)
    y5 = Inches(1.70)
    h5 = Inches(5.12)

    modulos = [
        ("FASE 01 • AULAS 01-02", "🤖 Fundamentos & Prompts", 
         "• Diagnóstico inicial T0 (Bebras & CPSES)\n\n"
         "• Engenharia de Prompt: P.R.R.E & P.R.O.M.P.T\n\n"
         "• Sintaxe essencial: print(), input(), tipos\n\n"
         "• Tomada de decisão: if, elif, else", CEFET_CYAN),
        ("FASE 02 • AULAS 03-05", "⚙️ Lógica & Prática Dinâmica",
         "• Laços de repetição: while e for\n\n"
         "• Estruturas de dados: Listas (list)\n\n"
         "• Prevenção de falhas com try / except\n\n"
         "• Demonstrações dinâmicas (código em ação)", CEFET_GREEN),
        ("FASE 03 • AULAS 06-08", "📱 Prototipagem Mobile Flet",
         "• Modularização com funções (def) e dict\n\n"
         "• Framework Flet: Column, Row e Containers\n\n"
         "• Componentes: TextField e ElevatedButton\n\n"
         "• Deploy mobile no smartphone (Pydroid 3)", CEFET_GOLD),
        ("FASE 04 • AULAS 09-10", "🌟 Sprints ODS & Feira Final",
         "• Desenvolvimento de apps para os ODS da ONU\n\n"
         "• Auditoria Viva: discentes explicam a lógica\n\n"
         "• Aplicação pareada do Pós-teste T1\n\n"
         "• Feira Final de Soluções, pitch e premiação", CEFET_PURPLE)
    ]

    for i, (tag, title, desc, color) in enumerate(modulos):
        x = Inches(0.70) + i * (w5 + gap5)
        c = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y5, w5, h5)
        c.fill.solid()
        c.fill.fore_color.rgb = CARD_BG
        c.line.color.rgb = BORDER_BLUE
        c.line.width = Pt(1.5)

        t_bar = slide5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y5, w5, Inches(0.08))
        t_bar.fill.solid()
        t_bar.fill.fore_color.rgb = color
        t_bar.line.fill.background()

        ctf = c.text_frame
        ctf.word_wrap = True
        ctf.margin_left = ctf.margin_right = Inches(0.18)
        ctf.margin_top = Inches(0.18)

        ptag = ctf.paragraphs[0]
        ptag.text = tag
        ptag.font.name = FONT_MAIN
        ptag.font.size = Pt(9)
        ptag.font.bold = True
        ptag.font.color.rgb = color

        pt = ctf.add_paragraph()
        pt.text = title
        pt.font.name = FONT_MAIN
        pt.font.size = Pt(13)
        pt.font.bold = True
        pt.font.color.rgb = TEXT_WHITE
        pt.space_before = Pt(4)

        pd = ctf.add_paragraph()
        pd.text = desc
        pd.font.name = FONT_MAIN
        pd.font.size = Pt(11.5)
        pd.font.color.rgb = TEXT_WHITE
        pd.space_before = Pt(10)

    add_slide_footer(slide5, 5, 8)

    slide5.notes_slide.notes_text_frame.text = (
        "⏱️ TEMPO ESTIMADO: 02:00 min (05:00 - 07:00)\n\n"
        "🎯 ROTEIRO DE FALA DO APRESENTADOR (Victor):\n"
        "1. Percorrer a Jornada das 10 Semanas com energia:\n"
        "   - Fase 1: Desmistificar a IA logo na Aula 01 através do framework P.R.O.M.P.T (Papel, Regras, Objetivo, Modelo, Parâmetros e Tarefa). O aluno aprende a diferença entre um prompt preguiçoso e uma instrução técnica.\n"
        "   - Fase 2: Para fixar condicionais e laços de repetição de forma divertida e palpável, utilizamos demonstrações visuais e dinâmicas de código (como mini-jogos). O foco não é ensinar desenvolvimento de jogos, mas sim ver a lógica de programação funcionando na prática de forma visual e engajadora.\n"
        "   - Fase 3: A grande virada de chave! Saímos da tela preta do terminal para o framework moderno Flet. Com Python, o estudante cria interfaces gráficas com botões e formulários que rodam no smartphone.\n"
        "   - Fase 4: O trabalho final não é um exercício fictício; é um aplicativo funcional que resolve um problema real da sociedade, alinhado aos Objetivos de Desenvolvimento Sustentável da ONU."
    )

    # =========================================================================
    # SLIDE 6: FOTOS OU PRINTS DE TELA (COM TEXTO BRANCO E GRANDE)
    # =========================================================================
    slide6 = prs.slides.add_slide(blank_layout)
    apply_slide_background(slide6)
    add_slide_header(slide6, "SLIDE 06 • EVIDÊNCIAS & ANDAMENTO DO PROJETO", "Ambientes de Codificação, Práticas Dinâmicas e Apps no Celular", "Demonstração visual dos artefatos construídos: VS Code, terminal Python, práticas dinâmicas e interface móvel Flet.")

    w_mockup = Inches(7.20)
    h_mockup = Inches(5.12)
    x_mockup = Inches(0.70)
    y_mockup = Inches(1.70)

    frame = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x_mockup, y_mockup, w_mockup, h_mockup)
    frame.fill.solid()
    frame.fill.fore_color.rgb = RGBColor(10, 16, 32)
    frame.line.color.rgb = BORDER_CYAN
    frame.line.width = Pt(1.5)

    if os.path.exists(img_showcase):
        slide6.shapes.add_picture(img_showcase, x_mockup + Inches(0.12), y_mockup + Inches(0.12), width=w_mockup - Inches(0.24))

    # Direita: 3 Cards Explicativos com tópicos concisos e texto grande de alto contraste
    w_rh = Inches(4.45)
    x_rh = Inches(8.18)
    h_rh = Inches(1.60)
    gap_rh = Inches(0.16)

    screens_info = [
        ("💻 1. Codificação em Python & VS Code",
         "• Prática no laboratório de informática do CEFET-MG.\n\n"
         "• Desenvolvimento autoral, sintaxe limpa e depuração no terminal.",
         CEFET_CYAN),
        ("🕹️ 2. Demonstrações Lúdicas & Práticas",
         "• Código em ação: visualização dinâmica de laços e condições.\n\n"
         "• Exemplos interativos como recurso motivacional para engajar a turma.",
         CEFET_GOLD),
        ("📱 3. Apps Móveis com Flet no Celular",
         "• Prototipagem de telas com botões e formulários visuais.\n\n"
         "• Execução nativa no próprio smartphone dos discentes (Pydroid 3).",
         CEFET_GREEN)
    ]

    for i, (title, desc, color) in enumerate(screens_info):
        yi = y_mockup + i * (h_rh + gap_rh)
        c = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x_rh, yi, w_rh, h_rh)
        c.fill.solid()
        c.fill.fore_color.rgb = CARD_BG_HOVER
        c.line.color.rgb = color
        c.line.width = Pt(1.5)

        bar = slide6.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x_rh, yi, Inches(0.10), h_rh)
        bar.fill.solid()
        bar.fill.fore_color.rgb = color
        bar.line.fill.background()

        ctf = c.text_frame
        ctf.word_wrap = True
        ctf.margin_left = Inches(0.24)
        ctf.margin_top = Inches(0.16)
        ctf.margin_right = Inches(0.18)

        pt = ctf.paragraphs[0]
        pt.text = title
        pt.font.name = FONT_MAIN
        pt.font.size = Pt(13)
        pt.font.bold = True
        pt.font.color.rgb = color

        pd = ctf.add_paragraph()
        pd.text = desc
        pd.font.name = FONT_MAIN
        pd.font.size = Pt(11.5)
        pd.font.color.rgb = TEXT_WHITE
        pd.space_before = Pt(6)

    add_slide_footer(slide6, 6, 8)

    slide6.notes_slide.notes_text_frame.text = (
        "⏱️ TEMPO ESTIMADO: 01:30 min (07:00 - 08:30)\n\n"
        "🎯 ROTEIRO DE FALA DO APRESENTADOR (Victor):\n"
        "1. Chamar a atenção da banca para a imagem comprobatória do projeto:\n"
        "   - À esquerda da imagem: A tela do computador com código Python real no VS Code e demonstrações visuais dinâmicas em execução, utilizadas para ilustrar o código aos alunos de forma interativa.\n"
        "   - Ao centro: O smartphone com o aplicativo móvel em Python Flet rodando diretamente no celular de um aluno.\n"
        "   - À direita: O selo do método de assistência inteligente com IA e os frameworks autorais de engenharia de prompt.\n"
        "2. Destacar o Impacto no Aluno: O momento mais emocionante é quando o estudante de 12 a 14 anos do Ensino Fundamental vê o código compilando e o aplicativo funcionando na palma da sua mão. Ele percebe que é capaz de ser criador de tecnologia e não apenas consumidor."
    )

    # =========================================================================
    # SLIDE 7: CONSIDERAÇÕES FINAIS
    # =========================================================================
    slide7 = prs.slides.add_slide(blank_layout)
    apply_slide_background(slide7)
    add_slide_header(slide7, "SLIDE 07 • CONCLUSÕES & IMPACTO", "Resultados Alcançados, Validação & Desdobramentos", "Balanço das contribuições científicas, do empoderamento comunitário e dos próximos passos acadêmicos.")

    w7 = Inches(3.78)
    gap7 = Inches(0.29)
    y7 = Inches(1.70)
    h7 = Inches(5.12)

    concl_data = [
        ("🏆", "Resultados Discentes",
         "• Alta Retenção: Frequência e engajamento exemplares ao longo de 10 oficinas.\n\n"
         "• Desmistificação: Superação do bloqueio psicológico com computação.\n\n"
         "• Autonomia Criativa: Desenvolvimento autoral de soluções e aplicativos mobile reais.",
         CEFET_GREEN),
        ("🔬", "Validação com IA & Auditoria",
         "• Sem Cópia Passiva: Auditorias provam que discentes dominam a lógica.\n\n"
         "• Raciocínio Ativo: Alunos explicam, depuram e alteram suas funções.\n\n"
         "• IA como Copiloto: Aceleração da aprendizagem e foco na resolução de problemas.",
         CEFET_CYAN),
        ("🚀", "Impacto da Extensão",
         "• Fomento FAPEMIG: Extensão transformando a comunidade de Varginha.\n\n"
         "• Despertar Vocacional: Incentivo ao ingresso de jovens em cursos de TI.\n\n"
         "• Produção Científica: Artigo acadêmico com tabulação pareada T0 vs. T1.",
         CEFET_PURPLE)
    ]

    for i, (icon, title, desc, color) in enumerate(concl_data):
        x = Inches(0.70) + i * (w7 + gap7)
        c = slide7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y7, w7, h7)
        c.fill.solid()
        c.fill.fore_color.rgb = CARD_BG
        c.line.color.rgb = color
        c.line.width = Pt(1.5)

        t_bar = slide7.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y7, w7, Inches(0.08))
        t_bar.fill.solid()
        t_bar.fill.fore_color.rgb = color
        t_bar.line.fill.background()

        ctf = c.text_frame
        ctf.word_wrap = True
        ctf.margin_left = ctf.margin_right = Inches(0.24)
        ctf.margin_top = Inches(0.20)

        pic = ctf.paragraphs[0]
        pic.text = icon
        pic.font.size = Pt(26)

        pt = ctf.add_paragraph()
        pt.text = title
        pt.font.name = FONT_MAIN
        pt.font.size = Pt(14)
        pt.font.bold = True
        pt.font.color.rgb = color
        pt.space_before = Pt(4)

        pd = ctf.add_paragraph()
        pd.text = desc
        pd.font.name = FONT_MAIN
        pd.font.size = Pt(11.5)
        pd.font.color.rgb = TEXT_WHITE
        pd.space_before = Pt(10)

    add_slide_footer(slide7, 7, 8)

    slide7.notes_slide.notes_text_frame.text = (
        "⏱️ TEMPO ESTIMADO: 01:00 min (08:30 - 09:30)\n\n"
        "🎯 ROTEIRO DE FALA DO APRESENTADOR (Victor):\n"
        "1. Conclusões Fundamentais: O projeto comprovou que quando a IA generativa é ensinada com método (frameworks P.R.R.E e P.R.O.M.P.T), ela não substitui a reflexão do aluno. Pelo contrário: ela atua como um acelerador pedagógico.\n"
        "2. Auditoria Viva: Destacar que em nenhuma hipótese os alunos fazem reprodução mecânica. Eles são arguidos e comprovam que entendem cada linha de código que constroem.\n"
        "3. O Legado da FAPEMIG e do CEFET-MG: Mostrar como a universidade pública e o fomento estadual mudam vidas no Sul de Minas Gerais, abrindo horizontes para que jovens da escola pública ingressem no ensino superior em computação."
    )

    # =========================================================================
    # SLIDE 8: REFERÊNCIAS
    # =========================================================================
    slide8 = prs.slides.add_slide(blank_layout)
    apply_slide_background(slide8)
    add_slide_header(slide8, "SLIDE 08 • REFERÊNCIAS & ENCERRAMENTO", "Fundamentação Teórica & Agradecimentos Institucionais", "Normas técnicas ABNT NBR 6023, literatura científica e reconhecimento aos apoiadores.")

    w_ref = Inches(7.50)
    c_ref = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.70), Inches(1.70), w_ref, Inches(5.12))
    c_ref.fill.solid()
    c_ref.fill.fore_color.rgb = CARD_BG
    c_ref.line.color.rgb = BORDER_BLUE
    c_ref.line.width = Pt(1.5)

    rtf = c_ref.text_frame
    rtf.word_wrap = True
    rtf.margin_left = rtf.margin_right = Inches(0.24)
    rtf.margin_top = Inches(0.20)

    rp1 = rtf.paragraphs[0]
    rp1.text = "📚 Referências Bibliográficas e Normativas (ABNT NBR 6023)"
    rp1.font.name = FONT_MAIN
    rp1.font.size = Pt(13)
    rp1.font.bold = True
    rp1.font.color.rgb = CEFET_CYAN

    refs = [
        "BRASIL. Ministério da Educação. Normas sobre Computação na Educação Básica — Complemento à BNCC. Resolução CNE/CEB nº 1/2022. Brasília: MEC, 2022.",
        "FLET. Flet: Build multi-platform apps in Python powered by Flutter. Disponível em: https://flet.dev/. Acesso em: 2026.",
        "GOOGLE. Google Gemini API Documentation. Disponível em: https://ai.google.dev/. Acesso em: 2026.",
        "RAABE, A. L. A.; BRACKMANN, C. P.; CAMPOS, F. R. Currículo de Referência em Tecnologia e Computação. São Paulo: CIEB, 2018.",
        "WING, J. M. Computational thinking. Communications of the ACM, v. 49, n. 3, p. 33–35, 2006.",
        "ROMÁN-GONZÁLEZ, M. et al. Which cognitive abilities underlie computational thinking? Criterion-referenced validation of CTt. Computers in Human Behavior, 2017.",
        "BANDURA, A. Self-efficacy: The exercise of control. New York: W. H. Freeman, 1997."
    ]

    for rf in refs:
        p = rtf.add_paragraph()
        p.text = f"• {rf}"
        p.font.name = FONT_MAIN
        p.font.size = Pt(10)
        p.font.color.rgb = TEXT_SILVER
        p.space_before = Pt(6)

    # Coluna Direita: Card de Agradecimentos e Contatos
    w_thk = Inches(4.15)
    c_thk = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.48), Inches(1.70), w_thk, Inches(5.12))
    c_thk.fill.solid()
    c_thk.fill.fore_color.rgb = CARD_BG_HOVER
    c_thk.line.color.rgb = BORDER_CYAN
    c_thk.line.width = Pt(1.5)

    t_thk = slide8.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.48), Inches(1.70), w_thk, Inches(0.08))
    t_thk.fill.solid()
    t_thk.fill.fore_color.rgb = CEFET_CYAN
    t_thk.line.fill.background()

    ttf = c_thk.text_frame
    ttf.word_wrap = True
    ttf.margin_left = ttf.margin_right = Inches(0.24)
    ttf.margin_top = Inches(0.24)

    tp1 = ttf.paragraphs[0]
    tp1.alignment = PP_ALIGN.CENTER
    tp1.text = "🤝"
    tp1.font.size = Pt(30)

    tp2 = ttf.add_paragraph()
    tp2.alignment = PP_ALIGN.CENTER
    tp2.text = "Muito Obrigado!"
    tp2.font.name = FONT_MAIN
    tp2.font.size = Pt(20)
    tp2.font.bold = True
    tp2.font.color.rgb = TEXT_WHITE
    tp2.space_before = Pt(4)

    tp3 = ttf.add_paragraph()
    tp3.alignment = PP_ALIGN.CENTER
    tp3.text = "Agradecimento especial à FAPEMIG pelo financiamento da pesquisa, ao CEFET-MG Campus Varginha, ao corpo docente de BSI, à DEDC, Porto Inovação, Nascente, Trens Dê, SEBRAE e à comissão organizadora do II SINTEC 2026."
    tp3.font.name = FONT_MAIN
    tp3.font.size = Pt(10.5)
    tp3.font.color.rgb = TEXT_LIGHT
    tp3.space_before = Pt(8)

    tp4 = ttf.add_paragraph()
    tp4.alignment = PP_ALIGN.CENTER
    tp4.text = "💬 Espaço Aberto para Arguição da Banca"
    tp4.font.name = FONT_MAIN
    tp4.font.size = Pt(11.5)
    tp4.font.bold = True
    tp4.font.color.rgb = CEFET_CYAN
    tp4.space_before = Pt(12)

    tp5 = ttf.add_paragraph()
    tp5.alignment = PP_ALIGN.CENTER
    tp5.text = "Autores: Victor Couto Zanaroli (Apresentador)\nKaique Araújo Xavier & Rafael Oliveira Zanelato\nvictorzanaroli@gmail.com\n\nOrientador: Prof. Me. Lázaro Eduardo da Silva\nlazaro@cefetmg.br"
    tp5.font.name = FONT_MAIN
    tp5.font.size = Pt(9.5)
    tp5.font.color.rgb = TEXT_SILVER
    tp5.space_before = Pt(10)

    add_slide_footer(slide8, 8, 8)

    slide8.notes_slide.notes_text_frame.text = (
        "⏱️ TEMPO ESTIMADO: 00:30 min (09:30 - 10:00)\n\n"
        "🎯 ROTEIRO DE FALA DO APRESENTADOR (Victor):\n"
        "1. Conclusão Solene aos 10 minutos cravados:\n"
        "   'Agradeço imensamente à FAPEMIG pelo fomento vital, ao CEFET-MG Campus Varginha, ao meu orientador Prof. Lázaro e aos meus colegas bolsistas Kaique e Rafael.\n"
        "   Encerro aqui a minha apresentação dentro do tempo regulamentar de 10 minutos e coloco-me à inteira disposição da ilustre banca examinadora para perguntas, considerações e sugestões. Muito obrigado!'"
    )

    # Salvar apresentações
    output_filename = "Apresentacao-SINTEC-2026-Trilhando-o-Caminho-do-Codigo.pptx"
    try:
        prs.save(output_filename)
        print(f"[OK] Apresentacao salva com sucesso em '{output_filename}' ({len(prs.slides)} slides)!")
    except PermissionError:
        alt_output = "Apresentacao-SINTEC-2026-Trilhando-o-Caminho-do-Codigo-Nova.pptx"
        prs.save(alt_output)
        print(f"[AVISO] O arquivo '{output_filename}' estava aberto no PowerPoint. Salvo em '{alt_output}'!")

    backup_filename = "Template-Apresentacao-SINTEC-2026-Final.pptx"
    try:
        prs.save(backup_filename)
        print(f"[OK] Copia fiel salva em '{backup_filename}'!")
    except PermissionError:
        alt_backup = "Template-Apresentacao-SINTEC-2026-Final-Novo.pptx"
        prs.save(alt_backup)
        print(f"[AVISO] O arquivo '{backup_filename}' estava aberto no PowerPoint. Salvo em '{alt_backup}'!")

if __name__ == "__main__":
    create_sintec_trilhando_deck()

