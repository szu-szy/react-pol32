// zadania typescript

// ---- union = "|"
// zapis preferowany przez Sz
type PersonNumberType = string | number;

const ID: PersonNumberType = 10;
const stringID: PersonNumberType = "10";

// analogiczny zapis do PersonNumberType - albo string albo number
const anyID: string | number = 10;

// ---- intersection = "&"
type Person = {
  firstName: string;
  age: number;
  lastName: string;
};

type Hero = Person & { mana: number };
// odpowiednik zapisu Hero ponizej
// type Hero = {
//   firstName: string;
//   age: number;
//   lastName: string;
// } & { mana: number }

const hero: Hero = {
  firstName: "name",
  age: 0,
  lastName: "last name",
  mana: 100,
};

// ---- Pick -> Pick<typ, wlasciwosc | wlasciwosc ...>

type PeronLastName = Pick<Person, "lastName">;

// wyglad typu po Pick
// type PersonLastName = {
//   lastName: string;
// }

// ---- Omit -> Omit<typ, wlasciwosc | wlasciwosc ...>

type PersonWithoutName = Omit<Person, "firstName" | "lastName">;
// type PersonWithoutName = {
//   lastName: string;
//   age: number;
// }
