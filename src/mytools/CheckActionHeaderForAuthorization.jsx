
const CheckActionHeaderForAuthorization = (token) => {
  console.log("Checking authorization token:", token);
  
  if (token !== import.meta.env.VITE_ACCESS_TOKEN) {
    console.warn("❌ Unauthorized request to /save header");
    throw new Response("Unauthorized", { status: 403 });
  }
}

export default CheckActionHeaderForAuthorization
