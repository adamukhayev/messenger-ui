package kz.adamukhayev.users.userapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/packages")
public class MyController {

    @GetMapping("/")
    public ResponseEntity<String> getInfoForAllEmps() {

        return ResponseEntity.ok("view_for_all_employees");
    }

    @GetMapping("/hr_info")
    public ResponseEntity<String> getInfoOnlyForHR() {
        return ResponseEntity.ok("view_for_hr");
    }

    @GetMapping("/manager_info")
    public ResponseEntity<String> getInfoOnlyForManagers() {
        return ResponseEntity.ok("view_for_managers");
    }
}
