import { DefaultProfile } from "../util/assets";

export function ProfileImage(img: string | undefined) {
  if (img === null) {
    return `${DefaultProfile}`;
  } else return img;
}
