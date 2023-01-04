export class Dev {
  _id: string;
  isDev:boolean
  cc: number;
  firtsName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  isAdmin: boolean;
  numberPhone: number;
  devType: string;
  tecno: string;
  proyects: string;
  experience: string;
  image: string;

  constructor(
    _id = '',
    isDev = true,
    cc = 0,
    firtsName = '',
    lastName = '',
    age = 0,
    email = '',
    password = '',
    isAdmin = false,
    numberPhone = 0,
    devType = '',
    tecno = '',
    proyects = '',
    experience = '',
    image = ''
  ) {
    this._id = _id;
    this.isDev = true
    this.cc = cc;
    this.devType = devType;
    this.tecno = tecno;
    this.proyects = proyects;
    this.experience = experience;
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.password = password;
    this.isAdmin = isAdmin;
    this.numberPhone = numberPhone;
    this.image = image;
  }
}
