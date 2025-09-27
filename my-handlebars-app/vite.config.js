import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const cardData = [
  // ... (Keep the data for the Home page cards if needed)
];

export default defineConfig({
  plugins: [
    handlebars({
      context: {
        siteTitle: 'Bigspring',
        cards: cardData,
      },
      partialDirectory: resolve(__dirname, 'partials'),
      helpers: {
        isEven: (index) => (index % 2) === 0, 
      }
    }),
  ],
  
  // 💥 MPA CONFIGURATION: Tell Vite to build multiple pages 💥
  build: {
    rollupOptions: {
      input: {
        // Defines the entry point for the Home page
        main: resolve(__dirname, 'index.html'), 
        
        // Defines the entry point for the new About page
        about: resolve(__dirname, 'About.html'), 
         contact: resolve(__dirname, 'contact.html'), 
         price: resolve(__dirname, 'Price.html'),
        // Add other pages here:
        // contact: resolve(__dirname, 'contact.html'),
        // price: resolve(__dirname, 'Price.html'),
      },
    },
  },
});