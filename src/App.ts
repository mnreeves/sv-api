import BootstrapDatabase from "./utils/bootstrap_database";
import BootstrapExpress from "./utils/bootstrap_express";

(async () => {
  BootstrapDatabase();
  BootstrapExpress();
})();
