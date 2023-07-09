function findYoungestPerson(people) {
    if (people.length === 0) {
      return null; // Devuelve null si el arreglo de personas está vacío
    }
  
    let youngestPerson = people[0]; // Inicializa la persona más joven con el primer elemento del arreglo
  
    for (let i = 1; i < people.length; i++) {
      if (people[i].age < youngestPerson.age) {
        youngestPerson = people[i]; // Actualiza la persona más joven si se encuentra una más joven en el arreglo
      }
    }
  
    return youngestPerson;
  }
  
  const people = [
    { name: 'John', age: 25 },
    { name: 'Emily', age: 20 },
    { name: 'Michael', age: 18 },
    { name: 'Sophia', age: 22 }
  ];
  
  const youngest = findYoungestPerson(people);
  console.log(youngest); // Resultado esperado: { name: 'Michael', age: 18 }
  