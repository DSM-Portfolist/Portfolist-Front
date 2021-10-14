export interface InfoChangeArray {
  title: string;
}

export interface PasswordType {
  id: number;
  type: string;
  visible: boolean;
}

export interface PasswordData {
  password: string;
}

export const PasswordTitle: InfoChangeArray[] = [
  {
    title: "현재 비밀번호",
  },
  {
    title: "변경할 비밀번호",
  },
  {
    title: "변경할 비밀번호 재입력",
  },
];
