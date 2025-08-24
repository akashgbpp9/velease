# Inspaire - Architecture and Interior Design React Template

A modern, responsive React application converted from the original HTML template "Inspaire - Architecture and Interior Design HTML Template".

## 🚀 Features

- **Modern React 18** with TypeScript
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Framer Motion integration
- **Modern Styling** - Tailwind CSS with custom design system
- **Routing** - React Router for navigation
- **Component-Based Architecture** - Reusable, maintainable components
- **Performance Optimized** - Lazy loading and optimized animations

## 🎨 Design System

### Colors

- **Primary**: #192324 (Dark Green)
- **Secondary**: #F8F8F8 (Light Gray)
- **Accent**: #7C877F (Sage Green)
- **Text**: #283132 (Dark Gray)
- **White**: #FFFFFF

### Typography

- **Font Family**: Hanken Grotesk (Google Fonts)
- **Responsive**: Mobile-first typography scale

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services listing
│   ├── Contact.tsx     # Contact form
│   └── ...            # Other pages
├── assets/             # Static assets
├── App.tsx            # Main app component
└── index.css          # Global styles
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd inspaire-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## 📱 Pages & Features

### ✅ Completed Pages

- **Home** - Hero section, about, why choose us, CTA
- **About** - Company story, stats, team, mission/vision
- **Services** - Service listings, process, features
- **Contact** - Contact form, information, map placeholder
- **404** - Not found page

### 🚧 Under Development

- **Projects** - Portfolio showcase
- **Blog** - Articles and news
- **FAQs** - Frequently asked questions
- **Image Gallery** - Photo collections
- **Service/Project Details** - Individual service/project pages

## 🎭 Animation Features

- **Scroll Animations** - Elements animate on scroll
- **Page Transitions** - Smooth page-to-page navigation
- **Hover Effects** - Interactive element states
- **Loading States** - Smooth loading animations

## 🔧 Customization

### Styling

- Modify `tailwind.config.js` for theme changes
- Update `src/index.css` for global styles
- Component-specific styles in individual components

### Content

- Update text content in component files
- Replace placeholder images with actual content
- Modify navigation structure in `Header.tsx`

### Colors & Typography

- Update color variables in `tailwind.config.js`
- Change fonts in `src/index.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Features

- **Lazy Loading** - Components load on demand
- **Optimized Images** - Responsive image handling
- **Smooth Scrolling** - CSS-based smooth scroll
- **Animation Optimization** - Hardware-accelerated animations

## 🔍 SEO Features

- **Semantic HTML** - Proper heading structure
- **Meta Tags** - Ready for meta tag implementation
- **Accessibility** - ARIA labels and semantic markup
- **Performance** - Fast loading times

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📦 Build & Deployment

### Development

```bash
npm start
```

### Production Build

```bash
npm run build
```

### Deploy to Netlify/Vercel

1. Build the project: `npm run build`
2. Upload `build/` folder to your hosting platform
3. Configure routing for SPA (single-page application)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is based on the original "Inspaire" HTML template. Please ensure you have proper licensing for commercial use.

## 🆘 Support

For support and questions:

- Check the documentation
- Review the code comments
- Open an issue on GitHub

## 🔮 Future Enhancements

- **CMS Integration** - Content management system
- **E-commerce** - Online booking/consultation
- **Blog System** - Full-featured blog
- **Portfolio Management** - Dynamic project showcase
- **Contact Form Backend** - Form submission handling
- **Image Optimization** - Advanced image handling
- **PWA Features** - Progressive web app capabilities

---

**Built with ❤️ using React and modern web technologies**
