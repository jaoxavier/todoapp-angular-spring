package io.github.jaoxavier.todoapp.domain.repository;

import io.github.jaoxavier.todoapp.domain.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {

}
