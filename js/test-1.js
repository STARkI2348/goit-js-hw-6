
const animal = {
	legs: 4,
  };
  
  const dog = Object.create(animal);
  dog.name = "Mango";
  
  console.log(dog); // { name: "Mango", [[Prototype]]: animal }
  const parent = {
	name: "Stacey",
	surname: "Moore",
	age: 54,
	heritage: "Irish",
  };
  
  const child = Object.create(parent);
  child.name = "Jason";
  child.age = 27;
  
  console.log(child.name , child.surname);