# Ticket-Booking-System
A full-stack web application for browsing and booking tickets for various events. This system is built with a Node.js backend using Express and a responsive HTML/CSS/JavaScript frontend. It supports viewing available events and booking tickets interactively.
 ## Features
- View a list of upcoming events with real-time seat availability
- Book seats with name and quantity input
- Dark/light mode toggle (in the advanced version)
- Responsive design with modal-based booking
- Backend API for events and booking management
## Tech Stack
### Frontend

- HTML, CSS, JavaScript
### Two versions:

- project2.html (Advanced UI with themes and interactive seat selection)
- project3.html (Basic UI with booking modal)

### Backend

- Node.js
- Express.js
- CORS middleware for cross-origin requests
## Project Structure
```
├── server.js             # Express server with RESTful endpoints
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
├── project2.html         # Advanced frontend with theming and search
└── project3.html         # Basic frontend with modal-based booking
```
## Setup Instructions
1. Clone the Repository
```
git clone https://github.com/yourusername/ticket-booking-system.git
cd ticket-booking-system
```
2. Install Dependecies
```
npm install
```
3. Run the Server
```
node server.js
Server runs at: http://localhost:3000
```
4. Open Frontend
You can open either project2.html or project3.html directly in your browser.

- For the basic version, use project3.html
- For the advanced UI, use project2.html
Ensure the server is running before interacting with the frontend.
## API Endpoints
- GET /api/events – List all available events
- POST /api/bookings – Book tickets for an event

## Booking Payload Onine
```
{
  "eventId": 1,
  "seatsRequested": 2,
  "userName": "John Doe"
}
```
## Future Enhancements
- Persistent database integration (e.g., MongoDB)
- Admin dashboard for event management
- Email notifications for bookings
- Payment gateway integration
## License
This project is open-source and available under the  [MIT License](https://opensource.org/licenses/MIT).
