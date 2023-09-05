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
  private _courseCount = 1;
  readonly dbID = 3555;
  constructor(private email: string, public name: string) {}
  get getUserEmail(): string {
    return this.email;
  }
  get getCourseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count must be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

const shahariaz = new NewUser("shahriaz@gmail.com", "shahriaz");
console.log(shahariaz);
