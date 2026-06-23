# saidtex Front-End

This is the Front-End application for **saidtex**, a platform to manage partners and users.  
It is built with **Next.js** and uses **TailwindCSS** and several UI libraries to deliver a modern and responsive user interface.

---

## Features

- Responsive UI built with **Next.js** + **TailwindCSS**
- Component-based architecture (Hero, Nav, Footer, About, Partners, etc.)
- Smooth scroll and section navigation
- Reusable navigation for Buy & Sell pages
- Email integration using `emailjs`

---

## Project Structure

```
Saidtex-Front-End/
├── app/
│   ├── buyandsell/
│   │   └── page.jsx              
│   │
│   ├── components/             
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   ├── footer.jsx
│   │   ├── hero.jsx
│   │   ├── nav.jsx
│   │   ├── partenaires.jsx
│   │   ├── sellNav.jsx
│   │   └── whyus.jsx
│   │
│   ├── globals.css               
│   ├── layout.js                 
│   └── page.js                  
│
├── public/                      
│
├── package.json    
├── package-lock.json
├── LICENSE
├── SECURITY.md             
├── jsconfig.json                 
├── next.config.mjs              
└── .gitignore
```

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AymaneMehdi/Saidtex-Front-End.git
   cd Saidtex-Front-End
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory:

   ```env
   # EmailJS Configuration 
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id 
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id 
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key 

   # API Configuration 
   NEXT_PUBLIC_API_URL=http://localhost:5000/api/partenaires
   ```

---

## Running the Project

```bash
npm run dev
```

Runs the project on **http://localhost:3000**

---

## Tech Stack

| Tool / Library           | Description                              |
|--------------------------|-------------------------------------------|
| **Next.js**              | React framework for building the app     |
| **React**                | Base library for UI development          |
| **TailwindCSS**          | Utility-first CSS framework              |
| **Bootstrap**            | CSS framework (optional)                 |
| **EmailJS**              | Client-side email sending                |

---

## Scripts

| Command           | Description                     |
|------------------|---------------------------------|
| `npm run dev`     | Run development server          |
| `npm run build`   | Build for production            |
| `npm start`       | Start production server         |

---

## Deployment

The easiest way to deploy your app is using [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Security

Please review our [Security Policy](SECURITY.md) for information about reporting vulnerabilities.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Copyright © Aymane Mehdi**
