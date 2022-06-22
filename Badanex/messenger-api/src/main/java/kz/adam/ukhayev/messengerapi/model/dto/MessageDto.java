package kz.adam.ukhayev.messengerapi.model.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import kz.adam.ukhayev.messengerapi.model.Message;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageDto {

    @NotNull
    private Message message;

    @NotBlank
    private String email;

}
