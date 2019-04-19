package com.netcracker.vacations;

import com.netcracker.vacations.domain.*;
import com.netcracker.vacations.domain.enums.RequestType;
import com.netcracker.vacations.domain.enums.Role;
import com.netcracker.vacations.domain.enums.Status;
import com.netcracker.vacations.exception.EndingBeforeBeginningException;
import com.netcracker.vacations.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class VacationsApplication {
    @Autowired
    private static UserRepository usersRepo;


    public static void main(String[] args) {
        SpringApplication.run(VacationsApplication.class, args);
    }

}
