package com.bantads.conta.conta.rest;

import com.bantads.conta.conta.models.ContaDTO;
import com.bantads.conta.conta.models.query.ContaQ;
import com.bantads.conta.conta.services.ContaServices;
import com.bantads.conta.exceptions.ContaNotFound;
import com.bantads.conta.lib.JsonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;

@RestController
public class ContaQueries {
    @Autowired
    private ContaServices serv;

    @CrossOrigin
    @GetMapping(value = "/accounts", produces = "application/json")
    public ResponseEntity<JsonResponse> getAllContas() {
        try {
            List<ContasDTO> dtos = serv.getAllContas();
            return JsonResponse.ok("Listando " + dtos.size() + " contas.", dtos);
        } catch (Exception e) {
            e.printStackTrace();
            return JsonResponse.internalServerError("Erro ao listar contas!", null);
        }
    }

    @CrossOrigin
    @GetMapping(value = "/accounts/{id}", produces = "application/json")
    public ResponseEntity<JsonResponse> getConta(@PathVariable("id") Long id) {
        try {
            ContaDTO acc = serv.getContaDTO(id);
            return JsonResponse.ok("Conta encontrada!", acc);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return JsonResponse.badRequest("O id da conta é inválido!", null);
        } catch (ContaNotFound e) {
            e.printStackTrace();
            return JsonResponse.notFound("Conta não encontrada!", null);
        }
    }

    @CrossOrigin
    @GetMapping(value = "/accounts/user/{id}", produces = "application/json")
    public ResponseEntity<JsonResponse> getUserConta(@PathVariable("id") Long id) {
        try {
            ContaDTO acc = serv.getUserContaDTO(id);
            return JsonResponse.ok("Conta encontrada!", acc);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return JsonResponse.badRequest("O id da conta é inválido!", null);
        } catch (ContaNotFound e) {
            e.printStackTrace();
            return JsonResponse.notFound("Conta não encontrada!", null);
        }
    }

    @CrossOrigin
    @GetMapping(value = "/accounts/users/{users}", produces = "application/json")
    public ResponseEntity<JsonResponse> getContasByUsers(@PathVariable("users") String users) {
        try {
            List<String> ids = new ArrayList<String>(Arrays.asList(users.split(",")));
            List<ContaDTO> accounts = this.serv.getContasByUsers(ids);

            return JsonResponse.ok("Contas encontradas!", accounts);
        } catch (Exception e) {
            e.printStackTrace();
            return JsonResponse.badRequest("Erro ao recuperar contas", null);
        }
    }

    @CrossOrigin
    @GetMapping(value = "/accounts/{id}/balance", produces = "application/json")
    public ResponseEntity<JsonResponse> getBalance(@PathVariable Long id) {
        try {
            ContaQ conta = serv.getConta(id);

            LinkedHashMap<String, Double> balance = new LinkedHashMap<>();
            balance.put("balance", conta.getBalance());

            return JsonResponse.ok("Retornando saldo", balance);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return JsonResponse.badRequest("O id da conta é inválido!", null);
        } catch (ContaNotFound e) {
            e.printStackTrace();
            return JsonResponse.notFound("Conta não encontrada!", null);
        }
    }
}
