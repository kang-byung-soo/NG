FROM openjdk:11
WORKDIR /var/jenkins_home/workspace/deploy-test/backend/NG
COPY ./ /var/jenkins_home/workspace/deploy-test/backend/NG
RUN chmod +x gradlew
RUN ./gradlew clean build
ARG JAR_FILE=/build/libs/*.jar
COPY ${JAR_FILE} NG.jar
ENTRYPOINT ["java", "-jar", "NG.jar"]