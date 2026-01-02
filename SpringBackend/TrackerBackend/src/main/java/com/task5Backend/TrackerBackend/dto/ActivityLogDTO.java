package com.task5Backend.TrackerBackend.dto;

import com.task5Backend.TrackerBackend.enums.ActivityAction;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ActivityLogDTO
{
    private long id;
    private ActivityAction action;
    private String description;
    private long taskId;
    private Instant timestamp;
}
