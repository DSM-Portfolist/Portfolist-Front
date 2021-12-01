export function DateSplitHook(string: any) {
  const dateArray = string?.split("-");
  console.log(dateArray);
  let date = `${dateArray[0]}년 ${dateArray[1]}월 ${dateArray[2]}일`;

  return;
}
