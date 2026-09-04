// Disaster information

const disasters = {

    flood: {
        name: "Flood",

        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Katrina-new-orleans-flooding3-2005.jpg",

        introduction:
            "A flood occurs when water overflows onto land that is normally dry. Floods can develop because of heavy rainfall, overflowing rivers, storm surges, or poor drainage.",

        causes: [
            "Heavy or prolonged rainfall",
            "Overflowing rivers and streams",
            "Storm surges during severe coastal storms",
            "Poor drainage and urban flooding",
            "Failure of dams or embankments"
        ],

        warningSigns: [
            "Rapidly rising water levels",
            "Continuous heavy rainfall",
            "Flood warnings issued by authorities",
            "Water entering roads or low-lying areas"
        ],

        before: [
            "Keep emergency supplies, drinking water, food, and medicines ready.",
            "Know the safest evacuation route and higher ground nearby.",
            "Protect important documents in waterproof containers.",
            "Follow weather and official flood warnings."
        ],

        during: [
            "Move to higher ground when advised.",
            "Stay away from flooded roads and flowing water.",
            "Switch off electricity if it is safe to do so.",
            "Follow instructions from emergency authorities."
        ],

        after: [
            "Return home only when authorities say it is safe.",
            "Avoid contaminated floodwater.",
            "Check buildings for damage before entering.",
            "Use safe drinking water and discard contaminated food."
        ],

        dos: [
            "Keep an emergency kit ready.",
            "Follow evacuation instructions.",
            "Help children, elderly people, and people with disabilities.",
            "Stay informed through official announcements."
        ],

        donts: [
            "Do not walk or drive through floodwater.",
            "Do not touch electrical equipment while standing in water.",
            "Do not drink untreated floodwater.",
            "Do not ignore evacuation warnings."
        ]
    },


    earthquake: {
        name: "Earthquake",

        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Loon_2_earthquake.JPG",

        introduction:
            "An earthquake is the sudden shaking of the Earth's surface caused by the release of energy within the Earth's crust, usually due to movement along faults.",

        causes: [
            "Movement of tectonic plates",
            "Sudden movement along geological faults",
            "Volcanic activity",
            "Rarely, human activities can trigger small earthquakes"
        ],

        warningSigns: [
            "Earthquakes generally cannot be reliably predicted in advance.",
            "Official earthquake alerts may provide a few seconds of warning in some regions.",
            "During an earthquake, strong shaking is the main immediate sign."
        ],

        before: [
            "Secure heavy furniture and objects that could fall.",
            "Identify safe places such as under a sturdy table.",
            "Prepare an emergency kit.",
            "Learn how to turn off gas, electricity, and water if necessary."
        ],

        during: [
            "Drop, Cover, and Hold On.",
            "Stay away from windows and objects that may fall.",
            "If indoors, remain inside until the shaking stops.",
            "If outdoors, move away from buildings, trees, and power lines."
        ],

        after: [
            "Check yourself and others for injuries.",
            "Leave damaged buildings if it is safe to do so.",
            "Expect aftershocks.",
            "Follow official instructions and emergency information."
        ],

        dos: [
            "Protect your head and neck.",
            "Use sturdy furniture for cover.",
            "Keep emergency supplies available.",
            "Help injured people when it is safe."
        ],

        donts: [
            "Do not use elevators during or immediately after strong shaking.",
            "Do not stand near windows.",
            "Do not enter badly damaged buildings.",
            "Do not spread unverified information."
        ]
    },


    cyclone: {
        name: "Cyclone",

        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cyclone_Favio_20_feb_2007_1115Z_sm.jpg",

        introduction:
            "A cyclone is a large rotating storm system that can produce very strong winds, heavy rainfall, flooding, and storm surges, especially in coastal areas.",

        causes: [
            "Warm ocean water",
            "Low atmospheric pressure",
            "Moist air and favourable atmospheric conditions",
            "Rotation caused by the Earth's movement"
        ],

        warningSigns: [
            "Cyclone warnings issued by weather authorities",
            "Increasing wind speed",
            "Heavy rainfall and dark storm clouds",
            "Rising sea levels or storm surge warnings"
        ],

        before: [
            "Monitor official weather forecasts.",
            "Secure loose objects around the house.",
            "Keep food, water, medicines, and emergency supplies ready.",
            "Evacuate coastal or vulnerable areas when instructed."
        ],

        during: [
            "Stay indoors and away from windows.",
            "Keep doors and windows securely closed.",
            "Do not go outside during the storm.",
            "Follow evacuation and emergency instructions."
        ],

        after: [
            "Wait for the official all-clear before going outside.",
            "Avoid fallen power lines and damaged structures.",
            "Check for injuries and provide safe assistance.",
            "Use safe drinking water."
        ],

        dos: [
            "Keep a battery-powered radio or charged phone available.",
            "Follow official cyclone warnings.",
            "Stay in a strong and secure building.",
            "Keep emergency contacts accessible."
        ],

        donts: [
            "Do not travel unnecessarily during the cyclone.",
            "Do not stand near windows.",
            "Do not touch fallen electrical wires.",
            "Do not ignore evacuation orders."
        ]
    },


    "forest-fire": {
        name: "Forest Fire",

        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Forest_fire.jpg",

        introduction:
            "A forest fire is an uncontrolled fire that spreads through forests, grasslands, or other areas containing vegetation. It can spread rapidly in hot, dry, and windy conditions.",

        causes: [
            "Lightning and other natural causes",
            "Careless disposal of cigarettes or matches",
            "Unattended campfires",
            "Burning of vegetation or waste",
            "Intentional fires"
        ],

        warningSigns: [
            "Smoke or strong smell of burning vegetation",
            "Visible flames in forest or grassland areas",
            "Official wildfire warnings",
            "Rapidly increasing heat or falling ash"
        ],

        before: [
            "Keep dry leaves and flammable materials away from buildings.",
            "Know local evacuation routes.",
            "Prepare an emergency bag.",
            "Follow local fire restrictions."
        ],

        during: [
            "Evacuate immediately when authorities instruct you to leave.",
            "Move away from the direction of the fire and smoke.",
            "Stay indoors temporarily only when authorities advise it is safer.",
            "Cover your nose and mouth from smoke when necessary."
        ],

        after: [
            "Return only after authorities declare the area safe.",
            "Watch for hot ashes and hidden burning areas.",
            "Avoid damaged trees and structures.",
            "Seek medical attention if affected by smoke."
        ],

        dos: [
            "Follow evacuation routes.",
            "Keep emergency supplies ready.",
            "Stay informed about fire conditions.",
            "Help vulnerable people evacuate safely."
        ],

        donts: [
            "Do not attempt to fight a large forest fire yourself.",
            "Do not return to an evacuated area.",
            "Do not ignore smoke-related health problems.",
            "Do not block emergency vehicles."
        ]
    },


    tsunami: {
        name: "Tsunami",

        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lebak_Tsunami.jpg",

        introduction:
            "A tsunami is a series of powerful ocean waves usually caused by a large disturbance under or near the sea, such as an underwater earthquake, volcanic eruption, or landslide.",

        causes: [
            "Underwater earthquakes",
            "Underwater volcanic eruptions",
            "Submarine landslides",
            "Rarely, large impacts in the ocean"
        ],

        warningSigns: [
            "A strong or long-lasting earthquake near the coast",
            "Unusual and sudden sea-level changes",
            "The sea suddenly moving far away from the shore",
            "Official tsunami warnings or sirens"
        ],

        before: [
            "Learn whether your area is in a tsunami hazard zone.",
            "Know the route to higher ground.",
            "Keep an emergency kit ready.",
            "Learn the meaning of local tsunami warnings and sirens."
        ],

        during: [
            "Move immediately to higher ground or farther inland.",
            "Do not wait to watch the waves.",
            "Follow evacuation signs and official instructions.",
            "Stay away from beaches and coastal areas."
        ],

        after: [
            "Stay away from coastal areas until authorities declare them safe.",
            "Be alert for additional waves.",
            "Avoid floodwater and damaged structures.",
            "Follow official emergency information."
        ],

        dos: [
            "Move quickly after a strong coastal earthquake.",
            "Follow evacuation routes.",
            "Stay at a safe elevation.",
            "Listen for official updates."
        ],

        donts: [
            "Do not go to the beach to watch the tsunami.",
            "Do not return after the first wave.",
            "Do not ignore natural warning signs.",
            "Do not enter contaminated or damaged water areas."
        ]
    },


    landslide: {
        name: "Landslide",

        image: "https://commons.wikimedia.org/wiki/Special:FilePath/Wikipedia_Landslide.jpg",

        introduction:
            "A landslide occurs when rock, soil, or debris moves down a slope. Heavy rainfall, earthquakes, erosion, and human activities can increase the risk of landslides.",

        causes: [
            "Heavy or prolonged rainfall",
            "Earthquakes and ground shaking",
            "Erosion of slopes",
            "Removal of vegetation",
            "Construction and other human activities"
        ],

        warningSigns: [
            "New cracks in the ground or buildings",
            "Trees, poles, or fences tilting unexpectedly",
            "Unusual sounds such as cracking or rumbling",
            "Changes in water flow or sudden muddy water"
        ],

        before: [
            "Know whether your area is at risk of landslides.",
            "Avoid building on unstable slopes.",
            "Maintain vegetation on slopes where appropriate.",
            "Monitor rainfall and official warnings."
        ],

        during: [
            "Move away from the path of the landslide.",
            "Move to higher or safer ground if possible.",
            "Follow evacuation instructions.",
            "If trapped, protect your head and stay as safe as possible."
        ],

        after: [
            "Stay away from the landslide area.",
            "Watch for additional landslides.",
            "Avoid damaged roads and bridges.",
            "Report damaged infrastructure to authorities."
        ],

        dos: [
            "Pay attention to warning signs.",
            "Follow evacuation instructions.",
            "Stay informed during heavy rainfall.",
            "Help others only when it is safe."
        ],

        donts: [
            "Do not enter an active landslide area.",
            "Do not stand below unstable slopes.",
            "Do not ignore cracks or unusual ground movement.",
            "Do not travel through damaged roads without confirmation of safety."
        ]
    }
};


// Get the disaster from the URL

const urlParams = new URLSearchParams(window.location.search);

const disasterType = urlParams.get("disaster");

const disaster = disasters[disasterType];


// Display the information

if (disaster) {

    document.title = disaster.name + " | Disaster Management";

    document.getElementById("disaster-name").textContent =
        disaster.name;

    document.getElementById("disaster-introduction").textContent =
        disaster.introduction;

    document.getElementById("disaster-image").src =
        disaster.image;

    document.getElementById("disaster-image").alt =
        disaster.name;


    // Causes
    const causesList = document.getElementById("causes");

    disaster.causes.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        causesList.appendChild(li);

    });


    // Warning signs
    const warningList = document.getElementById("warning-signs");

    disaster.warningSigns.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        warningList.appendChild(li);

    });


    // Before
    const beforeList = document.getElementById("before");

    disaster.before.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        beforeList.appendChild(li);

    });


    // During
    const duringList = document.getElementById("during");

    disaster.during.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        duringList.appendChild(li);

    });


    // After
    const afterList = document.getElementById("after");

    disaster.after.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        afterList.appendChild(li);

    });


    // DOs
    const dosList = document.getElementById("dos");

    disaster.dos.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        dosList.appendChild(li);

    });


    // DON'Ts
    const dontsList = document.getElementById("donts");

    disaster.donts.forEach(function(item) {

        const li = document.createElement("li");

        li.textContent = item;

        dontsList.appendChild(li);

    });

}