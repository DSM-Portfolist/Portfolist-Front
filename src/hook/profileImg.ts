import { DefaultImage } from "../util/assets";

export function ProfileImage(img: string | undefined) {
  if (img === null) {
    return `${DefaultImage}`;
  } else return img;
}
