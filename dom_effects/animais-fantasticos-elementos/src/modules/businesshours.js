function businessHours(){
    const business = document.querySelector('[data-week]')
    const daysWeek = business.dataset.week.split(',').map(Number)
    const hoursWeek = business.dataset.hour.split(',').map(Number)
    
    
    const nowDate = new Date()
    const nowDay = nowDate.getDay()
    const nowHour = nowDate.getHours()
    
    const weekOpen = daysWeek.indexOf(nowDay) !== -1;
    
    
    const hourOpen = nowHour >= hoursWeek[0] && nowHour < hoursWeek[1]
    
    if ( weekOpen && hourOpen ) {
        business.classList.add('open')
    }

}




export default businessHours;