FROM anapsix/alpine-java

ARG LIB=build/libs

WORKDIR /app

COPY ${LIB}/imggallery.jar .
COPY wait-for-it.sh .

RUN chmod +x wait-for-it.sh

ENTRYPOINT ["./wait-for-it.sh", "db:3306", "--", "java", "-jar", "imggallery.jar"]