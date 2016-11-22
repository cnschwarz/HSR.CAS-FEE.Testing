import {Lion} from './lion';
import {Panda} from './panda';
import {Animal} from './animal';
import {FoodStorageBase, FoodStorage} from './foodStorage';

export interface AnimalContextBase {
  addLion(name: string): Lion;

  addPanda(name: string): Panda;
  animals() : Animal[];
  storage() : FoodStorageBase;
}

/**
 * Created by sgehrig on 14.09.2016.
 */
export class AnimalContext implements AnimalContextBase {
  private _animals: Animal[] = new Array<Animal>();
  private _storage : FoodStorage = new FoodStorage();

  constructor() {}

  public addLion(name: string): Lion {
    let lion = new Lion(this, name);
    this._animals.push(lion);
    return lion;
  }

  public addPanda(name: string): Panda {
    let panda = new Panda(this, name);
    this._animals.push(panda);
    return panda;
  }

  public animals() : Animal[] {
    return this._animals;
  }

  public storage() : FoodStorageBase {
    return this._storage;
  }
}