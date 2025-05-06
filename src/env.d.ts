// src/env.d.ts

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REACT_APP_API_URL: string;
        REACT_APP_SECRET_KEY: string;
      }
    }
  }
  
  export {}; // Ensures it's treated as a module
  