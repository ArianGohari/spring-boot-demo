FROM openjdk:22-jdk-slim
# Set the working directory in the container
WORKDIR /app
COPY . .
RUN chmod +x ./gradlew
RUN ./gradlew build
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
