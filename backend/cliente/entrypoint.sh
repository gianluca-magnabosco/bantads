#!/bin/bash

./mvnw clean package -DskipTests
cp target/cliente-*.jar /app.jar
eval "$@"
