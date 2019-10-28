import moment from 'moment';
import 'moment/locale/fr'

const Datetime = {
    getDisplayFromDate: function (datetime, lg) {
        if (datetime === 'present' || datetime === "aujourd'hui") {
            return datetime;
        }

        const applyFunc = function (dt) {
            moment.locale(lg);
            const d = moment(dt, 'YYYY-MM-DD');
            return d.format('MMMM YYYY');
        };

        const value = applyFunc(datetime);
        return value === 'Invalid date' ? datetime : value;
    }
};

export default Datetime;
