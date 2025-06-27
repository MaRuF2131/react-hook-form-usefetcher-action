

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

export const DangerousContentCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const dangerousPatterns = [
          /[`'"<>]/,          // backtick
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

export const NumberValidationCheck={
  validate:async(v)=>{
    return await new Promise(
      (resolve)=>{
        setTimeout(()=>{
            const num = parseFloat(v);

              if (isNaN(num)) {
                return resolve("Must be a valid number");
              }

              if (num < 1) {
                return resolve("Must be at least 1");
              }

              if (num > 100) {
                return resolve("Cannot exceed 100");
              }

              if (!Number.isInteger(num)) {
                return resolve("Only whole numbers allowed");
              }

              resolve(true); //  Passed all checks
        },500)
      }
    )
  }
}

// return multiple error together 
export const PasswordValidationCheck={
   validate:{
      islength:async(v)=>{
        return await Promise((resolve)=>setTimeout(()=>{
            if(v.lenght<6){
              resolve("At least 6 character need");
            }else{
              resolve(true);
            }
        },500))
      },
      isuppercase:async(v)=>{
        return await new Promise((resolve)=>setTimeout(()=>{
            if(!/[A-Z]/.test(v)){
              resolve("At least one uppercase letter need");
            }else{
              resolve(true);
            }
        },500))
      },
      isspacial:async(v)=>{
        return await new Promise((resolve)=>setTimeout(()=>{
            if(!/[!@#$%^&*(),.?:{}|]/.test(v)){
              resolve("At least one special character need");
            }else{
              resolve(true);
            }
        },500))
      },
      isdigit:async(v)=>{
        return await new Promise((resolve)=>setTimeout(()=>{
            if(!/[\d]/.test(v)){
              resolve("At least one digit need");
            }else{
              resolve(true);
            }
        },500))
      },
      isdangerous:async(v)=>{
        return await new Promise((resolve)=>setTimeout(()=>{
            if(DangerousContentCheck.validate(v) !== true){
              resolve("Dangerous content detected");
            }else{
              resolve(true);
            }
        },500))
      }
   }
}

export const EmailValidationCheck = {
  validate: async (v) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(v)|| DangerousContentCheck.validate(v) !== true) {
          return resolve("Invalid email format");
        }
        resolve(true);
      }, 300)
    );
  },
};
