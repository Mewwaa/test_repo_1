import React from 'react'; // import potrzebnych bibliotek

class Comp1 extends React.Component { // klasa będąca komponentem
  constructor(props) { // konstruktor klasy, przechowuje stan danego komponentu
    super(props);
  }

  hello() {
    console.log("Hello");
  }

  render() { // to będzie zwracane w htmlu!
    return (
      <div>
        Hello Again!
        <p>heyyyyyy</p>
        <button type="button">Click Me!</button>

        <h1>eloo</h1>




        fsdgsgsdgsdf
        <h3>glasld</h3>
      <button onClick={() => this.hello()}>Click me!</button>
       <p>Co tam u was?</p>

        <button onClick={() => this.hello()}>Click me!</button>
        <p>Co tam u was?</p>
        <p>Paragraf</p>
        <p>Coś</p>

        
        <p>numer 3</p>
      </div>
    );
  }
}

export default Comp1; // eksport komponentu, zeby mozna go było uzywać w innych plikach
