import { Optional, Model, DataTypes, Op } from 'sequelize'
import { sequelize } from '../config/database'
import { Booking as BookingType, FilterPeriod } from '../@types/types'

export type BookingCreation = Optional<BookingType, 'id'>

class Booking extends Model<BookingType, BookingCreation> implements BookingType {
    public id!: number
    public first_name!: string
    public last_name!: string
    public company!: string
    public booked_from!: string | Date
    public booked_to!: string | Date

    public static delete(id: number): Promise<number> {
        return Booking.destroy({ where: { id } })
    }

    public static filterByPeriod({ booked_from, booked_to }: FilterPeriod): Promise<BookingType[]> {
        return Booking.findAll({
            where: {
                booked_from: {
                    [Op.gte]: booked_from,
                },
                booked_to: {
                    [Op.lte]: booked_to,
                },
            },
        })
    }

    public static getExistingForPeriod({ booked_from, booked_to }: FilterPeriod): Promise<number> {
        return Booking.count({
            where: {
                [Op.and]: [
                    {
                        booked_from: {
                            [Op.and]: {
                                [Op.gte]: booked_from,
                                [Op.lte]: booked_to,
                            },
                        },
                    },
                    {
                        booked_to: {
                            [Op.and]: {
                                [Op.gte]: booked_from,
                                [Op.lte]: booked_to,
                            },
                        },
                    },
                ],
            },
        })
    }

    public static async existInPeriods(periods: FilterPeriod[]): Promise<boolean> {
        const promises: Promise<number>[] = []
        periods.map(({ booked_from, booked_to }) => {
            promises.push(Booking.getExistingForPeriod({ booked_from, booked_to }))
        })
        return (await Promise.all(promises)).reduce((acc, n) => acc + n, 0) > 0
    }

    public static async saveAll(bookings: BookingType[]): Promise<boolean> {
        const savedRecords = await Booking.bulkCreate(bookings)
        return savedRecords.length > 0
    }
}

Booking.init(
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        booked_from: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        booked_to: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
)

export default Booking
