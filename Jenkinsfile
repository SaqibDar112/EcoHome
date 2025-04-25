pipeline {
    agent any

    environment {
        IMAGE_NAME = 'eco-home-win'
        CONTAINER_NAME = 'eco-home-container'
    }

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning source code...'
                // Jenkins already clones automatically if using "Pipeline from SCM"
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image: ${IMAGE_NAME}"
                sh 'docker build -t eco-home-win .'
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                echo "Removing old container if exists..."
                sh 'docker rm -f eco-home-container || true'
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
