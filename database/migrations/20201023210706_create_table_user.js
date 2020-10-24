exports.up = knex => knex.schema.createTable('usuarios', table => {
    table.increments('id');
    table.string('usuario', 255).notNullable();
    table.string('senha', 255).notNullable();
    table.timestamp('created_ad').defaultTo(knex.fn.now())
    table.timestamp('updated_ad').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("usuarios");