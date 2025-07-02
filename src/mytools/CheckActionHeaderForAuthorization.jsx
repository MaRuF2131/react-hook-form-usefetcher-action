
const CheckActionHeaderForAuthorization = () => {
  const authHeader = request.headers.get("authorization");
  const expected = `Bearer ${process.env.VITE_SECRET_TOKEN}`;
  if (!authHeader || authHeader !== expected) {
    console.warn("❌ Unauthorized request to /save");
    throw new Response("Unauthorized", { status: 401 });
  }
}

export default CheckActionHeaderForAuthorization
