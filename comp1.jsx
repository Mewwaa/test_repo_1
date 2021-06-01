import React from 'react'; // import potrzebnych bibliotek

class Comp1 extends React.Component { // klasa będąca komponentem
  constructor(props) { // konstruktor klasy, przechowuje stan danego komponentu
    super(props);
  }

  render() { // to będzie zwracane w htmlu!
    return (
      <div>
        Hello Again!
        <input type="text" value="wpisz tekst"></input>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    );
  }
}

export default Comp1; // eksport komponentu, zeby mozna go było uzywać w innych plikach
