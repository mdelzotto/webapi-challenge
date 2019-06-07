const express = require("express");

const router = express.Router();
const db = require("./data/helpers/projectModel.js");

router.get("/", async (req, res) => {
  try {
    const projects = await db.get();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({
        message: `The projects' information could not be retrieved: ${error}.`
      });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db.get(id);
    if (project) {
      res.status(200).json(project);
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: `The project's information could not be retrieved: ${error}.`
      });
  }
});

router.get("/:id/actions", async (req, res) => {
  const { id } = req.params;
  try {
    const projectActions = await db.getProjectActions(id);
    if (projectActions) {
      res.status(200).json(projectActions);
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `The project's information could not be retrieved: ${error}.`})
  }
});

router.post("/", async (req, res) => {
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(400).json({ message: "Please provide a name and description." });
  } else {
    try {
      const newProject = await db.insert(project);
      if (newProject) {
        res.status(201).json(newProject);
      }
    } catch (error) {
      res.status(500).json({
        message: `There was an error while saving the project to the database: ${error}.`
      });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db.get(id);
    if (project) {
      const deleted = await db.remove(id);
      if (deleted) {
        res.status(200).json(project);
      }
    } else {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({ message: `The project could not be removed: ${error}.` });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const project = req.body;
  if (!project.name || !project.description) {
    res.status(400).json({ message: "Please provide a name and description." });
  } else {
    try {
      const edited = await db.update(id, project);
      if (edited) {
        res.status(200).json(edited);
      } else {
        res.status(404).json({
          message: "The project with the specified ID does not exist."
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `The project information could not be modified: ${error}.` });
    }
  }
});

module.exports = router;
