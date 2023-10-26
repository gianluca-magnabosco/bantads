package com.bantads.conta.lib;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class JsonResponse {
	private Boolean success;
	private String message;
	private Object data;

	public JsonResponse(Boolean success, String message, Object data) {
		this.success = success;
		this.message = message;
		this.data = data;
	}

	public static ResponseEntity<JsonResponse> ok(String message, Object data) {
		return ResponseEntity.ok(new JsonResponse(true, message, data));
	}

	public static ResponseEntity<JsonResponse> created(String message, Object data) {
		return new ResponseEntity<>(new JsonResponse(true, message, data), HttpStatus.CREATED);
	}

	public static ResponseEntity<JsonResponse> badRequest(String message, Object data) {
		return ResponseEntity.badRequest().body(new JsonResponse(false, message, data));
	}

	public static ResponseEntity<JsonResponse> notFound(String message, Object data) {
		return new ResponseEntity<>(
				new JsonResponse(false, message, data),
				HttpStatus.NOT_FOUND);
	}

	public static ResponseEntity<JsonResponse> internalServerError(String message, Object data) {
		return new ResponseEntity<>(
				new JsonResponse(false, message, data),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}

	public Boolean isSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}
