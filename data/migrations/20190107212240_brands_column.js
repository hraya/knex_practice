
exports.up = function(knex, Promise) {
    return knex.schema.table('boxes',
  table =>{
      table.string('brand');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('brand', table =>{
        table.dropColumn('brand');
    });
};
