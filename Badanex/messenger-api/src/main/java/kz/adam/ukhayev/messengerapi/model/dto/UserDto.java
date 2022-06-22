package kz.adam.ukhayev.messengerapi.model.dto;

import kz.adam.ukhayev.messengerapi.model.Role;
import kz.adam.ukhayev.messengerapi.model.Status;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {

    private String email;
    private String password;
    private Status isActive;
    private Role role;
}
