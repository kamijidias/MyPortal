package com.myportal.MyPortal.security;

import java.security.Key;
import java.util.Collections;
import java.util.Date;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import com.myportal.MyPortal.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;

public class TokenUtil {
	
	// algumas const utilitarias
	private static final String ISSUER = "MyPortal";
	
	private static final String TOKEN_HEADER = "Bearer ";
	
	private static final String TOKEN_KEY = "0123456789012345678901234567890";
	
	private static final long ONE_SECOND = 1000;
	
	private static final long ONE_MIN = 60*ONE_SECOND;
	
	public static AuthToken encodeToken(User u) {
		Key secretKey = Keys.hmacShaKeyFor(TOKEN_KEY.getBytes());
		String tokenJWT = Jwts.builder().setSubject(u.getEmail())
										.setIssuer(ISSUER)
										.setExpiration(new Date(System.currentTimeMillis() + ONE_MIN))
										.signWith(secretKey, SignatureAlgorithm.HS256)
										.compact();	
		AuthToken token = new AuthToken(TOKEN_HEADER + tokenJWT);
		return token;
	}

	public static Authentication decodeToken(HttpServletRequest request){
		
		String jwtToken = request.getHeader("Authorization");
		jwtToken = jwtToken.replace(TOKEN_HEADER, "");
		
		// Fazendo a leitura do token;
		Jws<Claims> jwsClaims = Jwts.parserBuilder().setSigningKey(TOKEN_KEY.getBytes()).build().parseClaimsJws(jwtToken);
		
		//Extraindo o token
		String user = jwsClaims.getBody().getSubject();
		String issuer = jwsClaims.getBody().getIssuer();
		Date validated = jwsClaims.getBody().getExpiration();
		
		if (user.length() > 0 && issuer.equals(ISSUER) && validated.after(new Date(System.currentTimeMillis()))) {
			return new UsernamePasswordAuthenticationToken("user", null, Collections.emptyList());
		}
		
		return null;
	}
}
