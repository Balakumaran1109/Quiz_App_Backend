#  Inventory Management System (Backend)

The Flexible Quiz Application backend is built using Node.js, Express, and MongoDB, providing a robust API to manage quizzes, users, and results. It ensures secure authentication, real-time quiz tracking, and efficient data handling for a seamless quiz experience.

##  Features
- Product & stock management
- Secure authentication & authorization (JWT)
- CRUD operations for inventory items
- API endpoints for frontend integration
- Data persistence using MongoDB

##  Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **API Testing:** Postman

##  Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Balakumaran1109/Quiz_App_Backend.git
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables: (.env)
   * Create a .env file in the root directory and specify the following variables:
   * MONGO_URI: MongoDB connection string
   * PORT: Port for the server to listen on
   
4. Start the server:
   ```bash
   npm start
   ```

##  API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/users/registeruser` | Register a new user |
| POST   | `/timer/starttimer` | Start Timer |
| GET    | `/users/getuserdetails` | Get User Details |
| PUT    | `/timer/updatetimer` | Update Timer |
| POST | `/quiz/savequiz` | Save every quiz |

##  Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

##  Frontend Repository
The link to the frontend repository can be found here [Frontend Repo](https://github.com/Balakumaran1109/Quiz_App_Frontend).

## License
This project is open-source and available under the MIT License.
