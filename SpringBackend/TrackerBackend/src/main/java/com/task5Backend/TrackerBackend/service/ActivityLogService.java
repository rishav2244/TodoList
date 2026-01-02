package com.task5Backend.TrackerBackend.service;

import com.task5Backend.TrackerBackend.dto.ActivityLogDTO;

import java.util.List;

public interface ActivityLogService
{
    List<ActivityLogDTO> getAllActivities();
}
