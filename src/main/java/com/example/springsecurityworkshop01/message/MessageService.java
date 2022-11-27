package com.example.springsecurityworkshop01.message;

import java.util.UUID;

public interface MessageService {
    Iterable<MessageRestDTO> provideAllMessages();

    MessageRestDTO provideMessageById(UUID uuid);

    MessageRestDTO saveMessage(MessageRestDTO message);
}
