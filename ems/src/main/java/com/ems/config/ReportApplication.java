package com.ems.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import com.ems.EmsApplication;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
public class ReportApplication {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(EmsApplication.class, args);
    }
}
