export function TextSliceHandler(txt: string, len: number) {
  if (txt.length > len) {
    txt = txt.substr(0, len) + " ...";
  }

  return txt;
}
