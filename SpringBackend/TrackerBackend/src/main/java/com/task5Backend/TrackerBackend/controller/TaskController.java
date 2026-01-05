package com.task5Backend.TrackerBackend.controller;

import com.task5Backend.TrackerBackend.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.task5Backend.TrackerBackend.service.TaskService;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class TaskController
{
    private final TaskService taskService;
    @GetMapping("/tasks")
    public List<TaskHeavyDisplayDTO>  getTasks()
    {
        return taskService.getAllTasksHeavy();
    }

    @PostMapping("/tasks")
    public TaskHeavyDisplayDTO  createTask(@RequestBody CreateTaskDTO createTaskDTO)
    {
        return taskService.createTask(createTaskDTO);
    }

    @GetMapping("/tasks/{id}")
    public TaskHeavyDisplayDTO getTask(@PathVariable long id)
    {
        return taskService.getTaskHeavy(id);
    }

    @PatchMapping("/tasks/{id}/status")
    public TaskStatusChangeResponseDTO updateTask(@PathVariable long id, @RequestBody UpdateStatusDTO updateStatusDTO)
    {
        return taskService.updateTaskStatus(id, updateStatusDTO.getStatus());
    }

    @DeleteMapping("/tasks/{id}")
    public void DeleteTask(@PathVariable long id)
    {
        taskService.deleteTask(id);
    }
}