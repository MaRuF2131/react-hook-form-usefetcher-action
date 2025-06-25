

export const StringValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const dangerousPatterns = [
          /[`]/,          // backtick
          /<script>/i,    // script tags
          /<\/?\w+>/,     // any HTML tag
          /on\w+=/,       // inline JS events like onclick=
        ];

        for (let pattern of dangerousPatterns) {
          if (pattern.test(v)) {
            return resolve("Invalid or dangerous characters detected");
          }
        }

        resolve(true); // passed all checks
      }, 300)
    );
  },
};
