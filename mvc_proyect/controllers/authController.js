import UserModel from "../models/userModel.js";

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nombre = e.target.nombre.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      try {
        const message = await UserModel.registerUser(nombre, email, password);
        alert(message);
        e.target.reset();
      } catch (error) {
        alert(error.message);
      }
    });
  }
});
