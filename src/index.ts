import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([14,16,-2,0,5]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);