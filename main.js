let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('En caso de tener problemas te devolvemos tu dinero')
  .pauseFor(200)
  .deleteChars(10)
  .start();