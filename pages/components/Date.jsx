import { parseISO, format } from "date-fns";
import styles from './date.module.css'
export default function Date({ dateString }) {

    // console.log(`date: ${date}`);
    if (typeof dateString === 'undefined') {
        console.log("if")
        return (
            <div className=""></div>
        )
    } else {
        const date = parseISO(dateString);
        console.log("dateString", dateString)
        return (
            <time className={styles.time} dateTime={dateString}>{format(date, 'do M RRRR')}</ time>
        )
    }
}