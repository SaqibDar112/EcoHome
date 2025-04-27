pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "react-app"
        DOCKER_TAG = "latest"
        DOCKER_REGISTRY = "localhost:5000" // Or the appropriate Docker registry
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SaqibDar112/EcoHome/'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests (if you have any tests)
                    sh 'docker run --rm $DOCKER_IMAGE:$DOCKER_TAG npm test'
                }
            }
        }

        stage('Push') {
            steps {
                script {
                    // Push Docker image to your Docker registry
                    sh 'docker push $DOCKER_REGISTRY/$DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker container (can be locally or on a server)
                    sh 'docker run -d -p 3001:3000 --name ecohome-container $DOCKER_IMAGE:$DOCKER_TAG'
                }
            }
        }
    }

    post {
        always {
            // Cleanup (stop and remove the container if necessary)
            sh 'docker rm -f ecohome-container || true'
        }
    }
}
