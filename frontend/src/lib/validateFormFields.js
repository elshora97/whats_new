import toast from "react-hot-toast";

export const validateFields = (formData, formName = "") => {
  let errors = [];
  if (!formData.email.trim()) {
    errors.push("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(formData.email))
    errors.push("Invalid email format");

  if (!formData.password) {
    errors.push("Password is required");
  } else if (formData.password.length < 6)
    errors.push("Password must be at least 6 characters");

  if (formName == "signup") {
    if (!formData.fullName.trim()) errors.push("Full name is required");
  }

  errors.map((item) => {
    toast.error(item);
  });
  return errors.length === 0;
};
