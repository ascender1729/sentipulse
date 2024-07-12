# SentiPulse: Social Sentiment Analyzer

SentiPulse is an advanced sentiment analysis tool designed to quickly gauge public opinion from social media-style text inputs. It provides real-time sentiment analysis with a user-friendly interface, making it easy to understand the emotional tone of text data.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Features

- **Advanced Sentiment Analysis**: Utilizes the `distilroberta-base` model from Hugging Face for accurate sentiment classification.
  - Classifies text into Positive, Negative, or Neutral categories.
  - Provides a confidence score for each classification.
- **Fallback Mechanism**: Implements a local, rule-based sentiment analysis as a backup when the Hugging Face API is unavailable.
- **Real-time Processing**: Instantly analyzes the sentiment of input text.
- **Intuitive User Interface**: Easy-to-use interface for entering text and viewing results.
- **Visual Representation**: Dynamic chart displaying sentiment distribution using Chart.js.
- **Recent Analysis History**: View a list of recent sentiment analyses stored in SQLite database.
- **Responsive Design**: Seamless experience across different device sizes.

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime for server-side logic.
- **Express**: Web application framework for Node.js.
- **SQLite**: Lightweight, serverless database for data storage.
- **Hugging Face Inference API**: 
  - Model: `distilroberta-base`
  - Task: Text Classification (Sentiment Analysis)
  - Capabilities: Multi-class classification (Positive, Negative, Neutral)
- **dotenv**: Environment variable management.

### Frontend
- **Svelte**: Reactive JavaScript framework for building user interfaces.
- **Vite**: Next-generation frontend tooling for faster development.
- **Chart.js**: JavaScript charting library for data visualization.

### Development Tools
- **Git**: Version control system.
- **npm**: Package manager for JavaScript.
- **nodemon**: Utility for automatic server restarts during development.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Git

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/ascender1729/sentipulse.git
   cd sentipulse
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Rename `.env.example` to `.env` in the server directory.
   - Add your Hugging Face API key to the `.env` file:
     ```
     HF_API_KEY=your_huggingface_api_key_here
     ```

## Usage

1. Start the server:
   ```
   cd server
   npm run dev
   ```

2. In a new terminal, start the client:
   ```
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`.

4. Enter text in the input field and click "Analyze Sentiment" to see the results.

## Project Structure

```
sentipulse/
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── index.js
│   └── package.json
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.svelte
│   │   └── main.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .env
├── .gitignore
└── README.md
```

## API Endpoints

- `POST /api/analyze`: Analyze sentiment of provided text.
- `GET /api/recent`: Retrieve recent sentiment analyses.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Pavan Kumar - pavankumard.pg19.ma@nitp.ac.in

LinkedIn: [linkedin.com/in/im-pavankumar](https://www.linkedin.com/in/im-pavankumar/)

Project Link: [https://github.com/ascender1729/sentipulse](https://github.com/ascender1729/sentipulse)

## Acknowledgements

- [Hugging Face](https://huggingface.co/) for their Inference API and the `distilroberta-base` model
- [Svelte](https://svelte.dev/) for the reactive UI framework
- [Chart.js](https://www.chartjs.org/) for data visualization
- [Express.js](https://expressjs.com/) for the server framework
- [SQLite](https://www.sqlite.org/) for the database