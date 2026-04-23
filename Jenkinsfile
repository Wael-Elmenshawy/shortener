pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t wael-shortener .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop shortener || true
                docker rm shortener || true
                docker run -d -p 3000:3000 --name shortener wael-shortener
                '''
            }
        }
    }
}
