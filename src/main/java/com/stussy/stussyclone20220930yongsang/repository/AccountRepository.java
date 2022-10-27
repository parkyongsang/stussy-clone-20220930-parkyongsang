package com.stussy.stussyclone20220930yongsang.repository;

import com.stussy.stussyclone20220930yongsang.domain.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {

    public User findUserByEmail(String email) throws Exception;
    public int saveUser(User user) throws Exception;
}
