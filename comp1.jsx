import React from 'react'; // import potrzebnych bibliotek

class Comp1 extends React.Component { // klasa będąca komponentem
  constructor(props) { // konstruktor klasy, przechowuje stan danego komponentu
    super(props);
  }

  yes() {
    console.log("Hello");
  }

  render() { // to będzie zwracane w htmlu!
    return (
      <div>
        <b>Hi there!</b>
        <p>Hello</p>
        <button onClick={() => this.yes()}>Click me!</button>
      </div>
    );
  }
}

export default Comp1; // eksport komponentu, zeby mozna go było uzywać w innych plikach
