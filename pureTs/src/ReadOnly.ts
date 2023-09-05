// if we assigned a variable and before the variable we assigned Readonly . then we can't change the value of the variable

const Allusers = {
  _id: "3j34k3jfkdi",
  name: "shahariaz",
  email: "example@gmail.com",
  pass: 3435,
  isActive: false,
};

Allusers.email = "test@example";
