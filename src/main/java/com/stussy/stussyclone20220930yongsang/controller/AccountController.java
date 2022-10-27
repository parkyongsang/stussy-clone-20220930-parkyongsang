package com.stussy.stussyclone20220930yongsang.controller;


import com.stussy.stussyclone20220930yongsang.dto.RegisterReqDto;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AccountController {

    @GetMapping("/account/login")
    public String login(Model model,
                        @RequestParam @Nullable String email,
                        @RequestParam @Nullable String error) {
        model.addAttribute("email", email == null ? "" : email);
        model.addAttribute("error", error == null? "" : error);
        return "account/login";
    }

    @GetMapping("/account/register")
    public String register(RegisterReqDto registerReqDto) {
        System.out.println(registerReqDto);
        return "account/product_registrations"; //
    }


}