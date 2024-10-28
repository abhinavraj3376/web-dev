// public/script.js
async function fetchItineraries() {
  const location = document.getElementById('location').value;
  const budget = document.getElementById('budget').value;
  const interests = document.getElementById('interests').value;

  // Construct query parameters
  const query = new URLSearchParams({ location, budget, interests }).toString();
  
  try {
    const response = await fetch(`/api/itineraries?${query}`);
    const itineraries = await response.json();

    const itinerariesSection = document.getElementById('itineraries');
    itinerariesSection.innerHTML = ''; // Clear previous results

    // Display each itinerary
    itineraries.forEach(itinerary => {
      const itineraryDiv = document.createElement('div');
      itineraryDiv.classList.add('itinerary');
      itineraryDiv.innerHTML = `
        <h2>${itinerary.location}</h2>
        <p><strong>Budget:</strong> ${itinerary.budget}</p>
        <p><strong>Interests:</strong> ${itinerary.interests.join(', ')}</p>
        <p>${itinerary.details}</p>
      `;
      itinerariesSection.appendChild(itineraryDiv);
    });
  } catch (error) {
    console.error('Error fetching itineraries:', error);
  }
}
