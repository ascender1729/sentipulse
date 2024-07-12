# SentiPulse: Social Sentiment Analyzer

SentiPulse is a rapid sentiment analysis tool designed to quickly gauge public opinion from social media-style text inputs. This MVP focuses on delivering core sentiment analysis functionality with a simple, user-friendly interface.

## Tech Stack and Tools

### Backend
- **Node.js**: JavaScript runtime for the server
- **Express**: Web application framework for Node.js
- **SQLite**: Lightweight, serverless database for data storage
- **Hugging Face Inference API**: Used for advanced sentiment analysis (with fallback to local analysis)
- **dotenv**: For managing environment variables

### Frontend
- **Svelte**: Reactive JavaScript framework for building user interfaces
- **Vite**: Next-generation frontend tooling for faster development
- **Chart.js**: JavaScript charting library for data visualization

### Development Tools
- **Git**: Version control system
- **npm**: Package manager for JavaScript
- **nodemon**: Utility for automatically restarting the server during development

### APIs and Services
- **Hugging Face's `distilroberta-base` model**: Pre-trained model for sentiment analysis

## Key Features

1. Intuitive text input interface for social media posts
2. Instant sentiment analysis using a pre-trained model (with local fallback)
3. Visual representation of sentiment results using Chart.js
4. Scrollable list of recent analyses for quick reference
5. Responsive design with animations for enhanced user experience

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   cd server && npm install
   cd ../client && npm install
   ```
3. Set up the environment:
   - Rename `.env.example` to `.env`
   - Add your Hugging Face API key to the `.env` file
4. Start the development servers:
   ```
   # In the server directory
   npm run dev
   
   # In a new terminal, in the client directory
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Enter text in the input field
3. Click 'Analyze Sentiment'
4. View the sentiment analysis result, chart, and recent analyses

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

## Future Enhancements

- Implement user authentication
- Add support for analyzing multiple posts at once
- Integrate with social media APIs for direct data fetching
- Enhance the sentiment analysis model with fine-tuning or more advanced techniques

## License

This project is licensed under the MIT License.

## Acknowledgements

- Hugging Face for providing the sentiment analysis model
- The Svelte and Vite teams for their excellent frontend tools
- The open-source community for the various libraries and tools used in this project