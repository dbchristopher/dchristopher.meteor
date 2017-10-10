module.exports = {
  servers: {
    one: {
      host: '34.230.85.152',
      username: 'ubuntu',
      pem: '../dchristopherme.pem',
      // pem:
      // password:
      // or leave blank for authenticate from ssh-agent
    },
  },
  meteor: {
    name: 'dchristopher.me',
    path: '../',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://www.dchristopher.me',
      // MONGO_URL: <DB_URL>
    },
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60,
  },
  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};