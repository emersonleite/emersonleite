---
layout: page
title: Learn
permalink: /learn/
---

### Algumas propriedades importantes na manipulação de textos via CSS: 

```css
color: #000; 
font-style: normal;
font-weight: bold;
```
- color define a cor do texto. Pode ser #335566, #333 ou rgba(0,0,0,0.5);
- font-style define o estilo do texto. Pode ser normal, italic, oblique;
- font-weight define o peso do texto. Pode ser normal, bold, bolder, lighter e de 100 a 900;

- font-size define o tamanho do texto. Valores em px ou em
- line-height define o tamanho da linha do texto. Valores em **px** ou **em**
- **em** é um unidade relativa. *1em* equivale ao tamanho padrão de fonte do
dispositivo. Browsers de computadores geralmente tem padrão de 16px.

- font-family define a família tipográfica; 
- o atributo *font* pode ser utilizado para definir quase todos os valores da font em
apenas um atributo. Deve ser utilizada a seguinte ordem:
- font: font-style font-weight font-size/line-height font-family

- text-align alinha o texto. Valores: left, right, center
- text-transform transforma o texto. Valores: uppercase, lowercase, capitalize
- text-indent indenta o texto. Valores em px ou em

- text-decoration decora o texto. Valores: underline, overline, line-through
- text-shadow coloca sombra no texto. Valores: horizontal vertical blur cor;
é possível utilizar valores negativas no horizontal e vertical

- white-space define se o texto quebra ou não. Valores: nowrap, normal
- word-spacing define o espaçamento entre palavras. Pode ser em px ou em
- letter-spacing define o tracking. Pode ser em px ou em

- list-style-type define o estilo do marcador da lista. Valores: circle, square, disc
- list-style-position define a posição do marcador. Valores: inside, outside
- list-style-image substitui o marcador por uma imagem. Valor: url da imagem
- list-style: none remove os marcadores

<p class="codepen" data-height="293" data-theme-id="37855" data-default-tab="html,result" data-user="engleite" data-slug-hash="xxbGxLq" style="height: 293px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="grid-flex">
  <span>See the Pen <a href="https://codepen.io/engleite/pen/xxbGxLq">
  grid-flex</a> by engleite (<a href="https://codepen.io/engleite">@engleite</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<iframe width="100%" height="300" src="//jsfiddle.net/emerson_bl7/qh65brvp/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/)

You can find the source code for the Jekyll new theme at:
{% include icon-github.html username="jglovier" %} /
[jekyll-new](https://github.com/jglovier/jekyll-new)

You can find the source code for Jekyll at
{% include icon-github.html username="jekyll" %} /
[jekyll](https://github.com/jekyll/jekyll)
