import bootstrapDatabaseAuthenticate from "./bootstrap_database_authenticate";
import bootstrapDatabaseRelations from "./bootstrap_database_relations";
import bootstrapDatabaseTables from "./bootstrap_database_tables";

export default async function BootstrapDatabase() {
  await bootstrapDatabaseAuthenticate();
  bootstrapDatabaseTables();
  bootstrapDatabaseRelations();
}
