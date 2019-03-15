
exports.up = function(knex, Promise) {
  //the change we want to make to the schema
 return  knex.schema.createTable('boxes',table =>{
      table.increments();
      table.integer('count').notNullable();
  });
};

exports.down = function(knex, Promise) {
  //undo the change
  return knex.schema.dropTableIfExists('boxes');
};
