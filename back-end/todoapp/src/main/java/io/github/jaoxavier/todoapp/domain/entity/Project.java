package io.github.jaoxavier.todoapp.domain.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String title;
    private String description;
}
