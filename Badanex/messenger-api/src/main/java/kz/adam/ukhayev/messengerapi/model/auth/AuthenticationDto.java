package kz.adam.ukhayev.messengerapi.model.auth;

import lombok.Data;

@Data
public class AuthenticationDto {

    private String email;
    private String password;
}
