package kz.adam.ukhayev.messengerapi.component.feign;

import kz.adam.ukhayev.messengerapi.model.dto.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(
        value = "users-api",
        url = "${feign.url.user-api}"
)
public interface FeignUserApi {

    @PostMapping( produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<UserDto> getUserByEmail(@RequestParam String email);

}
