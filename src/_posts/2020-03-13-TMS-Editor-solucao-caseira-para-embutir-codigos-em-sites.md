---
layout: post-view
title: 'TMS Editor: solução caseira para embutir códigos em sites'
description: 'Solução para edição de códigos no navegador. Feito em JS puro. Fiquem a vontade de ajudar a desenvolver'
img: 'tms-editor'
date:   2020-03-13 07:00:00 -0300
summary: 'TMS Editor: solução caseira para embutir códigos em sites'
excerpt: 
excerpt_separator: <!--Leias mais-->
comments: true
categories: [editor de codigo, javascript, playground]
tags: [editor de codigo, javascript, playground]
video: '<iframe width="960" height="502" src="https://www.youtube.com/embed/cdKZDeE94r0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

sharing:
  twitter: 'TMS Editor: solução caseira para embutir códigos em sites'
  facebook: 'TMS Editor: solução caseira para embutir códigos em sites'
  linkedin: 'TMS Editor: solução caseira para embutir códigos em sites'
source: link
---

Sempre gostei de ferramentas para codificação as quais pudessem ser editadas dentro de um site. Temos diversas ferramentas hoje: os chamados *playgrounds*. Um dos mais conhecidos é o codepen.io. Eles possibilitam o armazenamento de pequenos trechos de código na nuvem para poderem ser acessados de qualquer lugar com acesso à internet e, também, que sejam embutidos dentro de determinados sites.

A grande limitação dessas ferramentas, a meu ver - isso é opinião minha - é o fato de que, o código, de fato não é seu. Se 'der na louca' de o provedor de espaço para códigos querer cobrar pelo espaço que antes era gratuito, você, pobre developer (geralmente duro), vai ter que pagar por ele. E, às vezes, caro. Aliás, os planos gratuitos, geralmente, não permitem que esses códigos sejam embutidos (palavra feia), ou melhor, do inglês: *embedded* e editáveis ao mesmo tempo dentro do seu site. E isso é ruim, se você quiser códigos com os quais seus leitores possam interagir de fato.

{{ page.video }}

Semanas atrás, descobri um editor de código na faixa e opensource. Ele é o *codemirror*. Que, segundo descrição própria, e em livre tradução, é ‘um editor de texto versátil, implementado em Javascript para o navegador’. Esse editor permite que sejam embutidos dentro de determinados sites códigos nas mais diversas linguagens, com alguns recursos como o de autocompletar e destaque por palavras chaves, da sintaxe, ou, em inglês, o recurso de *Syntax-Highlighting*, entre outros muitos recursos a explorar (fiquem a vontade, também).

Porém... o *codemirror* não roda o código. Ele serve para demonstrações estáticas. Como o bom e velho Javascript é dinâmico, e gostamos dele exatamente para poder brincar no navegador, o *codemirror* da forma como é apresentado é um recurso acessório para implementação, por parte de terceiros, de um editor de código de fato.

O problema: limitação do *codemirror*, que é um editor de código sem a devida ‘vida’.

Solução? Enfim, a solução temporária, e por demais simples, foi a criação do meu próprio editor de código embedded no navegador, que utiliza recursos muito úteis do *codemirror*, que citei acima, juntamente com a possibilidade de se poder rodar esse código no *browser*. E melhor: o código fica dentro da sua página html e não precisa de um servidor que o hospede.

Peço que avaliem o **TMS Editor**. É uma solução caseira para um problema que encontrei. Fiquem a vontade de gostar, desgostar e melhorar.

O código está no github, e, por enquanto, o editor só possibilita rodar javascript.

[Site do projeto](https://www.emersonleite.dev/projetos/tms/)

[Repositório](https://github.com/emersonleite/tmseditor) 