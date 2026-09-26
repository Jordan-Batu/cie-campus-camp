// ============================================================
// LOCATION DATA
// Contains all rooms, departments, offices, and special areas
// ============================================================
const locations = [
 // -------------------- Floor 1 --------------------

{
    id: "stairs-1-west",
    floor: 1,
    name: "West Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-1-east",
    floor: 1,
    name: "East Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-2-west",
    floor: 2,
    name: "West Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-2-east",
    floor: 2,
    name: "East Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-3-west",
    floor: 3,
    name: "West Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-3-east",
    floor: 3,
    name: "East Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-3-south-west",
    floor: 3,
    name: "Southwest Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-3-south-east",
    floor: 3,
    name: "Southeast Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-4-west",
    floor: 4,
    name: "West Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-4-east",
    floor: 4,
    name: "East Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-4-south-west",
    floor: 4,
    name: "Southwest Stairs",
    type: "Stairs",
    time: 1
},
{
    id: "stairs-4-south-east",
    floor: 4,
    name: "Southeast Stairs",
    type: "Stairs",
    time: 1
},

// Comfort room (male)
{
    id: "cr-male",
    floor: 1,
    name: "Male's Comfort Room",
    shortName: "Male's CR",
    type: "Restroom",
    time: 1
},

// Comfort room (female)
{
    id: "cr-female",
    floor: 1,
    name: "Female's Comfort Room",
    shortName: "Female's CR",
    type: "Restroom",
    time: 1
},


// Welding Room
{
    id: "welding-room",
    floor: 1,
    name: "Room 101 - Welding Room",
    type: "laboratory",
    time: 1
},

// Technology Shop
{
    id: "tech-shop",
    floor: 1,
    name: "Room 101 - Technology Room",
    type: "laboratory",
    time: 1
},
{
    id: "101",
    floor: 1,
    name: "Room 101",
    type: "laboratory",
    time: 1
},
{
    id: "106",
    floor: 1,
    name: "Room 106 - Control Room",
    type: "Control Room",
    time: 1
},
{
    id: "107",
    floor: 1,
    name: "Room 107 - CITE",
    type: "Department",
    time: 1
},
// Technical Arts Department
{
    id: "tad",
    floor: 1,
    name: "Technical Arts Department",
    shortName: "TAD",
    type: "Department",
    time: 1,
    special: true
},
{
    id: "103",
    floor: 1,
    name: "Room 103 - Faculty Lounge",
    type: "Faculty Lounge",
    time: 1
},
{
    id: "104",
    floor: 1,
    name: "Room 104",
    type: "Classroom",
    time: 1
},
{
    id: "105",
    floor: 1,
    name: "Cafeteria",
    shortName: "CAFETERIA",
    type: "Cafeteria Area",
    area: "Cafeteria",
    time: 1
},
// Cafeteria — special location
{
    id: "cafeteria",
    floor: 1,
    name: "Cafeteria",
    shortName: "CAFETERIA",
    type: "Food & Dining Area",
    time: 1,
    special: true
},
{
    id: "108",
    floor: 1,
    name: "Room 108",
    type: "Classroom",
    time: 1
},
    // -------------------- Floor 2 --------------------
        // Comfort room 
{
    id: "cr2",
    floor: 2,
    name: "Female's CR",
    type: "Restroom",
    time: 1
},
    // Classroom 201
    {
        id: "201",
        floor: 2,
        name: "Room 201",
        type: "Classroom",
        time: 3
    },

    // Laboratory 202
    {
        id: "202",
        floor: 2,
        name: "Room 202",
        type: "Laboratory",
        time: 2
    },
    // Classroom 203
    {
        id: "203",
        floor: 2,
        name: "Room 203",
        type: "Classroom",
        time: 2
    },
     // Classroom 204
    {
        id: "204",
        floor: 2,
        name: "Room 204",
        type: "Classroom",
        time: 2
    },
        // Classroom 205
    {
        id: "205",
        floor: 2,
        name: "Room 205",
        type: "Classroom",
        time: 2
    },
    {
        id: "206",
        floor: 2,
        name: "Room 206",
        type: "Classroom",
        time: 2
    },
    {
        id: "207",
        floor: 2,
        name: "Room 207",
        type: "Classroom",
        time: 2
    },
    {
        id: "208",
        floor: 2,
        name: "Room 208",
        type: "Classroom",
        time: 2
    },
    {
        id: "209",
        floor: 2,
        name: "Room 209",
        type: "Classroom",
        time: 2
    },
    {
        id: "210",
        floor: 2,
        name: "Room 210",
        type: "Classroom",
        time: 2
    },


    // -------------------- Floor 3 --------------------
    // Professional Industrial Education Department
    

    // Classroom 301
    {
        id: "301",
        floor: 3,
        name: "Room 301",
        type: "Classroom",
        time: 2
    },
    {
        id: "pie",
        floor: 3,
        name: "Professional Industrial Education",
        shortName: "PIE",
        type: "Department",
        time: 2,
        special: true
    },

    // Computer Laboratory 302
    {
        id: "302",
        floor: 3,
        name: "Room 302",
        type: "Computer Laboratory",
        time: 2
    },

    // Classroom 303
    {
        id: "303",
        floor: 3,
        name: "Room 303",
        type: "Classroom",
        time: 2
    },
     // Home Economics Department
    {
        id: "he",
        floor: 3,
        name: "Home Economics Department",
        shortName: "HE",
        type: "Department",
        time: 2,
        special: true
    },

    // -------------------- Floor 4 --------------------
    // Dean's Office
    {
        id: "dean",
        floor: 4,
        name: "Dean's Office",
        shortName: "DEAN",
        type: "Office",
        time: 3,
        special: true
    },

    // Classroom 401
    {
        id: "401",
        floor: 4,
        name: "Room 401",
        type: "Classroom",
        time: 3
    },

    // Classroom 402
    {
        id: "402",
        floor: 4,
        name: "Room 402",
        type: "Classroom",
        time: 3
    }
];


// ============================================================
// MAIN SCRIPT VARIABLES
// ============================================================

// Keeps track of the currently selected floor
let currentFloor = 1;

// Stores the location currently selected by the user
let selectedLocation = null;

// Current zoom level applied to the building floor plan
let currentZoom = 1;

// Names displayed for each floor
const floorNames = {
    1: "1st Floor",
    2: "2nd Floor",
    3: "3rd Floor",
    4: "4th Floor"
};

// Get important HTML elements from the page
const floorButtons = document.getElementById("floorButtons");
const roomList = document.getElementById("roomList");
const floorPlan = document.getElementById("floorPlan");

const floorLabel = document.getElementById("floorLabel");
const headerFloorLabel = document.getElementById("headerFloorLabel");
const infoPanel = document.getElementById("infoPanel");
const roomTitle = document.getElementById("roomTitle");
const roomDetails = document.getElementById("roomDetails");
const routeBox = document.getElementById("routeBox");


// ============================================================
// BUILD FLOOR BUTTONS
// Creates buttons for Floors 1–4
// ============================================================
function buildFloors() {

    // Clear existing floor buttons
    floorButtons.innerHTML = "";

    // Create a button for every floor
    for (let f = 1; f <= 4; f++) {

        let b = document.createElement("button");

        // Add the active class to the currently selected floor
        b.className = "floor-btn" + (f === currentFloor ? " active" : "");

        // Display the floor name
        b.textContent = "🏢 " + floorNames[f];

        // Change floor when button is clicked
        b.onclick = () => showFloor(f);

        // Add button to the page
        floorButtons.appendChild(b);
    }
}


// ============================================================
// SHOW FLOOR
// Changes the currently displayed floor
// ============================================================
function showFloor(f) {

    // Update current floor
    currentFloor = f;

    // Remove any selected location
    selectedLocation = null;

    // Update floor label
    floorLabel.textContent = floorNames[f];
    headerFloorLabel.textContent = floorNames[f];

    // Reset zoom back to default whenever the floor changes
    currentZoom = 1;

    // Rebuild floor buttons so the active button updates
    buildFloors();

    // Refresh the location list
    renderList();

    // Refresh the floor map
    renderMap();

    // Hide the information panel
    infoPanel.classList.add("hidden");
}


// ============================================================
// RENDER LOCATION LIST
// Displays locations for the current floor
// Also handles the search function
// ============================================================
function renderList() {

    // Get search text and convert it to lowercase
    let q = document.getElementById("search").value.toLowerCase();

    // Clear the existing list
    roomList.innerHTML = "";

    // Filter locations for the current floor and search text.
    // Cafeteria is explicitly sorted to the top.
    let items = locations
        .filter(x =>
            x.floor === currentFloor &&
            [x.name, x.id, x.type, x.shortName || ""]
                .join(" ")
                .toLowerCase()
                .includes(q)
        )
        .sort((a, b) => {
            if (a.id === "cafeteria") return -1;
            if (b.id === "cafeteria") return 1;
            return 0;
        });

    // Create a button for each location
    items.forEach(x => {

        let b = document.createElement("button");

        b.className = "room-item";

        // Use a different icon for special locations
        b.textContent = (x.special ? "🏛️ " : "🚪 ") + x.name;

        // Select location when clicked
        b.onclick = () => selectLocation(x.id);

        // Add button to the location list
        roomList.appendChild(b);
    });

    // Show a message if no locations match the search
    if (!roomList.children.length) {
        roomList.innerHTML = "<p>No locations found.</p>";
    }
}

// ============================================================
// FLOOR PLAN DESIGN DATA
// Every floor is laid out on a fixed 1160 x 680 design canvas.
// Coordinates below are converted to percentages at render time,
// so the whole building scales responsively.
//
// Each floor layout has:
//   rooms      -> boxes drawn on the plan (some are clickable
//                 locations, some are purely decorative, like
//                 stair shafts and the hallway strip)
//   entrance   -> the green "Entrance" tag
//   safety     -> fire exits, extinguishers, hose cabinets
//   route      -> the dashed walking-route line(s)
// ============================================================
const CANVAS_W = 1160;
const CANVAS_H = 680;

const floorLayouts = {

    // -------------------- FLOOR 1 --------------------
    1: {
        rooms: [
            { locId: "stairs-1-west", x: 0,    y: 0,   w: 100, h: 230, cls: "rt-stairs",  icon: "🪜", label: "West Stairs" },
            { locId: "cr-male",   x: 100,  y: 0,   w: 90, h: 230, cls: "rt-cr-m",    icon: "🚹", label: "Male's CR" },
            { locId: "welding-room", x: 190, y: 0,   w: 170, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 101 - Welding Room" },
            { locId: "tech-shop",    x: 360, y: 0,   w: 210, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 101 - Technology Room" },
            { locId: "101",       x: 570,  y: 0,   w: 210, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 101" },
            { locId: "tad",       x: 780,  y: 0,   w: 130, h: 230, cls: "rt-special", icon: "⭐", label: "TAD" },
            { locId: "103",       x: 910,  y: 0,   w: 90,  h: 230, cls: "rt-room",    icon: "🚪", label: "Room 103 - Faculty Lounge" },
            { locId: "104",       x: 1000,  y: 0,   w: 85,  h: 230, cls: "rt-room",    icon: "🚪", label: "Room 104" },
            { locId: "stairs-1-east", x: 1081, y: 0,   w: 81, h: 230, cls: "rt-stairs",  icon: "🪜", label: "East Stairs" },

            { locId: null,        x: 0,    y: 230, w: 1160, h: 220, cls: "rt-hallway", icon: "", label: "", garden: true },
            { locId: "106",      x: 770,  y: 270, w: 130,  h: 180, cls: "rt-room",    icon: "🚪", label: "Room 106 - Control Room" },
            { locId: "107",      x: 900,  y: 270, w: 130,  h: 410, cls: "rt-room",    icon: "🚪", label: "Room 107 - CITE" },

            {
                locId: "cafeteria",
                x: 0,
                y: 280,
                w: 570,
                h: 400,
                cls: "rt-special",
                icon: "🍽️",
                label: "Cafeteria",
                clipPath: "polygon(0 0, 39.68% 0, 39.68% 42.5%, 100% 42.5%, 100% 100%, 0 100%)"
            },
            { locId: "108",       x: 570,  y: 450, w: 330, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 108" }
        ],
        entrance: { x: -60, y: 233, w: 140, h: 48 },
        safety: {
            exits: [
                { x: 0, y: 233 },
                { x: 50, y: 690 },
            ],
            extinguishers: [
                   { x: 700, y: 210 },
            
                { x: 450, y: 430 },  
            ],
            hose: [
               { x: 1130, y: 430 }
            ],
            fireAlarms: [
                { x: 350, y: 210 }, { x: 720, y: 435 },   { x: 650, y: 210 },
            ]
        },
        route: {
            main: [[60, 340], [1150, 340]],
            branches: [
                [[300, 340], [300, 450]],
                [[850, 340], [850, 450]],
                [[1010, 340], [1010, 230]]
            ]
        }
    },

    // -------------------- FLOOR 2 --------------------
    2: {
        rooms: [
            { locId: "stairs-2-west",  x: 0,    y: 0,   w: 150, h: 230, cls: "rt-stairs", icon: "🪜", label: "West Stairs" },
            { locId: "cr2", x: 150,  y: 0,   w: 130, h: 230, cls: "rt-cr-f",  icon: "🚺", label: "Female's CR" },
            { locId: "201", x: 280,  y: 0,   w: 150, h: 230, cls: "rt-room",  icon: "🚪", label: "Room 201" },
            { locId: "202", x: 430,  y: 0,   w: 150, h: 230, cls: "rt-room",  icon: "🚪", label: "Room 202" },
            { locId: "203", x: 580,  y: 0,   w: 150, h: 230, cls: "rt-room",  icon: "🚪", label: "Room 203" },
            { locId: "204", x: 730,  y: 0,   w: 150, h: 230, cls: "rt-room",  icon: "🚪", label: "Room 204" },
            { locId: "205", x: 880,  y: 0,   w: 150, h: 230, cls: "rt-room",  icon: "🚪", label: "Room 205" },
            { locId: "stairs-2-east",  x: 1030, y: 0,   w: 130, h: 230, cls: "rt-stairs", icon: "🪜", label: "East Stairs" },

            { locId: null,  x: 0,    y: 230, w: 1160, h: 220, cls: "rt-hallway", icon: "", label: "", garden: true },
                { locId: null,        x: 770,  y: 260, w: 150,  h: 160, cls: "rt-empty",   icon: "", label: "" },
            { locId: null,        x: 950,  y: 260, w: 150,  h: 160, cls: "rt-empty",   icon: "", label: "" },

            { locId: "206", x: 0,    y: 450, w: 200, h: 230, cls: "rt-room", icon: "🚪", label: "Room 206" },
            { locId: "207", x: 200,  y: 450, w: 200, h: 230, cls: "rt-room", icon: "🚪", label: "Room 207" },
            { locId: "208", x: 400,  y: 450, w: 200, h: 230, cls: "rt-room", icon: "🚪", label: "Room 208" },
            { locId: "209", x: 600,  y: 450, w: 200, h: 230, cls: "rt-room", icon: "🚪", label: "Room 209" },
            { locId: "210", x: 800,  y: 450, w: 360, h: 230, cls: "rt-room", icon: "🚪", label: "Room 210" }
        ],
        entrance: { x: 10, y: 336, w: 140, h: 48 },
        safety: {
            exits: [
                { x: -45, y: 345 }, { x: 1170, y: 350 },
                { x: 50, y: 690 },
            ],
            extinguishers: [
                { x: 350, y: 210 }, { x: 650, y: 210 },
                { x: 60, y: 410 },   { x: 1130, y: 360 },
                { x: 450, y: 430 }, { x: 898, y: 430 }, { x: 1010, y: 635 }
            ],
            hose: [
                { x: 130, y: 210     }, { x: 1130, y: 430 }
            ]
        },
        route: {
            main: [[60, 340], [1150, 340]],
            branches: [
                [[300, 340], [300, 450]],
                [[850, 340], [850, 450]],
                [[1010, 340], [1010, 230]]
            ]
        }
    },

    // -------------------- FLOOR 3 --------------------
    3: {
        rooms: [
            { locId: "stairs-3-west",  x: 0,    y: 0,   w: 150, h: 230, cls: "rt-stairs",  icon: "🪜", label: "West Stairs" },
            { locId: "pie", x: 150,  y: 0,   w: 200, h: 230, cls: "rt-special", icon: "⭐", label: "PIE" },
            { locId: "301", x: 350,  y: 0,   w: 180, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 301" },
            { locId: "302", x: 530,  y: 0,   w: 180, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 302" },
            { locId: "303", x: 710,  y: 0,   w: 180, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 303" },
            { locId: "he",  x: 890,  y: 0,   w: 150, h: 230, cls: "rt-special", icon: "⭐", label: "HE" },
            { locId: "stairs-3-east",  x: 1040, y: 0,   w: 120, h: 230, cls: "rt-stairs",  icon: "🪜", label: "East Stairs" },

            { locId: null,  x: 0,    y: 230, w: 1160, h: 220, cls: "rt-hallway", icon: "", label: "", garden: true },
                { locId: null,        x: 770,  y: 260, w: 150,  h: 160, cls: "rt-empty",   icon: "", label: "" },
            { locId: null,        x: 950,  y: 260, w: 150,  h: 160, cls: "rt-empty",   icon: "", label: "" },

            { locId: "stairs-3-south-west", x: 0,    y: 450, w: 260, h: 230, cls: "rt-stairs", icon: "🪜", label: "Southwest Stairs" },
            { locId: "stairs-3-south-east", x: 900,  y: 450, w: 260, h: 230, cls: "rt-stairs", icon: "🪜", label: "Southeast Stairs" }
        ],
        entrance: { x: 10, y: 336, w: 140, h: 48 },
        safety: {
            exits: [
                { x: -45, y: 345 }, { x: 1170, y: 350 },
                { x: 50, y: 690 },
            ],
            extinguishers: [
                { x: 350, y: 210 }, { x: 650, y: 210 },
                { x: 60, y: 410 },   { x: 1130, y: 360 },
                { x: 450, y: 430 }, { x: 898, y: 430 }, { x: 1010, y: 635 }
            ],
            hose: [
                { x: 130, y: 210 }, { x: 1130, y: 430 }
            ]
        },
        route: {
            main: [[60, 340], [1150, 340]],
            branches: [
                [[300, 340], [300, 450]],
                [[850, 340], [850, 450]],
                [[1010, 340], [1010, 230]]
            ]
        }
    },

    // -------------------- FLOOR 4 --------------------
    4: {
        rooms: [
            { locId: "stairs-4-west",   x: 0,   y: 0,   w: 150, h: 230, cls: "rt-stairs",  icon: "🪜", label: "West Stairs" },
            { locId: "dean", x: 150, y: 0,   w: 300, h: 230, cls: "rt-special", icon: "⭐", label: "DEAN" },
            { locId: "401",  x: 450, y: 0,   w: 250, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 401" },
            { locId: "402",  x: 700, y: 0,   w: 250, h: 230, cls: "rt-room",    icon: "🚪", label: "Room 402" },
            { locId: "stairs-4-east",   x: 950, y: 0,   w: 210, h: 230, cls: "rt-stairs",  icon: "🪜", label: "East Stairs" },

            { locId: null,   x: 0,   y: 230, w: 1160, h: 220, cls: "rt-hallway", icon: "", label: "", garden: true },
                { locId: null,        x: 770,  y: 260, w: 150,  h: 160, cls: "rt-empty",   icon: "", label: "" },
            { locId: null,        x: 950,  y: 260, w: 150,  h: 160, cls: "rt-empty",   icon: "", label: "" },

            { locId: "stairs-4-south-west", x: 0,   y: 450, w: 260, h: 230, cls: "rt-stairs", icon: "🪜", label: "Southwest Stairs" },
            { locId: "stairs-4-south-east", x: 900, y: 450, w: 260, h: 230, cls: "rt-stairs", icon: "🪜", label: "Southeast Stairs" }
        ],
        entrance: { x: 10, y: 336, w: 140, h: 48 },
        safety: {
            exits: [
                { x: -45, y: 345 }, { x: 1170, y: 350 },
                { x: 50, y: 690 },
            ],
            extinguishers: [
                { x: 350, y: 210 }, { x: 650, y: 210 },
                { x: 60, y: 410 },   { x: 1130, y: 360 },
                { x: 450, y: 430 }, { x: 898, y: 430 }, { x: 1010, y: 635 }
            ],
            hose: [
                { x: 130, y: 210 }, { x: 1130, y: 430 }, 
            ]
        },
        route: {
            main: [[60, 340], [1150, 340]],
            branches: [
                [[300, 340], [300, 450]],
                [[850, 340],     [850, 450]],
                [[1010, 340], [1010, 230]]
            ]
        }
    }
};

// ============================================================
// GENERIC FLOOR LAYOUT
// Floors 2-4 don't have a reference image, so they are laid
// out automatically from the `locations` array using the same
// visual language (stairs, hallway, entrance, exits,
// extinguishers) as Floor 1.
// ============================================================
function buildGenericLayout(floor) {

    let items = locations
        .filter(x => x.floor === floor)
        .sort((a, b) => (a.special === b.special ? 0 : a.special ? 1 : -1));

    const topH = 230;
    const hallH = CANVAS_H - topH;
    const stairW = 150;
    const usableW = CANVAS_W - stairW;
    const n = Math.max(items.length, 1);
    const roomW = usableW / n;

    let rooms = [
        { locId: null, x: 0, y: 0, w: stairW, h: topH, cls: "rt-stairs", icon: "🪜", label: "Stairs" }
    ];

    items.forEach((x, i) => {
        let cls = "rt-room";
        let icon = "🚪";
        if (x.special) { cls = "rt-special"; icon = "⭐"; }
        else if (x.id === "cr2" || x.id === "cr-female") { cls = "rt-cr-f"; icon = "🚺"; }
        else if (x.type === "Restroom") { cls = "rt-cr-m"; icon = "🚻"; }

        rooms.push({
            locId: x.id,
            x: stairW + i * roomW,
            y: 0,
            w: roomW,
            h: topH,
            cls: cls,
            icon: icon,
            label: x.shortName || x.name
        });
    });

    rooms.push({ locId: null, x: 0, y: topH, w: CANVAS_W, h: hallH, cls: "rt-hallway", icon: "", label: "", garden: true });

    return {
        rooms: rooms,
        entrance: { x: -12, y: topH + 46, w: 140, h: 48 },
        safety: {
            exits: [
                { x: CANVAS_W - 60, y: -44 },
                { x: CANVAS_W / 2, y: topH + 70 }
            ],
            extinguishers: [
                { x: stairW, y: topH - 8 },
                { x: CANVAS_W - 10, y: topH + 70 },
                { x: CANVAS_W / 2, y: topH + 70 - 40 }
            ],
            hose: [
                { x: -10, y: topH + 70 }
            ]
        },
        route: {
            main: [[60, topH + 70], [CANVAS_W - 20, topH + 70]],
            branches: []
        }
    };
}

function getFloorLayout(floor) {
    return floorLayouts[floor] || buildGenericLayout(floor);
}

// ============================================================
// SAFETY ICON HELPERS
// Turns a design-canvas coordinate into a positioned element.
// ============================================================
function pctX(x) { return (x / CANVAS_W * 100) + "%"; }
function pctY(y) { return (y / CANVAS_H * 100) + "%"; }

function makeSafetyIcon(cls, image, x, y, title) {
    let el = document.createElement("div");
    el.className = "safety-icon zoom-stable-icon " + cls;
    el.style.left = pctX(x);
    el.style.top = pctY(y);
    el.innerHTML = '<img src="IMAGES/' + image + '" alt="' + title + ' icon">';
    if (title) el.title = title;
    return el;
}

// ============================================================
// RENDER MAP
// Creates the visual floor map: walls, rooms, hallway,
// entrance, fire-safety signage, and the walking route —
// then places every clickable location on it.
// ============================================================
function renderMap() {

    // Clear the existing map
    floorPlan.innerHTML = "";

    // Create the main building container
    let b = document.createElement("div");
    b.className = "building";
    b.style.transform = "scale(" + currentZoom + ")";

    const layout = getFloorLayout(currentFloor);

    // ---------- Rooms (clickable + decorative) ----------
    layout.rooms.forEach(r => {
        let e = document.createElement("div");
        e.className = "room " + r.cls;
        e.style.left = pctX(r.x);
        e.style.top = pctY(r.y);
        e.style.width = pctX(r.w);
        e.style.height = pctY(r.h);
        if (r.clipPath) e.style.clipPath = r.clipPath;
        if (r.locId === "cafeteria") {
            e.style.justifyContent = "flex-end";
            e.style.paddingBottom = "70px";
        }

        if (r.cls === "rt-hallway") {
            e.innerHTML =
                '<div class="garden-fence garden-fence-top"></div>' +
                '<div class="garden-fence garden-fence-bottom"></div>' +
                '<div class="garden-fence garden-fence-left"></div>' +
                '<div class="garden-fence garden-fence-right"></div>' +
                '<svg class="garden-stage" style="left:29%; top:20%; width:5%; transform:scaleX(-1);" viewBox="0 0 90 200">' +
                '<g transform="translate(90 0) rotate(90)">' +
                '<rect x="10" y="46" width="180" height="34" rx="3" fill="#c9a06a" stroke="#5a4a2b" stroke-width="2"/>' +
                '<rect x="30" y="18" width="140" height="30" rx="3" fill="#e4dfd2" stroke="#5a4a2b" stroke-width="2"/>' +
                '<rect x="0" y="70" width="200" height="10" rx="2" fill="#a9865a"/>' +
                '</g>' +
                '</svg>' +
                '<svg class="garden-planter" style="left:45%;" viewBox="0 0 100 56"><ellipse cx="50" cy="46" rx="46" ry="9" fill="#c9a06a" opacity="0.55"/><ellipse cx="26" cy="30" rx="17" ry="14" fill="#1f8a3d"/><ellipse cx="50" cy="24" rx="20" ry="16" fill="#276b32"/><ellipse cx="72" cy="32" rx="15" ry="13" fill="#2f8f4e"/></svg>';
        } else if (r.icon || r.label) {
            const needsMaleRestroomImage = r.locId === "cr-male";
            const needsFemaleRestroomImage = r.locId === "cr2" || r.locId === "cr-female";
            const needsDoorImage = ["🚪", "🚹", "🚺", "🚻"].includes(r.icon) && !needsMaleRestroomImage && !needsFemaleRestroomImage;
            const needsStairsImage = r.cls === "rt-stairs";
            const needsCafeteriaImage = r.locId === "cafeteria" || r.locId === "105";

            e.innerHTML =
                (needsMaleRestroomImage
                    ? '<img class="floor-icon zoom-stable-icon" src="IMAGES/male-restroom-icon.svg" alt="Male restroom icon" />'
                    : needsFemaleRestroomImage
                        ? '<img class="floor-icon zoom-stable-icon" src="IMAGES/female-restroom-icon.svg" alt="Female restroom icon" />'
                        : needsDoorImage
                            ? '<img class="door-icon zoom-stable-icon" src="IMAGES/door-icon.svg" alt="Door icon" />'
                            : needsStairsImage
                                ? '<img class="floor-icon zoom-stable-icon" src="IMAGES/stairs-icon.svg" alt="Stairs icon" />'
                                : needsCafeteriaImage
                                    ? '<img class="floor-icon zoom-stable-icon" src="IMAGES/cafeteria-icon.svg" alt="Cafeteria icon" />'
                                    : (r.icon ? '<span class="r-icon zoom-stable-icon">' + r.icon + '</span>' : "")) +
                (r.label ? '<span class="room-label">' + r.label + '</span>' : "");
        }

        if (r.locId) {
            e.id = "map-" + r.locId;
            e.onclick = () => selectLocation(r.locId);
        } else {
            e.style.cursor = "default";
        }

        b.appendChild(e);
    });

    // ---------- Entrance tag ----------
    if (layout.entrance) {
        let en = document.createElement("div");
        en.className = "entrance-tag zoom-stable-icon";
        en.style.left = pctX(layout.entrance.x);
        en.style.top = pctY(layout.entrance.y);
        en.innerHTML = '<img src="IMAGES/entrance-icon.svg" alt="Entrance icon">';
        en.title = "Entrance";
        b.appendChild(en);
    }

    // ---------- Walking route (dashed SVG line + arrows) ----------
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "route-svg");
    svg.setAttribute("viewBox", "0 0 " + CANVAS_W + " " + CANVAS_H);
    svg.setAttribute("preserveAspectRatio", "none");

    let marker = document.createElementNS(svgNS, "marker");
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "8");
    marker.setAttribute("markerHeight", "8");
    marker.setAttribute("refX", "5");
    marker.setAttribute("refY", "3");
    marker.setAttribute("orient", "auto");
    marker.innerHTML = '<polygon points="0 0, 6 3, 0 6" fill="#1f8a3d" />';
    let defs = document.createElementNS(svgNS, "defs");
    defs.appendChild(marker);
    svg.appendChild(defs);

    function drawLine(points, withArrow) {
        let path = document.createElementNS(svgNS, "polyline");
        path.setAttribute("points", points.map(p => p[0] + "," + p[1]).join(" "));
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#1f8a3d");
        path.setAttribute("stroke-width", "3");
        path.setAttribute("stroke-dasharray", "10 8");
        if (withArrow) path.setAttribute("marker-end", "url(#arrowhead)");
        svg.appendChild(path);
    }

    if (layout.route) {
        if (layout.route.main) drawLine(layout.route.main, true);
        (layout.route.branches || []).forEach(seg => drawLine(seg, false));
    }

    b.appendChild(svg);

    // ---------- Fire / life-safety signage ----------
    const safety = layout.safety || {};
    (safety.exits || []).forEach(p => {
        let el = document.createElement("div");
        el.className = "safety-icon zoom-stable-icon si-exit";
        el.style.left = pctX(p.x);
        el.style.top = pctY(p.y);
        el.innerHTML = '<img src="IMAGES/exit-icon.svg" alt="Fire exit icon">';
        el.title = "Fire Exit";
        b.appendChild(el);
    });
    (safety.extinguishers || []).forEach(p =>
        b.appendChild(makeSafetyIcon("si-extinguisher", "extinguisher-icon.svg", p.x, p.y, "Fire Extinguisher"))
    );
    (safety.hose || []).forEach(p =>
        b.appendChild(makeSafetyIcon("si-hose", "hose-icon.svg", p.x, p.y, "Fire Hose Cabinet"))
    );
    (safety.fireAlarms || []).forEach(p =>
        b.appendChild(makeSafetyIcon("si-fire-alarm", "fire-alarm-icon.svg", p.x, p.y, "Fire Alarm"))
    );
    (safety.firstAid || []).forEach(p =>
        b.appendChild(makeSafetyIcon("si-firstaid", "firstaid-icon.svg", p.x, p.y, "First Aid Kit"))
    );
    (safety.assembly || []).forEach(p =>
        b.appendChild(makeSafetyIcon("si-assembly", "assembly-icon.svg", p.x, p.y, "Emergency Assembly Area"))
    );

    // Add the completed building map to the page
    floorPlan.appendChild(b);

    // Re-apply the selected highlight, if any, after rebuilding the DOM
    if (selectedLocation) {
        let sel = document.getElementById("map-" + selectedLocation.id);
        if (sel) sel.classList.add("selected");
    }
}


// ============================================================
// SELECT LOCATION
// Shows information about the selected room/location
// ============================================================
function selectLocation(id) {

    // Find the location using its ID
    let x = locations.find(a => a.id === id);

    // Stop if the location does not exist
    if (!x) return;

    // If the selected location is on another floor,
    // automatically switch to that floor
    if (x.floor !== currentFloor) {
        showFloor(x.floor);
    }

    // Store the selected location
    selectedLocation = x;

    // Remove the selected style from all rooms
    document
        .querySelectorAll(".room")
        .forEach(e => e.classList.remove("selected"));

    // Find the selected room on the map
    let e = document.getElementById("map-" + x.id);

    // Highlight the selected room
    if (e) e.classList.add("selected");

    // Display the location name
    roomTitle.textContent = x.name;

    // Display floor and location type
    roomDetails.textContent =
        floorNames[x.floor] + " • " + x.type;

    // Reset the route message
    routeBox.textContent =
        'Click "Locate" to show the route.';

    // Show the information panel
    infoPanel.classList.remove("hidden");
}


// ============================================================
// LOCATE
// Generates a route from the entrance to the selected location
// Shows every room/door passed along the way
// ============================================================
function locate() {

    // Do nothing if no location has been selected
    if (!selectedLocation) return;
    let x = selectedLocation;
    let route;

    // -------------------- FLOOR 1 --------------------

    if (x.id === "cafeteria") {
        route =
            "🚪 Entrance → 1st Floor Hallway → 🍽️ Cafeteria";
    } else if (x.id === "welding-room") {
        route =
            "🚪 Entrance → 🪜 Stairs → 1st Floor Hallway → Room 101 - Welding Room";
    } else if (x.id === "tech-shop") {
        route =
            "🚪 Entrance → 🪜 Stairs → 1st Floor Hallway → Room 101 - Welding Room → Room 101 - Technology Room";
    } else if (x.id === "tad") {
        route =
            "🚪 Entrance → 🪜 Stairs → 1st Floor Hallway → Room 101 - Welding Room → Room 101 - Technology Room → 🏛️ TAD";
    } else if (x.id === "103") {
        route =
            "🚪 Entrance → 🪜 Stairs → 1st Floor Hallway → 🏛️ TAD → Room 103 - Faculty Lounge";
    } else if (x.id === "104") {
        route =
            "🚪 Entrance → 🪜 Stairs → 1st Floor Hallway → 🏛️ TAD → Room 103 - Faculty Lounge → Room 104";


    // -------------------- FLOOR 2 --------------------

    } else if (x.id === "201") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201";
    } else if (x.id === "202") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202";
    } else if (x.id === "203") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202 → Room 203";
    } else if (x.id === "204") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202 → Room 203 → Room 204";
    } else if (x.id === "205") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202 → Room 203 → Room 204 → Room 205";
    } else if (x.id === "206") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202 → Room 203 → Room 204 → Room 205 → Room 206";
    } else if (x.id === "207") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202 → Room 203 → Room 204 → Room 205 → Room 206 → Room 207";
    } else if (x.id === "208") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202 → Room 203 → Room 204 → Room 205 → Room 206 → Room 207 → Room 208";
    } else if (x.id === "209") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202 → Room 203 → Room 204 → Room 205 → Room 206 → Room 207 → Room 208 → Room 209";
    } else if (x.id === "210") {
        route =
            "🚪 Entrance → 🪜 Stairs → 2nd Floor Hallway → Room 201 → Room 202 → Room 203 → Room 204 → Room 205 → Room 206 → Room 207 → Room 208 → Room 209 → Room 210";


    // -------------------- FLOOR 3 --------------------

    } else if (x.id === "pie") {
        route =
            "🚪 Entrance → 🪜 Stairs → 3rd Floor Hallway → 🏛️ PIE";
    } else if (x.id === "301") {
        route =
            "🚪 Entrance → 🪜 Stairs → 3rd Floor Hallway → 🏛️ PIE → Room 301";
    } else if (x.id === "302") {
        route =
            "🚪 Entrance → 🪜 Stairs → 3rd Floor Hallway → 🏛️ PIE → Room 301 → Room 302";
    } else if (x.id === "303") {
        route =
            "🚪 Entrance → 🪜 Stairs → 3rd Floor Hallway → 🏛️ PIE → Room 301 → Room 302 → Room 303";
    } else if (x.id === "he") {
        route =
            "🚪 Entrance → 🪜 Stairs → 3rd Floor Hallway → Room 301 → Room 302 → Room 303 → 🏛️ HE";


    // -------------------- FLOOR 4 --------------------

    } else if (x.id === "dean") {
        route =
            "🚪 Entrance → 🪜 Stairs → 4th Floor Hallway → 🏛️ Dean's Office";
    } else if (x.id === "401") {
        route =
            "🚪 Entrance → 🪜 Stairs → 4th Floor Hallway → 🏛️ Dean's Office → Room 401";
    } else if (x.id === "402") {
        route =
            "🚪 Entrance → 🪜 Stairs → 4th Floor Hallway → 🏛️ Dean's Office → Room 401 → Room 402";


    // -------------------- DEFAULT --------------------

    } else {

        route =
            "🚪 Entrance → 🪜 Stairs → " +
            floorNames[x.floor] +
            " Hallway → 📍 " +
            x.name;
    }

    // Display the route and estimated walking time
    routeBox.innerHTML =
        "<b>📍 Route to " + x.name + "</b>" +
        "<div class='route-line'></div>" +
        route +
        "<div style='margin-top:8px'>" +
        "<b>⏱ Estimated walking time: " +
        x.time +
        " minute" +
        (x.time === 1 ? "" : "s") +
        "</b>" +
        "</div>";
}


// ============================================================
// EVENT LISTENERS
// Connects buttons and inputs to their functions
// ============================================================

// Update the location list whenever the user types in the search box
document.getElementById("search").oninput = renderList;

// Generate the route when the Locate button is clicked
document.getElementById("locateBtn").onclick = locate;

// Hide the information panel when the Close button is clicked
document.getElementById("closeInfo").onclick = () =>
    infoPanel.classList.add("hidden");

// Reset the application back to Floor 1
document.getElementById("resetViewBtn").onclick = () =>
    showFloor(1);

// ============================================================
// ZOOM CONTROLS
// Scales the building floor plan in place, without re-fetching
// or losing the current selection.
// ============================================================
function applyZoom() {
    let building = document.querySelector(".building");
    if (!building) return;

    building.style.transform = "scale(" + currentZoom + ")";
    building.querySelectorAll(".zoom-stable-icon").forEach(icon => {
        icon.style.transform = "scale(" + (1 / currentZoom) + ")";
    });
}

document.getElementById("zoomInBtn").onclick = () => {
    currentZoom = Math.min(2, +(currentZoom + 0.15).toFixed(2));
    applyZoom();
};

document.getElementById("zoomOutBtn").onclick = () => {
    currentZoom = Math.max(0.5, +(currentZoom - 0.15).toFixed(2));
    applyZoom();
};

document.getElementById("zoomResetBtn").onclick = () => {
    currentZoom = 1;
    applyZoom();
};


// ============================================================
// SERVICE WORKER
// Registers the service worker when the page loads.
// This can be used for PWA/offline functionality.
// ============================================================
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("service-worker.js");

    });

    /* PANORAMA VIEWER
    This section uses the Pannellum library to display 360-degree images.
    It checks if a selected location has an associated panorama image,
    and if so, it opens a modal viewer with the image. */
}
// ============================================================
// 360 PANORAMA ASSET MAP
// This object connects each room ID to its matching panorama image file.
// Add more room IDs here if you want to make them navigable in the viewer.
// ============================================================
const panoramas = {

    // First floor images
    "cr-male": "360/PIC EXAM.jpg",
    cafeteria: "360/cafeteria.jpg",
    "welding-room": "360/Room 101 _ Welding Room_.jpg",
    "tech-shop": "360/EXIMG.jpg",
    "101": "360/1.Ex.png",
    tad: "360/PIC EXAM.jpg",

    // Second floor images
    "201": "360/room201.jpg",
    "202": "360/EXIMG.jpg",
    "203": "360/EXIMG.jpg",
    "204": "360/EXIMG.jpg",
    "205": "360/EXIMG.jpg",
    "206": "360/EXIMG.jpg",
    "207": "360/EXIMG.jpg",
    "208": "360/EXIMG.jpg",
    "209": "360/EXIMG.jpg",
    "210": "360/EXIMG.jpg",

    // Third floor images
    "301": "/360/room301.jpg",
    pie: "360/pie.jpg",

    // Fourth floor images
    dean: "360/dean.jpg"
};

// ============================================================
// 360 VIEWER ELEMENT REFERENCES
// These variables point to the modal and buttons used for 360 navigation.
// ============================================================
const viewerModal =
document.getElementById("viewerModal");
const closeViewer =
document.getElementById("closeViewer");
const prevPanoramaBtn = document.getElementById("prevPanoramaBtn");
const nextPanoramaBtn = document.getElementById("nextPanoramaBtn");
const panoramaLabel = document.getElementById("panoramaLabel");

// ============================================================
// PANORAMA NAVIGATION ORDER
// This controls the order used by the Next and Back buttons.
// Change the room IDs here to customize how the 360 images flow.
// ============================================================
const panoramaOrder = [
    "cr-male",
    "cr-female",
    "welding-room",
    "tech-shop",
    "101",
    "tad",
    "cafeteria",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "209",
    "210",
    "301",
    "pie",
    "dean"
];
let panoramaViewer = null;
let currentPanoramaId = null;

// ============================================================
// UPDATE PANORAMA LABEL
// Displays the current room name on top of the 360 viewer.
// ============================================================
function updatePanoramaLabel(id) {
    const location = locations.find(loc => loc.id === id);
    const labelText = location ? location.name : id;
    panoramaLabel.textContent = labelText;
}

// ============================================================
// LOAD PANORAMA
// Destroys the previous Pannellum instance, then loads the new image.
// This is important because the viewer needs to be rebuilt to show a new image.
// ============================================================
function loadPanorama(image) {
    if (panoramaViewer) {
        panoramaViewer.destroy();
        panoramaViewer = null;
    }

    panoramaViewer = pannellum.viewer(
        "panorama",
        {
            type: "equirectangular",
            panorama: image,
            autoLoad: true,
            showControls: true
        }
    );
}

// ============================================================
// NAVIGATE PANORAMA
// direction = 1 for Next
// direction = -1 for Back
// ============================================================
function navigatePanorama(direction) {
    const availablePanoramas = panoramaOrder.filter(id => panoramas[id]);

    if (!availablePanoramas.length) return;

    if (!currentPanoramaId || !availablePanoramas.includes(currentPanoramaId)) {
        currentPanoramaId = availablePanoramas[0];
    }

    const currentIndex = availablePanoramas.indexOf(currentPanoramaId);
    const nextIndex = (currentIndex + direction + availablePanoramas.length) % availablePanoramas.length;
    currentPanoramaId = availablePanoramas[nextIndex];

    const nextImage = panoramas[currentPanoramaId];
    if (!nextImage) return;

    updatePanoramaLabel(currentPanoramaId);
    viewerModal.classList.add("active");
    loadPanorama(nextImage);
    selectLocation(currentPanoramaId);
}

// ============================================================
// VIEW 360 BUTTON HANDLER
// Opens the panorama for the selected room in the map panel.
// ============================================================
document.getElementById("view360Btn").onclick =
() => {

    if (!selectedLocation) return;

    let image = panoramas[selectedLocation.id];

    if (!image) {
        alert("No 360 image available yet.");
        return;
    }

    currentPanoramaId = selectedLocation.id;
    updatePanoramaLabel(currentPanoramaId);

    viewerModal.classList.add("active");
    loadPanorama(image);
};

// ============================================================
// NEXT / BACK BUTTON EVENTS
// ============================================================
prevPanoramaBtn.onclick = () => navigatePanorama(-1);
nextPanoramaBtn.onclick = () => navigatePanorama(1);

// ============================================================
// CLOSE VIEWER
// Destroys the current Pannellum instance before hiding the modal.
// ============================================================
closeViewer.onclick = () => {
    if (panoramaViewer) {
        panoramaViewer.destroy();
        panoramaViewer = null;
    }
    viewerModal.classList.remove("active");
};


// ============================================================
// INITIALIZE APPLICATION
// Builds the floor buttons, location list, and floor map
// when the page first loads.
// ============================================================
buildFloors();
renderList();
renderMap();