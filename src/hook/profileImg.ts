import { DefaultProfile } from "../util/assets";

export function ProfileImage(img: string | undefined | null) {
  if (img === null) {
    return `${DefaultProfile}`;
  } else return img;
}
