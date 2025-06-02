import MinustaImg from "@assets/minusta.jpg";
import { Box, Typography } from "@mui/material";
import { Colors } from "@styles/Colors";

import "@styles/style.css";

export default function Minusta() {
  return (
    <Box className="minusta-content">
      <Box
        sx={{ display: "flex", flex: 1, flexDirection: "column", gap: "1rem" }}
      >
        <Typography variant="h1" sx={{ color: Colors.primary }}>
          Aila Aikos
        </Typography>
        <Typography variant="body1">
          Olen pitkänlinjan terveydenhuollon ammattilainen, joka tehnyt myös
          työterveydessä esimiestyötä ja kehittämistä vuosina 2010–2019.
        </Typography>
        <ul>
          <li>Ratkaisukeskeinen lyhytterapeutti, Siria 2021</li>
          <li>Työnohjaaja HAMK 2003, STOry</li>
          <li>JET Oppisopimus 2012</li>
          <li>Debriefing ja Defusing kriisikoulutukset Jyväskylä 2006</li>
          <li>Työterveyshoitaja Työterveyslaitos 2000</li>
          <li>Terveydenhoitaja / sairaanhoitaja Porvoo 1992</li>
        </ul>
        <Typography variant="body1">
          Työtäni ohjaa vahva halu auttaa ihmisiä selviytymään erilaisista
          elämän kuormitusvaiheista kulkemalla kannatellen heidän rinnalla
          samalla vahvistaen jokaiseen omia voimaa ja kykyä auttaa itseään.
          Ratkaisukeskeinen viitekehys on kaikessa työssäni vahvasti läsnä,
          kuljettamassa muutosprosesseja eteenpäin.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flex: 1 }}>
        <img src={MinustaImg} alt="Aila Aikos" className="minusta-img" />
      </Box>
    </Box>
  );
}
