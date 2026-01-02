package com.task5Backend.TrackerBackend.model;

import com.task5Backend.TrackerBackend.enums.ActivityAction;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
public class Activity
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ActivityAction action;

//    @ManyToOne(optional = false, fetch = FetchType.LAZY)
//    @JoinColumn(name = "task_id", nullable = false)
//    private Task task;

    @Column(nullable = false)
    private long taskId;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private Instant timestamp;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;
}
