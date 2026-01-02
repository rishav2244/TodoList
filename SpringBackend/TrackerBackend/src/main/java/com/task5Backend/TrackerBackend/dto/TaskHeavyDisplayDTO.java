package com.task5Backend.TrackerBackend.dto;

import com.task5Backend.TrackerBackend.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TaskHeavyDisplayDTO
{
    private long id;
    private String title;
    private String description;
    private Instant createdAt;
    private Status status;
}