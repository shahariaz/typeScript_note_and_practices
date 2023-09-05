let score: number | string = 33;
score = "33";

type User = {
  name: string;
  id: string;
};

type Admin = {
  name: string;
  id: string;
  isAdmin: true;
};

let shahraiz: User | Admin;

//define a function using unionType

function getDbId(id: string | number) {}

//define a Array using unionType

const data: number[] = [1, 3, 4];
const data2: string[] = ["2", "shhariaz"];
const data3: string[] | number[] = [1];
const data4: (string | number)[] = [1, "shaharaiz"];

export {};
