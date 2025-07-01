
export const ActionOnForm = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // ✅ Simulate 5-second delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.log("Form Data:", data);
  return { success: true };
};


