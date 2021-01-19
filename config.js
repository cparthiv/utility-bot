const config = {
  "token":  "Nzk3ODc2NTY2MjE4NTA2MjY1.X_s2dQ.8knl8LOT-_onoVMOqiYdLhLNfn4",
  "prefix": "?",
  "admins": ["621479662538719232"],
  "dbUrl": "mongodb://auth-user:ok@cluster0-shard-00-00.jaus9.mongodb.net:27017,cluster0-shard-00-01.jaus9.mongodb.net:27017,cluster0-shard-00-02.jaus9.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-1pk95h-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
  "patreons": ["621479662538719232"],
  "supporters": ["621479662538719232"],

  "dashboard" : {
    "oauthSecret": "v9Kpqs2wPFILY5kbK6SWnAej-M-EqZ53",
    "callbackURL": "http://localhost:8000/callback", // add this to callback urls in your application's OAuth tab
    "sessionSecret": "647581928312$@%#%#fcdshfuiwedfkh",
    "domain": "localhost",
    "port": 8000
  },

  /* Channels */
  "appealEmbedChannel": "788927382378512433",
  "banListLogChannel": "788927382378512433",
  "reportRejectedEmbedChannel": "788927382378512433",
  "reportApprovedEmbedChannel": "788927382378512433",
  "newReportEmbed": "788927382378512433",
  "guildLogChannel": "788927382378512433",
  "commandLogChannel": "788927382378512433",
  "errorChannel": "788927382378512433",

  permLevels: [
    { level: 0,
      name: "User",
      check: () => true
    },

    { level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("MANAGE_GUILD") ||  message.member.roles.get(message.guild.settings.modRole) !== undefined) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },

    { level: 3,
      name: "Administrator",
      check: (message) => {
        try {
          if (message.member.hasPermission("ADMINISTRATOR") ||  message.member.roles.get(message.guild.settings.adminRole) !== undefined) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
          return false;
        }
      }
    },

    { level: 4,
      name: "Server Owner",
      check: (message) => {
        if (message.channel.type === "text" && message.guild.ownerID) {
          if (message.guild.ownerID === message.author.id) return true;
        } else {
          return false;
        }
      }
    },

    { level: 9,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },

    { level: 10,
      name: "Bot Owner",
      check: (message) => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
