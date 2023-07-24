export default {
  windowMs: 60 * 60 * 1000,
  max: 10,
  handler: function (req, res) {
    res.status(429).json({
      error: true,
      message: 'Rate limit exceeded. Please try again later.',
    });
  },
  standardHeaders: true,
  legacyHeaders: false
};
