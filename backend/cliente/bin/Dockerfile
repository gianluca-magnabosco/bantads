FROM adoptopenjdk/openjdk11:latest
VOLUME /tmp
COPY target/cliente-*.jar app.jar
ENTRYPOINT [ "java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar" ]