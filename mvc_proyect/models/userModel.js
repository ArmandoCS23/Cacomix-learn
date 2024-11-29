import { db } from "../firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

class UserModel {
  static async registerUser(nombre, email, password) {
    try {
      const userRef = collection(db, "users");
      await addDoc(userRef, { nombre, email, password });
      return "Usuario registrado exitosamente.";
    } catch (error) {
      throw new Error("Error al registrar el usuario: " + error.message);
    }
  }
}

export default UserModel;
