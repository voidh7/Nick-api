/*
nick api by void 2025

essa api serve para criar nick names estilizados
*/

import express from "express";
const app = express();
const PORT = 4000;

app.post("/createNick/:nickname", (req, res) => {
  const nick = req.params.nickname;

  const nicks = {
    nivkvoid: `🌙〬ꩌ۪٬ླྀ ᭥ꩌ゚໋${nick}`,
    japanick: `⟫ ⛩️| ${nick}`,
    fnafnick: `🍕 ${nick} 🐻🐰🐥`,
    startnick: `⋆⁺₊⋆ ${nick}⋆⁺₊⋆`,
    rainick: `꧁♡ ${nick}♡꧂ 頹 ✞ᵗˢᵗ⋆⁰¹𓇟`,
    axonick: `🥂⋆.ೃ ${nick}🍾࿔*:･`
  };

  res.json(nicks);
});

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});
