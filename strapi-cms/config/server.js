module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('PUBLIC_URL', 'https://jamstack-app.netlify.app'),
  port: env.int('PORT', 1337),
});
