import { Knex } from 'knex'

const $table_name = 'bookings'

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable($table_name, table => {
        table.increments('id')
        table.string('first_name').notNullable()
        table.string('last_name').notNullable()
        table.string('company').nullable()
        table.dateTime('booked_from').notNullable().index()
        table.dateTime('booked_to').notNullable().index()
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable($table_name)
}
