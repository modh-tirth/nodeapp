pipeline {
    agent { label 'agent-1' }

    environment {
        IMAGE_NAME = "docker-demo-app"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop demo-container || true
                docker rm demo-container || true
                docker run -d -p 3000:3000 --name demo-container $IMAGE_NAME
                '''
            }
        }
    }
}
