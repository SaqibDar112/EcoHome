pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-app:latest'
        DOCKER_USERNAME = credentials('docker-username')  // Add Docker username credentials
        DOCKER_PASSWORD = credentials('docker-password')  // Add Docker password credentials
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SaqibDar112/EcoHome.git'
            }
        }

        stage('Docker Login') {
            steps {
                script {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build --no-cache -t $DOCKER_IMAGE . || (echo "Docker build failed" && exit 1)'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
            // Login to Docker Hub
                    withCredentials([usernamePassword(credentialsId: 'docker-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                sh '''
                    echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                    docker push $DOCKER_IMAGE
                '''
            }
        }
    }
}
}
}
