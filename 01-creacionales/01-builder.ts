/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
  public cpu: string = 'cpu - not defined';
  public ram: string = 'ram - not defined';
  public storage: string = 'storage - not defined';
  public gpu?: string;

  displayConfiguration() {
    console.log(`Configuración de la computadora
      CPU: ${this.cpu}  
      RAM: ${this.ram}  
      Almacenamiento: ${this.storage}  
      GPU: ${this.gpu ?? 'No tiene GPU'}  
    `)
  }
}

/* Clase que va a implementar el patrón builder */
class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;

    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;

    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;

    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;

    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer: Computer = new ComputerBuilder()
    .setCPU('Inter Core 2 Dúo')
    .setRAM('4GB')
    .setStorage('256GB')
    /* Luego de que sepamos que creamos el objeto que deseamos llamamos
    el método build para retornar el objeto creado: */
    .build();

    console.log(`%cBasic computer`, COLORS.blue);
    basicComputer.displayConfiguration();

  const gamerComputer: Computer = new ComputerBuilder()
    .setCPU('AMD')
    .setRAM('1000GB')
    .setStorage('3TB')
    .setGPU('Nvidia RTX 4070')
    /* Luego de que sepamos que creamos el objeto que deseamos llamamos
    el método build para retornar el objeto creado: */
    .build();

  console.log(`%Gamer computer`, COLORS.blue);
    gamerComputer.displayConfiguration();
}

main();