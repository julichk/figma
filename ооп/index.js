class Users {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  static compereAge(user1, user2) {
    return user1.age === user2.age;
  }
}

class Admin extends Users {
  constructor(name, age, login, pass) {
    super(name, age);
    this.login = login;
    this.pass = pass;
  }
}
let user1 = new Users("Andrew", 33);
let user2 = new Admin("Sonia", 33, "Son", "123");

console.log(Admin.compereAge(user1, user2));

// class User {
//   constructor(name, role) {
//     this.name = name;
//     this.role = role;
//   }
//   getName(){return this.name;}
//   getRole(){ return this.role;}

//   login(){return "Hello " + this.name}
//   logout(){return "Bye " + this.name}

//   changeName(){return `Change ${this.name}`}
//   changePassword(){return "Change the pass " + newPassword}
// }

// let user = new User("Yuliia", "user");
// console.log(user);

// class Admin {
//   constructor(name,role){
//     this.name = name;
//     this.role = role;
//     this.users = [];
//   }
//   addUser(){return users.push(user);}
//   removeUser(){return this.users.pop(user);}
//   changeUserRole(){return user.role = this.role(newRole);}
//   getAllUsers(){return this.users;}
//   removeAllUsers() {this.users = [];}
// }

// let admin = new Admin("Sonia", "admin");
// console.log(admin);
