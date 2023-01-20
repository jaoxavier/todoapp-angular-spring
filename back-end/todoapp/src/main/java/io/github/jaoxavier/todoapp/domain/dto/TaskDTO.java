package io.github.jaoxavier.todoapp.domain.dto;

import lombok.Data;

@Data
public class TaskDTO {

    private Integer idProject;
    private String title;
    private String description;
    private String dueDate;
}
