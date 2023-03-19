const calculateDuration = (d1: Date, d2: Date): string => {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();

    let prefix = 'months'
    if (months >= 12) {
        prefix = 'year'
        if (months > 12) {
            months = (months / 12).toFixed(1)
            prefix += 's'
        }
        else
            months = (months / 12).toFixed(0)
    }
    return months <= 0 ? '0' : months + ' ' + prefix
}

export default calculateDuration