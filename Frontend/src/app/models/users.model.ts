export class User {
  _id: string;
  isDev: boolean;
  description: string;
  cc: number;
  firtsName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  isAdmin: boolean;
  numberPhone: number;
  image: string;
  range:string;

  constructor(
    _id = '',
    isDev = false,
    description = '',
    cc = 0,
    firtsName = '',
    lastName = '',
    age = 0,
    email = '',
    password = '',
    isAdmin = false,
    numberPhone = 0,
    image = '',
    range = ''
  ) {
    this._id = _id;
    this.isDev = false;
    this.description = description;
    this.cc = cc;
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.numberPhone = numberPhone;
    this.image = image;
    this.range = range
  }
}
