module.exports = {
    apps: [
        {
            name: "express-api",

            script: "./server.js",

            instances: "max",

            exec_mode: "cluster",

            watch: false,

            autorestart: true,

            max_memory_restart: "500M",

            env: {
                NODE_ENV: "production",
                PORT: 3000
            }
        }
    ]
};