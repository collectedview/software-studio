/* eslint-disable no-undef */

module.exports = {
  async redirects() {
    return [
      {
        source: "/404/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/404",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
