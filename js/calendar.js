(() => {
    console.log(1)
    const calendarInfo = {
        January: [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        Febuary:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
            {
                start: 12,
                end: 14,
                event: "Scottish Game #2"
            },
        ],
        March:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        April:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        May:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        June:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        July:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        August:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        September:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        October:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        November:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ],
        December:  [
            {
                start: 5,
                end: 6,
                event: "Scottish Games"
            },
        ]
    };

    var calendar = document.getElementById('calendar');

    for(const month in calendarInfo) {
        var div = document.createElement("div");
        div.classList.add("row", "text-center", "fw-bold");
        div.innerHTML = `
        <div class="pb-5 col-6 border-end border-3 fw-bold fs-1">${month}</div>
        <div class="col-6 month">
            
        </div>
        `;
        for(const event of calendarInfo[month]) {
            var row = document.createElement("div");
            const startStr = event.start.toString().padStart(2, '0');
            const endStr = event.end.toString().padStart(2, '0');
            const days = (startStr === endStr ? startStr : startStr + '-' + endStr);

            row.classList.add("row", "mt-3", "g-0");
            row.innerHTML = `
            <div class="col-6 text-info">${days}</div>
            <div class="col-6 text-start">${event.event}</div>
            `
            div.querySelector('.month').appendChild(row);
        }
        calendar.appendChild(div);
    }
})();