package io.github.jaoxavier.todoapp.domain.repository;

import io.github.jaoxavier.todoapp.domain.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
}
