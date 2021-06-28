import { Frequency, RRule, Weekday } from 'rrule'

test()

function getFrecuencyByString(frecuencyStr: string): Frequency {
    switch (frecuencyStr) {
        case "YEARLY": return RRule["YEARLY"]
        case "MONTHLY": return RRule["MONTHLY"]
        case "WEEKLY": return RRule["WEEKLY"]
        case "DAILY": return RRule["DAILY"]
        case "HOURLY": return RRule["HOURLY"]
        case "MINUTELY": return RRule["MINUTELY"]
        default: return RRule["SECONDLY"]
    }
}

function getByweekdayByStringArr(weekdays: string[]): Weekday[] {
    var weekdaysReturn: Weekday[] = []
    weekdays.forEach(day => {
        switch (day) {
            case "MONDAY": weekdaysReturn.push(RRule.MO); break;
            case "TUESDAY": weekdaysReturn.push(RRule.TU); break;
            case "WEDNESDAY": weekdaysReturn.push(RRule.WE); break;
            case "THURSDAY": weekdaysReturn.push(RRule.TH); break;
            case "FRIDAY":weekdaysReturn.push(RRule.FR); break;
            case "SATURDAY": weekdaysReturn.push(RRule.SA); break;
            default: return weekdaysReturn.push(RRule.SU);
        }
    });
    return weekdaysReturn;
}

function test() {

    const freqStr: string = "WEEKLY"
    const Freq: Frequency = getFrecuencyByString(freqStr);

    const Interval: number = 5;

    const byweekdayStr: string[] = ["MONDAY", "FRIDAY"];
    const Byweekday: Weekday[] = getByweekdayByStringArr(byweekdayStr);

    const startStr: string = "2012-02-01T10:30:00.000Z"
    const Start = new Date(startStr);

    const endStr: string = "2013-01-31T00:00:00.000Z"
    const End = new Date(endStr);

    const rule = new RRule({
        freq: Freq,
        interval: Interval,
        byweekday: Byweekday,
        dtstart: Start,
        until: End
    })

    console.log(rule.all())

}

function test2() {
    const daysHash = {
        MONDAY: new Weekday(0),
        TUESDAY: new Weekday(1),
        WEDNESDAY: new Weekday(2),
        THURSDAY: new Weekday(3),
        FRIDAY: new Weekday(4),
        SATURDAY: new Weekday(5),
        SUNDAY: new Weekday(6),
    }

    console.log(daysHash["MONDAY"])
}
