package com.task5Backend.TrackerBackend.repository;

import com.task5Backend.TrackerBackend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository  extends JpaRepository<Task, Long>
{
}
