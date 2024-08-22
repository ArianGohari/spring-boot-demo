FROM openjdk:22-jdk-slim
CMD ["./gradlew" "build"]
COPY build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
