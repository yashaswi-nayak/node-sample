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
                env.NODE_ENV = "test"

                print "Environment will be : ${env.NODE_ENV}"

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