package com.task5Backend.TrackerBackend.service.impl;

import com.task5Backend.TrackerBackend.dto.CreateTaskDTO;
import com.task5Backend.TrackerBackend.dto.TaskHeavyDisplayDTO;
import com.task5Backend.TrackerBackend.dto.TaskLightDisplayDTO;
import com.task5Backend.TrackerBackend.dto.TaskStatusChangeResponseDTO;
import com.task5Backend.TrackerBackend.enums.ActivityAction;
import com.task5Backend.TrackerBackend.enums.Status;
import com.task5Backend.TrackerBackend.exceptions.TaskNotFoundException;
import com.task5Backend.TrackerBackend.mapper.TaskMapper;
import com.task5Backend.TrackerBackend.model.Activity;
import com.task5Backend.TrackerBackend.model.Task;
import com.task5Backend.TrackerBackend.repository.ActivityRepository;
import com.task5Backend.TrackerBackend.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import com.task5Backend.TrackerBackend.service.TaskService;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService
{
    final private TaskRepository taskRepository;
    final private TaskMapper taskMapper;
    final private ActivityRepository activityRepository;

    @Transactional
    @Override
    public TaskHeavyDisplayDTO createTask(CreateTaskDTO createTaskDTO)
    {
        Task tempTask = taskRepository.save(taskMapper.toEntity(createTaskDTO));
        Activity activity = new Activity();
        activity.setAction(ActivityAction.CREATED);
        activity.setTaskId(tempTask.getId());
        activity.setDescription("Created task");
        activityRepository.save(activity);
        return taskMapper.toHeavyDisplayDTO(tempTask);
    }

    @Override
    public List<TaskLightDisplayDTO> getAllTasksLight()
    {
        List<TaskLightDisplayDTO> taskLightDisplayDTOList = taskRepository.
                findAll().
                stream().
                map(taskMapper::toLightDisplayDTO).
                toList();
        return taskLightDisplayDTOList;
    }

    @Override
    public TaskHeavyDisplayDTO getTaskHeavy(long id)
    {
        Task task = taskRepository.
                findById(id).
                orElseThrow(() -> new TaskNotFoundException("Task of id "+id+" not found."));
        return taskMapper.toHeavyDisplayDTO(task);
    }

    @Transactional
    @Override
    public TaskStatusChangeResponseDTO updateTaskStatus(long id, Status status)
    {
        Task temp = taskRepository.
                findById(id).
                orElseThrow(() -> new TaskNotFoundException("Task of id "+id+" not found."));
        temp.setStatus(status);
        Activity activity = new Activity();
        activity.setAction(ActivityAction.UPDATED);
        activity.setTaskId(temp.getId());
        activity.setDescription("Updated task to "+temp.getStatus().toString());
        activityRepository.save(activity);
        return taskMapper.toStatusDTO(temp);
    }

    @Transactional
    @Override
    public void deleteTask(long id)
    {
        Task temp = taskRepository.findById(id).orElseThrow(() -> new TaskNotFoundException("Task of id "+id+" not found."));
        Activity activity = new Activity();
        activity.setAction(ActivityAction.DELETED);
        activity.setTaskId(temp.getId());
        activity.setDescription("Deleted task");
        activityRepository.save(activity);
        taskRepository.delete(temp);
    }
}
