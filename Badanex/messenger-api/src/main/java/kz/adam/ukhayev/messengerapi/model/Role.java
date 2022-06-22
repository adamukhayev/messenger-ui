package kz.adam.ukhayev.messengerapi.model;

import java.util.Set;
import java.util.stream.Collectors;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public enum Role {
    ADMIN(Set.of(Permission.READ, Permission.WRITE)),
    USER(Set.of(Permission.READ));

    Role(Set<Permission> permission) {
        this.permission = permission;
    }

    private final Set<Permission> permission;

    public Set<Permission> getPermission() {
        return permission;
    }

    public Set<SimpleGrantedAuthority> getAuthorities() {
        return getPermission().stream()
                .map(permission -> (new SimpleGrantedAuthority(permission.getPermission())))
                .collect(Collectors.toSet());
    }
}
