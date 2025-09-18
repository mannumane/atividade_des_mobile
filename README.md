## Projeto de Interfaces — Recriação de Telas (HTML & CSS)

Repositório público: `https://github.com/mannumane/atividade_des_mobile.git`

### Telas implementadas
- Home: `index.html` (espelho em `home.html`)
- Páginas: `page1.html` a `page14.html`

### Decisões de layout
- Mobile-first com Grid/Flex; tokens de espaçamento e tipografia em `:root` no `styles.css`.
- Paleta escura com alto contraste; foco visível; link de pulo para conteúdo.
- Header fixo com navegação consistente; cartões de navegação na home.

### Breakpoints
- Base: ≤ 480px
- 768px (tablets)
- 1024px (desktop)
- 1440px (monitores grandes)

### Acessibilidade
- Semântica: `header`, `nav`, `main`, `section`, `article`, `footer`.
- `alt` nas imagens; `aria-current` na navegação; foco visível; skip link.
- Imagens fluidas (`max-width: 100%; height: auto`).

### Como rodar
Abra `index.html` em um navegador moderno.

> Observação: A estrutura está pronta para refinamento de cada tela visando fidelidade total às imagens em `pages_images/`.

