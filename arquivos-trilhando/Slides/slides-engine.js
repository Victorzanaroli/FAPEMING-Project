document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const progressBar = document.getElementById('progressBar');
    const counter = document.getElementById('slideCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const notesToggle = document.getElementById('notesToggle');
    const notesPanel = document.getElementById('notesPanel');
    const notesContent = document.getElementById('notesContent');
    const fullscreenToggle = document.getElementById('fullscreenToggle');

    let current = 0;
    let notesVisible = false;

    // Inject Code Modal HTML dynamically if not present
    if (!document.getElementById('codeModalOverlay')) {
        const modalHTML = `
        <div class="code-modal-overlay" id="codeModalOverlay">
            <div class="code-modal-content">
                <div class="code-modal-header">
                    <div class="code-modal-title" id="modalTitle">🔍 Detalhes da Demonstração</div>
                    <button class="code-modal-close" id="modalCloseBtn" title="Fechar (Esc)">✕</button>
                </div>
                <div class="code-modal-body">
                    <div>
                        <div class="modal-section-title">💻 Código Python Completo</div>
                        <div class="prompt-code" id="modalCodeBody"></div>
                    </div>
                    <div id="explanationContainer" style="display:none;">
                        <div class="modal-section-title">💡 Explicação Passo a Passo</div>
                        <div class="content-box accent-box" id="modalExplanationBody" style="font-size: 0.9rem; line-height: 1.6; color: #e2e8f0;"></div>
                    </div>
                    <div id="terminalContainer" style="display:none;">
                        <div class="modal-section-title">🖥️ Simulação da Saída no Terminal</div>
                        <div class="terminal-sim" id="modalTerminalBody"></div>
                    </div>
                </div>
                <div class="code-modal-actions">
                    <span style="font-size: 0.78rem; color: var(--text-muted);">Pressione <kbd style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; color:#fff;">Esc</kbd> para fechar</span>
                    <button class="copy-code-btn" id="modalCopyBtn">📋 Copiar Código</button>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modalOverlay = document.getElementById('codeModalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalCodeBody = document.getElementById('modalCodeBody');
    const modalExplanationBody = document.getElementById('modalExplanationBody');
    const explanationContainer = document.getElementById('explanationContainer');
    const modalTerminalBody = document.getElementById('modalTerminalBody');
    const terminalContainer = document.getElementById('terminalContainer');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCopyBtn = document.getElementById('modalCopyBtn');

    function showSlide(index) {
        if (index < 0 || index >= slides.length) return;
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
        current = index;
        
        const pct = ((index + 1) / slides.length) * 100;
        if (progressBar) progressBar.style.width = pct + '%';
        if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
        
        if (prevBtn) prevBtn.disabled = index === 0;
        if (nextBtn) nextBtn.disabled = index === slides.length - 1;
        
        if (notesVisible && notesContent) {
            const note = slides[index].getAttribute('data-notes') || 'Sem notas registradas para este slide.';
            notesContent.innerHTML = note;
        }

        // Scroll slide content to top
        slides[index].scrollTop = 0;
    }

    function next() { if (current < slides.length - 1) showSlide(current + 1); }
    function prev() { if (current > 0) showSlide(current - 1); }

    function toggleNotes() {
        notesVisible = !notesVisible;
        if (notesPanel) notesPanel.classList.toggle('visible', notesVisible);
        if (notesToggle) notesToggle.classList.toggle('active', notesVisible);
        if (notesVisible && notesContent) {
            const note = slides[current].getAttribute('data-notes') || 'Sem notas registradas para este slide.';
            notesContent.innerHTML = note;
        }
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => console.log(err));
        } else {
            document.exitFullscreen().catch(err => console.log(err));
        }
    }

    // Modal Expand Functions
    function openCodeModal(title, rawCode, formattedCodeHTML, explanation, terminalOutput) {
        if (modalTitle) modalTitle.innerHTML = title || '🔍 Demonstração de Código';
        if (modalCodeBody) modalCodeBody.innerHTML = formattedCodeHTML || rawCode;
        
        if (explanation && explanation.trim()) {
            modalExplanationBody.innerHTML = explanation;
            explanationContainer.style.display = 'block';
        } else {
            explanationContainer.style.display = 'none';
        }

        if (terminalOutput && terminalOutput.trim()) {
            modalTerminalBody.innerHTML = terminalOutput;
            terminalContainer.style.display = 'block';
        } else {
            terminalContainer.style.display = 'none';
        }

        // Store raw code on copy button for copy action
        if (modalCopyBtn) {
            modalCopyBtn.setAttribute('data-raw-code', rawCode);
            modalCopyBtn.innerHTML = '📋 Copiar Código';
        }

        modalOverlay.classList.add('active');
    }

    function closeCodeModal() {
        modalOverlay.classList.remove('active');
    }

    // Delegation for Expand Buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.expand-demo-btn');
        if (btn) {
            e.stopPropagation();
            const parentCard = btn.closest('.code-preview-card') || btn.closest('.content-box') || btn.parentElement;
            const codeElem = parentCard.querySelector('.prompt-code');
            
            const title = btn.getAttribute('data-title') || parentCard.getAttribute('data-title') || '💻 Demonstração Interativa';
            const formattedHTML = codeElem ? codeElem.innerHTML : btn.getAttribute('data-code');
            const rawCode = btn.getAttribute('data-raw-code') || (codeElem ? codeElem.textContent : '');
            const explanation = btn.getAttribute('data-explanation') || parentCard.getAttribute('data-explanation') || '';
            const terminal = btn.getAttribute('data-terminal') || parentCard.getAttribute('data-terminal') || '';

            openCodeModal(title, rawCode, formattedHTML, explanation, terminal);
        }
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCodeModal);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeCodeModal();
        });
    }

    if (modalCopyBtn) {
        modalCopyBtn.addEventListener('click', () => {
            const rawCode = modalCopyBtn.getAttribute('data-raw-code') || '';
            if (rawCode) {
                navigator.clipboard.writeText(rawCode).then(() => {
                    modalCopyBtn.innerHTML = '✓ Copiado com Sucesso!';
                    setTimeout(() => { modalCopyBtn.innerHTML = '📋 Copiar Código'; }, 2000);
                }).catch(() => {
                    modalCopyBtn.innerHTML = '❌ Falha ao Copiar';
                });
            }
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (notesToggle) notesToggle.addEventListener('click', toggleNotes);
    if (fullscreenToggle) fullscreenToggle.addEventListener('click', toggleFullscreen);

    // Keyboard Shortcuts
    document.addEventListener('keydown', e => {
        const hwModal = document.getElementById('trilhandoHomeworkModal');
        if (hwModal && hwModal.classList.contains('active')) {
            if (e.key === 'Escape') hwModal.classList.remove('active');
            return;
        }

        if (modalOverlay && modalOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeCodeModal();
            return;
        }

        const tag = (e.target && e.target.tagName) ? e.target.tagName.toUpperCase() : '';
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            next();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prev();
        } else if (e.key === 'n' || e.key === 'N') {
            toggleNotes();
        } else if (e.key === 'f' || e.key === 'F') {
            toggleFullscreen();
        }
    });

    // Touch Swipe Navigation for Mobile Devices
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', e => {
        if (e.touches && e.touches.length === 1) {
            touchStartX = e.touches[0].screenX;
            touchStartY = e.touches[0].screenY;
        }
    }, { passive: true });

    document.addEventListener('touchend', e => {
        if (e.changedTouches && e.changedTouches.length === 1) {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }
    }, { passive: true });

    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
            const activeModal = document.querySelector('#missionModal[style*="display: flex"], #fsImgOverlay[style*="display: flex"], .code-modal-overlay.active, .media-modal-overlay.active, #trilhandoHomeworkModal.active');
            if (activeModal) return;

            if (deltaX < 0) {
                next();
            } else {
                prev();
            }
        }
    }

    // Media Carousel Handling
    document.addEventListener('click', (e) => {
        const navBtn = e.target.closest('.carousel-nav-btn');
        const indicatorBtn = e.target.closest('.carousel-indicator-btn');
        
        if (navBtn || indicatorBtn) {
            const container = (navBtn || indicatorBtn).closest('.media-carousel-container');
            if (!container) return;
            
            const carouselSlides = container.querySelectorAll('.media-carousel-slide');
            const indicators = container.querySelectorAll('.carousel-indicator-btn');
            let currentIdx = Array.from(carouselSlides).findIndex(s => s.classList.contains('active'));
            if (currentIdx === -1) currentIdx = 0;
            
            let nextIdx = currentIdx;
            
            if (indicatorBtn) {
                nextIdx = parseInt(indicatorBtn.getAttribute('data-target-slide'), 10);
            } else if (navBtn.classList.contains('next-btn')) {
                nextIdx = (currentIdx + 1) % carouselSlides.length;
            } else if (navBtn.classList.contains('prev-btn')) {
                nextIdx = (currentIdx - 1 + carouselSlides.length) % carouselSlides.length;
            }
            
            carouselSlides.forEach((s, idx) => s.classList.toggle('active', idx === nextIdx));
            indicators.forEach((ind, idx) => ind.classList.toggle('active', idx === nextIdx));
        }
    });

    // Inject Media Modal HTML dynamically if not present
    if (!document.getElementById('mediaModalOverlay')) {
        const mediaModalHTML = `
        <div class="media-modal-overlay" id="mediaModalOverlay">
            <div class="media-modal-content">
                <div class="code-modal-header">
                    <div class="code-modal-title" id="mediaModalTitle">🔍 Projeção de Mídia em Alta Resolução</div>
                    <button class="code-modal-close" id="mediaModalCloseBtn" title="Fechar (Esc)">✕</button>
                </div>
                <div class="media-modal-view-stage" id="mediaModalViewStage"></div>
                <div style="padding: 16px 24px; background: rgba(15, 23, 42, 0.95); border-top: 1px solid rgba(255,255,255,0.08);">
                    <div class="modal-section-title" id="mediaModalPromptHeader">📜 Prompt Utilizado</div>
                    <div class="prompt-box-text" id="mediaModalPromptText" style="margin:0; font-size: 0.88rem; line-height: 1.6;"></div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', mediaModalHTML);
    }

    const mediaModalOverlay = document.getElementById('mediaModalOverlay');
    const mediaModalTitle = document.getElementById('mediaModalTitle');
    const mediaModalViewStage = document.getElementById('mediaModalViewStage');
    const mediaModalPromptHeader = document.getElementById('mediaModalPromptHeader');
    const mediaModalPromptText = document.getElementById('mediaModalPromptText');
    const mediaModalCloseBtn = document.getElementById('mediaModalCloseBtn');

    function openMediaModal(title, isGood, mediaNode, promptText) {
        if (mediaModalTitle) mediaModalTitle.innerHTML = title || '🔍 Projeção em Alta Resolução';
        
        const promptFooter = mediaModalPromptText ? mediaModalPromptText.parentElement : null;
        if (promptFooter) {
            if (promptText && promptText.trim()) {
                promptFooter.style.display = 'block';
                if (mediaModalPromptHeader) {
                    mediaModalPromptHeader.innerHTML = isGood ? '✨ Prompt BOM Estruturado' : '💀 Prompt RUIM Vago';
                    mediaModalPromptHeader.style.color = isGood ? 'var(--cefet-green)' : 'var(--cefet-red)';
                }
                if (mediaModalPromptText) {
                    mediaModalPromptText.className = 'prompt-box-text ' + (isGood ? 'good' : 'bad');
                    mediaModalPromptText.textContent = promptText || '';
                }
            } else {
                promptFooter.style.display = 'none';
            }
        }

        if (mediaModalViewStage) {
            mediaModalViewStage.innerHTML = '';
            const cloneNode = mediaNode.cloneNode(true);
            cloneNode.style.width = '320px';
            cloneNode.style.height = 'auto';
            cloneNode.style.minWidth = '260px';
            cloneNode.style.maxHeight = '72vh';
            cloneNode.style.maxWidth = '88vw';
            cloneNode.style.objectFit = 'contain';
            cloneNode.style.background = '#ffffff';
            cloneNode.style.padding = '12px';
            cloneNode.style.borderRadius = '16px';
            cloneNode.style.boxShadow = '0 0 50px rgba(0, 229, 255, 0.4)';

            if (cloneNode.tagName === 'VIDEO') {
                cloneNode.controls = true;
                cloneNode.autoplay = true;
                cloneNode.style.background = 'transparent';
                cloneNode.style.padding = '0';
                cloneNode.style.width = '100%';
            }
            mediaModalViewStage.appendChild(cloneNode);
        }

        if (mediaModalOverlay) mediaModalOverlay.classList.add('active');
    }

    function closeMediaModal() {
        if (mediaModalViewStage) {
            const video = mediaModalViewStage.querySelector('video');
            if (video) video.pause();
        }
        if (mediaModalOverlay) mediaModalOverlay.classList.remove('active');
    }

    // Media & QR Code Click Handler
    document.addEventListener('click', (e) => {
        // 1. Media Cards (comparativos com prompt)
        const mediaCard = e.target.closest('.media-card');
        if (mediaCard && (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.closest('.media-expand-btn'))) {
            e.stopPropagation();
            const mediaNode = mediaCard.querySelector('img, video');
            const titleElem = mediaCard.querySelector('.media-title-bad, .media-title-good');
            const isGood = mediaCard.querySelector('.media-title-good') !== null;
            const promptBox = mediaCard.querySelector('.prompt-box-text');
            
            const title = titleElem ? titleElem.textContent : '🔍 Mídia Expandida';
            const promptText = promptBox ? promptBox.textContent : '';

            if (mediaNode) {
                openMediaModal(title, isGood, mediaNode, promptText);
            }
            return;
        }

        // 2. QR Codes e Imagens Interativas gerais
        const qrcodeTarget = e.target.closest('.qrcode-container, .qrcode-img, img.qrcode-img');
        if (qrcodeTarget) {
            e.stopPropagation();
            const imgNode = qrcodeTarget.tagName === 'IMG' ? qrcodeTarget : qrcodeTarget.querySelector('img');
            if (imgNode) {
                const title = imgNode.getAttribute('alt') || 'QR Code Expandido';
                openMediaModal(`📱 ${title}`, true, imgNode, '');
            }
        }
    });

    if (mediaModalCloseBtn) mediaModalCloseBtn.addEventListener('click', closeMediaModal);
    if (mediaModalOverlay) {
        mediaModalOverlay.addEventListener('click', (e) => {
            if (e.target === mediaModalOverlay) closeMediaModal();
        });
    }

    // Close Modals on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (mediaModalOverlay && mediaModalOverlay.classList.contains('active')) {
                closeMediaModal();
            }
        }
    });

    // Initialize slide (with optional query param jump)
    const params = new URLSearchParams(window.location.search);
    const targetParam = params.get('slide');
    if (targetParam === 'last') {
        showSlide(slides.length - 1);
    } else if (targetParam === 'quiz') {
        const quizSlideIdx = Array.from(slides).findIndex(s => s.querySelector('[data-trilhando-quiz]'));
        showSlide(quizSlideIdx >= 0 ? quizSlideIdx : 0);
    } else if (targetParam && !isNaN(parseInt(targetParam, 10))) {
        const idx = Math.max(0, Math.min(slides.length - 1, parseInt(targetParam, 10) - 1));
        showSlide(idx);
    } else {
        showSlide(0);
    }
});


