"use strict";
// class NewUser {
//   email: string;
//   name: string;
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// professional way
class NewUser {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this._courseCount = 1;
    this.dbID = 3555;
  }
  get getUserEmail() {
    return this.email;
  }
  get getCourseCount() {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count must be greater than 1");
    }
    this._courseCount = courseNum;
  }
}
const shahariaz = new NewUser("shahriaz@gmail.com", "shahriaz");
console.log(shahariaz);
