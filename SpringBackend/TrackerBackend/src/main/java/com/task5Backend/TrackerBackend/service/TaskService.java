package com.task5Backend.TrackerBackend.service;

import com.task5Backend.TrackerBackend.dto.*;
import com.task5Backend.TrackerBackend.enums.Status;

import java.util.List;

public interface TaskService
{
    TaskHeavyDisplayDTO createTask(CreateTaskDTO createTaskDTO);
    List<TaskHeavyDisplayDTO> getAllTasksHeavy();
    TaskHeavyDisplayDTO getTaskHeavy(long id);
    TaskStatusChangeResponseDTO updateTaskStatus(long id, Status status);
    void deleteTask(long id);
}