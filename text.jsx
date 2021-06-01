import React from 'react'; // import potrzebnych bibliotek

class strona extends React.Component { // klasa będąca komponentem
  constructor(props) { // konstruktor klasy, przechowuje stan danego komponentu
    super(props);
  }

  render() { // to będzie zwracane w htmlu!
    return (
      <div>
        <form><input type="text" id="fname" name="fname"></input></form>
      </div>
    );
  }
}

export default strona; // eksport komponentu, zeby mozna go było uzywać w innych plikach
