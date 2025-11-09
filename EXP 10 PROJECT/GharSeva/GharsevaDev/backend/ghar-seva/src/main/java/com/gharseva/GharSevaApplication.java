package com.gharseva;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Bean;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import com.gharseva.user.User;
// import com.gharseva.user.UserRepository;
// import java.util.Set;

@SpringBootApplication
public class GharSevaApplication {
    public static void main(String[] args) {
        SpringApplication.run(GharSevaApplication.class, args);
    }

    // @Bean
    // CommandLineRunner seedAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    //     return args -> {
    //         String adminEmail = System.getenv().getOrDefault("ADMIN_EMAIL", "geekyhim@gmail.com");
    //         String adminPassword = System.getenv().getOrDefault("ADMIN_PASSWORD", "admin123!");
    //         userRepository.findByEmail(adminEmail).ifPresentOrElse(existing -> {
    //             if (!existing.getRoles().contains("ROLE_ADMIN")) {
    //                 existing.getRoles().add("ROLE_ADMIN");
    //             }
    //             if (existing.getFullName() == null || existing.getFullName().isBlank()) {
    //                 existing.setFullName("Himanshu");
    //             }
    //             userRepository.save(existing);
    //         }, () -> {
    //             User admin = User.builder()
    //                     .email(adminEmail)
    //                     .passwordHash(passwordEncoder.encode(adminPassword))
    //                     .fullName("Himanshu")
    //                     .roles(Set.of("ROLE_ADMIN"))
    //                     .build();
    //             userRepository.save(admin);
    //         });
    //     };
    // }

}


