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
const WorkExp = () => {
  const [workExperiences, setWorkExperiences] = useState([
    { company: "", position: "", years: "" },
  ]);

  const handleAddExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { company: "", position: "", years: "" },
    ]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][name] = value;
    setWorkExperiences(updatedExperiences);
  };

  const handleDeleteExperience = () => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences.pop();
    setWorkExperiences(updatedExperiences);
  };
  return (
    <div>
      {workExperiences.map((experience, index) => (
        <Paper key={index} style={{ padding: "10px", margin: "10px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                name="company"
                label="Company"
                value={experience.company}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="position"
                label="Position"
                value={experience.position}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="location"
                label="Location"
                value={experience.location}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Employment Type
                </InputLabel>
                <Select
                  label="Employment Type"
                  name="employmentType"
                  value={experience.employmentType}
                  onChange={(e) => handleInputChange(index, e)}
                >
                  <MenuItem value="full-time">Full-Time</MenuItem>
                  <MenuItem value="part-time">Part-Time</MenuItem>
                  <MenuItem value="contract">Contract</MenuItem>
                  {/* Add more employment types as needed */}
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={6}>
              <TextField
                name="startDate"
                label="Start Date"
                placeholder=""
                type="date"
                value={experience.startDate}
                onChange={(e) => handleInputChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
             
            </Grid> */}
            <Grid item xs={12}>
              <div class="form-floating">
                <textarea
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
        <IconButton color="primary" onClick={handleAddExperience}>
          <AddIcon />
        </IconButton>
        {workExperiences.length > 1 ? (
          <IconButton color="danger" onClick={handleDeleteExperience}>
            <DeleteIcon />
          </IconButton>
        ) : null}
      </Box>
    </div>
  );
};

export default WorkExp;
