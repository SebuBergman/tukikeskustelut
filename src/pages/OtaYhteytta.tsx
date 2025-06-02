import { Box, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";
import { Colors } from "@styles/Colors";

import "@styles/style.css";

export default function OtaYhteytta() {
  return (
    <Box className="ta-yhteytta-content">
      <Box>
        <Box>
          <Typography variant="h1" sx={{ color: Colors.primary }}>
            Yhteystiedot
          </Typography>
          <Typography variant="h5">
            Tukikeskustelut – Lyhytterapia, Työnohjaus ja Kriisityö
          </Typography>
          <Typography variant="body1">
            <b>NUOTTI valmennus</b> kts Kelan sivut
          </Typography>
          <Typography variant="body1">
            Sähköposti: tukikeskustelut@gmail.com
          </Typography>
          <Typography variant="body1">
            Puhelin: 044 9788 562, jos en voi vastata niin laita ystävällisesti
            tekstiviesti tai ole yhteydessä sähköpostilla tai oheisella
            lomakkeella
          </Typography>
        </Box>
        <ContactForm />
      </Box>
    </Box>
  );
}
