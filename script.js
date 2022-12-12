const data = [
    {
        country: "INDIA",
        timeZone: "Asia/Kolkata"
    },
    {
        country: "USA , Los Angeles",
        timeZone: "America/Los_Angeles"
    },
    {
        country: "USA , New York",
        timeZone: "America/New_York"
    },
    {
        country: "United Kingdom",
        timeZone: "Europe/London"
    },
    {
        country: "China",
        timeZone: "Asia/Shanghai"
    },
    {
        country: "Saudi Arabia",
        timeZone: "Asia/Riyadh"
    },
    {
        country: "United Arab Emirates",
        timeZone: "Asia/Dubai"
    },
    {
        country: "Pakistan",
        timeZone: "Asia/Karachi"
    },
    {
        country: "Australia , Sydney",
        timeZone: "Australia/Sydney"
    },
    {
        country: "New Zealand",
        timeZone: "Pacific/Auckland"
    },
    {
        country: "Japan",
        timeZone: "Asia/Tokyo"
    },
    {
        country: "Brazil",
        timeZone: "America/Araguaina"
    },
    {
        country: "France",
        timeZone: "Europe/Paris"
    },
    {
        country: "Italy",
        timeZone: "Europe/Rome"
    },
    {
        country: "Israel",
        timeZone: "Asia/Jerusalem"
    },
    {
        country: "Turkey",
        timeZone: "Europe/Istanbul"
    },
    {
        country: "Russia",
        timeZone: "Europe/Moscow"
    },
]

let option = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour12: false,
    hour: "numeric",
    minute:"2-digit",
};

// ----- DOM -------

const timeTable = document.querySelector('.timezone');

const clockMaker = ()=>{
    timeTable.innerHTML = '';
    let today = new Date();
    for (let i = 0; i < data.length; i++) {
        option.timeZone = data[i].timeZone;
        let str = today.toLocaleDateString("en",option);

        let splice = str.split(",");
        let month = splice[0].split(' ')[0];
        let day = splice[0].split(' ')[1];
        let year = splice[1];

        // combine dd/mm/yyyy

        let combine_DMY = day + " " + month + "," + year;
        let time = splice[2];
        let country = data[i].country;


        let tr = document.createElement("tr");
        tr.innerHTML = `<td>
                        <h3>${country}<h3>
                        <p>${combine_DMY}</p>
                        </td>
                        <td>
                        <p class="time">${time}</p>
                        </td>`;
        
        timeTable.append(tr);
    }
}

choice2.addEventListener("click",()=>{
    option.hour12 = false;
})
choice1.addEventListener("click",()=>{
    option.hour12 = true;
})

clockMaker();
setInterval(() => {
    clockMaker();
}, 1000);









