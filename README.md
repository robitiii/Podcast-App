# Podcast Shows App

A modern, responsive web application for browsing and discovering podcast shows with advanced filtering and detailed modal views.

## 🎯 Features

- **Podcast Grid Display**: Clean, card-based layout showcasing podcast covers, titles, and metadata
- **Genre Filtering**: Filter podcasts by categories including Personal Growth, Investigative Journalism, History, Comedy, Entertainment, Business, Fiction, News, and Kids & Family
- **Recently Updated Filter**: View podcasts updated within the last 7 days
- **Detailed Modal Views**: Click any podcast card to see comprehensive information including:
  - Full description and metadata
  - Season-by-season breakdown with episode counts
  - Genre information
  - Last updated date
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth interactions

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (for development server)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DJS01-2025-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Or manually:
   ```bash
   npx http-server -p 8080
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

## 📁 Project Structure

```
DJS01-2025-main/
├── index.html              # Main HTML file
├── src/
│   ├── index.js            # Main application logic
│   ├── data.js             # Podcast, genre, and season data
│   ├── components/
│   │   ├── createModal.js      # Modal component for detailed views
│   │   └── createPodcastCard.js # Podcast card component
│   ├── views/
│   │   └── createGrid.js       # Grid layout component
│   └── utils/
│       ├── DateUtils.js        # Date formatting utilities
│       └── GenreService.js     # Genre management service
```

## 🛠️ Technical Details

### Architecture

- **Modular JavaScript**: ES6 modules for clean code organization
- **Component-based**: Reusable components for cards, modals, and grids
- **Service Layer**: Dedicated services for genre management and date utilities
- **Event-driven**: Clean separation of concerns with event listeners

### Key Components

- **GenreService**: Manages genre data and filtering logic
- **DateUtils**: Handles date formatting and "recently updated" calculations
- **createGrid**: Renders and manages the podcast grid layout
- **createModal**: Handles modal display and content management
- **createPodcastCard**: Generates individual podcast cards with click handlers

### Data Structure

The app uses three main data collections:

- **Podcasts**: Core podcast information (title, description, image, genres, etc.)
- **Genres**: Category definitions with descriptions and associated shows
- **Seasons**: Detailed season information for each podcast

## 🎨 Styling

The application features a modern, responsive design with:

- **CSS Grid**: For flexible podcast card layouts
- **Flexbox**: For component alignment and spacing
- **Responsive Breakpoints**: Mobile-first approach with tablet and desktop optimizations
- **Modal Overlays**: Smooth modal animations and backdrop effects
- **Interactive Elements**: Hover effects and smooth transitions

### Adding New Genres

Add new genres to the `genres` array in `src/data.js`:

```javascript
{
  id: 10,
  title: "New Genre",
  description: "Genre description...",
  shows: ["podcast-id-1", "podcast-id-2"]
}
```

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the DJS01-2025 course work.

## 🎯 Future Enhancements

- Search functionality
- Favorites/bookmarking system
- Dark/light theme toggle
- Audio player integration
- User reviews and ratings
- Advanced filtering options (date range, episode count, etc.)

---

Built with ❤️ using vanilla JavaScript, HTML5, and CSS3
