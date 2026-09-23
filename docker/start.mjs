import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve } from "node:path";
import app from "../dist/server/index.mjs";

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";
const publicDir = resolve("dist/client");
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

const assets = {
  async fetch(assetRequest) {
    const pathname = decodeURIComponent(new URL(assetRequest.url).pathname);
    const filePath = resolve(publicDir, `.${pathname}`);
    if (!filePath.startsWith(`${publicDir}/`)) return new Response("Not found", { status: 404 });
    try {
      const file = await readFile(filePath);
      return new Response(file, {
        headers: { "content-type": contentTypes[extname(filePath)] || "application/octet-stream" },
      });
    } catch {
      return new Response("Not found", { status: 404 });
    }
  },
};

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
    const webResponse = await app.fetch(
      webRequest,
      { ...process.env, ASSETS: assets },
      { waitUntil: (promise) => void Promise.resolve(promise).catch(console.error) },
    );

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