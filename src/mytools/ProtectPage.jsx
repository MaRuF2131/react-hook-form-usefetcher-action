export function verifyUserAgent(request) {
  /* const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
   */
  const userAgent = navigator.userAgent || "";

  const disallowedAgents = [
    "curl", "wget", "postman", "python", "httpie", "axios", "undici",
    "node-fetch", "jsdom", "react-native", "go-http-client",
    "php-curl", "java", "dotnet", "selenium", "headless", "phantomjs"
  ];

  console.log("User-Agent:", userAgent);

  const isBot = disallowedAgents.some(agent => userAgent.includes(agent));

  if (isBot) {
    console.warn("❌ Blocked User-Agent:", userAgent);
    throw new Response("Access Denied: Non-browser client", { status: 403 });
  }
}
