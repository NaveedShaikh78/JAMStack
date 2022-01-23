module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f0b5cc0d074442093200583cf3a0491'),
  },
});
