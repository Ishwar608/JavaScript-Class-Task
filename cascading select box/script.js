let myData = [
    {
        countryName: "india",

        state: [
            {
                stateName: "Andhra Pradesh",
                city: [
                    "Adoni",
                    "Amalapuram",
                    "Anakapalle",
                    "Anantapur",
                    "Bapatla",
                    "Bheemunipatnam",
                    "Bhimavaram",
                    "Bobbili",
                    "Chilakaluripet",
                    "Chirala",
                    "Chittoor",
                    "Dharmavaram",
                    "Eluru",
                    "Gooty"

                ]
            },
            {
                stateName: "Assam",
                city: [
                    "Barpeta",
                    "Bongaigaon City",
                    "Dhubri",
                    "Dibrugarh",
                    "Diphu",
                    "Goalpara",
                    "Guwahati",
                    "Jorhat",
                    "Karimganj",
                    "Lanka",
                    "Lumding",
                    "Mangaldoi",
                    "Mankachar",
                    "Margherita",
                    "Mariani",
                    "Marigaon",
                    "Nagaon",
                    "Nalbari",
                    "North Lakhimpur",
                    "Rangia"

                ]
            },
            {
                stateName: "Bihar",
                city: [
                    "Araria",
                    "Arrah",
                    "Arwal",
                    "Asarganj",
                    "Aurangabad",
                    "Bagaha",
                    "Barh",
                    "Begusarai",
                    "Bettiah",
                    "Bhabua",
                    "Bhagalpur",
                    "Buxar",
                    "Chhapra",
                    "Darbhanga",
                    "Dehri-on-Sone",
                    "Dumraon"

                ]
            },
            {
                stateName: "Rajasthan",
                city: [
                    "Ajmer",
                    "Alwar",
                    "Bikaner",
                    "Bharatpur",
                    "Bhilwara",
                    "Jaipur*",
                    "Jodhpur",
                    "Lachhmangarh",
                    "Ladnu",
                    "Lakheri",
                    "Lalsot",
                    "Losal",
                    "Makrana",
                    "Malpura",
                    "Mandalgarh",
                    "Mandawa"
                ]
            },
            {
                stateName: "Gujarat",
                city: [
                    "Adalaj",
                    "Ahmedabad",
                    "Amreli",
                    "Anand",
                    "Anjar",
                    "Ankleshwar",
                    "Bharuch",
                    "Bhavnagar",
                    "Bhuj",
                    "Chhapra",
                    "Deesa",
                    "Dhoraji",
                    "Godhra",
                    "Jamnagar",
                    "Kadi",
                    "Kapadvanj",
                    "Keshod",
                    "Khambhat",
                    "Lathi",
                    "Limbdi"
                ]
            }
        ]

    },

    {
        countryName: "Shree lanka",
        state: [

            {
                stateName: "Bihar",
                city: [
                    "Araria",
                    "Arrah",
                    "Arwal",
                    "Asarganj",
                    "Aurangabad",
                    "Bagaha",
                    "Barh",
                    "Begusarai",
                    "Bettiah",
                    "Bhabua",
                    "Bhagalpur",
                    "Buxar",
                    "Chhapra",
                    "Darbhanga",
                    "Dehri-on-Sone",
                    "Dumraon"

                ]

            }
        ]

    }
]

document.getElementById('country').addEventListener('click',()=>{

    let lh = myData.map((val)=>{
        return `<option value="${val.countryName}">${val.countryName}</option>`
    })
    document.getElementById('country').innerHTML = lh.join(" ");


})
