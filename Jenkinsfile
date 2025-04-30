pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'react-app:latest'
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
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // You can add Docker login and push logic here if needed
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }
    }
}
