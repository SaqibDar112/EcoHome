pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-app:latest'
        DOCKER_CREDENTIALS = 'docker-cred' // Use your Docker Hub credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SaqibDar112/EcoHome.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('saqibdar/react-app:latest')
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: "$DOCKER_CREDENTIALS", usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        // Log in to Docker Hub using credentials
                        sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                        // Push the Docker image to Docker Hub
                        sh "docker push saqibdar/react-app:latest"
                    }
                }
            }
        }
    }