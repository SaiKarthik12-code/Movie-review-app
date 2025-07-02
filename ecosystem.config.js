module.exports = {
  apps : [{
    name   : "MovieVerse-Frontend",
    script : "npm",
    args   : "start",
    cwd    : "./", // Assumes you run pm2 from the project root
    env_production: {
       NODE_ENV: "production",
       PORT: 3000
    }
  }, {
    name   : "MovieVerse-AI-Backend",
    script : "npm",
    args   : "run genkit:start", // The script we added earlier
    cwd    : "./",
    env_production: {
       NODE_ENV: "production",
       // Genkit typically runs on port 4000 for the UI
    }
  }]
}