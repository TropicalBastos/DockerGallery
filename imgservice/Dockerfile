FROM openjdk:8-jdk-alpine

ARG LIB=build/libs

WORKDIR /app

COPY ${LIB}/imggallery.jar .

ENTRYPOINT ["java","-jar","imggallery.jar"]