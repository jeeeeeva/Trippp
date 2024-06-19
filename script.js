const itinerary = {
    1: `
        <h2>Day 1: Arrival and Local Sightseeing</h2>
        <p><strong>Morning:</strong> Arrive in Munnar, check into the hotel, and have breakfast.</p>
        <p><strong>Late Morning to Afternoon:</strong> Visit Tea Gardens and Tea Museum, Mattupetty Dam, and Echo Point. Enjoy a picnic lunch.</p>
        <p><strong>Afternoon to Evening:</strong> Visit Kundala Lake, Top Station, and have dinner at a local restaurant. Explore Munnar town.</p>
    `,
    2: `
        <h2>Day 2: Day Trip to Kanthaloor</h2>
        <p><strong>Morning:</strong> Have an early breakfast and drive to Kanthaloor. Visit Kanthaloor Farms.</p>
        <p><strong>Late Morning to Afternoon:</strong> Explore Chinnar Wildlife Sanctuary and Marayoor Sandalwood Forest. Visit the Dolmens in Marayoor. Have lunch in Kanthaloor.</p>
        <p><strong>Afternoon to Evening:</strong> Visit Kulachivayal Rocks. Return to Munnar for dinner and rest.</p>
    `,
    3: `
        <h2>Day 3: Day Trip to Mankulam</h2>
        <p><strong>Morning:</strong> Have breakfast and drive to Mankulam. Visit Lakkam Waterfalls.</p>
        <p><strong>Late Morning to Afternoon:</strong> Explore Mankulam Village, visit Viripara and Attukal Waterfalls. Enjoy a picnic lunch or visit a local eatery.</p>
        <p><strong>Afternoon to Evening:</strong> Take a short trek or nature walk in Mankulam Forest. Return to Munnar for shopping and dinner. Depart for your next destination.</p>
    `
};

function showDay(day) {
    const itineraryDiv = document.getElementById('itinerary');
    itineraryDiv.innerHTML = itinerary[day];
}

