import Alert from "@mui/material/Alert";

//================================================

// Set by dev-server.js for local runs; never set in production builds.
const DEV_MODE = import.meta.env.POKEFUSION_UI_DEV_MODE === "true";

export const DevBanner: React.FC = () =>
  DEV_MODE ? (
    <Alert
      id="dev-banner"
      severity="info"
      square
      sx={{ borderRadius: 0, justifyContent: "center", py: 0 }}
    >
      Local development build: <code>POKEFUSION_UI_DEV_MODE</code> is forced on
      by dev-server.js. Run with <code>--no-dev-mode</code> to test production
      behaviour.
    </Alert>
  ) : null;
