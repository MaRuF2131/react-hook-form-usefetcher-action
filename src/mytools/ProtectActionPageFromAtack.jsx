export function verifyBrowserRequest(request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const userAgent = request.headers.get("user-agent");

  console.log("Origin:", origin);
  console.log("Referer:", referer);
  console.log("User-Agent:", userAgent);

  const allowedOrigin = "http://localhost:3000";

  // If all three are null — treat as suspicious
  if (!origin && !referer && !userAgent) {
    throw new Response("❌ Missing headers, possibly non-browser", { status: 403 });
  }

  const badAgents = ["curl", "wget", "python-requests", "Postman", "HTTPie", "undici"];

  const isBot =
    !userAgent ||
    badAgents.some((agent) => userAgent.toLowerCase().includes(agent));

  const isBadReferer =
    !referer || !referer.startsWith(allowedOrigin) || badAgents.some((r) => referer.toLowerCase().includes(r));

  const isBadOrigin = origin && origin !== allowedOrigin;

  if (isBot || isBadOrigin || isBadReferer) {
    throw new Response("❌ Access Denied: Non-browser or bot", { status: 403 });
  }
}
