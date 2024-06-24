package com.devstack.backend.services.auth;

import com.devstack.backend.dto.SignupRequest;
import com.devstack.backend.dto.UserDto;

public interface AuthService {
    UserDto createUser(SignupRequest signupRequest);
}
