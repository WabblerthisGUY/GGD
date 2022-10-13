(() => {
    console.log(1)
    const calendarInfo = {
        January: [
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
        <p class="mb-0 col-6 border-end border-3 fw-bold fs-1">Janurary</p>
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