module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects",
        permanent: false, // set true if this is a permanent redirect (308)
      },
    ];
  },
};
