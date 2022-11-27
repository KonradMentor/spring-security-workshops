package com.example.springsecurityworkshop01.message;

import com.example.springsecurityworkshop01.mapper.DTOMapper;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.stream.StreamSupport;

@Service
public class NotModifiableMessageService implements MessageService {
    private static final boolean NOT_PARALLEL = false;
    private final MessageRepository messageRepository;
    private final DTOMapper<MessageRestDTO, Message> messageRestDTOMapper;

    public NotModifiableMessageService(MessageRepository messageRepository, DTOMapper<MessageRestDTO, Message> messageRestDTOMapper) {
        this.messageRepository = messageRepository;
        this.messageRestDTOMapper = messageRestDTOMapper;
    }

    @Override
    public Iterable<MessageRestDTO> provideAllMessages() {
        return StreamSupport.stream(messageRepository.findAll().spliterator(), NOT_PARALLEL)
                .map(messageRestDTOMapper::toDto).toList();
    }

    @Override
    public MessageRestDTO provideMessageById(UUID uuid) {
        //This is conscious decision to use exception in case not found. https://softwareengineering.stackexchange.com/questions/189222/are-exceptions-as-control-flow-considered-a-serious-antipattern-if-so-why
        return messageRestDTOMapper.toDto(messageRepository.findById(uuid).orElseThrow(MessageNotFound::new));
    }

    @Override
    public MessageRestDTO saveMessage(MessageRestDTO messageRestDTO) {
        return messageRestDTOMapper.toDto(messageRepository.save(messageRestDTOMapper.toDomainObject(messageRestDTO)));
    }
}
