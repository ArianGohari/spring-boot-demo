FROM openjdk:22-jdk-slim
WORKDIR /app
COPY . .
ARG OPENAI_API_KEY=${OPENAI_API_KEY}
ARG MONGODB_URI=${MONGODB_URI}
ARG MONGODB_DATABASE=${MONGODB_DATABASE}
RUN chmod +x ./gradlew
RUN ./gradlew build
EXPOSE 8080
ENTRYPOINT ["sh", "-c", "java -jar $(ls build/libs/*.jar)"]
