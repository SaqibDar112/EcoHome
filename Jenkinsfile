pipeline {
    agent any

    environment {
        // Optional environment variables
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/SaqibDar112/EcoHome/'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Dockerize') {
            steps {
                script {
                    docker.build('react-app')
                }
            }
        }

        stage('Deploy Locally') {
            steps {
                script {
                    sh 'mkdir -p /tmp/ecohome-deploy'
                    sh 'cp -r build/* /tmp/ecohome-deploy/'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Stop and remove any old container if running
                    sh 'docker rm -f ecohome-container || true'
                    // Run the new container
                    sh 'docker run -d -p 3000:3000 --name ecohome-container react-app'
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Clean Up') {
            steps {
                sh 'docker system prune -f'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}