import { useCallback, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

import {
  LEGAL_DOCS,
  LEGAL_EMAIL,
  LEGAL_UPDATED,
  getLegalDoc,
} from "./legalDocs";

import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import DeleteForeverRounded from "@mui/icons-material/DeleteForeverRounded";

//================================================

export const LEGAL_HUB_TITLE = "Boring Legal Stuff";

// localStorage keys are all this app's own, and pokeapi-js-wrapper caches
// API responses in an IndexedDB database named after itself.
const POKEAPI_CACHE_DB = "pokeapi-js-wrapper";

const clearLocalData = () =>
  new Promise<void>(resolve => {
    localStorage.clear();
    const request = indexedDB.deleteDatabase(POKEAPI_CACHE_DB);
    request.onsuccess = () => resolve();
    request.onerror = () => resolve();
    request.onblocked = () => resolve();
  });

//================================================

const LegalBreadcrumbs: React.FC<{ current?: string }> = ({ current }) => (
  <Breadcrumbs sx={{ mb: 2 }}>
    <Link component={RouterLink} to="/" color="inherit" underline="hover">
      Home
    </Link>
    {current ? (
      <Link
        component={RouterLink}
        to="/legal"
        color="inherit"
        underline="hover"
      >
        {LEGAL_HUB_TITLE}
      </Link>
    ) : (
      <Typography color="textPrimary">{LEGAL_HUB_TITLE}</Typography>
    )}
    {current && <Typography color="textPrimary">{current}</Typography>}
  </Breadcrumbs>
);

const ClearDataButton: React.FC = () => {
  const [cleared, setCleared] = useState(false);
  const onClick = useCallback(async () => {
    await clearLocalData();
    setCleared(true);
  }, []);
  return (
    <Box my={3}>
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteForeverRounded />}
        onClick={onClick}
        disabled={cleared}
      >
        {cleared ? "Local data cleared" : "Clear all local data"}
      </Button>
      {cleared && (
        <Typography color="textSecondary" variant="body2" mt={1}>
          Done. Reload the page to start fresh.
        </Typography>
      )}
    </Box>
  );
};

//================================================

export const LegalHubPage: React.FC = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <LegalBreadcrumbs />
    <Typography variant="h4" component="h1" gutterBottom>
      {LEGAL_HUB_TITLE}
    </Typography>
    <Typography color="textSecondary" paragraph>
      The stuff nobody reads but everybody needs. All of it, in one place, in
      plain English.
    </Typography>
    <Grid container spacing={2} mt={1}>
      {LEGAL_DOCS.map(doc => (
        <Grid item xs={12} sm={6} key={doc.slug}>
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardActionArea
              component={RouterLink}
              to={`/legal/${doc.slug}`}
              sx={{ height: "100%" }}
            >
              <CardContent>
                <Typography variant="h6">{doc.title}</Typography>
                <Typography color="textSecondary" variant="body2">
                  {doc.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Typography color="textSecondary" variant="body2" mt={4}>
      Questions about any of this? Contact{" "}
      <Link href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</Link>.
    </Typography>
  </Container>
);

export const LegalDocPage: React.FC = () => {
  const { page } = useParams();
  const doc = getLegalDoc(page);

  if (!doc) {
    return <LegalHubPage />;
  }
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <LegalBreadcrumbs current={doc.title} />
      <Typography variant="h4" component="h1" gutterBottom>
        {doc.title}
      </Typography>
      <Typography color="textSecondary" variant="body2" mb={4}>
        Effective: {LEGAL_UPDATED} · Last updated: {LEGAL_UPDATED}
      </Typography>
      {doc.sections.map(section => (
        <Box component="section" key={section.heading} mb={3}>
          <Typography variant="h6" component="h2" gutterBottom>
            {section.heading}
          </Typography>
          <Typography color="textSecondary">{section.body}</Typography>
          {doc.slug === "opt-out" &&
            section.heading === "Clear your local data" && <ClearDataButton />}
        </Box>
      ))}
    </Container>
  );
};
