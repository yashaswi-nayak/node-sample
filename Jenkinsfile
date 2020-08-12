pipeline {
    agent {
        label 'slave01'
    }
    
    environment {
        CURR_VER = '$BUILD_NUMBER'
        PRE_VER  = "\$(expr $BUILD_NUMBER - 1)"
    }

    tools {nodejs "Node8"}
        
    stages {
        
        stage('Build'){
            steps {
                sh "echo ${env.CURR_VER}"
                sh "echo ${env.PRE_VER}"
                sh "echo  \$(echo 'FUN YAY' && echo \${env.PRE_VER})"
                sh 'npm install'
            }
       }

       stage('Test'){
           steps {
                sh 'npm run test'
           }
       }

       stage('Deploy'){
           steps {
            echo 'Serving'
           }
       }
    }
}
