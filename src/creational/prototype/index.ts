/*
  Especificar so tipos de objeto a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo.

  JS E TS:
  - São linguagens baseadas em protótipos.
  - Se voce cria um objeto literal o prototype desse objeto literal é Object.prototype
  - Ou seja, se voce cria um objeto como const person = { name: 'Pedro', age: 27 }, voce pode chamar person.hasOwnProperty('name') (output true).
  - person nao possui hasOwnProperty, mas como ele é tb uma cópia de Object.prototype, ele possui sim.
  - Posso criar const anotherPerson = Object.create(person)
  - Aqui eu defini como prototype de anotherPerson, o objeto person. Portanto posso chamar anotherPerson.name. Agora anotherPerson.hasOwnProperty('name') vai dar false.

  Visão Geral do padrão Prototype:
  - O tipo de objeto a ser criado é determinado pelo objeto protótipo.
  - É tipicamente usado para evitar a recriação de objetos complexos ou "caros", computacionalmente falando.
  - Pode manter um registro de objetos protótipo em um objeto separado. Por exemplo, eu posso ter uma classe e dentro dessa classe eu tenho uma estrutura de dados qualquer (objeto ou array) dentro dessa classe eu posso manter um registro dos meus objetos protótipos.
  - Então eu poderia ter um protótipo para uma conexão com a base de dados, um protótipo para uma pessoa, ou seja, varios protótipos nas chaves do objeto.
  - Geralmente esse padrão é criado com um método "clone" dentro do protótipo. O trabalho do clone é clonar a instância da classe.
  - o método clone pode gerar uma shallow copy ou deep copy do objeto protótipo.
  - Evita que o cliente conheça as classes que criam os objetos.

  Aplicabilidade:
  - Use o padrão de prototype quando precisar que seu código não dependa de classes concretas para criação de novos objetos.
  - Use o padrão prototype quando quiser evitar explosão de subclasses para objetos muito similares
  - Use o padrão prototype para evitar a recriação de objetos caros.
*/
