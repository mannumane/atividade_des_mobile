Exercício: Construção de Interfaces em HTML e CSS a partir de Imagens
Contexto:
    Este arquivo contém apenas imagens estáticas de telas de uma aplicação
    (wireframes/mockups). Sua tarefa é reconstruir fielmente cada tela em HTML e
    CSS, garantindo semântica, responsividade e acessibilidade.
Objetivos de Aprendizagem:
• Converter layouts visuais em estrutura semântica HTML adequada.
• Utilizar CSS moderno (Grid e/ou Flexbox) para compor o layout.
• Implementar responsividade (mobile-first) com breakpoints.
• Adotar boas práticas de acessibilidade (labels, contraste, foco).
• Organizar o código e a estrutura do projeto de forma limpa e escalável.
Entregáveis:
1. Link do repositório GitHub com:
o Páginas HTML: uma para cada tela do PDF (home.html,
listagem.html, detalhe.html, etc.).
o CSS: um único arquivo styles.css (ou pasta css/) com variáveis para
cores e espaçamentos.
o Assets: imagens salvas em assets/ (use placeholders quando
necessário).
o README.md com:
▪ Lista das telas implementadas,
▪ Decisões de layout,
▪ Breakpoints utilizados,
▪ Observações de acessibilidade.
Forma de Entrega no GitHub:
• Crie um repositório público.
• Organize os arquivos conforme a estrutura sugerida (veja abaixo).
• Confirme que o repositório está acessível e inclua o seu link.
Requisitos Obrigatórios:
Semântica HTML
• Usar header, nav, main, section, article, aside, footer.
• Títulos hierárquicos corretos (h1…h3).
• Formulários com label vinculado e type correto em button/input.
Layout e Estilo:
• Aplicar Grid ou Flexbox (não usar tabelas para layout).
• Mobile-first: base ≤ 420px, com ao menos 3 breakpoints (ex.: 768px e
1024px).
Breakpoints comuns (referência, não regra)
Dispositivo Breakpoint mais usado
Celulares pequenos 320 px a 480 px
Celulares médios/grandes 481 px a 767 px
Tablets 768 px a 1023 px
Notebooks/desktops 1024 px a 1439 px
Monitores grandes 1440 px ou mais
• Em projetos modernos recomenda-se mobile-first: escrever o
CSS base para telas pequenas e ir adicionando @media (minwidth: …) conforme a tela aumenta.
• Breakpoints são os valores de largura (em px, em ou rem) usados
nas media queries do CSS para “quebrar” ou ajustar o layout de
acordo com o tamanho da tela, tornando o site responsivo e
acessível em qualquer dispositivo.
• Escalas tipográficas e de espaçamento consistentes.
Escala tipográfica: É uma sequência de tamanhos de fonte que cresce de
forma proporcional.
Exemplo de escala em rem:
Nível Uso típico Tamanho
h1 Título principal 2.5rem
h2 Subtítulo 2rem
h3 Seção interna 1.5rem
body Texto comum 1rem
small Observações 0.875rem
• Consistência: um h2 em toda a aplicação sempre terá o mesmo
tamanho, peso e altura de linha.
• Benefício: facilita leitura e cria hierarquia visual clara.
Escala de espaçamento
É a tabela de valores para margens e paddings.
Exemplo em rem:
Token Valor
xs 0.25rem
sm 0.5rem
md 1rem
lg 1.5rem
xl 2rem
Uso no CSS:
:root {
 --space-xs: 0.25rem;
 --space-sm: 0.5rem;
 --space-md: 1rem;
 --space-lg: 1.5rem;
 --space-xl: 2rem;
}
.section {
 padding: var(--space-lg);
 margin-bottom: var(--space-xl);
}
Assim, todos os blocos seguem a mesma lógica de distâncias.
Por que é importante
• Uniformidade visual: tudo parece planejado e profissional.
• Manutenção simples: muda-se um valor na escala e o projeto
inteiro se ajusta.
Acessibilidade: tamanhos proporcionais melhoram a leitura em
diferentes telas.
• Variáveis CSS em :root.
• Estados de interação visíveis: :hover, :focus, :disabled, :active.
Acessibilidade
• Contraste mínimo conforme WCAG AA.
Esse padrão garante que pessoas com baixa visão, daltonismo ou que
estejam em ambientes com muita luz consigam ler o conteúdo sem
esforço.
O que é contraste de cores
É a diferença de luminosidade entre duas cores.
Quanto maior a diferença, mais legível o texto.
• Texto preto em fundo branco → alto contraste.
• Texto cinza-claro em fundo branco → baixo contraste.
Requisitos WCAG 2.1 – Nível AA
A norma WCAG define uma relação de contraste (contrast ratio) que deve
ser atingida:
Tipo de texto Relação mínima
Texto normal (até 18 pt ou 24 px) 4.5 : 1
Texto grande (≥ 18 pt ou 14 pt em negrito) 3 : 1
Ícones/elementos essenciais 3 : 1
Relação 4.5: 1 significa que a cor mais clara precisa ser pelo menos 4,5
vezes mais “luminosa” que a mais escura.
Como medir
• Ferramentas online:
o WebAIM Contrast Checker
o Contrast Ratio
• Extensões: Chrome/Edge DevTools têm medidor embutido
(seletor de cor mostra a razão de contraste).
Exemplo:
• Preto (#000000) em branco (#FFFFFF) → 21 : 1 ✔
• Cinza #777 em branco (#FFFFFF) → 4.48 : 1 (quase, mas não
atinge 4.5: 1).
Por que é importante
• Inclusão: usuários com daltonismo ou baixa visão conseguem ler.
• Legislação: em muitos países, seguir WCAG é exigência legal para
sites públicos.
• Usabilidade: melhora a leitura em telas com brilho alto ou em
ambientes externos.
• alt em todas as imagens não decorativas.
• Ícones com aria-label se não houver texto visível.
Responsividade
• Layout deve funcionar de 320px a 1440px.
• Imagens fluidas (max-width: 100%; height: auto).
Fidelidade ao Design
• Reproduzir a estrutura, hierarquia, alinhamentos e espaçamentos da
imagem.
• Use devtools ou réguas para estimar proporções.
Restrições Técnicas
• Não usar frameworks CSS (Bootstrap, Tailwind, etc.).
• Proibido usar imagens de texto para títulos/labels.
Critérios:
     1. Semântica & Acessibilidade(Peso 25%):
        Excelente(100% do critério):
            Tags semânticas corretas (header,
            main, footer etc.), formulários com
            label/for, alt em todas as imagens,
            foco visível, navegação por teclado
            e contraste WCAG AA. 
    2. Layout & Responsividade(Peso 30%):
        Excelente(100% do critério):
            Layout fiel ao design com CSS
            Grid/Flex; mobile-first; ≥3
            breakpoints; funcionamento
            perfeito de 320 px a 1440 px;
            imagens fluidas.     
    3. Fidelidade Visual(Peso 25%):
        Excelente(100% do critério):
            Estrutura, alinhamento, hierarquia
            tipográfica e escala de
            espaçamento consistentes com o
            mockup; uso correto da escala
            tipográfica e tokens de
            espaçamento.
    4.Qualidade do Código(Peso 10%)
        Excelente(100% do critério): 
            Código organizado, classes e
            variáveis CSS claras, uso de :root
            para variáveis, comentários
            sucintos e sem redundâncias.
    5. Entrega & Documentação(GitHub)(Peso 10%):
        Excelente(100 % do critério):
            Repositório público bem
            estruturado (index.html, /css/,
            /assets/); README.md completo
            (telas, decisões, breakpoints,
            acessibilidade); link funcional.



O link do repositório GitHub deve estar correto e público.
Estrutura Sugerida do Repositório
/projeto-interface/
 index.html
 outras-paginas.html
 /css/styles.css
 /assets/...
 README.md