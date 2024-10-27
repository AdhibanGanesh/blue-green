pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'adhibanganesh/node-api:latest'
        BLUE_ENV = 'blue'
        GREEN_ENV = 'green'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from your repository
                git 'https://github.com/AdhibanGanesh/blue-green.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh "docker push ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Deploy Blue Environment') {
            steps {
                script {
                    sh "docker run -d --name ${BLUE_ENV} -p 3001:3000 ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Deploy Green Environment') {
            steps {
                script {
                    sh "docker run -d --name ${GREEN_ENV} -p 3002:3000 ${DOCKER_IMAGE}"
                }
            }
        }

        stage('Test Deployment') {
            steps {
                script {
                    // Here you can add your tests
                    echo 'Testing the deployment...'
                }
            }
        }

        stage('Switch Traffic') {
            steps {
                script {
                    // Logic to switch traffic (Load Balancer/Reverse Proxy)
                    // Example: Update your reverse proxy to point to the new version
                    echo 'Switching traffic to the new environment...'
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    sh "docker stop ${BLUE_ENV}"
                    sh "docker rm ${BLUE_ENV}"
                }
            }
        }
    }
}
