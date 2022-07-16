(() => {
    console.log(1)
    const staffInfo = [
        {
            title: "Regional Director",
            name: "Paul Norton",
            rank: "Lieutenant Commander, USNSCC",
            quote: "In 12 years, I have never missed a single drill.",
            portraitUrl: "img/staff/paulnorton.png"
        },
        {
            title: "Commanding Officer",
            name: "Kelly Norton",
            rank: "Lieutenant, USNSCC",
            quote: "Put them at ease. Good morning, cadets. GOOD MORNING, CADETS.",
            portraitUrl: "img/staff/kellynorton.png"
        },
        {
            title: "Executive Officer",
            name: "Matthew DeMartini",
            rank: "Ensign, USNSCC",
            quote: "Get your haircuts. Put your dress uniform on a hanger.",
            portraitUrl: "img/staff/xodemartini.png"
        },
        {
            title: "Executive Officer",
            name: "Michael Spear",
            rank: "Ensign, USNSCC",
            quote: "Hey, can you get all the leaguers to admin?",
            portraitUrl: "img/staff/xospear.png"
        },
        {
            title: "Executive Officer",
            name: "Brian Buhnerkempe",
            rank: "Warrant Officer, USNSCC",
            quote: "This should have been taken care of yesterday.",
            portraitUrl: "img/staff/wobuhnerkempe.png"
        },
        {
            title: "Operations Officer",
            name: "Tony Kiblinger",
            rank: "Ensign, USNSCC",
            quote: "It's a white hat, not a dixie cup.",
            portraitUrl: "img/staff/ad1kiblinger.png"
        },
        {
            title: "Administrative Officer",
            name: "Suzi Mui",
            rank: "Instructor, USNSCC",
            quote: "Have your parents sign this and bring it back next drill.",
            portraitUrl: "img/staff/instmui.png"
        },
        {
            title: "Administrative Officer",
            name: "Michael Gomes",
            rank: "Instructor, USNSCC",
            quote: "We ran out of that ribbon. That one, too. And that rack.",
            portraitUrl: "img/staff/instgomes.png"
        },
        {
            title: "Command Chief",
            name: "Clayton Ly",
            rank: "Chief Petty Officer, USNSCC",
            quote: "Please don’t shoot the messenger.",
            portraitUrl: "img/staff/chiefly.png"
        },
    ];

    var staffList = document.getElementById('staff-list')
    for(const staff of staffInfo) {
        var div = document.createElement("div");
        div.classList.add("col", "text-center", "text-primary");
        div.innerHTML = `
        <h1>${staff.title}</h1>
        <img src="${staff.portraitUrl}" class="img-fluid">
        <h2>${staff.name}<br>${staff.rank}</h2>
        <p class="fst-italic fs-4">"${staff.quote}"</p>`;
        staffList.appendChild(div);
    }
})();