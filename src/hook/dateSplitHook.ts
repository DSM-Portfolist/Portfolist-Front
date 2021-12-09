export function DateSplitHook(string: string | undefined) {
  let dateArray = string?.split("T");
  let dateList = dateArray?.[0].split("-");
  let date = `${dateList?.[0]}년 ${dateList?.[1]}월 ${dateList?.[2]}일`;

  return date;
}
