package kz.adam.ukhayev.messengerapi.security;

import java.util.Optional;
import kz.adam.ukhayev.messengerapi.component.feign.FeignUserApi;
import kz.adam.ukhayev.messengerapi.model.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("userDetailsServiceImpl")
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final FeignUserApi feignUserApi;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        var userDto = Optional.ofNullable(
                feignUserApi.getUserByEmail(email)).map(ResponseEntity::getBody).get();
        return SecurityUser.fromUser(userDto);
    }
}
