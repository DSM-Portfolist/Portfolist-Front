export interface BorderProp {
  passwordBor: boolean;
  emailBor: boolean;
}

export interface SignUpType {
  name: string;
  email: string;
  password: string;
  field: number[];
}

export interface FieldType {
  id: number;
  content: string;
}
