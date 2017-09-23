export interface User {
  email:string,
  password:string,
  name:string
}
export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;
  // format phone numbers as E.164
  get e164() {
    const num = 90 + this.area + this.prefix + this.line
    return `+${num}`
  }
}
