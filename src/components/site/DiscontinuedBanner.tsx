import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

//================================================

export const DiscontinuedBanner: React.FC = () => (
  <Alert
    id="discontinued-banner"
    severity="warning"
    variant="filled"
    square
    sx={{ borderRadius: 0, justifyContent: "center" }}
  >
    <Container disableGutters>
      <AlertTitle>This project is discontinued</AlertTitle>
      The auto-generated fusion sprites were loaded from{" "}
      <Link
        href="https://github.com/Aegide/autogen-fusion-sprites"
        color="inherit"
        underline="always"
        target="_blank"
        rel="noopener"
      >
        Aegide/autogen-fusion-sprites
      </Link>
      , which has been taken down, so most fusions no longer have a sprite to
      show. See the{" "}
      <Link
        href="https://github.com/StuxieDev/pokefusion#readme"
        color="inherit"
        underline="always"
        target="_blank"
        rel="noopener"
      >
        README
      </Link>{" "}
      for details.
    </Container>
  </Alert>
);
