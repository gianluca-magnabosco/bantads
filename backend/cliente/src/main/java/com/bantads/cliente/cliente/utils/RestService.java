package com.bantads.cliente.cliente.utils;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.bantads.cliente.cliente.serializers.AccountDTO;

@Service
public class RestService<T> {
    private final RestTemplate restTemplate;

    public RestService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public Object getAccountDTOs(String ids) {
        String url = "http://account:5000/accounts/users/" + ids;

        Object accounts;

        try {
            // String resp = this.restTemplate.getForObject(url, String.class);
            ResponseEntity<JsonResponse> res = this.restTemplate.getForEntity(url, JsonResponse.class);
            ModelMapper mapper = new ModelMapper();
            // System.out.println(res.getBody().getData());

            // accounts = new ArrayList<>();
            return res.getBody().getData();
        } catch (RestClientException e) {
            e.printStackTrace();
            accounts = new ArrayList<>();
            return accounts;
        }
    }
}