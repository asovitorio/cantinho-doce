exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('usuarios').del()
        .then(function() {
            // Inserts seed entries
            return knex('usuarios').insert([
                { id: 1, usuario: 'adm', senha: "adm@antonia" },
            ]);
        });
};