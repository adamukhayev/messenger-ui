package kz.adamukhayev.users.userapi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "authorities", schema = "main")
@AllArgsConstructor
@NoArgsConstructor
public class AuthoritiesEntity {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "authorities_seq")
    @SequenceGenerator(
            name = "authorities_seq",
            sequenceName = "main.authorities_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "authority")
    private String authority;
}
