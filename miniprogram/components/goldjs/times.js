
function gettime(times) {
  let oldtimes = new Date(times) //指定时间
  let newtimes = new Date() //当前时间
  // 获取指定时间的年月日时分秒
  let old_years = oldtimes.getFullYear()
  let old_months = oldtimes.getMonth() + 1
  let old_days = oldtimes.getDate()
  let old_hours = oldtimes.getHours()
  let old_mins = oldtimes.getMinutes()
  let old_secs = oldtimes.getSeconds()
  // 获取当前时间
  let new_years = newtimes.getFullYear()
  let new_months = newtimes.getMonth() + 1
  let new_days = newtimes.getDate()
  let new_hours = newtimes.getHours()
  let new_mins = newtimes.getMinutes()
  let new_secs = newtimes.getSeconds()
  // 定义年月日时分秒
  let year, month, day, hour, minute, second
  // 计算相差时间
  year = (new_years - old_years) > 0 ? (new_years - old_years) : 0; //年
  // 月
  if (new_months > old_months) {
    month = new_months - old_months
  } else if (new_months == old_months) {
    month = 0
  } else {
    if (year > 0) {
      year = year - 1
    }
    month = 12 - old_months + new_months
  }
  // 日
  if (new_days > old_days) {
    day = new_days - old_days
  } else if (new_days == old_days) {
    day = 0
  } else {
    if (old_months == 1 || old_months == 3 || old_months == 5 || old_months == 7 || old_months == 8 || old_months == 10 || old_months == 12) {
      day = 31 - old_days + new_days
    } else if (old_months == 2) {
      if (old_years % 4 == 0 && old_years % 100 != 0 || old_years % 400 == 0) {
        day = 29 - old_days + new_days
      } else {
        day = 28 - old_days + new_days
      }
    } else {
      day = 30 - old_days + new_days
    }
    if (month > 0) {
      month = month - 1
    }
  }
  // 时
  if (new_hours > old_hours) {
    hour = new_hours - old_hours
  } else if (new_hours == old_hours) {
    hour = 0
  } else {
    hour = 24 - old_hours + new_hours
    if (day > 0) {
      day = day - 1
    }
  }
  // 分
  if (new_mins > old_mins) {
    minute = new_mins - old_mins
  } else if (new_mins == old_mins) {
    minute = 0
  } else {
    minute = 60 - old_mins + new_mins
    if (hour > 0) {
      hour = hour - 1
    }
  }
  // 秒
  if (new_secs > old_secs) {
    second = new_secs - old_secs
  } else if (new_secs == old_secs) {
    second = 0
  } else {
    second = 60 - old_secs + new_secs
    if (minute > 0) {
      minute = minute - 1
    }
  }
  // 年
  if(year >= 10) {
    year = year
  } else if (year < 10) {
    let homts = `0${year}`
    year = homts
  } 
  // 月
  if(month >= 10) {
    month = month
  } else if (month < 10) {
    let homts = `0${month}`
    month = homts
  } 
  // 日
  if(day >= 10) {
    day = day
  } else if (day < 10) {
    let homts = `0${day}`
    day = homts
  } 
  // 时
  if(hour >= 10) {
    hour = hour
  } else if (hour < 10) {
    let homts = `0${hour}`
    hour = homts
  } 
  // 分
  if(minute >= 10) {
    minute = minute
  } else if (minute < 10) {
    let homts = `0${minute}`
    minute = homts
  } 
  // 秒
  if(second >= 10) {
    second = second
  } else if (second < 10) {
    let homts = `0${second}`
    second = homts
  } 
  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second
  }
}

export { gettime }