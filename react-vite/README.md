o virtual dom é uma cópia do que estamos vendo no navegador, na memoria
qd o facebook quer mudar o nome de usuario, um texto ou algo do tipo
ele vai no virtual DOM e aplica esta mudança. E daí ele compara o DOM que está 
na tela com o virtual DOM, e esta diferença é aplicada, vou no DOM e aplico
apenas o que foi alterado.

Isso faz com que o processamento seja reduzido drasticamente

Aliado a isto, existe um conceito chamado SPA = Single Page Application
Traduzindo seria uma aplicação de uma página

Se temos um site feito em react, ele carregará apenas um index.html, uma só página
e este arquivo será renderizado. O Javascript irá rodar o código, gerar o site
e colocar o site dentro de uma div. Então todo o site acaba meio que tendo uma única página
Na prática é isso, mesmo criando várias páginas, tudo é feito dentro de uma única div
, são alterados e inseridos no mesmo html.

CRA = Create React App - comando oficial para criar um projeto
comando: npx create-react-app 
E para criar um projeto usando typescript fazemos da seguinte forma
create-react-app react-primeiro --template typescript


Reducers = Tem o mesmo papel do state, mas serve para fins mais complexos.
Quando você quer modificar listas, não um valor único. Um array de strings por ex
ora vc quer add coisas nessa lista, limpar, ordenar de forma diferente... etc
qd tem um objeto que tem varios valores nesse objeto, adicionar novos valores... etc


