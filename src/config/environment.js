const ENV = {
  development: {
    API_BASE_URL: 'https://dev.api.example.com',
    SENTRY_DSN: '',
    DEBUG_MODE: true,
    LOG_LEVEL: 'debug',
  },
  staging: {
    API_BASE_URL: 'https://staging.api.example.com',
    SENTRY_DSN: 'your-staging-dsn',
    DEBUG_MODE: true,
    LOG_LEVEL: 'warn',
  },
  production: {
    API_BASE_URL: 'https://api.example.com',
    SENTRY_DSN: 'your-production-dsn',
    DEBUG_MODE: false,
    LOG_LEVEL: 'error',
  },
};

const getEnvVars = (env = process.env.NODE_ENV) => {
  if (env === 'production') return ENV.production;
  if (env === 'staging') return ENV.staging;
  return ENV.development;
};

export default getEnvVars();