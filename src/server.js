const { PORT } = require("./common/config");
const app = require("./app");
const logger = require("./common/logger");

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

process.on("uncaughtException", err => {
  const exit = process.exit;
  logger.error(`Uncaught exception: ${err.message}`);
  exit(1);
});

process.on("unhandledRejection", reason => {
  const exit = process.exit;
  logger.error(`Unhandled rejection: ${reason.message}`);
  exit(1);
});
