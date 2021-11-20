export function CountChangeHook(boolean: boolean, count: number) {
  return boolean ? count - 1 : count + 1;
}
