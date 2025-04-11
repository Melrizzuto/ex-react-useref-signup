import { useState, useMemo } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\\\",.<>?/`~";

function App() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spec, setSpec] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  const usernameIsValid = useMemo(() => {
    const charsIsValid = username
      .split("")
      .every(c => letters.includes(c.toLowerCase()) || numbers.includes(c));
    return charsIsValid && username.length >= 6;
  }, [username]);

  const passwordIsValid = useMemo(() => {
    const chars = password.split("");
    const pswValid =
      chars.some(c => letters.includes(c.toLowerCase())) &&
      chars.some(c => numbers.includes(c)) &&
      chars.some(c => symbols.includes(c)) &&
      password.trim().length >= 8;
    return pswValid;
  }, [password]);

  const descriptionIsValid = useMemo(() => {
    return description.length >= 100 && description.length <= 1000;
  }, [description]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !fullname.trim() ||
      !usernameIsValid ||
      !passwordIsValid ||
      !spec.trim() ||
      !experience.trim() ||
      !descriptionIsValid
    ) {
      alert("Per favore, compila correttamente tutti i campi.");
      return;
    }

    if (isNaN(experience) || experience <= 0) {
      alert("Inserisci un numero positivo per gli anni di esperienza.");
      return;
    }

    console.log("Dati inviati correttamente", {
      fullname,
      username,
      password,
      spec,
      experience,
      description,
    });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome completo:</label>
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div>
          <label>Username:</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p style={{ color: usernameIsValid ? "green" : "red" }}>
            {username.length > 0 &&
              (usernameIsValid
                ? "Username valido"
                : "Minimo 6 caratteri alfanumerici")}
          </p>
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: passwordIsValid ? "green" : "red" }}>
            {password.length > 0 &&
              (passwordIsValid
                ? "Password valida"
                : "Almeno 8 caratteri con lettere, numeri e simboli")}
          </p>
        </div>

        <label htmlFor="spec">Specializzazione
          <select
            id="spec"
            type="text"
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
          >
            <option value="Full-stack">Full-stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </label>
        <div>
          <label>Anni di esperienza:</label>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>

        <div>
          <label>Descrizione:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <p style={{ color: descriptionIsValid ? "green" : "red" }}>
            {description.length > 0 &&
              (descriptionIsValid
                ? "Descrizione valida"
                : "Deve contenere tra 100 e 1000 caratteri")}
          </p>
        </div>

        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default App;
