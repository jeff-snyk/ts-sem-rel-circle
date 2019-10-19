import { getMessage } from "./inner-lib";

export function callGetMessage() {
  const m = getMessage();
  return m;
}
