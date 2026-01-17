function showInfo(date, options = {}) {
    console.log(date.toLocaleDateString());
    if (options.displayDay) {
        console.log("dia", date.getDate());
    }
    if (options.displayMonth) {
        console.log("mês", date.getMonth());
    }
    if (options.displayYear) {
        console.log("ano", date.getFullYear());
    }
}
