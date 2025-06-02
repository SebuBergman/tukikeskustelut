import HinnastoImg from "@assets/hinnasto.webp";
import { Box, Typography } from "@mui/material";
import { Colors } from "@styles/Colors";

import "@styles/style.css";

export default function Hinnasto() {
  return (
    <Box className="hinnasto-content">
      <Typography variant="h1" sx={{ color: Colors.primary }}>
        Hinnat ja laskutus
      </Typography>
      <ul>
        <li>
          <b>Ratkaisukeskeinen lyhytterapia</b> 45 min. 60€, 60 min. 90€, 90
          min. 110€
        </li>
        <li>
          <b>Työnohjaus yksilö</b> 45 min. 105€, 60 min. 148€, 90 min. 175€.
          Ryhmät pyydä tarjous.
        </li>
        <li>
          <b>Kriisityö</b> 45 min. 85€, 60 min. 120€, 90 min. 150€
        </li>
        <li>
          <b>Nuottivalmennus</b> 60 min. 0,00 € (KELA korvaa 16-29 vuotiaille)
          Ole minuun yhteydessä, jos tästä kiinnostuit.
        </li>
        <li>Kaikkiin lisätään alv 24%</li>
      </ul>
      <Typography variant="body1">
        Ajanvaraukset tulee perua 24 tuntia ennen ajankohtaa. Peruuttamattomista
        ajanvarauksista laskutan käynti maksun.
      </Typography>
      <Typography variant="body1">
        Laskutan käteisellä tai mukaan annettavalla laskulla.
      </Typography>
      <Typography variant="body1">
        Kaikki palveluni ovat myös tietoturvallisia ja luottamuksellisia, koska
        tapaamisista ei tehdä kirjauksia mihinkään sähköiseen järjestelmään.
      </Typography>
      <Box className="hinnasto-img-wrap">
        <img
          src={HinnastoImg}
          alt="Uusi tie odottaa sinua…"
          className="hinnasto-img"
        />
        <Box className="img-text">Uusi tie odottaa sinua…</Box>
      </Box>
    </Box>
  );
}
