package io.github.jaoxavier.todoapp.rest.controller;


import io.github.jaoxavier.todoapp.domain.dto.TaskDTO;
import io.github.jaoxavier.todoapp.domain.entity.Project;
import io.github.jaoxavier.todoapp.domain.entity.Task;
import io.github.jaoxavier.todoapp.domain.repository.ProjectRepository;
import io.github.jaoxavier.todoapp.domain.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks/")
public class TaskController {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;

    @PostMapping("new")
    @ResponseStatus(HttpStatus.CREATED)
    public Task createNewTask(@RequestBody TaskDTO dto){
        return createTask(dto);
    }

    @GetMapping("idTask/{id}")
    public Task getTaskById(@PathVariable Integer id){
        return taskRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Task not found by idTask")
        );
    }

    @PatchMapping("edit/idTask/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Task editTaskById(@PathVariable Integer id, @RequestBody Task task){
        Task originalTask = taskRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Task not found on edit")
        );
        return convertTask(originalTask, task);
    }

    @DeleteMapping("delete/idTask/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteTask(@PathVariable Integer id){
        taskRepository.deleteById(id);
    }

    private Task convertTask(Task originalTask, Task task) {
        Task newTask = new Task();

        BeanUtils.copyProperties(originalTask, newTask);

        if(task.getTitle() != null){
            newTask.setTitle(task.getTitle());
        }
        if(task.getDescription() != null){
            newTask.setDescription(task.getDescription());
        }
        if(task.getDueDate() != null){
            newTask.setDueDate(task.getDueDate());
        }
        if(task.getFinished() != null){
            newTask.setFinished(task.getFinished());
        }

        return newTask;
    }

    private Task createTask(TaskDTO dto){
        Task task = new Task();
        task.setTitle(dto.getTitle());
        task.setDescription(dto.getDescription());
        task.setDueDate(LocalDate.parse(dto.getDueDate()));
        task.setProject(projectRepository.findById(dto.getIdProject()).orElseThrow(
                () -> new RuntimeException("Project not found on task")
        ));
        return taskRepository.save(task);
    }

}
