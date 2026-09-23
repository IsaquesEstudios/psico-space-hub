import { createServer } from "node:http";
import app from "./dist/server/index.mjs";

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";

const server = createServer(async (request, response) => {
  try {
    const origin = `http://${request.headers.host || `${host}:${port}`}`;
    const url = new URL(request.url || "/", origin);
    const method = request.method || "GET";
    const body = method === "GET" || method === "HEAD" ? undefined : request;
    const webRequest = new Request(url, {
      method,
      headers: request.headers,
      body,
      duplex: body ? "half" : undefined,
    });
    const webResponse = await app.fetch(webRequest, process.env, {});

    response.statusCode = webResponse.status;
    webResponse.headers.forEach((value, name) => response.setHeader(name, value));
    if (!webResponse.body) {
      response.end();
      return;
    }

    for await (const chunk of webResponse.body) response.write(chunk);
    response.end();
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`Clínica Evoluta disponível em http://${host}:${port}`);
});