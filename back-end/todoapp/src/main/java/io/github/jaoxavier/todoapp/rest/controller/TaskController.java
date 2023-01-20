package io.github.jaoxavier.todoapp.rest.controller;


import io.github.jaoxavier.todoapp.domain.entity.Task;
import io.github.jaoxavier.todoapp.domain.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks/")
public class TaskController {

    private final TaskRepository taskRepository;

    @PostMapping("new")
    @ResponseStatus(HttpStatus.CREATED)
    public Task createNewTask(@RequestBody Task task){
        return taskRepository.save(task);
    }

    @GetMapping("idTask/{id}")
    public Task getTaskById(@PathVariable Integer id){
        return taskRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Task not found by idTask")
        );
    }

}
