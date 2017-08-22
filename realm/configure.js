import Realm from "realm";
import schemas from "./schemas";

export default function configure() {
  const next = Realm.schemaVersion(Realm.defaultPath);
  if (next > 0) {
    for (let i = next; i < schemas.length; i += 1) {
      const migratedRealm = new Realm(schemas[i]);
      migratedRealm.close();
    }
  }
  Realm.open(schemas[schemas.length - 1]);
}
