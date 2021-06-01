import React from 'react'; // import potrzebnych bibliotek

class Comp1 extends React.Component { // klasa będąca komponentem
  constructor(props) { // konstruktor klasy, przechowuje stan danego komponentu
    super(props);
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
      </div>
    );
  }
}

export default Comp1; // eksport komponentu, zeby mozna go było uzywać w innych plikach
