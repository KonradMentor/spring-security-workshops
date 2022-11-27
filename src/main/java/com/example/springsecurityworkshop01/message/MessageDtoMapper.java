package com.example.springsecurityworkshop01.message;

import com.example.springsecurityworkshop01.mapper.DTOMapper;
import org.springframework.stereotype.Component;

@Component
public class MessageDtoMapper implements DTOMapper<MessageRestDTO, Message> {
    @Override
    public MessageRestDTO toDto(Message message) {
        if (message == null) {
            return null;
        }

        return new MessageRestDTO(message.getId(), message.getTitle(), message.getContent());
    }

    @Override
    public Message toDomainObject(MessageRestDTO messageRestDTO) {
        Message message = new Message();
        message.setId(messageRestDTO.getId());
        message.setTitle(messageRestDTO.getTitle());
        message.setContent(messageRestDTO.getContent());
        return message;
    }
}
