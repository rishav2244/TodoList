package com.task5Backend.TrackerBackend.mapper;

import com.task5Backend.TrackerBackend.dto.ActivityLogDTO;
import com.task5Backend.TrackerBackend.model.Activity;
import org.springframework.stereotype.Component;

@Component
public class ActivityMapper {

    public ActivityLogDTO toDTO(Activity activity) {
        ActivityLogDTO dto = new ActivityLogDTO();
        dto.setId(activity.getId());
        dto.setAction(activity.getAction());
        dto.setDescription(activity.getDescription());
        dto.setTaskId(activity.getTaskId());
        dto.setTimestamp(activity.getTimestamp());
        return dto;
    }
}