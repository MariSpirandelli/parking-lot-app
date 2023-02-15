const api = {
  url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
};

const environment = process.env.NODE_ENV;

export default {
  api,
  environment,
};
