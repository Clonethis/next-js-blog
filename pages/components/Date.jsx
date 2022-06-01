import { parseISO, format } from "date-fns";
import styles from './date.module.css'
export default function Date({ dateString }) {

    const date = parseISO(dateString);
    console.log(`date: ${date}`);
    if (!isNaN(date)) {
        console.log(typeof (date))
        return (
            <time className={styles.time} dateTime={dateString}>{format(date, 'do M RRRR')}</ time>
        )
    } else {
        return (
            <div className=""></div>
        )
    }
}