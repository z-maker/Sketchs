const DAY_NAMES = [
    { name: "Domingo" },
    { name: "Lunes" },
    { name: "Martes" },
    { name: "Miercoles" },
    { name: "Jueves" },
    { name: "Viernes" },
    { name: "Sabado" },
]

const MONTH_NAMES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Augosto",
    "Septiembre",
    "Octobubre",
    "Noviembre",
    "Diciembre",
]


export const formatTime = (time) => {
    var date = new Date(time)

    var s = date.toLocaleTimeString()

    var hours = date.getHours()

    var formated = `${s}`
    return formated
}

export const formatCurrentTime = () => {
    var date = new Date()
    var formated = `${date.getHours()}:${date.getMinutes()}`
    return formated
}

export const formatDate = (date) => {
    var date = new Date(date)

    var local = new Date(date.toLocaleString())

    var formated = `${DAY_NAMES[date.getDay()].name}, ${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`
    return formated
}

export const formatDateShort = (date) => {
    var date = new Date(date)

    var local = new Date(date.toLocaleString())
    let month = MONTH_NAMES[date.getMonth()]
    var formated = `${date.getDate()} ${month.substring(0,3)}`
    return formated
}

export const formatCurrentDate = () => {
    var date = new Date()
    var formated = `${DAY_NAMES[date.getDay()].name}, ${date.getDate()} ${MONTH_NAMES[date.getMonth()]}`
    return formated

}