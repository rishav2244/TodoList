package com.task5Backend.TrackerBackend.service.impl;

import com.task5Backend.TrackerBackend.dto.ActivityLogDTO;
import com.task5Backend.TrackerBackend.mapper.ActivityMapper;
import com.task5Backend.TrackerBackend.repository.ActivityRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.task5Backend.TrackerBackend.service.ActivityLogService;

import java.util.List;

@Service
@AllArgsConstructor
public class ActivityLogServiceImpl  implements ActivityLogService
{
    private final ActivityRepository activityRepository;
    private final ActivityMapper activityMapper;

    @Override
    public List<ActivityLogDTO> getAllActivities()
    {
        List<ActivityLogDTO> temp = activityRepository.
                findAll().
                stream()
                .map(activityMapper::toDTO).
                toList();
        return temp;
    }
}
