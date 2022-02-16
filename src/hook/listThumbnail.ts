export function ListThumbnailHandle(img: string | undefined) {
  if (img === "") {
    return "https://images.unsplash.com/uploads/1413349410189e2a95d2e/39982a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  } else return img;
}
