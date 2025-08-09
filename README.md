# Super Tic-Tac-Toe - Ultimate Gaming Experience

A modern Super Tic-Tac-Toe game with an elegant login interface, built with vanilla web technologies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Boxicons](https://img.shields.io/badge/Boxicons-000000?style=for-the-badge&logo=boxicons&logoColor=white)

## ✨ Features

- 🎮 **Super Tic-Tac-Toe** - Advanced 3x3x3 grid gameplay
- 🔐 **Login Interface** - Beautiful authentication form with animations
- 🎲 **Coin Flip** - Randomized first player selection
- 📊 **Score Tracking** - Real-time player statistics
- 🎨 **Modern UI** - Glassmorphism design with smooth animations
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **Smart Game Logic** - Advanced win detection and turn management

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Live Server (VS Code extension) or any local server

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd LoginForm-SUPER-TicTacToeGame

# Open with Live Server
# Or serve with any local server
python -m http.server 8000
```

Visit `http://localhost:8000` or your Live Server URL to start playing.

## 🎮 How to Play

### Game Rules
Super Tic-Tac-Toe is an advanced version of the classic game:

1. **Board Structure**: 9 smaller 3×3 grids arranged in a larger 3×3 board
2. **Turn System**: Players take turns placing X or O in any available square
3. **Grid Restriction**: After a move, the next player must play in the grid corresponding to the square position
4. **Winning**: Win 3 small grids in a row (horizontal, vertical, or diagonal) to win the game
5. **Tie Breaking**: If a small grid ends in a tie, the player with more symbols wins that grid

### Game Flow
1. **Login** - Enter credentials or create account
2. **Coin Flip** - Determine first player randomly
3. **Play** - Take turns placing symbols strategically
4. **Win** - Achieve 3 grids in a row to claim victory

## 🛠️ Tech Stack

**Frontend:**
- HTML5 - Semantic markup and structure
- CSS3 - Modern styling with glassmorphism effects
- JavaScript (ES6+) - Game logic and interactions
- jQuery - DOM manipulation and event handling

**Design & Icons:**
- Boxicons - Beautiful icon library
- Google Fonts (MuseoModerno) - Modern typography
- CSS Grid & Flexbox - Responsive layouts

## 📁 Project Structure

```
LoginForm-SUPER-TicTacToeGame/
├── index.html              # Login page with navigation
├── Super-TicTacToeGame.html # Main game interface
├── style.css               # Complete styling and animations
├── javascript.js           # Login form interactions
├── background.jpg          # Background image
├── 401082282_3528659734110858_5090370684649234077_n.jpg  # Logo
└── vzk583o0lsk41.jpg       # Favicon
```

## 🎨 Design Features

### Login Interface
- **Glassmorphism Effect** - Translucent containers with backdrop blur
- **Smooth Animations** - Hover effects and transitions
- **Responsive Navigation** - Mobile-friendly header
- **Form Validation** - Email and password validation

### Game Interface
- **Dynamic Grid System** - 9 interconnected 3×3 grids
- **Visual Feedback** - Current player and valid moves highlighting
- **Score Display** - Real-time player statistics
- **Win Animations** - Celebratory overlays for victories

## 🔧 Configuration

### Customization
Update colors and styling in `style.css`:
```css
:root {
    --primary-color: #4CAF50;
    --background-color: #162928;
    --glass-bg: rgba(255, 255, 255, 0.9);
}
```

### Game Settings
Modify game behavior in `Super-TicTacToeGame.html`:
```javascript
// Adjust game speed and animations
var animationSpeed = 500;
var coinFlipDuration = 2000;
```

## 🚀 Deployment

### Static Hosting
```bash
# Build for production (if needed)
# This is a static site - just upload all files

# Deploy to GitHub Pages
git push origin main
```

### Local Development
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using Live Server (VS Code)
# Install Live Server extension and right-click index.html
```

## 🎯 Game Features

### Advanced Logic
- **Smart Move Validation** - Prevents invalid moves
- **Win Detection** - Complex algorithm for all win conditions
- **Tie Handling** - Proper resolution of tied grids
- **Turn Management** - Automatic player switching

### User Experience
- **Visual Indicators** - Clear current player and valid moves
- **Smooth Transitions** - Animated coin flip and grid updates
- **Score Persistence** - Maintains scores during session
- **Responsive Design** - Works on desktop, tablet, and mobile

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Experience the ultimate Super Tic-Tac-Toe challenge!*

