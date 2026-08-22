// Vercel Web Analytics Integration
// This script initializes Vercel Analytics for tracking page views

import { inject } from './analytics.mjs';

// Initialize Vercel Analytics
inject({
  mode: 'auto', // Automatically detect development vs production
  debug: true   // Enable debug logging in development
});
