exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('produtos').del()
        .then(function() {
            // Inserts seed entries
            return knex('produtos').insert([
                {
                    descricao: 'Chiclete push tuti-fruti',
                    categoria: 'doce',
                    valor: '4,50',

                },
                {
                    descricao: 'Chiclete push hortelã',
                    categoria: 'doce',
                    valor: '4,50',

                },

            ]);
        });
};