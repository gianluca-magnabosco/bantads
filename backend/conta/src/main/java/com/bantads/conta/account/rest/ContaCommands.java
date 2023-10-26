package com.bantads.conta.conta.rest;

import com.bantads.conta.conta.models.ContaDTO;
import com.bantads.conta.conta.services.ContaServices;
import com.bantads.conta.exceptions.ContaNotFound;
import com.bantads.conta.exceptions.BenignException;
import com.bantads.conta.exceptions.DuplicateContaException;
import com.bantads.conta.lib.JsonResponse;
import com.bantads.conta.lib.ValidationViolations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;

@CrossOrigin
@RestController
public class ContaCommands {
    @Autowired
    private ContaServices serv;

    @PutMapping(value = "/contas/{id}", produces = "application/json")
    public ResponseEntity<JsonResponse> updateConta(@PathVariable("id") Long id, @RequestBody ContaDTO conta) {
        try {
            ContaDTO updated = serv.updateConta(id, conta);
            return JsonResponse.ok("Conta atualizada com sucesso!", updated);
        } catch (ContaNotFound e) {
            e.printStackTrace();
            return JsonResponse.notFound("Conta não encontrada!", null);
        } catch (Exception e) {
            e.printStackTrace();
            return JsonResponse.internalServerError("Erro ao atualizar conta!", null);
        }
    }

    @PostMapping(value = "/contas", produces = "application/json")
    public ResponseEntity<JsonResponse> createConta(@RequestBody ContaDTO conta) {
        try {
            ContaDTO created = serv.createConta(conta);

            return JsonResponse.created("Conta criada com sucesso!", created);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return JsonResponse.badRequest("O id da conta é inválido!", null);
        } catch (ConstraintViolationException e) {
            e.printStackTrace();
            ValidationViolations violations = new ValidationViolations(e.getConstraintViolations());
            return JsonResponse.badRequest("Erro de validação!", violations);
        } catch (BenignException e) {
            e.printStackTrace();
            return JsonResponse.internalServerError(e.getMessage(), null);
        }  catch (Exception e) {
            e.printStackTrace();
            return JsonResponse.internalServerError("Erro ao criar conta!", null);
        }
    }

    @DeleteMapping(value = "/contas/{id}", produces = "application/json")
    public ResponseEntity<JsonResponse> deleteAccount(@PathVariable("id") Long id) {
        try {
            serv.deleteAccount(id);
            return JsonResponse.ok("Conta deletada com sucesso!", null);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return JsonResponse.badRequest("O id da conta é inválido!", null);
        } catch (AccountNotFound e) {
            e.printStackTrace();
            return JsonResponse.notFound("Conta não encontrada!", null);
        } catch (Exception e) {
            e.printStackTrace();
            return JsonResponse.internalServerError("Erro ao deletar conta!", null);
        }
    }

}
