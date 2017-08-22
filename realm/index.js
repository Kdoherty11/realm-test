import configure from "./configure";
import daos from "./daos";

export { default as configure } from './configure';

export default {
  ...daos,
};
