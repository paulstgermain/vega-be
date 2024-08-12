exports.up = function(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary();
    table.string('job_title').notNullable();
    table.string('salary').notNullable();
    table.string('company_name').notNullable();
    table.string('location').notNullable();
    table.string('url').notNullable();
    table.text('description').notNullable();
    table.string('status').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('jobs');
};