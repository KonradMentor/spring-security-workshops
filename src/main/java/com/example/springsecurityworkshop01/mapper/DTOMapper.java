package com.example.springsecurityworkshop01.mapper;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DTOMapper<T, S> {
    T toDto(S domainObject);

    S toDomainObject(T dtoObject);
}
