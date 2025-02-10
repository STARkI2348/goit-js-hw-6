class Car {
  #brand;
  #model;
  #price;

  constructor(params) {
    this.#brand = params.brand;
    this.#model = params.model;
    this.#price = params.price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

const car = new Car({
  brand: "BMW",
  model: "X5",
  price: "40000"
});

console.log(car.price);
car.price = "35000";
console.log(car.price);

console.log(car.brand);
car.brand = "Mers";
console.log(car.brand);