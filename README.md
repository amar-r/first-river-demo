# First River Farms HOA Website

A modern, responsive React website for the First River Farms Homeowners Association in Alexandria, Virginia. This website provides both public information about the community and secure access to HOA documents and information for residents.

## Features

### Public Features
- **Home Page**: Welcome section with community overview and next HOA meeting information
- **History**: Community history and development milestones
- **Our Community**: Amenities, events, and community values
- **Neighborhood Information**: Neighborhood watch program, local services, and community updates
- **Photo Gallery**: Community photos with filtering by category
- **Contact**: Contact information and contact form

### Protected Features (Resident Access)
- **Board of Directors**: Information about HOA board members
- **Meeting Minutes**: Recent board meeting summaries and decisions
- **HOA Documents**: Organized access to bylaws, rules, and financial documents

### Authentication System
- **Resident Login**: Secure access to protected content
- **Apply for Access**: Form for new residents to request login credentials
- **Admin Panel**: Basic admin interface for managing access requests (demo)

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom farm-themed colors
- **Routing**: React Router v6
- **SEO**: React Helmet Async
- **Animations**: Framer Motion (ready for implementation)
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd first-river-farms
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Demo Credentials

For testing the protected content:

- **Resident Access**: 
  - Username: `resident`
  - Password: `HOA2024!`

- **Admin Access**:
  - Username: `admin`
  - Password: `HOA2024!`

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   ├── hoa/            # HOA-specific components
│   ├── public/         # Public-facing components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── contexts/
│   └── AuthContext.tsx # Authentication context
├── data/
│   └── hoaData.ts      # Mock data and content
├── hooks/
│   └── useAuth.ts      # Authentication hook
├── pages/              # Page components
└── App.tsx             # Main application component
```

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:

- `farm-green`: Primary brand color (#346C3C)
- `farm-brown`: Secondary color (#4A4E57)
- `farm-cream`: Background color (#F6F6F6)

### Content
All content is stored in `src/data/hoaData.ts` and can be easily updated:

- Board member information
- Meeting details and minutes
- HOA documents
- Community events
- Contact information

### Styling
The website uses Tailwind CSS with custom utilities. Key classes:

- `section-padding`: Standard section padding
- `container-max`: Maximum container width
- `font-serif`: Serif font for headings

## Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to the `gh-pages` branch

## Features in Detail

### Next Meeting Component
The `NextMeeting` component automatically calculates the next HOA meeting date based on the schedule (fourth Monday of each month) and displays it prominently on the home page.

### Protected Routes
The `ProtectedRoute` component guards HOA content and redirects unauthenticated users to the login page. It also supports admin-only routes.

### Responsive Design
The website is fully responsive and optimized for mobile, tablet, and desktop devices.

### SEO Optimization
Each page includes proper meta tags and structured content for search engine optimization.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, contact the HOA board at firstriverfarmshoa@gmail.com

---

**Note**: This is a demo website with mock data. In production, you would want to:
- Connect to a real backend API
- Implement proper authentication with JWT tokens
- Add form handling for contact and application forms
- Set up email notifications
- Add real document storage and management
- Implement proper security measures
