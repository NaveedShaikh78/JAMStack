module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: env('PUBLIC_URL', 'https://jamstack-nu.vercel.app'),
  port: env.int('PORT', 1337),
});
