package io.github.jaoxavier.todoapp.rest.controller;

import io.github.jaoxavier.todoapp.domain.entity.Project;
import io.github.jaoxavier.todoapp.domain.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/projects/")
public class ProjectController {
    private final ProjectRepository projectRepository;

    @PostMapping("new")
    @ResponseStatus(HttpStatus.CREATED)
    public Project createNewProject(@RequestBody Project project){
        return projectRepository.save(project);
    }

    @GetMapping("idProject/{id}")
    public Project getProjectById(@PathVariable Integer id){
        return projectRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Project not found by idProject")
        );
    }

    @PatchMapping("edit/idProject/{id}")
    public Project editProjectById(@PathVariable Integer id, @RequestBody Project project){
        Project originalProject = projectRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Project not found on edit")
        );
        return convertProject(originalProject, project);
    }

    private Project convertProject(Project originalProject, Project project) {
        Project newProject = new Project();
        newProject.setId(originalProject.getId());

        newProject.setTitle(project.getTitle());
        newProject.setDescription(project.getDescription());
        return newProject;
    }
}
