module.exports = {
  reactStrictMode: true,
  images : {
    domains : [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "scontent.fias1-1.fna.fbcdn.net"
    ],
  },
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};
