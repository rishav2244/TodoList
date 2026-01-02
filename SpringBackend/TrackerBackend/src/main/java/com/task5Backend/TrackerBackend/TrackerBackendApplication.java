package com.task5Backend.TrackerBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class TrackerBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrackerBackendApplication.class, args);
	}

}

//Task: Id(auto, key), Title(Varchar), Status (Enum) (Pending/Complete) (default Pending), Description (Optional, TEXT). Can be created, updated in status, deleted, fetched. Fake login, don't bother witih security for now unless I have a shitload of time. Search is entirely frontend based.
//
// Activity Log: Id(auto, key), Action(enum), Task ID(foreign key), timestamp (Auto create non-changeable), Description of action (I'll make it same as action).
//Task DTOs: 1)TaskLightDisplayDTO (Title, status)
//			 2)CreateTaskDTO (Title(Disable submit button if only whitespace or empty), Description(optional), Status default pending)
//			 3)TaskHeavyDisplayDTO (Title, description, create date, status), 404 if not found
//			 4)TaskStatusChangeDTO (status) No taskId since call to URL is sufficient for that.
//No Delete DTO cuz call to URL is sufficient for that.
//No auth cuz not required in backend.
//Searching seems to be frontend only
//Activity DTOs: 1)AllActivityLogsDTO (Action, Description, TaskID)
//All activity entries are entered by service layer, no need to have PUT requests for that.

//API endpoints:
//GET    /api/tasks                   Get all tasks (Light details)
//POST   /api/tasks                   Create task
//GET    /api/tasks/{id}              Heavy task details
//PATCH  /api/tasks/{id}/status       Update task status
//DELETE /api/tasks/{id}              Delete task
//
//GET    /api/activities              Get all activities