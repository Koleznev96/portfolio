const icon_name_set = (main) => {
    switch(main) {
        case 'Clouds':
            return "mainly_cloudy";
        case 'Rain':
            return "rain";
        case 'Clear':
            return "rain";
        case 'small_rain':
            return "small_rain";
        case 'Snow':
            return "small_rain";
        case 'small_rain_sun':
            return "small_rain_sun";
        case 'mainly_cloudy':
            return "mainly_cloudy";
        default:
            return null;
    }
};

const inviteDay = (count) => {
    switch(count) {
        case 0:
            return ["Вс", "Воскресенье"];
        case 1:
            return ["Пн", "Понедельник"];
        case 2:
            return ["Вт", "Вторник"];
        case 3:
            return ["Ср", "Среда"];
        case 4:
            return ["Чт", "Четверг"];
        case 5:
            return ["Пт", "Пятница"];
        case 6:
            return ["Сб", "Суббота"];
        default:
            return null;
    }
};

export const initWeekWeather = async (data) => {
    let days_new = [];
    let date_yes = await new Date();
    for (const day of data) {
        let index = data.indexOf(day);
        if (index !== 0)
            await date_yes.setDate(await date_yes.getDate() + 1);
        days_new.push({
            day: index === 0 ? 'Сегодня' : (index === 1 ? 'Завтра' : inviteDay(date_yes.getDay())[0]),
            day_full: index === 0 ? 'Сегодня' : (index === 1 ? 'Завтра' : inviteDay(date_yes.getDay())[1]),
            day_info: `${date_yes.getDate()}.${date_yes.getMonth()}`,
            icon_id: icon_name_set(day.weather[0].main),
            temp_day: (day.temp.day >= 1 ? '+' : '') + Math.floor(day.temp.day),
            temp_night: (day.temp.night >= 1 ? '+' : '') + Math.floor(day.temp.night),
            info: day.weather[0].description,
            pressure: day.pressure,
            temp_min: (day.temp.min >= 1 ? '+' : '') + Math.floor(day.temp.min),
            speed: day.wind_speed,
        });
    }
    return days_new;
}
