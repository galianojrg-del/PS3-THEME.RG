# PS3 Themes Hub

Site completo de partilha e download de temas para PlayStation 3, otimizado para o navegador antigo da consola (NetFront / WebKit 531).

## Estrutura de ficheiros

```
ps3-themes-hub/
├── index.html              # Página inicial
├── themes.html             # Todos os temas
├── categories.html         # Lista de categorias
├── category-*.html         # Páginas por categoria
├── install.html            # Guia de instalação
├── css/
│   └── style.css           # Estilos (tema escuro XMB)
├── js/
│   └── script.js           # JavaScript mínimo
├── themes/
│   └── *.html              # Páginas individuais de cada tema
├── images/                 # Coloca aqui as imagens de pré-visualização
└── README.md               # Este ficheiro
```

## Como substituir os exemplos pelos teus temas reais

1. **Cria a página do tema**  
   Copia um ficheiro existente em `themes/` (ex: `ps3-classic-blue.html`) e renomeia-o.

2. **Edita o conteúdo**  
   - Nome do tema  
   - Descrição  
   - Categoria  
   - Versão / data  
   - Tamanho do ficheiro  
   - Estado de verificação (`verified` ou `not-verified`)

3. **Substitui o link MediaFire**  
   Troca a URL do botão:
   ```html
   <a href="https://www.mediafire.com/file/TEU_CODIGO_AQUI/nome_do_tema.p3t" ...>
   ```
   Usa o link **real** que o MediaFire te dá (não inventes).

4. **Adiciona a imagem de pré-visualização**  
   - Coloca a imagem em `images/` (ex: `images/meu-tema.jpg`)  
   - Substitui o `<div class="placeholder-img">` por:
     ```html
     <img src="../images/meu-tema.jpg" alt="Pré-visualização do tema" width="500">
     ```
   - Nas listagens (index.html e themes.html) usa caminho relativo correto: `images/meu-tema.jpg`

5. **Atualiza as listagens**  
   - `index.html` → secções “Temas Populares” e “Temas Recentes”  
   - `themes.html` → lista completa  
   - Páginas de categoria (`category-*.html`)

6. **Formato do ficheiro**  
   Usa preferencialmente `.p3t`. Se for ZIP, indica na descrição.

## Publicar o site (HTTPS)

O navegador da PS3 funciona melhor com HTTPS (e muitos serviços exigem-no).

### Opções recomendadas (gratuitas):

1. **GitHub Pages**  
   - Cria um repositório  
   - Faz upload dos ficheiros  
   - Ativa Pages (Settings → Pages)  
   - URL: `https://teu-usuario.github.io/ps3-themes-hub/`

2. **Netlify** ou **Cloudflare Pages**  
   - Arrasta a pasta do projeto  
   - Obténs HTTPS automático

3. **Qualquer alojamento com suporte a HTML estático**  
   - Certifica-te que o certificado SSL está ativo

### Dicas importantes:
- Não uses redirecionamentos complicados
- Mantém as páginas leves
- Testa sempre o link final na PS3 (escreve o URL completo)

## Guia de testes de compatibilidade com o navegador da PS3

1. **Atualiza o sistema da PS3** para a versão mais recente possível (4.xx).

2. **Abre o Internet Browser** (coluna Rede → Internet Browser).

3. **Define a página inicial como em branco** (se aparecer “Update your browser” do Google):
   - Triângulo → Tools → Homepage → Use blank page

4. **Escreve o URL do teu site** diretamente (não uses a pesquisa Google).

5. **Testa os seguintes pontos:**
   - [ ] A página carrega sem erros
   - [ ] O menu de navegação é legível e clicável com o comando
   - [ ] Os cartões de temas aparecem corretamente
   - [ ] Os botões “Descarregar” abrem o MediaFire
   - [ ] A página de instalação é legível
   - [ ] Funciona com JavaScript desativado (navegação básica)
   - [ ] Não há animações pesadas ou elementos que travem

6. **Resolução recomendada de teste:**
   - 720p e 1080p (a PS3 permite alterar o tamanho do browser)

7. **Problemas comuns:**
   - Imagens muito grandes → otimiza (JPG < 200 KB se possível)
   - CSS moderno (flexbox avançado, grid) → evita; usa o CSS fornecido
   - JavaScript moderno (arrow functions, let/const, fetch) → evita; o script.js usa apenas sintaxe antiga
   - Fontes externas → não uses (só Arial/Helvetica)

## Painel de administração (estrutura)

Este site é **estático**. Não existe backend.

Para adicionar temas como administrador:

### Método simples (recomendado):
1. Edita os ficheiros HTML manualmente (como descrito acima)
2. Faz upload das alterações para o alojamento

### Método alternativo (opcional, futuro):
- Cria um ficheiro `themes.json` com a lista de temas
- Usa um script JS simples para gerar as listagens dinamicamente
- Continua a ser necessário editar o JSON e fazer upload

**Não foi criado um painel falso.** Qualquer painel real exigiria um servidor (PHP, Node, etc.) e base de dados.

## Requisitos técnicos cumpridos

- HTML5 simples + CSS + JS básico
- Sem frameworks pesados
- Navegação por teclas direcionais e Enter possível
- Páginas leves
- Funciona sem JavaScript
- Links HTML normais para downloads
- Sem pop-ups, sem registo obrigatório
- Tema escuro estilo XMB (preto + azul elétrico + branco)
- Mensagens claras para links de exemplo

## Licença e conteúdo

Os temas de demonstração são apenas exemplos.  
Substitui-os pelos teus próprios ficheiros .p3t e links MediaFire autorizados.  
Não hospedes nem partilhes conteúdo pirateado ou sem autorização.

---

**PS3 Themes Hub** — Pronto para testes reais na PlayStation 3.
