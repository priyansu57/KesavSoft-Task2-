
# BigSpring(Task 2)

This project is a Multi-Page Application (MPA) scaffolded using Vite and the Handlebars templating engine for modular HTML and static asset bundling.

⚙️ Core Technologies
Component	Choice	Rationale
Templating Engine	Handlebars (via vite-plugin-handlebars)	Chosen for its simplicity, speed, and ability to create reusable HTML components (partials) and inject data before the page is served, enabling a modern, component-like workflow without a full JavaScript framework.
Bundler / Task Runner	Vite	Selected for its fast development server based on native ES Modules, providing near-instantaneous Hot Module Replacement (HMR) and an optimized production build powered by Rollup.

Export to Sheets
🚀 Getting Started
Follow these steps to set up the project locally.

1. Installation
Dependencies are installed using npm.

Bash

# Install all required Node.js packages (Vite, Handlebars, and plugins)
npm install
2. Project Structure
Your project uses a modular structure for better organization, as reflected in the vite.config.js file:

Path	Purpose
*.html  =>	Main HTML page entry points (index.html, About.html, contact.html, etc.).
partials/*.hbs =>	Reusable HTML snippets (e.g., navigation, footer, head).
vite.config.js => 	Configures the Handlebars plugin, defines global data context, and maps all MPA entry points.
main.js => 	The main JavaScript entry point for importing all client-side logic, including local CSS files (/public/css/).

Export to Sheets
3. Running the Project
Use the standard Vite commands defined in package.json.

Development Mode (Local Server)
Run the project in development mode with HMR. Vite automatically detects all pages configured in vite.config.js.

Bash

npm run dev
Access your pages via the browser (e.g., http://localhost:5173/index.html or directly if your root is configured).

Production Build
Run the build command to compile and optimize all HTML, CSS, and JavaScript assets into the dist/ directory.

Bash

npm run build


