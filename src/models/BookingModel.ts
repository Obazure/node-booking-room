import database from '../config/database'

const $table_name = 'bookings'

const BookingModel = database.from($table_name)

export default BookingModel
