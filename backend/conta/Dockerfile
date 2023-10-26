FROM adoptopenjdk/openjdk11:latest
VOLUME /tmp
COPY ./entrypoint.sh /app/entrypoint.sh
WORKDIR /app

ENTRYPOINT ["/app/entrypoint.sh"]
CMD [ "java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar" ]