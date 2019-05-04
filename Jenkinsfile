pipeline {
    agent any

    tools {nodejs "Node8"}

    stages {
        stage('Build'){
            steps {
                sh 'npm install'
            }
       }

       stage('Test'){
           steps {
                sh 'npm test'
           }
       }

       stage('Deploy'){
           steps {
            echo 'Serving'
            sh 'npm run start'
           }
       }
    }
}