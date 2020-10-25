exports.up = knex => knex.schema.createTable('produtos', table => {
    table.increments('id');
    table.string('descricao', 255).notNullable();
    table.string('categoria', 255).notNullable();
    table.string('image', 255).notNullable().defaultTo('image_padrao.jpg');
    table.string('valor', 255).notNullable();
    table.timestamp('created_ad').defaultTo(knex.fn.now())
    table.timestamp('updated_ad').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("produtos");