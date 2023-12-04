import { Grid, TextField } from "@mui/material";

const SocialMedia = ({ data }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          value={data.linkedin}
          required
          id="linkedin"
          label="LinkedIn"
          fullWidth
          autoComplete="linkedin"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={data.github}
          required
          id="github"
          label="GitHub"
          fullWidth
          autoComplete="github"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={data.twitter}
          required
          id="twitter"
          label="Twitter"
          fullWidth
          autoComplete="twitter"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={data.portfolio}
          required
          id="portfolio"
          label="Portfolio"
          fullWidth
          autoComplete="portfolio"
          variant="standard"
        />
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
