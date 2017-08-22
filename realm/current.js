import Realm from "realm";
import schemas from "./schemas";

export default function current() {
  const currentSchema = schemas[schemas.length - 1];
  return new Realm(currentSchema);
}
