// Crime data arrays
const precincts = [
    "1ST PRECINCT", "6TH PRECINCT", "CENTRAL PARK", 
    "13TH PRECINCT", "5TH PRECINCT", "QUEENS", "BRONX", 
    "BROOKLYN", "HARLEM", "UPPER EAST SIDE"
];

const crimes = [
    { type: "Robbery in progress", audio: "Roberry" },
    { type: "10-33 Emergency", audio: "1033" },
    { type: "Shots fired", audio: "ShotsFired" },
    { type: "Suspicious activity", audio: "Sus" },
    { type: "Assault reported", audio: "Assault" },
    { type: "Pursuit in progress", audio: "Pursuit" }
];

const frequencies = [
    "460.4500", "480.5200", "560.4000", "460.1250", 
    "475.7500", "490.3200", "530.5500"
];

// Function to play audio using the file ID
function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    } else {
        console.error("Audio element not found:", audioId);
    }
}

// Function to randomize precinct and crime data
function generateCrimeReport() {
    const precinct = precincts[Math.floor(Math.random() * precincts.length)];
    const crime = crimes[Math.floor(Math.random() * crimes.length)];
    const frequency = frequencies[Math.floor(Math.random() * frequencies.length)];
    
    // Create the crime report element
    const report = document.createElement("div");
    report.className = "precinct";
    report.innerHTML = `
        <h2>${precinct}</h2>
        <p>${crime.type}</p>
        <p>FM: 101.3 FREQ.: ${frequency}</p>
    `;

    // Add the report to the UI
    const precinctsContainer = document.getElementById("precincts");
    precinctsContainer.appendChild(report);

    // Play the specific police report audio for the crime type
    playAudio(crime.audio);
}

// Generate a new crime report every minute
setInterval(generateCrimeReport, 60000);

// Initialize with a few reports
generateCrimeReport();
generateCrimeReport();

// Add event listener to the "Track Crime" button
document.getElementById("track-crime").addEventListener("click", () => {
    const precinctsContainer = document.getElementById("precincts");
    precinctsContainer.innerHTML = ""; // Clear previous reports
    generateCrimeReport(); // Generate a new report on button click
});
