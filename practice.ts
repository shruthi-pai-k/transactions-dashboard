export {};
let name: string = "Shruthi";
let amount: number = 250.5;
let isPaid: boolean = true;

amount = 100;
console.log("Typescript here " + name + " " + amount + " " + isPaid);

const amounts: number[] = [100, 250, 40];

function addTax(price: number, rate: number): number {
  return price + price * rate;
}

console.log(addTax(100, 0.25));

interface Transaction {
  id: number;
  date: string;
  amount: number;
  category: string;
  description?: string; // the ? makes it optional
}

const t: Transaction = {
  id: 0,
  date: "2026-11-25",
  amount: 450,
  category: "Food",
  description: "I love typescript",
};

interface Household {
  livingroom: string;
  bedroomsize?: number;
  bathrooms: number;
  isGuestRoomPresent: boolean;
  sofaCount: bigint;
  moneyCurrency: symbol;
  flowers: any;
  canweplay(): void;
}

const i: Household = {
  livingroom: "pleasant",

  bathrooms: 4,
  isGuestRoomPresent: false,
  sofaCount: 246n,
  moneyCurrency: Symbol("$"),
  flowers: "ssss",
  canweplay() {
    console.log("we can play");
  },
};
console.log(t);
type Category = "Food" | "Travel" | "Bills" | "Other";

const t1 = {
  id: 1,
  date: "2026-11-25",
  amount: 30,
  category: "miscellaneous",
  description: "I love typescript",
};
const t2 = {
  id: 2,
  date: "2026-11-25",
  amount: 50,
  category: "Travel",
  description: "I love typescript",
};
const t3 = {
  id: 3,
  date: "2026-11-25",
  amount: 450,
  category: "Travel",
  description: "I love typescript",
};
const t4 = {
  id: 4,
  date: "2026-11-25",
  amount: 500,
  category: "Food",
  description: "I love typescript",
};
const t5 = {
  id: 5,
  date: "2026-11-25",
  amount: 20,
  category: "Food",
  description: "I love typescript",
};
const transactions: Transaction[] = [t1, t2, t3, t4, t5];

function filterByMinAmount(list: Transaction[], min: number): Transaction[] {
  return list.filter((t) => t.amount > min);
}

console.log(filterByMinAmount(transactions, 50));

function totalByCategory(list: Transaction[], category: Category): number {
  return list
    .filter((t) => {
      return t.category === category;
    })
    .reduce((totalAmount, t) => totalAmount + t.amount, 0);
}

console.log(`Food expense:${totalByCategory(transactions, "Food")}`);
