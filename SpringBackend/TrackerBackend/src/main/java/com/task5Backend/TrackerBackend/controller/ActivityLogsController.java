package com.task5Backend.TrackerBackend.controller;

import com.task5Backend.TrackerBackend.dto.ActivityLogDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.task5Backend.TrackerBackend.service.ActivityLogService;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ActivityLogsController
{
    private final ActivityLogService activityLogService;

    @GetMapping("/logs")
    public List<ActivityLogDTO> getLogs()
    {
        return activityLogService.getAllActivities();
    }
}
