# HR Performance Dashboard

A comprehensive Human Resource Management System built with React and TypeScript, featuring a modern UI and extensive employee management capabilities.

## 🌐 Live Demo

Check out the live application: [HR Performance Dashboard](https://hr-dashboard-i760u78s7-ashirvaddubeys-projects.vercel.app)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg?style=flat-square&logo=vercel)](https://hr-dashboard-i760u78s7-ashirvaddubeys-projects.vercel.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-green.svg?style=flat-square&logo=github)](https://github.com/Ashirvaddubey/hr_dashboard)

## 🚀 Features

- **HR Management**
  - View all employees in a responsive grid layout
  - Add new employees with detailed information
  - Search and filter employees by various criteria
  - Bookmark important employee profiles
  - View detailed employee information
  - Track employee performance and ratings

- **Analytics Dashboard**
  - Track average employee ratings
  - Monitor department-wise statistics
  - Real-time updates on employee data changes
  - Performance metrics visualization

- **Modern UI/UX**
  - Responsive design for all screen sizes
  - Dark/Light theme support
  - Beautiful animations and transitions
  - Intuitive navigation
  - Toast notifications for user feedback

 
- **Screenshot**
- *login*
- ![{8DA85D16-AA35-44EC-990C-BE74F035E1EA}](https://github.com/user-attachments/assets/d7491525-a9df-4490-9884-43dcfcfe8442)
- *HR Dashboard*
- ![{7AE56A5B-6E15-4908-BB54-517E3E7DB540}](https://github.com/user-attachments/assets/007ab28b-12e5-4f6f-8763-9cd36e52babb)
- *Bookmark*
- ![{54C48F84-6E2B-4FE5-B261-56012D64D6EC}](https://github.com/user-attachments/assets/7285467d-7a8b-48c6-8648-035085dacdfa)
- *Analytics*
- ![{A1CE16F1-183C-43B2-BE6B-8D7058DF2481}](https://github.com/user-attachments/assets/037ba732-bf61-45c7-8a72-ed47c70015f2)
- *Dark mode*
- ![{331BED4F-7004-44E9-BA9F-6542A08FD4D7}](https://github.com/user-attachments/assets/5c8bbf4c-e667-4061-9d1b-b29b46d64247)
- *Pagination,sorting,filtering*
- ![{91F0C48E-F9E0-4EE6-B138-B21B3A10EB90}](https://github.com/user-attachments/assets/3f92950c-6b94-42b8-908c-88cdf69d02b0)
- *Emplyees detail for HR where Overview,Projects of employee and feedback screenshot*
- ![{5A78160E-C57B-400F-AD55-6CB7B5B32E2A}](https://github.com/user-attachments/assets/d6c03f82-5cfc-4f86-8879-cd156d8f0d71)
- ![{E249D2CD-E7DE-4F21-8E10-1BEC3ACE15EA}](https://github.com/user-attachments/assets/e086701f-c787-430c-827f-84054c5272a6)
- ![{D8D1B6A7-103E-4596-B61B-D4BEB576BC24}](https://github.com/user-attachments/assets/6f8f9ea6-3c3e-466e-8603-eaca95762be6)


## 🛠️ Technology Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state
- **Build Tool**: Vite
- **API Integration**: DummyJSON API
- **Deployment**: Vercel
- **Container Support**: Docker with Nginx

## 📋 Prerequisites

- Node.js 18+ and npm
- Docker (optional, for containerization)

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Ashirvaddubey/hr_dashboard.git
cd hr-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5173

### Docker Development

1. Build the Docker image:
```bash
docker build -t hr-dashboard .
```

2. Run the container:
```bash
docker run -d -p 8080:80 hr-dashboard
```

Visit http://localhost:8080 to access the application.

For development with hot-reload:
```bash
docker-compose up
```

## 🏗️ Project Structure

```
hr-dashboard/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── employee/      # Employee-related components
│   │   ├── filters/       # Filter components
│   │   └── ui/           # Base UI components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── context/          # React context providers
│   └── App.tsx          # Main application component
├── public/              # Static assets
├── docker/             # Docker configuration files
└── package.json        # Project dependencies
```

## 🌟 Key Features

### HR Management
- **Employee Directory**: Grid layout with employee cards
- **Employee Management**: 
  - Add/Edit employee information
  - Track employee performance
  - Manage departments and roles
- **Search & Filter**: 
  - Search by name, email, or department
  - Filter by department, role, or status
  - Sort by various criteria
- **Performance Tracking**: Monitor employee ratings and metrics

### Theme Support
- Light/Dark mode toggle
- System preference detection
- Persistent theme selection

## 🚀 Deployment

The application is deployed on Vercel and can be accessed at:
[https://hr-dashboard-i760u78s7-ashirvaddubeys-projects.vercel.app](https://hr-dashboard-i760u78s7-ashirvaddubeys-projects.vercel.app)

### Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

## 📈 Performance Optimizations

- React Query for efficient data fetching
- Image optimization
- Code splitting
- Lazy loading of components
- Nginx caching configuration
- Gzip compression

## 👥 Author

Ashirvad Dubey

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

For any questions or issues, please open an issue in the repository.
