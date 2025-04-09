import { useState } from "react";

function App() {

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spec, setSpec] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");

  // Funzione per la validazione del form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Controllo se tutti i campi sono compilati
    if (!fullname || !username || !password || !spec || !experience || !description) {
      alert("Per favore, compila tutti i campi.");
      return;
    }

    // Controllo se gli anni di esperienza sono un numero positivo
    if (isNaN(experience) || experience <= 0) {
      alert("Inserisci un numero positivo per gli anni di esperienza.");
      return;
    }

    // Se il form è valido, stampiamo i dati in console
    console.log({
      fullname,
      username,
      password,
      spec,
      experience,
      description
    });
  };


  return (
    <>
      <h1>Web Developer Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Nome completo"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <select
            name="Specializzazione"
            value={spec}
            onChange={(e) => setSpec(e.target.value)}
          >
            <option value="">Seleziona la specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="Anni di esperienza"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Breve descrizione sullo sviluppatore"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
