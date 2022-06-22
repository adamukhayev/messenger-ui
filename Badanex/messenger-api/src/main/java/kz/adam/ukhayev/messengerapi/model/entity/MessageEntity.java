package kz.adam.ukhayev.messengerapi.model.entity;

import com.vladmihalcea.hibernate.type.json.JsonType;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import kz.adam.ukhayev.messengerapi.model.Message;
import kz.adam.ukhayev.messengerapi.model.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

@Entity
@Table(name = "message", schema = "main")
@AllArgsConstructor
@Data
@NoArgsConstructor
@TypeDefs({
        @TypeDef(name = DBConstants.JSONB, typeClass = JsonType.class)
})
public class MessageEntity {


    @Id
    @Column(name = "id")
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "message_seq")
    @SequenceGenerator(
            name = "message_seq",
            sequenceName = "main.message_id_seq", allocationSize = 1)
    private Long messageId;

    @Column(name = "send_email")
    private String sendEmail;

    @Column(name = "message")
    @Type(type = "json")
    private Message message;

    @Column(name = "get_email")
    private String getEmail;

    @Column(name = "create_date")
    private LocalDateTime createDate;

    @Column(name = "is_active")
    @Enumerated(value = EnumType.STRING)
    private Status isActive;

}
