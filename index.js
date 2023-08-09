/**
 * This is a quick web server to deploy the new FE to K8 and to allow history modes.
 * Please DO NOT use this in production. Please research on what you actually need.
 */

import express from "express";
import { join } from "path";
import helmet from "helmet";
import history from "connect-history-api-fallback";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3000;

const app = express();

app.use(history());
app.use(
  helmet({
    // Had to temp disable this as the FE throws a Content Security Policy error.
    // This should be looked at and NEVER deployed to prod.
    // This can open up to cross-site scripting attacks.
    // Seriously, DO NOT USE THIS IN PROD.
    // More info https://helmetjs.github.io/#reference
    contentSecurityPolicy: false,
  })
);
app.use(express.static(join(__dirname, "dist")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "./dist/index.html"));
});

app.listen(port, () => {
  console.log(`Frontend running on port ${port}`);
});
