package com.task5Backend.TrackerBackend.dto;

import com.task5Backend.TrackerBackend.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateStatusDTO
{
    private Status status;
}
