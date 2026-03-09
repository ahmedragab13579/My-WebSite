# Ahmed Ragab - Professional Portfolio

A luxury professional portfolio website built with **React.js** and **Tailwind CSS**, showcasing technical expertise, projects, certifications, and cybersecurity knowledge.

## 🎨 Design Features

- **Luxury Professional Theme**: Deep Navy Blue, Black, White color palette
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Animations**: Fade-in and slide-up animations for enhanced UX
- **Modern UI Components**: Custom buttons, cards, and interactive elements
- **Icon Integration**: Lucide React icons for visual consistency

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Local Development

1. **Clone or download this repository**

   ```bash
   git clone https://github.com/yourusername/ahmed-ragab-portfolio.git
   cd ahmed-ragab-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
ahmed-ragab-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation bar
│   │   ├── Hero.js            # Hero section with CTA
│   │   ├── About.js           # About me section
│   │   ├── Experience.js      # Featured projects
│   │   ├── Skills.js          # Technical skills by category
│   │   ├── Certifications.js  # Certs gallery with modal
│   │   ├── Blog.js            # Blog articles placeholder
│   │   ├── Contact.js         # Contact form & info
│   │   └── Footer.js          # Footer with links
│   ├── App.js                 # Main app component
│   ├── index.js               # React entry point
│   └── index.css              # Global styles & Tailwind
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies & scripts
├── vercel.json                # Vercel deployment config
└── README.md                  # This file
```

## 🎯 Key Sections

### 1. **Hero Section**

- Display name, title, and professional summary
- Download CV button
- Quick stats cards
- Decorative profile card

### 2. **About Me**

- Professional background
- Skills highlights
- Education and achievements
- Language proficiency

### 3. **Experience**

Two featured project cards:

- **E-Commerce Platform** (ITI Training)
  - Redis Caching
  - RabbitMQ Integration
  - API Architecture
- **HR Management System** (IEEE Project)
  - Team Collaboration
  - Email Integration
  - Unit Testing

### 4. **Skills**

Categorized technical skills with progress bars:

- Backend Development (C#, ASP.NET, SQL Server, Redis, RabbitMQ)
- Frontend Development (React, JavaScript, Tailwind CSS)
- Security & DevOps (Cybersecurity, OWASP, Authentication)

### 5. **Certifications**

Interactive gallery showcasing:

- Google Cybersecurity Professional Certificate
- ITI Full Stack .NET Development
- IEEE Beni Suef Membership

### 6. **Blog**

Placeholder section for technical articles with email subscription

### 7. **Contact**

- Contact form (frontend only - needs backend integration)
- Social links (GitHub, LinkedIn, Email)
- Location and availability info

## 🔧 Customization

### Update Personal Information

Edit the following files to customize content:

1. **Hero Component** (`src/components/Hero.js`)
   - Change name, title, description
   - Update CV download link

2. **About Component** (`src/components/About.js`)
   - Update personal background
   - Modify education details

3. **Experience Component** (`src/components/Experience.js`)
   - Update project descriptions
   - Modify GitHub links
   - Change technologies list

4. **Skills Component** (`src/components/Skills.js`)
   - Add/remove skill categories
   - Update skill names and levels

5. **Contact Component** (`src/components/Contact.js`)
   - Update email address
   - Change social media links
   - Add backend integration if needed

### Color Scheme

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  navy: {
    900: "#001F3F",      // Deep Navy Blue
    800: "#003d5c",
    700: "#005a7f",
  },
  luxury: {
    dark: "#0a0a0a",     // Pure Black
    light: "#F8F9FA",    // Off-white
    white: "#FFFFFF",    // Pure White
  },
}
```

## 🌐 Deployment on Vercel

### Method 1: Using Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### Method 2: Using GitHub Integration

1. **Push project to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ahmed-ragab-portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React and configure build settings
   - Click "Deploy"

3. **Your site is live!** 🎉

### Method 3: Using Vercel Web Interface

1. Go to [vercel.com/new](https://vercel.com/new)
2. Select "Continue with GitHub/GitLab/Bitbucket"
3. Authorize and select the repository
4. Click "Import"
5. Build settings will be auto-configured
6. Click "Deploy"

## 📝 Contact Form Backend Integration

The contact form is currently frontend-only. For production, integrate with a backend service:

### Option 1: Formspree

```javascript
// In Contact.js
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};
```

### Option 2: EmailJS

```javascript
import emailjs from "@emailjs/browser";

emailjs.init("YOUR_PUBLIC_KEY");

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send("service_id", "template_id", formData);
};
```

### Option 3: Custom Node.js Backend

Deploy a backend API and update the form submission endpoint.

## 🔐 Security Best Practices

- Keep dependencies updated: `npm audit fix`
- Use environment variables for sensitive data
- Validate form inputs on backend
- Implement rate limiting for contact form
- Use HTTPS for all communications

## 📊 Performance Optimization

- Tree-shaking builds with React production build
- Code splitting for faster initial load
- Image optimization recommended for profile photos
- CSS minification via Tailwind's production mode

## 🛠 Available Scripts

```bash
npm start       # Start development server
npm run build   # Create production build
npm test        # Run tests
npm run eject   # Eject from Create React App (not recommended)
```

## 📦 Dependencies

- **react**: ^18.2.0 - UI library
- **tailwindcss**: ^3.3.0 - CSS utility framework
- **lucide-react**: ^0.263.1 - Icon library
- **react-scripts**: 5.0.1 - Build tooling

## 🚀 Deployment Checklist

- [ ] Update all personal information
- [ ] Replace GitHub links with actual URLs
- [ ] Update email address in contact section
- [ ] Add profile image assets if needed
- [ ] Test responsive design on mobile
- [ ] Enable form backend integration
- [ ] Add custom domain (optional)
- [ ] Set up SSL certificate (automatic on Vercel)
- [ ] Monitor analytics and performance

## 📞 Support & Maintenance

- **Bug Reports**: Use GitHub Issues
- **Deployment Help**: Refer to [Vercel Docs](https://vercel.com/docs)
- **React Support**: Check [React Docs](https://react.dev)
- **Tailwind Help**: Visit [Tailwind Docs](https://tailwindcss.com)

## 📄 License

This portfolio template is open source and free to use. Customize and deploy with confidence!

## 🎓 Learning Resources

- [React Official Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Web Performance Best Practices](https://web.dev/performance/)

---

**Built with ❤️ for Ahmed Ragab - Full Stack .NET Developer & Cybersecurity Enthusiast**

Last Updated: March 2026 | Deployed on Vercel
