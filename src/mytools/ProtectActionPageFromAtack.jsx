// src/utils/verifyBrowserRequest.js
export function verifyBrowserRequest(request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const userAgent = request.headers.get("user-agent");

  const allowedOrigin = "http://localhost:3000"; // Replace with your actual domain

  if (
    !userAgent || 
    userAgent.includes("curl") || 
    userAgent.includes("wget") ||
    userAgent.includes("python-requests") ||
    userAgent.includes("Postman") ||
    userAgent.includes("HTTPie") ||
    userAgent.includes("undici") ||
    origin !== allowedOrigin ||
    (referer && !referer.startsWith(allowedOrigin))
    || !referer ||
    referer.includes("curl") ||
    referer.includes("wget") ||
    referer.includes("python-requests") ||
    referer.includes("Postman") ||
    referer.includes("HTTPie") ||
    referer.includes("undici")
  ) {
    throw new Response("❌ Access Denied: Only browser requests allowed", { status: 403 });
  }
}
