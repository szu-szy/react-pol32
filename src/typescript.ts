// zadania typescript

// ---- union = "|" - "albo albo" / "lub" / "OR"
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

// ---- typowanie parametrow funkcji
type GetItemProps = {
  id: string;
  text: string;
  isVibile: boolean;
};

// typowanie parametrow jako typy proste
const getItem = (id: string, text: string, isVisible: boolean) => {};
getItem("10", "text", true);

// destrukturyzujemy parametry obiektu o typie GetItemProps
// typowanie parametrow jako obiekt typu GetItemProps
const getAnotherItem = ({ id, text, isVibile }: GetItemProps) => {
  // const { id, text, isVibile } = params;
  console.log(id, text, isVibile);
};
getAnotherItem({ id: "id 312321", text: "textdsadas", isVibile: true });

// ---- typowanie wartosci zwracanej z funkcji (): typ => {}
// nasza funkcja nic nie zwraca > void
// const getData = (): void => {}

// getData zwraca nam z funkcji dane typu string
const getData = (): string => {
  return "tekst";
};

// zadanie
type BigHero = {
  name: string;
  strength: number;
};

const getBigHero = (): BigHero => {
  return {
    name: "big hero name",
    strength: 10,
  };
};

export {};
