import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  Paper,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextareaAutosize,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "bootstrap/dist/css/bootstrap.css";
const Projects = () => {
  const [projects, setProjects] = useState([{ title: "", description: " " }]);

  const handleAddProject = () => {
    setProjects([...projects, { title: "", description: " " }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProj = [...projects];
    updatedProj[index][name] = value;
    setProjects(updatedProj);
  };

  const handleDeleteProject = () => {
    const updatedProj = [...projects];
    updatedProj.pop();
    setProjects(updatedProj);
  };
  return (
    <div>
      {projects.map((project, index) => (
        <Paper key={index} style={{ padding: "10px", margin: "10px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Project Name"
                value={project.title}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <div class="form-floating">
                <textarea
                  name="description"
                  value={project.description}
                  onChange={(e) => handleInputChange(index, e)}
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Description</label>
              </div>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton color="primary" onClick={handleAddProject}>
          <AddIcon />
        </IconButton>
        {projects.length > 1 ? (
          <IconButton color="danger" onClick={handleDeleteProject}>
            <DeleteIcon />
          </IconButton>
        ) : null}
      </Box>
    </div>
  );
};

export default Projects;
