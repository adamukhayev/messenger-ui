package kz.adam.ukhayev.messengerapi.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ResponseUserDto {
    private String email;
    private String token;
}
