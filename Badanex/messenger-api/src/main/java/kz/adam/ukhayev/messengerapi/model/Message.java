package kz.adam.ukhayev.messengerapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {

//    private MessageType messageType;
//
//    private String message;
    private String from;
    private String text;
}
