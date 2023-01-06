export const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
        required: "Password is required",
        minLength: {
            value: 4,
            message: "Password must have at least 4 characters"
        }
    }
};