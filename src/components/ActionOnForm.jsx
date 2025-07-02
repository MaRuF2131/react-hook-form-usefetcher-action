import CheckActionHeaderForAuthorization from "../mytools/CheckActionHeaderForAuthorization";
import { verifyBrowserRequest } from "../mytools/ProtectActionPageFromAtack";

export const ActionOnForm = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  CheckActionHeaderForAuthorization(formData.get("auth_token"));
  verifyBrowserRequest(request);

  // ✅ Simulate 5-second delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log("Form Data:", data);
  return { success: true };
};


