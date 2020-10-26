exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('produtos').del()
        .then(function() {
            // Inserts seed entries
            return knex('produtos').insert([{
                    descricao: 'Chiclete push tuti-fruti',
                    categoria: 'Doce',
                    valor: '0,50',

                },
                {
                    descricao: 'Chiclete push hortelã',
                    categoria: 'Doce',
                    valor: '0,50',

                },

            ]);
        });
};