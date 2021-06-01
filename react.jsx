import React from 'react'; // import potrzebnych bibliotek

class website extends React.Component { // klasa będąca komponentem
  constructor(props) { // konstruktor klasy, przechowuje stan danego komponentu
    super(props);
    this.state = {
      klasa: "2PUp"
    }
  }

  render() { // to będzie zwracane w htmlu!
    return (
      <div>
        Hello Again!
        <p>Hello class</p>{this.state.klasa}
      </div>
    );
  }
}

export default website; // eksport komponentu, zeby mozna go było uzywać w innych plikach
