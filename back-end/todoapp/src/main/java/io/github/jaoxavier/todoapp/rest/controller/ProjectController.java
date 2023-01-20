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
    @ResponseStatus(HttpStatus.OK)
    public Project editProjectById(@PathVariable Integer id, @RequestBody Project project){
        Project originalProject = projectRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Project not found on edit")
        );
        return convertProject(originalProject, project);
    }

    @DeleteMapping("delete/idProject/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteProject(@PathVariable Integer id){
        projectRepository.deleteById(id);
    }

    private Project convertProject(Project originalProject, Project project) {
        Project newProject = new Project();
        newProject.setId(originalProject.getId());

        if(project.getTitle() == null){
            newProject.setTitle(originalProject.getTitle());
        }else{
            newProject.setTitle(project.getTitle());
        }

        if(project.getDescription() == null){
            newProject.setDescription(originalProject.getDescription());
        }else {
            newProject.setDescription(project.getDescription());
        }

        return projectRepository.save(newProject);
    }
}
