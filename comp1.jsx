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
        <button onClick={() => this.hello()}>Click me!</button>
        <p>Co tam u was?</p>
      </div>
    );
  }
}

export default Comp1; // eksport komponentu, zeby mozna go było uzywać w innych plikach
