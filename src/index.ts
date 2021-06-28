import { RRule, RRuleSet, rrulestr, Weekday } from 'rrule'

// Create a rule:
const rule = new RRule({
    freq: RRule.WEEKLY,
    interval: 5,
    byweekday: [RRule.MO, RRule.FR],
    dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30)),
    until: new Date(Date.UTC(2012, 12, 31))
})

// Get all occurrence dates (Date instances):
//console.log(rule.all())


test()
function test() {


    const freq = "WEEKLY"
    console.log(RRule[freq])


    const byweekday =
        [
            'MONDAY',
            'TUESDAY',
            'FRIDAY',
        ]

    const daysHash = {
        MONDAY: new Weekday(0),
        TUESDAY: new Weekday(1),
        WEDNESDAY: new Weekday(2),
        THURSDAY: new Weekday(3),
        FRIDAY: new Weekday(4),
        SATURDAY: new Weekday(5),
        SUNDAY: new Weekday(6),
    }

    console.log(daysHash[0])

/*
    console.log(
        byweekday.map(day => {
            return daysHash[day]
        })
    )*/
}