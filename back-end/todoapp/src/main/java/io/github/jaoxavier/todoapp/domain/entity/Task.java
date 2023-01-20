package io.github.jaoxavier.todoapp.domain.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;
    private String title;
    private String description;
    private LocalDate dueDate;
    private Boolean finished = false;
}
