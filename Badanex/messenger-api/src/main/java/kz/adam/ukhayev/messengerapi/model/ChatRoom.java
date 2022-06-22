package kz.adam.ukhayev.messengerapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoom {
    private String id;
    private String chatId;
    private String senderId;
    private String recipientId;
}
