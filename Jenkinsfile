pipeline {
    agent any

    environment {
        IMAGE_NAME = 'eco-home-win'
        CONTAINER_NAME = 'eco-home-container'
        HOST_PORT = '3000'
        CONTAINER_PORT = '80'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                echo "Building Docker image: ${IMAGE_NAME}"
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                echo "Removing old container if exists..."
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage('Run New Container') {
            steps {
                echo "Running new container..."
                sh 'docker run -d -p 3000:80 --name eco-home-container eco-home-win'
            }
        }
    }
}