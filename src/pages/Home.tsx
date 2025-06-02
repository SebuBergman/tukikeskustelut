import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import heroImg from "@assets/hero.webp";
import "@styles/page_style.css";
import { Box } from "@mui/material";
import { Colors } from "@styles/Colors";

export default function Home() {
  return (
    <Box>
      <section className="hero-section">
        <img
          src={heroImg}
          alt="Tukikeskustelut - Lyhytterapia, Työnohjaus, Kriisityö, NUOTTI valmennus"
          className="hero-bg"
        />
        <Box className="hero-text">
          <Typography
            sx={{
              fontSize: "2.188rem",
              lineHeight: 1.2,
              fontWeight: 500,
              marginBottom: "0.5rem",
            }}
          >
            Tukikeskustelut
          </Typography>
          <Typography
            sx={{ fontSize: "1.375rem", lineHeight: 1.2, fontWeight: 500 }}
          >
            Lyhytterapia, Työnohjaus, Kriisityö
          </Typography>
          <Typography sx={{ fontSize: "1.375rem" }}>
            NUOTTI valmennus
          </Typography>
        </Box>
      </section>
      <Box
        style={{ maxWidth: 1000, margin: "2rem auto" }}
        sx={{ color: "primary.black" }}
      >
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h2" sx={{ color: Colors.black }}>
              Ratkaisukeskeinen lyhytterapia
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography
                variant="body1"
                sx={{ color: Colors.black, marginBottom: "1rem" }}
              >
                Ratkaisukeskeisen lyhytterapian lähestymistapa on
                asiakaslähtöinen, tavoitteellinen, tulevaisuus suuntautunut,
                vuorovaikutuksellinen ja voimavarakeskeinen. Siinä etsitään
                ratkaisuja elämän pulmatilanteisiin luottamuksellisessa
                yhteistyösuhteessa asiakkaan ja terapeutin välillä. Terapiassa
                muodostetaan mielikuva siitä, miten asiat ovat kun ne ovat
                hyvin. Terapiassa suunnitellaan tarvittavia askelia ja asiakas
                ottaa niitä kohti, suunnaten tavoitteitaan kohti. Näin käytetään
                hyväksi tulevaisuuden vetovoimaa. Asiakkaiden omilla toiveilla,
                ideoilla ja tavoitteilla on suuri merkitys terapiassa.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: Colors.black, marginBottom: "1rem" }}
              >
                Ratkaisukeskeisessä lyhytterapia työssäni keskityn tukemaan
                asiakasta jatkamaan elämäänsä eteenpäin. Ongelmia pyritään
                ratkomaan yhteistyössä asiakkaan kanssa myönteisen tulevaisuuden
                visioinnin kautta ja tavoitteiden asettamisella.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: Colors.black, marginBottom: "1rem" }}
              >
                Ratkaisukeskeinen lyhytterapia sopii kaiken ikäisille ja se voi
                olla lyhyt- tai pitkäkestoista. Ratkaisukeskeinen lyhytterapia
                on matalankynnyksen mielenterveyttä tukeva palvelu, jonka
                lähtökohtana on aina asiakkaan tarpeista lähtevä toiminta.
              </Typography>
              <Typography variant="body1" sx={{ color: Colors.black }}>
                Terapiaan pääsee ilman lähetettä, eikä aikaisempia psykiatrisia
                tutkimuksia tarvita. Lyhytterapia ei ole psykoterapiaa, joten se
                ei ole KELA:n tukemaa. Tarpeen mukaan asiakas ohjataan
                psykoterapiaan, mikäli lyhytterapeuttinen työote ei ole
                riittävää. Usein jo lyhytterapia riittää hoitomuodoksi
                asiakkaalle.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h2" sx={{ color: Colors.black }}>
              Työnohjaus
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography
                variant="body1"
                sx={{ color: Colors.black, marginBottom: "1rem" }}
              >
                Työnohjaus on oman työn tutkimista ja kehittämistä sekä
                arviointia. Se on myös työhön, työyhteisöön ja omaan työrooliin
                liittyvien kysymysten ja kokemusten ja tunteiden yhdessä
                tulkitsemista ja jäsentämistä. Työnohjauksen avulla vahvistetaan
                ammattilaisuutta haluttuun suuntaan sekä myös työnhallinnan
                tunnetta.
              </Typography>
              <Typography variant="body1" sx={{ color: Colors.black }}>
                Työnohjausta olen toteuttanut yksilö- ja ryhmätasolla opetus- ja
                hoitolalla työskenteleville, myös terapeuteille.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h2" sx={{ color: Colors.black }}>
              Kriisityö
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography
                variant="body1"
                sx={{ color: Colors.black, marginBottom: "1rem" }}
              >
                Kriisi voi olla seurausta erilaisista elämänvaiheista tai
                tapahtumista. Kriisin taustalla voi olla äkillinen muutos tai
                järkyttävä tapahtuma – se voi olla myös seurausta useista
                samanaikaisista kuormittavista asioista ja erilaisista elämän
                tilanteista.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: Colors.black, marginBottom: "1rem" }}
              >
                Kriisityön tarkoitus on käydä traumaattiset tapahtumat läpi
                oikealla tavalla, jotta ne eivät vaikuta ja hankaloita ihmisen
                hyvinvoinnin ja elämänhallinnan tunteen palautumista. Henkisen
                tuen tarkoituksena on palauttaa kriisin kohdanneelle ihmiselle
                turvallisuuden tunne.
              </Typography>
              <Typography variant="body1" sx={{ color: Colors.black }}>
                Menetyksen kohdatessa surupolkua voi kulkea myös kriisityön
                ammattilaisen ja terapeutin kanssa. Yksin ei tarvitse selvitä.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
