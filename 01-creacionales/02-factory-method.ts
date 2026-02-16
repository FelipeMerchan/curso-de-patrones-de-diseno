/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburgesa de %cpollo', COLORS.yellow);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburgesa de %cres', COLORS.brown);
  }
}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburgesa de %cfrijol', COLORS.orange);
  }
}

/* abstract class la usamos para no permitir que se creen instancias de la clase,
es decir, no podamos hacer un new Restaurant(), la clase abstracta solo sirve para
definir el esqueleto de otras clases, es como el contrato que las clases que la usen deban cumplir: */
abstract class Restaurant {
  abstract createHamgurger(): Hamburger;

  orderHamburger(): void {
    const hamgurger = this.createHamgurger();
    hamgurger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamgurger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamgurger(): Hamburger {
    return new BeefHamburger();
  }
}

class BeanRestaurant extends Restaurant {
  override createHamgurger(): Hamburger {
    return new BeanHamburger();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt('¿Qué tipo de hamburgesa quieres? (chicken/beef/bean)');

  switch (burgerType) {
    case 'chicken':
      /* No estamos mandando llamar la creación de la hamburguesa aquí cuando
      usamos las fábricas (por ejemplo, ChickenRestaurant):*/
      restaurant = new ChickenRestaurant();
      break;
    case 'beef':
      restaurant = new BeefRestaurant();
      break;
    case 'bean':
      restaurant = new BeanRestaurant();
      break;
  
    default:
      throw new Error('Opción no válida');
  }

  restaurant.orderHamburger();
}

main();