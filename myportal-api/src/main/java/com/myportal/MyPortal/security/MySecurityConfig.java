package com.myportal.MyPortal.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class MySecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.csrf().disable() //desabilitando o csrf (para tratar a autentificacao dos usuarios)
			.authorizeHttpRequests() //as requisicoes http sao passiveis de autorizacao
			.requestMatchers(HttpMethod.GET, "/free").permitAll() //especificando quem esta permitido para navegar
			.requestMatchers(HttpMethod.POST, "/login").permitAll()
			.anyRequest().authenticated().and().cors(); //todas as outras urls terao necessidade de autenticação
		
		http.addFilterBefore(new MyFilter(), UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}
}
