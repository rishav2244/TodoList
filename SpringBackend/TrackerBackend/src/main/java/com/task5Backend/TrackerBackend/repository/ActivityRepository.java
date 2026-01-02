package com.task5Backend.TrackerBackend.repository;

import com.task5Backend.TrackerBackend.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
}
