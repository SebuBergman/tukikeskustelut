import { Box } from "@mui/material";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Box>
        <Box>tukikeskustelut@gmail.com</Box>
        <Box>Puh. 044 9788 562. y-tunnus: 2039080-0</Box>
        <Box>
          <a href="/evastekaytanto" className="footer-link">
            Evästekäytäntö
          </a>
        </Box>
      </Box>
      <Box className="footer-small">
        Design by{" "}
        <a
          href="https://bergmanwebworks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          BergmanWebWorks
        </a>
      </Box>
    </footer>
  );
}
