package com.stussy.stussyclone20220930yongsang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class CMRespDto<T> {
    private String msg;
    private T data;
}
