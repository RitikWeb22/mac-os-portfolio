# macOS Portfolio - Ritik

A modern, interactive portfolio website with a macOS-inspired interface. Features draggable windows, responsive design, and comprehensive SEO optimization.

![macOS Portfolio](public/mac-wallpaper.jpg)

## ✨ Features

- 🖥️ **macOS-Style Interface** - Authentic macOS design with draggable windows
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern Design** - Glassmorphism effects and smooth animations
- 🚀 **SEO Optimized** - Complete meta tags, structured data, and sitemap
- ⚡ **Fast Performance** - Built with Vite and React 19
- 🎯 **Interactive Windows** - Draggable and resizable components
- 📊 **Project Gallery** - Showcase your work with beautiful card layouts
- 🖼️ **Achievement Section** - Photo carousel for events and milestones
- 📝 **Sticky Notes** - Draggable note widgets
- 💼 **Professional Components** - GitHub projects, LinkedIn, Resume, Terminal, Spotify

## 🛠️ Tech Stack

- **React 19.2.0** - Latest React with modern features
- **Vite 7.2.4** - Lightning-fast build tool
- **SASS 1.97.2** - Advanced styling capabilities
- **react-rnd 10.5.2** - Drag and resize functionality
- **react-markdown** - Markdown rendering
- **react-syntax-highlighter** - Code syntax highlighting

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd mac-os-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
mac-os-portfolio/
├── public/                 # Static assets
│   ├── doc-icons/         # Dock application icons
│   ├── nav-icons/         # Navigation menu icons
│   ├── robots.txt         # SEO: Search engine rules
│   ├── sitemap.xml        # SEO: Site structure
│   ├── manifest.json      # PWA configuration
│   ├── .htaccess          # Server configuration
│   └── ...                # Images and assets
├── src/
│   ├── components/
│   │   ├── windows/       # Window components (Github, Resume, etc.)
│   │   ├── widgets/       # Widget components (StickyNotes)
│   │   ├── Clock.jsx      # Clock component
│   │   ├── DateTime.jsx   # Date/Time display
│   │   ├── Nav.jsx        # Top navigation bar
│   │   ├── Docks.jsx      # Bottom dock
│   │   └── Achievements.jsx  # Gallery component
│   ├── assets/            # JSON data and animations
│   ├── App.jsx            # Main application
│   ├── main.jsx           # Entry point
│   └── app.scss           # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Components

### Windows

- **Github** - Display your GitHub projects with cards
- **LinkedIn** - Showcase your professional profile
- **Resume** - Display your resume/CV
- **Note** - Notepad for quick notes
- **Spotify** - Music player integration
- **Terminal** - Interactive CLI interface
- **VideoResume** - Video presentation

### Widgets

- **StickyNotes** - Draggable colorful notes
- **Achievements** - Photo gallery carousel

### Navigation

- **Nav** - Top macOS-style menu bar
- **Docks** - Bottom application dock with icons
- **Clock/DateTime** - Live time display

## 🔧 Customization

### Update Personal Information

1. **index.html** - Update meta tags for SEO
2. **src/assets/github.json** - Add your projects
3. **public/** - Replace images and icons
4. **src/components/** - Customize component content

### Add New Window

```jsx
// 1. Create component in src/components/windows/
// 2. Add to App.jsx
import NewWindow from "./components/windows/NewWindow";

// 3. Add to windowState
const [windowState, setWindowState] = useState({
  // ... existing windows
  newWindow: false,
});

// 4. Render conditionally
{
  windowState.newWindow && (
    <NewWindow
      windowName="newWindow"
      windowState={windowState}
      setWindowState={setWindowState}
    />
  );
}

// 5. Add icon to Docks.jsx
```

### Styling

All styles are in SASS files:

- `app.scss` - Global styles
- `components/[component].scss` - Component-specific styles
- `components/windows/window.scss` - Base window styles

## 🔍 SEO Features

✅ **Meta Tags** - Title, description, keywords, author  
✅ **Open Graph** - Social media sharing optimization  
✅ **Twitter Cards** - Rich Twitter previews  
✅ **Structured Data** - Schema.org JSON-LD markup  
✅ **Sitemap** - XML sitemap for search engines  
✅ **Robots.txt** - Crawler instructions  
✅ **Manifest** - PWA configuration  
✅ **Performance** - Caching and compression (.htaccess)

See [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) for detailed optimization guide.

## 📱 Responsive Design

Breakpoints:

- **1440px+** - Large desktop
- **1024-1439px** - Desktop
- **768-1023px** - Tablet
- **480-767px** - Large mobile
- **320-479px** - Small mobile

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

**Ritik**

- Email: ritikweb30@gmail.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

**Built with ❤️ using React + Vite**
