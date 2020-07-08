exports.up = function (knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    //Relacionamento:
    table.string('ong_id').notNullable();

    //Chave estrangeira:
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('incidents');
};

//Executar no terminal:

// 1 - npx knex migrate:make create_nome_da_tabela - para criação da tabela
// 2 - npx knex migrate:latest - para edição da tabela/para fazê-la "rodar"
// 3 - npx knex migrate:rollback - para desfazer da última criação/edição
// 4 - npx knex migrate:status - status das tabelas
