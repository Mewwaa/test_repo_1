import React from 'react'; // import potrzebnych bibliotek

class Comp1 extends React.Component { // klasa będąca komponentem
  constructor(props) { // konstruktor klasy, przechowuje stan danego komponentu
    super(props);
  }

  vixa() {
    console.log("Dobry wieczor Polska");
  }

  render() { // to będzie zwracane w htmlu!
    return (
      <div>
        <b>Hi there!</b>
        <b>Hello</b>
        <button onClick={() => this.vixa()}>Click me!</button>
      </div>
    );
  }
}

export default Comp1; // eksport komponentu, zeby mozna go było uzywać w innych plikach
