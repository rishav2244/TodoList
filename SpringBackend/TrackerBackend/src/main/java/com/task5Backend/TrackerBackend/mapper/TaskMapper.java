package com.task5Backend.TrackerBackend.mapper;

import com.task5Backend.TrackerBackend.dto.CreateTaskDTO;
import com.task5Backend.TrackerBackend.dto.TaskHeavyDisplayDTO;
import com.task5Backend.TrackerBackend.dto.TaskLightDisplayDTO;
import com.task5Backend.TrackerBackend.dto.TaskStatusChangeResponseDTO;
import com.task5Backend.TrackerBackend.enums.Status;
import com.task5Backend.TrackerBackend.model.Task;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper
{
    public Task toEntity(CreateTaskDTO  createTaskDTO)
    {
        Task task = new Task();
        task.setTitle(createTaskDTO.getTitle());
        task.setDescription(createTaskDTO.getDescription());
        task.setStatus(Status.PENDING);
        return task;
    }

    public TaskHeavyDisplayDTO toHeavyDisplayDTO(Task task)
    {
        TaskHeavyDisplayDTO dto = new TaskHeavyDisplayDTO();
        dto.setId(task.getId());
        dto.setTitle(task.getTitle());
        dto.setDescription(task.getDescription());
        dto.setStatus(task.getStatus());
        dto.setCreatedAt(task.getCreatedAt());
        return dto;
    }

    public TaskLightDisplayDTO toLightDisplayDTO(Task task)
    {
        TaskLightDisplayDTO dto = new TaskLightDisplayDTO();
        dto.setId(task.getId());
        dto.setTitle(task.getTitle());
        dto.setStatus(task.getStatus());
        return dto;
    }

    public TaskStatusChangeResponseDTO toStatusDTO(Task  task)
    {
        TaskStatusChangeResponseDTO dto = new TaskStatusChangeResponseDTO();
        dto.setStatus(task.getStatus());
        return dto;
    }
}
