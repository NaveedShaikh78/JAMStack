module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('PUBLIC_URL', 'https://api.example.com'),
  port: env.int('PORT', 1337),
});
