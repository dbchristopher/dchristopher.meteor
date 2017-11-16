module.exports = {
  servers: {
    one: {
      host: '54.236.19.23',
      username: 'ubuntu',
      pem: '../newdchristopher.pem',
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
    dockerImage: 'abernix/meteord:node-8.4.0-base',
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