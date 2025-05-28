// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let events = [
  { id: 1, name: "Music Festival", category: "music", date: "2025-06-01", seats: 50 },
  { id: 2, name: "Tech Conference", category: "tech", date: "2025-07-15", seats: 100 },
  { id: 3, name: "Football Match", category: "sports", date: "2025-08-20", seats: 75 }
];

let bookings = [];

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.post('/api/bookings', (req, res) => {
  const { eventId, seatsRequested, userName } = req.body;

  if (!eventId || !seatsRequested || !userName) {
    return res.status(400).json({ message: 'Missing booking info.' });
  }

  const event = events.find(e => e.id === eventId);
  if (!event) return res.status(404).json({ message: 'Event not found.' });

  if (event.seats < seatsRequested) {
    return res.status(400).json({ message: 'Not enough seats available.' });
  }

  event.seats -= seatsRequested;

  bookings.push({ id: bookings.length + 1, eventId, seatsRequested, userName });

  res.json({ message: 'Booking confirmed!', bookingId: bookings.length });
});

app.listen(3000, () => console.log('Server running on port 3000'));
