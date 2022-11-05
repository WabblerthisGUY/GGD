(() => {
    const CO = "LT Kelly Norton"
    const greyghost = {
        "Executive Officer": "ENS Matthew DeMartini",
        "Command Chief": "CPO Aaron Cheung",
        "Leading Petty Officer": "PO2 Ashley Tan",
        "Assistant LPO": "PO3 Christian Legaspi",
        squads: {
            Alpha: {
                leader: "PO3 Davin Chen",
                people: [
                    "SA Edward DeMartini",
                    "PO3 Ophelia Li",
                    "SN Miriama Cakau",
                    "SA Brandon Chen",
                    "SA Kenric Huang",
                    "SA Muneer Khan",
                    "SA Emily Lau",
                    "SA Connor Chen",
                    "SA Jayden Choi",
                    "SA Kailey Lin",
                    "SA Jason Lu",
                    "SA Jacob Madrilejo",
                    "SA Reya Spear",
                    "SA Chengen Tsai"
                ]
            },
            Bravo: {
                leader: "PO3 Daniel Huang",
                people: [
                    "PO3 Lucas Cheung",
                    "PO3 Robyn Padilla",
                    "SN Derek Chen",
                    "SA Kenric Huang",
                    "SN Ibtisam Riaz",
                    "SA Japheth Chen",
                    "SA Kayden Choi",
                    "SA Keying Lin",
                    "SA Justin Lu",
                    "SA Merewalesi Matanitobua",
                    "SA Sanders Tan",
                    "SA Edmond Tso"
                ]
            },
            "X-Ray": {
                leader: "CPO Xander Mui",
                people: [
                    "SR Graham Chow",
                    "SR Yasmine El Hattab",
                    "SR Peyton Huang",
                    "SR Damien Lai",
                    "SR Leo Lei",
                    "SR Tongtong Liu",
                    "SR Isabela Sofis",
                    "SR Elizabeth Uluilakeba",
                    "SA-T Grace Uluilakeba",
                    "SR Alex Zhu"
                ]
            },
            Zulu: {
                leader: "CPO Yifan Wang",
                people: [
                    "SR Rachel Dong",
                    "SR Samand Khan",
                    "SR Celine Lei",
                    "SR Janice Li",
                    "SR Baron Siu",
                    "SR Sereana Uluilakeba",
                    "SR Vanessa Xu"
                ]
            }
        }
    }
    
    const kearsarge = {
        "Executive Officer": "ENS Michael Spear",
        "Command Chief": "CPO Aaron Cheung",
        "Leading Petty Officer": "PO3 Ian Chiu",
        "Assistant LPO": "ABC William Huang",
    }

    document.getElementById('commanding-officer').innerText = CO;

    var chain = document.getElementById('chain');
    var positions = [
        "Executive Officer", "Command Chief", 
        "Leading Petty Officer", "Assistant LPO"
    ]
    for(const position of positions) {
        gold = name => (position == "Executive Officer") || name.includes("CPO") ? "text-warning" : "";

        var div = document.createElement("div");
        div.classList.add("row", "mb-4");
        div.innerHTML = `
        <div class="col-6">
            <div class="rounded-3 bg-white p-2">
                ${position}
                <div class="display-5 ${gold(greyghost[position])}">${greyghost[position]}</div>
            </div>
        </div>
        <div class="col-6">
            <div class="rounded-3 bg-white p-2">
                ${position}
                <div class="display-5 ${gold(kearsarge[position])}">${kearsarge[position]}</div>
            </div>
        </div>
        `;

        chain.append(div);
    }

    var squads = document.getElementById('squads');
    for(const squad in greyghost.squads) {
        gold = name =>name.includes("CPO") ? "text-warning" : "";

        var div = document.createElement("div");
        const leader = greyghost.squads[squad].leader;
        const people = greyghost.squads[squad].people;
        div.classList.add("col-md-6", "col-12");
        div.innerHTML = `
        <div class="bg-white p-2">
            ${squad} Squad Leader
            <div class="display-6 ${gold(leader)} mb-2">${leader}</div>
            <ul class="list-unstyled">
                ${people.map(x => `<li>${x}</li>`).join('')}
            </ul>
        </div>`

        squads.appendChild(div);
    }
})();