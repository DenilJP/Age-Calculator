const inputBox = document.querySelector(".input-box")
const btn = document.querySelector(".btn")
const yearbox = document.querySelector(".year")
const monthbox = document.querySelector(".month")
const daybox = document.querySelector(".day")

const calculateAge = () => {
    let brithdate = inputBox.value
    //    & Convert Stirng value into a Date object
    const Convertdate = new Date(brithdate)
    //  ^ Get  Current date 
    let currDate = new Date()
    
    // * Calculate differnce between years

    let year = currDate.getFullYear() - Convertdate.getFullYear()


    // ! Check if the birthdate for this year has occurred yet
    if (currDate.getMonth() < Convertdate.getMonth() || (currDate.getMonth() === Convertdate.getMonth() && currDate.getDate() < Convertdate.getDate())) {
        year--
    }
    //    ! calculate month
    let month = currDate.getMonth() - Convertdate.getMonth()
    let day = currDate.getDate() - Convertdate.getDate()
    //! Handel negstives
    if (day < 0) {
        month--;
        const lastMonthDate = new Date(currDate.getFullYear(), currDate.getMonth(), 0);
        day += lastMonthDate.getDate();
    }

    if (month < 0) {
        month += 12;
    }

   yearbox.innerHTML = year
   monthbox.innerHTML = month
   daybox.innerHTML = day
}

btn.addEventListener('click', () => {
    calculateAge()
})