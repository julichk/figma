
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  getName(){return this.name;}
  getRole(){ return this.role;}

  login(){return "Hello " + this.name}
  logout(){return "Bye " + this.name}

  changeName(){return `Change ${this.name}`}
  changePassword(){return "Change the pass " + newPassword}
}

let user = new User("Yuliia", "user");
console.log(user);

class Admin {
  constructor(name,role){
    this.name = name;
    this.role = role;
    this.users = [];
  }
  addUser(){return users.push(user);}
  removeUser(){return this.users.pop(user);}
  changeUserRole(){return user.role = this.role(newRole);}
  getAllUsers(){return this.users;}
  removeAllUsers() {this.users = [];}
}

let admin = new Admin("Sonia", "admin");
console.log(admin);